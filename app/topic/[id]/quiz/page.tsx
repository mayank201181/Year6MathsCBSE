"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getTopic } from "@/lib/topics";
import PaperRunner, { type RunnerItem } from "@/components/PaperRunner";

export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const topic = getTopic(id);
  if (!topic) return notFound();

  // Warm-up + core first, then challenge, mixing MCQ and QA.
  const items: RunnerItem[] = [
    ...topic.quiz.mcq.map((q) => ({ kind: "mcq" as const, q })),
    ...topic.quiz.qa.map((q) => ({ kind: "qa" as const, q })),
  ].sort((a, b) => order(a.q.difficulty) - order(b.q.difficulty));

  return (
    <PaperRunner
      topicId={topic.id}
      paperId={`${topic.id}-quiz`}
      title={`${topic.title} — Practice`}
      items={items}
    />
  );
}

function order(d?: string) {
  return d === "warmup" ? 0 : d === "challenge" ? 2 : 1;
}
