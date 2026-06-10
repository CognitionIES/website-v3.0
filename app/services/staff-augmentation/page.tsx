"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import EngagementModels from "./EngagementModels";
import HowItWorks from "./HowItWorks";
import ShareRequirement from "./ShareRequirement";

// Narrative arc: promise (Hero) → idea (About) → terms (Models)
// → process (HowItWorks) → action (ShareRequirement).
// No generic CTA section: the form is the single conversion point.
export default function StaffAugmentationPage() {
  return (
    <div className="min-h-screen bg-white">
      <MegaMenu />
      <HeroSection />
      <AboutSection />
      <EngagementModels />
      <HowItWorks />
      <ShareRequirement />
      <Footer />
    </div>
  );
}
