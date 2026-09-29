"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Introduction", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Playground", href: "/playground" },
  { label: "About me", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function MobileTabs() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Sections"
      className="md:hidden px-6 pt-8 pb-2 overflow-x-auto [scrollbar:none] [&::-webkit-scrollbar]:hidden"
    >
      <ul className="flex gap-8 w-max">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                className={`flex items-center gap-5 whitespace-nowrap font-mono text-sm transition-colors ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {isActive && (
                  <span className="h-1.5 w-2.5 rounded-full bg-orange-500 shrink-0" />
                )}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}