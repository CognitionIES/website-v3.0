/**
 * SEO utility generates consistent Metadata objects for every page.
 * Import and call buildMetadata() in each page's generateMetadata() export.
 */

import type { Metadata } from "next";

const BASE_URL = "https://www.cognitionies.com";
const SITE_NAME = "Cognition IES";
const DEFAULT_OG = `${BASE_URL}/og-default.jpg`;

interface SEOProps {
  title: string;
  description: string;
  /** Canonical path e.g. "/about" */
  path: string;
  /** Optional OG image URL */
  image?: string;
  /** Additional keywords */
  keywords?: string[];
  /** noindex pages (e.g. /jobs/[id]/applicants) */
  noIndex?: boolean;
}

const BASE_KEYWORDS = [
  "engineering services",
  "product engineering",
  "plant engineering",
  "engineering consultancy",
  "mechanical engineering",
  "industrial engineering",
  "Cognition IES",
  "engineering India",
  "engineering USA",
];

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG,
  keywords = [],
  noIndex = false,
}: SEOProps): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonical = `${BASE_URL}${path}`;
  const allKeywords = [...BASE_KEYWORDS, ...keywords].join(", ");

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: SITE_NAME, url: BASE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,

    alternates: {
      canonical,
    },

    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },

    robots: noIndex
      ? { index: false, follow: false }
      : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },

    verification: {
      // Add your actual verification tokens in .env
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? "",
    },
  };
}
