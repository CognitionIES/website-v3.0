"use client";

import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import { PLANT_ENGINEERING_CONSTANTS } from "@/constants/plant-engineering/constants";
import { HorizontalScrollSection } from "@/components/HorizontalScrollSection";
import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronDown, ChevronRight, Home, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import CTASection from "@/components/CTA";

const frameBackground = "/images/Background/Frame_8.jpg";

export default function PlantEngineeringDetailsPage() {
  const shouldReduceMotion = useReducedMotion();
  const { ITEMS } = PLANT_ENGINEERING_CONSTANTS.SERVICES;
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  const servicesWithIds = ITEMS.map((item) => ({
    ...item,
    id: toSlug(item.title),
    bulletPoints: (
      item.bulletPoints || ["Default point 1", "Default point 2"]
    ).map((point: string | { mainTopic: string; subPoints?: string[] }) =>
      typeof point === "string"
        ? { mainTopic: point, subPoints: [] }
        : { mainTopic: point.mainTopic, subPoints: point.subPoints || [] }
    ),
    columns: item.columns || undefined,
  }));

  const scrollToSection = useCallback(
    (index: number) => {
      if (index < 0 || index >= sectionRefs.current.length || isScrolling)
        return;
      setIsScrolling(true);
      setCurrentSection(index);
      sectionRefs.current[index]?.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    },
    [isScrolling, shouldReduceMotion]
  );

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        const index = servicesWithIds.findIndex(
          (service) => service.id === hash.slice(1)
        );
        if (index !== -1) setCurrentSection(index);
      }
    }
    const timer = setTimeout(() => setShowScrollHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return;
      if (currentSection === sectionRefs.current.length - 1 && event.deltaY > 0) {
        setIsScrolling(false);
        return;
      }
      if (currentSection === 0 && event.deltaY < 0) {
        setIsScrolling(false);
        return;
      }
      event.preventDefault();
      setIsScrolling(true);
      const direction = event.deltaY > 0 ? 1 : -1;
      scrollToSection(Math.max(0, Math.min(sectionRefs.current.length - 1, currentSection + direction)));
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (isScrolling) return;
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      if (currentSection === sectionRefs.current.length - 1 && event.key === "ArrowDown") { setIsScrolling(false); return; }
      if (currentSection === 0 && event.key === "ArrowUp") { setIsScrolling(false); return; }
      event.preventDefault();
      setIsScrolling(true);
      const direction = event.key === "ArrowDown" ? 1 : -1;
      scrollToSection(Math.max(0, Math.min(sectionRefs.current.length - 1, currentSection + direction)));
    };

    const handleScrollEnd = () => setIsScrolling(false);

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("scrollend", handleScrollEnd);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, [currentSection, isScrolling, scrollToSection]);

  return (
    <div className="relative min-h-screen overflow-y-auto snap-y snap-mandatory">
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${frameBackground})` }}
      />
      <div className="relative">
        <div className="sticky top-0 z-50">
          <MegaMenu />
          <nav
            aria-label="Breadcrumb"
            className="bg-white/90 backdrop-blur-sm border-b border-gray-100 px-4 py-2"
          >
            <ol className="max-w-7xl mx-auto flex items-center text-sm text-gray-500 gap-1 flex-wrap">
              <li>
                <Link href="/" className="hover:text-[#0098af] flex items-center transition-colors" aria-label="Home">
                  <Home className="h-4 w-4" />
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="h-4 w-4 text-gray-400" /></li>
              <li><Link href="/services" className="hover:text-[#0098af] transition-colors">Services</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-4 w-4 text-gray-400" /></li>
              <li><Link href="/services/plant-engineering" className="hover:text-[#0098af] transition-colors">Plant Engineering</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-4 w-4 text-gray-400" /></li>
              <li><span className="text-[#003C46] font-medium" aria-current="page">Service Details</span></li>
            </ol>
          </nav>
        </div>

        {servicesWithIds.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => { sectionRefs.current[index] = el; }}
            className="relative min-h-screen w-full flex items-center justify-center snap-start"
          >
            <HorizontalScrollSection
              index={index}
              id={service.id}
              title={service.title}
              bulletPoints={service.bulletPoints}
              imageUrl={service.image}
              columns={service.columns === 3 || service.columns === 4 ? service.columns : undefined}
            />
          </div>
        ))}

        <AnimatePresence>
          {showScrollHint && (
            <motion.div
              className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            >
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
                animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
              >
                <MousePointer2 size={16} aria-hidden="true" />
                <span className="text-sm font-medium">Scroll to explore</span>
                <ChevronDown size={16} aria-hidden="true" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <CTASection />
      <Footer />
    </div>
  );
}