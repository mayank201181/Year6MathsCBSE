import { randomUUID } from "crypto";
import { hasBlob } from "@/lib/server/blob";
import {
  hashSecret,
  saveAccount,
  findAccountByName,
  setSession,
} from "@/lib/server/auth";
import type { Account } from "@/lib/profileTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function publicAccount(a: Account) {
  return { id: a.id, familyName: a.familyName, profiles: a.profiles };
}

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
  const pin = (body?.pin || "").trim();

  if (familyName.length < 2) return Response.json({ error: "Please enter a family name." }, { status: 400 });
  if (password.length < 4) return Response.json({ error: "Password must be at least 4 characters." }, { status: 400 });
  if (!/^\d{4,6}$/.test(pin)) return Response.json({ error: "PIN must be 4–6 digits." }, { status: 400 });

  const existing = await findAccountByName(familyName);
  if (existing) return Response.json({ error: "That family name is already taken." }, { status: 409 });

  const pw = hashSecret(password);
  const pn = hashSecret(pin);
  const account: Account = {
    id: randomUUID(),
    familyName,
    passwordHash: pw.hash,
    passwordSalt: pw.salt,
    pinHash: pn.hash,
    pinSalt: pn.salt,
    profiles: [],
    createdAt: Date.now(),
  };
  await saveAccount(account);
  await setSession(account.id);
  return Response.json({ account: publicAccount(account) });
}
