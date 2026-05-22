import Link from "next/link";
import Image from "next/image";
import { img } from "@/lib/site";

export default function Welcome() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-cream to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-[4/5] max-w-md mx-auto rounded-5xl overflow-hidden shadow-soft bg-white">
            <Image
              src={img("/images/services/1.jpg")}
              alt="Welcome to Chirping Sparrows"
              width={600}
              height={750}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl shadow-soft px-6 py-4 hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-leaf-200 grid place-items-center text-leaf-600 font-display text-xl">
                ✓
              </div>
              <div>
                <div className="text-2xl font-display font-semibold text-ink-900">
                  8+ years
                </div>
                <div className="text-xs text-ink-500">igniting young minds</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-blush-100 text-blush-500 font-display font-medium text-sm">
            Welcome
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink-900 leading-tight">
            Welcome to <span className="squiggle">Chirping Sparrows</span>
          </h2>
          <p className="mt-5 text-ink-700 leading-relaxed">
            With its vast and rich experience, Chirping Sparrows Early
            Education Pvt. Ltd. — under the capable leadership of Ms. Pragya
            Bansal (MA, M.Ed, faculty of DPS) and Ms. Neha Bhargava (MCA) —
            is a flourishing pre-primary education center. A play school
            with a difference, caring for children between 2 to 5 years.
          </p>
          <p className="mt-4 text-ink-700 leading-relaxed">
            We aim to provide child-centric and fun-filled learning for our
            tiny tots. Our dedicated team focuses on discovering their innate
            talent and giving it the right direction. We help them think
            smart, get ready for their first step of learning, and inculcate
            good moral and social values along the way.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/about-our-school"
              className="px-6 py-3 rounded-full bg-ink-900 text-white font-semibold hover:bg-ink-700 transition"
            >
              Read more about our school
            </Link>
            <Link
              href="/aim"
              className="px-6 py-3 rounded-full text-ink-900 font-semibold border-2 border-ink-900 hover:bg-sun-200 transition"
            >
              Our Aim
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
