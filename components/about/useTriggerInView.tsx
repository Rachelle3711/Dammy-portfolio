
"use client";

import { useEffect, useState } from "react";

export function useTriggerInView(targetId: string, once = false) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let raf: number;

    const tryAttach = () => {
      const el = document.getElementById(targetId);
      if (!el) {
        raf = requestAnimationFrame(tryAttach);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(true);
            if (once) observer?.disconnect();
          } else if (!once) {
            setActive(false);
          }
        },
        { threshold: 0, rootMargin: "-35% 0px -35% 0px" },
      );
      observer.observe(el);
    };

    tryAttach();

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [targetId, once]);

  return active;
}