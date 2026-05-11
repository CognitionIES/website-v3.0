import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import FaqButton from "../components/FaqButton";
import PageLoader from "../components/Loader";
import NavigationProgress from "../components/NavigationProgress";
import ChatWidget from "../components/ChatWidget";
import LeadMagnet from "../components/LeadMagnet";
import SchemaMarkup from "../components/SchemaMarkup";
import {
  organizationSchema,
  websiteSchema,
  professionalServiceSchema,
} from "../lib/schema";

const BASE = "https://www.cognitionies.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Cognition IES | Engineering Smarter Solutions",
    template: "%s | Cognition IES",
  },
  description:
    "Cognition IES delivers advanced engineering services — product engineering, plant engineering, SaaS solutions and staffing for process and product industries worldwide.",
  keywords: [
    "engineering services",
    "product engineering",
    "plant engineering",
    "engineering consultancy",
    "mechanical engineering services",
    "industrial engineering",
    "engineering staffing",
    "ServiceCPQ",
    "engineering company India",
    "engineering company USA",
    "Cognition IES",
  ],
  authors: [{ name: "Cognition IES", url: BASE }],
  creator: "Cognition IES",
  publisher: "Cognition IES",
  alternates: { canonical: BASE },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "Cognition IES",
    title: "Cognition IES | Engineering Smarter Solutions",
    description:
      "Advanced engineering services for product, plant, and process industries — delivered from India and the USA.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Cognition IES" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognition IES | Engineering Smarter Solutions",
    description: "Advanced engineering services for product, plant, and process industries.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon:        [{ url: "/favicon.ico" }, { url: "/favicon-32x32.png", sizes: "32x32" }],
    apple:       [{ url: "/apple-touch-icon.png" }],
    other:       [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0098AF" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for fonts — eliminates render-blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Font load — display=swap prevents FOUT */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
        {/* DNS prefetch for third-party services */}
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Site-wide JSON-LD schema */}
        <SchemaMarkup schema={[organizationSchema, websiteSchema, professionalServiceSchema]} />
      </head>
      <body>
        <PageLoader />
        <NavigationProgress />
        <div className="hidden lg:block">
          <FaqButton />
        </div>
        <main>{children}</main>
        <ChatWidget />
        <LeadMagnet />
        <Analytics />
      </body>
    </html>
  );
}
