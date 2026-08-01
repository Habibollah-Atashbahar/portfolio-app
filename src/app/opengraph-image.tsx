import { ImageResponse } from "next/og";

// این فایل خودکار توسط Next.js یک تصویر ۱۲۰۰×۶۳۰ برای پیش‌نمایش لینک
// (تلگرام، واتساپ، توییتر، لینکدین و...) می‌سازد — بدون نیاز به هیچ فایل تصویری ثابت.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
          background:
            "linear-gradient(135deg, #0284c7 0%, #075985 55%, #312e81 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#f8fafc",
            letterSpacing: 12,
            display: "flex",
          }}
        >
          MAKA
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            color: "#e0f2fe",
            letterSpacing: 3,
            display: "flex",
          }}
        >
          Software Developers Team
        </div>
      </div>
    ),
    { ...size }
  );
}
