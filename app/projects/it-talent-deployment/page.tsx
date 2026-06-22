import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { IT_TALENT } from "@/constants/projects/it-talent";
import Content from "./Content";

export const metadata: Metadata = buildMetadata({
  title: "Product Cost Management | Projects",
  description:
    "Value engineering and competitive benchmarking of a log splitter product line, identifying cost reduction and margin improvement through detailed cost and function analysis.",
  path: "/projects/product-cost-management",
  keywords: [
    "value engineering case study",
    "VAVE methodology",
    "product cost reduction",
    "competitive benchmarking",
    "should costing",
    "industrial equipment cost optimisation",
    "design for cost reduction",
    "reverse engineering competitor products",
    "manufacturing cost analysis",
    "product cost optimization consulting",
  ],
});

export default function Page() {
  return <Content />;
}
