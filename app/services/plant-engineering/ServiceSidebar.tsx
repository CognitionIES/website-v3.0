"use client"; // Required for usePathname hook

import {
  DropletIcon,
  GaugeCircle,
  Layers2,
  RssIcon,
  Settings2,
  ShieldEllipsis,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";
const processImage = '/images/Plant-engineering/Services/process-and-safety.jpg';
const pipingImage = '/images/Plant-engineering/Services/piping-eng.jpg';
const pipingStressImage = '/images/Plant-engineering/Services/piping-stress-analysis.jpg';
const mechImage = '/images/Plant-engineering/Services/mechanical-eng.jpg';
const electricalImage = '/images/Plant-engineering/Services/ele.jpg';
const civilImage = '/images/Plant-engineering/Services/civil.jpg';
const procurementImage = '/images/Plant-engineering/Services/procurement.jpg';
const structImage = '/images/Plant-engineering/Services/struct-eng.jpg';
const modularImage = '/images/Plant-engineering/Services/modu.jpg';
const reverseImage = '/images/Plant-engineering/Services/rev-eng.jpg';
const instrumentImage = '/images/Plant-engineering/Services/intrument-eng.jpg';
interface Service {
  title: string;
  href: string;
  icon: React.ReactNode;
  image: StaticImageData | string; // New property for the image URL
  alt: string; // New property for the image alt text
}

const services: Service[] = [
  {
    title: "PROCESS & SAFETY ENGINEERING",
    href: "/services/plant-engineering/details#section-1",
    icon: <RssIcon className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: processImage,
    alt: "Process safety equipment",
  },
  {
    title: "MECHANICAL ENGINEERING",
    href: "/services/plant-engineering/details#section-2",
    icon: <Settings2 className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: mechImage,
    alt: "Mechanical engineering tools",
  },
  {
    title: "PIPING ENGINEERING",
    href: "/services/plant-engineering/details#section-3",
    icon: <DropletIcon className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: pipingImage,
    alt: "Piping engineering layout",
  },
  {
    title: "PIPING STRESS ANALYSIS",
    href: "/services/plant-engineering/details#section-4",
    icon: <Layers2 className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: pipingStressImage,
    alt: "Piping stress analysis dashboard",
  },
  {
    title: "CIVIL ENGINEERING",
    href: "/services/plant-engineering/details#section-5",
    icon: <GaugeCircle className="w-4 h-4 text-[#0098AF] transition-colors" />,
    image: civilImage,
    alt: "Civil engineering construction",
  },
  {
    title: "STRUCTURAL ENGINEERING",
    href: "/services/plant-engineering/details#section-6",
    icon: (
      <ShieldEllipsis className="w-4 h-4 text-[#0098AF] transition-colors" />
    ),
    image: structImage,
    alt: "Structural engineering framework",
  },
  {
    title: "ELECTRICAL ENGINEERING",
    href: "/services/plant-engineering/details#section-7",
    icon: (
      <ShieldEllipsis className="w-4 h-4 text-[#0098AF] transition-colors" />
    ),
    image: electricalImage,
    alt: "Electrical engineering panel",
  },
  {
    title: "INSTRUMENTATION ENGINEERING",
    href: "/services/plant-engineering/details#section-8",
    icon: (
      <ShieldEllipsis className="w-4 h-4 text-[#0098AF] transition-colors" />
    ),
    image: instrumentImage,
    alt: "Instrumentation control system",
  },
  {
    title: "MODULAR PACKAGE",
    href: "/services/plant-engineering/details#section-9",
    icon: (
      <ShieldEllipsis className="w-4 h-4 text-[#0098AF] transition-colors" />
    ),
    image: modularImage,
    alt: "Modular plant package",
  },
  {
    title: "REVERSE ENGINEERING",
    href: "/services/plant-engineering/details#section-10",
    icon: (
      <ShieldEllipsis className="w-4 h-4 text-[#0098AF] transition-colors" />
    ),
    image: reverseImage,
    alt: "Reverse engineering process",
  },
  {
    title: "PROCUREMENT SUPPORT",
    href: "/services/plant-engineering/details#section-11",
    icon: (
      <ShieldEllipsis className="w-4 h-4 text-[#0098AF] transition-colors" />
    ),
    image: procurementImage,
    alt: "Procurement planning meeting",
  },
];

export default function ServiceSidebar() {
  const pathname = usePathname();

  // Find the active service based on the current pathname
  const activeService = services.find((service) => service.href === pathname);

  return (
    <div>
      <div className="bg-white p-8 rounded-xl shadow-md border border-[#0098AF]/20 hover:shadow-lg transition-shadow duration-300 max-w-sm">
        <h3 className="text-xl font-semibold mb-4 text-[#0098AF] border-b border-[#0098AF]/20 pb-2">
          Our Services
        </h3>
        <div className="space-y-1 overflow-y-auto max-h-[70vh]">
          {services.map((service, index) => {
            const isActive = pathname === service.href;

            return (
              <Link key={index} href={service.href} passHref>
                <div
                  className={`flex items-center p-[7px] rounded-lg transition-all duration-300 text-[#5B5B5B] hover:text-[#0098AF] ${
                    isActive
                      ? "bg-[#0098AF]/20 text-[#0098AF] font-semibold"
                      : "hover:bg-[#0098AF]/10"
                  }`}
                >
                  {service.icon}
                  <span className="ml-2">{service.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Image Section below the service list */}
      <div className="mt-[72px]">
        {activeService ? (
          <Image
            src={activeService.image}
            alt={activeService.alt}
            width={500} // Adjusted to fit within sidebar width
            height={300} // Estimated height based on aspect ratio (adjust if needed)
            className="w-full max-h-[550px] object-cover rounded-2xl shadow-md"
          />
        ) : null}
      </div>
    </div>
  );
}
// export default function ServiceSidebar() {
//   const pathname = usePathname();
//   return (
//     <div className="bg-white p-8 rounded-xl shadow-md sticky top-16 border border-[#0098AF]/20 hover:shadow-lg transition-shadow duration-300 max-w-sm ">
//       {/* Reduced padding from p-8 to p-4 for a slimmer look */}
//       <h3 className="text-xl font-semibold mb-4 text-[#0098AF] border-b border-[#0098AF]/20 pb-2">
//         Our Services
//       </h3>
//       <div className="space-y-2 overflow-y-auto max-h-[70vh]">
//         {/* Reduced space-y-3 to space-y-2 for tighter spacing */}
//         {services.map((service, index) => {
//           const isActive = pathname === service.href;
//           return (
//             <Link key={index} href={service.href} passHref>
//               <div
//                 className={`flex items-center p-2 rounded-lg transition-all duration-300 text-[#5B5B5B] hover:text-[#0098AF] ${
//                   isActive
//                     ? "bg-[#0098AF]/20 text-[#0098AF] font-semibold"
//                     : "hover:bg-[#0098AF]/10"
//                 }`}
//               >
//                 {/* Reduced p-3 to p-2 for slimmer items */}
//                 {service.icon}
//                 <span className="ml-2">{service.title}</span>{" "}
//                 {/* Reduced ml-3 to ml-2 */}
//               </div>
//             </Link>
//           );
//         })}{" "}
//       </div>
//     </div>
//   );
// }
