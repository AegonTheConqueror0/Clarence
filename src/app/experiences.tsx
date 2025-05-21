"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "WordPress Certificate",
    description:
      "Certified in building and managing websites with WordPress, including themes, plugins, and site optimization.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="relative h-full w-full">
          <Image
            src="/cert.png"
            alt="WordPress Certificate"
            fill
            className="object-fill object-center"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Canva to Design Digital Course",
    description:
      "Skilled in using Canva to design engaging digital course materials and visual content.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="relative h-full w-full">
          <Image
            src="/cert1.png"
            alt="Canva Certificate"
            fill
            className="object-fill object-center"
          />
        </div>
      </div>
    ),
  },
  {
    title: "CET Technofair Champion",
    description:
      "Certification for being the Best Capstone Project in CET Technofair 2025.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="relative h-full w-full">
          <Image
            src="/cert2.png"
            alt="Technofair Certificate"
            fill
            className="object-fill object-center"
          />
        </div>
      </div>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="relative h-full w-full">
          <Image
            src="/cert1.png"
            alt="Certificate"
            fill
            className="object-fill object-center"
          />
        </div>
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}