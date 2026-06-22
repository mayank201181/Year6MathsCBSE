"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/lib/store";

export default function Header() {
  const { activeProfile, progress, rank, dueReviews, logout, switchProfile } = useStore();
  const [menu, setMenu] = useState(false);

  return (
    <header className="no-print sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-violet-100">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 font-black text-violet-700">
          <span className="text-2xl">🧮</span>
          <span className="hidden sm:inline">Maths Quest</span>
        </Link>

        <div className="flex-1" />

        <Link
          href="/review"
          className="relative flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 font-bold text-sm hover:bg-amber-100"
        >
          🔁 Review
          {dueReviews > 0 && (
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              {dueReviews}
            </span>
          )}
        </Link>

        <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-yellow-50 text-yellow-700 font-bold text-sm">
          ⭐ {progress?.stars ?? 0}
        </div>

        {progress && progress.streak.count > 0 && (
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 font-bold text-sm">
            🔥 {progress.streak.count}
          </div>
        )}

        <div className="relative">
          <button
            onClick={() => setMenu((m) => !m)}
            className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-violet-50"
          >
            <span className="text-2xl">{activeProfile?.avatar}</span>
            <span className="hidden sm:flex flex-col items-start leading-none">
              <span className="font-bold text-sm text-gray-700">{activeProfile?.name}</span>
              <span className="text-[11px] text-violet-500">
                {rank.emoji} {rank.name}
              </span>
            </span>
          </button>
          {menu && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white rounded-2xl card-shadow border border-gray-100 p-2 text-sm"
              onMouseLeave={() => setMenu(false)}
            >
              <Link href="/" className="block px-3 py-2 rounded-lg hover:bg-violet-50" onClick={() => setMenu(false)}>
                🏠 Home
              </Link>
              <Link href="/parent" className="block px-3 py-2 rounded-lg hover:bg-violet-50" onClick={() => setMenu(false)}>
                👨‍👩‍👧 Parent area
              </Link>
              <button
                onClick={() => {
                  setMenu(false);
                  switchProfile();
                }}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-violet-50"
              >
                🔄 Switch learner
              </button>
              <button
                onClick={() => {
                  setMenu(false);
                  logout();
                }}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-rose-50 text-rose-600"
              >
                🚪 Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
