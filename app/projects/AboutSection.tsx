"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "project-1",
    title: "Digitalization",
    category: "Digital Transformation",
    description:
      "Comprehensive digital transformation of a manufacturing plant through 3D scanning, digital twin creation, and real-time data integration to improve efficiency and accuracy.",
    image: "/images/projects/digitalization.jpg",
    href: "/projects/digitalization",
  },
  {
    id: "project-2",
    title: "Log Splitter Cost Optimization",
    category: "Product Cost Management",
    description:
      "Detailed cost and function analysis of a log splitter product line, identifying savings through competitive benchmarking, value engineering, and design optimisation.",
    image: "/images/projects/pcm.jpg",
    href: "/projects/product-cost-management",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#E6F0F5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#0098af]/10 text-[#0098af] text-xs font-medium uppercase tracking-wider rounded-full mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003C46]">
            Recent Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-medium text-[#003C46] uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#003C46] group-hover:text-[#0098af] transition-colors duration-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0098af]">
                  View case study
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
