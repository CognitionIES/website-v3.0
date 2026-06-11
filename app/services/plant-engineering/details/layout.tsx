import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Plant Engineering Services in Detail",
  description:
    "Detailed overview of Cognition IES plant engineering services, covering process, piping, electrical, instrumentation, civil and structural disciplines.",
  path: "/services/plant-engineering/details",
});

export default function PlantDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
