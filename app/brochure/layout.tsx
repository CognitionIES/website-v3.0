import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Engineering Brochures | Download Product & Plant Engineering Guides",
  description:
    "Download the Cognition IES engineering service brochures for Product Engineering and Plant Engineering. Detailed capability guides in PDF format.",
  path: "/brochure",
  keywords: [
    "engineering brochure download",
    "product engineering pdf",
    "plant engineering guide",
    "engineering services brochure",
  ],
});

export default function BrochureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: "Brochures", url: "/brochure" }])} />
      {children}
    </>
  );
}
