"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight, Plus, ChevronDown } from "lucide-react";
import {
  Wrench, Factory, Server, Users, Workflow,
  Box, Layers, FileText, Truck, Printer, Cpu,
} from "lucide-react";
import { IconSettingsDollar } from "@tabler/icons-react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears, faPlugCircleBolt, faMagnifyingGlassChart,
  faBuildingShield, faChartArea, faGaugeHigh,
  faBridge, faUsers, faCity,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

import Logo1 from "@/constants/images/LOGO-COGNITION.png";
import colImage from "@/constants/images/home/3.jpg";

const T = {
  tile:    { duration: 0.55, ease: [0.32, 0, 0.18, 1] as const },
  panel:   { duration: 0.4,  ease: [0.32, 0, 0.18, 1] as const },
  reveal:  { duration: 0.32, ease: [0.32, 0, 0.18, 1] as const },
  stagger: 0.03,
  image:   { duration: 0.5, ease: "easeInOut" as const },
  arrow:   { duration: 0.25, ease: [0.32, 0, 0.18, 1] as const },
  hover:   320,
};

interface Sub { title: string; href: string; icon?: ReactNode; }
interface Svc {
  num: string; title: string; short: string; href: string;
  descriptor: string; subCategories: Sub[];
  image: { src: string | StaticImageData; alt: string };
}

const services: Svc[] = [
  {
    num: "01", title: "Product Engineering", short: "Product",
    href: "/services/product-engineering",
    descriptor: "Full-lifecycle engineering from concept to delivery.",
    image: { src: colImage, alt: "Product Engineering" },
    subCategories: [
      { title: "Mechanical Design",        href: "/services/product-engineering#mechanical-design",        icon: <FontAwesomeIcon icon={faGears} className="w-3 h-3" /> },
      { title: "Electrical Engineering",   href: "/services/product-engineering#electrical-engineering",   icon: <FontAwesomeIcon icon={faPlugCircleBolt} className="w-3 h-3" /> },
      { title: "CAE / CFD",                href: "/services/product-engineering#cae-cfd",                  icon: <FontAwesomeIcon icon={faMagnifyingGlassChart} className="w-3 h-3" /> },
      { title: "Hydraulic Engineering",    href: "/services/product-engineering#hydraulic-engineering",    icon: <Workflow className="w-3 h-3" /> },
      { title: "Prototyping & 3D Printing",href: "/services/product-engineering#prototyping-3d-printing",  icon: <Printer className="w-3 h-3" /> },
      { title: "Asset Management",         href: "/services/product-engineering#asset-management",         icon: <Layers className="w-3 h-3" /> },
      { title: "Embedded Systems",         href: "/services/product-engineering#embedded-systems",         icon: <Cpu className="w-3 h-3" /> },
      { title: "Technical Publication",    href: "/services/product-engineering#technical-publication",    icon: <FileText className="w-3 h-3" /> },
      { title: "Supply Chain & Procurement",href: "/services/product-engineering#supply-chain-management", icon: <Truck className="w-3 h-3" /> },
    ],
  },
  {
    num: "02", title: "Plant Engineering", short: "Plant",
    href: "/services/plant-engineering",
    descriptor: "Smart processes that future-proof industrial facilities.",
    image: { src: colImage, alt: "Plant Engineering" },
    subCategories: [
      { title: "Process & Safety",      href: "/services/plant-engineering#process-safety-engineering",     icon: <FontAwesomeIcon icon={faBuildingShield} className="w-3 h-3" /> },
      { title: "Piping Engineering",    href: "/services/plant-engineering#piping-engineering",             icon: <Workflow className="w-3 h-3" /> },
      { title: "Piping Stress Analysis",href: "/services/plant-engineering#piping-stress-analysis",        icon: <FontAwesomeIcon icon={faChartArea} className="w-3 h-3" /> },
      { title: "Mechanical Engineering",href: "/services/plant-engineering#mechanical-design-engineering",  icon: <FontAwesomeIcon icon={faGears} className="w-3 h-3" /> },
      { title: "Electrical Engineering",href: "/services/plant-engineering#electrical-design-engineering",  icon: <FontAwesomeIcon icon={faPlugCircleBolt} className="w-3 h-3" /> },
      { title: "Reverse Engineering",   href: "/services/plant-engineering#reverse-engineering",            icon: <IconSettingsDollar stroke={2} className="w-3 h-3" /> },
      { title: "Instrumentation",       href: "/services/plant-engineering#instrumentation-engineering",   icon: <FontAwesomeIcon icon={faGaugeHigh} className="w-3 h-3" /> },
      { title: "Civil & Structural",    href: "/services/plant-engineering#civil-engineering",             icon: <FontAwesomeIcon icon={faBridge} className="w-3 h-3" /> },
      { title: "Modular Package",       href: "/services/plant-engineering#modular-package",               icon: <Box className="w-3 h-3" /> },
      { title: "Procurement Support",   href: "/services/plant-engineering#procurement-support",           icon: <Truck className="w-3 h-3" /> },
    ],
  },
  {
    num: "03", title: "SaaS Solutions", short: "SaaS",
    href: "/services/saas-solution/servicecpq",
    descriptor: "Cloud-native software built for engineering organisations.",
    image: { src: colImage, alt: "SaaS Solutions" },
    subCategories: [
      { title: "ServiceCPQ Platform", href: "/services/saas-solution/servicecpq", icon: <Server className="w-3 h-3" /> },
    ],
  },
  // {
  //   num: "04", title: "Staffing & Recruitment", short: "Staffing",
  //   href: "/services/staffing",
  //   descriptor: "Data-driven talent acquisition across India & USA.",
  //   image: { src: colImage, alt: "Staffing & Recruitment" },
  //   subCategories: [
  //     { title: "For Job Seekers", href: "/services/staffing/job-seeker", icon: <FontAwesomeIcon icon={faUsers} className="w-3 h-3" /> },
  //     { title: "For Employers",   href: "/services/staffing/employer",   icon: <FontAwesomeIcon icon={faCity} className="w-3 h-3" /> },
  //   ],
  // },
];

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Careers",  href: "/careers" },
  { label: "About",    href: "/about" },
];
function MagneticButton({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
    setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      whileTap={{ scale: 0.96 }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
    >
      <Link
        href={href}
        onClick={onClick}
        className="relative inline-flex items-center gap-1.5 px-5 py-2 bg-[#003C46] text-white text-[13px] font-semibold rounded-full overflow-hidden"
      >
        {/* Cursor spotlight */}
        <span
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.2s ease",
            background: `radial-gradient(circle 70px at ${spot.x}px ${spot.y}px, rgba(0,152,175,0.55), transparent 70%)`,
          }}
        />
        <span className="relative z-10 flex items-center gap-1.5">{children}</span>
      </Link>
    </motion.div>
  );
}

