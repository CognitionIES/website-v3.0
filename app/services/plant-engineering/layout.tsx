import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Plant Engineering Services",
  description:
    "Comprehensive plant engineering services, process & safety, piping, structural, civil, mechanical, electrical, instrumentation, modular, and procurement engineering for process industries.",
  path: "/services/plant-engineering",
  keywords: [
  "plant engineering",
  "process engineering",
  "piping engineering",
  "instrumentation engineering",
  "structural engineering",
  "civil engineering",
  "plant engineering India",
  "HAZOP studies",
  "P&ID development",
  "piping isometric drawings",
  "single line diagram design",
  "FEED engineering",
  "brownfield plant engineering",
  "greenfield plant engineering",
],
});

export default function PlantEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
