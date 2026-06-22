"use client";

import { useStore } from "@/lib/store";

export default function Certificate() {
  const { activeProfile, progress, rank } = useStore();
  if (!activeProfile || !progress) return null;
  const today = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div>
      <div className="bg-white rounded-3xl border-8 border-double border-violet-300 p-8 text-center max-w-2xl mx-auto card-shadow">
        <div className="text-5xl mb-2">🏅</div>
        <div className="text-sm uppercase tracking-widest text-violet-400 font-bold">Certificate of Achievement</div>
        <h1 className="text-3xl font-black text-violet-700 my-3">Maths Quest · Year 6 CBSE</h1>
        <p className="text-gray-500">This certifies that</p>
        <p className="text-2xl font-black text-gray-800 my-2">
          {activeProfile.avatar} {activeProfile.name}
        </p>
        <p className="text-gray-600">
          has earned <span className="font-black text-amber-500">{progress.stars} ⭐</span> and reached the rank of
        </p>
        <p className="text-xl font-black text-fuchsia-600 my-2">
          {rank.emoji} {rank.name}
        </p>
        <p className="text-sm text-gray-400 mt-4">{today}</p>
      </div>
      <div className="text-center mt-4 no-print">
        <button onClick={() => window.print()} className="px-5 py-2.5 rounded-xl bg-violet-600 text-white font-bold">
          🖨️ Print / Save as PDF
        </button>
      </div>
    </div>
  );
}
