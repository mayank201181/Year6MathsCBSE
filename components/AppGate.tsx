"use client";

import { useStore } from "@/lib/store";
import AuthGate from "./AuthGate";
import ProfilePicker from "./ProfilePicker";
import Header from "./Header";

export default function AppGate({ children }: { children: React.ReactNode }) {
  const { status } = useStore();

  if (status === "loading") {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
        <div className="text-6xl animate-floaty">🧮</div>
        <div className="text-lg font-bold text-violet-700">Loading Maths Quest…</div>
      </div>
    );
  }

  if (status === "anon") return <AuthGate />;
  if (status === "no-profile") return <ProfilePicker />;

  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6">{children}</main>
      <footer className="no-print text-center text-xs text-gray-400 py-6">
        Maths Quest · Year 6 CBSE · Learn by solving, not memorising.
      </footer>
    </>
  );
}
