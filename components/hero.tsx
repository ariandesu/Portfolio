import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { WireframeOrb } from "@/components/wireframe-orb";
import { site } from "@/content/site";

function delay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-0 pt-[calc(var(--header-height)+22px)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[78%] overflow-hidden">
        <div className="hairline-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="absolute -right-[8%] top-[6%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(185,168,255,.34),transparent_65%)] blur-2xl" />
        <div className="absolute left-[32%] top-[30%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(91,75,230,.10),transparent_68%)] blur-2xl" />
      </div>

      <div className="shell relative">
        <div className="grid items-end gap-12 pb-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-10 lg:pb-20 xl:gap-16">
          <div className="relative z-10">
            <div
              data-reveal
              style={delay(40)}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <span className="eyebrow text-violet">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-30" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
                </span>
                {site.availability}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted">
                {site.hero.eyebrow}
              </span>
            </div>

            <h1
              id="hero-heading"
              data-reveal
              style={delay(100)}
              className="display mt-8 text-[clamp(3.25rem,8.9vw,8.4rem)] text-ink"
            >
              {site.hero.headline}
              <br />
              <em>{site.hero.headlineAccent}</em>
              <br />
              <span className="text-[0.88em]">{site.hero.headlineEnd}</span>
            </h1>

            <p
              data-reveal
              style={delay(180)}
              className="mt-7 max-w-[46ch] text-[17px] leading-[1.7] tracking-[-0.012em] text-muted sm:text-[18px]"
            >
              {site.hero.intro}
            </p>

            <div
              data-reveal
              style={delay(250)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link href="#projects" className="button-primary">
                View selected work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="/Mahir-Faisal-Resume.pdf"
                download
                className="button-secondary"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>

            <div
              data-reveal
              style={delay(320)}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <SocialLinks />
              <span className="hidden h-px w-8 bg-line-strong sm:block" aria-hidden="true" />
              <a
                href={`mailto:${site.email}`}
                className="link-underline text-[12px] font-medium text-muted hover:text-ink"
              >
                {site.email}
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div
            data-reveal
            style={delay(220)}
            className="relative mx-auto w-full max-w-[470px] lg:max-w-none"
          >
            <WireframeOrb className="pointer-events-none absolute -right-12 -top-16 z-0 h-[280px] w-[280px] text-violet/45 sm:-right-16 sm:h-[360px] sm:w-[360px]" />

            <div className="relative z-10 ml-auto w-[92%] max-w-[430px]">
              <div
                className="absolute -inset-3 rounded-[30px] bg-lavender/40"
                aria-hidden="true"
              />
              <figure className="relative overflow-hidden rounded-[24px] border border-line-strong bg-paper-deep shadow-[0_28px_70px_-34px_rgba(20,19,17,.5)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/portrait.jpg"
                    alt="Portrait of Mahir Faisal in Chattogram"
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 430px"
                    className="object-cover object-[50%_38%] saturate-[.88] contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,12,14,.34),transparent_38%)]" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-night/45 px-3 py-1.5 font-mono text-[8.5px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-lavender" />
                    MHR3D / 2026
                  </div>
                  <figcaption className="absolute inset-x-4 bottom-4 hidden items-end justify-between gap-4 sm:flex">
                    <span className="text-[11px] leading-tight text-white/80">
                      Mahir Faisal
                      <br />
                      <span className="text-white/55">Chattogram, Bangladesh</span>
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/55">
                      Fig. 01
                    </span>
                  </figcaption>
                </div>
              </figure>

              <div className="relative z-20 -mt-7 ml-[-9%] w-[88%] rounded-2xl border border-line bg-paper/95 p-4 shadow-[0_18px_45px_-28px_rgba(20,19,17,.55)] backdrop-blur sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-violet-soft text-violet">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.15em] text-muted">
                      Currently
                    </p>
                    <p className="mt-1 text-[12.5px] font-medium leading-snug text-ink">
                      Building ShareFlow & finishing CSE at USTC
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-line pt-3">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
                      Study
                    </p>
                    <p className="mt-1 text-[11px] font-medium">CSE · 2027</p>
                  </div>
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
                      3D since
                    </p>
                    <p className="mt-1 text-[11px] font-medium">2022</p>
                  </div>
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
                      Timezone
                    </p>
                    <p className="mt-1 text-[11px] font-medium">UTC+6</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#about"
              className="mt-7 ml-auto flex w-[92%] max-w-[430px] items-center justify-between gap-4 border-t border-line pt-4 text-[10px] font-mono uppercase tracking-[0.14em] text-muted transition-colors duration-300 hover:text-ink"
            >
              Scroll to explore
              <ArrowDown className="bounce-soft h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="marquee-wrap relative overflow-hidden border-y border-line bg-paper-warm/70">
        <div className="marquee-track py-3.5">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {site.ticker.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-5 px-6 font-mono text-[9px] uppercase tracking-[0.17em] text-muted"
                >
                  {item}
                  <span className="h-1 w-1 rounded-full bg-violet/50" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
