import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const size = Math.min(512, Math.max(48, Number(searchParams.get("size")) || 512));
  const maskable = searchParams.get("maskable") === "1";
  const pad = maskable ? size * 0.12 : 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7c3aed 0%, #c026d3 100%)",
          padding: pad,
        }}
      >
        <div style={{ fontSize: size * 0.42, fontWeight: 900, color: "white", lineHeight: 1 }}>√x</div>
        <div style={{ fontSize: size * 0.14, fontWeight: 800, color: "#fde68a", marginTop: size * 0.04 }}>
          MATHS
        </div>
      </div>
    ),
    { width: size, height: size },
  );
}
