import type { ImageBlock } from "@/data/case-study-types";
import CaseStudyImageBlock from "./CaseStudyImageBlock";
import ScrollReveal from "../ScrollReveal";
type RichTextProps = {
  body: string | string[];
  images?: ImageBlock[];
  altFallback?: string;
  className?: string;
};

const IMAGE_MARKER = "::image::";

function renderInline(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*.+?\*\*|==.+?==)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${keyPrefix}-${i}`} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("==") && part.endsWith("==")) {
      return (
        <span key={`${keyPrefix}-${i}`} className="text-white font-medium">
          {part.slice(2, -2)}
        </span>
      );
    }
    if (part.startsWith("##") && part.endsWith("##")) {
  return (
    <span
      key={`${keyPrefix}-${i}`}
      className="block font-mono text-[10px] uppercase tracking-normal text-neutral-500 mt-6 mb-2"
    >
      {part.slice(2, -2).trim()}
    </span>
  );
}
    return part;
  });
}

export default function RichText({
  body,
  images,
  altFallback,
  className,
}: RichTextProps) {
  const lines = Array.isArray(body) ? body : [body];
  let imageIndex = 0;

  type Block = { type: "p" | "ul"; items: string[] } | { type: "img" };
  const blocks: Block[] = [];

  for (const line of lines) {
    if (line.trim() === IMAGE_MARKER) {
      blocks.push({ type: "img" });
      continue;
    }
    const isBullet = line.trim().startsWith("- ");
    const last = blocks[blocks.length - 1];
    if (isBullet) {
      const item = line.trim().slice(2);
      if (last?.type === "ul") {
        last.items.push(item);
      } else {
        blocks.push({ type: "ul", items: [item] });
      }
    } else {
      blocks.push({ type: "p", items: [line] });
    }
  }

  return (
    <>
      {blocks.map((block, bi) => {
        if (block.type === "img") {
          const img = images?.[imageIndex];
          imageIndex++;
          if (!img) return null;
          return (
            <ScrollReveal key={bi}>
              <CaseStudyImageBlock
                block={img}
                altFallback={altFallback ?? ""}
              />
              ;
            </ScrollReveal>
          );
        }
        if (block.type === "ul") {
          return (
            <ul
              key={bi}
              className={`list-disc pl-5 space-y-2 mb-6 ${className ?? ""}`}
            >
              {block.items.map((item, i) => (
                <li key={i} className="text-neutral-300 leading-relaxed">
                  {renderInline(item, `${bi}-${i}`)}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p
            key={bi}
            className={`font-sans text-[15.5px] text-neutral-300 leading-relaxed mb-6 ${className ?? ""}`}
          >
            {renderInline(block.items[0], `${bi}`)}
          </p>
        );
      })}
      {images?.slice(imageIndex).map((img, i) => (
        <ScrollReveal key={`trailing-${i}`}>
          <CaseStudyImageBlock block={img} altFallback={altFallback ?? ""} />
        </ScrollReveal>
      ))}
    </>
  );
}
