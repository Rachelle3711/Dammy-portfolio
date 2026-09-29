
"use client";

import SectionLabel from "./SectionLabel";

const companies = [
  { src: "/images/inter1.png", alt: "Interswitch" },
  { src: "/images/verve2.png", alt: "Verve" },
  { src: "/images/centri3.png", alt: "Centric" },
  { src: "/images/Renny4.png", alt: "Renmoney" },
  { src: "/images/press5.png", alt: "PressOne" },
  { src: "/images/start6.png", alt: "Startbutton" },
  { src: "/images/sendchamp.png", alt: "Sendchamp" },
  { src: "/images/Chimoney8.png", alt: "Chimoney" },
];

export default function CompanyMarquee() {
  const loop = [...companies, ...companies];

  return (
    <section>
      <SectionLabel>COMPANIES I HAVE WORKED AT</SectionLabel>
      <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex items-center gap-10 pr-10 w-max animate-marquee motion-reduce:animate-none">
          {loop.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={i < companies.length ? logo.alt : ""}
              aria-hidden={i >= companies.length}
              className="shrink-0 h-8 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}