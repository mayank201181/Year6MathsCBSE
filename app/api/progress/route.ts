import { currentAccount } from "@/lib/server/auth";
import { readJson, writeJson } from "@/lib/server/blob";
import { emptyProgress, type ProgressDoc } from "@/lib/profileTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const key = (accountId: string, profileId: string) => `progress/${accountId}/${profileId}.json`;

export async function GET(request: Request) {
  const account = await currentAccount();
  if (!account) return Response.json({ error: "Not signed in." }, { status: 401 });
  const url = new URL(request.url);
  const profileId = url.searchParams.get("profileId") || "";
  if (!account.profiles.some((p) => p.id === profileId))
    return Response.json({ error: "Unknown learner." }, { status: 404 });

  const doc = (await readJson<ProgressDoc>(key(account.id, profileId))) || emptyProgress(profileId);
  return Response.json({ progress: doc });
}

export async function POST(request: Request) {
  const account = await currentAccount();
  if (!account) return Response.json({ error: "Not signed in." }, { status: 401 });
  const body = await request.json().catch(() => null);
  const doc = body?.progress as ProgressDoc | undefined;
  if (!doc?.profileId || !account.profiles.some((p) => p.id === doc.profileId))
    return Response.json({ error: "Unknown learner." }, { status: 404 });

  doc.updatedAt = Date.now();
  await writeJson(key(account.id, doc.profileId), doc);
  return Response.json({ ok: true, updatedAt: doc.updatedAt });
}
