import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Branches — Chirping Sparrows",
  description: "Find a Chirping Sparrows branch near you.",
};

const branches = [
  {
    name: "Greater Noida West (Main)",
    address: SITE.address,
    phone: SITE.phones[0],
    email: SITE.email,
    color: "bg-sun-100",
  },
];

export default function Branches() {
  return (
    <>
      <PageHeader
        eyebrow="Branches"
        title="Find us near you"
        subtitle="Drop by anytime — we love showing parents around."
      />

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {branches.map((b) => (
            <article key={b.name} className={`${b.color} p-7 rounded-4xl`}>
              <h3 className="font-display text-2xl font-semibold text-ink-900">{b.name}</h3>
              <p className="mt-3 text-ink-700">{b.address}</p>
              <p className="mt-2 text-ink-700">📞 {b.phone}</p>
              <p className="mt-1 text-ink-700">✉️ {b.email}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-5xl overflow-hidden shadow-soft aspect-[16/9]">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Gaur+City+2,+Noida+Extension&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
