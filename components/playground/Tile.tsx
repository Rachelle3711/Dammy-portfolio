
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TileProps = {
  src?: string;
  alt: string;
  label?: string; 
  width: number; 
  height: number; 
};

export default function Tile({ src, alt, label, width, height }: TileProps) {
  const fluidWidth = `clamp(140px, 45vw, ${width}px)`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      style={{
        width: fluidWidth,
        aspectRatio: `${width} / ${height}`,
        flex: `1 1 ${fluidWidth}`,
      }}
      className="relative overflow-hidden bg-neutral-900 rounded-md"
    >
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-end p-4 bg-linear-to-br from-neutral-800 to-neutral-900 border border-neutral-700/60">
          <span className="text-xs tracking-wide text-neutral-500">
            {label ?? alt}
          </span>
        </div>
      )}
    </motion.div>
  );
}

