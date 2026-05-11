"use client";

import CTABanner from "@/components/shared/CTABanner";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";

export default function CTASection() {
  const { TEXT } = ABOUT_CONSTANTS;

  return (
    <CTABanner
      title={TEXT.CTA_TITLE}
      description={TEXT.CTA_DESC}
      buttons={[
        { label: "Get in Touch", href: "/contact", variant: "primary" },
        { label: "Explore Services", href: "/services", variant: "outline" },
      ]}
    />
  );
}
