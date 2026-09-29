import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

const sidebarLinks = [
  { label: "Introduction", href: "/", active: true },
  { label: "Projects", href: "/work" },
  { label: "Playground", href: "/playground" },
  { label: "About Me", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Let's Chat", href: "/contact" },
];

const topNavLinks = [
  { label: "My Playground", href: "/playground" },
  { label: "Folio 2023", href: "#" },
  { label: "Folio 2021", href: "#" },
  { label: "Brandfolio 2021", href: "#" },
];

export default function IntroSection() {
  return (
    <div className="bg-black text-white">
      {/* Top nav */}
      <header className="flex items-center justify-between px-5 md:px-10 py-6">
        <div className="h-8 w-16 rounded-full bg-orange-500" /> {/* logo placeholder */}
        <nav className="hidden md:flex gap-10 text-sm text-neutral-400">
          {topNavLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="text-white text-xl" aria-label="Menu">
          ☰
        </button>
      </header>
      <div className="border-b border-neutral-800" />

      <div className="flex flex-col md:flex-row gap-16 px-6 md:px-10 py-16">
        {/* Sidebar */}
        <aside className="w-50 shrink-0 space-y-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-2 text-sm ${
                link.active ? "text-white" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {link.active && <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />}
              {link.label}
            </Link>
          ))}

          <div className="pt-4 flex items-center gap-3">
            <button
              onClick={() => navigator.clipboard?.writeText("hello@dammy.design")}
              className="text-sm text-orange-500 underline underline-offset-4"
            >
              Copy my email
            </button>
            <div className="flex -space-x-2">
              <div className="h-6 w-6 rounded-full bg-orange-500 border border-black" />
              <div className="h-6 w-6 rounded-full bg-purple-400 border border-black" />
            </div>
          </div>
        </aside>

        <div className="max-w-2xl">
          <ScrollReveal immediate>
          <p className="text-xs md:text-xl tracking-tight leading-relaxed mt-4">
            <span className="text-orange-500">I&rsquo;m Dammy</span>, a
            product designer, systems thinker, and design leader crafting
            intuitive, scalable digital experiences across fintech, tech
            infrastructures, and emerging markets.
          </p>
            <p className="text-neutral-400 leading-relaxed mt-6">
            I merge strategy, structure, and storytelling to build products
            that move people and drive results. With over 6 years of
            experience, I design with precision, lead with clarity, and
            always advocate for work that&rsquo;s as meaningful as it is
            measurable. I am comfortable working as an{" "}
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300 mx-1">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Independent Contributor
            </span>{" "}
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300 mx-1">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Leading Teams/Projects
            </span>
          </p>

          <div className="mt-14">
            <p className="text-xs tracking-wide text-neutral-500 mb-4">
              SHORTCUTS
            </p>
            <div className="flex gap-8 text-xs text-neutral-300">
              <Link href="/work?filter=product-design" className="flex items-center gap-2 hover:text-white">
                ✎ Product Design
              </Link>
              <Link href="/work?filter=brand-design" className="flex items-center gap-2 hover:text-white">
                🎨 Brand Design
              </Link>
              <Link href="/work?filter=strategy" className="flex items-center gap-2 hover:text-white">
                ⚡ Strategy
              </Link>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
