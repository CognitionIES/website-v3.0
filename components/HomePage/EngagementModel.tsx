"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface EngagementModel {
  id: string;
  title: string;
  description: string;
  category: string;
}

const engagementModels: EngagementModel[] = [
  {
    id: "time-material",
    title: "Time & Material",
    description:
      "Agile and quick ramp-up, transparent cost structure, and access to pre-vetted technical talent. Ideal for projects where scope and duration evolve.",
    category: "Flexible",
  },
  {
    id: "project-hiring",
    title: "Project-Based Hiring",
    description:
      "Fast-track recruitment tailored to specific project timelines, backed by strong domain expertise and strict delivery standards.",
    category: "Project",
  },
  {
    id: "fixed-price",
    title: "Fixed Price Model",
    description:
      "A predetermined cost is set for a well-defined project scope and deliverables, with payment milestones agreed upon upfront.",
    category: "Fixed",
  },
  {
    id: "dedicated-team",
    title: "Dedicated Team Model",
    description:
      "A team of engineers works exclusively for the client, acting as an extension of the client's in-house team for long-term projects.",
    category: "Dedicated",
  },
];

const EngagementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((p) => (p + 1) % engagementModels.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((p) => (p === 0 ? engagementModels.length - 1 : p - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    },
    [currentIndex, isTransitioning],
  );

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (isAutoPlaying && !isPaused) {
      intervalRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide, isAutoPlaying, isPaused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextSlide, prevSlide]);

  const getVisibleCards = () => {
    const extended = [
      ...engagementModels,
      ...engagementModels,
      ...engagementModels,
    ];
    const startIndex = currentIndex + engagementModels.length;
    return {
      cards: extended.slice(startIndex - 1, startIndex + 4),
      centerIndex: 1,
    };
  };

  const { cards, centerIndex } = getVisibleCards();

  return (
    <section
      className="w-full py-20 md:py-28 bg-white dark:bg-[#0a0a0f] overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Engagement Models Carousel"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#003C46 1px, transparent 1px), linear-gradient(90deg, #003C46 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#0098AF] mb-3">
            Engagement Models
          </p>
          <h2
            className="text-4xl md:text-[2.75rem] font-bold text-[#003C46] dark:text-white leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Flexible partnerships,{" "}
            <em className="not-italic text-[#0098AF]">your way</em>
          </h2>
          <p className="text-[15px] text-[#556677] dark:text-[#8899aa] max-w-lg leading-relaxed">
            Flexible partnership models designed to meet your unique business
            needs and drive sustainable growth.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          {/* Nav buttons */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white dark:bg-[#0d0d14] border border-[#e8eaed] dark:border-[#1e1e2e] flex items-center justify-center hover:border-[#0098AF] hover:text-[#0098AF] transition-colors duration-200 disabled:opacity-40"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white dark:bg-[#0d0d14] border border-[#e8eaed] dark:border-[#1e1e2e] flex items-center justify-center hover:border-[#0098AF] hover:text-[#0098AF] transition-colors duration-200 disabled:opacity-40"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Cards: desktop 3, tablet 2, mobile 1 */}
          <div className="px-12">
            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-5">
              {cards.slice(0, 3).map((model, index) => (
                <div
                  key={`${model.id}-${index}`}
                  onClick={() => {
                    if (index === 0) prevSlide();
                    if (index === 2) nextSlide();
                  }}
                  className={`flex-1 rounded-xl border transition-all duration-400 cursor-pointer overflow-hidden ${
                    index === centerIndex
                      ? "bg-[#003C46] border-[#003C46] scale-100 shadow-lg"
                      : "bg-white dark:bg-[#0d0d14] border-[#e8eaed] dark:border-[#1e1e2e] scale-[0.92] opacity-70 hover:opacity-85"
                  }`}
                >
                  <div className="p-7 h-[240px] flex flex-col justify-between">
                    <div>
                      <span
                        className={`text-[10px] font-bold tracking-[0.15em] uppercase mb-3 block ${
                          index === centerIndex
                            ? "text-[#0098AF]"
                            : "text-[#0098AF]/70"
                        }`}
                      >
                        {model.category}
                      </span>
                      <h3
                        className={`text-[19px] font-semibold leading-snug mb-3 ${
                          index === centerIndex
                            ? "text-white"
                            : "text-[#003C46] dark:text-white"
                        }`}
                      >
                        {model.title}
                      </h3>
                      <p
                        className={`text-[14px] leading-relaxed ${
                          index === centerIndex
                            ? "text-white/75"
                            : "text-[#778899] dark:text-[#6677aa]"
                        }`}
                      >
                        {model.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet */}
            <div className="hidden md:flex lg:hidden items-center gap-5">
              {cards.slice(0, 2).map((model, index) => (
                <div
                  key={`${model.id}-${index}`}
                  onClick={() => {
                    if (index === 1) nextSlide();
                  }}
                  className={`flex-1 rounded-xl border transition-all duration-400 cursor-pointer ${
                    index === 0
                      ? "bg-[#003C46] border-[#003C46] shadow-lg"
                      : "bg-white dark:bg-[#0d0d14] border-[#e8eaed] dark:border-[#1e1e2e] scale-95 opacity-75"
                  }`}
                >
                  <div className="p-6 h-[240px] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#0098AF] mb-3 block">
                        {model.category}
                      </span>
                      <h3
                        className={`text-[16px] font-semibold mb-2 ${index === 0 ? "text-white" : "text-[#003C46] dark:text-white"}`}
                      >
                        {model.title}
                      </h3>
                      <p
                        className={`text-[13px] leading-relaxed ${index === 0 ? "text-white/75" : "text-[#778899]"}`}
                      >
                        {model.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden">
              <div className="rounded-xl bg-[#003C46] border border-[#003C46] p-6 h-[260px] flex flex-col justify-between shadow-lg">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#0098AF] mb-3 block">
                    {engagementModels[currentIndex].category}
                  </span>
                  <h3 className="text-[17px] font-semibold text-white mb-2">
                    {engagementModels[currentIndex].title}
                  </h3>
                  <p className="text-[13px] text-white/75 leading-relaxed">
                    {engagementModels[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots + progress */}
          <div className="flex justify-center mt-8 gap-2">
            {engagementModels.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-5 h-2 bg-[#0098AF]"
                    : "w-2 h-2 bg-[#e8eaed] dark:bg-[#1e1e2e] hover:bg-[#0098AF]/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-4 max-w-xs mx-auto">
            <div className="w-full bg-[#e8eaed] dark:bg-[#1e1e2e] rounded-full h-[3px]">
              <div
                className="bg-[#0098AF] h-[3px] rounded-full transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / engagementModels.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngagementCarousel;
