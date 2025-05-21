"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "WordPress Certificate",
    description:
      "Certified in building and managing websites with WordPress, including themes, plugins, and site optimization.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/cert.png"
          width={300}
          height={300}
          className="h-full w-full object-fill object-center"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Canva to Design Digital Course",
    description:
      "Skilled in using Canva to design engaging digital course materials and visual content.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/cert1.png"
          width={300}
          height={300}
          className="h-full w-full object-fill object-center"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "CET Technofair Champion",
    description:
      "Certification for being the Best Capstone Project in CET Technofair 2025.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/cert2.png"
          width={300}
          height={300}
          className="h-full w-full object-fill object-center"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "",
    description:
      "",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/cert1.png"
          width={300}
          height={300}
          className="h-full w-full object-fill object-center"
          alt="linear board demo"
        />
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