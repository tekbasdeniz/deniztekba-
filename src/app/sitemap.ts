import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://deniztekbas.com";
  const lastModified = new Date();

  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/news`, lastModified, changeFrequency: "weekly", priority: 0.75 },
    { url: `${siteUrl}/consulting`, lastModified, changeFrequency: "weekly", priority: 0.85 },
  ];
}
