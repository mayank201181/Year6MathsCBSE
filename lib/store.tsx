"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import type { Account, Profile, ProgressDoc, StoreStatus } from "./profileTypes";
import { emptyProgress } from "./profileTypes";
import type { Difficulty } from "./types";
import { advance, scheduleLapse, dueCount, startOfToday } from "./srs";
import { rankFor, nextRank } from "./ranks";

type RecordOpts = {
  topicId: string;
  difficulty?: Difficulty;
  hintsUsed?: number;
  kind?: "mcq" | "qa";
};

interface StoreValue {
  status: StoreStatus;
  cloud: boolean; // whether cloud sync is configured on the server
  account: Account | null;
  activeProfile: Profile | null;
  progress: ProgressDoc | null;
  error: string | null;

  // auth
  signup: (familyName: string, password: string, pin: string) => Promise<boolean>;
  login: (familyName: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;

  // profiles
  createProfile: (name: string, avatar: string) => Promise<boolean>;
  editProfile: (id: string, name: string, avatar: string) => Promise<void>;
  deleteProfile: (id: string) => Promise<void>;
  selectProfile: (id: string) => Promise<void>;
  switchProfile: () => void;

  // learning actions
  recordResult: (qid: string, correct: boolean, opts: RecordOpts) => void;
  markGuideRead: (topicId: string, sectionKey?: string) => void;
  recordChallenge: (topicId: string, score: number) => void;
  recordExam: (score: number) => void;
  saveInProgress: (paperId: string, answers: Record<string, number | string>) => void;
  clearInProgress: (paperId: string) => void;
  heartbeat: (seconds: number, topicId?: string) => void;
  setGoal: (minutes: number) => void;

  // derived
  rank: ReturnType<typeof rankFor>;
  next: ReturnType<typeof nextRank>;
  dueReviews: number;
}

const Ctx = createContext<StoreValue | null>(null);

const STARS_BY_DIFFICULTY: Record<Difficulty, number> = {
  warmup: 1,
  core: 2,
  challenge: 3,
};

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function cacheKey(accountId: string, profileId: string) {
  return `y6m:progress:${accountId}:${profileId}`;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<StoreStatus>("loading");
  const [cloud, setCloud] = useState(false);
  const [account, setAccount] = useState<Account | null>(null);
  const [activeProfile, setActiveProfile] = useState<Profile | null>(null);
  const [progress, setProgress] = useState<ProgressDoc | null>(null);
  const [error, setError] = useState<string | null>(null);

  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ---- bootstrap ----
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        const data = await res.json();
        setCloud(!!data.cloud);
        if (data.account) {
          setAccount(data.account);
          const lastProfile =
            typeof window !== "undefined"
              ? localStorage.getItem(`y6m:lastProfile:${data.account.id}`)
              : null;
          const prof = data.account.profiles.find((p: Profile) => p.id === lastProfile);
          if (prof) {
            await loadProfile(data.account, prof);
          } else {
            setStatus("no-profile");
          }
        } else if (!data.cloud) {
          // No backend configured — run in single-device guest mode (localStorage only).
          enterGuest();
        } else {
          setStatus("anon");
        }
      } catch {
        setStatus("anon");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Guest mode: a synthetic local-only account + profile backed by localStorage.
  const enterGuest = useCallback(() => {
    const guestAcct: Account = {
      id: "guest",
      familyName: "Guest",
      passwordHash: "",
      passwordSalt: "",
      pinHash: "",
      pinSalt: "",
      profiles: [{ id: "guest", name: "Me", avatar: "🦉", createdAt: Date.now() }],
      createdAt: Date.now(),
    };
    setAccount(guestAcct);
    const prof = guestAcct.profiles[0];
    setActiveProfile(prof);
    let doc: ProgressDoc | null = null;
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem(cacheKey("guest", "guest"));
      if (cached) {
        try {
          doc = JSON.parse(cached) as ProgressDoc;
        } catch {
          /* ignore */
        }
      }
    }
    setProgress(doc || emptyProgress("guest"));
    setStatus("ready");
  }, []);

