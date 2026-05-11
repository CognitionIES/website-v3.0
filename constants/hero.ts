
import productImage from "@/constants/images/home/hero/product.jpg";
import processImage from "@/constants/images/home/hero/process.jpg";
import aimlImage from "@/constants/images/home/hero/ai-ml.jpg";
import saasImage from "@/constants/images/home/hero/saas.jpg";
import recruitmentImage from "@/constants/images/home/hero/recruit.jpg";
import saas2 from "@/constants/images/home/hero/saas-mobile.jpg";
import process2 from "@/constants/images/home/hero/process-mobile.jpg";
import recruit2 from "@/constants/images/home/hero/recruit-mobile.jpg";
import { StaticImageData } from "next/image";
//const productImage = '/images/home/hero/product.jpg';
//const processImage = '/images/home/hero/process.jpg';
//const aimlImage = '/images/home/hero/ai-ml.jpg';
//const saasImage = '/images/home/hero/saas.jpg';
//const recruitmentImage = '/images/home/hero/recruit.jpg';
//const saas2 = '/images/home/hero/saas-mobile.jpg';
//const process2 = '/images/home/hero/process-mobile.jpg';
//const recruit2 = '/images/home/hero/recruit-mobile.jpg';

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  majorService: string;
  description: string;
  image: string | StaticImageData;
  mobileImage: string | StaticImageData; // New field for mobile-specific images
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "From Concept to Creation",
    subtitle: "Transforming Ideas into Market-Ready Products",
    majorService: "Product Engineering",
    description:
      "From Aerospace to Industrial machinery, we create future-ready solutions that redefine performance, reliability, and efficiency.",
    image: productImage,
    mobileImage: productImage, // Using aimlImage as a placeholder; replace with actual mobile image
  },
  {
    id: 2,
    title: "Engineering Better Processes for Better Results",
    subtitle: "Optimizing Workflows for Maximum Efficiency",
    majorService: "Process Engineering",
    description:
      "From optimizing workflows to enhancing system efficiency, we drive innovation that transforms operations and maximizes productivity.",
    image: processImage,
    mobileImage: process2, // Using aimlImage as a placeholder; replace with actual mobile image
  },
  {
    id: 3,
    title: "Empowering Intelligence with AI",
    subtitle: "Intelligent Solutions for a Smarter Future",
    majorService: "Artificial Intelligence & Machine Learning",
    description:
      "Harnessing the power of AI to develop intelligent systems that automate, optimize, and elevate decision-making across industries",
    image: aimlImage,
    mobileImage: aimlImage, // Using aimlImage as a placeholder; replace with actual mobile image
  },
  {
    id: 4,
    title: "Powering Businesses with SaaS Innovation",
    subtitle: "Scalable Software for a Digital World",
    majorService: "SaaS Solutions",
    description:
      "Delivering cloud-based, scalable, and secure software solutions that streamline operations, enhance efficiency, and drive growth.",
    image: saasImage,
    mobileImage: saas2, // Using aimlImage as a placeholder; replace with actual mobile image
  },
  {
    id: 5,
    title: "The Right People for the Right Roles",
    subtitle: "Connecting Talent with Opportunity",
    majorService: "Staffing & Recruitment",
    description:
      "Helping businesses build high-performing teams by sourcing top talent through strategic recruitment and staffing solutions.",
    image: recruitmentImage,
    mobileImage: recruit2, // Using aimlImage as a placeholder; replace with actual mobile image
  },
];