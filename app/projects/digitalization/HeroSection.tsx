"use client";

import PageHero from "@/components/shared/PageHero";
import heroImage from "@/constants/images/projects/digitalization/hero.jpg";

export default function HeroSection() {
  return (
    <PageHero
      image={heroImage}
      title="Digitalization"
      subtitle="Case Study"
      description="3D scanning, digital twin creation, and real-time data integration for a leading industrial chemical manufacturer."
      breadcrumbs={[
        { label: "Projects", href: "/projects" },
        { label: "Digitalization", href: "/projects/digitalization" },
      ]}
    />
  );
}
