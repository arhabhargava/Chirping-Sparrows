import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-blush-400 to-sun-300 p-10 lg:p-16 text-center">
          <div className="absolute -top-10 -left-10 text-9xl opacity-20">★</div>
          <div className="absolute -bottom-12 -right-8 text-9xl opacity-20">♥</div>
          <h2 className="relative font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink-900 leading-tight">
            Ready to see Chirping Sparrows 
            
            <br className="hidden sm:block" />
            for yourself?
          </h2>
          <p className="relative mt-4 text-ink-900/85 max-w-2xl mx-auto">
            Book a campus visit or give us a ring — we&apos;d love to meet your
            tiny tot and answer all your questions.
          </p>
          <div className="relative mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/admission"
              className="px-6 py-3 rounded-full bg-ink-900 text-white font-semibold hover:bg-ink-700 transition"
            >
              Apply for admission
            </Link>
            <a
              href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
              className="px-6 py-3 rounded-full bg-white text-ink-900 font-semibold hover:bg-cream transition"
            >
              Call {SITE.phones[0]}
            </a>
            <a
              href={`tel:${SITE.phones[1].replace(/\s/g, "")}`}
              className="px-6 py-3 rounded-full bg-white text-ink-900 font-semibold hover:bg-cream transition"
            >
              Call {SITE.phones[1]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
