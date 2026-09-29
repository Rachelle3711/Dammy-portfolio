import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import CaseStudySidebar from "@/components/case-study/CaseStudySidebar";
import RichText from "@/components/case-study/RichText";
import ScrollReveal from "@/components/ScrollReveal";

const label =
  "font-mono text-[10px] uppercase tracking-normal text-neutral-500 mb-2";
const h2 = "text-[15px] md:text-2xl font-medium text-white mb-4";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-7 py-4 bg-black/50 backdrop-blur-md border-b border-white/10">
        <Link
          href="/work"
          className="text-sm text-neutral-400 hover:text-white transition-colors"
        >
          ← Back
        </Link>
        <div className="flex items-center gap-6">
          <button className="text-sm text-neutral-300 hover:text-white transition-colors">
            Copy my email
          </button>
          <a
            href="https://www.linkedin.com/in/damilola-dammy-o-557b10113/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-accent text-black text-sm font-medium hover:opacity-90 transition"
          >
            Reach out
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-24 px-6 md:px-10 pb-24 pt-6">
        <CaseStudySidebar
          sections={project.sections ?? []}
          nextProject={next}
        />

        {/* Right: case study content */}
        <article className="max-w-3xl">
          <ScrollReveal immediate delay={200}>
            {project.metaLine && (
              <p className="font-mono text-xs uppercase tracking-wide text-neutral-500 mb-4">
                {project.metaLine}
              </p>
            )}
            {project.tagline && (
              <h1 className="text-xl md:text-2xl font-semibold mb-14">
                {project.tagline}
              </h1>
            )}
          </ScrollReveal>

          {project.sections?.map((section, i) => (
            <ScrollReveal
              key={section.id}
              immediate={i === 0}
              delay={i === 0 ? 400 : 0}
            >
              <section
                key={section.id}
                id={section.id}
                className="mb-16 scroll-mt-24"
              >
                <p className={label}>{section.label.toUpperCase()}</p>
                {section.heading && <h2 className={h2}>{section.heading}</h2>}

                {section.team ? (
                  <ul className="space-y-3">
                    {section.team.map((member, i) => (
                      <li key={i} className="text-white">
                        {member.name}{" "}
                        <span className="text-neutral-500">
                          — {member.role}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <RichText
                    body={section.body}
                    images={section.images}
                    altFallback={`${section.label} screenshot`}
                  />
                )}

                {section.subsections?.map((sub, i) => (
                  <div key={i} className="mt-10">
                    <h3 className="text-lg text-white font-medium mb-3">
                      {sub.heading}
                    </h3>
                    <RichText
                      body={sub.body}
                      images={sub.images}
                      altFallback={sub.heading}
                    />
                  </div>
                ))}
              </section>
            </ScrollReveal>
          ))}
        </article>
      </div>
    </main>
  );
}
