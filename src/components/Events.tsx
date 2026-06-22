import SectionHeading from "./SectionHeading";

const events = [
  {
    title: "Pre-Nursery Annual Day",
    date: "22 March 2025",
    time: "10 am onwards",
    color: "bg-sun-100",
    icon: "🎉",
  },
  {
    title: "8th Annual Day — Jashn-e-Azadi: League of Freedom Fighters",
    date: "14 December 2024",
    time: "Auditorium, ABES Engineering College, Crossings Republik, Ghaziabad",
    color: "bg-blush-100",
    icon: "🇮🇳",
  },
  {
    title: "Annual Day — Rama is Culture, We are its Carriers",
    date: "9 March 2024",
    time: "10:30 am — BLS World School, Greater Noida West",
    color: "bg-sky-100",
    icon: "🪔",
  },
  {
    title: "Annual Day — Bhaj Govindam",
    date: "21 October 2023",
    time: "10:30 am — Nursery, KG and Class 1",
    color: "bg-leaf-100",
    icon: "🎶",
  },
  {
    title: "Tradition — Mahoro Rajasthanan",
    date: "25 February 2023",
    time: "Annual celebration",
    color: "bg-sun-100",
    icon: "🪘",
  },
  {
    title: "6th Annual Day",
    date: "17 December 2022",
    time: "10:30 am onwards — Nursery",
    color: "bg-blush-100",
    icon: "🎤",
  },
];

export default function Events() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Events"
          title="A few of our favourite memories"
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((e) => (
            <article
              key={e.title}
              className="group bg-white rounded-3xl p-6 hover:shadow-soft transition border border-sun-100"
            >
              <div
                className={`h-14 w-14 ${e.color} rounded-2xl grid place-items-center text-3xl group-hover:animate-wiggle`}
              >
                {e.icon}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink-900 leading-snug">
                {e.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500">{e.date}</p>
              <p className="text-sm text-ink-700">{e.time}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
