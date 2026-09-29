"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";


const links = [
  { label: "My Playground", href: "/playground" },
  { label: "Folio 2023", href: "https://example.com/folio-2023" },
  { label: "Folio 2021", href: "https://example.com/folio-2021" },
  { label: "Brandfolio 2021", href: "https://example.com/brandfolio-2021" },
];

export default function OverlayMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-2"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="flex gap-2 mt-4 font-mono text-xs tracking-wide text-neutral-500 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => navigator.clipboard?.writeText("hello@dammy.design")}
            className="mt-4 text-accent underline underline-offset-4 text-sm"
          >
            Copy my email
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
