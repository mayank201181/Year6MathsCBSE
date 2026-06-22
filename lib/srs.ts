import type { SrsItem } from "./profileTypes";
import { SRS_LADDER } from "./ranks";

const DAY = 24 * 60 * 60 * 1000;

export function startOfToday(now = Date.now()): number {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

// Schedule (or reschedule) an item after a wrong answer: reset to due today.
export function scheduleLapse(items: SrsItem[], qid: string, topicId: string): SrsItem[] {
  const next = items.filter((i) => i.qid !== qid);
  const existing = items.find((i) => i.qid === qid);
  next.push({
    qid,
    topicId,
    step: 0,
    dueAt: startOfToday(),
    lapses: (existing?.lapses ?? 0) + 1,
  });
  return next;
}

// Advance an item after a correct answer; graduate after the last ladder step.
export function advance(items: SrsItem[], qid: string): SrsItem[] {
  const item = items.find((i) => i.qid === qid);
  if (!item) return items;
  const nextStep = item.step + 1;
  if (nextStep >= SRS_LADDER.length) {
    // graduated — remove from the queue
    return items.filter((i) => i.qid !== qid);
  }
  return items.map((i) =>
    i.qid === qid
      ? { ...i, step: nextStep, dueAt: startOfToday() + SRS_LADDER[nextStep] * DAY }
      : i,
  );
}

export function dueItems(items: SrsItem[], now = Date.now()): SrsItem[] {
  return items.filter((i) => i.dueAt <= now);
}

export function dueCount(items: SrsItem[], now = Date.now()): number {
  return dueItems(items, now).length;
}
