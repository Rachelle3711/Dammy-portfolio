import Image from "next/image";

export type PlaygroundImage = {
  src: string;
  size: "sm" | "md" | "lg";
};

const spanClasses: Record<PlaygroundImage["size"], string> = {
  sm: "md:col-span-4 aspect-[4/5]",
  md: "md:col-span-6 aspect-[4/3]",
  lg: "md:col-span-8 aspect-[16/10]",
};
export default function Gallery({ images }: { images: PlaygroundImage[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 px-6 md:px-10">
      {images.map((img, i) => (
        <div
          key={img.src + i}
          className={`relative overflow-hidden rounded-md bg-line ${spanClasses[img.size]}`}
        >
          <Image src={img.src}
            alt=""
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            priority={i < 2}
          />
        </div>
      ))}
    </div>
  );
}
