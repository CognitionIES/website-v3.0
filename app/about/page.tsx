"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Target, Eye, Heart, Shield, Zap, Star, Users, Globe, Award, TrendingUp } from "lucide-react";
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

/*  Hero  */
function Hero() {
  const { IMAGES } = ABOUT_CONSTANTS;
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
          className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-[1.0] tracking-[-0.03em] max-w-3xl">
          Cognition IES
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 font-sans text-[16px] text-white/50 max-w-lg leading-[1.75]">
          Empowering Growth Through People and Technology.
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
  const { IMAGES, TEXT, STATS } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section ref={ref} className="bg-white py-28 md:py-36 overflow-hidden relative">
      <GridBg />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-6 mb-20">
          <span className="eyebrow">Our Story</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-5">
            <h2 className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] text-balance mb-10">{TEXT.STORY_TITLE}</h2>
            <div className="grid grid-cols-2 gap-px bg-[#e2e8f0] rounded-xl overflow-hidden mb-10">
              {STATS.map((s, i) => (
                <div key={i} className="bg-white p-6">
                  <p className="font-display text-4xl text-[#0098AF] mb-1"><AnimatedCounter value={s.stat} /></p>
                  <p className="font-sans text-[13px] text-[#718096]">{s.label}</p>
                </div>
              ))}
            </div>
            <Link href="/careers" className="group inline-flex items-center gap-3 font-sans text-[13px] font-semibold tracking-[0.12em] uppercase text-[#003C46] hover:text-[#0098AF] transition-colors">
              Work with us
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden group mb-10">
              <Image src={IMAGES.STORY_IMAGE.OurJourneyImage} alt="Our journey" width={800} height={500} className="w-full h-80 object-cover group-hover:scale-[1.02] transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/25 to-transparent" />
            </div>
            <div className="space-y-5">
              <p className="font-sans text-[16px] text-[#4a5568] leading-[1.8]">{TEXT.STORY_P1}</p>
              <p className="font-sans text-[16px] text-[#4a5568] leading-[1.8]">{TEXT.STORY_P2}</p>
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
    <section ref={ref} className="bg-[#fafaf8] py-28 md:py-36 overflow-hidden relative">
      <GridBg />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-6 mb-10">
          <span className="eyebrow">Trust &amp; Standards</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] text-balance mb-5 max-w-2xl">
          {TEXT.CERTIFICATIONS_TITLE}
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.15 }}
          className="font-sans text-[16px] text-[#718096] leading-[1.8] max-w-xl mb-16">
          {TEXT.CERTIFICATIONS_DESC}
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white border border-[#e2e8f0] rounded-2xl p-9 hover:border-[#0098AF]/30 transition-colors duration-200">
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

/*  Mission & Vision  */
function MissionVision() {
  const { TEXT } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section ref={ref} className="bg-[#fafaf8] py-28 md:py-36 overflow-hidden relative">
      <GridBg />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-6 mb-10">
          <span className="eyebrow">Our Direction</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] text-balance mb-16">
          Mission &amp; <em className="not-italic text-[#0098AF]">Vision</em>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { Icon: Target, label: "Mission", title: TEXT.MISSION_TITLE, desc: TEXT.MISSION_DESC },
            { Icon: Eye,    label: "Vision",  title: TEXT.VISION_TITLE,  desc: TEXT.VISION_DESC },
          ].map(({ Icon, label, title, desc }, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white border border-[#e2e8f0] rounded-2xl p-10 hover:border-[#0098AF]/30 transition-colors duration-200 relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-[#0098AF]/10 flex items-center justify-center mb-7 group-hover:bg-[#0098AF] transition-colors duration-200">
                <Icon className="w-5 h-5 text-[#0098AF] group-hover:text-white transition-colors duration-200" />
              </div>
              <span className="eyebrow">{label}</span>
              <h3 className="font-display text-2xl text-[#111827] mb-4">{title}</h3>
              <p className="font-sans text-[15px] text-[#718096] leading-[1.8]">{desc}</p>
            </motion.div>
          ))}
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
    <section ref={ref} className="bg-white py-28 md:py-36 overflow-hidden relative">
      <GridBg />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-6 mb-10">
          <span className="eyebrow">What Drives Us</span>
          <motion.div
            className="flex-1 h-px bg-[#e2e8f0] origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] text-balance mb-16">
          {TEXT.VALUES_TITLE}
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
const STAT_ICONS = [Users, Globe, Award, TrendingUp];
function StatsSection() {
  const { STATS } = ABOUT_CONSTANTS;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section ref={ref} className="bg-[#111827] py-28 md:py-36 overflow-hidden relative">
      <GridBg dark />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0098AF]/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center gap-6 mb-10">
          <span className="eyebrow">By the Numbers</span>
          <motion.div
            className="flex-1 h-px bg-white/15 origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-6xl text-white leading-[1.0] tracking-[-0.03em] mb-16">
          Our <em className="not-italic text-[#0098AF]">Impact</em>
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {STATS.map((s, i) => {
            const Icon = STAT_ICONS[i % STAT_ICONS.length];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-[#111827] hover:bg-[#0098AF]/8 transition-colors duration-200 p-10 text-center">
                <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center mx-auto mb-5 group-hover:border-[#0098AF] group-hover:bg-[#0098AF] transition-all duration-200">
                  <Icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-200" />
                </div>
                <p className="font-display text-5xl text-white mb-2"><AnimatedCounter value={s.stat} /></p>
                <p className="font-sans text-[13px] text-white/40 leading-snug">{s.label}</p>
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
      <Certifications />
      <MissionVision />
      <KeyValues />
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
