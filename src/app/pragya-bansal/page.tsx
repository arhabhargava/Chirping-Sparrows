import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { img } from "@/lib/site";

export const metadata = { title: "Pragya Bansal — Director (Academics)" };

export default function Pragya() {
  return (
    <>
      <PageHeader eyebrow="Our Team" title="Pragya Bansal" subtitle="Director (Academics) — MA, M.Ed" />
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-[4/5] rounded-5xl overflow-hidden shadow-soft bg-sun-100">
            <Image src={img("/images/team/team1.jpg")} alt="Pragya Bansal" fill className="object-cover" unoptimized />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink-900">About Pragya</h2>
            <p className="mt-4 text-ink-700 leading-relaxed">
              Pragya Bansal holds an MA and M.Ed and was formerly part of
              the faculty at DPS. She leads academics at Chirping Sparrows
              — designing curriculum, training teachers, and making sure
              every classroom keeps wonder at its center.
            </p>
            <p className="mt-3 text-ink-700 leading-relaxed">
              Her favourite part of the day? The 9:30 morning circle, when
              every child gets to share something they noticed on the way
              to school.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
