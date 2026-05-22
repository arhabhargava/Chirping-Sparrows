import Link from "next/link";
import Image from "next/image";
import { img } from "@/lib/site";

const blobs = [
  { c: "bg-sun-200", x: "5%", y: "20%", size: 220, delay: "0s" },
  { c: "bg-blush-200", x: "85%", y: "15%", size: 180, delay: "1.5s" },
  { c: "bg-sky-200", x: "10%", y: "75%", size: 160, delay: "1s" },
  { c: "bg-leaf-200", x: "82%", y: "70%", size: 200, delay: "0.5s" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 -z-10">
        {blobs.map((b, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-40 blur-2xl ${b.c} animate-float`}
            style={{
              left: b.x,
              top: b.y,
              width: b.size,
              height: b.size,
              animationDelay: b.delay,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sun-100 text-sun-600 font-display font-semibold text-sm">
              <span className="h-2 w-2 rounded-full bg-leaf-500 animate-pulse" />
              Admissions Open · Ages 1.9 – 5
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-ink-900">
              Where curious little
              <span className="block">
                hearts learn to{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">soar.</span>
                  <span className="absolute inset-x-0 bottom-1 h-3 bg-sun-200 -z-0 rounded-full"></span>
                </span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-ink-700 max-w-xl leading-relaxed">
              Chirping Sparrows is a pre-school + day care for children 2 to 5 in
              Greater Noida West. We blend play, art, music and movement to spark
              curiosity and build confidence — every single day.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/admission"
                className="px-6 py-3 rounded-full bg-blush-500 text-white font-semibold shadow-pop hover:bg-blush-400 transition"
              >
                Book a Visit
              </Link>
              <Link
                href="/about-our-school"
                className="px-6 py-3 rounded-full bg-white border-2 border-ink-900 text-ink-900 font-semibold hover:bg-ink-900 hover:text-white transition"
              >
                Why parents love us →
              </Link>
            </div>

            {/* Quick pills */}
            <div className="mt-10 flex flex-wrap gap-2">
              {[
                { label: "Kids Gym", color: "bg-sun-100 text-sun-600" },
                { label: "Pre School", color: "bg-blush-100 text-blush-500" },
                { label: "Day Care", color: "bg-sky-100 text-sky-600" },
                { label: "Music & Art", color: "bg-leaf-100 text-leaf-600" },
              ].map((p) => (
                <span
                  key={p.label}
                  className={`px-3 py-1.5 rounded-full text-sm font-display font-medium ${p.color}`}
                >
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Photo collage */}
          <div className="relative h-[480px] lg:h-[560px]">
            <div className="absolute top-0 right-8 w-56 h-72 lg:w-64 lg:h-80 rounded-5xl overflow-hidden shadow-soft rotate-2 bg-white">
              <Image
                src={img("/images/about/1.jpg")}
                alt="Children at Chirping Sparrows"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute bottom-8 left-0 w-64 h-80 lg:w-72 lg:h-96 rounded-5xl overflow-hidden shadow-soft -rotate-3 bg-white">
              <Image
                src={img("/images/about/2.jpg")}
                alt="Classroom activity"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute bottom-0 right-0 w-44 h-52 lg:w-52 lg:h-60 rounded-5xl overflow-hidden shadow-soft rotate-6 bg-white">
              <Image
                src={img("/images/about/3.jpg")}
                alt="Happy kids"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Sparkle stickers */}
            <div className="absolute top-12 left-6 text-5xl animate-wiggle">★</div>
            <div className="absolute top-40 right-2 text-4xl animate-float text-blush-500">♥</div>
          </div>
        </div>
      </div>
    </section>
  );
}
