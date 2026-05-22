import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Our Support — Franchise" };

const support = [
  { i: "🎓", t: "Training", d: "Initial and ongoing training for your team — pedagogy, classroom management, and parent-communication." },
  { i: "📚", t: "Curriculum", d: "Lesson plans, activity packs, art and music modules — refreshed every term." },
  { i: "🏷️", t: "Branding", d: "Logo, colors, signage and marketing collateral — done for you." },
  { i: "📣", t: "Marketing", d: "Launch campaign + ongoing digital marketing playbooks." },
  { i: "🛠️", t: "Operations", d: "Daily schedules, parent forms, payment systems — your manual on day one." },
  { i: "💬", t: "Mentorship", d: "Direct WhatsApp access to the founding team." },
];

export default function Support() {
  return (
    <>
      <PageHeader eyebrow="Franchise" title="Chirping Sparrows Support" subtitle="From day one and far beyond — here's everything we hand over." />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {support.map((s) => (
            <div key={s.t} className="bg-white p-6 rounded-3xl border border-sun-100">
              <div className="text-4xl">{s.i}</div>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">{s.t}</h3>
              <p className="mt-1 text-sm text-ink-500">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
