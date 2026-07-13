"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const FaqGif = '/images/faq-gif-unscreen.gif';
const FaqStatic = '/images/faq-image.webp';

const FaqButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div className="fixed right-3 bottom-6 z-[1100] hidden md:block">
      <button
        onClick={() => router.push("/faq")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Go to FAQ"
        title="Frequently Asked Questions"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 hover:scale-110 transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-[#0098AF]"
      >
        <Image
          src={isHovered ? FaqGif : FaqStatic}
          alt="FAQ"
          width={48}
          height={48}
          className="object-contain"
          priority
        />
      </button>
    </div>
  );
};

export default FaqButton;
