import { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/jobs/",          // internal job detail pages (Supabase-driven)
          "/api/",           // API routes
          "/_next/",         // Next.js internals
          "/admin/",         // any admin paths
        ],
      },
      {
        // Block AI training crawlers
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "CCBot",
          "anthropic-ai",
        ],
        disallow: "/",
      },
    ],
    sitemap: "https://www.cognitionies.com/sitemap.xml",
    host: "https://www.cognitionies.com",
  };
}
