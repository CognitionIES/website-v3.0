import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Projects | Engineering & Staff Augmentation Case Studies",
  description:
    "Explore Cognition IES project case studies: manufacturing plant digitalization, product cost management for a log splitter line, and engineering and IT staff augmentation deployments across India and the USA.",
  path: "/projects",
  keywords: [
    "engineering case studies",
    "plant digitalization project",
    "product cost management case study",
    "staff augmentation case study",
    "engineering talent deployment",
    "IT talent deployment",
    "digital twin manufacturing project",
    "value engineering case study",
  ],
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: "Projects", url: "/projects" }])} />
      {children}
    </>
  );
}
