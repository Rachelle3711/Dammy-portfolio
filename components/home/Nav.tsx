"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import OverlayMenu from "./OverlayMenu";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 md:px-10 py-6 relative z-50">
        <Link href="/" aria-label="Home">
          <img
            src="/images/icons/logo.png"
            alt="Dammy 2026 Portfolio"
            className="h-10 w-auto"
          />
        </Link>

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </header>

      <OverlayMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
