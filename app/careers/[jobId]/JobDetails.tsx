"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock,
  Building2,
  ArrowUpRight,
  Share2,
  Heart,
  ChevronRight,
} from "lucide-react";
import { getJobById } from "@/data/jobs";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";

interface JobDetailsProps {
  jobId: string;
}

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-2xl md:text-[1.75rem] font-bold text-[#003C46] dark:text-white mb-5"
    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
  >
    {children}
  </h2>
);

const JobDetails = ({ jobId }: JobDetailsProps) => {
  const router = useRouter();
  const job = getJobById(jobId);
  const [isSaved, setIsSaved] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!job) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#0098AF] mb-3">404</p>
          <h1 className="text-3xl font-bold text-[#003C46] dark:text-white mb-3"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
            Position not found
          </h1>
          <p className="text-[15px] text-[#778899] dark:text-[#6677aa] mb-6">
            This role doesn't exist or has been removed.
          </p>
          <Link href="/careers">
            <Button className="bg-[#0098AF] hover:bg-[#007B8F] text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: `${job.title} at Cognition IES`, text: job.description, url: window.location.href });
      } catch (_) {}
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f]">
      <MegaMenu />

      {/* ── Hero ── */}
      <section className="relative bg-[#003C46] overflow-hidden">

        {/* Faint grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0098AF]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />

        {/* Deterministic particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.25, 0], y: [0, -90] }}
              transition={{ duration: 4 + (i * 0.5) % 3, repeat: Infinity, delay: (i * 0.41) % 4 }}
              className="absolute w-1 h-1 bg-[#0098AF]/70 rounded-full"
              style={{ left: `${10 + (i * 7.3) % 80}%`, bottom: "15%" }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-16 md:pb-28">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-2 text-[13px] mb-10"
          >
            <button
              onClick={() => router.push("/careers")}
              className="flex items-center gap-1.5 text-white/50 hover:text-white/90 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Careers</span>
            </button>
            <ChevronRight className="w-3 h-3 text-white/25" />
            <span className="text-[#0098AF]/90 font-medium truncate max-w-[200px]">{job.title}</span>
          </motion.nav>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-wrap items-center gap-2 mb-4"
          >
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80">
              {job.department}
            </span>
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1 bg-[#0098AF]/20 border border-[#0098AF]/30 rounded-full text-[#0098AF]">
              {job.type}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-white leading-tight mb-7"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            {job.title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-[14px] text-white/60"
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0098AF]" />
              {job.location}
            </span>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#0098AF]" />
              {job.experience}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0098AF]" />
              {job.type}
            </span>
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#0098AF]" />
              {job.department}
            </span>
          </motion.div>
        </div>

        {/* Bottom edge — clean diagonal cut */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-white dark:bg-[#0a0a0f]"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
      </section>

      {/* ── Body ── */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-14">

              {/* Description */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
                <SectionHeading>About This Role</SectionHeading>
                <p className="text-[16px] text-[#556677] dark:text-[#8899aa] leading-[1.85]">
                  {job.description}
                </p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <SectionHeading>Responsibilities</SectionHeading>
                <ul className="space-y-3.5">
                  {job.responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.28, delay: 0.25 + index * 0.04 }}
                      className="flex items-start gap-3.5"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0098AF] flex-shrink-0" />
                      <span className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
                <SectionHeading>Requirements</SectionHeading>
                <ul className="space-y-3.5">
                  {job.requirements.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.28, delay: 0.3 + index * 0.04 }}
                      className="flex items-start gap-3.5"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#003C46] dark:bg-white/40 flex-shrink-0" />
                      <span className="text-[15px] text-[#556677] dark:text-[#8899aa] leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <SectionHeading>What We Offer</SectionHeading>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e8eaed] dark:bg-[#1e1e2e] rounded-xl overflow-hidden border border-[#e8eaed] dark:border-[#1e1e2e]">
                  {job.benefits.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.35 + index * 0.05 }}
                      className="flex items-center gap-3 bg-white dark:bg-[#0a0a0f] hover:bg-[#f7fbfc] dark:hover:bg-[#0098AF]/[0.04] transition-colors p-5"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#0098AF] flex-shrink-0" />
                      <span className="text-[15px] font-medium text-[#003C46] dark:text-white">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-8 space-y-4"
              >

                {/* Apply card */}
                <div className="bg-white dark:bg-[#0d0d14] rounded-xl border border-[#e8eaed] dark:border-[#1e1e2e] p-6">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0098AF] mb-2">
                    Interested?
                  </p>
                  <h3
                    className="text-[1.25rem] font-bold text-[#003C46] dark:text-white mb-2"
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  >
                    Apply for this role
                  </h3>
                  <p className="text-[14px] text-[#778899] dark:text-[#6677aa] mb-5 leading-relaxed">
                    Take the next step in your career. We'd love to hear from you.
                  </p>

                  <Link href="https://forms.gle/pFKFAJcqepA4jr9V7">
                    <Button className="w-full h-11 text-[15px] font-semibold bg-[#0098AF] hover:bg-[#007B8F] text-white rounded-lg mb-3">
                      Apply Now
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setIsSaved(!isSaved)}
                      className={`flex-1 h-10 text-[14px] rounded-lg border-[#e8eaed] dark:border-[#1e1e2e] ${isSaved ? "border-[#0098AF] text-[#0098AF]" : "text-[#778899]"} hover:border-[#0098AF] hover:text-[#0098AF] transition-colors`}
                    >
                      <Heart className={`w-4 h-4 mr-2 ${isSaved ? "fill-[#0098AF]" : ""}`} />
                      {isSaved ? "Saved" : "Save"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleShare}
                      className="flex-1 h-10 text-[14px] rounded-lg border-[#e8eaed] dark:border-[#1e1e2e] text-[#778899] hover:border-[#0098AF] hover:text-[#0098AF] transition-colors"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Quick info card */}
                <div className="bg-[#f7f8fa] dark:bg-[#0d0d14] rounded-xl border border-[#e8eaed] dark:border-[#1e1e2e] overflow-hidden">
                  <div className="px-5 py-3.5 border-b border-[#e8eaed] dark:border-[#1e1e2e]">
                    <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#aabbcc]">
                      Quick Info
                    </p>
                  </div>
                  <div className="divide-y divide-[#e8eaed] dark:divide-[#1e1e2e]">
                    {[
                      { label: "Department", value: job.department },
                      { label: "Location", value: job.location },
                      { label: "Experience", value: job.experience },
                      { label: "Job Type", value: job.type },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center px-5 py-3.5">
                        <span className="text-[13px] text-[#778899] dark:text-[#6677aa]">{label}</span>
                        <span className="text-[13px] font-semibold text-[#003C46] dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetails;