    "use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  Sparkles,
  Users,
  Rocket,
  ArrowRight,
} from "lucide-react";

const jobSeekerFeatures = [
  {
    title: "Verified Job Listings",
    description:
      "Browse carefully vetted opportunities that match your skillset and career goals.",
    icon: CheckCircle2,
  },
  {
    title: "Direct Application",
    description:
      "Our system connects you with roles that align with your unique potential and aspirations.",
    icon: Sparkles,
  },
  {
    title: "Career Profile Management",
    description:
      "Build and manage a profile that showcases your strengths to top employers.",
    icon: CheckCircle2,
  },
  {
    title: "Real-Time Alerts & Updates",
    description:
      "Get instant notifications when relevant opportunities matching your profile appear.",
    icon: Sparkles,
  },
  {
    title: "Resume Guidance & Career Tips",
    description:
      "Receive tailored coaching to help you present your best self to potential employers.",
    icon: CheckCircle2,
  },
];

const employerFeatures = [
  {
    title: "Dedicated Recruitment Specialists",
    description:
      "Work with industry experts who understand your specific talent needs and market dynamics.",
    icon: Sparkles,
  },
  {
    title: "Flexible Staffing Options",
    description:
      "Permanent, temporary, and contract staffing tailored to your operational requirements.",
    icon: CheckCircle2,
  },
  {
    title: "Complete Talent Acquisition",
    description:
      "End-to-end strategy and execution — from sourcing to onboarding.",
    icon: CheckCircle2,
  },
  {
    title: "Pre-Screening & Assessment",
    description:
      "Rigorous skill assessment and background checks so you only meet qualified candidates.",
    icon: Sparkles,
  },
  {
    title: "Employer Branding Support",
    description:
      "Strengthen your employer brand and improve candidate engagement throughout the process.",
    icon: Sparkles,
  },
];

function FeatureItem({
  title,
  description,
  icon: Icon,
  theme,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  theme: "seeker" | "employer";
}) {
  const iconColor =
    theme === "seeker" ? "text-[#0098af]" : "text-[#99D5DF]";
  const iconBg =
    theme === "seeker" ? "bg-[#0098af]/10" : "bg-white/10";

  return (
    <div className="flex items-start gap-3">
      <div className={`flex-shrink-0 w-8 h-8 rounded-full ${iconBg} flex items-center justify-center mt-0.5`}>
        <Icon className={`w-4 h-4 ${iconColor}`} />
      </div>
      <div>
        <p
          className={`text-sm font-semibold ${
            theme === "seeker" ? "text-[#003C46]" : "text-white"
          }`}
        >
          {title}
        </p>
        <p
          className={`text-sm mt-0.5 leading-relaxed ${
            theme === "seeker" ? "text-[#5b5b5b]" : "text-white/70"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function StaffingColumns() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            How We Help
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Tailored for Every Stakeholder
          </h2>
          <p className="mt-3 text-[#5b5b5b] max-w-2xl mx-auto">
            Whether you're building a career or building a team, we have the
            expertise, network, and tools to get you there faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Job Seekers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#E6F0F5] rounded-2xl p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#0098af]/15 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-[#0098af]" />
              </div>
              <h3 className="text-2xl font-bold text-[#003C46]">
                For Job Seekers
              </h3>
            </div>
            <p className="text-sm text-[#5b5b5b] italic mb-6">
              Find Opportunities That Match Your Potential
            </p>
            <p className="text-[#5b5b5b] leading-relaxed mb-8">
              Your job search should reflect your{" "}
              <span className="font-semibold text-[#0098af]">
                unique potential
              </span>
              . Our platform connects you with opportunities that align with
              your skills, goals, and values — creating a more meaningful path
              to your next career move.
            </p>
            <div className="space-y-5 flex-1">
              <p className="text-xs font-semibold text-[#0098af] uppercase tracking-wider">
                What We Offer
              </p>
              {jobSeekerFeatures.map((f, i) => (
                <FeatureItem
                  key={i}
                  title={f.title}
                  description={f.description}
                  icon={f.icon}
                  theme="seeker"
                />
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/services/staffing/job-seeker"
                className="inline-flex items-center gap-2 bg-[#0098af] text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-[#003C46] focus:outline-none focus:ring-2 focus:ring-[#0098af]/50 group"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Employers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="bg-[#003C46] rounded-2xl p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5 text-[#99D5DF]" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Employers</h3>
            </div>
            <p className="text-sm text-white/60 italic mb-6">
              Great Companies Are Built By Great Teams
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              Finding the right talent isn&apos;t just about filling
              positions — it&apos;s about building the future of your company.
              We believe that{" "}
              <span className="font-semibold text-[#99D5DF]">
                every hire is a step toward growth
              </span>
              , and our approach reflects this philosophy.
            </p>
            <div className="space-y-5 flex-1">
              <p className="text-xs font-semibold text-[#99D5DF] uppercase tracking-wider">
                What We Offer
              </p>
              {employerFeatures.map((f, i) => (
                <FeatureItem
                  key={i}
                  title={f.title}
                  description={f.description}
                  icon={f.icon}
                  theme="employer"
                />
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/services/staffing/employer"
                className="inline-flex items-center gap-2 bg-white text-[#003C46] px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-[#99D5DF] focus:outline-none focus:ring-2 focus:ring-white/50 group"
              >
                Build Your Team
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}