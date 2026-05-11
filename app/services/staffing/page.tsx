"use client";

import React from "react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import HeroSection from "./HeroSection";
import StaffingColumns from "./StaffingColumns";
import AboutSection from "./AboutSection1"

export default function StaffingPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <MegaMenu />
      <HeroSection />
      <AboutSection />
      <StaffingColumns />
      <Footer />
    </div>
  );
}