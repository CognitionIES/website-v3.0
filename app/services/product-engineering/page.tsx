"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTA";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProductServicesExpanded from "./ProductServicesExpanded";

export default function ProductEngineeringPage() {
  return (
    <div className="min-h-screen bg-white">
      <MegaMenu />
      <HeroSection />
      <AboutSection />
      <ProductServicesExpanded />
      <CTASection />
      <Footer />
    </div>
  );
}