export function MegaMenu() {
  const [isOpen, setIsOpen]               = useState(false);
  const [hoveredTile, setHoveredTile]     = useState<number | null>(null);
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMobileOpen, setIsMobileOpen]   = useState(false);
  const [openMobileSvc, setOpenMobileSvc] = useState<string | null>(null);

  const closeTimer  = useRef<NodeJS.Timeout | null>(null);
  const insideMenu  = useRef(false);
  const pathname    = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  const cancelClose = () => {
    insideMenu.current = true;
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    insideMenu.current = false;
    closeTimer.current = setTimeout(() => {
      if (!insideMenu.current) { setIsOpen(false); setHoveredTile(null); }
    }, T.hover);
  };

  const closeAll = () => { setIsOpen(false); setHoveredTile(null); };

  return (
    <div className="relative z-50">
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[200] bg-white transition-shadow duration-500",
          isScrolled && !isOpen
            ? "shadow-[0_1px_12px_0_rgba(0,0,0,0.06)]"
            : "border-b border-[#e2e8f0]"
        )}
      >
        {/* ── Top bar ── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-[62px]">

            {/* Logo */}
            <Link href="/" onClick={closeAll} className="flex-shrink-0">
              <Image src={Logo1} width={148} height={74} alt="Cognition IES" priority />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeAll}
                  className={cn(
                    "px-3 py-2 text-[13.5px] font-medium transition-colors duration-200",
                    pathname === l.href
                      ? "text-[#0098AF]"
                      : "text-[#374151] hover:text-[#111827]"
                  )}
                >
                  {l.label}
                </Link>
              ))}

              {/* ── Services trigger with rotating chevron ── */}
              <button
                onMouseEnter={() => { cancelClose(); setIsOpen(true); }}
                onMouseLeave={scheduleClose}
                onClick={() => setIsOpen((v) => !v)}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-[13.5px] font-medium transition-colors duration-200 rounded-md",
                  isOpen
                    ? "text-[#0098AF] bg-[#0098AF]/5"
                    : "text-[#374151] hover:text-[#111827] hover:bg-gray-50"
                )}
              >
                Services
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: [0.32, 0, 0.18, 1] }}
                  className="flex items-center"
                >
                  <ChevronDown className="w-3.5 h-3.5" strokeWidth={2.5} />
                </motion.span>
              </button>

              <div className="w-px h-4 bg-[#e2e8f0] mx-3" />

              <MagneticButton href="/contact" onClick={closeAll}>
                Contact Us
              </MagneticButton>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => { setIsMobileOpen((v) => !v); setIsOpen(false); }}
              className="md:hidden p-2 text-[#374151] hover:text-[#0098AF] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMobileOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.22 }}
                  className="block"
                >
                  {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── Shelf panel ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="shelf"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={T.panel}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
              className="overflow-hidden border-t border-[#e8edf2] bg-white"
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <div className="flex" style={{ height: 380 }}>

                  {/* ── Service tiles ── */}
                  {services.map((svc, i) => {
                    const active = hoveredTile === i;
                    const dimmed = hoveredTile !== null && !active;

                    return (
                      <motion.div
                        key={svc.num}
                        onMouseEnter={() => setHoveredTile(i)}
                        onMouseLeave={() => setHoveredTile(null)}
                        animate={{ flex: active ? 2.8 : dimmed ? 0.6 : 1 }}
                        transition={T.tile}
                        className={cn(
                          "relative flex flex-col border-r border-[#e8edf2] overflow-hidden first:border-l",
                        )}
                        style={{
                          minWidth: 0,
                          backgroundColor: active ? "#003C46" : "#ffffff",
                          transition: "background-color 0.5s cubic-bezier(0.32,0,0.18,1)",
                        }}
                      >
                        {/* Background image */}
                        <AnimatePresence>
                          {active && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={T.image}
                              className="absolute inset-0 pointer-events-none"
                            >
                              <Image
                                src={svc.image.src}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="40vw"
                                style={{ opacity: 0.07 }}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Full-tile link overlay */}
                        <Link
                          href={svc.href}
                          onClick={closeAll}
                          className="absolute inset-0 z-10"
                          aria-label={`Go to ${svc.title}`}
                        />

                        {/* Card content */}
                        <div className="relative z-20 flex flex-col h-full p-7 pointer-events-none select-none">

                          {/* Number + arrow */}
                          <div className="flex items-start justify-between">
                            <motion.span
                              animate={{ color: active ? "#0098AF" : "#c8d3dc" }}
                              transition={{ duration: 0.4 }}
                              className="text-[10px] font-semibold tracking-[0.22em] tabular-nums"
                            >
                              {svc.num}
                            </motion.span>
                            <motion.div
                              animate={{ opacity: active ? 1 : 0, x: active ? 0 : 6, y: active ? 0 : -6 }}
                              transition={T.arrow}
                            >
                              <ArrowUpRight className="w-4 h-4 text-[#0098AF]" />
                            </motion.div>
                          </div>

                          {/* Bottom content */}
                          <div className="mt-auto">
                            <motion.p
                              animate={{ color: active ? "#0098AF" : "#718096" }}
                              transition={{ duration: 0.4 }}
                              className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-2"
                            >
                              {svc.short}
                            </motion.p>

                            <motion.p
                              animate={{
                                color: active ? "#ffffff" : "#1a2332",
                                fontSize: active ? "1.45rem" : "1.25rem",
                              }}
                              transition={{ duration: 0.4, ease: [0.32, 0, 0.18, 1] }}
                              className="font-display leading-tight tracking-tight"
                              style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                            >
                              {svc.title}
                            </motion.p>

                            {/* Expanded content — 2-column grid, no scrollbar */}
                            <AnimatePresence>
                              {active && (
                                <motion.div
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 4 }}
                                  transition={{ duration: 0.3, delay: 0.06, ease: [0.32, 0, 0.18, 1] }}
                                  className="pointer-events-auto"
                                >
                                  <p className="text-[13px] text-white/65 leading-relaxed mt-2">
                                    {svc.descriptor}
                                  </p>

                                  <div className="border-t border-white/10 mt-3 mb-3" />

                                  {/* 2-column grid — fits 9–10 items cleanly, no scrollbar */}
                                  <div className={cn(
                                    "grid gap-x-4 gap-y-1",
                                    svc.subCategories.length > 4
                                      ? "grid-cols-2"
                                      : "grid-cols-1"
                                  )}>
                                    {svc.subCategories.map((sub, idx) => (
                                      <motion.div
                                        key={sub.title}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                          duration: 0.25,
                                          delay: 0.08 + idx * T.stagger,
                                          ease: [0.32, 0, 0.18, 1],
                                        }}
                                      >
                                        <Link
                                          href={sub.href}
                                          onClick={closeAll}
                                          className="group/sub flex items-center gap-2 px-2 py-2 -mx-2 rounded-md hover:bg-white/[0.08] transition-colors duration-150"
                                        >
                                          <span className="text-white/45 group-hover/sub:text-[#0098AF] transition-colors duration-150 shrink-0">
                                            {sub.icon}
                                          </span>
                                          <span className="text-[13px] text-white/75 group-hover/sub:text-white/90 transition-colors duration-150 leading-snug">
                                            {sub.title}
                                          </span>
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* ── Meta column ── */}
                  <div className="w-[185px] shrink-0 border-l border-[#e8edf2] flex flex-col justify-between px-6 py-7">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#a0aab4] mb-4">
                        Quick Links
                      </p>
                      <div className="space-y-0.5">
                        {[
                          { label: "All services",    href: "/services/product-engineering" },
                          { label: "Recent projects", href: "/projects" },
                          //  { label: "Case studies",    href: "/projects" },
                          { label: "About us",        href: "/about" },
                        ].map((l) => (
                          <Link
                            key={l.label}
                            href={l.href}
                            onClick={closeAll}
                            className="group flex items-center justify-between py-2 border-b border-[#f0f4f8] last:border-0 text-[12.5px] text-[#4a5568] hover:text-[#0098AF] transition-colors duration-200"
                          >
                            {l.label}
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-[#e8edf2]">
                      <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#a0aab4] mb-3">
                        Offices
                      </p>
                      {["India", "USA"].map((loc) => (
                        <div key={loc} className="flex items-center gap-2.5 mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0098AF] shrink-0" />
                          <span className="text-[12.5px] text-[#718096]">{loc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Footer strip */}
              <div className="border-t border-[#e8edf2] bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-10 flex items-center justify-between">
                  <p className="text-[11px] text-[#a0aab4] tracking-wide">
                    3 practice areas &nbsp;·&nbsp; India & USA
                  </p>
                  <Link
                    href="/contact"
                    onClick={closeAll}
                    className="text-[11px] font-semibold text-[#0098AF] hover:text-[#003C46] transition-colors duration-200"
                  >
                    Start a project →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              key="mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0, 0.18, 1] }}
              className="md:hidden overflow-hidden border-t border-[#e8edf2] bg-white"
            >
              <div className="px-6 py-5 space-y-0.5">

                {navLinks.map((l, idx) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, delay: idx * 0.05, ease: [0.32, 0, 0.18, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={cn(
                        "flex items-center h-11 text-[15px] font-medium border-b border-[#f0f4f8] transition-colors duration-200",
                        pathname === l.href ? "text-[#0098AF]" : "text-[#374151] hover:text-[#0098AF]"
                      )}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="pt-5 pb-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-[#a0aab4]"
                >
                  Services
                </motion.p>

                {services.map((svc, idx) => (
                  <motion.div
                    key={svc.num}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, delay: 0.22 + idx * 0.06, ease: [0.32, 0, 0.18, 1] }}
                    className="border-b border-[#f0f4f8]"
                  >
                    <div className="flex items-center">
                      <Link
                        href={svc.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center gap-3 flex-1 h-12 text-[14px] font-medium text-[#374151] hover:text-[#0098AF] transition-colors duration-200"
                      >
                        <span className="text-[10px] tabular-nums text-[#c8d3dc] w-5">{svc.num}</span>
                        {svc.title}
                      </Link>

                      {svc.subCategories.length > 1 && (
                        <button
                          onClick={() =>
                            setOpenMobileSvc(openMobileSvc === svc.num ? null : svc.num)
                          }
                          className="p-3 text-[#a0aab4] hover:text-[#374151] transition-colors duration-200"
                          aria-label={`Toggle ${svc.title}`}
                        >
                          <motion.span
                            animate={{ rotate: openMobileSvc === svc.num ? 45 : 0 }}
                            transition={{ duration: 0.22, ease: [0.32, 0, 0.18, 1] }}
                            className="block"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.span>
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {openMobileSvc === svc.num && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.32, 0, 0.18, 1] }}
                          className="overflow-hidden pl-8 pb-2"
                        >
                          {/* 2-col grid on mobile too when many items */}
                          <div className={cn(
                            "grid gap-x-2",
                            svc.subCategories.length > 4 ? "grid-cols-2" : "grid-cols-1"
                          )}>
                            {svc.subCategories.map((sub, subIdx) => (
                              <motion.div
                                key={sub.title}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: subIdx * 0.025 }}
                              >
                                <Link
                                  href={sub.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="flex items-center gap-2 h-9 text-[13px] text-[#718096] hover:text-[#0098AF] transition-colors duration-200"
                                >
                                  <span className="text-[#c8d3dc] shrink-0">{sub.icon}</span>
                                  <span className="leading-tight">{sub.title}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, delay: 0.45 }}
                  className="pt-5 pb-2"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full h-12 bg-[#003C46] hover:bg-[#0098AF] text-white text-[14px] font-semibold rounded-full transition-colors duration-300"
                  >
                    Contact Us
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sticky spacer */}
      <div className="h-[62px]" />
    </div>
  );
}
