import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  FlaskConical,
  Lock,
} from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";

export function Experiments() {
  return (
    <section
      id="experiments"
      className="border-t border-line bg-paper-warm py-20 sm:py-24 lg:py-28"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end lg:gap-20">
          <div data-reveal>
            <SectionHeading
              number="07"
              label="Experiments / Side quests"
              title="Off the main path."
            />
          </div>
          <p
            data-reveal
            className="max-w-md text-[14px] leading-relaxed text-muted lg:justify-self-end"
          >
            Not every idea needs to become a case study. These are prototypes,
            notebooks and late-night builds that taught me something useful.
          </p>
        </div>

        <ul className="mt-12 border-t border-line">
          {site.experiments.map((experiment, index) => {
            const href = experiment.href;
            const icon =
              experiment.linkLabel === "GitHub" ? (
                <GithubIcon className="h-3.5 w-3.5" />
              ) : experiment.linkLabel === "Private" ? (
                <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              );

            const content = (
              <>
                <span className="hidden pt-1 font-mono text-[9px] tracking-[0.12em] text-muted sm:block">
                  0{index + 1}
                </span>
                <span>
                  <span className="flex items-center gap-2.5">
                    <span className="font-serif text-[clamp(1.6rem,2.7vw,2.2rem)] leading-none tracking-[-0.025em] text-ink transition-colors duration-300 group-hover:text-violet">
                      {experiment.name}
                    </span>
                    <FlaskConical
                      className="h-3 w-3 text-line-strong transition-colors duration-300 group-hover:text-violet/60"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="mt-2 block max-w-[54ch] text-[13px] leading-relaxed text-muted">
                    {experiment.description}
                  </span>
                </span>
                <span className="font-mono text-[8.5px] uppercase leading-relaxed tracking-[0.11em] text-muted">
                  {experiment.meta}
                </span>
                <span className="flex items-center gap-2 text-[11px] font-medium text-muted transition-colors duration-300 group-hover:text-ink sm:justify-end">
                  {icon}
                  {experiment.linkLabel}
                  {href ? (
                    <ArrowUpRight
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  ) : null}
                </span>
              </>
            );

            return (
              <li
                key={experiment.name}
                data-reveal
                style={{ "--reveal-delay": `${index * 45}ms` } as CSSProperties}
                className="border-b border-line"
              >
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group grid gap-3 py-5 transition-colors duration-300 hover:bg-paper/60 sm:grid-cols-[2rem_1fr_.72fr_auto] sm:items-start sm:gap-6 sm:px-2 lg:px-3"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="group grid gap-3 py-5 sm:grid-cols-[2rem_1fr_.72fr_auto] sm:items-start sm:gap-6 sm:px-2 lg:px-3">
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
