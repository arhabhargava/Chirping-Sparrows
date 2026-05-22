type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export default function PageHeader({ title, subtitle, eyebrow }: Props) {
  return (
    <section className="relative bg-gradient-to-b from-cream to-white pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-sun-200 opacity-40 blur-2xl" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-blush-200 opacity-40 blur-2xl" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <span className="inline-block px-3 py-1 rounded-full bg-sun-100 text-sun-600 font-display font-medium text-sm mb-3">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink-900 leading-tight">
          <span className="squiggle">{title}</span>
        </h1>
        {subtitle && (
          <p className="mt-5 text-ink-500 text-lg leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
