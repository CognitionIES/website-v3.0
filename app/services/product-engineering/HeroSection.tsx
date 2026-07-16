"use client";

import PageHero from "@/components/shared/PageHero";
import heroImage from "@/constants/images/product-engineering/hero.webp";

export default function HeroSection() {
  return (
    <PageHero
      image={heroImage}
      title="Product Engineering Services"
      subtitle="Our Services"
      description="Innovative engineering solutions for complex challenges."
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Product Engineering", href: "/services/product-engineering" },
      ]}
    />
  );
}
