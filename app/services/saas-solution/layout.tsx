import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "ServiceCPQ | AI-Powered After-Sales & Claims Platform",
  description:
    "Cognition IES is an authorized dealer of ServiceCPQ, an AI-powered after-sales platform unifying warranty claims, Configure Price Quote (CPQ), and repair workflows for HVAC, heavy equipment, medical device, CNC, and electrical & solar manufacturers.",
  path: "/services/saas-solution",
  keywords: [
    "ServiceCPQ",
    "after-sales SaaS platform",
    "AI powered CPQ",
    "warranty claims management software",
    "configure price quote software",
    "field service management software",
    "service quoting automation",
    "after-sales software for manufacturers",
  ],
});

export default function SaasSolutionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup
        schema={breadcrumbSchema([
          { name: "Services", url: "/services" },
          { name: "ServiceCPQ", url: "/services/saas-solution" },
        ])}
      />
      {children}
    </>
  );
}
