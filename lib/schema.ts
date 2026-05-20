/**
 * JSON-LD Schema Markup — Cognition IES
 * Generates structured data for Google rich results.
 */

const BASE = "https://www.cognitionies.com";

/** Organisation schema — injected on every page */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cognition IES",
  url: BASE,
  logo: `${BASE}/images/logo.png`,
  description:
    "Cognition IES delivers advanced engineering services — product engineering, plant engineering, SaaS solutions for industries worldwide.",
  foundingDate: "2005",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "info@cognitionies.com",
      contactType: "customer service",
      areaServed: ["IN", "US"],
      availableLanguage: "English",
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "USA",
    },
  ],
  sameAs: [
    "https://in.linkedin.com/company/cognition-ies",
  ],
};

/** Website schema with SearchAction */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cognition IES",
  url: BASE,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE}/faq?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

/** Professional service schema */
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cognition IES",
  url: BASE,
  description: "Engineering consultancy offering product engineering, plant engineering, SaaS solutions related services.",
  serviceType: [
    "Product Engineering",
    "Plant Engineering",
    "SaaS Solutions",
    //"Staffing & Recruitment",
  ],
  areaServed: ["India", "USA", "Global"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engineering Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Engineering", url: `${BASE}/services/product-engineering` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plant Engineering", url: `${BASE}/services/plant-engineering` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ServiceCPQ SaaS", url: `${BASE}/services/saas-solution/servicecpq` } },
    ],
  },
};

/** Breadcrumb schema builder */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${BASE}${item.url}`,
      })),
    ],
  };
}

/** FAQ schema builder — pass array of {q, a} */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/** JobPosting schema builder */
export function jobSchema(job: {
  title: string;
  description: string;
  datePosted: string;
  location: string;
  employmentType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    hiringOrganization: {
      "@type": "Organization",
      name: "Cognition IES",
      sameAs: BASE,
      logo: `${BASE}/images/logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: job.location },
    },
    employmentType: job.employmentType,
    industry: "Engineering Services",
  };
}
