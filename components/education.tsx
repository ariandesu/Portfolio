import type { CSSProperties } from "react";
import { Award, GraduationCap, Languages, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";

export function Education() {
  return (
    <section id="education" className="border-b border-line py-20 sm:py-28 lg:py-32">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end lg:gap-20">
          <div data-reveal>
            <SectionHeading
              number="05"
              label="Education / Foundations"
              title="Formal study, applied curiosity."
            />
          </div>
          <p
            data-reveal
            className="max-w-md text-[15px] leading-relaxed text-muted lg:justify-self-end"
          >
            A computer science degree gives the vocabulary. Building things
            gives it meaning. I try to keep both moving at once.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
          <div className="relative">
            <div
              className="absolute bottom-2 left-[7px] top-2 w-px bg-line sm:left-[9px]"
              aria-hidden="true"
            />
            <ul className="space-y-10">
              {site.education.map((item, index) => (
                <li
                  key={item.institution}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
                  className="relative pl-8 sm:pl-11"
                >
                  <span
                    className="absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border border-violet bg-paper sm:h-[19px] sm:w-[19px]"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-violet sm:h-2 sm:w-2" />
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-line bg-paper-warm px-3 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                      {item.status}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="mt-3 max-w-[24ch] font-serif text-[clamp(1.85rem,3.4vw,2.9rem)] leading-[1.02] tracking-[-0.035em] text-ink">
                    {item.degree}
                  </h3>
                  <p className="mt-2.5 text-[14px] font-medium text-ink-soft">
                    {item.institution}
                  </p>
                  {item.location ? (
                    <p className="mt-1 flex items-center gap-1.5 text-[11px] text-muted">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {item.location}
                    </p>
                  ) : null}
                  <ul className="mt-4 max-w-[52ch] space-y-1.5">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-2.5 text-[12.5px] leading-relaxed text-muted"
                      >
                        <span
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-line-strong"
                          aria-hidden="true"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div
              data-reveal
              className="rounded-2xl border border-line bg-paper-warm p-5 sm:p-6"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-violet-soft text-violet">
                  <Award className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  Certifications
                </h3>
              </div>
              <ul className="mt-5 divide-y divide-line">
                {site.certifications.map((certification) => (
                  <li
                    key={certification.title}
                    className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <GraduationCap
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet/70"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[12.5px] font-medium leading-snug text-ink">
                        {certification.title}
                      </p>
                      {certification.issuer ? (
                        <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
                          {certification.issuer}
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div
              data-reveal
              className="rounded-2xl border border-line bg-paper p-5 sm:p-6"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#e5f1ed] text-[#22685f]">
                  <Languages className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  Languages
                </h3>
              </div>
              <dl className="mt-5 space-y-3">
                {site.languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-baseline justify-between gap-4 border-b border-line/70 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-[13px] font-medium text-ink">
                      {language.name}
                    </dt>
                    <dd className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                      {language.level}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div
              data-reveal
              className="rounded-2xl border border-dashed border-line-strong p-5 sm:p-6"
            >
              <p className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-muted">
                Currently learning
              </p>
              <p className="mt-3 font-serif text-[24px] leading-[1.1] tracking-[-0.025em] text-ink">
                Better systems,
                <br />
                <em className="text-violet">clearer interfaces.</em>
              </p>
              <p className="mt-3 text-[12px] leading-relaxed text-muted">
                Deepening my work in distributed systems, GPU rendering and
                applied machine learning — one small experiment at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
