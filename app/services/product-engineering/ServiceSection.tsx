// ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PRODUCT_ENGINEERING_CONSTANTS } from "@/constants/product-engineering/constants";
import { StaticImageData } from "next/image";
import { ComponentType } from "react";

interface Service {
  icon: ComponentType<{ className?: string }> | { type: string; icon: never };
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  href: string;
}

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Link href={service.href} className="block">
      <div className="group relative h-[300px] rounded-lg overflow-hidden cursor-pointer">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center z-10">
          {"type" in service.icon ? (
            <FontAwesomeIcon
              icon={service.icon.icon}
              className="w-5 h-5 text-[#0098af]"
            />
          ) : (
            <service.icon className="w-5 h-5 text-[#0098af]" />
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 bg-gradient-to-t from-[#0098af] via-[#00A4B4]/50 to-transparent opacity-90">
          <h3 className="text-2xl font-semibold mb-2 transition-transform duration-300 ease-in-out translate-y-0 group-hover:opacity-0">
            {service.title}
          </h3>
          <div className="absolute left-6 right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <p className="text-2xl font-semibold">{service.title}</p>
            <p className="text-base">{service.description}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#003C46] via-[#00A4B4]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
};

export default function ServicesSection() {
  const { TITLE, ITEMS } = PRODUCT_ENGINEERING_CONSTANTS.SERVICES;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#003C46]">
            {TITLE}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ITEMS.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}