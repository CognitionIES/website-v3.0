"use client";

// This component shows FAQs with an accordion
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PLANT_ENGINEERING_CONSTANTS } from "@/constants/plant-engineering/constants";

export default function FAQSection() {
  const { TITLE, SUBTITLE, ITEMS } = PLANT_ENGINEERING_CONSTANTS.FAQ;

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-[#F5FDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title and subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#003C46]">{TITLE}</h2>
          <p className="text-lg text-[#4A4A4A] max-w-7xl mb-10 mx-auto">{SUBTITLE}</p>
        </motion.div>
        {/* Accordion with FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl space-y-4 mx-auto"
        >
          <Accordion type="single" collapsible className="text-[#4A4A4A]">
            {ITEMS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-[#99D5DF]/20">
                <AccordionTrigger className="text-left text-base sm:text-lg lg:text-xl hover:text-[#00A4B4]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#4A4A4A] text-base leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}