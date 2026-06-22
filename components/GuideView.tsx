"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { Topic, TopicExtras } from "@/lib/types";
import { useStore } from "@/lib/store";
import Markdown from "./Markdown";
import Explorable, { hasWidget } from "./Explorables";
import AskAI from "./AskAI";

function Diagram({ svg }: { svg: string }) {
  return <div className="diagram" dangerouslySetInnerHTML={{ __html: svg }} />;
}

function Reveal({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  if (open) return <div className="mt-2 animate-pop">{children}</div>;
  return (
    <button
      onClick={() => setOpen(true)}
      className="mt-2 text-sm font-bold text-violet-600 bg-violet-50 px-3 py-1.5 rounded-full hover:bg-violet-100"
    >
      {label}
    </button>
  );
}

export default function GuideView({ topic, extras }: { topic: Topic; extras?: TopicExtras }) {
  const { markGuideRead, heartbeat } = useStore();
  const [speaking, setSpeaking] = useState(false);

  // time-on-task heartbeat while reading
  useEffect(() => {
    const iv = setInterval(() => heartbeat(20, topic.id), 20000);
    return () => clearInterval(iv);
  }, [heartbeat, topic.id]);

  function readAloud() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const text = [topic.intro, ...topic.guide.map((s) => `${s.heading}. ${s.body.replace(/[*`#]/g, "")}`)].join(". ");
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95;
    u.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
    setSpeaking(true);
  }

  return (
    <div className="space-y-6">
      <div>
        <Link href="/" className="text-sm text-violet-500 font-bold">← All topics</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-4xl">{topic.icon}</span>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-800">{topic.title}</h1>
            {topic.chapter && <p className="text-xs text-gray-400">{topic.chapter}</p>}
          </div>
        </div>
      </div>

      {extras?.hook && (
        <div className="bg-gradient-to-r from-fuchsia-100 to-violet-100 rounded-2xl p-4 text-violet-900 font-semibold">
          💡 {extras.hook}
        </div>
      )}

      <p className="text-lg text-gray-700">{topic.intro}</p>

      <div className="flex flex-wrap gap-2">
        <button onClick={readAloud} className="text-sm px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 font-bold">
          {speaking ? "⏹ Stop" : "🔊 Read aloud"}
        </button>
        <AskAI context={`Topic: ${topic.title}. ${topic.intro}`} />
      </div>

      {topic.guide.map((s, i) => (
        <section key={i} className="bg-white rounded-2xl card-shadow p-5">
          <h2 className="text-xl font-black text-violet-700 mb-2">{s.heading}</h2>

          {s.discovery && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-3">
              <div className="text-xs font-black text-amber-600 uppercase tracking-wide mb-1">🧩 Try this first</div>
              <p className="text-gray-800">{s.discovery.problem}</p>
              <Reveal label="💭 Show me the idea">
                <p className="text-gray-700 bg-white rounded-lg p-2">{s.discovery.idea}</p>
              </Reveal>
            </div>
          )}

          <Markdown text={s.body} />

          {s.diagrams?.map((d, di) => <Diagram key={di} svg={d} />)}

          {s.keyPoints && s.keyPoints.length > 0 && (
            <div className="mt-3 bg-violet-50 rounded-xl p-3">
              <div className="text-xs font-black text-violet-500 uppercase mb-1">Key points</div>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {s.keyPoints.map((k, ki) => <li key={ki}>{k}</li>)}
              </ul>
            </div>
          )}

          {s.whyItWorks && (
            <div className="mt-3 border-l-4 border-emerald-400 bg-emerald-50 rounded-r-xl p-3">
              <div className="text-xs font-black text-emerald-600 uppercase mb-1">🤔 Why does this work?</div>
              <p className="text-sm text-gray-700">{s.whyItWorks}</p>
            </div>
          )}

          {s.strategies && s.strategies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {s.strategies.map((st, si) => (
                <span key={si} className="text-xs px-2.5 py-1 rounded-full bg-sky-100 text-sky-700 font-bold">
                  🧭 {st}
                </span>
              ))}
            </div>
          )}

          {s.thinkDeeper && (
            <p className="mt-3 text-sm italic text-fuchsia-700">🌟 Think deeper: {s.thinkDeeper}</p>
          )}
        </section>
      ))}

      {/* engagement extras */}
      {extras?.didYouKnow && extras.didYouKnow.length > 0 && (
        <section className="grid sm:grid-cols-2 gap-3">
          {extras.didYouKnow.map((f, i) => (
            <div key={i} className="bg-yellow-50 rounded-2xl p-4 text-sm text-yellow-900">
              <span className="font-black">Did you know? </span>
              {f}
            </div>
          ))}
        </section>
      )}

      {extras?.interactive && hasWidget(extras.interactive) && (
        <Explorable widgetKey={extras.interactive} />
      )}

      {extras?.experiments && extras.experiments.length > 0 && (
        <section className="space-y-3">
          {extras.experiments.map((ex, i) => (
            <div key={i} className="bg-white rounded-2xl card-shadow p-5">
              <h3 className="font-black text-emerald-700">🧪 Try this: {ex.title}</h3>
              {ex.materials && (
                <p className="text-xs text-gray-500 mt-1">You need: {ex.materials.join(", ")}</p>
              )}
              <ol className="list-decimal pl-5 text-sm text-gray-700 mt-2 space-y-1">
                {ex.steps.map((st, si) => <li key={si}>{st}</li>)}
              </ol>
              {ex.whatHappens && <p className="text-sm text-emerald-700 mt-2">✨ {ex.whatHappens}</p>}
            </div>
          ))}
        </section>
      )}

      {extras?.bonusDiagrams?.map((b, i) => (
        <figure key={i} className="bg-white rounded-2xl card-shadow p-4">
          <Diagram svg={b.svg} />
          <figcaption className="text-center text-sm text-gray-500">{b.caption}</figcaption>
        </figure>
      ))}

      {/* learn-smart */}
      <FlashCards topic={topic} />

      {topic.learn.formulae && topic.learn.formulae.length > 0 && (
        <section className="bg-white rounded-2xl card-shadow p-5">
          <h2 className="font-black text-violet-700 mb-2">📋 Formula sheet</h2>
          <table className="w-full text-sm">
            <tbody>
              {topic.learn.formulae.map((f, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  <td className="py-2 font-bold text-gray-700 pr-3">{f.name}</td>
                  <td className="py-2 text-gray-600">{f.rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          href={`/topic/${topic.id}/quiz`}
          className="px-5 py-3 rounded-xl bg-violet-600 text-white font-bold"
        >
          Practice questions →
        </Link>
        <button
          onClick={() => markGuideRead(topic.id)}
          className="px-5 py-3 rounded-xl bg-emerald-100 text-emerald-700 font-bold"
        >
          ✅ Mark guide as read (+1 ⭐)
        </button>
      </div>
    </div>
  );
}

function FlashCards({ topic }: { topic: Topic }) {
  const cards = topic.learn.flashcards;
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  if (!cards.length) return null;
  const card = cards[i];
  return (
    <section className="bg-white rounded-2xl card-shadow p-5">
      <h2 className="font-black text-violet-700 mb-3">🗂️ Quick-revision cards</h2>
      <button
        onClick={() => setFlip((f) => !f)}
        className="w-full min-h-28 bg-violet-50 rounded-2xl p-5 flex items-center justify-center text-center font-semibold text-gray-800"
      >
        {flip ? card.back : card.front}
      </button>
      <div className="flex items-center justify-between mt-3 text-sm">
        <button
          onClick={() => {
            setI((p) => (p - 1 + cards.length) % cards.length);
            setFlip(false);
          }}
          className="px-3 py-1.5 rounded-lg bg-gray-100 font-bold"
        >
          ← Prev
        </button>
        <span className="text-gray-400">
          {i + 1} / {cards.length} · tap card to flip
        </span>
        <button
          onClick={() => {
            setI((p) => (p + 1) % cards.length);
            setFlip(false);
          }}
          className="px-3 py-1.5 rounded-lg bg-gray-100 font-bold"
        >
          Next →
        </button>
      </div>
    </section>
  );
}
