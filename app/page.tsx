"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import Hero from "@/components/HomePage/Hero";
import AboutUs from "@/components/HomePage/AboutUs";
import RecentProjects from "@/components/HomePage/RecentProjects";
import ServicesShowcase from "@/components/ServicesShowcase";
import CTA from "@/components/CTA";
import {
  SkeletonBlock,
  SkeletonSectionHeader,
  SkeletonText,
} from "@/components/shared/Skeleton";
import EngagementCarousel from "@/components/HomePage/EngagementModel";
import WhyPartnerWithUs from "@/components/HomePage/WhyPartnerWithUs";

// Lazy-load below-fold heavy sections
const Testimonials = dynamic(
  () => import("@/components/HomePage/Testimonials"),
  { ssr: false },
);
const Careers = dynamic(() => import("@/components/HomePage/Careers"), {
  ssr: false,
});

/** Minimal section-level skeleton while dynamic sections load */
function SectionSkeleton() {
  return (
    <div className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <SkeletonSectionHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkeletonText lines={4} />
        <SkeletonBlock className="h-56 rounded-2xl" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      <MegaMenu />
      <Hero />
      <AboutUs />
      <WhyPartnerWithUs />
      <ServicesShowcase />
      <EngagementCarousel />
      <RecentProjects />
      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Careers />
      </Suspense>
      <CTA />
      <Footer />
    </div>
  );
}