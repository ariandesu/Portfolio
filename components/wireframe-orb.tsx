export function WireframeOrb({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="0.8" opacity="0.36">
        <circle cx="210" cy="210" r="132" />
        <ellipse cx="210" cy="210" rx="132" ry="47" />
        <ellipse
          cx="210"
          cy="210"
          rx="132"
          ry="47"
          transform="rotate(60 210 210)"
        />
        <ellipse
          cx="210"
          cy="210"
          rx="132"
          ry="47"
          transform="rotate(120 210 210)"
        />
        <ellipse
          cx="210"
          cy="210"
          rx="47"
          ry="132"
          transform="rotate(30 210 210)"
        />
      </g>
      <g className="orbit" stroke="currentColor" strokeWidth="0.8" opacity="0.6">
        <circle cx="210" cy="78" r="4" fill="currentColor" />
        <circle cx="342" cy="210" r="2.5" fill="currentColor" />
        <path d="M210 78 L342 210" strokeDasharray="3 7" />
      </g>
      <g
        className="orbit-reverse"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.5"
      >
        <circle cx="110" cy="300" r="3" fill="currentColor" />
        <circle cx="292" cy="104" r="2" fill="currentColor" />
        <path d="M110 300 L292 104" strokeDasharray="2 6" />
      </g>
      <circle cx="210" cy="210" r="3.5" fill="currentColor" opacity="0.7" />
      <circle
        cx="210"
        cy="210"
        r="9"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
    </svg>
  );
}
