import type { Topic, AnyQuestion, MCQ, QA, ComprehensiveExam } from "../types";

import patterns from "./patterns";
import knowingNumbers from "./knowing-numbers";
import wholeNumbers from "./whole-numbers";
import playingWithNumbers from "./playing-with-numbers";
import integers from "./integers";
import fractions from "./fractions";
import decimals from "./decimals";
import algebra from "./algebra";
import ratioProportion from "./ratio-proportion";
import geometryBasics from "./geometry-basics";
import shapes from "./shapes";
import perimeterArea from "./perimeter-area";
import dataHandling from "./data-handling";
import symmetry from "./symmetry";

import { comprehensiveExam } from "./exam";

// Roughly NCERT chapter order for the home screen.
export const TOPICS: Topic[] = [
  patterns,
  knowingNumbers,
  wholeNumbers,
  playingWithNumbers,
  integers,
  fractions,
  decimals,
  algebra,
  ratioProportion,
  geometryBasics,
  shapes,
  perimeterArea,
  dataHandling,
  symmetry,
];

export const EXAM: ComprehensiveExam = comprehensiveExam;

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
