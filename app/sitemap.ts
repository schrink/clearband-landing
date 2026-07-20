import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: "https://clearbandai.app",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://clearbandai.app/privacy",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://clearbandai.app/terms",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
