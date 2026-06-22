import PageHeader from "@/components/PageHeader";
import AdmissionForm from "@/components/AdmissionForm";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Admission — Chirping Sparrows",
  description: "Enroll your child at Chirping Sparrows. Simple steps to get started.",
};

const steps = [
  { n: "01", t: "Visit the campus", d: "Drop by, take a tour, and meet our directors." },
  { n: "02", t: "Fill the form", d: "A short admission form for you and your child." },
  { n: "03", t: "Brief interaction", d: "A relaxed chat — no quizzes, just getting to know each other." },
  { n: "04", t: "Confirmation", d: "Once accepted, we share the schedule, fees and what to bring." },
];

export default function Admission() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions Open"
        title="Begin your child's adventure"
        subtitle="We accept rolling admissions for ages 1.9 to 5. Spots are limited — small classes are part of the magic."
      />

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink-900 text-center">
            How admission works
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="bg-white p-6 rounded-3xl border border-sun-100">
                <div className="font-display text-4xl font-semibold text-blush-500">{s.n}</div>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">{s.t}</h3>
                <p className="mt-1 text-sm text-ink-500">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-10 rounded-5xl shadow-soft">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900">
              Admission enquiry
            </h2>
            <p className="mt-2 text-ink-500">
              Fill the form below and we&apos;ll get back to you within a working day.
            </p>
            <AdmissionForm />
            <p className="mt-4 text-xs text-ink-500">
              Or call us directly: {SITE.phones.join(" / ")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
