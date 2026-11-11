"use client";

import { motion } from "framer-motion";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, y = 26, className = "" }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  className = ""
}: SectionHeadingProps) {
  return (
    <FadeIn className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow ${light ? "text-primary" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 font-heading text-3xl font-extrabold uppercase leading-[1.04] tracking-tight sm:text-4xl lg:text-[2.9rem] ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <div className={`momentum-line mt-6 ${align === "center" ? "mx-auto max-w-xs" : ""}`} />
      {intro && (
        <p
          className={`mt-6 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      )}
    </FadeIn>
  );
}

