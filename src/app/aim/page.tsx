import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { img } from "@/lib/site";

export const metadata = {
  title: "Our Aim — Chirping Sparrows",
  description: "All-round development — emotional, social, motor, linguistic and academic.",
};

const aims = [
  { c: "bg-sun-100", t: "Emotional & social development", d: "Helping each child name their feelings, take turns, and form healthy friendships." },
  { c: "bg-blush-100", t: "Gross & fine motor skills", d: "From climbing to crayon-grip — we build strong, capable little bodies and hands." },
  { c: "bg-sky-100", t: "Linguistic development", d: "Songs, stories and conversation grow rich vocabulary in two languages." },
  { c: "bg-leaf-100", t: "Academic foundations", d: "Phonics, numbers and pre-writing — playfully introduced when each child is ready." },
];

export default function Aim() {
  return (
    <>
      <PageHeader
        eyebrow="Our Aim"
        title="All-round development of every child"
        subtitle="Small classes mean every child is seen, heard, and gently guided. Here's what we set out to do — every single day."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10 items-center">
          <div className="relative lg:col-span-2 aspect-square rounded-5xl overflow-hidden shadow-soft">
            <Image src={img("/images/aim.png")} alt="Our aim" fill className="object-contain bg-cream p-8" unoptimized />
          </div>
          <div className="lg:col-span-3">
            <p className="text-ink-700 leading-relaxed text-lg">
              Our aim is the all-round development of the child, which
              encompasses emotional and social development, gross and fine
              motor skills, linguistic development and academic skills.
              Since the size of the class is small, interactive
              communication and personal attention are available to every
              child.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {aims.map((a) => (
                <div key={a.t} className={`${a.c} p-5 rounded-3xl`}>
                  <h3 className="font-display text-lg font-semibold text-ink-900">{a.t}</h3>
                  <p className="mt-1 text-sm text-ink-700">{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
