import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.theclooneys.co.uk";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-03"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/weddings`,
      lastModified: new Date("2026-04-03"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date("2026-04-10"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/singing-waiters-scotland`,
      lastModified: new Date("2026-04-22"),
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/enquire`,
      lastModified: new Date("2026-04-03"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-04-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
