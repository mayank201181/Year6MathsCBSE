import { currentAccount } from "@/lib/server/auth";
import { hasBlob } from "@/lib/server/blob";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const account = await currentAccount();
  if (!account) {
    return Response.json({ account: null, cloud: hasBlob() });
  }
  return Response.json({
    account: { id: account.id, familyName: account.familyName, profiles: account.profiles },
    cloud: hasBlob(),
  });
}
