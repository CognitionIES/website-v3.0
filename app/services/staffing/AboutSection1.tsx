"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import aboutImage1 from "@/constants/images/staffing-recruitment/about-2.jpg";

export default function AboutSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setIsInView(entry.isIntersecting); },
      { threshold: 0.2, rootMargin: "0px 0px -20% 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 relative bg-gradient-to-b from-white to-[#E6F0F5]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Staffing &amp; Recruitment Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] mb-4">
            Empowering Careers. Enabling Growth.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-12 items-center text-justify"
        >
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              In today&apos;s fast paced and ever evolving job market, finding
              the right opportunity or the right talent can feel
              overwhelming. That&apos;s where we come in.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              At Cognition IES, we believe recruitment is more than just
              matching resumes with job descriptions. It&apos;s about
              understanding people, purpose, and potential. We work closely with
              both job seekers and employers to ensure every connection is
              meaningful, strategic, and long lasting.
            </p>
          </div>
          <div className="hidden md:block relative h-[380px] rounded-xl shadow-md overflow-hidden">
            <Image
              src={aboutImage1}
              alt="Staffing and recruitment team"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 50vw, 640px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}