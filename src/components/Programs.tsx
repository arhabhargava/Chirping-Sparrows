import Image from "next/image";
import { img } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const programs = [
  {
    name: "Play Group",
    image: "/images/course/1.jpg",
    time: "9.30 am – 12.30 pm",
    age: "1.9 – 2.2 years",
    capacity: "15 kids",
    duration: "3 Hours",
    desc: "When little tots start playing with blocks and other items, their whole body and sensorial nerves help them acquire problem-solving skills.",
    color: "bg-sun-100",
    badge: "text-sun-600 bg-sun-200",
  },
  {
    name: "Pre Nursery",
    image: "/images/course/2.jpg",
    time: "9.30 am – 12.30 pm",
    age: "2.2 – 3 years",
    capacity: "15 kids",
    duration: "3 Hours",
    desc: "Quality education in the early years of preschool sets a firm foundation in the overall development of a child.",
    color: "bg-blush-100",
    badge: "text-blush-500 bg-blush-200",
  },
  {
    name: "Nursery",
    image: "/images/course/3.jpg",
    time: "9.30 am – 12.30 pm",
    age: "3 – 4 years",
    capacity: "15 kids",
    duration: "3 Hours",
    desc: "Children learn the alphabet and letter sounds, numbers, simple math, and master early writing skills.",
    color: "bg-sky-100",
    badge: "text-sky-600 bg-sky-200",
  },
  {
    name: "KG",
    image: "/images/course/4.jpg",
    time: "9.30 am – 1.00 pm",
    age: "4 – 5 years",
    capacity: "15 kids",
    duration: "3.5 Hours",
    desc: "Our LKG environment encourages them to learn abstract principles and work in a non-competitive environment.",
    color: "bg-leaf-100",
    badge: "text-leaf-600 bg-leaf-200",
  },
];

export default function Programs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Programs"
          title="A program for every little step"
          subtitle="Small class sizes, big personalities. Every program is built around play, movement and curiosity."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <article
              key={p.name}
              className={`${p.color} rounded-4xl p-2 hover:-translate-y-2 transition`}
            >
              <div className="relative h-48 rounded-3xl overflow-hidden bg-white">
                <Image
                  src={img(p.image)}
                  alt={p.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-5">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-display font-semibold ${p.badge}`}>
                  {p.age}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink-900">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-ink-500">{p.time}</p>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed line-clamp-4">
                  {p.desc}
                </p>
                <dl className="mt-5 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/80 rounded-xl px-3 py-2">
                    <dt className="text-ink-500">Capacity</dt>
                    <dd className="font-display font-semibold text-ink-900">
                      {p.capacity}
                    </dd>
                  </div>
                  <div className="bg-white/80 rounded-xl px-3 py-2">
                    <dt className="text-ink-500">Duration</dt>
                    <dd className="font-display font-semibold text-ink-900">
                      {p.duration}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
