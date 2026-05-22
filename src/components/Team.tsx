import Link from "next/link";
import Image from "next/image";
import { img } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const team = [
  {
    name: "Pragya Bansal",
    role: "Director (Academics)",
    bio: "MA, M.Ed — formerly faculty at DPS. Pragya leads pedagogy and teacher development.",
    href: "/pragya-bansal",
    image: "/images/team/team1.jpg",
    color: "bg-sun-100",
  },
  {
    name: "Neha Bhargava",
    role: "Director (IT & Finance)",
    bio: "MCA — Neha runs operations, parent communication, and the systems that keep things humming.",
    href: "/neha-bhargava",
    image: "/images/team/team2.jpg",
    color: "bg-blush-100",
  },
];

export default function Team() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="The grown-ups behind the giggles"
          subtitle="Two directors, decades of combined experience, and a team obsessed with making your child's day brighter."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((m) => (
            <article
              key={m.name}
              className={`${m.color} rounded-5xl p-2 group`}
            >
              <div className="relative aspect-[4/5] rounded-4xl overflow-hidden bg-white">
                <Image
                  src={img(m.image)}
                  alt={m.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-ink-900">
                  {m.name}
                </h3>
                <p className="text-ink-500">{m.role}</p>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">{m.bio}</p>
                <Link
                  href={m.href}
                  className="mt-4 inline-flex items-center gap-1 text-ink-900 font-display font-semibold hover:gap-2 transition-all"
                >
                  View details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
