import Link from "next/link";
import { CaseStudy } from "@/data/case-study-types";

const label = "text-[10px] tracking-wide text-neutral-500 mb-4";
const h2 = "text-2xl md:text-3xl text-white font-medium mb-6";
const body = "text-neutral-300 leading-relaxed mb-5";

const sectionList = [
  { id: "context", label: "Context And Background" },
  { id: "problem", label: "Problem" },
  { id: "role", label: "By Role" },
  { id: "investigation", label: "Investigation & Insight" },
  { id: "solution", label: "Solution" },
  { id: "validation", label: "Validation & Results" },
  { id: "reflection", label: "Reflection / Learnings" },
  { id: "team", label: "Team Mentions" },
];

export default function CaseStudyTemplate({ cs }: { cs: CaseStudy }) {
  return (
    <main className="bg-black min-h-screen px-6 md:px-10 pt-8">
      <div className="max-w-6xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
          <Link href="/work" className="text-xs tracking-wide text-neutral-300 hover:text-white">
            ← BACK
          </Link>
          <div className="flex items-center gap-8">
            <button className="text-sm underline underline-offset-4 text-neutral-200 hover:text-white">
              Copy my email
            </button>
            <Link
              href="/contact"
              className="rounded-full bg-orange-500 hover:bg-orange-400 text-black text-sm font-medium px-5 py-2"
            >
              Let&rsquo;s Chat
            </Link>
          </div>
        </div>

        {/* Meta + title */}
        <div className="flex items-center justify-between pt-8 pb-4">
          <p className="text-[10px] tracking-wide text-neutral-500">
            {cs.client} &mdash; {cs.year}
          </p>
          {cs.websiteUrl && (
            <a href={cs.websiteUrl} className="text-xs text-orange-500 underline underline-offset-4">
              Go to Website
            </a>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl text-white font-medium pb-8">{cs.title}</h1>

        {/* Hero banner */}
        <div className="rounded-2xl bg-linear-to-br from-neutral-800 via-neutral-900 to-black border border-neutral-800 p-10 min-h-55 flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white font-medium max-w-xs">
            {cs.heroHeadline}
          </h2>
        </div>

        <div className="flex gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:block sticky top-24 h-fit w-55 shrink-0 space-y-3">
            {sectionList.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-700 shrink-0" />
                {s.label}
              </a>
            ))}
          </aside>

          {/* Content */}
          <div className="max-w-2xl space-y-24 pb-24">
            <section id="context">
              <p className={label}>CONTEXT AND BACKGROUND</p>
              <p className={body}>{cs.context}</p>
            </section>

            <section id="problem">
              <p className={label}>PROBLEM</p>
              <h2 className={h2}>{cs.problemHeading}</h2>
              {cs.problemBody.map((p, i) => (
                <p key={i} className={body}>{p}</p>
              ))}

              {cs.funnelSteps && (
                <div className="space-y-2 my-8">
                  {cs.funnelSteps.map((step) => (
                    <div key={step.label} className="flex items-center gap-4">
                      <div
                        className="h-8 bg-orange-500 rounded-r flex items-center px-3"
                        style={{ width: `${step.value}%` }}
                      >
                        <span className="text-[10px] text-black font-medium">{step.value}%</span>
                      </div>
                      <span className="text-[10px] text-neutral-400">{step.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {!cs.funnelSteps && (
                <div className="rounded-lg bg-neutral-800 h-32 flex items-center justify-center text-xs text-neutral-500 my-8">
                  Stat/chart placeholder (e.g. donut chart) — confirm shape from Figma
                </div>
              )}
            </section>

            <section id="role">
              <p className={label}>BY ROLE</p>
              <p className="text-sm text-white tracking-wide">{cs.role.join("  |  ")}</p>
              {cs.roleBody.map((p, i) => (
                <p key={i} className={`${body} mt-4`}>{p}</p>
              ))}
            </section>

            <section id="investigation">
              <p className={label}>INVESTIGATION &amp; INSIGHT</p>
              <h2 className={h2}>{cs.investigationHeading}</h2>
              {cs.investigationBody.map((p, i) => (
                <p key={i} className={body}>{p}</p>
              ))}

              {cs.insightCards && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  {cs.insightCards.map((card, i) => (
                    <div key={i} className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
                      <p className="text-orange-500 mb-2">✱</p>
                      <p className="text-sm text-white font-medium mb-2">{card.title}</p>
                      <p className="text-xs text-neutral-500 leading-relaxed">{card.body}</p>
                    </div>
                  ))}
                </div>
              )}

              {!cs.insightCards && (
                <div className="rounded-lg bg-neutral-800 h-48 flex items-center justify-center text-xs text-neutral-500 my-8">
                  Diagram placeholder (e.g. user flow) — confirm shape from Figma
                </div>
              )}
            </section>

            <section id="solution">
              <p className={label}>SOLUTION</p>
              {cs.solutionBody?.map((p, i) => (
                <p key={i} className={body}>{p}</p>
              ))}

              {cs.solutionStats && (
                <div
                  className="grid gap-6 my-10"
                  style={{ gridTemplateColumns: `repeat(${cs.solutionStats.length}, minmax(0, 1fr))` }}
                >
                  {cs.solutionStats.map((stat, i) => (
                    <div key={i} className="border-t border-neutral-800 pt-4">
                      <p className="text-2xl text-white font-medium mb-1">{stat.value}</p>
                      <p className="text-xs text-neutral-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {cs.solutionSubsections && (
                <div className="space-y-10 my-8">
                  {cs.solutionSubsections.map((sub, i) => (
                    <div key={i}>
                      <div className="rounded-lg bg-neutral-800 h-40 flex items-center justify-center text-xs text-neutral-500 mb-4">
                        Banner image placeholder
                      </div>
                      <p className="text-white font-medium mb-2">
                        {i + 1}. {sub.heading}
                      </p>
                      <p className="text-sm text-neutral-400 leading-relaxed">{sub.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section id="validation">
              <p className={label}>VALIDATION &amp; RESULTS</p>
              <h2 className={h2}>{cs.validationHeading}</h2>
              {cs.validationBody.map((p, i) => (
                <p key={i} className={body}>{p}</p>
              ))}

              <div
                className="grid gap-6 my-10"
                style={{ gridTemplateColumns: `repeat(${cs.resultStats.length}, minmax(0, 1fr))` }}
              >
                {cs.resultStats.map((stat, i) => (
                  <div key={i} className="border-t border-neutral-800 pt-4">
                    <p className="text-3xl text-white font-medium mb-1">{stat.value}</p>
                    <p className="text-xs text-neutral-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              {cs.impactBullets && (
                <>
                  <p className="text-white font-medium mb-4">🚀 Business &amp; Product Impact</p>
                  <ul className="list-disc pl-5 space-y-2 mb-8">
                    {cs.impactBullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </>
              )}
              {cs.systemBullets && (
                <>
                  <p className="text-white font-medium mb-4">⚙️ Design &amp; System Innovation</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {cs.systemBullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </>
              )}
            </section>

            <section id="reflection">
              <p className={label}>{cs.reflectionHeading.toUpperCase()}</p>
              {cs.reflectionBody.map((p, i) => (
                <p key={i} className={body}>{p}</p>
              ))}
            </section>

            <section id="team">
              <p className={label}>TEAM MENTIONS</p>
              <ul className="space-y-1 text-sm">
                {cs.team.map((member, i) => (
                  <li key={i}>{member.name} &mdash; {member.role}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
