"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

function useScrollStarted() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Reloaded mid-page or arrived via a #link: already scrolled.
    if (window.scrollY > 8) {
      setStarted(true);
      return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    const start = () => setStarted(true);
    const onScroll = () => {
      if (window.scrollY > 8) start();
    };
    const checkShortPage = () => {
      const canScroll =
        document.documentElement.scrollHeight > window.innerHeight + 16;
      if (!canScroll) timer = setTimeout(start, 800);
    };

    if (document.readyState === "complete") checkShortPage();
    else window.addEventListener("load", checkShortPage, { once: true });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", start, { passive: true, once: true });
    window.addEventListener("touchmove", start, { passive: true, once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", checkShortPage);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", start);
      window.removeEventListener("touchmove", start);
    };
  }, []);

  return started;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number; 
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: "some",
    margin: "0px 0px -20% 0px",
  });
  const started = useScrollStarted();

  if (reduce) return <div className={className}>{children}</div>;

  const show = immediate || (inView && started);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 64, filter: "blur(8px)" }}
      animate={show ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 64, filter: "blur(8px)" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}