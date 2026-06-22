import { hasBlob } from "@/lib/server/blob";
import { findAccountByName, verifySecret, setSession } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!hasBlob()) {
    return Response.json(
      { error: "Cloud sync isn't set up yet. Ask a grown-up to connect Vercel Blob." },
      { status: 503 },
    );
  }
  const body = await request.json().catch(() => null);
  const familyName = (body?.familyName || "").trim();
  const password = (body?.password || "").trim();

  const account = await findAccountByName(familyName);
  if (!account || !verifySecret(password, account.passwordHash, account.passwordSalt)) {
    return Response.json({ error: "Wrong family name or password." }, { status: 401 });
  }
  await setSession(account.id);
  return Response.json({
    account: { id: account.id, familyName: account.familyName, profiles: account.profiles },
  });
}
