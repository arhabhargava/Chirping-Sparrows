import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Why Chirping Sparrows — Franchise" };

const reasons = [
  { t: "Proven curriculum", d: "Built and refined over years across age-groups 2–5." },
  { t: "Recognized brand", d: "An established name in Greater Noida West with strong parent loyalty." },
  { t: "Operational playbook", d: "Day-to-day systems, schedules, and parent-comms ready to go." },
  { t: "Marketing support", d: "Branding, collateral, and digital marketing kits for launch and ongoing growth." },
  { t: "Teacher training", d: "We train and certify your teaching team in our methodology." },
  { t: "Ongoing mentorship", d: "Direct line to our founding team — we don't disappear after launch." },
];

export default function WhyCS() {
  return (
    <>
      <PageHeader eyebrow="Franchise" title="Why Chirping Sparrows" subtitle="Six reasons partners pick us — and stay with us." />
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <div key={r.t} className="bg-white p-6 rounded-3xl border border-sun-100">
              <div className="font-display text-3xl font-semibold text-blush-500">0{i + 1}</div>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink-900">{r.t}</h3>
              <p className="mt-1 text-sm text-ink-500">{r.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
