import type { MetadataRoute } from "next"

const SITE = "https://jetskihawaii.com"

/**
 * Replaces the static public/sitemap.xml, which came from a free generator and
 * had lastmod frozen at 2025-04-08 — telling Google nothing had changed in over
 * a year. This regenerates on every build.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/booking`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ]
}
