"use client";

import PageHero from "@/components/shared/PageHero";

const heroImage = "/images/projects/pcm/hero.jpg";

export default function HeroSection() {
  return (
    <PageHero
      image={heroImage}
      title="Industrial Equipment Cost Optimisation"
      subtitle="Case Study"
      description="Value engineering and competitive benchmarking to achieve 35% cost reduction and 50% margin improvement."
      breadcrumbs={[
        { label: "Projects", href: "/projects" },
        { label: "Product Cost Management", href: "/projects/product-cost-management" },
      ]}
    />
  );
}
