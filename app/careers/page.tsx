// app/careers/page.tsx
"use client";

import Footer from "@/components/Footer";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import CTABanner from "@/components/shared/CTABanner";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import AboutSection from "./AboutSection";
import OpenPositions from "./OpenPositions";

export default function CareersPage() {
  return (
    <div className="bg-white">
      <MegaMenu />
      <HeroSection />
      <OpenPositions />
      <BenefitsSection />
      <AboutSection />
      <CTABanner
        eyebrow="Join Our Team"
        title="Ready to build something great?"
        accentWord="great"
        description="Explore open roles and become part of a team that engineers real-world impact."
        buttons={[
          { label: "View Open Roles", href: "#open-positions", variant: "primary" },
          { label: "Contact Us",      href: "/contact",        variant: "outline" },
        ]}
      />
      <Footer />
    </div>
  );
}