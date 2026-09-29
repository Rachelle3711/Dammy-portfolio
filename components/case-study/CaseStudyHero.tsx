"use client";

import Link from "next/link";

export default function CaseStudyHero() {
  return (
    <div>
      {/* Top bar */}
      <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs tracking-wide text-neutral-300 hover:text-white transition-colors"
        >
          <span aria-hidden>←</span> BACK
        </Link>
        <div className="flex items-center gap-8">
          <button
            type="button"
            className="text-sm underline underline-offset-4 text-neutral-200 hover:text-white transition-colors"
            onClick={() => navigator.clipboard?.writeText("hello@dammy.design")}
          >
            Copy my email
          </button>
          <Link
            href="/contact"
            className="rounded-full bg-orange-500 hover:bg-orange-400 transition-colors text-black text-sm font-medium px-5 py-2"
          >
            Let&rsquo;s Chat
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between pt-8 pb-4">
        <p className="text-[10px] tracking-wide text-neutral-500">
          RENMONEY MICROFINANCE BANK &mdash; 2024
        </p>
        <a
          href="https://renmoney.com"
          className="text-xs text-orange-500 underline underline-offset-4"
        >
          Go to Website
        </a>
      </div>
      <h1 className="text-3xl md:text-4xl text-white font-medium pb-8">
        Loan flow Optimization
      </h1>

      
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-neutral-800 via-neutral-900 to-black border border-neutral-800 p-10 min-h-70 flex items-center mb-16">
        <h2 className="text-3xl md:text-4xl text-white font-medium max-w-xs">
          Easy and Seamless Finance
        </h2>
        <div className="absolute right-8 bottom-0 top-8 w-1/2 hidden md:flex items-end justify-center gap-3">
          <div className="w-24 h-48 rounded-xl bg-neutral-700/60" />
          <div className="w-28 h-56 rounded-xl bg-blue-900/40" />
        </div>
      </div>
    </div>
  );
}
