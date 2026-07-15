"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight, Target, Eye, Heart, Shield, Zap, Star, Users, Globe, Award, TrendingUp,
  Compass, PenTool, HardHat, Quote as QuoteIcon,
  ClipboardList, Boxes, Handshake, Cuboid,
} from "lucide-react";
import {
  OilGasIcon, PetrochemicalIcon, ChemicalIcon, PharmaceuticalIcon, FoodProcessingIcon,
  WaterTreatmentIcon, FertilizerIcon, RenewableEnergyIcon, HydrogenIcon, SpecialtyChemicalsIcon,
} from "@/components/shared/icons/IndustryIcons";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import CTABanner from "@/components/shared/CTABanner";
import { ABOUT_CONSTANTS } from "@/constants/aboutPage/constants";

/*  Reusable grid texture  */
const GridBg = ({ dark = false }: { dark?: boolean }) => (
  <div className="absolute inset-0 pointer-events-none"
    style={{ opacity: dark ? 0.05 : 0.025, backgroundImage: `linear-gradient(${dark ? "rgba(255,255,255,0.4)" : "#003C46"} 1px,transparent 1px),linear-gradient(90deg,${dark ? "rgba(255,255,255,0.4)" : "#003C46"} 1px,transparent 1px)`, backgroundSize: "64px 64px" }} />
);

/*  Renders a paragraph with one phrase bolded + teal, matching the deck's inline
    emphasis style. `highlight` must be an exact substring of `text`; if it isn't
    found (e.g. copy drifts from the constants file), it just renders plain text
    instead of silently dropping content. */
const HighlightedText = ({ text, highlight, className = "" }: { text: string; highlight?: string; className?: string }) => {
  if (!highlight || !text.includes(highlight)) return <p className={className}>{text}</p>;
  const [before, after] = text.split(highlight);
  return (
    <p className={className}>
      {before}
      <strong className="font-semibold text-[#0098AF]">{highlight}</strong>
      {after}
    </p>
  );
};

/*  Section eyebrow + divider — shared across sections to cut repetition  */
const SectionEyebrow = ({ label, isInView, dark = false }: { label: string; isInView: boolean; dark?: boolean }) => (
  <div className="flex items-center gap-6 mb-10">
    <span className="eyebrow">{label}</span>
    <motion.div
      className={`flex-1 h-px origin-left ${dark ? "bg-white/15" : "bg-[#e2e8f0]"}`}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    />
  </div>
);

/*  Hero  */
function Hero() {
  const { IMAGES, TEXT } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0f1117]" style={{ minHeight: 460 }}>
      <Image src={IMAGES.HERO_IMAGE.HeroImage} alt="About Cognition IES" fill priority sizes="100vw" quality={85} className="object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1117]/50 to-[#0f1117]/90" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0098AF]/50 to-transparent" />
      <GridBg dark />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20">
        <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className="eyebrow text-[#0098AF]">About Us</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-[1.05] tracking-[-0.03em] max-w-3xl">
          Engineering Excellence.{" "}
          <em className="not-italic text-[#0098AF]">Digital Intelligence.</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-5 font-sans text-[16px] text-white/50 max-w-lg leading-[1.75]">
          {TEXT.HERO_SUBTITLE}
        </motion.p>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-12 z-20 pointer-events-none" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}>
        <div className="absolute inset-0 bg-white" />
      </div>
    </section>
  );
}

