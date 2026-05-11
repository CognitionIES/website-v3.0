"use client";

import PageHero from "@/components/shared/PageHero";

export default function Hero() {
  return (
    <PageHero
      image="/images/faq-hero.jpg"
      title="Frequently Asked Questions"
      subtitle="Support"
      breadcrumbs={[{ label: "FAQs", href: "/faq" }]}
    />
  );
}
