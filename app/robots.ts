import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Stops search bots from crawling API endpoints
    },
    sitemap: "https://www.designerpal.in/sitemap.xml",
  };
}
