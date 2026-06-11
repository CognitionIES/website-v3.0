import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ENGINEERING_TALENT } from "@/constants/projects/engineering-talent";
import Content from "./Content";

export const metadata: Metadata = buildMetadata({
  title: "Engineering Talent Deployment | Projects",
  description: ENGINEERING_TALENT.metaDescription,
  path: "/projects/engineering-talent-deployment",
});

export default function Page() {
  return <Content />;
}
