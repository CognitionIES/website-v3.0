"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/constants/hero";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const DURATION = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = heroSlides.length;

  const go = useCallback((n: number) => setCurrent(((n % total) + total) % total), [total]);
  const next = useCallback(() => go(current + 1), [current, go]);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(next, DURATION);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [paused, next]);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0f1117]"
      style={{ height: "100svh", minHeight: 600, maxHeight: 1000 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/*  Background images  */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={slide.image} alt={`${slide.majorService} | Cognition IES`} fill priority={i === 0} sizes="100vw" quality={90} className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1117]/95 via-[#0f1117]/60 to-[#0f1117]/20" />
        </div>
      ))}

      {/*  Progress bar  */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/10 z-30">
        <div key={`${current}-${paused}`} className="h-full bg-[#0098AF]"
          style={{ animation: paused ? "none" : `progress-fill ${DURATION}ms linear forwards` }} />
      </div>

      {/*  Main content  */}
      <div className="relative z-10 h-full flex flex-col justify-between max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-14">

        {/* Slide counter */}
        <div className="flex items-center gap-3">
          <span className="font-sans text-[11px] font-semibold tracking-[0.2em] text-[#0098AF] uppercase">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="flex gap-1">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => go(i)} aria-label={`Slide ${i + 1}`}
                className={`transition-all duration-500 rounded-full ${i === current ? "w-8 h-1 bg-[#0098AF]" : "w-1 h-1 bg-white/25 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="max-w-2xl">
          {heroSlides.map((slide, i) => (
            <div key={slide.id} className={`transition-all duration-700 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute pointer-events-none"}`}>
              <p className="eyebrow text-[#0098AF] mb-5">{slide.majorService}</p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-[1.0] mb-6 tracking-[-0.03em] text-balance">
                {slide.title}
              </h1>
              <p className="font-sans text-[16px] text-white/55 leading-[1.75] max-w-lg mb-9 font-light">
                {slide.description}
              </p>
              <Link href="/services">
                <button className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#0098AF] hover:bg-white text-white hover:text-[#003C46] text-[13px] font-semibold tracking-wide rounded-full transition-all duration-300">
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom row | scroll hint + nav */}
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-2 text-white/25">
            <div className="w-px h-8 bg-white/20" />
            <span className="font-sans text-[11px] tracking-[0.18em] uppercase">Scroll to explore</span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => go(current - 1)} aria-label="Previous"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-[#0098AF] hover:text-[#0098AF] transition-colors duration-200">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={next} aria-label="Next"
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-[#0098AF] hover:text-[#0098AF] transition-colors duration-200">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
