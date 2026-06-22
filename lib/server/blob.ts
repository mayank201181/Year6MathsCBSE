import { put, head, del } from "@vercel/blob";

// Thin JSON KV over Vercel Blob. Reads are made fresh (no CDN staleness).

export async function writeJson(key: string, value: unknown): Promise<void> {
  await put(key, JSON.stringify(value), {
    access: "public",
    contentType: "application/json",
    cacheControlMaxAge: 0,
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export async function readJson<T>(key: string): Promise<T | null> {
  try {
    const meta = await head(key);
    if (!meta?.url) return null;
    const res = await fetch(`${meta.url}?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    // head() throws (BlobNotFoundError) when the key doesn't exist.
    return null;
  }
}

export async function deleteJson(key: string): Promise<void> {
  try {
    const meta = await head(key);
    if (meta?.url) await del(meta.url);
  } catch {
    // already gone
  }
}

export function hasBlob(): boolean {
  return !!process.env.BLOB_READ_WRITE_TOKEN;
}
