import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { IT_TALENT } from "@/constants/projects/it-talent";
import Content from "./Content";

export const metadata: Metadata = buildMetadata({
  title: "IT Talent Deployment | Projects",
  description: IT_TALENT.metaDescription,
  path: "/projects/it-talent-deployment",
  keywords: [
    "IT staff augmentation case study",
    "full stack development team staffing",
    "React Node.js contract developers",
    "IT contract staffing India",
    "dedicated development team deployment",
    "tech talent sourcing case study",
    "payroll and compliance staffing",
    "rapid IT hiring turnaround",
    "software developer contract staffing",
    "IT resource augmentation USA",
  ],
});

export default function Page() {
  return <Content />;
}
