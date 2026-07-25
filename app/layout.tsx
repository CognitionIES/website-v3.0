import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
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

// Body font — finalized as Lexend (font A/B testing via FontSwitcher removed).
const lexend = Lexend({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-lexend", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Plant Engineering, Mechanical Design & IT Staffing | Cognition IES",
    template: "%s | Cognition IES",
  },
  description:
    "Cognition IES provides engineering services, IT staff augmentation, plant engineering, mechanical design, product engineering and digital twin solutions.",
  keywords: [
    "staff augmentation",
    "design & engineering",
    "it staff augmentation services",
    "engineering industrial",
    "asset management company",
    "mechanical design",
    "supply and chain management",
    "mechanical design engineering",
    "Plant engineering services",
    "Product engineering services",
    "Mechanical design services",
    "Industrial automation solutions",
    "Digital twin solutions",
    "Process design engineering",
    "engineering company in vadodara",
    "aveva mes",
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
    title: "Plant Engineering, Mechanical Design & IT Staffing | Cognition IES",
    description:
      "Cognition IES provides engineering services, IT staff augmentation, plant engineering, mechanical design, product engineering and digital twin solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cognition IES - Engineering Smarter Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plant Engineering, Mechanical Design & IT Staffing | Cognition IES",
    description: "Cognition IES provides engineering services, IT staff augmentation, plant engineering, mechanical design, product engineering and digital twin solutions.",
    images: ["/og-image.png"],
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
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
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
    <html lang="en" className={lexend.variable}>
      <head>
        {/* DNS prefetch for third-party services (font <link> tags removed —
            next/font above self-hosts and inlines fonts, eliminating the
            render-blocking external request this used to cause) */}
        <link rel="dns-prefetch" href="https://api.web3forms.com" />

        {/* Site-wide JSON-LD schema */}
        <SchemaMarkup schema={[organizationSchema, websiteSchema, professionalServiceSchema]} />
      </head>
      <body>
        <PageLoader />
        <NavigationProgress />
        <main>{children}</main>
        <ChatWidget />
        <LeadMagnet />
        <Analytics />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}