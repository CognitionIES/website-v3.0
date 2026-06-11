"use client";

import PageHero from "@/components/shared/PageHero";
import { PLANT_ENGINEERING_CONSTANTS } from "@/constants/plant-engineering/constants";

export default function HeroSection() {
  const { IMAGE, TITLE, SUBTITLE } = PLANT_ENGINEERING_CONSTANTS.HERO;
  return (
    <PageHero
      image={IMAGE}
      title={TITLE}
      subtitle="Our Services"
      description={SUBTITLE}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Plant Engineering", href: "/services/plant-engineering" },
      ]}
    />
  );
}
