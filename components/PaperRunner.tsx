"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import type { MCQ, QA, Difficulty } from "@/lib/types";
import { useStore } from "@/lib/store";
import { gradeQA, gradeLabel, type Grade } from "@/lib/grade";
import Markdown from "./Markdown";
import AskAI from "./AskAI";

export type RunnerItem =
  | { kind: "mcq"; q: MCQ; topicId?: string }
  | { kind: "qa"; q: QA; topicId?: string };

interface QState {
  answered: boolean;
  selected?: number; // mcq
  typed?: string; // qa
  grade?: Grade; // qa
  correct?: boolean;
  hintsUsed: number;
  showSolution: boolean;
}

const DIFF_BADGE: Record<Difficulty, { label: string; cls: string }> = {
  warmup: { label: "Warm-up", cls: "bg-green-100 text-green-700" },
  core: { label: "Core", cls: "bg-blue-100 text-blue-700" },
  challenge: { label: "Challenge", cls: "bg-rose-100 text-rose-700" },
};

export default function PaperRunner({
  topicId,
  paperId,
  title,
  items,
  mode = "practice",
  timeLimit,
  onComplete,
}: {
  topicId: string;
  paperId: string;
  title: string;
  items: RunnerItem[];
  mode?: "practice" | "challenge" | "exam";
  timeLimit?: number; // seconds
  onComplete?: (score: number, total: number) => void;
}) {
  const { recordResult, progress, saveInProgress, clearInProgress, heartbeat } = useStore();
  const [idx, setIdx] = useState(0);
  const [states, setStates] = useState<Record<string, QState>>({});
  const [finished, setFinished] = useState(false);
  const [remaining, setRemaining] = useState(timeLimit || 0);
  const loadedRef = useRef(false);

  // resume in-progress answers (practice/exam only)
  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;
    if (mode === "challenge") return;
    const saved = progress?.inProgress?.[paperId];
    if (saved) {
      const restored: Record<string, QState> = {};
      for (const it of items) {
        const a = saved.answers[it.q.id];
        if (a === undefined) continue;
        if (it.kind === "mcq") {
          const sel = typeof a === "number" ? a : Number(a);
          restored[it.q.id] = {
            answered: true,
            selected: sel,
            correct: sel === it.q.answerIndex,
            hintsUsed: 0,
            showSolution: false,
          };
        } else {
          const typed = String(a);
          const g = gradeQA(it.q, typed);
          restored[it.q.id] = {
            answered: true,
            typed,
            grade: g,
            correct: g === "correct",
            hintsUsed: 0,
            showSolution: false,
          };
        }
      }
      setStates(restored);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // heartbeat
  useEffect(() => {
    const iv = setInterval(() => heartbeat(20, topicId), 20000);
    return () => clearInterval(iv);
  }, [heartbeat, topicId]);

  // challenge countdown
  useEffect(() => {
    if (mode !== "challenge" || !timeLimit || finished) return;
    if (remaining <= 0) {
      setFinished(true);
      return;
    }
    const t = setTimeout(() => setRemaining((r) => r - 1), 1000);
    return () => clearTimeout(t);
  }, [mode, timeLimit, remaining, finished]);

  const item = items[idx];
  const st = states[item?.q.id];

  function persist(next: Record<string, QState>) {
    if (mode === "challenge") return;
    const answers: Record<string, number | string> = {};
    for (const it of items) {
      const s = next[it.q.id];
      if (!s?.answered) continue;
      answers[it.q.id] = it.kind === "mcq" ? (s.selected ?? -1) : (s.typed ?? "");
    }
    saveInProgress(paperId, answers);
  }

  function setQ(qid: string, patch: Partial<QState>) {
    setStates((prev) => {
      const cur = prev[qid] || { answered: false, hintsUsed: 0, showSolution: false };
      const next = { ...prev, [qid]: { ...cur, ...patch } };
      persist(next);
      return next;
    });
  }

  function useHint(qid: string) {
    const cur = states[qid] || { answered: false, hintsUsed: 0, showSolution: false };
    setQ(qid, { hintsUsed: cur.hintsUsed + 1 });
  }

  function answerMcq(q: MCQ, choice: number, qTopicId: string) {
    if (states[q.id]?.answered) return;
    const correct = choice === q.answerIndex;
    const hintsUsed = states[q.id]?.hintsUsed || 0;
    setQ(q.id, { answered: true, selected: choice, correct });
    recordResult(q.id, correct, { topicId: qTopicId, difficulty: q.difficulty, hintsUsed, kind: "mcq" });
  }

  function checkQa(q: QA, qTopicId: string) {
    const typed = states[q.id]?.typed || "";
    if (!typed.trim()) return;
    const g = gradeQA(q, typed);
    const hintsUsed = states[q.id]?.hintsUsed || 0;
    setQ(q.id, { answered: true, grade: g, correct: g === "correct" });
    recordResult(q.id, g === "correct", { topicId: qTopicId, difficulty: q.difficulty, hintsUsed, kind: "qa" });
  }

  const score = useMemo(
    () => items.reduce((n, it) => n + (states[it.q.id]?.correct ? 1 : 0), 0),
    [items, states],
  );
  const answeredCount = items.filter((it) => states[it.q.id]?.answered).length;

  function finish() {
    setFinished(true);
    clearInProgress(paperId);
    onComplete?.(score, items.length);
  }

  if (finished) {
    const pct = Math.round((score / items.length) * 100);
    return (
      <div className="bg-white rounded-2xl card-shadow p-8 text-center space-y-4">
        <div className="text-6xl">{pct >= 80 ? "🏆" : pct >= 50 ? "🎉" : "💪"}</div>
        <h2 className="text-2xl font-black text-violet-700">
          {score} / {items.length} correct
        </h2>
        <p className="text-gray-500">
          {pct >= 80 ? "Brilliant work!" : pct >= 50 ? "Good effort — review the tricky ones!" : "Keep practising — you'll get there!"}
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => {
              setStates({});
              setIdx(0);
              setFinished(false);
              setRemaining(timeLimit || 0);
            }}
            className="px-5 py-2.5 rounded-xl bg-violet-600 text-white font-bold"
          >
            Try again
          </button>
          <Link href={`/topic/${topicId}`} className="px-5 py-2.5 rounded-xl bg-gray-100 font-bold text-gray-700">
            Back to topic
          </Link>
        </div>
      </div>
    );
  }

  if (!item) return null;
  const q = item.q;
  const diff = q.difficulty || "core";

  return (
    <div className="space-y-4">
      {/* header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h1 className="text-xl font-black text-gray-800">{title}</h1>
          <p className="text-sm text-gray-400">
            Question {idx + 1} of {items.length} · {answeredCount} answered
          </p>
        </div>
        {mode === "challenge" && timeLimit && (
          <div className={`px-3 py-1.5 rounded-full font-black ${remaining <= 10 ? "bg-rose-100 text-rose-700" : "bg-amber-100 text-amber-700"}`}>
            ⏱ {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, "0")}
          </div>
        )}
      </div>

      {/* navigator */}
      <div className="flex flex-wrap gap-1.5">
        {items.map((it, i) => {
          const s = states[it.q.id];
          const cls = s?.answered
            ? s.correct
              ? "bg-emerald-500 text-white"
              : "bg-rose-400 text-white"
            : i === idx
              ? "bg-violet-600 text-white"
              : "bg-gray-200 text-gray-600";
          return (
            <button key={it.q.id} onClick={() => setIdx(i)} className={`w-7 h-7 rounded-lg text-xs font-bold ${cls}`}>
              {i + 1}
            </button>
          );
        })}
      </div>

      {/* question card */}
      <div className="bg-white rounded-2xl card-shadow p-5 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${DIFF_BADGE[diff].cls}`}>
            {DIFF_BADGE[diff].label}
          </span>
          {q.strategy && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 font-bold">🧭 {q.strategy}</span>
          )}
          {item.kind === "qa" && <span className="text-xs text-gray-400">Written answer</span>}
        </div>

        <p className="text-lg font-semibold text-gray-800">{q.question}</p>

        {/* MCQ */}
        {item.kind === "mcq" && (
          <div className="space-y-2">
            {item.q.options.map((opt, oi) => {
              const answered = st?.answered;
              const isAns = oi === item.q.answerIndex;
              const isSel = st?.selected === oi;
              let cls = "border-gray-200 hover:border-violet-300";
              if (answered) {
                if (isAns) cls = "border-emerald-400 bg-emerald-50";
                else if (isSel) cls = "border-rose-400 bg-rose-50";
                else cls = "border-gray-200 opacity-60";
              }
              return (
                <button
                  key={oi}
                  disabled={answered}
                  onClick={() => answerMcq(item.q, oi, item.topicId || topicId)}
                  className={`w-full text-left px-4 py-3 rounded-xl border-2 transition ${cls}`}
                >
                  <span className="font-bold text-violet-500 mr-2">{String.fromCharCode(65 + oi)}.</span>
                  {opt}
                  {answered && isAns && " ✅"}
                  {answered && isSel && !isAns && " ❌"}
                </button>
              );
            })}
          </div>
        )}

        {/* QA */}
        {item.kind === "qa" && (
          <div className="space-y-2">
            <textarea
              value={st?.typed || ""}
              disabled={st?.answered}
              onChange={(e) => setQ(item.q.id, { typed: e.target.value })}
              rows={3}
              placeholder="Write your answer and reasoning…"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-400 outline-none disabled:bg-gray-50"
            />
            {!st?.answered && (
              <button onClick={() => checkQa(item.q, item.topicId || topicId)} className="px-5 py-2.5 rounded-xl bg-violet-600 text-white font-bold">
                Check my answer
              </button>
            )}
          </div>
        )}

        {/* hint ladder (before answering) */}
        {!st?.answered && q.hints && q.hints.length > 0 && (
          <div className="bg-amber-50 rounded-xl p-3">
            {q.hints.slice(0, st?.hintsUsed || 0).map((h, hi) => (
              <p key={hi} className="text-sm text-amber-800 mb-1">
                <span className="font-bold">Hint {hi + 1}: </span>
                {h}
              </p>
            ))}
            {(st?.hintsUsed || 0) < q.hints.length && (
              <button onClick={() => useHint(q.id)} className="text-sm font-bold text-amber-700">
                💡 {(st?.hintsUsed || 0) === 0 ? "Stuck? Show a hint" : "Show another hint"} (costs a bonus ⭐)
              </button>
            )}
          </div>
        )}

        {/* feedback after answering */}
        {st?.answered && (
          <Feedback item={item} state={st} onReveal={() => setQ(q.id, { showSolution: true })} />
        )}

        {/* tutor */}
        {st?.answered && (
          <div className="pt-1">
            <AskAI context={`Question: ${q.question}`} />
          </div>
        )}
      </div>

      {/* nav buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          disabled={idx === 0}
          className="px-4 py-2 rounded-xl bg-gray-100 font-bold text-gray-600 disabled:opacity-40"
        >
          ← Previous
        </button>
        {idx < items.length - 1 ? (
          <button onClick={() => setIdx((i) => i + 1)} className="px-5 py-2 rounded-xl bg-violet-600 text-white font-bold">
            Next →
          </button>
        ) : (
          <button onClick={finish} className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold">
            Finish ✓
          </button>
        )}
      </div>
    </div>
  );
}

function Feedback({
  item,
  state,
  onReveal,
}: {
  item: RunnerItem;
  state: QState;
  onReveal: () => void;
}) {
  const q = item.q;
  if (item.kind === "mcq") {
    return (
      <div className={`rounded-xl p-3 ${state.correct ? "bg-emerald-50" : "bg-rose-50"}`}>
        <p className="font-bold mb-1">{state.correct ? "✅ Correct!" : "❌ Not quite."}</p>
        <Markdown text={item.q.explanation} className="text-sm" />
        {q.guideRef && <GuideLink topicHint={q.guideRef} />}
      </div>
    );
  }

  const g = state.grade || "needs-work";
  const lbl = gradeLabel(g);
  return (
    <div className={`rounded-xl p-3 ${g === "correct" ? "bg-emerald-50" : g === "partial" ? "bg-amber-50" : "bg-rose-50"}`}>
      <p className="font-bold mb-1">{lbl.emoji} {lbl.text}</p>
      {!state.showSolution ? (
        <button onClick={onReveal} className="text-sm font-bold text-violet-600 bg-white px-3 py-1.5 rounded-full">
          I&apos;ve tried — show me the model answer
        </button>
      ) : (
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-bold">Model answer: </span>
            {item.q.modelAnswer}
          </div>
          <div>
            <span className="font-bold">Mark scheme: </span>
            <ul className="list-disc pl-5">
              {item.q.markScheme.map((m, i) => <li key={i}>{m.split(/\s*[/|]\s*/)[0]}</li>)}
            </ul>
          </div>
          {item.q.solutions?.map((sol, si) => (
            <div key={si} className="bg-white rounded-lg p-2">
              <div className="font-bold text-violet-600">{sol.label}</div>
              <ol className="list-decimal pl-5">
                {sol.steps.map((s, i) => <li key={i}>{s}</li>)}
              </ol>
            </div>
          ))}
          {item.q.commonError && (
            <p className="text-rose-600">
              <span className="font-bold">Watch out: </span>
              {item.q.commonError}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function GuideLink({ topicHint }: { topicHint: string }) {
  return <p className="text-xs text-gray-400 mt-1">Relates to: {topicHint}</p>;
}
