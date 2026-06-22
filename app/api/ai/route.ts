import Anthropic from "@anthropic-ai/sdk";
import { currentAccount } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM = `You are "Professor Pi", a warm, encouraging maths tutor for a 10–11 year old (CBSE Class 6) in India.

Your teaching style is Art of Problem Solving:
- NEVER give the full final answer to a problem the learner has posed, unless they explicitly say they give up. Instead, ask a guiding question or give only the SINGLE next hint.
- Help them discover the idea. Reward and build on their reasoning ("Good thinking — what if…").
- Explain WHY things work, not just rules. When there is an elegant shortcut, mention it after they understand the basic way.
- Keep it short, friendly and age-appropriate. Use simple words and small numbers in examples. Plain text maths (no LaTeX).
- If asked for a definition or "explain simply", you may explain the concept fully — that is teaching, not giving away a posed problem's answer.
- Politely refuse and redirect anything not about Class 6 maths or schoolwork.`;

export async function POST(request: Request) {
  const account = await currentAccount();
  if (!account) {
    return Response.json({ error: "Please sign in to use the tutor." }, { status: 401 });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      {
        error:
          "The AI tutor isn't switched on yet. Ask a grown-up to add an Anthropic API key, and I'll be ready to help!",
      },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => null);
  const userMessage = (body?.message || "").toString().slice(0, 2000);
  const context = (body?.context || "").toString().slice(0, 1500);
  if (!userMessage.trim()) {
    return Response.json({ error: "Please type a question." }, { status: 400 });
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const model = process.env.AI_MODEL || "claude-opus-4-8";

  try {
    const msg = await client.messages.create({
      model,
      max_tokens: 800,
      system: SYSTEM,
      messages: [
        {
          role: "user",
          content: context
            ? `The learner is studying: ${context}\n\nTheir message: ${userMessage}`
            : userMessage,
        },
      ],
    });
    const text = msg.content
      .filter((b) => b.type === "text")
      .map((b) => (b as { text: string }).text)
      .join("\n")
      .trim();
    return Response.json({ reply: text || "Let's try that again — can you tell me a bit more?" });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      return Response.json(
        { error: "I'm a bit busy right now — try again in a moment!" },
        { status: 429 },
      );
    }
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
