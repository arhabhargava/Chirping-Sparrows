import SectionHeading from "./SectionHeading";

const reviews = [
  {
    q: "Whole staff is very cooperative; provides healthy and homely environment to kids which helps them adapt to new place easily. Good place for children growth. Thumbs up, Chirping Sparrows.",
    a: "Tamanna Sharma",
    color: "bg-sun-100",
  },
  {
    q: "Excellent environment for overall growth of children. Very cooperative staff. Five stars for curriculum.",
    a: "Akshita Mishra",
    color: "bg-blush-100",
  },
  {
    q: "An excellent play school with all facilities for kids. The teaching & administrative staff is friendly with kids and provides a homely atmosphere. One of the best play schools in Noida Extension.",
    a: "Deepak Agarwal",
    color: "bg-sky-100",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Happy Parents"
          title="What parents are saying"
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.a}
              className={`${r.color} p-7 rounded-4xl relative`}
            >
              <span className="absolute -top-3 left-7 text-6xl text-ink-900/20 font-display leading-none">
                “
              </span>
              <blockquote className="text-ink-700 leading-relaxed relative z-10">
                {r.q}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white grid place-items-center font-display font-semibold text-ink-900">
                  {r.a[0]}
                </div>
                <div>
                  <div className="font-display font-semibold text-ink-900">
                    {r.a}
                  </div>
                  <div className="text-xs text-ink-500">Parent ★★★★★</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
