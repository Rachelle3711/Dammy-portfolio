"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy } from "lucide-react";

const images = [
  {
    src: "/images/splash1.png",
    className: "top-[10%] left-[4%] w-50 rotate-[-4deg]",
    from: { x: -300, y: -100 },
  },
  {
    src: "/images/splash2.png",
    className: "top-[5%] left-[25%] w-45",
    from: { x: 0, y: -300 },
  },
  {
    src: "/images/splash3.png",
    className: "top-[5%] right-[4%] w-55 rotate-[2deg]",
    from: { x: 300, y: -100 },
  },
  {
    src: "/images/splash5.png",
    className: "top-[10%] left-[57%] w-45",
    from: { x: 250, y: -50 },
  },
  {
    src: "/images/splash6.png",
    className: "top-[60%] left-[20%] w-40 rotate-[-2deg]",
    from: { x: 0, y: 200 },
  },
  {
    src: "/images/splash7.png",
    className: "top-[58%] left-[5%] w-40",
    from: { x: -300, y: 200 },
  },
  {
    src: "/images/splash8.png",
    className: "top-[60%] left-[60%] w-40",
    from: { x: 250, y: 200 },
  },
  {
    src: "/images/splash9.png",
    className: "top-[65%] right-[5%] w-40 rotate-[3deg]",
    from: { x: 300, y: 300 },
  },
];

const tagline = "More Than Design";
export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-100 bg-black overflow-hidden"
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          }}
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              className={`absolute rounded-md overflow-hidden shadow-2xl ${img.className}`}
              initial={{
                opacity: 0,
                scale: 0.7,
                x: img.from.x,
                y: img.from.y,
                rotate: -15,
              }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
              transition={{
                duration: 0.9,
                delay: i * 0.1,
                type: "spring",
                stiffness: 90,
                damping: 12,
              }}
            >
    
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="font-mono text-s tracking-[-0.04em] uppercase text-neutral-500 mb-3 text-center"
            >
              This is
            </motion.p>
            <h1 className="font-display text-3xl md:text-5xl font-medium flex flex-wrap justify-center gap-x-3">
              {tagline.split(" ").map((word, i) => (
                <motion.span
                  key={word + i}
                  initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: 1 + i * 0.12,
                    ease: "easeOut",
                  }}
                  className={
                    word === "More" ? "text-neutral-400" : "text-white"
                  }
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>
          <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-2">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
              className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-2"
            >
              <p className="font-mono text-xs tracking-[-0.04em] uppercase text-neutral-500">
                Do you like what you see ?
              </p>
              <button
                onClick={() =>
                  navigator.clipboard?.writeText("olayiwoladamilola7@gmail.com")
                }
                className="flex items-center gap-2 text-accent underline underline-offset-4 text-sm"
              >
                Copy my email
                <Copy size={14} />
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
