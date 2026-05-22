import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Franchise Opportunity — Chirping Sparrows",
  description: "Open your own Chirping Sparrows pre-school. Strong support, proven model.",
};

const cards = [
  { t: "Why Chirping Sparrows", d: "A proven brand, modern curriculum, and a parent community that already knows us.", h: "/why-chirping-sparrows" },
  { t: "Our Requirement", d: "What we look for in partners — space, intent, and a love for early-childhood education.", h: "/our-requirement" },
  { t: "Chirping Sparrows Support", d: "From training to marketing — we walk with you, not just at launch.", h: "/chirping-sparrows-support" },
  { t: "How to Start a Branch", d: "A step-by-step look at what it takes to open your own Chirping Sparrows.", h: "/how-to-start-a-chirping-sparrows-branch" },
  { t: "Master Franchise", d: "Hold a city or region. Help us scale Chirping Sparrows with care.", h: "/master-franchise" },
  { t: "Application Form", d: "Ready to begin? Fill the form and our team will reach out.", h: "/franchise-application-form" },
];

export default function Franchise() {
  return (
    <>
      <PageHeader
        eyebrow="Franchise"
        title="Open a Chirping Sparrows of your own"
        subtitle="Years of curriculum, branding and operational know-how — packaged so you can focus on what matters: the children."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
            <Link
              key={c.h}
              href={c.h}
              className="group p-7 bg-white rounded-3xl border border-sun-100 hover:shadow-soft transition"
            >
              <h3 className="font-display text-xl font-semibold text-ink-900 group-hover:text-blush-500 transition">
                {c.t}
              </h3>
              <p className="mt-2 text-ink-500 text-sm leading-relaxed">{c.d}</p>
              <span className="mt-4 inline-block font-display font-semibold text-ink-900">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
