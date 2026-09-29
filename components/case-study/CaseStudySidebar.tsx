"use client";

import { useEffect, useState } from "react";
import type { ProjectSection, Project } from "@/data/projects";

export default function CaseStudySidebar({
  sections,
  nextProject,
}: {
  sections: ProjectSection[];
  nextProject: Project;
}) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="hidden lg:flex flex-col sticky top-24 h-[calc(100vh-8rem)] w-65 shrink-0">
      <nav className="space-y-2.5">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`flex items-center gap-2 text-sm font-mono transition-all duration-300 ${
                isActive
                  ? "text-white font-semibold translate-x-0.5"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0 transition-all duration-300 ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
              {s.label}
            </a>
          );
        })}
      </nav>

      <div>
        <p className="text-[10px] font-mono tracking-wide text-neutral-500 pt-7 mb-2">
          NEXT
        </p>
        <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-5">
          <div className="relative h-20 rounded overflow-y-auto bg-neutral-800 mb-2">
            <img
              src={nextProject.cover}
              alt={nextProject.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <p className="text-xs font-mono text-neutral-300 mb-1">
            {nextProject.title}
          </p>
          <a
            href={`/work/${nextProject.slug}`}
            className="text-[10px] text-orange-500 underline underline-offset-2"
          >
            SEE CASE STUDY →
          </a>
        </div>
      </div>
    </aside>
  );
}
