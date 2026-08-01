// رنگ‌بندی هر پروژه — یک نقطه‌ی مرکزی برای تعریف گرادیان کارت‌ها،
// هم توی لیست نمونه‌کارها و هم توی صفحه‌ی جزئیات پروژه استفاده می‌شود.
export type Accent = "ocean" | "violet" | "coffee" | "red";

export const accentGradient: Record<Accent, string> = {
  ocean: "from-ocean-500 to-ocean-700",
  violet: "from-violet-400 to-violet-500",
  coffee: "from-amber-500 to-ocean-700",
  red: "from-rose-300 to-red-900 ",
};
