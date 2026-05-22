import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Get in Touch with Our Engineering Team",
  description:
    "Reach out to Cognition IES for product engineering, plant engineering, SaaS, or staffing enquiries. Offices in India and the USA. We reply within one business day.",
  path: "/contact",
  keywords: [
    "contact cognition ies",
    "engineering consultancy contact",
    "engineering services enquiry",
    "india engineering company contact",
  ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: "Contact Us", url: "/contact" }])} />
      {children}
    </>
  );
}
