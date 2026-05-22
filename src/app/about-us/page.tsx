import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Team from "@/components/Team";
import { img } from "@/lib/site";

export const metadata = {
  title: "About Us — Chirping Sparrows",
  description:
    "Chirping Sparrows is a flourishing pre-primary education center for ages 2 to 5. Meet the people and the philosophy.",
};

export default function AboutUs() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A play school with a difference"
        subtitle="Founded with one belief — that the early years shape the rest of a child's life. We pour care, craft and curiosity into every single day."
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-5xl overflow-hidden shadow-soft">
            <Image
              src={img("/images/about/2.jpg")}
              alt="Chirping Sparrows"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-ink-900">
              Our story
            </h2>
            <p className="mt-5 text-ink-700 leading-relaxed">
              With its vast and rich experience, Chirping Sparrows Early
              Education Pvt. Ltd. — under the capable leadership of
              Ms. Pragya Bansal (MA, M.Ed, faculty of DPS) and Ms. Neha
              Bhargava (MCA) — is a flourishing pre-primary education center
              under the banner of CHIRPING SPARROWS, igniting young minds.
            </p>
            <p className="mt-4 text-ink-700 leading-relaxed">
              We aim to provide child-centric and fun-filled learning for
              our tiny tots. Our dedicated team focuses on discovering each
              child's innate talent and giving it the right direction. We
              enable them to think smart and get ready for their first step
              of learning. Inculcating good moral and social values is our
              primary objective — we make them learn the concept of wishing
              everyone, respecting elders, and so much more.
            </p>
            <p className="mt-4 text-ink-700 leading-relaxed">
              We dreamed to provide a resourceful and effective platform to
              develop the inherent but undeveloped talent that is hidden
              within each child.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/about-our-school"
                className="px-6 py-3 rounded-full bg-ink-900 text-white font-semibold hover:bg-ink-700 transition"
              >
                About our school
              </Link>
              <Link
                href="/about-our-kids-gym"
                className="px-6 py-3 rounded-full border-2 border-ink-900 text-ink-900 font-semibold hover:bg-sun-200 transition"
              >
                About our Kids Gym
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Team />
    </>
  );
}
