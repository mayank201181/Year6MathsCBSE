"use client";

import { useState } from "react";

// Self-contained interactive SVG widgets, keyed by string (topic.extras.interactive).

function FractionBar() {
  const [parts, setParts] = useState(4);
  const [shaded, setShaded] = useState(3);
  const w = 320;
  const seg = w / parts;
  return (
    <div>
      <svg viewBox={`0 0 ${w} 70`} className="w-full" role="img" aria-label="Fraction bar">
        <rect x="0" y="10" width={w} height="40" fill="#fff" stroke="#334155" />
        {Array.from({ length: parts }).map((_, i) => (
          <rect
            key={i}
            x={i * seg}
            y="10"
            width={seg}
            height="40"
            fill={i < shaded ? "#fb923c" : "#fff"}
            stroke="#334155"
          />
        ))}
        <text x={w / 2} y="65" textAnchor="middle" fontSize="13" fill="#334155">
          {shaded}/{parts}
        </text>
      </svg>
      <div className="flex gap-4 mt-2 text-sm">
        <label className="flex-1">
          Parts: {parts}
          <input
            type="range"
            min={1}
            max={12}
            value={parts}
            onChange={(e) => {
              const p = +e.target.value;
              setParts(p);
              if (shaded > p) setShaded(p);
            }}
            className="w-full"
          />
        </label>
        <label className="flex-1">
          Shaded: {shaded}
          <input
            type="range"
            min={0}
            max={parts}
            value={shaded}
            onChange={(e) => setShaded(+e.target.value)}
            className="w-full"
          />
        </label>
      </div>
    </div>
  );
}

function NumberLine() {
  const [a, setA] = useState(-3);
  const [b, setB] = useState(5);
  const min = -10;
  const max = 10;
  const w = 340;
  const toX = (n: number) => 10 + ((n - min) / (max - min)) * (w - 20);
  const sum = a + b;
  return (
    <div>
      <svg viewBox={`0 0 ${w} 90`} className="w-full" role="img" aria-label="Integer number line">
        <line x1="10" y1="45" x2={w - 10} y2="45" stroke="#334155" strokeWidth="2" />
        {Array.from({ length: max - min + 1 }).map((_, i) => {
          const n = min + i;
          return (
            <g key={n}>
              <line x1={toX(n)} y1="40" x2={toX(n)} y2="50" stroke="#94a3b8" />
              {n % 5 === 0 && (
                <text x={toX(n)} y="68" textAnchor="middle" fontSize="9" fill="#64748b">
                  {n}
                </text>
              )}
            </g>
          );
        })}
        <circle cx={toX(a)} cy="45" r="6" fill="#7c3aed" />
        <circle cx={toX(b)} cy="45" r="6" fill="#f97316" />
        <circle cx={toX(sum)} cy="45" r="7" fill="#10b981" />
        <text x={toX(sum)} y="30" textAnchor="middle" fontSize="11" fill="#10b981" fontWeight="bold">
          {sum}
        </text>
      </svg>
      <div className="flex gap-4 mt-1 text-sm">
        <label className="flex-1">
          a = {a}
          <input type="range" min={-10} max={10} value={a} onChange={(e) => setA(+e.target.value)} className="w-full" />
        </label>
        <label className="flex-1">
          b = {b}
          <input type="range" min={-10} max={10} value={b} onChange={(e) => setB(+e.target.value)} className="w-full" />
        </label>
      </div>
      <p className="text-center text-sm font-bold text-emerald-600 mt-1">
        {a} + {b} = {sum}
      </p>
    </div>
  );
}

function ProbabilitySpinner() {
  const colors = ["#f97316", "#7c3aed", "#10b981", "#3b82f6"];
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const total = counts.reduce((a, b) => a + b, 0);
  function spin() {
    const r = Math.floor(Math.random() * 4);
    setCounts((c) => c.map((v, i) => (i === r ? v + 1 : v)));
  }
  return (
    <div className="text-center">
      <svg viewBox="0 0 160 160" className="w-40 h-40 mx-auto" role="img" aria-label="Probability spinner">
        {colors.map((c, i) => {
          const start = (i / 4) * 2 * Math.PI - Math.PI / 2;
          const end = ((i + 1) / 4) * 2 * Math.PI - Math.PI / 2;
          const x1 = 80 + 70 * Math.cos(start);
          const y1 = 80 + 70 * Math.sin(start);
          const x2 = 80 + 70 * Math.cos(end);
          const y2 = 80 + 70 * Math.sin(end);
          return <path key={i} d={`M80,80 L${x1},${y1} A70,70 0 0,1 ${x2},${y2} Z`} fill={c} />;
        })}
        <circle cx="80" cy="80" r="6" fill="#1f2937" />
      </svg>
      <button onClick={spin} className="mt-2 px-5 py-2 rounded-full bg-violet-600 text-white font-bold">
        Spin!
      </button>
      <div className="grid grid-cols-4 gap-2 mt-3 text-xs">
        {counts.map((v, i) => (
          <div key={i}>
            <div className="w-4 h-4 rounded mx-auto" style={{ background: colors[i] }} />
            <div className="font-bold">{v}</div>
            <div className="text-gray-400">{total ? Math.round((v / total) * 100) : 0}%</div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-1">Each colour has probability 1/4. Does it even out after many spins?</p>
    </div>
  );
}

function FunctionGrapher() {
  const [m, setM] = useState(2);
  const [c, setC] = useState(1);
  const w = 300;
  const h = 220;
  const ox = w / 2;
  const oy = h / 2;
  const scale = 18;
  const pts: string[] = [];
  for (let x = -7; x <= 7; x += 0.5) {
    const y = m * x + c;
    pts.push(`${ox + x * scale},${oy - y * scale}`);
  }
  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label="Line grapher">
        <line x1="0" y1={oy} x2={w} y2={oy} stroke="#cbd5e1" />
        <line x1={ox} y1="0" x2={ox} y2={h} stroke="#cbd5e1" />
        <polyline points={pts.join(" ")} fill="none" stroke="#7c3aed" strokeWidth="2.5" />
      </svg>
      <p className="text-center font-bold text-violet-700">y = {m}x + {c}</p>
      <div className="flex gap-4 mt-1 text-sm">
        <label className="flex-1">
          slope m = {m}
          <input type="range" min={-5} max={5} value={m} onChange={(e) => setM(+e.target.value)} className="w-full" />
        </label>
        <label className="flex-1">
          intercept c = {c}
          <input type="range" min={-6} max={6} value={c} onChange={(e) => setC(+e.target.value)} className="w-full" />
        </label>
      </div>
    </div>
  );
}

const WIDGETS: Record<string, () => React.ReactElement> = {
  "fraction-bar": FractionBar,
  "number-line": NumberLine,
  "probability-spinner": ProbabilitySpinner,
  "function-grapher": FunctionGrapher,
};

export default function Explorable({ widgetKey }: { widgetKey: string }) {
  const Widget = WIDGETS[widgetKey];
  if (!Widget) return null;
  return (
    <div className="bg-white rounded-2xl border border-violet-100 p-4">
      <div className="text-xs font-black text-violet-500 mb-2 uppercase tracking-wide">🔬 Try it yourself</div>
      <Widget />
    </div>
  );
}

export function hasWidget(key?: string): boolean {
  return !!key && key in WIDGETS;
}
