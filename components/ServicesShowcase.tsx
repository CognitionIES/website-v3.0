"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import productImage from "@/constants/images/product-engineering/product-engineering-services.webp";
import plantImage from "@/constants/images/plant-engineering/plant-engineering-services.webp";
import saasImage from "@/constants/images/home/our-services/saas.webp";
import staffImage from "@/constants/images/home/our-services/staff.webp";

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
    href: "/services/saas-solution",
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

function ServiceRow({
  svc,
  index,
  active,
  onActivate,
}: {
  svc: (typeof services)[number];
  index: number;
  active: number;
  onActivate: (i: number) => void;
}) {
  const rowRef = useRef<HTMLLIElement>(null);
  const inCenterBand = useInView(rowRef, {
    margin: "-45% 0px -45% 0px",
  });

  useEffect(() => {
    if (inCenterBand) onActivate(index);
  }, [inCenterBand, index, onActivate]);

  const isActive = active === index;

  return (
    <motion.li
      ref={rowRef}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Active-state accent bar — quiet left-edge indicator rather than a full bg fill */}
      <motion.span
        aria-hidden
        className="absolute left-[-1px] top-0 bottom-0 w-[2px]  origin-top"
        initial={false}
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <Link
        href={svc.href}
        onMouseEnter={() => onActivate(index)}
        className="group flex min-h-[200px] items-center gap-8 py-5 pl-6 -ml-6 transition-colors duration-300"
      >
        <span
          className={`font-display text-4xl tabular-nums tracking-tight mt-1 shrink-0 transition-all duration-500 ease-out ${
            isActive
              ? "text-[#0098AF] opacity-100"
              : "text-[#e2e8f0] opacity-100"
          }`}
        >
          {svc.num}
        </span>
        <div
          className={`flex-1 min-w-0 transition-opacity duration-400 ${
            isActive ? "opacity-100" : "opacity-45 group-hover:opacity-75"
          }`}
        >
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="font-display text-2xl text-[#111827] tracking-tight">
              {svc.title}
            </h3>
            <ArrowUpRight
              className={`w-5 h-5 shrink-0 ml-4 transition-all duration-300 ${
                isActive
                  ? "text-[#0098AF] translate-x-0 translate-y-0"
                  : "text-transparent -translate-x-0.5 translate-y-0.5 group-hover:text-[#0098AF] group-hover:translate-x-0 group-hover:translate-y-0"
              }`}
            />
          </div>
          <p className="font-sans text-[14px] text-[#718096] leading-[1.7] mb-4 max-w-md">
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
  );
}

export default function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const listWrapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: listWrapRef,
    offset: ["start end", "end start"],
  });

  // Spring-damp the raw scroll progress before mapping to pixels — removes the
  // slight jitter/step-iness raw scroll-linked transforms can have on trackpads,
  // and gives the drift a more considered, weighted feel rather than 1:1 tracking.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });

  const imageY = useTransform(smoothProgress, [0, 1], [-120, 120]);
  const imageScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0.97, 1, 0.97]
  );

  return (
    <section
      ref={sectionRef}
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
          {/* <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#0098AF] hover:text-[#003C46] transition-colors"
          >
            View all services{" "}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link> */}
        </div>
      </div>

      {/* Desktop: numbered list + parallax image panel */}
      <div
        ref={listWrapRef}
        className="hidden lg:flex max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24 gap-16 items-center"
      >
        {/* Left: list */}
        <ul className="divide-y divide-[#e2e8f0] flex-1">
          {services.map((svc, i) => (
            <ServiceRow
              key={svc.num}
              svc={svc}
              index={i}
              active={active}
              onActivate={setActive}
            />
          ))}
        </ul>

        {/* Right: parallax image panel */}
        <div className="w-[45%] shrink-0">
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="w-full will-change-transform"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_30px_70px_-20px_rgba(0,60,70,0.28)]">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.num}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: i === active ? 1 : 0,
                    scale: i === active ? 1 : 1.06,
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover"
                    sizes="45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/65 via-[#003C46]/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-white/70 block mb-1">
                      {svc.short}
                    </span>
                    <span className="font-display text-2xl text-white">
                      {svc.title}
                    </span>
                  </div>
                  {/* Faint inner border for a "framed" feel on top of the photo */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                </motion.div>
              ))}
            </div>

            {/* Progress rail with number labels */}
            <div className="flex items-center gap-3 mt-5">
              {services.map((svc, i) => (
                <button
                  key={svc.num}
                  type="button"
                  aria-label={`Show ${svc.title}`}
                  onClick={() => setActive(i)}
                  className="flex-1 group/rail"
                >
                  <div className="h-[3px] rounded-full bg-[#e2e8f0] overflow-hidden mb-2">
                    <motion.div
                      className="h-full bg-[#0098AF]"
                      initial={false}
                      animate={{ scaleX: i === active ? 1 : 0 }}
                      style={{ transformOrigin: "left" }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <span
                    className={`font-sans text-[10px] font-semibold tracking-[0.12em] uppercase transition-colors duration-300 ${
                      i === active
                        ? "text-[#003C46]"
                        : "text-[#a0aec0] group-hover/rail:text-[#718096]"
                    }`}
                  >
                    {svc.num}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
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