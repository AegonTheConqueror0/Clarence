"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion } from "framer-motion";

const content = [
  {
    title: "WordPress Certificate",
    description:
      "Certified in building and managing websites with WordPress, including themes, plugins, and site optimization.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full rounded-lg overflow-hidden shadow-2xl"
        >
          <Image
            src="/cert.png"
            alt="WordPress Certificate"
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Canva to Design Digital Course",
    description:
      "Skilled in using Canva to design engaging digital course materials and visual content.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full rounded-lg overflow-hidden shadow-2xl"
        >
          <Image
            src="/cert1.png"
            alt="Canva Certificate"
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: "CET Technofair Champion",
    description:
      "Certification for being the Best Capstone Project in CET Technofair 2025.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full rounded-lg overflow-hidden shadow-2xl"
        >
          <Image
            src="/cert2.png"
            alt="Technofair Certificate"
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Additional Certification",
    description:
      "More certifications and achievements to be added soon.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full rounded-lg overflow-hidden shadow-2xl"
        >
          <Image
            src="/cert1.png"
            alt="Certificate"
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <section className="w-full py-20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Certifications & Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my professional certifications and notable achievements
          </p>
        </motion.div>
        <div className="w-full">
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  );
}