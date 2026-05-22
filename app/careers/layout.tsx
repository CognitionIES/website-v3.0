import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Careers | Engineering Jobs at Cognition IES",
  description:
    "Join Cognition IES and work on cutting-edge engineering projects across India and the USA. We hire product engineers, plant engineers, software engineers, and more.",
  path: "/careers",
  keywords: [
    "engineering jobs india",
    "engineering jobs usa",
    "product engineer job",
    "plant engineer career",
    "engineering recruitment",
    "mechanical engineer hiring",
  ],
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: "Careers", url: "/careers" }])} />
      {children}
    </>
  );
}
