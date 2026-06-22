// Core content data model for the Year 6 Maths (CBSE) study app.
// Audited exam content lives here; engagement extras live separately in lib/extras.

export type Difficulty = "warmup" | "core" | "challenge";

// A single worked method for a problem (AoPS: multiple solution paths).
export interface Solution {
  label: string; // e.g. "Algebra", "Picture / area model", "Clever way"
  steps: string[]; // ordered worked steps, plain text
}

export interface GuideSection {
  heading: string;
  body: string; // markdown-lite (supports **bold**, *italic*, lists, `code`)
  diagrams?: string[]; // inline SVG strings (no backticks / ${} inside)
  keyPoints?: string[];
  thinkDeeper?: string; // a stretch question / provocation
  // --- AoPS additions ---
  discovery?: { problem: string; idea: string }; // problem-first opener + the idea it leads to
  strategies?: string[]; // named problem-solving moves used in this section
  whyItWorks?: string; // short derivation / intuition for the rule
}

export interface MCQ {
  id: string; // globally unique, e.g. "fra-mcq-q03"
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  guideRef?: string; // heading of the guide section this relates to
  difficulty?: Difficulty;
  hints?: string[]; // laddered hints (gentle -> bigger -> key step)
  strategy?: string;
}

export interface QA {
  id: string; // globally unique, e.g. "fra-qa-q02"
  question: string;
  modelAnswer: string;
  markScheme: string[]; // keyword / step points; used by lib/grade.ts
  commonError?: string;
  guideRef?: string;
  difficulty?: Difficulty;
  hints?: string[];
  strategy?: string;
  solutions?: Solution[]; // one or more worked methods
  numericAnswer?: number; // for numeric grading with tolerance
  tolerance?: number;
}

export interface Paper<T> {
  id: string;
  title: string;
  questions: T[];
}

export interface LearnSmart {
  // Quick-revision flashcards / key facts for a topic.
  flashcards: { front: string; back: string }[];
  formulae?: { name: string; rule: string }[];
}

export interface Topic {
  id: string;
  title: string;
  subject: string; // "Maths"
  chapter?: string; // CBSE/NCERT chapter reference
  icon: string; // emoji used in UI (NOT in ImageResponse)
  color: string; // tailwind-ish accent hex for cards
  intro: string;
  guide: GuideSection[];
  learn: LearnSmart;
  quiz: { mcq: MCQ[]; qa: QA[] };
  questionBank: {
    mcqPapers: Paper<MCQ>[];
    qaPapers: Paper<QA>[];
  };
}

export interface ComprehensiveExam {
  mcqPapers: Paper<MCQ>[];
  qaPapers: Paper<QA>[];
}

// ---- Engagement extras (kept separate from audited content) ----
export interface Experiment {
  title: string;
  materials?: string[];
  steps: string[];
  whatHappens?: string;
}

export interface TopicExtras {
  hook?: string; // an intriguing opener banner
  didYouKnow?: string[];
  experiments?: Experiment[]; // "try this at home" maths activities
  bonusDiagrams?: { caption: string; svg: string }[];
  interactive?: string; // explorable widget key (see components/Explorables.tsx)
}

// Build a flat index of every question by id for review + challenge by id alone.
export type AnyQuestion =
  | (MCQ & { kind: "mcq"; topicId: string })
  | (QA & { kind: "qa"; topicId: string });
