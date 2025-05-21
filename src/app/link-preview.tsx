"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export function LinkPreviewDemo() {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/kaaaksxoiiy",
      icon: <FaFacebook size={24} color="#3b82f6" />,
      className: "hover:text-blue-600",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/your-profile",
      icon: <FaLinkedin size={24} color="#2563eb" />,
      className: "hover:text-blue-700",
    },
    {
      name: "GitHub",
      url: "https://github.com/your-username",
      icon: <FaGithub size={24} color="#e5e7eb" />,
      className: "hover:text-white",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: <FaEnvelope size={24} color="#ef4444" />,
      className: "hover:text-red-600",
    },
  ];

  return (
    <footer className="w-full py-12 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-8"
        >
          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-2">Connect With Me</h2>
          <p className="text-gray-400 text-center max-w-2xl">
            Feel free to reach out through any of these platforms. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LinkPreview
                  url={link.url}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${link.className} bg-white/10 hover:bg-white/20`}
                >
                  {link.icon}
                  <span className="text-white">{link.name}</span>
                </LinkPreview>
              </motion.div>
            ))}
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Clarence James lorejo. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}