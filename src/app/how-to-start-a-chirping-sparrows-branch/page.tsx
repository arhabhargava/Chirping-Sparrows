import PageHeader from "@/components/PageHeader";

export const metadata = { title: "How to Start a Branch — Franchise" };

const steps = [
  "Submit the franchise application form.",
  "Initial call with our team to align on goals and location.",
  "Site visit and approval.",
  "Sign the franchise agreement and pay the franchise fee.",
  "Setup phase — branding, interiors, hiring (we help every step).",
  "Teacher training at our flagship campus.",
  "Soft launch + parent open houses.",
  "Grand opening, with our marketing support.",
];

export default function HowToStart() {
  return (
    <>
      <PageHeader eyebrow="Franchise" title="How to Start a Branch" subtitle="From application to grand opening — here's the path." />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-4 bg-white p-5 rounded-3xl border border-sun-100">
                <div className="h-12 w-12 shrink-0 grid place-items-center rounded-2xl bg-sun-200 text-sun-600 font-display text-xl font-semibold">
                  {i + 1}
                </div>
                <p className="text-ink-700 self-center">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
