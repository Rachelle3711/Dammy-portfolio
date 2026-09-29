"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cyclingWords = [
  { prefix: "about", highlight: "Dammy", accent: true },
  { prefix: "than", highlight: "Design", accent: false },
];

export default function HeroIntro() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 1800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, []);
  const { prefix, highlight, accent } = cyclingWords[index];
  return (
    <div>
      {/* Static top line */}
      <p className="text-neutral-500 text-sm md:text-base mb-1 font-mono tracking-wide">
        THIS IS
      </p>

      <div className="h-14 md:h-20 flex items-center overflow-hidden">
        <h1 className="font-display text-3xl md:text-6xl font-medium leading-none flex items-center whitepsace-nowrap">
          <span className="text-neutral-400 mr-2">More </span>

          <span
            className="relative inline-block h-[1.1em]"
            style={{ perspective: 400 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={prefix + highlight}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="block origin-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {accent ? (
                  <span className="text-accent">
                    {prefix} {highlight}
                  </span>
                ) : (
                  <>
                    <span className="text-neutral-400">{prefix} </span>
                    <span className="text-white">{highlight}</span>
                  </>
                )}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </div>
    </div>
  );
}
