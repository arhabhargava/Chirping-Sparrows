const stats = [
  { v: "20+", l: "Qualified Teachers", c: "bg-sun-200 text-sun-600" },
  { v: "1000+", l: "Successful Kids", c: "bg-blush-200 text-blush-500" },
  { v: "950+", l: "Happy Parents", c: "bg-sky-200 text-sky-600" },
  { v: "12+", l: "Awards Won", c: "bg-leaf-200 text-leaf-600" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-ink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.05]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div
                className={`mx-auto h-20 w-20 rounded-3xl grid place-items-center font-display text-3xl font-semibold ${s.c}`}
              >
                {s.v}
              </div>
              <div className="mt-3 font-display text-lg">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
