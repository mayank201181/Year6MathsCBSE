"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { getQuestion } from "@/lib/topics";
import { dueItems } from "@/lib/srs";
import PaperRunner, { type RunnerItem } from "@/components/PaperRunner";

export default function ReviewPage() {
  const { progress } = useStore();
  const due = dueItems(progress?.srs || []);

  const items: RunnerItem[] = due.flatMap((s): RunnerItem[] => {
    const q = getQuestion(s.qid);
    if (!q) return [];
    if (q.kind === "mcq") return [{ kind: "mcq", q, topicId: s.topicId }];
    return [{ kind: "qa", q, topicId: s.topicId }];
  });

  if (items.length === 0) {
    return (
      <div className="text-center py-16 space-y-3">
        <div className="text-6xl">🎉</div>
        <h1 className="text-2xl font-black text-violet-700">All caught up!</h1>
        <p className="text-gray-500">No reviews are due right now. Questions you get wrong come back here on a clever schedule.</p>
        <Link href="/" className="inline-block mt-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white font-bold">
          Back to topics
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="bg-amber-50 rounded-2xl p-4 text-amber-800 font-bold text-sm">
        🔁 Spaced review · {items.length} question{items.length > 1 ? "s" : ""} due. Getting one right pushes it
        further into the future; getting it wrong brings it back tomorrow.
      </div>
      <PaperRunner topicId="review" paperId="review-session" title="Review session" items={items} />
    </div>
  );
}
