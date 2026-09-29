import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { PenTool, Paintbrush, Zap } from "lucide-react";

const shortcuts = [
  {
    label: "Product Design",
    href: "/work?filter=product-design",
    Icon: PenTool,
  },
  {
    label: "Brand Design",
    href: "/work?filter=brand-design",
    Icon: Paintbrush,
  },
  { label: "Strategy", href: "/work?filter=strategy", Icon: Zap },
];

const tags = ["Independent Contributor", "Leading Teams/Projects"];

export default function HomePage() {
  return (
    <main className="pb-24">
      <ScrollReveal immediate delay={300}>
      <section className="px-6 md:px-10 pt-0 md:pt-20">
        <p className="font-sans font-light text-xl md:text-2xl leading-[1.4] tracking-[0.01em] text-left">
          <span className="text-accent">I&apos;m Dammy</span>, a product
          designer, systems thinker, and design leader crafting intuitive,
          scalable digital experiences across fintech, tech infrastructures and
          emerging markets
        </p>

        <p className="font-sans font-light text-neutral-400 text-base md:text-lg leading-[1.4] tracking-[0.01em] mt-5 text-left">
          I merge strategy, structure, and storytelling to build products that
          move people and drive results. With over 6 years of experience, I
          design with precision, lead with clarity, and always advocate for work
          that&apos;s as meaningful as it is measurable. I am comfortable
          working as an Independent Contributor & Leading Teams/Projects.
          </p>

        <div className="mt-12">
          <p className="font-mono text-sm tracking-wide text-neutral-500 mb-5">
            SHORTCUTS
          </p>

          <div className="flex flex-col gap-y-5 md:flex-row md:flex-wrap md:gap-x-30 md:gap-y-6">
            {shortcuts.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-3 md:gap-2 text-neutral-400 md:text-accent font-mono tracking-[-0.04em] leading-[1.03] text-sm md:text-base hover:opacity-80"
              >
                <Icon size={16} className="text-accent" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>
    </main>
  );
}