/*  Story  */
function Story() {
  const { IMAGES, TEXT } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section ref={ref} className="bg-white py-20 md:py-28 overflow-hidden relative">
      <GridBg />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionEyebrow label="Our Story" isInView={isInView} />
        <h2 className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] text-balance mb-8">
              Two Decades of Engineering <em className="not-italic text-[#0098AF]">Trust</em>
            </h2>
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-5">
            {/* <h2 className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] text-balance mb-8">
              Two Decades of Engineering <em className="not-italic text-[#0098AF]">Trust</em>
            </h2> */}
            <p className="font-sans text-[16px] text-[#4a5568] leading-[1.8] mb-8">{TEXT.STORY_P1}</p>
             <p className="font-sans text-[16px] text-[#4a5568] leading-[1.8]">{TEXT.STORY_P2}</p>
            {/* <Link href="/contact" className="group inline-flex items-center gap-3 font-sans text-[13px] font-semibold tracking-[0.12em] uppercase text-[#003C46] hover:text-[#0098AF] transition-colors">
              Work with us
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link> */}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden group mt-2">
              <Image src={IMAGES.STORY_IMAGE.OurJourneyImage} alt="Our journey" width={1220} height={900} className="w-full h-80 object-cover group-hover:scale-[1.02] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/25 to-transparent" />
            </div>
            {/* <p className="font-sans text-[16px] text-[#4a5568] leading-[1.8]">{TEXT.STORY_P2}</p> */}
             <Link href="/contact" className="group inline-flex items-center gap-3 font-sans text-[13px] font-semibold tracking-[0.12em] uppercase text-[#003C46] hover:text-[#0098AF] transition-colors mt-12">
              Work with us
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/*  Industries We Serve  */
const INDUSTRY_ICONS = [
  OilGasIcon, PetrochemicalIcon, ChemicalIcon, PharmaceuticalIcon, FoodProcessingIcon,
  WaterTreatmentIcon, FertilizerIcon, RenewableEnergyIcon, HydrogenIcon, SpecialtyChemicalsIcon,
];
function IndustriesServed() {
  const { TEXT, INDUSTRIES } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section ref={ref} className="bg-[#fafaf8] py-20 md:py-28 overflow-hidden relative">
      <GridBg />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionEyebrow label="Who We Serve" isInView={isInView} />
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] text-balance mb-5 max-w-4xl">
          Industries We <em className="not-italic text-[#0098AF]">Serve</em>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.15 }}
          className="font-sans text-[16px] text-[#718096] leading-[1.8] max-w-xl mb-14">
          {TEXT.INDUSTRIES_DESC}
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {INDUSTRIES.map((ind, i) => {
            const Icon = INDUSTRY_ICONS[i % INDUSTRY_ICONS.length];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border border-[#e2e8f0] flex items-center justify-center mb-4 group-hover:border-[#0098AF] group-hover:bg-[#0098AF]/5 transition-colors duration-200">
                  <Icon className="w-8 h-8 text-[#0098AF]" />
                </div>
                <h3 className="font-sans text-[14px] font-semibold text-[#111827] mb-1.5">{ind.title}</h3>
                <span className="block w-5 h-[2px] bg-[#0098AF]/50" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/*  Closing quote  */
function ClosingQuote() {
  const { TEXT } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section ref={ref} className="bg-white py-20 md:py-24 overflow-hidden relative">
      <div className="relative max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5 }}
          className="w-12 h-12 rounded-full bg-[#0098AF]/10 flex items-center justify-center mx-auto mb-8">
          <QuoteIcon className="w-5 h-5 text-[#0098AF]" />
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-2xl md:text-3xl text-[#111827] leading-[1.4] tracking-[-0.01em] text-balance">
          {TEXT.CLOSING_QUOTE}
        </motion.p>
      </div>
    </section>
  );
}

/*  Mission & Vision — a single unified split panel rather than two identical
    twin cards (which is what the source deck does, and what most corporate sites
    default to). Dark panel, vertical divider, oversized ghost icon watermark per
    side for a more editorial feel. */
function MissionVision() {
  const { TEXT } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section ref={ref} className="bg-[#fafaf8] py-20 md:py-28 overflow-hidden relative">
      <GridBg />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionEyebrow label="Our Direction" isInView={isInView} />
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] text-balance mb-16">
          Mission &amp; <em className="not-italic text-[#0098AF]">Vision</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#0f1117] rounded-3xl overflow-hidden grid md:grid-cols-2"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0098AF]/40 to-transparent" />
          {/* vertical divider, desktop only */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-white/10" />

          {[
            { Icon: Target, label: "Mission", desc: TEXT.MISSION_DESC, highlight: TEXT.MISSION_HIGHLIGHT },
            { Icon: Eye,    label: "Vision",  desc: TEXT.VISION_DESC,  highlight: TEXT.VISION_HIGHLIGHT },
          ].map(({ Icon, label, desc, highlight }, i) => (
            <div key={i} className="relative p-10 md:p-14 overflow-hidden">
              <Icon className="absolute -right-6 -bottom-8 w-40 h-40 text-white/[0.04] pointer-events-none" strokeWidth={1} />
              <div className="relative w-12 h-12 rounded-full bg-[#0098AF]/15 flex items-center justify-center mb-7">
                <Icon className="w-5 h-5 text-[#0098AF]" />
              </div>
              <span className="relative font-sans text-[13px] font-semibold tracking-[0.12em] uppercase text-[#0098AF] block mb-4">{label}</span>
              <HighlightedText text={desc} highlight={highlight} className="relative font-sans text-[16px] text-white/70 leading-[1.8]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/*  Digital Twin — new  */
function DigitalTwin() {
  const { TEXT, DIGITAL_TWIN_HIGHLIGHTS } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section ref={ref} className="bg-[#0f1117] py-20 md:py-28 overflow-hidden relative">
      <GridBg dark />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0098AF]/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionEyebrow label="Digital Transformation" isInView={isInView} dark />
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-7">
            <div className="w-12 h-12 rounded-full bg-[#0098AF]/15 flex items-center justify-center mb-7">
              <Cuboid className="w-5 h-5 text-[#0098AF]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-[1.05] tracking-[-0.03em] text-balance mb-2">
              Digital Twin <em className="not-italic text-[#0098AF]">Expertise</em>
            </h2>
            <p className="font-sans text-[13px] font-semibold tracking-[0.12em] uppercase text-[#0098AF] mb-7">
              {TEXT.DIGITAL_TWIN_TAGLINE}
            </p>
            <p className="font-sans text-[16px] text-white/60 leading-[1.8]">{TEXT.DIGITAL_TWIN_DESC}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
              {DIGITAL_TWIN_HIGHLIGHTS.map((h, i) => (
                <div key={i} className="bg-[#0f1117] p-7">
                  <span className="font-display text-3xl text-white/10 block mb-3">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-sans text-[14px] text-white/80 leading-snug">{h}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/*  Certifications & Partnerships  */
function Certifications() {
  const { TEXT, CERTIFICATIONS } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section ref={ref} className="bg-white py-20 md:py-28 overflow-hidden relative">
      <GridBg />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionEyebrow label="Trust & Standards" isInView={isInView} />
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] text-balance mb-5 max-w-4xl">
          Certifications &amp; <em className="not-italic text-[#0098AF]">Partnerships</em>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.15 }}
          className="font-sans text-[16px] text-[#718096] leading-[1.8] max-w-xl mb-14">
          {TEXT.CERTIFICATIONS_DESC}
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white border border-[#e2e8f0] rounded-2xl p-9 hover:border-[#0098AF]/30 hover:shadow-md transition-all duration-200">
              <div className="h-14 flex items-center mb-7">
                {c.logo ? (
                  <Image src={c.logo} alt={c.title} height={40} width={140} className="h-10 w-auto object-contain" />
                ) : (
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#0098AF]/10 font-display text-lg text-[#0098AF] tracking-tight">
                    {c.badge}
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl text-[#111827] mb-3 group-hover:text-[#0098AF] transition-colors duration-200">{c.title}</h3>
              <p className="font-sans text-[14px] text-[#718096] leading-[1.8]">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*  End-to-End Engineering (project lifecycle)  */
const PROCESS_ICONS = [Compass, PenTool, ClipboardList, HardHat, Handshake];
function Process() {
  const { TEXT, PROCESS } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section ref={ref} className="bg-white py-20 md:py-28 overflow-hidden relative">
      <GridBg />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionEyebrow label="Our Approach" isInView={isInView} />
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] text-balance mb-5 max-w-4xl">
          End-to-End Engineering, Concept to <em className="not-italic text-[#0098AF]">Commissioning</em>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.15 }}
          className="font-sans text-[16px] text-[#718096] leading-[1.8] max-w-xl mb-14">
          {TEXT.PROCESS_DESC}
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PROCESS.map((p, i) => {
            const Icon = PROCESS_ICONS[i % PROCESS_ICONS.length];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-[#fafaf8] border border-[#e2e8f0] rounded-2xl p-7">
                <span className="absolute top-5 right-6 font-display text-3xl text-[#0098AF]/10">{p.step}</span>
                <div className="w-11 h-11 rounded-full bg-[#0098AF]/10 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-[#0098AF]" />
                </div>
                <h3 className="font-display text-lg text-[#111827] mb-2">{p.title}</h3>
                <p className="font-sans text-[13px] text-[#718096] leading-[1.7]">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/*  Values  */
const VALUE_ICONS = [Heart, Shield, Zap, Star];
function KeyValues() {
  const { IMAGES, TEXT, KEY_VALUES } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  return (
    <section ref={ref} className="bg-[#fafaf8] py-20 md:py-28 overflow-hidden relative">
      <GridBg />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionEyebrow label="What Drives Us" isInView={isInView} />
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] text-balance mb-16">
          What Drives <em className="not-italic text-[#0098AF]">Us</em>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e2e8f0] border border-[#e2e8f0] rounded-2xl overflow-hidden">
          {KEY_VALUES.map((v, i) => {
            const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
            return (
              <motion.div key={i} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group bg-white hover:bg-[#fafaf8] transition-colors duration-200 relative overflow-hidden">
                <div className="relative h-36 overflow-hidden">
                  <Image src={IMAGES.KEY_VALUES[i]} alt={v.title} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#003C46]/55" />
                  <div className="absolute bottom-3 left-5">
                    <div className="w-8 h-8 rounded-full bg-[#0098AF]/20 border border-[#0098AF]/40 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#0098AF]" />
                    </div>
                  </div>
                  <span className="absolute top-3 right-4 font-display text-4xl text-white/10">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl text-[#111827] mb-2 group-hover:text-[#0098AF] transition-colors duration-200">{v.title}</h3>
                  <p className="font-sans text-[13px] text-[#718096] leading-[1.75]">{v.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/*  Stats  */
const STAT_ICONS = [Award, TrendingUp, Boxes, Users, Globe];
function StatsSection() {
  const { STATS } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section ref={ref} className="bg-[#111827] py-20 md:py-28 overflow-hidden relative">
      <GridBg dark />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0098AF]/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionEyebrow label="By the Numbers" isInView={isInView} dark />
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl text-white leading-[1.0] tracking-[-0.03em] mb-16">
          Our <em className="not-italic text-[#0098AF]">Impact</em>
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {STATS.map((s, i) => {
            const Icon = STAT_ICONS[i % STAT_ICONS.length];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-[#111827] hover:bg-[#0098AF]/8 transition-colors duration-200 p-8 text-center">
                <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center mx-auto mb-5 group-hover:border-[#0098AF] group-hover:bg-[#0098AF] transition-all duration-200">
                  <Icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-200" />
                </div>
                <p className="font-display text-4xl text-white mb-2"><AnimatedCounter value={s.stat} /></p>
                <p className="font-sans text-[12px] text-white/40 leading-snug">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <MegaMenu />
      <Hero />
      <Story />
      <IndustriesServed />
      <ClosingQuote />
      <MissionVision />
      <DigitalTwin />
      <Process />
      <KeyValues />
      <Certifications />
      <StatsSection />
      <CTABanner
        title="Shape the future with us"
        accentWord="future"
        description="Ready to turn your engineering challenges into opportunities? Let's connect."
        buttons={[
          { label: "Get in Touch",     href: "/contact",  variant: "primary" },
          { label: "Explore Services", href: "/services", variant: "outline" },
        ]}
      />
      <Footer />
    </div>
  );
}