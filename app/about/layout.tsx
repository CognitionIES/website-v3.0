import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Engineering Excellence Since 2010",
  description:
    "Learn about Cognition IES — a global engineering consultancy with offices in India and the USA, delivering product engineering, plant engineering, SaaS and staffing services.",
  path: "/about",
  keywords: [
    "about cognition ies",
    "engineering consultancy india usa",
    "engineering company history",
    "product engineering firm",
    "plant engineering company",
  ],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: "About Us", url: "/about" }])} />
      {children}
    </>
  );
}
