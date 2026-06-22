import type { Topic, AnyQuestion, MCQ, QA, ComprehensiveExam } from "../types";

import fractions from "./fractions";

// NOTE: the full registry (14 topics + exam) is assembled after the content
// subagents author their files. During scaffolding only the sample topic is wired.
export const TOPICS: Topic[] = [fractions];

export const EXAM: ComprehensiveExam = { mcqPapers: [], qaPapers: [] };

export function getTopic(id: string): Topic | undefined {
  return TOPICS.find((t) => t.id === id);
}

// Flat index of every question by id (canonical = quiz arrays), deduped.
function buildIndex(): Record<string, AnyQuestion> {
  const index: Record<string, AnyQuestion> = {};
  const addMcq = (m: MCQ, topicId: string) => {
    if (!index[m.id]) index[m.id] = { ...m, kind: "mcq", topicId };
  };
  const addQa = (q: QA, topicId: string) => {
    if (!index[q.id]) index[q.id] = { ...q, kind: "qa", topicId };
  };
  for (const t of TOPICS) {
    t.quiz.mcq.forEach((m) => addMcq(m, t.id));
    t.quiz.qa.forEach((q) => addQa(q, t.id));
  }
  EXAM.mcqPapers.forEach((p) => p.questions.forEach((m) => addMcq(m, "exam")));
  EXAM.qaPapers.forEach((p) => p.questions.forEach((q) => addQa(q, "exam")));
  return index;
}

export const QUESTION_INDEX: Record<string, AnyQuestion> = buildIndex();

export function getQuestion(id: string): AnyQuestion | undefined {
  return QUESTION_INDEX[id];
}

export function challengeQuestions(topicId: string): (MCQ | QA)[] {
  const t = getTopic(topicId);
  if (!t) return [];
  return [...t.quiz.mcq, ...t.quiz.qa].filter((q) => q.difficulty === "challenge");
}
