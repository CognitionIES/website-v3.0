import { MetadataRoute } from "next";

const BASE = "https://www.cognitionies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const routes: MetadataRoute.Sitemap = [
    // Core pages — highest priority
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/brochure`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Services — high priority (core revenue pages)
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE}/services/product-engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/plant-engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/saas-solution/servicecpq`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // { url: `${BASE}/services/staffing`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // { url: `${BASE}/services/staffing/job-seeker`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    // Product Engineering sub-services (clean semantic URLs)
    { url: `${BASE}/services/product-engineering/mechanical-design`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/product-engineering/electrical-engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/product-engineering/cae-cfd`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/product-engineering/prototyping-3d-printing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/product-engineering/hydraulic-engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/product-engineering/asset-management`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/product-engineering/embedded-systems`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/product-engineering/technical-publication`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/product-engineering/supply-chain-management`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Plant Engineering detail page
    { url: `${BASE}/services/plant-engineering/details`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // Projects
    { url: `${BASE}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/projects/digitalization`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/projects/product-cost-management`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },

    // Industries
    // { url: `${BASE}/industries`,              lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    // { url: `${BASE}/industries/mobility`,     lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    // { url: `${BASE}/industries/tech`,         lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    // { url: `${BASE}/industries/sustainability`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },

    // Legal
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes;
}
