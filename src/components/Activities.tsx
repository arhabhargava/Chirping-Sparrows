"use client";

import { useState } from "react";
import Image from "next/image";
import { img } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const tabs = [
  {
    key: "music",
    label: "Music",
    icon: "🎵",
    title: "Music Class",
    image: "/images/services/2.jpg",
    desc: "We conduct music classes for children with an interest in music. Various instruments — guitar, drums, casio — and expert teachers to draw out the best in your child.",
  },
  {
    key: "learn",
    label: "Learn",
    icon: "📚",
    title: "Learn",
    image: "/images/services/3.jpg",
    desc: "Learning is the process of acquiring new — or modifying existing — knowledge, behaviors, skills, and values. We weave it into every play moment.",
  },
  {
    key: "art",
    label: "Art",
    icon: "🎨",
    title: "Art Class",
    image: "/images/services/4.jpg",
    desc: "We love to make them learn what they love — and nothing is better than the arts! We conduct classes in painting, craft and creative expression.",
  },
  {
    key: "sports",
    label: "Sports",
    icon: "⚽",
    title: "Sports Class",
    image: "/images/services/5.jpg",
    desc: "Physical activities are very important for children. We conduct classes that build strength, coordination and team-spirit through age-appropriate sports.",
  },
  {
    key: "playground",
    label: "Playground",
    icon: "🛝",
    title: "Playground",
    image: "/images/about/1.jpg",
    desc: "A playground is a place specifically designed to enable children to play freely. Ours is safe, soft, and stocked with everything for hours of fun.",
  },
];

const perks = [
  "Qualified Teachers",
  "Love & Care",
  "Delicious Food",
  "Strategic Location",
  "Active Learning",
  "Transportation",
];

export default function Activities() {
  const [active, setActive] = useState(tabs[0].key);
  const t = tabs.find((x) => x.key === active)!;

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Activities"
          title="Every day is a new adventure"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2 lg:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2.5 rounded-full font-display font-semibold text-sm transition flex items-center gap-2 ${
                active === tab.key
                  ? "bg-ink-900 text-white shadow-soft"
                  : "bg-white text-ink-700 hover:bg-sun-100"
              }`}
            >
              <span className="text-lg">{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[5/4] rounded-5xl overflow-hidden shadow-soft">
            <Image
              src={img(t.image)}
              alt={t.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <h3 className="font-display text-3xl sm:text-4xl font-semibold text-ink-900">
              {t.title}
            </h3>
            <p className="mt-4 text-ink-700 leading-relaxed">{t.desc}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {perks.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 text-ink-700"
                >
                  <span className="h-6 w-6 rounded-full bg-leaf-200 text-leaf-600 grid place-items-center text-sm font-bold">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
