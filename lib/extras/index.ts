import type { TopicExtras } from "../types";

import fractions from "./fractions";

// Engagement extras keyed by topic id. Authored separately so edits here can
// never touch the audited answer keys in lib/topics.
export const EXTRAS: Record<string, TopicExtras> = {
  fractions,
};

export function getExtras(topicId: string): TopicExtras | undefined {
  return EXTRAS[topicId];
}
