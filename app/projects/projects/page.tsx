"use client";

import React from "react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import HeroSection from "./HeroSection";
import Footer from "@/components/Footer";
import ProjectsGrid from "./AboutSection";
import CTASection from "@/components/CTA";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <MegaMenu />
      <HeroSection />
      <ProjectsGrid />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Projects;
