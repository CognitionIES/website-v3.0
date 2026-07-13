"use client";

import PageHero from "@/components/shared/PageHero";
import HeroImage from "@/constants/images/staff-augmentation/hero.webp";

export default function HeroSection() {
  return (
    <PageHero
      image={HeroImage}
      title="Staff Augmentation"
      subtitle="Our Services"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Staff Augmentation", href: "/services/staff-augmentation" },
      ]}
    />
  );
}
