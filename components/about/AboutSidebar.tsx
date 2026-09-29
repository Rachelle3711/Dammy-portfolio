
import SectionLabel from "./SectionLabel";

const tools = [
  { src: "/images/logos_figma.png", alt: "Figma" },
  { src: "/images/apple -note.png", alt: "Apple Notes" },
  { src: "/images/logos_claude.png", alt: "Claude" },
  { src: "/images/chatgpt logo.png", alt: "ChatGPT" },
  { src: "/images/Adobe-Photoshop.png", alt: "Photoshop" },
  { src: "/images/replit-logos.png", alt: "Replit" },
  { src: "/images/gemini-logos.png", alt: "Gemini" },
  { src: "/images/After effect.png", alt: "After Effects" },
  { src: "/images/hero-image9.png", alt: "Linear" },
  { src: "/images/lovable-icon.png", alt: "Lovable" },
  { src: "/images/after- lovable.png", alt: "Whisk" },
  { src: "/images/logo-whisk.png", alt: "Whisk 2" },
  { src: "/images/Trello Logo.png", alt: "Trello" },
  { src: "/images/notion -logos.png", alt: "Notion" },
  { src: "/images/adobe-illustrator-logo.png", alt: "Illustrator" },
  { src: "/images/meet13.png", alt: "Google Meet" },
  { src: "/images/Slack14.png", alt: "Slack" },
  { src: "/images/Miro-Logo15.png", alt: "Miro" },
];

export default function AboutSidebar() {
  return (
    <div className="space-y-14">
       {/* Pauses  */}
      <div className="h-[140vh] relative">
        <div className="sticky top-24">
          <SectionLabel>
            YOU WILL ALMOST ALWAYS FIND THESE ON ME 😎
          </SectionLabel>
          <div>
            <img
              src="/images/accessories.png"
              alt="Sunglasses, chain bracelet, sneaker, and ring"
              className="block mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Pauses while the reader is on the "Building" paragraph */}
      <div className="h-[140vh] relative">
        <div className="sticky top-24">
          <SectionLabel>
            SOME OF THE TOOLS I AM CURRENTLY LOVING RIGHT NOW
          </SectionLabel>
          <div className="grid grid-cols-6 gap-3">
            {tools.map((tool) => (
              <div
                key={tool.src}
                title={tool.alt}
                className="aspect-square flex items-center justify-center p-2 h-15"
              >
                <img
                  src={tool.src}
                  alt={tool.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          <img
            src="/images/gamma-banner.png"
            alt="Gamma"
            className="mt-4 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
