// فقط تصاویر واقعی برند اینجا هستند — همه‌ی آیکون‌های تزیینی (خورشید/ماه، منو، پیکان و...)
// با آیکون‌های وکتور lucide-react جایگزین شدند تا حجم دانلود سایت کمتر و سریع‌تر بشه.
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import maka_bg from "./maka-bg.png";
import maka_dark from "./maka-dark.png";
import python from "./python.png";
import js from "./js.png";
import next from "./next.png";
import react from "./react.png";
import go from "./go.png";

export const assets = {
  logo,
  logo_dark,
  maka_bg,
  maka_dark,
  python,
  js,
  next,
  react,
  go,
};

// ابزارهای تصویری (لوگوی رسمی هر تکنولوژی، به‌صورت PNG)
export const imageTools = [
  { src: assets.python, name: "Python" },
  { src: assets.js, name: "JavaScript" },
  { src: assets.next, name: "Next.js" },
  { src: assets.react, name: "React" },
  { src: assets.go, name: "Go" },
];
