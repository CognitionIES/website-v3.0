"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import PlantServicesExpanded from "./PlantServicesExpanded";

export default function PlantEngineeringPage() {
  return (
    <div className="min-h-screen bg-white">
      <MegaMenu />
      <HeroSection />
      <AboutSection />
      <PlantServicesExpanded />
      <CTASection />
      <Footer />
    </div>
  );
}