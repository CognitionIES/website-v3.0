import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ENGINEERING_TALENT } from "@/constants/projects/engineering-talent";
import Content from "./Content";

export const metadata: Metadata = buildMetadata({
  title: "Engineering Talent Deployment | Projects",
  description: ENGINEERING_TALENT.metaDescription,
  path: "/projects/engineering-talent-deployment",
  keywords: [
    "engineering staff augmentation case study",
    "multi-disciplinary engineering team",
    "contract engineering staffing",
    "engineering resource deployment",
    "SmartPlant 3D staffing",
    "CAESAR II engineers",
    "STAAD Pro engineers",
    "piping and instrumentation engineers",
    "mechanical electrical instrumentation staffing",
    "offshore engineering support team",
    "engineering talent India USA",
  ],
});

export default function Page() {
  return <Content />;
}
