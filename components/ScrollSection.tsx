"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";


import blueBulletImage from "@/constants/images/Bullet_Points/bullet_point_blue_1.webp";
import BulletPointGray from "@/constants/images/Bullet_Points/gray.webp";

interface ScrollSectionProps {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  bulletPoints: string[];
  additionalImageUrl?: string;
}

export function ScrollSection({
  index,
  title,
  description,
  imageUrl,
  bulletPoints = [],
  additionalImageUrl,
}: ScrollSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const isMobile = useIsMobile();

  const isEven = index % 2 === 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 15,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
      },
    },
  };

  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative max-w-7xl mx-auto px-2 py-4"
        role="region"
        aria-label={`Section ${title}`}
        aria-labelledby={`section-title-${index}`}
      >
        <div className="backdrop-blur-sm p-4 rounded-xl">
          <div className="space-y-6">
            {" "}
            {/* Changed from space-y-8 to space-y-6 */}
            <motion.h2
              id={`section-title-${index}`}
              className="text-2xl sm:text-3xl font-semibold tracking-tight text-white"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              variants={containerVariants}
            >
              {bulletPoints.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start space-x-2 group min-w-0"
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { x: -5 }}
                  role="listitem"
                >
                  <span className="mt-1.5 w-3 h-3 rounded-full bg-[#0098AF] inline-block flex-shrink-0 mr-2" />
                  <span className="text-sm sm:text-base text-white/70 leading-snug break-words">
                    {point}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
        {additionalImageUrl && (
          <motion.div
            className="relative max-w-full py-0 h-[60px] rounded-lg overflow-hidden mt-auto"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-full h-full transform-gpu"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={additionalImageUrl}
                alt={`Additional image for ${title}`}
                className="object-cover"
                fill
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    );
  }

 
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative max-w-7xl mx-auto px-4"
      role="region"
      aria-label={`Section ${title}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
        <motion.div
          className={`space-y-2 flex flex-col justify-between h-full ${
            isEven ? "md:order-2 md:col-span-8" : "md:order-1 md:col-span-8"
          }`}
          variants={itemVariants}
        >
          <div className="space">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
          </div>

          <motion.p
            className="text-base text-white/60 leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <motion.ul
            className="flex flex-wrap gap-x-8 gap-y-3"
            variants={containerVariants}
          >
            {bulletPoints.map((point, idx) => (
              <motion.li
                key={idx}
                className="flex items-start space-x-3 group flex-1 min-w-[250px]"
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { x: -5 }}
                role="listitem"
              >
                <Image
                  src={isEven ? blueBulletImage : BulletPointGray}
                  alt="Cognition IES engineering"
                  width={16}
                  height={16}
                  className="mt-1 flex-shrink-0 transition-transform group-hover:scale-125"
                  aria-hidden="true"
                />
                <span className="text-sm md:text-base text-white/70 leading-snug">
                  {point}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {additionalImageUrl && (
            <motion.div
              className="relative max-w-[1200px] py-0 h-[140px] rounded-lg overflow-hidden mt-auto"
              variants={itemVariants}
            >
              <motion.div
                className="relative w-full h-full transform-gpu"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={additionalImageUrl}
                  alt={`Additional image for ${title}`}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className={`relative h-[480px] w-full ${
            isEven
              ? "md:order-1 md:col-span-4 md:mr-2"
              : "md:order-2 md:col-span-4 md:ml-8"
          }`}
          variants={itemVariants}
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10" />
            <motion.div
              className="relative w-full h-full transform-gpu"
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
