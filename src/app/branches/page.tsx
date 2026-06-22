import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Branches — Chirping Sparrows",
  description: "Find a Chirping Sparrows branch near you.",
};

const branches = [
  {
    name: "Head Office",
    address: "Shop No. 1, First Floor, Baburam Complex, Near Gurudwara, Gaur City 2, Noida Extension",
    landmark: "Next to the Gurudwara, Gaur City 2",
    phone: "+91 99714 00339, +91 99583 76377",
    email: SITE.email,
    mapsQuery: "Chirping Sparrows Baburam Complex Gaur City 2 Noida Extension",
    mapsUrl: "https://maps.app.goo.gl/ZGRTFvg69EmdCx6H8",
    color: "bg-sun-100",
  },
  {
    name: "Noida Extension (Gaur City 2 – Tower C)",
    address: "019 & 1020, Tower C, 16th Avenue, Gaur City 2, Noida Extn. 201305",
    landmark: "16th Avenue, Gaur City 2",
    phone: "+91 99714 00339, +91 99583 76377",
    email: SITE.email,
    mapsQuery: "Chirping Sparrows Tower C 16th Avenue Gaur City 2",
    mapsUrl: "https://maps.app.goo.gl/dFqrevH9EmiumfUR8",
    color: "bg-blush-100",
  },
  {
    name: "Greater Noida West (Supertech Eco Village)",
    address: "Tower F1, Flat No. 003, Supertech Eco Village 1, Greater Noida West",
    landmark: "Supertech Eco Village 1, near Eco Village gate",
    phone: "+91 81302 48095",
    mapsQuery: "Chirping Sparrows Supertech Eco Village Greater Noida West",
    color: "bg-sun-100",
  },
  {
    name: "Noida Extension (Gaur City 2 – Tower J)",
    address: "P83, Tower J, 7th Avenue, Gaur City 2, Noida Extn.",
    landmark: "7th Avenue, Gaur City 2",
    phone: "+91 70421 17732, +91 88004 18811",
    mapsQuery: "Chirping Sparrows Tower J 7th Avenue Gaur City 2",
    color: "bg-blush-100",
  },
  {
    name: "Noida Extension (Amrapali Centurion Park)",
    address: "D-015G, Amrapali Centurion Park, Noida Extn.",
    landmark: "Ground floor, Amrapali Centurion Park",
    phone: "+91 70421 11455, +91 82732 99455",
    mapsQuery: "Chirping Sparrows Amrapali Centurion Park Noida Extension",
    color: "bg-sky-100",
  },
  {
    name: "Greater Noida (Aarcity Regency Park)",
    address: "B-0001, Ground Floor, Tower B, Aarcity Regency Park, GH-03B, Sector-16C",
    landmark: "Aarcity Regency Park, Sector 16C, Greater Noida",
    phone: "+91 97176 44600",
    mapsQuery: "Chirping Sparrows Aarcity Regency Park Sector 16C Greater Noida",
    color: "bg-leaf-100",
  },
  {
    name: "VVIP Homes",
    address: "D101, VVIP Homes, Gaur City 2, Noida Extn.",
    landmark: "VVIP Homes society, Gaur City 2",
    phone: "+91 82944 45133, +91 94115 12839",
    mapsQuery: "Chirping Sparrows VVIP Homes Gaur City 2 Noida Extension",
    color: "bg-sun-100",
  },
  {
    name: "Le Garden Ajnara",
    address: "J-108, Ajnara Le Garden, Greater Noida West",
    landmark: "Ajnara Le Garden society, Greater Noida West",
    phone: "+91 78270 97530, +91 95683 32703",
    mapsQuery: "Chirping Sparrows Ajnara Le Garden Greater Noida West",
    color: "bg-blush-100",
  },
  {
    name: "Greater Noida West (Amarpali Golf Homes)",
    address: "D-2, 004, Amrapali Golf Homes, Greater Noida West",
    landmark: "Amrapali Golf Homes society, Greater Noida West",
    phone: "+91 79834 75457, +91 97176 44600",
    mapsQuery: "Chirping Sparrows Amarpali Golf Homes Greater Noida West",
    color: "bg-sky-100",
  },
  {
    name: "Greater Noida West (French Apartments)",
    address: "003, Tower A, French Apartments, Sector 16C, Greater Noida West",
    landmark: "French Apartments, Sector 16C, Greater Noida West",
    phone: "+91 96544 49480, +91 75000 44588",
    mapsQuery: "Chirping Sparrows French Apartments Sector 16C Greater Noida West",
    color: "bg-leaf-100",
  },
];

export default function Branches() {
  return (
    <>
      <PageHeader
        eyebrow={`${branches.length} Branches`}
        title="Find us near you"
        subtitle="All our centres are inside residential communities — easy to reach, safe to visit. Tap any card to get directions."
      />

      <section className="py-16 space-y-16">
        {/* Map */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-5xl overflow-hidden shadow-soft aspect-[16/7]">
            <iframe
              title="All Chirping Sparrows Branches"
              src="https://maps.google.com/maps?q=Chirping+Sparrows+Greater+Noida+West&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-center text-sm text-ink-400">
            Can&apos;t see all pins?{" "}
            <a
              href="https://www.google.com/maps/search/Chirping+Sparrows+Greater+Noida+West"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink-700"
            >
              Open in Google Maps
            </a>
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {branches.map((b, i) => {
            const isHQ = i === 0;
            const phones = b.phone.split(",").map((p) => p.trim());
            return (
              <article
                key={b.name}
                className={`relative flex flex-col rounded-4xl p-6 ${isHQ ? "bg-sun-200 ring-2 ring-sun-400" : `${b.color}`}`}
              >
                {isHQ && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-sun-400 text-white text-xs font-semibold">
                    Head Office
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold text-ink-900 pr-20">
                  {b.name}
                </h3>

                {/* Address */}
                <div className="mt-4 flex gap-2.5">
                  <svg className="mt-0.5 shrink-0 w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 13-8 13S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <p className="text-sm text-ink-700 leading-relaxed">{b.address}</p>
                </div>


                {/* Phones */}
                <div className="mt-3 flex gap-2.5">
                  <svg className="mt-0.5 shrink-0 w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>
                  </svg>
                  <div className="flex flex-col gap-0.5">
                    {phones.map((ph) => (
                      <a
                        key={ph}
                        href={`tel:${ph.replace(/\s/g, "")}`}
                        className="text-sm text-ink-700 hover:text-ink-900 hover:underline"
                      >
                        {ph}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                {b.email && (
                  <div className="mt-2 flex gap-2.5">
                    <svg className="mt-0.5 shrink-0 w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <a href={`mailto:${b.email}`} className="text-sm text-ink-700 hover:text-ink-900 hover:underline break-all">
                      {b.email}
                    </a>
                  </div>
                )}

                {/* Directions */}
                <a
                  href={b.mapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 self-start inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 text-ink-900 text-sm font-semibold hover:bg-white transition"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                  </svg>
                  Get Directions
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
