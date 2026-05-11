import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Product Engineering Services",
  description:
    "End-to-end product engineering services — mechanical design, electrical engineering, CAE/CFD, prototyping, hydraulic engineering, embedded systems, asset management, technical publication, and supply chain management.",
  path: "/services/product-engineering",
  keywords: [
    "product engineering services",
    "mechanical design services",
    "CAE CFD analysis",
    "embedded systems engineering",
    "product development India",
    "engineering consultancy",
  ],
});

export default function ProductEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
