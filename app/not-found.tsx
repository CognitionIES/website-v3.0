"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MegaMenu />

      <main className="relative flex-1 bg-[#0f1117] overflow-hidden flex items-center">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0098AF]/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#0098AF]">
              DWG No. 404
            </p>

            <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl text-white leading-[1.0] tracking-[-0.03em]">
              Sheet not found.
            </h1>

            <p className="mt-5 font-sans text-[16px] text-white/50 leading-[1.75] max-w-md">
              The page you requested was never issued or has been superseded.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0098AF] text-white text-sm font-semibold hover:bg-white hover:text-[#003C46] transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                Back to home
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}