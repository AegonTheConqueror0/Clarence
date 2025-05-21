"use client";
import { useEffect, useState } from "react";
import { HeroParallaxDemo } from "./hero";
import { StickyScrollRevealDemo } from "./experiences";
import { TimelineDemo } from "./timeline";
import { LampDemo } from "./lamp";
import { LinkPreviewDemo } from "./link-preview";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LampDemo />;
  }

  return (
    <>
      <HeroParallaxDemo />
      <StickyScrollRevealDemo />
      <TimelineDemo />
      <LinkPreviewDemo />
    </>
  );
}
