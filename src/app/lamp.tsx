"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { useRouter } from "next/navigation";

export function LampDemo() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 5 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          router.push('/'); // Redirect to main page
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950 dark:bg-neutral-950 transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-950 via-neutral-900 to-neutral-950 opacity-50" />
      <div className="relative h-full flex flex-col justify-between">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            My Portfolio <br /> 
          </motion.h1>
        </LampContainer>
        
        <div className="w-full px-4 pb-8 md:pb-12">
          <div className="max-w-md mx-auto">
            <div className="h-2 bg-neutral-800/50 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-slate-300 to-slate-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-center mt-4 text-slate-400">
              {Math.round(progress)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}