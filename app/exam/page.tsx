"use client";

import { useState } from "react";
import Link from "next/link";
import { EXAM } from "@/lib/topics";
import { useStore } from "@/lib/store";
import PaperRunner, { type RunnerItem } from "@/components/PaperRunner";

export default function ExamPage() {
  const { recordExam, progress } = useStore();
  const [started, setStarted] = useState(false);

  const mcqItems: RunnerItem[] = EXAM.mcqPapers.flatMap((p) =>
    p.questions.map((q) => ({ kind: "mcq" as const, q, topicId: "exam" })),
  );
  const qaItems: RunnerItem[] = EXAM.qaPapers.flatMap((p) =>
    p.questions.map((q) => ({ kind: "qa" as const, q, topicId: "exam" })),
  );
  const items = [...mcqItems, ...qaItems];

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-3">📝</div>
        <p className="text-gray-500">The big cross-topic exam is being prepared. Check back soon!</p>
        <Link href="/" className="text-violet-600 font-bold">← Home</Link>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-6xl">📝</div>
        <h1 className="text-2xl font-black text-violet-700">The Big Maths Exam</h1>
        <p className="text-gray-500 max-w-md mx-auto">
          {items.length} mixed questions covering every topic. Take your time, show your reasoning — this is
          how you find out which ideas are rock solid. Best so far: {progress?.examBest ?? 0}/{items.length}.
        </p>
        <button onClick={() => setStarted(true)} className="px-6 py-3 rounded-xl bg-violet-600 text-white font-black">
          Start the exam
        </button>
      </div>
    );
  }

  return (
    <PaperRunner
      topicId="exam"
      paperId="big-exam"
      title="The Big Maths Exam"
      items={items}
      mode="exam"
      onComplete={(score) => recordExam(score)}
    />
  );
}
