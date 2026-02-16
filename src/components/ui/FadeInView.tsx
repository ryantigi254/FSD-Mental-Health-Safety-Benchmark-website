"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const directionVariants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "none";
  className?: string;
}

export default function FadeInView({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInViewProps) {
  return (
    <motion.div
      variants={directionVariants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
