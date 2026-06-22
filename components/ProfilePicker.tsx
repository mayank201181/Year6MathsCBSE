"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";

const AVATARS = ["🦉", "🦊", "🐼", "🦄", "🐲", "🐯", "🐧", "🦁", "🐨", "🐸", "🦖", "🐙"];

export default function ProfilePicker() {
  const { account, createProfile, deleteProfile, editProfile, selectProfile, logout, error } =
    useStore();
  const [adding, setAdding] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(AVATARS[0]);

  const profiles = account?.profiles || [];

  function startAdd() {
    setAdding(true);
    setEditId(null);
    setName("");
    setAvatar(AVATARS[Math.floor(Math.random() * AVATARS.length)]);
  }
  function startEdit(id: string, n: string, a: string) {
    setEditId(id);
    setAdding(false);
    setName(n);
    setAvatar(a);
  }

  async function save() {
    if (!name.trim()) return;
    if (editId) await editProfile(editId, name.trim(), avatar);
    else await createProfile(name.trim(), avatar);
    setAdding(false);
    setEditId(null);
    setName("");
  }

  const showForm = adding || editId;

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-black text-center text-violet-700 mb-1">Who&apos;s studying?</h1>
        <p className="text-center text-gray-500 mb-8">Pick your learner profile</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {profiles.map((p) => (
            <div key={p.id} className="relative group">
              <button
                onClick={() => selectProfile(p.id)}
                className="w-full bg-white rounded-3xl card-shadow p-6 flex flex-col items-center gap-2 hover:scale-105 transition"
              >
                <span className="text-5xl">{p.avatar}</span>
                <span className="font-bold text-gray-700">{p.name}</span>
              </button>
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => startEdit(p.id, p.name, p.avatar)}
                  className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-xs"
                  aria-label={`Edit ${p.name}`}
                >
                  ✏️
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Remove ${p.name}? Their progress will be deleted.`)) deleteProfile(p.id);
                  }}
                  className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs"
                  aria-label={`Delete ${p.name}`}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}

          {!showForm && (
            <button
              onClick={startAdd}
              className="bg-white/60 border-2 border-dashed border-violet-300 rounded-3xl p-6 flex flex-col items-center justify-center gap-2 text-violet-600 hover:bg-white transition min-h-[140px]"
            >
              <span className="text-4xl">＋</span>
              <span className="font-bold">Add learner</span>
            </button>
          )}
        </div>

        {showForm && (
          <div className="mt-6 bg-white rounded-3xl card-shadow p-6">
            <h2 className="font-black text-lg text-violet-700 mb-3">
              {editId ? "Edit learner" : "New learner"}
            </h2>
            <input
              autoFocus
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-violet-400 outline-none mb-3"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex flex-wrap gap-2 mb-4">
              {AVATARS.map((a) => (
                <button
                  key={a}
                  onClick={() => setAvatar(a)}
                  className={`text-2xl w-11 h-11 rounded-xl ${
                    avatar === a ? "bg-violet-200 ring-2 ring-violet-400" : "bg-gray-100"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
            {error && <p className="text-rose-600 text-sm mb-2">{error}</p>}
            <div className="flex gap-2">
              <button onClick={save} className="flex-1 py-2.5 rounded-xl bg-violet-600 text-white font-bold">
                Save
              </button>
              <button
                onClick={() => {
                  setAdding(false);
                  setEditId(null);
                }}
                className="px-4 py-2.5 rounded-xl bg-gray-100 font-bold text-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <button onClick={logout} className="text-sm text-gray-400 hover:text-gray-600">
            Log out of {account?.familyName}
          </button>
        </div>
      </div>
    </div>
  );
}
