import React from "react";
import { Timeline } from "@/components/ui/timelines";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: "Crisis Response System: Web-Based Emergency Response",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built a web-based emergency response system that allows users to report emergencies and receive help.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-20 md:h-44 lg:h-60 w-full">
              <Image
                src="/cr4.png"
                alt="startup template"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full">
              <Image
                src="/cr1.png"
                alt="startup template"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full">
              <Image
                src="/cr2.png"
                alt="startup template"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full">
              <Image
                src="/cr3.png"
                alt="startup template"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "LAND PAYMENT MANAGEMENT SYSTEM AMONG BALAI DABAWENYO, INC.",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Adopting digital records management solutions is essential for improving office operations and streamlining processes.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Created a web-based system that allows users to manage land payments and records.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-20 md:h-44 lg:h-60 w-full">
              <Image
                src="/ab1.png"
                alt="Land Payment System Interface"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full">
              <Image
                src="/ab2.png"
                alt="Land Payment System Features"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full">
              <Image
                src="/ab3.png"
                alt="Land Payment System Dashboard"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full">
              <Image
                src="/ab4.png"
                alt="Land Payment System Records"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Diabeticare Android App",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Diabeticare aims to address this gap by providing a comprehensive platform or system that supports continuous monitoring, offers tailored health tips, tracks medication, and encourages healthy lifestyle habits ultimately improving the quality of life for people living with diabetes.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Best Capstone Research Award in Technofair 2025
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-20 md:h-44 lg:h-60 w-full">
              <Image
                src="/db1.png"
                alt="Diabeticare App Interface"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full">
              <Image
                src="/db2.png"
                alt="Diabeticare App Features"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full">
              <Image
                src="/db3.png"
                alt="Diabeticare App Dashboard"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative h-20 md:h-44 lg:h-60 w-full">
              <Image
                src="/db4.png"
                alt="Diabeticare App Monitoring"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}