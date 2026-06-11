"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import digitalizationImg from "@/constants/images/home/our-recent-projects/digitalization.jpg"
import pcmImg from "@/constants/images/home/our-recent-projects/pcm.jpg";
// Stand-in card images reused from existing assets. Swap when dedicated
// photos for the staffing case studies are available.
import itTalentImg from "@/constants/images/home/our-services/staff.jpg";
import engTalentImg from "@/constants/images/home/who-we-are.jpg";

const projects = [
  {
    id: "project-1",
    title: "Digitalization",
    category: "Digital Transformation",
    description:
      "Comprehensive digital transformation of a manufacturing plant through 3D scanning, digital twin creation, and real-time data integration to improve efficiency and accuracy.",
    image: digitalizationImg,
    href: "/projects/digitalization",
  },
  {
    id: "project-2",
    title: "Log Splitter Cost Optimization",
    category: "Product Cost Management",
    description:
      "Detailed cost and function analysis of a log splitter product line, identifying savings through competitive benchmarking, value engineering, and design optimisation.",
    image: pcmImg,
    href: "/projects/product-cost-management",
  },
  {
    id: "project-3",
    title: "IT Talent Deployment",
    category: "Staff Augmentation",
    description:
      "Staffed and managed a full-stack development team (React and Node.js) for a growing IT company, with rapid onboarding and end-to-end payroll and compliance support.",
    image: itTalentImg,
    href: "/projects/it-talent-deployment",
  },
  {
    id: "project-4",
    title: "Engineering Talent Deployment",
    category: "Staff Augmentation",
    description:
      "Deployed a multi-disciplinary engineering team across mechanical, electrical, instrumentation, and piping roles, screened for tool proficiency in SmartPlant 3D, CAESAR II, STAAD and SPI.",
    image: engTalentImg,
    href: "/projects/engineering-talent-deployment",
  },
];

export default function ProjectsGrid() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-white py-28 md:py-36 overflow-hidden relative">
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#003C46 1px,transparent 1px),linear-gradient(90deg,#003C46 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16">
          <span className="eyebrow">Featured Work</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] text-balance">
            Recent <em className="not-italic text-[#0098AF]">Projects</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={project.href}
                className="group block bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] hover:border-[#0098AF]/30 transition-colors duration-200"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="font-sans text-[10px] font-semibold tracking-[0.14em] uppercase px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white/80 border border-white/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-2xl text-[#111827] group-hover:text-[#0098AF] transition-colors duration-200 leading-tight">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#e2e8f0] group-hover:text-[#0098AF] transition-colors duration-200 shrink-0 ml-4 mt-0.5" />
                  </div>
                  <p className="font-sans text-[14px] text-[#718096] leading-[1.75]">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-5 font-sans text-[13px] font-semibold text-[#0098AF] group-hover:text-[#003C46] transition-colors duration-200">
                    View case study
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
