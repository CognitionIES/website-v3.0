"use client";

import PageHero from "@/components/shared/PageHero";
import { CONTACT_CONSTANTS } from "@/constants/contactPage/constants";

export default function HeroSection() {
  const { IMAGE, TITLE, SUBTITLE } = CONTACT_CONSTANTS.HERO;

  return (
    <PageHero
      image={IMAGE}
      title={TITLE}
      subtitle={SUBTITLE}
      align="left"
      breadcrumbs={[{ label: TITLE, href: "/contact" }]}
    />
  );
}
