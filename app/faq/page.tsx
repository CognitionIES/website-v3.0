"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faqs from "@/constants/faqs";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import { Search } from "lucide-react";

const CATS = [
  { id: "all", label: "All" },
  { id: "General", label: "General" },
  { id: "Product", label: "Product" },
  { id: "Process", label: "Process" },
];

export default function FAQPage() {
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const filtered = faqs.filter(f =>
    (cat === "all" || f.category === cat) &&
    (!q || f.question.toLowerCase().includes(q.toLowerCase()) || f.answer.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div className="bg-white">
      <MegaMenu />
      <PageHero image="/images/faq-hero.jpg" title="Frequently Asked Questions" subtitle="Support" breadcrumbs={[{ label: "FAQs", href: "/faq" }]} />

      <section ref={ref} className="bg-white py-28 md:py-36 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage:"linear-gradient(#003C46 1px,transparent 1px),linear-gradient(90deg,#003C46 1px,transparent 1px)", backgroundSize:"64px 64px" }} />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-10">
          <motion.div initial={{opacity:0,y:20}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="mb-16">
            <span className="eyebrow">Support</span>
            <h2 className="font-display text-5xl md:text-6xl text-[#111827] leading-[1.0] tracking-[-0.03em] mb-5 text-balance">
              Have a question? We&apos;ve got the <em className="not-italic text-[#0098AF]">answer.</em>
            </h2>

            {/* Search */}
            <div className="relative mt-8">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096] pointer-events-none" />
              <input type="text" placeholder="Search questions…" value={q} onChange={e=>setQ(e.target.value)}
                className="w-full h-14 pl-12 pr-5 border border-[#e2e8f0] bg-[#fafaf8] rounded-2xl font-sans text-[15px] focus:outline-none focus:border-[#0098AF] focus:ring-2 focus:ring-[#0098AF]/20 placeholder:text-[#718096]/60 transition-all duration-200" />
            </div>
          </motion.div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATS.map(c => (
              <button key={c.id} onClick={() => setCat(c.id)}
                className={`font-sans text-[12px] font-semibold tracking-[0.1em] uppercase px-5 py-2 rounded-full transition-all duration-200 ${cat === c.id ? "bg-[#003C46] text-white" : "border border-[#e2e8f0] text-[#718096] hover:border-[#0098AF]/40 hover:text-[#0098AF]"}`}>
                {c.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <AnimatePresence mode="wait">
            <motion.div key={cat+q} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.2}}>
              {filtered.length > 0 ? (
                <Accordion type="single" collapsible className="divide-y divide-[#e2e8f0]">
                  {filtered.map((f, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-0 py-1">
                      <AccordionTrigger className="py-6 hover:no-underline font-display text-xl text-[#111827] hover:text-[#0098AF] data-[state=open]:text-[#0098AF] text-left transition-colors duration-200 [&>svg]:text-[#0098AF]">
                        {f.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 pt-0 font-sans text-[15px] text-[#718096] leading-[1.8] border-l-2 border-[#0098AF]/25 pl-5 ml-0.5">
                        {f.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-20">
                  <p className="font-display text-2xl text-[#e2e8f0] mb-2">No results found</p>
                  <p className="font-sans text-[14px] text-[#718096]">Try a different keyword or category.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {filtered.length > 0 && (
            <p className="font-sans text-[12px] text-[#718096] text-center mt-8">
              Showing {filtered.length} of {faqs.length} questions
            </p>
          )}
        </div>
      </section>

      <CTABanner
        title="Still have questions?"
        accentWord="questions?"
        description="Our team is happy to help. Reach out and we'll respond within one business day."
        buttons={[
          { label: "Contact Us",       href: "/contact",  variant: "primary" },
          { label: "Explore Services", href: "/services", variant: "outline" },
        ]}
      />
      <Footer />
    </div>
  );
}
