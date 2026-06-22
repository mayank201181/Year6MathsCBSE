import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import AppGate from "@/components/AppGate";
import Mascot from "@/components/Mascot";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Maths Quest — Year 6 (CBSE)",
  description:
    "A friendly, problem-solving way to master CBSE Class 6 Maths: illustrated guides, quizzes, exam practice, an AI tutor and rewards.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Maths Quest",
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <StoreProvider>
          <AppGate>{children}</AppGate>
          <Mascot />
        </StoreProvider>
      </body>
    </html>
  );
}
