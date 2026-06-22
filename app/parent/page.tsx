"use client";

import { useState } from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { TOPICS } from "@/lib/topics";
import type { Profile, ProgressDoc } from "@/lib/profileTypes";
import { rankFor } from "@/lib/ranks";

type Learner = { profile: Profile; progress: ProgressDoc };

export default function ParentPage() {
  const { cloud, progress: localProgress, activeProfile } = useStore();
  const [pin, setPin] = useState("");
  const [learners, setLearners] = useState<Learner[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function unlock(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await fetch("/api/parent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    });
    const data = await res.json();
    if (!res.ok) setError(data.error || "Could not unlock.");
    else setLearners(data.learners);
    setBusy(false);
  }

  // In guest (no-cloud) mode there is no PIN — show the local learner directly.
  if (!cloud) {
    const fallback: Learner[] =
      activeProfile && localProgress ? [{ profile: activeProfile, progress: localProgress }] : [];
    return <Dashboard learners={fallback} note="Single-device mode — showing this device's learner." />;
  }

  if (!learners) {
    return (
      <div className="max-w-sm mx-auto py-12">
        <Link href="/" className="text-sm text-violet-500 font-bold">← Home</Link>
        <div className="bg-white rounded-3xl card-shadow p-8 mt-3 text-center">
          <div className="text-5xl mb-2">🔒</div>
          <h1 className="text-xl font-black text-violet-700">Parent area</h1>
          <p className="text-sm text-gray-500 mb-4">Enter your PIN to see progress for all learners.</p>
          <form onSubmit={unlock} className="space-y-3">
            <input
              type="password"
              inputMode="numeric"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="PIN"
              className="w-full text-center tracking-widest px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-400 outline-none"
            />
            {error && <p className="text-rose-600 text-sm">{error}</p>}
            <button disabled={busy} className="w-full py-3 rounded-xl bg-violet-600 text-white font-bold disabled:opacity-50">
              {busy ? "Checking…" : "Unlock"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <Dashboard learners={learners} />;
}

function Dashboard({ learners, note }: { learners: Learner[]; note?: string }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-violet-700">👨‍👩‍👧 Progress dashboard</h1>
        <Link href="/" className="text-sm text-violet-500 font-bold">← Home</Link>
      </div>
      {note && <p className="text-sm text-gray-400">{note}</p>}
      {learners.length === 0 && <p className="text-gray-500">No learners yet.</p>}
      {learners.map((l) => (
        <LearnerCard key={l.profile.id} learner={l} />
      ))}
    </div>
  );
}

function LearnerCard({ learner }: { learner: Learner }) {
  const { profile, progress } = learner;
  const totalAnswered = Object.values(progress.attempts).reduce((n, a) => n + a.total, 0);
  const totalCorrect = Object.values(progress.attempts).reduce((n, a) => n + a.correct, 0);
  const accuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const rank = rankFor(progress.stars);

  // this week chart
  const days: { label: string; min: number }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    const key = d.toISOString().slice(0, 10);
    days.push({ label: d.toLocaleDateString("en", { weekday: "short" })[0], min: Math.round(progress.analytics.perDay[key]?.minutes || 0) });
  }
  const maxMin = Math.max(10, ...days.map((d) => d.min));

  return (
    <div className="bg-white rounded-2xl card-shadow p-5 space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{profile.avatar}</span>
        <div>
          <div className="font-black text-gray-800">{profile.name}</div>
          <div className="text-xs text-violet-500">{rank.emoji} {rank.name}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Metric label="Stars" value={`⭐ ${progress.stars}`} />
        <Metric label="Time on task" value={`${Math.round(progress.analytics.totalMinutes)} min`} />
        <Metric label="Accuracy" value={`${accuracy}%`} />
        <Metric label="Streak" value={`🔥 ${progress.streak.count}`} />
      </div>

      {/* this week */}
      <div>
        <div className="text-xs font-black text-gray-500 uppercase mb-2">This week (minutes)</div>
        <div className="flex items-end gap-2 h-24">
          {days.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full bg-violet-100 rounded-t-md flex items-end" style={{ height: "100%" }}>
                <div className="w-full bg-violet-500 rounded-t-md" style={{ height: `${(d.min / maxMin) * 100}%` }} />
              </div>
              <span className="text-[10px] text-gray-400">{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* per topic */}
      <div>
        <div className="text-xs font-black text-gray-500 uppercase mb-2">By topic</div>
        <div className="space-y-1">
          {TOPICS.map((t) => {
            const pt = progress.analytics.perTopic[t.id];
            if (!pt || pt.answered === 0) return null;
            const acc = Math.round((pt.correct / pt.answered) * 100);
            return (
              <div key={t.id} className="flex items-center gap-2 text-sm">
                <span className="w-32 truncate">{t.icon} {t.title}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400" style={{ width: `${acc}%` }} />
                </div>
                <span className="text-xs text-gray-400 w-20 text-right">{pt.correct}/{pt.answered} ({acc}%)</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* recent activity */}
      {progress.analytics.log.length > 0 && (
        <div>
          <div className="text-xs font-black text-gray-500 uppercase mb-2">Recent activity</div>
          <ul className="text-xs text-gray-500 space-y-1">
            {progress.analytics.log.slice(0, 6).map((e, i) => (
              <li key={i}>
                {new Date(e.ts).toLocaleString("en-IN", { hour: "2-digit", minute: "2-digit", day: "numeric", month: "short" })} ·{" "}
                {e.type === "answer" ? `Answered (${e.detail})` : e.type === "guide" ? "Read a guide" : e.type}
                {e.topicId && e.topicId !== "exam" && e.topicId !== "review" ? ` · ${e.topicId}` : ""}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-violet-50 rounded-xl p-3 text-center">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="font-black text-violet-700">{value}</div>
    </div>
  );
}
