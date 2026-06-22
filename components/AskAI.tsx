"use client";

import { useState } from "react";

const PRESETS = [
  { label: "Explain simply", prompt: "Explain this topic simply for me." },
  { label: "Give an example", prompt: "Can you give me a worked example?" },
  { label: "Explain why", prompt: "Explain why this works." },
  { label: "Hint", prompt: "I'm stuck — give me just one hint, not the answer." },
];

export default function AskAI({ context }: { context: string }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState("");
  const [thread, setThread] = useState<{ role: "you" | "pi"; text: string }[]>([]);

  async function ask(message: string) {
    if (!message.trim() || busy) return;
    setThread((t) => [...t, { role: "you", text: message }]);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, context }),
      });
      const data = await res.json();
      setThread((t) => [...t, { role: "pi", text: data.reply || data.error || "Hmm, try again." }]);
    } catch {
      setThread((t) => [...t, { role: "pi", text: "I couldn't reach the tutor. Try again in a moment." }]);
    }
    setBusy(false);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm hover:opacity-90"
      >
        🦉 Ask Professor Pi
      </button>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-violet-200 card-shadow p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-black text-violet-700">🦉 Professor Pi</span>
        <button onClick={() => setOpen(false)} className="text-gray-300 hover:text-gray-500">
          ✕
        </button>
      </div>

      <div className="max-h-60 overflow-y-auto space-y-2 mb-3">
        {thread.length === 0 && (
          <p className="text-sm text-gray-400">
            Ask me anything about this topic. I&apos;ll guide you with hints — not just answers!
          </p>
        )}
        {thread.map((m, i) => (
          <div
            key={i}
            className={`text-sm rounded-xl px-3 py-2 ${
              m.role === "you" ? "bg-violet-50 ml-6" : "bg-amber-50 mr-6"
            }`}
          >
            <span className="font-bold">{m.role === "you" ? "You" : "Pi"}: </span>
            {m.text}
          </div>
        ))}
        {busy && <p className="text-sm text-gray-400">Pi is thinking… 🤔</p>}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-2">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            onClick={() => ask(p.prompt)}
            disabled={busy}
            className="text-xs px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 font-bold disabled:opacity-50"
          >
            {p.label}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        className="flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question…"
          className="flex-1 px-3 py-2 rounded-xl border border-gray-200 text-sm outline-none focus:border-violet-400"
        />
        <button
          type="submit"
          disabled={busy}
          className="px-4 py-2 rounded-xl bg-violet-600 text-white font-bold text-sm disabled:opacity-50"
        >
          Ask
        </button>
      </form>
    </div>
  );
}
