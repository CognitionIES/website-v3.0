"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Cognition IES brings strong capabilities in teardown and idea generation, offering valuable insights that helped us refine our product design and explore cost-effective alternatives. A very positive experience — highly recommended for VAVE-focused engineering.",
    author: "Senior Vice President",
    company: "Global Manufacturing Client",
    index: "01",
  },
  {
    quote:
      "The digital twin they built is a dynamic tool that gives us real-time visibility into our operations. We have seen significant improvements in decision-making, reduced downtime, and far fewer issues during equipment installation.",
    author: "Project Manager",
    company: "Industrial Facility Client",
    index: "02",
  },
  {
    quote:
      "Their expertise in value engineering delivered a 15% reduction in manufacturing costs while enhancing product quality. Their clear communication made complex engineering concepts accessible to our entire team.",
    author: "Senior Principal Engineer",
    company: "Product Engineering Client",
    index: "03",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const total = testimonials.length;

  const goTo = useCallback(
    (n: number) => setActive(((n % total) + total) % total),
    [total],
  );
  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(goNext, 7000);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, paused, goNext]);

  return (
    <section
      ref={ref}
      className="bg-[#111827] py-28 md:py-36 overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          {/* Left: label + controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 lg:pr-16"
          >
            <span className="eyebrow text-[#0098AF]">Client Voices</span>
            <h2 className="font-display text-4xl text-white leading-[1.1] mb-12">
              What our clients say
            </h2>

            {/* Index tabs */}
            <div className="space-y-4 mb-10">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`flex items-center gap-4 w-full text-left transition-all duration-200 group ${i === active ? "opacity-100" : "opacity-30 hover:opacity-60"}`}
                >
                  <span
                    className={`font-display text-2xl tabular-nums transition-colors duration-200 ${i === active ? "text-[#0098AF]" : "text-white/40"}`}
                  >
                    {t.index}
                  </span>
                  <div
                    className={`h-px flex-1 transition-all duration-500 ${i === active ? "bg-[#0098AF]" : "bg-white/20"}`}
                  />
                </button>
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex gap-2">
              <button
                onClick={() => goTo(active - 1)}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-[#0098AF] hover:text-[#0098AF] transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => goTo(active + 1)}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-[#0098AF] hover:text-[#0098AF] transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right: giant pull-quote */}
          <div className="lg:col-span-9 lg:pl-16 lg:border-l lg:border-white/10 min-h-[420px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Giant quotation mark */}
                <div className="font-display text-[160px] leading-none text-[#0098AF]/10 select-none mb-[-40px]">
                  &ldquo;
                </div>

                <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl text-white leading-[1.35] tracking-[-0.02em] mb-12 text-balance ">
                  {testimonials[active].quote}
                </blockquote>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-px bg-[#0098AF]" />
                  <div>
                    <p className="font-sans text-[14px] font-semibold text-white">
                      {testimonials[active].author}
                    </p>
                    <p className="font-sans text-[13px] text-white/40">
                      {testimonials[active].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
