import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jeslyn Wangsa — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #93a583 0%, #a9b99a 40%, #eff4e6 100%)",
          position: "relative",
        }}
      >
        {/* Dot grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(46,58,40,0.12) 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <span style={{ fontSize: 72, lineHeight: 1, marginBottom: 20 }}>🦒</span>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 52,
              fontWeight: 600,
              color: "#2e3a28",
              letterSpacing: "-0.01em",
              marginBottom: 8,
            }}
          >
            Jeslyn Wangsa
          </span>
          <span
            style={{
              fontSize: 20,
              color: "#4f6240",
              letterSpacing: "0.04em",
            }}
          >
            MITB (AI) · SMU
          </span>
          <div
            style={{
              width: 56,
              height: 3,
              background: "#d4a0af",
              borderRadius: 2,
              marginTop: 20,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
