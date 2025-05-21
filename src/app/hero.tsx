"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Portfolio 1",
    link: "#portfolio1",
    thumbnail: "/dia2.png",
  },
  {
    title: "Portfolio 2",
    link: "#portfolio2",
    thumbnail: "/dia1.png",
  },
  {
    title: "Portfolio 3",
    link: "#portfolio3",
    thumbnail: "/portfolio.png",
  },
  {
    title: "Portfolio 4",
    link: "#portfolio4",
    thumbnail: "/dia.png",
  },
  {
    title: "Portfolio 5",
    link: "#portfolio5",
    thumbnail: "/portfolio.png",
  },
  {
    title: "Portfolio 6",
    link: "#portfolio6",
    thumbnail: "/portfolio4.png",
  },
  {
    title: "Portfolio 7",
    link: "#portfolio7",
    thumbnail: "/portfolio2.png",
  },
  {
    title: "Portfolio 8",
    link: "#portfolio8",
    thumbnail: "/portfolio3.png",
  },
  {
    title: "Portfolio 9",
    link: "#portfolio9",
    thumbnail: "/portfolio4.png",
  },
  {
    title: "Portfolio 10",
    link: "#portfolio10",
    thumbnail: "/portfolio5.png",
  },
  {
    title: "Portfolio 11",
    link: "#portfolio11",
    thumbnail: "/portfolio6.png",
  },
  {
    title: "Portfolio 12",
    link: "#portfolio12",
    thumbnail: "/portfolio7.png",
  }
];
