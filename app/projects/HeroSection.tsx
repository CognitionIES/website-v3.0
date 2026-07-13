"use client";

import PageHero from "@/components/shared/PageHero";
import HeroImage from "@/constants/images/projects/digitalization/hero.webp";

export default function HeroSection() {
  return (
    <PageHero
      image={HeroImage}
      title="Our Projects"
      subtitle="Our Work"
      breadcrumbs={[{ label: "Projects", href: "/projects" }]}
    />
  );
}
