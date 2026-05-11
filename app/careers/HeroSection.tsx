"use client";

import PageHero from "@/components/shared/PageHero";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";

export default function HeroSection() {
  const { IMAGE, TITLE, SUBTITLE } = CAREERS_CONSTANTS.HERO;

  const scrollToForm = () => {
    document.getElementById("careers-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageHero
      image={IMAGE}
      title={TITLE}
      subtitle={SUBTITLE}
      align="center"
      breadcrumbs={[
        { label: "Staffing", href: "/services/staffing" },
        { label: "Job Seekers", href: "/services/staffing/job-seekers" },
      ]}
      onScrollDown={scrollToForm}
    />
  );
}
