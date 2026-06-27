import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | How We Collect, Use & Protect Your Data",
  description:
    "Read the Cognition IES privacy policy covering what personal data we collect, how we use it, analytics and cookies, marketing communications, international data transfers, security, disclosures, and your privacy rights.",
  path: "/privacy-policy",
  keywords: [
    "cognition ies privacy policy",
    "data protection policy",
    "personal data collection",
    "cookie policy",
    "user privacy rights",
    "data security policy",
  ],
});

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: "Privacy Policy", url: "/privacy-policy" }])} />
      {children}
    </>
  );
}
