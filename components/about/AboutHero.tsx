"use client";

import Link from "next/link";

const photos = [
  { src: " /images/about-dampic1.png", alt: "Dammy portrait" },
  { src: undefined, alt: "photo placeholder 2" },
  { src: "/images/about-dampic2.png", alt: "Dammy mirror selfie" }, // real
  { src: undefined, alt: "photo placeholder 4" },
  { src: undefined, alt: "photo placeholder 5" },
];

export default function AboutHero() {
  return (
    <div className="bg-black text-white px-6 md:px-10 pt-8">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs tracking-wide text-neutral-300 hover:text-white transition-colors"
        >
          <span aria-hidden>←</span> BACK
        </Link>

        <div className="flex items-center gap-8">
          <button
            type="button"
            className="flex items-center gap-2 text-sm underline underline-offset-4 text-neutral-200 hover:text-white transition-colors"
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

     
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pt-14 pb-10">
        <h1 className="text-3xl md:text-5xl leading-tight max-w-2xl font-medium">
          Building <span className="text-neutral-500">at the</span> edge{" "}
          <span className="text-neutral-500">of</span> clarity,
          <br />
          <span className="text-orange-500">craft</span>
          <span className="text-neutral-500">,</span>{" "}
          <span className="text-neutral-500">and</span>{" "}
          <span className="text-orange-500">real impact</span>.
        </h1>

        <div>
          <p className="text-xs tracking-wide text-neutral-500 mb-2">
            REACH OUT
          </p>
          <div className="flex gap-8 text-sm">
            <Link
              href="https://www.linkedin.com/in/damilola-dammy-o-557b10113/"
              className="underline underline-offset-4 text-neutral-200 hover:text-white"
            >
              Linkedin
            </Link>
            <Link
              href="https://x.com/Olu_cook"
              className="underline underline-offset-4 text-neutral-200 hover:text-white"
            >
              Twitter
            </Link>
            <Link
              href="mailto:hello@dammy.design"
              className="underline underline-offset-4 text-neutral-200 hover:text-white"
            >
              Email
            </Link>
          </div>
        </div>
      </div>

      {/* Photo strip */}
      <div className="flex gap-4 overflow-x-auto pb-14 -mx-6 px-6 md:mx-0 md:px-0">
        {photos.map((photo, i) =>
          photo.src ? (
            <div
              key={i}
              className="shrink-0 w-55 h-75 rounded-xl overflow-hidden"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div
              key={i}
              className="shrink-0 w-55 h-75 rounded-xl bg-neutral-600"
            />
          ),
        )}
      </div>
    </div>
  );
}
