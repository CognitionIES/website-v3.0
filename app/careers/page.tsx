// app/careers/page.tsx
"use client";

import Footer from "@/components/Footer";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import AboutSection from "./AboutSection";
import OpenPositions from "./OpenPositions";
// import OpenPositions from "./OpenPositions";  ← add when ready

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      <MegaMenu />
      <HeroSection />
      <OpenPositions />
      <BenefitsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}