"use client";

const tiles = [
  { top: "8%", left: "4%", w: 150, h: 190, rotate: -4 },
  { top: "2%", left: "62%", w: 150, h: 190, rotate: 3 },
  { top: "32%", left: "0%", w: 170, h: 210, rotate: -2 },
  { top: "40%", left: "20%", w: 190, h: 150, rotate: 2 },
  { top: "18%", left: "36%", w: 210, h: 130, rotate: 0 },
  { top: "58%", left: "6%", w: 160, h: 200, rotate: 4 },
  { top: "10%", left: "80%", w: 150, h: 190, rotate: -3 },
  { top: "45%", left: "78%", w: 170, h: 130, rotate: 2 },
  { top: "68%", left: "58%", w: 150, h: 190, rotate: -2 },
];

export default function SplashCollage() {
  return (
    <section className="relative overflow-hidden bg-black min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
      {/* Scattered tiles */}
      <div className="absolute inset-0 hidden md:block">
        {tiles.map((tile, i) => (
          <div
            key={i}
            className="absolute rounded-xl bg-neutral-800/70 border border-neutral-700/50"
            style={{
              top: tile.top,
              left: tile.left,
              width: tile.w,
              height: tile.h,
              transform: `rotate(${tile.rotate}deg)`,
            }}
          />
        ))}
      </div>

      {/* Headline */}
      <div className="relative z-10">
        <p className="text-xs tracking-wide text-neutral-500 mb-3">THIS IS</p>
        <h1 className="text-4xl md:text-7xl font-medium text-white">
          <span className="text-neutral-500">More</span> than Design
        </h1>
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-20">
        <p className="text-xs tracking-wide text-neutral-500 mb-2">
          DO YOU LIKE WHAT YOU SEE ?
        </p>
        <button
          type="button"
          onClick={() => navigator.clipboard?.writeText("hello@dammy.design")}
          className="flex items-center gap-2 mx-auto text-orange-500 underline underline-offset-4 text-sm"
        >
          Copy my email
          <span aria-hidden>⧉</span>
        </button>
      </div>
    </section>
  );
}
