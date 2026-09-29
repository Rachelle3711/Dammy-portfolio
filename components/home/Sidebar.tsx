"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Copy } from "lucide-react";

const navLinks = [
  { label: "Introduction", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Playground", href: "/playground" },
  { label: "About me", href: "/about" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1fl6nU1uDG1S7r6uCkJC6qtfctmtzVSN0/view",
    external: true,
  },
  { label: "Testimonials", href: "/testimonials" },
  {
    label: "Reach out",
    href: "https://www.linkedin.com/in/damilola-dammy-o-557b10113/overlay/contact-info/",
    external: true,
  },
];

const EMAIL = "olayiwoladamilola7@gmail.com";

export default function Sidebar() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
      <aside className="w-full md:w-56 shrink-0 px-6 md:px-10 py-10 md:py-24 font-mono tracking-[-0.04em] leading-[1.03] text-sm">
      <nav className="flex flex-col gap-5">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return link.external ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-2 transition-colors ${
                isActive ? "text-white font-medium" : "text-neutral-400 hover:text-white"
              }`}
            >
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
              {link.label}
            </Link>
          );
        })}

        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 text-accent font-semibold hover:opacity-80 transition-opacity"
          >
            {copied ? "Copied!" : "Copy my email"}
           <Copy size={16} className="shrink-0" />
          </button>
        </div>
          
          <div className="flex w-fit self-start items-center -space-x-2 rounded-[15px] border border-white/8 bg-white/2 px-5 py-2.5">
      <img
        src="/images/icons/icon-side-1.png"
        alt=""
        className="h-11 w-11 rounded-full"
      />
      <img
        src="/images/icons/icon-side-2.png"
        alt=""
        className="h-11 w-11 rounded-full"
      />
        </div>
      </nav>
    </aside>
  );
}
