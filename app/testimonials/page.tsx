import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import  ScrollReveal from "@/components/ScrollReveal";

const rotations = [-1.5, 1, -0.75, 1.5, -1, 0.75];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialsPage(){
  return (
    <main className="bg-black min-h-screen px-6 md:px-10 pt-8 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
          <Link href="/work" className="text-sm text-neutral-400 hover:text-white transition-colors">
            ← Back
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
        
        <h1 className="text-3xl md:text-5xl text-white font-medium leading-tight pt-16 pb-16 max-w-2xl">
          Words From <span className="text-orange-500">People</span> I&rsquo;ve
          Had the <span className="text-orange-500">Joy of Creating With</span>
        </h1>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
          {testimonials.map((t, i) => (
           <ScrollReveal key={`${t.name}-${i}`} delay={(i % 6) * 80}>
           <div
              className="break-inside-avoid mb-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 transition-transform duration-200 hover:rotate-0"
              style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
            >
              {t.quote ? (
                <p className="text-neutral-300 leading-relaxed">{t.quote}</p>
              ) : (
                <p className="text-neutral-600 italic leading-relaxed">
                  Quote pending — reach out to confirm.
                </p>
              )}

              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-neutral-800">
                <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-black text-xs font-semibold shrink-0">
                  {initials(t.name)}
                </div>
                <p className="text-xs text-white">
                  {t.name}{" "}
                  <span className="text-neutral-500">
                    &mdash; {t.role}, {t.company}
                  </span>
                </p>
              </div>
            </div>
             </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}