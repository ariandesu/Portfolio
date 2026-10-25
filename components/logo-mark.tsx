export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative grid aspect-square place-items-center overflow-hidden rounded-full border border-current/15 bg-violet text-white ${className}`}
      aria-hidden="true"
    >
      <span className="font-serif text-[1.15em] leading-none tracking-[-0.08em]">
        M
      </span>
      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-lavender" />
    </span>
  );
}
