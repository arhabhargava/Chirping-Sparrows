import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { img } from "@/lib/site";

export const metadata = { title: "Neha Bhargava — Director (IT & Finance)" };

export default function Neha() {
  return (
    <>
      <PageHeader eyebrow="Our Team" title="Neha Bhargava" subtitle="Director (IT and Finance) — MCA" />
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-[4/5] rounded-5xl overflow-hidden shadow-soft bg-blush-100">
            <Image src={img("/images/team/team2.jpg")} alt="Neha Bhargava" fill className="object-cover" unoptimized />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink-900">About Neha</h2>
            <p className="mt-4 text-ink-700 leading-relaxed">
              Neha Bhargava holds an MCA and oversees operations,
              technology and finance at Chirping Sparrows. Parent
              communications, scheduling, payments — if it keeps the
              school humming, Neha runs it.
            </p>
            <p className="mt-3 text-ink-700 leading-relaxed">
              She believes every parent deserves quick answers and clear
              information — and she works hard to make that the standard
              at Chirping Sparrows.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
