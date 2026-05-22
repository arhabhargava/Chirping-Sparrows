import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { img } from "@/lib/site";

export const metadata = {
  title: "About Our School — Chirping Sparrows",
  description: "Learn about the curriculum, philosophy and facilities at Chirping Sparrows.",
};

const pillars = [
  { t: "Child-centric curriculum", d: "Every activity is designed around how young children actually learn — through play, repetition and joy." },
  { t: "Small class sizes", d: "20 children per class so every voice is heard and every milestone celebrated." },
  { t: "Trained, warm teachers", d: "Our educators are qualified and trained on early-childhood best practices." },
  { t: "Safe, sunny spaces", d: "Bright classrooms, soft floors, secure entry, and a welcoming play area." },
];

export default function AboutOurSchool() {
  return (
    <>
      <PageHeader
        eyebrow="About Our School"
        title="Where learning meets play"
        subtitle="A place built for curious 2-to-5 year olds — with the calm of routine and the magic of discovery."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[5/4] rounded-5xl overflow-hidden shadow-soft">
            <Image src={img("/images/services/1.jpg")} alt="Our school" fill className="object-cover" unoptimized />
          </div>
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink-900">
              Our approach
            </h2>
            <p className="mt-5 text-ink-700 leading-relaxed">
              Chirping Sparrows is deeply inspired by Vedic thought and the
              importance of a broad, balanced education. We blend
              traditional values with modern child-development practice so
              children grow up curious, kind and confident.
            </p>
            <p className="mt-4 text-ink-700 leading-relaxed">
              From storytelling and music to art and sports — every day
              brings something new for children to explore.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.t} className="bg-white p-7 rounded-3xl border border-sun-100">
              <h3 className="font-display text-xl font-semibold text-ink-900">{p.t}</h3>
              <p className="mt-2 text-ink-500 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
