"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  animate,
  useScroll,
  useTransform,
  useMotionValue,
  useInView,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";
import type { CaseStudy } from "@/constants/projects/types";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Motion helpers ───────────────────────────────────────────────────── */

// Vertical parallax tied to the element's progress through the viewport.
// Returns 0 movement when the user prefers reduced motion.
function useParallax(distance = 36) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  return { ref, y, reduce };
}

// Counts up plain integers when scrolled into view; renders anything else as-is.
function CountUp({ value }: { value: string }) {
  const numeric = /^\d+$/.test(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!numeric || !inView) return;
    if (reduce) {
      mv.set(parseInt(value, 10));
      return;
    }
    const controls = animate(mv, parseInt(value, 10), {
      duration: 1.2,
      ease: EASE,
    });
    return () => controls.stop();
  }, [inView, numeric, reduce, value, mv]);

  if (!numeric) return <span ref={ref}>{value}</span>;
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function GridTexture({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${dark ? "opacity-[0.06]" : "opacity-[0.025]"}`}
      style={{
        backgroundImage: dark
          ? "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)"
          : "linear-gradient(#003C46 1px,transparent 1px),linear-gradient(90deg,#003C46 1px,transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
}

function SectionHeader({ eyebrow }: { eyebrow: string }) {
  return (
    <div className="flex items-center gap-6 mb-12">
      <span className="eyebrow !mb-0">{eyebrow}</span>
      <motion.div
        className="flex-1 h-px bg-[#e2e8f0] origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      />
    </div>
  );
}

/* ── Overview: text + parallax image + count-up stats ────────────────── */
export function OverviewSection({ study }: { study: CaseStudy }) {
  const { overview } = study;
  const { ref, y, reduce } = useParallax(30);
  return (
    <section className="relative w-full py-20 sm:py-24 bg-white overflow-hidden">
      <GridTexture />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeader eyebrow="Project Overview" />
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] leading-tight">
              {overview.heading}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#5b5b5b] leading-relaxed">
              {overview.para1}
            </p>
            <p className="mt-4 text-base sm:text-lg text-[#5b5b5b] leading-relaxed">
              {overview.para2}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {overview.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-[#e2e8f0] bg-[#fafaf8] px-5 py-3"
                >
                  <p className="text-2xl font-bold text-[#0098AF] tabular-nums leading-none">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#718096]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Parallax image */}
          <div
            ref={ref}
            className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-md"
          >
            <motion.div
              style={{ y: reduce ? 0 : y }}
              className="absolute -inset-y-10 inset-x-0"
            >
              <Image
                src={overview.image}
                alt={study.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#003C46]/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Objective: statement over slow parallax background ──────────────── */
export function ObjectiveSection({ study }: { study: CaseStudy }) {
  const { objective } = study;
  const { ref, y, reduce } = useParallax(50);
  return (
    <section ref={ref} className="relative py-20 sm:py-24 overflow-hidden bg-[#003C46]">
      <motion.div style={{ y: reduce ? 0 : y }} className="absolute -inset-y-16 inset-x-0">
        <Image
          src={study.heroImage}
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#003C46]/90 via-[#003C46]/80 to-[#0098AF]/30" />
      <GridTexture dark />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#99D5DF]">
          The Objective
        </span>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-5 text-2xl sm:text-3xl font-bold leading-snug text-white max-w-3xl"
        >
          {objective.statement}
        </motion.p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {objective.highlights.map((h, i) => (
            <motion.span
              key={h}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: EASE }}
              className="flex items-center gap-2 text-sm text-white/70"
            >
              <CheckCircle2 className="w-4 h-4 text-[#0098AF]" />
              {h}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Approach: numbered step grid ────────────────────────────────────── */
export function ApproachSection({ study }: { study: CaseStudy }) {
  const { approach } = study;
  return (
    <section className="w-full py-20 sm:py-24 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeader eyebrow="Our Approach" />
        <p className="text-base text-[#5b5b5b] leading-relaxed max-w-2xl -mt-4 mb-12">
          {approach.intro}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e2e8f0] border border-[#e2e8f0] rounded-2xl overflow-hidden">
          {approach.steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: EASE }}
                className="group bg-white p-7 hover:bg-[#f7fbfc] transition-colors duration-200"
              >
                <span className="font-mono text-xs text-[#0098AF]/60 tabular-nums block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex w-10 h-10 rounded-lg bg-[#0098af]/10 text-[#0098AF] items-center justify-center mb-4 group-hover:bg-[#003C46] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-[18px] h-[18px]" />
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#003C46]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#5b5b5b] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Results: metric cards + before/after KPI table ──────────────────── */
export function ResultsSection({ study }: { study: CaseStudy }) {
  const { results } = study;
  return (
    <section className="relative w-full py-20 sm:py-24 bg-white overflow-hidden">
      <GridTexture />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeader eyebrow="Key Results" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {results.cards.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                className="rounded-2xl border border-[#e2e8f0] bg-white p-6 hover:border-[#0098af]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-flex w-10 h-10 rounded-lg bg-[#0098af]/10 text-[#0098AF] items-center justify-center mb-4">
                  <Icon className="w-[18px] h-[18px]" />
                </span>
                <p className="text-2xl font-bold text-[#003C46] tabular-nums leading-none">
                  {r.metric}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-[#003C46]">{r.title}</h3>
                <p className="mt-1 text-sm text-[#5b5b5b] leading-relaxed">{r.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Before / after table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="overflow-x-auto rounded-2xl border border-[#e2e8f0]"
        >
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-[#003C46] text-white">
                <th className="px-6 py-4 font-semibold">Metric</th>
                <th className="px-6 py-4 font-semibold">Before</th>
                <th className="px-6 py-4 font-semibold">After</th>
                <th className="px-6 py-4 font-semibold">Improvement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eef2f5]">
              {results.kpis.map((k) => (
                <tr key={k.metric} className="bg-white hover:bg-[#f7fbfc] transition-colors">
                  <td className="px-6 py-4 font-medium text-[#003C46]">{k.metric}</td>
                  <td className="px-6 py-4 text-[#718096]">{k.before}</td>
                  <td className="px-6 py-4 text-[#003C46]">{k.after}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block rounded-full bg-[#0098af]/10 text-[#0098AF] text-xs font-semibold px-3 py-1">
                      {k.improvement}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Testimonial: full-bleed parallax band ───────────────────────────── */
export function TestimonialBand({ study }: { study: CaseStudy }) {
  const { ref, y, reduce } = useParallax(60);
  if (!study.testimonial) return null;
  const t = study.testimonial;
  return (
    <section ref={ref} className="relative overflow-hidden bg-[#003C46]">
      <motion.div style={{ y: reduce ? 0 : y }} className="absolute -inset-y-20 inset-x-0">
        <Image
          src={study.overview.image}
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#003C46]/95 via-[#003C46]/80 to-[#003C46]/60" />
      <GridTexture dark />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl"
        >
          <Quote className="w-8 h-8 text-[#0098AF] mb-6" />
          <p className="text-xl sm:text-2xl lg:text-[1.7rem] font-medium leading-relaxed text-white">
            {t.quote}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#0098AF]" />
            <p className="text-sm font-semibold text-white">
              {t.author}
              <span className="font-normal text-white/50"> · {t.company}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Roles & tools ────────────────────────────────────────────────────── */
export function RolesToolsSection({ study }: { study: CaseStudy }) {
  const { roles, tools } = study;
  return (
    <section className="w-full py-20 sm:py-24 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeader eyebrow="Roles & Tools" />
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <h3 className="text-lg font-semibold text-[#003C46] mb-5">Positions deployed</h3>
            <div className="divide-y divide-[#e2e8f0] border-y border-[#e2e8f0]">
              {roles.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={r.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                    className="flex items-center gap-4 py-4"
                  >
                    <span className="inline-flex w-9 h-9 rounded-lg bg-[#0098af]/10 text-[#0098AF] items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="flex-1 text-[15px] text-[#003C46]">{r.name}</span>
                    {r.count && (
                      <span className="font-mono text-sm text-[#0098AF] tabular-nums">
                        ×{r.count}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#003C46] mb-5">Tools & technologies</h3>
            <div className="flex flex-wrap gap-2.5">
              {tools.map((t, i) => (
                <motion.span
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease: EASE }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-sm text-[#003C46] hover:border-[#0098af]/40 transition-colors duration-200"
                >
                  {t.name}
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0098AF]">
                    {t.level}
                  </span>
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
