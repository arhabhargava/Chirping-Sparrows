import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { img } from "@/lib/site";

export const metadata = {
  title: "About Our Kids Gym — Chirping Sparrows",
  description: "Active play, balance and coordination — our Kids Gym builds strong, confident bodies.",
};

const benefits = [
  { i: "🤸", t: "Gross motor skills", d: "Climbing, balancing, jumping — the building blocks of a coordinated body." },
  { i: "🧠", t: "Brain development", d: "Movement and play are linked to memory, attention and problem-solving." },
  { i: "❤️", t: "Confidence & joy", d: "Mastering a new movement is one of childhood's biggest wins." },
];

export default function KidsGym() {
  return (
    <>
      <PageHeader
        eyebrow="Kids Gym"
        title="Strong bodies, brave little hearts"
        subtitle="Our Kids Gym is a soft, safe space designed for active play — where children learn to balance, climb, jump and trust their bodies."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-5xl overflow-hidden shadow-soft">
            <Image src={img("/images/services/5.jpg")} alt="Kids Gym" fill className="object-cover" unoptimized />
          </div>
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink-900">
              Movement is learning
            </h2>
            <p className="mt-5 text-ink-700 leading-relaxed">
              Physical activity isn&apos;t a side dish — it&apos;s a main course
              for early childhood. Our Kids Gym sessions build motor
              skills, body awareness and the kind of confidence that
              spills over into everything else they do.
            </p>
            <ul className="mt-6 space-y-4">
              {benefits.map((b) => (
                <li key={b.t} className="flex gap-3">
                  <span className="h-12 w-12 grid place-items-center rounded-2xl bg-sun-100 text-2xl shrink-0">
                    {b.i}
                  </span>
                  <div>
                    <div className="font-display font-semibold text-ink-900">{b.t}</div>
                    <div className="text-sm text-ink-500">{b.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
