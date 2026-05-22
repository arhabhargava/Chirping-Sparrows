type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: Props) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <span className="inline-block px-3 py-1 rounded-full bg-sun-100 text-sun-600 font-display font-medium text-sm mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink-900 leading-tight">
        <span className="squiggle">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-ink-500 text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
