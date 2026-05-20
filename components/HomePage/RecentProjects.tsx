"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import digitalizationImage from "@/constants/images/projects/digitalization/hero-image-1.jpg";
import pcmImage from "@/constants/images/projects/pcm/hero.jpg";

const projects = [
  {
    num: "01",
    title: "Manufacturing Plant Digitalization",
    category: "Digital Transformation",
    year: "2024",
    description: "Complete digital twin of a manufacturing facility using precision 3D scanning, real-time data integration, and IoT instrumentation — reducing layout errors by 40%.",
    image: digitalizationImage,
    href: "/projects/digitalization",
    span: "lg:col-span-8",
  },
  {
    num: "02",
    title: "Log Splitter Cost Optimisation",
    category: "Value Engineering",
    year: "2005",
    description: "Competitive benchmarking and design optimisation that identified significant cost-saving opportunities across the full product lifecycle.",
    image: pcmImage,
    href: "/projects/product-cost-management",
    span: "lg:col-span-4",
  },
];

export default function RecentProjects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-[#fafaf8] py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex items-center gap-6 mb-10">
          <span className="eyebrow">Selected Work</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em]"
          >
            Recent <em className="not-italic text-[#0098AF]">Projects</em>
          </motion.h2>

          <Link href="/projects"
            className="group inline-flex items-center gap-2 font-sans text-[13px] font-semibold text-[#003C46] hover:text-[#0098AF] transition-colors shrink-0">
            All projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Projects — unequal asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={p.span}
            >
              <Link href={p.href} className="group block rounded-2xl overflow-hidden bg-white border border-[#e2e8f0] hover:border-[#0098AF]/30 transition-all duration-300 h-full">

                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: i === 0 ? "340px" : "220px" }}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 to-transparent" />

                  {/* Number + category overlay */}
                  <div className="absolute top-5 left-6 flex items-center gap-3">
                    <span className="font-display text-5xl text-white/15 tabular-nums">{p.num}</span>
                    <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60 border border-white/20 rounded-full px-2.5 py-0.5">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-xl text-[#111827] leading-snug group-hover:text-[#0098AF] transition-colors duration-200">
                      {p.title}
                    </h3>
                    <span className="font-sans text-[12px] text-[#718096] shrink-0 mt-1">{p.year}</span>
                  </div>
                  <p className="font-sans text-[14px] text-[#718096] leading-[1.7] line-clamp-3">{p.description}</p>
                </div>

                {/* Bottom slide-in line */}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
