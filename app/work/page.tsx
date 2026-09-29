"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, type Project, type ProjectCategory } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";

const FILTERS: ProjectCategory[] = ["Product Design", "Brand Design", "Strategy"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | null>(null);

  const filteredProjects = activeFilter
    ? projects.filter((p) => p.categories.includes(activeFilter))
    : projects;

  return (
    <main className="px-6 md:px-10 pt-16 pb-24">
      <ScrollReveal immediate delay={200}>
      <p className="font-mono text-xs uppercase tracking-wide text-neutral-500 mb-10">
        Case Studies
      </p>
      <div className="flex flex-wrap gap-9 mb-12">
        <button
          onClick={() => setActiveFilter(null)}
          className={`px-4 py-1.5 rounded-full text-sm border transition ${
            activeFilter === null
              ? "bg-accent text-black border-accent"
              : "border-neutral-700 text-neutral-400 hover:border-accent hover:text-white"
          }`}
        >
          All
        </button>
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 rounded-full text-sm border transition ${
              activeFilter === filter
                ? "bg-accent text-black border-accent"
                : "border-neutral-700 text-neutral-400 hover:border-accent hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
     </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
  {filteredProjects.map((project, i) => (
    <ScrollReveal
      key={project.slug}
      immediate={i < 6}
      delay={i < 6 ? 400 + (i % 2) * 120 : (i % 2) * 120}
    >
      <ProjectRow project={project} />
    </ScrollReveal>
  ))}
</div>
   
      {filteredProjects.length === 0 && (
        <p className="text-neutral-500 text-sm mt-10">
          No projects in this category yet.
        </p>
      )}
    </main>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const isAur = project.status === "aur";
  const href = `/work/${project.slug}`;
 

  const rowContent = (
    <div
      className={`py-6 border-b border-neutral-800 transition ${
        isAur ? "opacity-50" : "hover:opacity-70"
      }`}
    >
      <div className="flex items-center gap-2 text-sm text-neutral-400 mb-2">
        <span>{project.client}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span>{project.year}</span>
        {project.status === "wip" && (
          <span className="text-accent text-xs">WIP</span>
        )}
      </div>
      <h3 className="text-lg md:text-xl text-white">{project.title}</h3>
      {isAur && (
        <span className="inline-block mt-1 text-xs font-medium text-accent">
          Request access →
        </span>
      )}
    </div>
  );

  if (isAur) {
    return (
      <a
        href="https://www.linkedin.com/in/damilola-dammy-o-557b10113/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {rowContent}
      </a>
    );
  }

  return <Link href={href}>{rowContent}</Link>;
}

