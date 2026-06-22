import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Staff Augmentation Services",
  description:
    "Engineering staff augmentation from Cognition IES. Add pre-vetted engineers to your team across plant, process, mechanical, electrical, instrumentation, civil/structural, CAE and plant-digitization disciplines. Onsite, offshore, and hybrid engagement models across India and the USA.",
  path: "/services/staff-augmentation",
  keywords: [
  "staff augmentation",
  "engineering staff augmentation",
  "resource augmentation",
  "engineering resource augmentation",
  "dedicated engineering team",
  "contract engineers",
  "offshore engineering team",
  "staff augmentation India",
  "time and material engagement model",
  "fixed price engineering staffing",
  "hire engineers on contract",
],
});

export default function StaffAugmentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
