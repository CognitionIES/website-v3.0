"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import productImage from "@/constants/images/home/our-services/product-2.jpg";
import plantImage from "@/constants/images/home/our-services/plant.jpg";
import saasImage from "@/constants/images/home/our-services/saas.jpg";
import staffImage from "@/constants/images/home/our-services/staff.jpg";

const services = [
  {
    num: "01",
    title: "Product Engineering",
    short: "Design to delivery",
    description:
      "From aerospace to industrial machinery, we engineer high-performance products that meet industry standards and redefine what's possible.",
    image: productImage,
    href: "/services/product-engineering",
    tags: ["CAD/CAE", "Mechanical", "Electrical", "Prototyping"],
  },
  {
    num: "02",
    title: "Plant Engineering",
    short: "Process optimisation",
    description:
      "Smart process solutions that boost operational agility, reduce downtime, and future-proof industrial facilities.",
    image: plantImage,
    href: "/services/plant-engineering",
    tags: ["Digitalization", "Layout Design", "3D Modelling", "Compliance"],
  },
  {
    num: "03",
    title: "SaaS Solutions",
    short: "Digital transformation",
    description:
      "Cloud-native, scalable software that streamlines operations and accelerates growth across every industry vertical.",
    image: saasImage,
    href: "/services/saas-solution/servicecpq",
    tags: ["ServiceCPQ", "Integration", "Cloud", "Automation"],
  },
  {
    num: "04",
    title: "Staff Augmentation",
    short: "Engineering talent on demand",
    description:
      "Add pre-vetted engineers directly to your team, scaling capacity across disciplines without the overhead of permanent hiring.",
    image: staffImage,
    href: "/services/staff-augmentation",
    tags: ["Dedicated Teams", "Onsite & Offshore", "Contract", "India & USA"],
  },
];

export default function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      id="services-showcase"
      className="bg-[#fafaf8] relative overflow-hidden"
    >
      {/* Header strip */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-12">
        <div className="flex items-center gap-6 mb-10">
          <span className="eyebrow">What We Do</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em]"
          >
            Our <em className="not-italic text-[#0098AF]">Services</em>
          </motion.h2>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#0098AF] hover:text-[#003C46] transition-colors"
          >
            View all services{" "}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Desktop: numbered list + image panel */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24 gap-16">
        {/* Left: list */}
        <ul className="divide-y divide-[#e2e8f0] flex-1">
          {services.map((svc, i) => (
            <motion.li
              key={svc.num}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={svc.href}
                onMouseEnter={() => setActive(i)}
                className={`group flex items-start gap-8 py-5 transition-all duration-300 ${
                  active === i ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <span
                  className={`font-display text-4xl tabular-nums tracking-tight mt-1 shrink-0 transition-colors duration-300 ${
                    active === i ? "text-[#0098AF]" : "text-[#e2e8f0]"
                  }`}
                >
                  {svc.num}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-display text-2xl text-[#111827] tracking-tight">
                      {svc.title}
                    </h3>
                    <ArrowUpRight
                      className={`w-5 h-5 shrink-0 ml-4 transition-all duration-300 ${
                        active === i
                          ? "text-[#0098AF]"
                          : "text-transparent group-hover:text-[#0098AF]"
                      }`}
                    />
                  </div>
                  <p className="font-sans text-[14px] text-[#718096] leading-[1.7] mb-4">
                    {svc.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((t) => (
                      <span
                        key={t}
                        className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-[#718096] border border-[#e2e8f0] rounded-full px-2.5 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right: image | NOT sticky, just centered vertically alongside the list */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-[45%] flex items-center"
        >
          <div className="w-full">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {services.map((svc, i) => (
                <div
                  key={svc.num}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    i === active
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[1.04]"
                  }`}
                >
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-white/70 block mb-1">
                      {svc.short}
                    </span>
                    <span className="font-display text-2xl text-white">
                      {svc.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile: cards */}
      <div className="lg:hidden px-5 pb-16 space-y-4">
        {services.map((svc) => (
          <Link
            key={svc.num}
            href={svc.href}
            className="group block rounded-2xl overflow-hidden border border-[#e2e8f0] bg-white hover:border-[#0098AF]/40 transition-colors duration-200"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/70 to-transparent" />
              <span className="absolute top-4 left-4 font-display text-3xl text-white/20">
                {svc.num}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-xl text-[#111827]">
                  {svc.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-[#0098AF]" />
              </div>
              <p className="font-sans text-[14px] text-[#718096] leading-relaxed">
                {svc.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
