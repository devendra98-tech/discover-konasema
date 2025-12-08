"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "zoom";
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
    fade: { opacity: 0 },
    zoom: { scale: 0.9, opacity: 0 },
  };

  const animate = {
    y: direction === "up" ? 0 : direction === "down" ? 0 : undefined,
    x: direction === "left" ? 0 : direction === "right" ? 0 : undefined,
    scale: direction === "zoom" ? 1 : undefined,
    opacity: 1,
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? animate : variants[direction]}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

