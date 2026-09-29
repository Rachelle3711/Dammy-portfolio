"use client";

import { motion } from "framer-motion";

type ParallaxRowProps = {
  children: React.ReactNode;
  distance?: number;
  className?: string;
};

export default function ParallaxRow({
  children,
  distance = 40,
  className = "",
}: ParallaxRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: distance }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className={`flex w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
