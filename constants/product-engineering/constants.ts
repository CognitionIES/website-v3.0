// This file holds all constants for the product engineering page

import aboutImage from '@/constants/images/product-engineering/about.webp'
import productEngineeringImage from '@/constants/images/product-engineering/product-engineering-services.webp';

export const PRODUCT_ENGINEERING_CONSTANTS = {
  // Hero Section
  HERO: {
    IMAGE:
      productEngineeringImage,
    TITLE: "Product Engineering services",
    SUBTITLE: "Innovative engineering solutions for complex challenges",
  },

  // About Section
  ABOUT: {
    TITLE: "Product Engineering Solutions",
    DESCRIPTION_1:
      "At the heart of innovation lies product engineering. Our Product Engineering Services are designed to transform ideas into market ready solutions with precision and performance. From concept to commercialization, we help businesses accelerate development cycles, enhance product quality, and stay competitive in an ever evolving marketplace. With a strong foundation in engineering principles and a future focused mindset, we aim to drive smarter, more efficient product development at every stage.",
    DESCRIPTION_2:
      "We blend creativity with technical expertise to support every phase of the product journey. Our collaborative approach ensures alignment with your goals, delivering solutions that are both scalable and sustainable.",
    IMAGE:
      aboutImage,
  },

  // Services Section
  // Removed — was confirmed dead (nothing read .SERVICES), and its hrefs
  // pointed at /services/product-engineering/[service] subpages that no
  // longer exist. Live service content is in
  // constants/product-engineering/services.ts (PRODUCT_SERVICES), rendered
  // by ProductServicesExpanded.tsx as an in-page accordion.

  // FAQ Section
  FAQ: {
    TITLE: "Frequently Asked Questions",
    SUBTITLE: "Find answers to common questions about our engineering services",
    ITEMS: [
      {
        question: "What types of engineering services do you offer?",
        answer:
          "We offer a comprehensive range of engineering services including mechanical design, CAE/CFD analysis, electrical engineering, hydraulic systems, prototyping, embedded systems, and more. Our services spans across multiple engineering disciplines to provide complete solutions.",
      },
      {
        question: "How do you ensure quality in engineering projects?",
        answer:
          "We maintain strict quality control measures throughout our engineering processes. This includes detailed design reviews, simulation and testing, prototype validation, and adherence to industry standards and best practices. Our team of experienced engineers ensures that all deliverables meet the highest quality standards.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We serve a wide range of industries including automotive, aerospace, manufacturing, energy, healthcare, and consumer products. Our engineering services is adaptable to various sectors, allowing us to deliver specialized solutions for specific industry needs.",
      },
      {
        question:
          "Can you handle both small and large-scale engineering projects?",
        answer:
          "Yes, we have the capability to handle projects of any scale. From small component design to large-scale system integration, our team can adapt our resources and services to meet your project requirements while maintaining the same level of quality and attention to detail.",
      },
    ],
  },

  // Animation Variants
  ANIMATIONS: {
    FADE_IN: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
    },
  },
};
