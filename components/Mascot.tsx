"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";

// "Professor Pi" — a dismissible mascot that reads store state and shows one
// contextual nudge (streak, due reviews, daily goal, progress).
export default function Mascot() {
  const { status, progress, dueReviews, rank, next } = useStore();
  const [open, setOpen] = useState(true);

  if (status !== "ready" || !progress) return null;

  const todayKey = new Date().toISOString().slice(0, 10);
  const todayMin = progress.analytics.perDay[todayKey]?.minutes || 0;
  const goal = progress.goalMinutes || 15;

  let nudge = "Ready for a maths adventure? Pick a topic to begin!";
  if (dueReviews > 0) {
    nudge = `You have ${dueReviews} review${dueReviews > 1 ? "s" : ""} due. A quick review keeps ideas fresh! 🔁`;
  } else if (todayMin < goal) {
    nudge = `${Math.max(0, Math.round(goal - todayMin))} more minute${
      Math.round(goal - todayMin) === 1 ? "" : "s"
    } to hit today's goal. You can do it! ⏱️`;
  } else if (next) {
    const togo = next.minStars - progress.stars;
    nudge = `Only ${togo} ⭐ to become ${next.emoji} ${next.name}!`;
  } else {
    nudge = `You're a ${rank.emoji} ${rank.name} — amazing work!`;
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="no-print fixed bottom-4 left-4 z-40 text-4xl animate-floaty"
        aria-label="Show Professor Pi"
      >
        🦉
      </button>
    );
  }

  return (
    <div className="no-print fixed bottom-4 left-4 z-40 max-w-xs">
      <div className="bg-white rounded-2xl card-shadow border border-violet-100 p-3 flex gap-2 items-start">
        <span className="text-3xl">🦉</span>
        <div className="flex-1">
          <div className="text-xs font-black text-violet-600">Professor Pi</div>
          <p className="text-sm text-gray-700">{nudge}</p>
        </div>
        <button onClick={() => setOpen(false)} className="text-gray-300 hover:text-gray-500" aria-label="Dismiss">
          ✕
        </button>
      </div>
    </div>
  );
}
