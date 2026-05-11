"use client";

import { BROCHURE_CONSTANTS } from "@/constants/brochurePage/constants";
import PageHero from "@/components/shared/PageHero";

export default function Banner() {
  return (
    <PageHero
      image={BROCHURE_CONSTANTS.BANNER_IMAGE.heroImage}
      title="Engineering Brochures"
      subtitle="Download our detailed service brochures to explore our capabilities."
      align="left"
      breadcrumbs={[{ label: "Brochures", href: "/brochure" }]}
    />
  );
}
