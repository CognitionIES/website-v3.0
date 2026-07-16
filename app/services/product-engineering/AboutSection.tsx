"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PRODUCT_ENGINEERING_CONSTANTS } from "@/constants/product-engineering/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import productEngineeringImage from '@/constants/images/product-engineering/product-engineering-services.webp';

export default function AboutSection() {
  const { DESCRIPTION_1, DESCRIPTION_2, IMAGE } = PRODUCT_ENGINEERING_CONSTANTS.ABOUT;

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Product Engineering Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46] mb-4">
            Turning concepts into real-world innovations
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-12 items-stretch"
        >
          <div className="flex flex-col">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">{DESCRIPTION_1}</p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">{DESCRIPTION_2}</p>
            <div className="mt-auto pt-8">
              <Link href="/brochure">
                <Button className="bg-[#0098af] text-white hover:bg-white hover:text-[#003C46] text-sm sm:text-base px-6 py-3 transition-colors duration-200 border-2 border-[#0098af]">
                  Download Brochure
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative rounded-xl shadow-md overflow-hidden min-h-[380px]">
            <Image
              src={productEngineeringImage}
              alt="Product Engineering services"
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