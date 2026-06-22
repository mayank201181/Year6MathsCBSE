import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <div style={{ fontSize: 78, fontWeight: 900, color: "white" }}>√x</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#fde68a" }}>MATHS</div>
      </div>
    ),
    { ...size },
  );
}
