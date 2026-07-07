import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Product Engineering Services Company | Engineering Solutions",
  description:
    "Cognition IES delivers end-to-end Product Engineering Services including product design, product development, mechanical engineering, CAD design, prototyping, testing, & Product Lifecycle Management to accelerate innovation & reduce time-to-market.",
  path: "/services/product-engineering",
  keywords: [
  "product engineering services",
  "mechanical design services",
  "CAE CFD analysis",
  "embedded systems engineering",
  "product development India",
  "engineering consultancy",
  "rapid prototyping services",
  "PCB design services",
  "FEA structural analysis",
  "battery management system design",
  "hydraulic system design",
  "technical documentation services",
],
});

export default function ProductEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
