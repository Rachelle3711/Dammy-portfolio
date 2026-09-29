import Tile from "./Tile";
import ScrollReveal from "../ScrollReveal";

const rows: { label: string; src?: string; w: number; h: number }[][] = [
  [
    {
      label: "hand holding phone, light bg",
      src: "/images/playground/Frame 1.png",
      w: 380,
      h: 320,
    },
    {
      label: "phone, dark lock-icon screen",
      src: "/images/playground/Frame 2.png",
      w: 380,
      h: 320,
    },
  ],
  [
    {
      label: "phone on rock/stone bg",
      src: "/images/playground/Frame 3.png",
      w: 260,
      h: 340,
    },
    {
      label: "phone on cream notebook bg",
      src: "/images/playground/Frame 4.png",
      w: 260,
      h: 340,
    },
    {
      label: "phone dark bg, orange nav icon",
      src: "/images/playground/Frame 5.png",
      w: 260,
      h: 340,
    },
  ],
  [
    {
      label: "phone on rock/stone bg",
      src: "/images/playground/Frame 6.png",
      w: 260,
      h: 340,
    },
    {
      label: "phone on cream notebook bg",
      src: "/images/playground/Frame 7.png",
      w: 260,
      h: 340,
    },
    {
      label: "phone dark bg, orange nav icon",
      src: "/images/playground/Frame 8.png",
      w: 260,
      h: 340,
    },
  ],
  [
    {
      label: "phone on rock/stone bg",
      src: "/images/playground/Frame 9.png",
      w: 260,
      h: 340,
    },
    {
      label: "phone on cream notebook bg",
      src: "/images/playground/Frame 10.png",
      w: 260,
      h: 340,
    },
    {
      label: "phone dark bg, orange nav icon",
      src: "/images/playground/Frame 11.png",
      w: 260,
      h: 340,
    },
  ],
  [
    {
      label: "green spray-can product shot",
      src: "/images/playground/Frame 12.png",
      w: 220,
      h: 300,
    },
    {
      label: "purple dashboard phone",
      src: "/images/playground/Frame 15.png",
      w: 220,
      h: 300,
    },
    {
      label: "blue 'ice' app phone",
      src: "/images/playground/Frame 14.png",
      w: 220,
      h: 300,
    },
    {
      label: "red plate of food",
      src: "/images/playground/Frame 17.png",
      w: 220,
      h: 300,
    },
  ],
  [
    {
      label: "purple banner, 5 stacked onboarding screens",
      src: "/images/playground/Frame 33.png",
      w: 900,
      h: 500,
    },
  ],

  [
    {
      label: "phone, dark blue dashboard w/ swirl logo",
      src: "/images/playground/Frame 13.png",
      w: 380,
      h: 340,
    },
    {
      label: "laptop, dark purple dashboard",
      src: "/images/playground/Frame 26.png",
      w: 380,
      h: 340,
    },
  ],
  [
    {
      label: "delivery rider, yellow uniform",
      src: "/images/playground/Frame 16.png",
      w: 300,
      h: 380,
    },
    {
      label: "orange apron, 'mama's' branding",
      src: "/images/playground/Frame 20.png",
      w: 300,
      h: 380,
    },
    {
      label: "red t-shirt",
      src: "/images/playground/Frame 19.png",
      w: 300,
      h: 380,
    },
  ],
  [
    {
      label: "green spray-can product shot (repeat)",
      src: "/images/playground/Frame 18.png",
      w: 220,
      h: 300,
    },
    {
      label: "purple dashboard phone (repeat)",
      src: "/images/playground/Frame 23.png",
      w: 220,
      h: 300,
    },
    {
      label: "blue 'ice' app phone (repeat)",
      src: "/images/playground/Frame 24.png",
      w: 220,
      h: 300,
    },
    {
      label: "red plate of food (repeat)",
      src: "/images/playground/Frame 25.png",
      w: 220,
      h: 300,
    },
  ],
  [
    {
      label: "purple banner, 5 stacked onboarding screens",
      src: "/images/playground/Frame  34.png",
      w: 900,
      h: 500,
    },
  ],
  [
    {
      label: "orange paper bags",
      src: "/images/playground/Frame 22.png",
      w: 440,
      h: 360,
    },
    {
      label: "second item — confirm in Figma, unclear at this zoom",
      src: "/images/playground/Frame 21.png",
      w: 440,
      h: 360,
    },
  ],
  [{ label: "charts", src: "/images/playground/Frame 27.png", w: 900, h: 600 }],
  [
    {
      label: "Welcome to convenient banking",
      src: "/images/playground/Frame 28.png",
      w: 900,
      h: 600,
    },
  ],
  [
    {
      label: "Finance dashboard screenshot",
      src: "/images/playground/Frame 29.png",
      w: 900,
      h: 600,
    },
  ],
  [
    {
      label: "Welcome Damilola",
      src: "/images/playground/Frame 31.png",
      w: 900,
      h: 600,
    },
  ],
  [
    {
      label: "Verve card mockup",
      src: "/images/playground/Frame 32.png",
      w: 900,
      h: 600,
    },
  ],
  [
    {
      label: "We are here for it",
      src: "/images/playground/Frame 30.png",
      w: 900,
      h: 600,
    },
  ],
];

export default function PlaygroundGrid() {
  return (
    <section className="bg-black md:py-24">
      <ScrollReveal>
        <header className="max-w-3xl px-6 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl text-white font-medium">
            Part <span className="text-orange-500">Flex</span>, Part{" "}
            <span className="text-orange-500">Flow</span>.
          </h2>
          <p className="mt-2 text-neutral-400 text-lg">
            Just a handful of shots I find beautiful.
          </p>
        </header>
      </ScrollReveal>
      <div className="flex flex-col gap-3 mb-16">
        {rows.map((row, i) => (
          <div key={i} className="flex flex-wrap gap-3">
            {row.map((tile, j) => (
              <Tile
                key={j}
                alt={tile.label}
                label={tile.label}
                src={tile.src}
                width={tile.w}
                height={tile.h}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
