"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";

export default function AuthGate() {
  const { signup, login, error, cloud } = useStore();
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [familyName, setFamilyName] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    if (mode === "signup") await signup(familyName, password, pin);
    else await login(familyName, password);
    setBusy(false);
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl card-shadow p-8">
        <div className="text-center mb-6">
          <div className="text-5xl mb-2 animate-floaty">🧮</div>
          <h1 className="text-2xl font-black text-violet-700">Maths Quest</h1>
          <p className="text-gray-500 text-sm">Year 6 · CBSE · learn by solving</p>
        </div>

        {!cloud && (
          <div className="mb-4 text-sm bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-3">
            Cloud sync isn&apos;t connected yet, so accounts are unavailable. You can still use the
            app on this device — your progress is saved in this browser.
          </div>
        )}

        <div className="flex bg-violet-50 rounded-full p-1 mb-5">
          {(["signup", "login"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 py-2 rounded-full text-sm font-bold transition ${
                mode === m ? "bg-violet-600 text-white" : "text-violet-600"
              }`}
            >
              {m === "signup" ? "Create family" : "Log in"}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="space-y-3">
          <Field label="Family name" value={familyName} onChange={setFamilyName} placeholder="e.g. The Sharmas" />
          <Field label="Password" type="password" value={password} onChange={setPassword} placeholder="At least 4 characters" />
          {mode === "signup" && (
            <Field label="Parent PIN (4–6 digits)" type="password" value={pin} onChange={setPin} placeholder="Used for the parent area" inputMode="numeric" />
          )}
          {error && <p className="text-rose-600 text-sm font-semibold">{error}</p>}
          <button
            type="submit"
            disabled={busy || !cloud}
            className="w-full py-3 rounded-xl bg-violet-600 text-white font-bold disabled:opacity-50 hover:bg-violet-700 transition"
          >
            {busy ? "Please wait…" : mode === "signup" ? "Create family account" : "Log in"}
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          One family account holds several learners. The parent PIN unlocks the progress dashboard.
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  inputMode?: "numeric";
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-gray-600">{label}</span>
      <input
        className="mt-1 w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 outline-none"
        type={type}
        inputMode={inputMode}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
