import type { MetadataRoute } from "next";

// این فایل خودکار توسط Next.js به /robots.txt تبدیل می‌شود.
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.makateam.ir";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
