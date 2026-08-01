import type { MetadataRoute } from "next";
import { dictionary } from "@/context/dictionary";

// این فایل خودکار توسط Next.js به /sitemap.xml تبدیل می‌شود.
// گوگل و موتورهای جست‌وجو از همین آدرس صفحات سایت را پیدا و ایندکس می‌کنند.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.makateam.ir";

  const projectPages: MetadataRoute.Sitemap = dictionary.en.work.items.map(
    (item) => ({
      url: `${baseUrl}/work/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
  ];
}
