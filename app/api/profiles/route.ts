import { randomUUID } from "crypto";
import { currentAccount, saveAccount } from "@/lib/server/auth";
import { deleteJson } from "@/lib/server/blob";
import type { Profile } from "@/lib/profileTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_PROFILES = 6;

export async function POST(request: Request) {
  const account = await currentAccount();
  if (!account) return Response.json({ error: "Not signed in." }, { status: 401 });
  const body = await request.json().catch(() => null);
  const name = (body?.name || "").trim();
  const avatar = (body?.avatar || "🦉").trim();
  if (name.length < 1) return Response.json({ error: "Please enter a name." }, { status: 400 });
  if (account.profiles.length >= MAX_PROFILES)
    return Response.json({ error: "That's the maximum number of learners." }, { status: 400 });

  const profile: Profile = { id: randomUUID(), name, avatar, createdAt: Date.now() };
  account.profiles.push(profile);
  await saveAccount(account);
  return Response.json({ profile, profiles: account.profiles });
}

export async function PATCH(request: Request) {
  const account = await currentAccount();
  if (!account) return Response.json({ error: "Not signed in." }, { status: 401 });
  const body = await request.json().catch(() => null);
  const id = body?.id;
  const profile = account.profiles.find((p) => p.id === id);
  if (!profile) return Response.json({ error: "Learner not found." }, { status: 404 });
  if (typeof body.name === "string" && body.name.trim()) profile.name = body.name.trim();
  if (typeof body.avatar === "string" && body.avatar.trim()) profile.avatar = body.avatar.trim();
  await saveAccount(account);
  return Response.json({ profiles: account.profiles });
}

export async function DELETE(request: Request) {
  const account = await currentAccount();
  if (!account) return Response.json({ error: "Not signed in." }, { status: 401 });
  const body = await request.json().catch(() => null);
  const id = body?.id;
  const before = account.profiles.length;
  account.profiles = account.profiles.filter((p) => p.id !== id);
  if (account.profiles.length === before)
    return Response.json({ error: "Learner not found." }, { status: 404 });
  await saveAccount(account);
  await deleteJson(`progress/${account.id}/${id}.json`);
  return Response.json({ profiles: account.profiles });
}
