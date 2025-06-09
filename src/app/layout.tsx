"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconBriefcase, IconTimeline, IconLink } from "@tabler/icons-react";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
};

const navigationItems = [
  {
    title: "Home",
    icon: <IconHome className="h-5 w-5" />,
    href: "#home",
    onClick: () => smoothScrollTo("home")
  },
  {
    title: "Experience",
    icon: <IconBriefcase className="h-5 w-5" />,
    href: "#experience",
    onClick: () => smoothScrollTo("experience")
  },
  {
    title: "Projects",
    icon: <IconTimeline className="h-5 w-5" />,
    href: "#projects",
    onClick: () => smoothScrollTo("projects")
  },
  {
    title: "Contact",
    icon: <IconLink className="h-5 w-5" />,
    href: "#contact",
    onClick: () => smoothScrollTo("contact")
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Clarence James Lorejo - Portfolio</title>
        <meta name="description" content="Portfolio of Clarence James Lorejo - IT Student and Developer" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Force dark mode
              if (document.documentElement.classList.contains('dark') === false) {
                document.documentElement.classList.add('dark');
              }
              // Prevent light mode
              const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                  if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (!document.documentElement.classList.contains('dark')) {
                      document.documentElement.classList.add('dark');
                    }
                  }
                });
              });
              observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class']
              });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
        
        {/* Global CV Button - Visible on all pages */}
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="/clarence-lorejo.pdf"
            download="Clarence_James_Lorejo_Resume.pdf"
            className="inline-flex items-center px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 border-2 border-blue-500 rounded-full shadow-2xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/25"
          >
            📄 My CV
          </a>
        </motion.div>

        {/* Floating Navigation Dock */}
        <motion.div 
          className="fixed bottom-24 right-6 z-40 md:bottom-6 md:left-1/2 md:transform md:-translate-x-1/2 md:right-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FloatingDock 
            items={navigationItems}
            desktopClassName="shadow-lg border border-gray-200 dark:border-neutral-700"
            mobileClassName="shadow-lg border border-gray-200 dark:border-neutral-700"
          />
        </motion.div>
      </body>
    </html>
  );
}
