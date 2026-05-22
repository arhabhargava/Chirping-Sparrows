import SectionHeading from "./SectionHeading";

const features = [
  {
    title: "Trained Teachers",
    desc: "Our teachers are well qualified and emphasize on the overall development of every child.",
    icon: "👩‍🏫",
    color: "bg-sun-100",
  },
  {
    title: "Interactive Learning",
    desc: "Interactive games and methods help our kids in their overall development.",
    icon: "🎲",
    color: "bg-blush-100",
  },
  {
    title: "Art Class",
    desc: "We love to make them learn what they love — and nothing is better than the arts!",
    icon: "🎨",
    color: "bg-sky-100",
  },
  {
    title: "Happy Learning",
    desc: "Learning is effective when the child is happy. We make every lesson enjoyable.",
    icon: "😊",
    color: "bg-leaf-100",
  },
  {
    title: "Happy Faces Day Care",
    desc: "Homely environment with pick-and-drop, plus enrichment classes — Vedic maths, Abacus, Craft and dance.",
    icon: "🏠",
    color: "bg-sun-100",
  },
  {
    title: "Learn As You Play",
    desc: "“Tell me and I forget, teach me and I may remember, involve me and I learn.” — Benjamin Franklin",
    icon: "🧩",
    color: "bg-blush-100",
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Features"
          title="Built for tiny tots, loved by parents"
          subtitle="Chirping Sparrows is deeply inspired by a broad, balanced approach to early childhood — every detail is designed around your child."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-3xl bg-cream border border-sun-100 hover:shadow-soft transition"
            >
              <div
                className={`h-14 w-14 rounded-2xl ${f.color} grid place-items-center text-3xl mb-4 group-hover:animate-wiggle`}
              >
                {f.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-ink-900">
                {f.title}
              </h3>
              <p className="mt-2 text-ink-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