  const loadProfile = useCallback(async (acct: Account, prof: Profile) => {
    setActiveProfile(prof);
    if (typeof window !== "undefined") {
      localStorage.setItem(`y6m:lastProfile:${acct.id}`, prof.id);
    }
    // try cache first for instant paint
    let doc: ProgressDoc | null = null;
    if (typeof window !== "undefined") {
      const cached = localStorage.getItem(cacheKey(acct.id, prof.id));
      if (cached) {
        try {
          doc = JSON.parse(cached) as ProgressDoc;
        } catch {
          /* ignore */
        }
      }
    }
    if (doc) {
      setProgress(doc);
      setStatus("ready");
    }
    try {
      const res = await fetch(`/api/progress?profileId=${prof.id}`, { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        // prefer the more-recently-updated of cache vs server
        const server = data.progress as ProgressDoc;
        if (!doc || server.updatedAt >= (doc.updatedAt || 0)) {
          setProgress(server);
        }
      }
    } catch {
      /* offline — keep cache */
    }
    setStatus("ready");
  }, []);

  // ---- debounced sync ----
  const queueSync = useCallback(
    (next: ProgressDoc) => {
      if (account && activeProfile && typeof window !== "undefined") {
        localStorage.setItem(cacheKey(account.id, activeProfile.id), JSON.stringify(next));
      }
      if (syncTimer.current) clearTimeout(syncTimer.current);
      syncTimer.current = setTimeout(async () => {
        try {
          await fetch("/api/progress", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ progress: next }),
          });
        } catch {
          /* offline — cache holds it */
        }
      }, 1200);
    },
    [account, activeProfile],
  );

  // helper to mutate progress immutably and sync
  const update = useCallback(
    (fn: (p: ProgressDoc) => ProgressDoc) => {
      setProgress((prev) => {
        if (!prev) return prev;
        const next = fn({ ...prev });
        next.updatedAt = Date.now();
        queueSync(next);
        return next;
      });
    },
    [queueSync],
  );

  // ---- auth actions ----
  const signup = useCallback(async (familyName: string, password: string, pin: string) => {
    setError(null);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ familyName, password, pin }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Could not sign up.");
      return false;
    }
    setAccount(data.account);
    setStatus("no-profile");
    return true;
  }, []);

  const login = useCallback(async (familyName: string, password: string) => {
    setError(null);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ familyName, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Could not log in.");
      return false;
    }
    setAccount(data.account);
    setStatus(data.account.profiles.length ? "no-profile" : "no-profile");
    return true;
  }, []);

  const logout = useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setAccount(null);
    setActiveProfile(null);
    setProgress(null);
    setStatus("anon");
  }, []);

  // ---- profile actions ----
  const createProfile = useCallback(
    async (name: string, avatar: string) => {
      setError(null);
      const res = await fetch("/api/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, avatar }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Could not add learner.");
        return false;
      }
      setAccount((a) => (a ? { ...a, profiles: data.profiles } : a));
      return true;
    },
    [],
  );

  const editProfile = useCallback(async (id: string, name: string, avatar: string) => {
    const res = await fetch("/api/profiles", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name, avatar }),
    });
    const data = await res.json();
    if (res.ok) {
      setAccount((a) => (a ? { ...a, profiles: data.profiles } : a));
      setActiveProfile((p) => (p && p.id === id ? { ...p, name, avatar } : p));
    }
  }, []);

  const deleteProfile = useCallback(
    async (id: string) => {
      const res = await fetch("/api/profiles", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (res.ok) {
        setAccount((a) => (a ? { ...a, profiles: data.profiles } : a));
        if (activeProfile?.id === id) {
          setActiveProfile(null);
          setProgress(null);
          setStatus("no-profile");
        }
      }
    },
    [activeProfile],
  );

  const selectProfile = useCallback(
    async (id: string) => {
      if (!account) return;
      const prof = account.profiles.find((p) => p.id === id);
      if (!prof) return;
      setStatus("loading");
      await loadProfile(account, prof);
    },
    [account, loadProfile],
  );

  const switchProfile = useCallback(() => {
    setActiveProfile(null);
    setProgress(null);
    setStatus("no-profile");
  }, []);

  // ---- learning actions ----
  const recordResult = useCallback(
    (qid: string, correct: boolean, opts: RecordOpts) => {
      update((p) => {
        const attempts = { ...p.attempts };
        const a = attempts[qid] || { correct: 0, total: 0 };
        attempts[qid] = { correct: a.correct + (correct ? 1 : 0), total: a.total + 1 };

        let stars = p.stars;
        let awarded = p.awarded;
        const diff = opts.difficulty || "core";
        if (correct && !p.awarded.includes(qid)) {
          let gain = STARS_BY_DIFFICULTY[diff];
          // AoPS: bonus star for solving with few/no hints
          if ((opts.hintsUsed ?? 0) === 0) gain += 1;
          stars = p.stars + gain;
          awarded = [...p.awarded, qid];
        }

        let missed = p.missed;
        let srs = p.srs;
        if (correct) {
          missed = p.missed.filter((m) => m !== qid);
          srs = advance(p.srs, qid);
        } else {
          if (!p.missed.includes(qid)) missed = [...p.missed, qid];
          srs = scheduleLapse(p.srs, qid, opts.topicId);
        }

        // analytics
        const analytics = { ...p.analytics };
        const perTopic = { ...analytics.perTopic };
        const t = perTopic[opts.topicId] || { answered: 0, correct: 0, minutes: 0 };
        perTopic[opts.topicId] = {
          answered: t.answered + 1,
          correct: t.correct + (correct ? 1 : 0),
          minutes: t.minutes,
        };
        const perDay = { ...analytics.perDay };
        const dk = todayKey();
        const d = perDay[dk] || { date: dk, minutes: 0, stars: 0, answered: 0, correct: 0 };
        perDay[dk] = {
          ...d,
          answered: d.answered + 1,
          correct: d.correct + (correct ? 1 : 0),
          stars: d.stars + (stars - p.stars),
        };
        analytics.perTopic = perTopic;
        analytics.perDay = perDay;
        analytics.log = [
          { ts: Date.now(), type: "answer" as const, topicId: opts.topicId, detail: correct ? "correct" : "wrong" },
          ...p.analytics.log,
        ].slice(0, 200);

        return { ...p, attempts, stars, awarded, missed, srs, analytics };
      });
    },
    [update],
  );

  const markGuideRead = useCallback(
    (topicId: string, sectionKey?: string) => {
      const key = sectionKey ? `${topicId}#${sectionKey}` : topicId;
      update((p) => {
        if (p.guidesRead.includes(key)) return p;
        const analytics = { ...p.analytics };
        analytics.log = [
          { ts: Date.now(), type: "guide" as const, topicId, detail: sectionKey },
          ...p.analytics.log,
        ].slice(0, 200);
        return {
          ...p,
          guidesRead: [...p.guidesRead, key],
          stars: p.stars + 1,
          analytics,
        };
      });
    },
    [update],
  );

  const recordChallenge = useCallback(
    (topicId: string, score: number) => {
      update((p) => {
        const best = Math.max(p.challengeBest[topicId] || 0, score);
        const analytics = { ...p.analytics };
        analytics.log = [
          { ts: Date.now(), type: "challenge" as const, topicId, detail: String(score) },
          ...p.analytics.log,
        ].slice(0, 200);
        return { ...p, challengeBest: { ...p.challengeBest, [topicId]: best }, analytics };
      });
    },
    [update],
  );

  const recordExam = useCallback(
    (score: number) => {
      update((p) => ({ ...p, examBest: Math.max(p.examBest || 0, score) }));
    },
    [update],
  );

  const saveInProgress = useCallback(
    (paperId: string, answers: Record<string, number | string>) => {
      update((p) => ({
        ...p,
        inProgress: { ...(p.inProgress || {}), [paperId]: { answers, updatedAt: Date.now() } },
      }));
    },
    [update],
  );

  const clearInProgress = useCallback(
    (paperId: string) => {
      update((p) => {
        const ip = { ...(p.inProgress || {}) };
        delete ip[paperId];
        return { ...p, inProgress: ip };
      });
    },
    [update],
  );

  const heartbeat = useCallback(
    (seconds: number, topicId?: string) => {
      const minutes = seconds / 60;
      update((p) => {
        const analytics = { ...p.analytics };
        analytics.totalMinutes = +(analytics.totalMinutes + minutes).toFixed(2);
        const perDay = { ...analytics.perDay };
        const dk = todayKey();
        const d = perDay[dk] || { date: dk, minutes: 0, stars: 0, answered: 0, correct: 0 };
        perDay[dk] = { ...d, minutes: +(d.minutes + minutes).toFixed(2) };
        analytics.perDay = perDay;
        if (topicId) {
          const perTopic = { ...analytics.perTopic };
          const t = perTopic[topicId] || { answered: 0, correct: 0, minutes: 0 };
          perTopic[topicId] = { ...t, minutes: +(t.minutes + minutes).toFixed(2) };
          analytics.perTopic = perTopic;
        }
        // streak
        const streak = { ...p.streak };
        const today = todayKey();
        if (streak.lastDay !== today) {
          const yesterday = new Date(startOfToday() - 86400000).toISOString().slice(0, 10);
          streak.count = streak.lastDay === yesterday ? streak.count + 1 : 1;
          streak.lastDay = today;
        }
        return { ...p, analytics, streak };
      });
    },
    [update],
  );

  const setGoal = useCallback(
    (minutes: number) => {
      update((p) => ({ ...p, goalMinutes: minutes }));
    },
    [update],
  );

  const rank = rankFor(progress?.stars || 0);
  const next = nextRank(progress?.stars || 0);
  const dueReviews = dueCount(progress?.srs || []);

  const value: StoreValue = {
    status,
    cloud,
    account,
    activeProfile,
    progress,
    error,
    signup,
    login,
    logout,
    createProfile,
    editProfile,
    deleteProfile,
    selectProfile,
    switchProfile,
    recordResult,
    markGuideRead,
    recordChallenge,
    recordExam,
    saveInProgress,
    clearInProgress,
    heartbeat,
    setGoal,
    rank,
    next,
    dueReviews,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore(): StoreValue {
  const v = useContext(Ctx);
  if (!v) throw new Error("useStore must be used within StoreProvider");
  return v;
}
