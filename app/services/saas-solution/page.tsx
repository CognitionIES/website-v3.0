"use client";

import React from "react";
import Hero from "./HeroSection";
import Features from "./FeaturesSection";
//import Problems from "./ProblemSection";
//import Benefits from "./BenefitsSection";
//import Integration from "./Integration";
import CTA from "./CTA";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import VideoShowcase from "./VideoShowcase";
import Partner from "./PartnerSection";
import WhyChoose from "./WhyChooseUs";
import Industries from "./IndustriesSection";

const Index = () => {
  return (
    <div>
      <MegaMenu />
      <Hero />
      <main className=" ">
        <Partner />
        <Features />
        <VideoShowcase />
        {/* <Benefits /> */}
        <Industries />
        {/* <Integration /> */}
        <div className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-[#009af]/5 rounded-l-[100px] -z-10"></div>
          <WhyChoose />
        </div>{" "}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
