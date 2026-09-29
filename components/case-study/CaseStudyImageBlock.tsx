import type { ImageBlock } from "@/data/case-study-types";
import CaseStudyImage from "./CaseStudyImage";

function isImageRow(block: ImageBlock): block is Extract<ImageBlock, { images: unknown }> {
  return typeof block === "object" && block !== null && "images" in block;
}

const imageHeadingClass = "text-[10px] font-mono tracking-wide text-neutral-500 mb-3";

export default function CaseStudyImageBlock({
  block,
  altFallback,
}: {
  block: ImageBlock;
  altFallback: string;
}) {
  if (isImageRow(block)) {
    return (
      <div className="mb-4">
        {block.heading && <p className={imageHeadingClass}>{block.heading}</p>}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${block.columns}, minmax(0, 1fr))` }}
        >
          {block.images.map((img, i) => (
            <CaseStudyImage key={i} image={img} altFallback={altFallback} noMargin />
          ))}
        </div>
      </div>
    );
  }

  const img = typeof block === "string" ? { src: block } : block;
  return (
    <div>
      {img.heading && <p className={imageHeadingClass}>{img.heading}</p>}
      <CaseStudyImage image={img} altFallback={altFallback} />
    </div>
  );
}