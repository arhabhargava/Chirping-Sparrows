import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Our Requirement — Franchise" };

const items = [
  { t: "Space", d: "Approx. 1,500–3,000 sq ft, ground floor, with a play area." },
  { t: "Location", d: "Residential neighborhood with easy parent access." },
  { t: "Investment", d: "Three tiers — 8–9 lacs, 17–19 lacs, and 25 lacs depending on scope." },
  { t: "Mindset", d: "Most importantly: a partner who genuinely loves children and education." },
];

export default function OurRequirement() {
  return (
    <>
      <PageHeader eyebrow="Franchise" title="Our Requirement" subtitle="What we look for in partners." />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4">
          {items.map((i) => (
            <div key={i.t} className="bg-cream p-6 rounded-3xl border border-sun-100">
              <h3 className="font-display text-xl font-semibold text-ink-900">{i.t}</h3>
              <p className="mt-1 text-ink-700">{i.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
