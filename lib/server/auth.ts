import { scryptSync, randomBytes, timingSafeEqual, createHmac } from "crypto";
import { cookies } from "next/headers";
import { readJson, writeJson } from "./blob";
import type { Account } from "../profileTypes";

const COOKIE = "y6m_session";
const SECRET = process.env.AUTH_SECRET || "dev-insecure-secret-change-me";

// ---- password / pin hashing (scrypt) ----
export function hashSecret(secret: string): { hash: string; salt: string } {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(secret, salt, 64).toString("hex");
  return { hash, salt };
}

export function verifySecret(secret: string, hash: string, salt: string): boolean {
  try {
    const candidate = scryptSync(secret, salt, 64);
    const known = Buffer.from(hash, "hex");
    return candidate.length === known.length && timingSafeEqual(candidate, known);
  } catch {
    return false;
  }
}

// ---- signed session tokens ----
export function signToken(accountId: string): string {
  const payload = `${accountId}.${Date.now()}`;
  const sig = createHmac("sha256", SECRET).update(payload).digest("hex");
  return `${Buffer.from(payload).toString("base64url")}.${sig}`;
}

export function verifyToken(token: string): string | null {
  const [b64, sig] = token.split(".");
  if (!b64 || !sig) return null;
  const payload = Buffer.from(b64, "base64url").toString();
  const expected = createHmac("sha256", SECRET).update(payload).digest("hex");
  if (sig.length !== expected.length) return null;
  if (!timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  return payload.split(".")[0] || null;
}

// ---- account storage ----
const accountKey = (id: string) => `accounts/${id}.json`;
const familyIndexKey = (familyName: string) =>
  `accounts/by-name/${familyName.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-")}.json`;

export async function getAccount(id: string): Promise<Account | null> {
  return readJson<Account>(accountKey(id));
}

export async function saveAccount(account: Account): Promise<void> {
  await writeJson(accountKey(account.id), account);
  await writeJson(familyIndexKey(account.familyName), { id: account.id });
}

export async function findAccountByName(familyName: string): Promise<Account | null> {
  const ref = await readJson<{ id: string }>(familyIndexKey(familyName));
  if (!ref?.id) return null;
  return getAccount(ref.id);
}

// ---- session cookie helpers ----
export async function setSession(accountId: string): Promise<void> {
  const store = await cookies();
  store.set(COOKIE, signToken(accountId), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 180,
  });
}

export async function clearSession(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE);
}

export async function currentAccount(): Promise<Account | null> {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (!token) return null;
  const id = verifyToken(token);
  if (!id) return null;
  return getAccount(id);
}
