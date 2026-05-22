import Image from "next/image";
import { img } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const galleryItems = [
  "/images/gallery/gallery10-1-2022.png",
  "/images/gallery/gallery10-2-2022.png",
  "/images/gallery/gallery10-3-2022.png",
  "/images/gallery/gallery10-4-2022.png",
  "/images/gallery/gallery10-5-2022.png",
  "/images/gallery/gallery10-6-2022.png",
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
];

export default function Gallery() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Gallery"
          title="A peek into our days"
          subtitle="Real moments from real classrooms — laughter, learning and a lot of crayons."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryItems.map((src, i) => (
            <a
              key={src}
              href={img(src)}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block rounded-3xl overflow-hidden bg-white group ${
                i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={img(src)}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition"
                unoptimized
              />
              <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/20 transition" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
