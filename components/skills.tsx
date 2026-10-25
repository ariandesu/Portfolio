import type { CSSProperties } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";

const groupStyles = [
  {
    accent: "bg-violet",
    soft: "bg-violet-soft",
    text: "text-violet",
    bar: "bg-violet",
  },
  {
    accent: "bg-[#c96f3b]",
    soft: "bg-[#f7e9df]",
    text: "text-[#a75325]",
    bar: "bg-[#c96f3b]",
  },
  {
    accent: "bg-[#2d7f76]",
    soft: "bg-[#e5f1ed]",
    text: "text-[#22685f]",
    bar: "bg-[#2d7f76]",
  },
  {
    accent: "bg-[#4269b0]",
    soft: "bg-[#e8edf7]",
    text: "text-[#355b9d]",
    bar: "bg-[#4269b0]",
  },
] as const;

const levels = {
  Daily: 3,
  Comfortable: 2,
  Exploring: 1,
} as const;

const extraTools = [
  "Vite",
  "Framer Motion",
  "Zustand",
  "BetterAuth",
  "Appwrite",
  "Recharts",
  "PDF-Lib",
  "Wrangler",
  "Postman",
  "Git",
  "Figma",
  "After Effects",
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-line bg-paper-warm py-20 sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full border border-line-strong/60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-32 h-[300px] w-[300px] rounded-full border border-line-strong/50"
        aria-hidden="true"
      />
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end lg:gap-20">
          <div data-reveal>
            <SectionHeading
              number="02"
              label="Skills / Capabilities"
              title="A stack chosen for making things real."
            />
          </div>
          <p
            data-reveal
            className="max-w-md text-[15px] leading-relaxed text-muted lg:justify-self-end"
          >
            I like tools that stay out of the way. The through-line is
            shipping: from a quick interface to the edge logic, the 3D scene
            and the model that sits behind it.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {site.skills.map((group, groupIndex) => {
            const style = groupStyles[groupIndex];
            return (
              <article
                key={group.title}
                data-reveal
                style={{ "--reveal-delay": `${groupIndex * 70}ms` } as CSSProperties}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-paper p-5 transition-all duration-500 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_22px_50px_-36px_rgba(20,19,17,.45)] sm:p-7"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${style.accent} opacity-80`}
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p
                      className={`font-mono text-[8.5px] uppercase tracking-[0.17em] ${style.text}`}
                    >
                      {group.kicker}
                    </p>
                    <h3 className="mt-2 font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-none tracking-[-0.03em] text-ink">
                      {group.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-muted">
                    0{groupIndex + 1}
                  </span>
                </div>

                <p className="mt-4 max-w-[38ch] text-[13px] leading-relaxed text-muted">
                  {group.description}
                </p>

                <ul className="mt-6 grid gap-x-6 gap-y-0 border-t border-line sm:grid-cols-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-3 border-b border-line/80 py-2.5"
                    >
                      <span className="flex min-w-0 items-center gap-2.5">
                        {skill.icon ? (
                          <span
                            className={`grid h-6 w-6 shrink-0 place-items-center rounded-md ${style.soft}`}
                          >
                            <Image
                              src={`/icons/${skill.icon}.svg`}
                              alt=""
                              width={13}
                              height={13}
                              className="opacity-65"
                              unoptimized
                            />
                          </span>
                        ) : (
                          <span
                            className={`grid h-6 w-6 shrink-0 place-items-center rounded-md ${style.soft} font-mono text-[8px] ${style.text}`}
                            aria-hidden="true"
                          >
                            {skill.name.slice(0, 2)}
                          </span>
                        )}
                        <span className="text-[12.5px] font-medium leading-snug tracking-[-0.01em] text-ink-soft">
                          {skill.name}
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-2">
                        <span className="font-mono text-[7.5px] uppercase tracking-[0.11em] text-muted">
                          {skill.level}
                        </span>
                        <span
                          className="flex gap-1"
                          aria-label={`Proficiency: ${skill.level}`}
                        >
                          {[1, 2, 3].map((segment) => (
                            <span
                              key={segment}
                              className={`h-1 w-2.5 rounded-full ${
                                segment <= levels[skill.level]
                                  ? style.bar
                                  : "bg-line"
                              } ${segment <= levels[skill.level] ? "opacity-80" : ""}`}
                              aria-hidden="true"
                            />
                          ))}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div
          data-reveal
          className="mt-10 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-start sm:justify-between"
        >
          <p className="shrink-0 font-mono text-[8.5px] uppercase tracking-[0.16em] text-muted">
            Also in the toolbox
          </p>
          <ul className="flex max-w-3xl flex-wrap gap-x-5 gap-y-2">
            {extraTools.map((tool) => (
              <li
                key={tool}
                className="text-[11px] text-muted transition-colors duration-300 hover:text-ink"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
