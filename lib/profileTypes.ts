// Types for cloud-synced accounts, profiles and progress.

export interface Profile {
  id: string;
  name: string;
  avatar: string; // emoji
  createdAt: number;
}

export interface Account {
  id: string;
  familyName: string;
  passwordHash: string;
  passwordSalt: string;
  pinHash: string; // parent dashboard PIN
  pinSalt: string;
  profiles: Profile[];
  createdAt: number;
}

// Spaced-repetition item: missed questions schedule on a ladder.
export interface SrsItem {
  qid: string;
  topicId: string;
  step: number; // index into the SRS ladder; -1 = graduated
  dueAt: number; // epoch ms; due when now >= dueAt
  lapses: number;
}

export interface DayActivity {
  date: string; // YYYY-MM-DD
  minutes: number;
  stars: number;
  answered: number;
  correct: number;
}

export interface ActivityLogEntry {
  ts: number;
  type: "answer" | "guide" | "challenge" | "award" | "exam";
  topicId?: string;
  detail?: string;
}

export interface Analytics {
  totalMinutes: number;
  sessions: number;
  perDay: Record<string, DayActivity>;
  perTopic: Record<string, { answered: number; correct: number; minutes: number }>;
  log: ActivityLogEntry[];
}

export interface ProgressDoc {
  profileId: string;
  stars: number;
  awarded: string[]; // question ids that have already granted stars
  attempts: Record<string, { correct: number; total: number }>; // per qid
  guidesRead: string[]; // topic ids (or topic#section keys)
  missed: string[]; // qids currently considered "missed"
  challengeBest: Record<string, number>; // topicId -> best challenge score
  examBest?: number;
  streak: { count: number; lastDay: string };
  goalMinutes: number;
  srs: SrsItem[];
  analytics: Analytics;
  // autosave/resume for in-progress papers: paperId -> answers map
  inProgress?: Record<string, { answers: Record<string, number | string>; updatedAt: number }>;
  updatedAt: number;
}

export type StoreStatus = "loading" | "anon" | "no-profile" | "ready";

export function emptyProgress(profileId: string): ProgressDoc {
  return {
    profileId,
    stars: 0,
    awarded: [],
    attempts: {},
    guidesRead: [],
    missed: [],
    challengeBest: {},
    streak: { count: 0, lastDay: "" },
    goalMinutes: 15,
    srs: [],
    analytics: {
      totalMinutes: 0,
      sessions: 0,
      perDay: {},
      perTopic: {},
      log: [],
    },
    inProgress: {},
    updatedAt: Date.now(),
  };
}
