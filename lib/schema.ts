/**
 * JSON-LD Schema Markup | Cognition IES
 * Generates structured data for Google rich results.
 */

const BASE = "https://www.cognitionies.com";

/** Organisation schema | injected on every page */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cognition IES",
  url: BASE,
  logo: `${BASE}/images/logo.png`,
  description:
    "Cognition IES delivers advanced engineering services, product engineering, plant engineering, SaaS solutions for industries worldwide.",
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
  // Single real address (USA HQ) — the previous version listed two
  // vague country-only entries (one for a US office that doesn't exist).
  // A real street/locality/postal code is what Google's guidance actually
  // wants here; country-only entries carry little value.
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "1st Floor, Vadodara Hyper Complex, Rhino Circle, Dr Vikram Sarabhai Marg, Alkapuri",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390007",
    addressCountry: "IN",
  },
  sameAs: ["https://in.linkedin.com/company/cognition-ies"],
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
  description:
    "Engineering consultancy offering product engineering, plant engineering, SaaS solutions, and engineering staff augmentation related services.",
  serviceType: [
    "Product Engineering",
    "Plant Engineering",
    "SaaS Solutions",
    "Staff Augmentation",
  ],
  areaServed: ["India", "USA", "Global"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engineering Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Engineering", url: `${BASE}/services/product-engineering` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plant Engineering", url: `${BASE}/services/plant-engineering` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ServiceCPQ SaaS", url: `${BASE}/services/saas-solution` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Staff Augmentation", url: `${BASE}/services/staff-augmentation` } },
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

/** FAQ schema builder | pass array of {q, a} */
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

/**
 * JobPosting schema builder.
 * validThrough, remote, and baseSalary are optional additions — existing
 * calls with just the original 5 fields still work unchanged.
 */
export function jobSchema(job: {
  title: string;
  description: string;
  datePosted: string;
  location: string;
  employmentType: string;
  validThrough?: string; // ISO 8601 date; add if the posting expires
  remote?: boolean; // true = fully remote role
  country?: string; // ISO 3166-1 alpha-2, defaults to "IN"
  baseSalary?: { currency: string; min: number; max: number; unit?: "YEAR" | "MONTH" | "HOUR" };
}) {
  const schema: Record<string, unknown> = {
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
    employmentType: job.employmentType,
    industry: "Engineering Services",
  };

  if (job.validThrough) {
    schema.validThrough = job.validThrough;
  }

  if (job.remote) {
    schema.jobLocationType = "TELECOMMUTE";
    schema.applicantLocationRequirements = {
      "@type": "Country",
      name: job.country === "US" ? "United States" : "India",
    };
  } else {
    schema.jobLocation = {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: job.location, addressCountry: job.country ?? "IN" },
    };
  }

  if (job.baseSalary) {
    schema.baseSalary = {
      "@type": "MonetaryAmount",
      currency: job.baseSalary.currency,
      value: {
        "@type": "QuantitativeValue",
        minValue: job.baseSalary.min,
        maxValue: job.baseSalary.max,
        unitText: job.baseSalary.unit ?? "YEAR",
      },
    };
  }

  return schema;
}