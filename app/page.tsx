"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { TOPICS } from "@/lib/topics";
import { rankFor, nextRank } from "@/lib/ranks";

export default function Home() {
  const { activeProfile, progress, setGoal } = useStore();
  const stars = progress?.stars || 0;
  const rank = rankFor(stars);
  const next = nextRank(stars);
  const todayKey = new Date().toISOString().slice(0, 10);
  const todayMin = progress?.analytics.perDay[todayKey]?.minutes || 0;
  const goal = progress?.goalMinutes || 15;
  const goalPct = Math.min(100, Math.round((todayMin / goal) * 100));

  return (
    <div className="space-y-6">
      {/* hero */}
      <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-6 text-white">
        <h1 className="text-2xl sm:text-3xl font-black">
          Hi {activeProfile?.name} {activeProfile?.avatar}
        </h1>
        <p className="opacity-90 mt-1">Ready to solve some maths today?</p>
        <div className="flex flex-wrap gap-3 mt-4">
          <Stat label="Stars" value={`⭐ ${stars}`} />
          <Stat label="Rank" value={`${rank.emoji} ${rank.name}`} />
          <Stat label="Streak" value={`🔥 ${progress?.streak.count || 0} day${progress?.streak.count === 1 ? "" : "s"}`} />
        </div>
        {next && (
          <p className="text-sm opacity-90 mt-3">
            {next.minStars - stars} ⭐ to reach {next.emoji} {next.name}
          </p>
        )}
      </div>

      {/* daily goal */}
      <div className="bg-white rounded-2xl card-shadow p-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-black text-violet-700">⏱️ Today&apos;s goal</h2>
          <select
            value={goal}
            onChange={(e) => setGoal(+e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-2 py-1"
          >
            {[10, 15, 20, 30, 45].map((g) => (
              <option key={g} value={g}>
                {g} min
              </option>
            ))}
          </select>
        </div>
        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all"
            style={{ width: `${goalPct}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {Math.round(todayMin)} / {goal} minutes {goalPct >= 100 ? "🎉 done!" : ""}
        </p>
      </div>

      {/* quick links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <QuickLink href="/review" emoji="🔁" label="Review" sub={`${(progress?.srs || []).filter((s) => s.dueAt <= Date.now()).length} due`} />
        <QuickLink href="/exam" emoji="📝" label="Big Exam" sub="All topics" />
        <QuickLink href="/certificate" emoji="🏅" label="Certificate" sub={rank.name} />
        <QuickLink href="/parent" emoji="👨‍👩‍👧" label="Parent" sub="Progress" />
      </div>

      {/* topics */}
      <div>
        <h2 className="font-black text-xl text-gray-800 mb-3">Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TOPICS.map((t) => {
            const total = t.quiz.mcq.length + t.quiz.qa.length;
            const done = [...t.quiz.mcq, ...t.quiz.qa].filter(
              (q) => (progress?.attempts[q.id]?.correct || 0) > 0,
            ).length;
            const read = progress?.guidesRead.includes(t.id);
            const pct = total ? Math.round((done / total) * 100) : 0;
            return (
              <Link
                key={t.id}
                href={`/topic/${t.id}`}
                className="bg-white rounded-2xl card-shadow p-4 flex items-center gap-3 hover:scale-[1.02] transition"
              >
                <span className="text-3xl" style={{ filter: "saturate(1.2)" }}>
                  {t.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-gray-800 truncate">
                    {t.title} {read && <span title="Guide read">📖</span>}
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: t.color }} />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {done}/{total} questions mastered
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/20 rounded-xl px-3 py-2">
      <div className="text-xs opacity-80">{label}</div>
      <div className="font-black">{value}</div>
    </div>
  );
}

function QuickLink({ href, emoji, label, sub }: { href: string; emoji: string; label: string; sub: string }) {
  return (
    <Link href={href} className="bg-white rounded-2xl card-shadow p-4 text-center hover:scale-[1.03] transition">
      <div className="text-2xl">{emoji}</div>
      <div className="font-black text-sm text-gray-800 mt-1">{label}</div>
      <div className="text-xs text-gray-400">{sub}</div>
    </Link>
  );
}
