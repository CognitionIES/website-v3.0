import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "FAQs | Frequently Asked Questions About Our Engineering Services",
  description:
    "Find answers to common questions about Cognition IES engineering services, project timelines, SaaS solutions, and how to work with us.",
  path: "/faq",
  keywords: [
    "engineering services faq",
    "cognition ies questions",
    "engineering consultancy faq",
  ],
});

const TOP_FAQS = [
  { q: "What engineering services does Cognition IES offer?", a: "Cognition IES offers four core services: Product Engineering, Plant Engineering and SaaS Solutions (ServiceCPQ)." },
  { q: "Where is Cognition IES located?", a: "Cognition IES operates from offices in USA (HQ) and India, serving clients globally." },
  { q: "How can I contact Cognition IES?", a: "You can reach us at info@cognitionies.com or through the contact form on our website. We respond within one business day." },
 // { q: "Does Cognition IES offer staffing services?", a: "Yes, we connect exceptional engineering talent with leading organisations across India and the USA for contract, permanent, and project-based roles." },
];

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: "FAQs", url: "/faq" }])} />
      <SchemaMarkup schema={faqSchema(TOP_FAQS)} />
      {children}
    </>
  );
}
