"use client";

import PageHero from "@/components/shared/PageHero";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";

export default function Hero() {
  const { IMAGES, TEXT } = ABOUT_CONSTANTS;

  return (
    <PageHero
      image={IMAGES.HERO_IMAGE.HeroImage}
      title="Cognition IES"
      subtitle={TEXT.HERO_SUBTITLE}
      align="left"
      breadcrumbs={[{ label: "About Us", href: "/about" }]}
    />
  );
}
