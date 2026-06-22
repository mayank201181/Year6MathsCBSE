import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maths Quest — Year 6 (CBSE)",
    short_name: "Maths Quest",
    description: "Master CBSE Class 6 Maths by solving: guides, quizzes, exams, an AI tutor and rewards.",
    start_url: "/",
    display: "standalone",
    background_color: "#fef9f3",
    theme_color: "#7c3aed",
    orientation: "portrait",
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
