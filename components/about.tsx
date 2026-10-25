import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="border-t border-line py-20 sm:py-28 lg:py-36">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 xl:gap-24">
          <div>
            <div data-reveal>
              <SectionHeading
                number="01"
                label="About / The person"
                title="A builder with a soft spot for strange ideas."
              />
            </div>

            <div className="mt-9 max-w-[62ch] space-y-5 text-[15.5px] leading-[1.8] text-ink-soft sm:text-[16.5px]">
              {site.about.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 24)}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 60}ms` } as CSSProperties}
                  className={index === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-[3.8rem] first-letter:leading-[0.72] first-letter:text-violet" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              data-reveal
              className="mt-9 flex flex-wrap gap-2"
              aria-label="Interests"
            >
              {site.about.hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="rounded-full border border-line bg-paper-warm px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.13em] text-muted"
                >
                  {hobby}
                </span>
              ))}
            </div>

            <figure
              data-reveal
              className="mt-10 border-l-2 border-violet pl-5"
            >
              <Quote className="h-4 w-4 text-violet" aria-hidden="true" />
              <blockquote className="mt-2 max-w-[42ch] font-serif text-[clamp(1.45rem,2.4vw,2rem)] leading-[1.18] tracking-[-0.025em] text-ink">
                The most interesting problems live where the interface meets the
                system.
              </blockquote>
              <figcaption className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                A working principle
              </figcaption>
            </figure>
          </div>

          <div className="relative">
            <div
              data-reveal
              className="sticky top-[calc(var(--header-height)+28px)]"
            >
              <figure className="group relative">
                <div className="absolute -inset-2.5 rounded-[26px] bg-paper-deep" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[20px] border border-line-strong bg-paper-deep">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src="/images/mahir-cat.jpg"
                      alt="Mahir Faisal with his cat in a full-frame portrait"
                      fill
                      sizes="(max-width: 1024px) 92vw, 460px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,12,14,.38),transparent_46%)]" />
                    <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white">
                      <span className="max-w-[18ch] font-serif text-[22px] leading-[1.05] tracking-[-0.03em]">
                        Studio assistant.
                        <br />
                        <span className="italic text-white/70">Uncredited.</span>
                      </span>
                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/55">
                        Fig. 02
                      </span>
                    </figcaption>
                  </div>
                </div>
              </figure>

              <div
                data-reveal
                className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6"
              >
                {site.about.facts.map((fact) => (
                  <div key={fact.label}>
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.15em] text-muted">
                      {fact.label}
                    </p>
                    <p className="mt-1.5 text-[13px] font-medium leading-snug text-ink">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-line pt-12 sm:mt-24 lg:mt-28">
          <div className="grid gap-8 lg:grid-cols-[.46fr_1fr] lg:gap-16">
            <div data-reveal>
              <p className="eyebrow text-violet">Beyond the code</p>
              <h3 className="display mt-5 text-[clamp(2rem,3.2vw,3rem)] text-ink">
                Leadership &amp;
                <br />
                <em>community.</em>
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
                The work outside the editor: representing platforms on campus,
                connecting students, and helping communities run.
              </p>
              <a
                href={site.socials[1].href}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline mt-6 inline-flex text-[12px] font-medium text-ink"
              >
                Connect on LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>

            <ul className="divide-y divide-line border-y border-line">
              {site.about.leadership.map((item, index) => (
                <li
                  key={`${item.organisation}-${item.role}`}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 45}ms` } as CSSProperties}
                  className="group grid gap-3 py-5 sm:grid-cols-[1.05fr_1fr] sm:gap-8"
                >
                  <div>
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-muted">
                      {item.period}
                    </p>
                    <p className="mt-1.5 text-[15px] font-medium tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-violet">
                      {item.role}
                    </p>
                    <p className="mt-0.5 text-[13px] text-muted">
                      {item.organisation}
                    </p>
                  </div>
                  <p className="max-w-[40ch] text-[13px] leading-relaxed text-muted">
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
