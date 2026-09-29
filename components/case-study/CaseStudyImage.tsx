import Image from "next/image";
import type { SectionImage } from "@/data/case-study-types";

export default function CaseStudyImage({
  image,
  altFallback,
  noMargin,
}: {
  image: string | SectionImage;
  altFallback: string;
  noMargin?: boolean;
}) {
  const img: SectionImage = typeof image === "string" ? { src: image } : image;
  const width = img.width ?? "100%";
  const isNatural = img.natural !== false; // default true — opt OUT per image with natural: false

  if (isNatural) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={img.src}
        alt={altFallback}
        className={`rounded-md mx-auto block ${noMargin ? "" : "mb-4"}`}
        style={{ width, height: "auto" }}
      />
    );
  }

  const fit = img.fit ?? "cover";
  const position = img.position ?? "center";
  const aspect = (img.aspect ?? "16/9").replace("/", " / ");
  const zoom = img.zoom ?? 1;

  return (
    <div
      className={`relative rounded-md overflow-hidden bg-neutral-900 mx-auto ${noMargin ? "" : "mb-4"}`}
      style={{ aspectRatio: aspect, width }}
    >
      <Image
        src={img.src}
        alt={altFallback}
        fill
        style={{
          objectFit: fit,
          objectPosition: position,
          transform: zoom !== 1 ? `scale(${zoom})` : undefined,
        }}
      />
    </div>
  );
}