import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://creatortax.in";
  const staticRoutes = ["", "/guides", "/tools", "/tools/44ada-calculator", "/about", "/contact", "/disclaimer", "/privacy", "/editorial-policy", "/corrections"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...articles.map((article) => ({ url: `${base}/guides/${article.slug}`, lastModified: new Date(article.date), changeFrequency: "monthly" as const, priority: 0.8 }))
  ];
}
