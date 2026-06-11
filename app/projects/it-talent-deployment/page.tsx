import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { IT_TALENT } from "@/constants/projects/it-talent";
import Content from "./Content";

export const metadata: Metadata = buildMetadata({
  title: "IT Talent Deployment | Projects",
  description: IT_TALENT.metaDescription,
  path: "/projects/it-talent-deployment",
});

export default function Page() {
  return <Content />;
}
