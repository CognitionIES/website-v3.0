import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Engineering Disciplines | Mechanical, Electrical, CAE/CFD & More",
  description:
    "Explore Cognition IES's product engineering disciplines: mechanical design, electrical engineering, CAE/CFD, prototyping, hydraulic engineering, asset management, embedded systems, technical publication, and supply chain management.",
  path: "/services",
  keywords: [
    "mechanical design services",
    "electrical design services",
    "CAE CFD analysis",
    "prototyping 3D printing",
    "hydraulic engineering services",
    "asset management services",
    "embedded systems engineering",
    "technical publication services",
    "supply chain management procurement",
    "engineering disciplines overview",
  ],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: "Services", url: "/services" }])} />
      {children}
    </>
  );
}
z