import { ImageResponse } from "next/og";
import { site } from "@/data";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F6F4EE",
          color: "#16150F",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#5E5B52" }}>
          {site.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 168, lineHeight: 0.95, letterSpacing: -6 }}>
          <span>El-ameen</span>
          <span style={{ fontStyle: "italic" }}>Daiyabu</span>
        </div>
        <div style={{ display: "flex", height: 1, background: "#DDD9CF" }} />
      </div>
    ),
    { ...size },
  );
}
