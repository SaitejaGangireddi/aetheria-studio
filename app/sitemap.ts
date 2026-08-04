import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://workspace-alpha-drab.vercel.app"\;

  const routes = ["", "/insights/nextjs-vs-wordpress-speed-audit", "/insights/bento-ui-architecture-guide", "/insights/high-ticket-conversion-engineering"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  return routes;
}
