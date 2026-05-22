import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = { title: "Master Franchise — Chirping Sparrows" };

export default function Master() {
  return (
    <>
      <PageHeader
        eyebrow="Franchise"
        title="Master Franchise"
        subtitle="Take the lead in a city or region — open multiple branches and help Chirping Sparrows grow with care."
      />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-ink">
          <p className="text-ink-700 leading-relaxed text-lg">
            A Master Franchise gives you exclusive territorial rights to open and
            sub-license Chirping Sparrows branches in a defined region. You get
            our complete playbook, plus a dedicated mentor from the founding team.
          </p>
          <p className="mt-4 text-ink-700 leading-relaxed">
            Investment, territory size and revenue share vary by city.
            <Link href="/franchise-application-form" className="text-blush-500 font-semibold"> Apply here</Link> and our team will set up a call.
          </p>
        </div>
      </section>
    </>
  );
}
