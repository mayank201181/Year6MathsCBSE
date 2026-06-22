"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTopic } from "@/lib/topics";
import { useStore } from "@/lib/store";
import PaperRunner, { type RunnerItem } from "@/components/PaperRunner";

export default function ChallengePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const topic = getTopic(id);
  const { recordChallenge, progress } = useStore();
  if (!topic) return notFound();

  // A timed mix: a few core + the challenge questions. MCQ only (quick to mark under time).
  const pool = topic.quiz.mcq.filter((q) => q.difficulty === "core" || q.difficulty === "challenge");
  const items: RunnerItem[] = pool.map((q) => ({ kind: "mcq" as const, q }));
  const best = progress?.challengeBest[topic.id] || 0;

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No challenge questions yet for this topic.</p>
        <Link href={`/topic/${topic.id}`} className="text-violet-600 font-bold">← Back</Link>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="bg-rose-50 rounded-2xl p-4 text-rose-700 text-sm font-bold">
        ⏱️ Beat the clock! {items.length} questions · best so far: {best}/{items.length}
      </div>
      <PaperRunner
        topicId={topic.id}
        paperId={`${topic.id}-challenge`}
        title={`${topic.title} — Timed Challenge`}
        items={items}
        mode="challenge"
        timeLimit={items.length * 30}
        onComplete={(score) => recordChallenge(topic.id, score)}
      />
    </div>
  );
}
