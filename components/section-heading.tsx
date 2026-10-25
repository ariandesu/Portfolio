type SectionHeadingProps = {
  number: string;
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  number,
  label,
  title,
  description,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div
        className={`flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.16em] ${
          dark ? "text-night-muted" : "text-muted"
        }`}
      >
        <span>{number}</span>
        <span
          className={`h-px flex-1 ${dark ? "bg-night-line" : "bg-line"}`}
          aria-hidden="true"
        />
        <span>{label}</span>
      </div>
      <h2
        className={`display mt-7 max-w-[17ch] text-[clamp(2.7rem,5.4vw,5.2rem)] ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-xl text-[15px] leading-relaxed ${
            dark ? "text-night-muted" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
