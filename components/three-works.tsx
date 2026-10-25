"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";

export function ThreeWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = site.threeWorks.items;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="three-works"
      className="border-b border-line bg-paper-warm py-20 sm:py-28 lg:py-32"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end lg:gap-20">
          <div data-reveal>
            <SectionHeading
              number="04"
              label="3D & Visual Works / MHR3D"
              title="Sculpting form, light and motion."
            />
          </div>
          <p
            data-reveal
            className="max-w-md text-[15px] leading-relaxed text-muted lg:justify-self-end"
          >
            A curated stack of 3D renders, lookdev studies and animations built in
            Blender, Maya and KeyShot. Click any card to preview the motion loop and open directly on Instagram or Behance.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16">
          {/* Fanned Stack Deck with video GIF preview & redirect */}
          <div className="relative mx-auto w-full max-w-[420px] aspect-[3/4]">
            {items.map((work, index) => {
              let diff = (index - currentIndex + items.length) % items.length;
              if (diff > items.length / 2) diff -= items.length;

              const isActive = diff === 0;
              const absDiff = Math.abs(diff);

              const rotate = diff * 7;
              const scale = isActive ? 1 : Math.max(0.85, 1 - absDiff * 0.08);
              const translateX = diff * 22;
              const opacity = absDiff > 2 ? 0 : Math.max(0.2, 1 - absDiff * 0.35);
              const zIndex = items.length - absDiff;

              return (
                <div
                  key={work.href}
                  onClick={() => {
                    if (isActive) {
                      window.open(work.href, "_blank", "noreferrer,noopener");
                    } else {
                      setCurrentIndex(index);
                    }
                  }}
                  className="absolute inset-0 cursor-pointer overflow-hidden rounded-2xl border border-line-strong bg-night shadow-[0_24px_60px_-28px_rgba(20,19,17,.55)] transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group"
                  style={{
                    transform: `rotate(${rotate}deg) scale(${scale}) translateX(${translateX}px)`,
                    opacity,
                    zIndex,
                  }}
                >
                  <div className="absolute inset-0 bg-night">
                    <video
                      src={work.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,12,14,.92),rgba(12,12,14,.35)_50%,rgba(12,12,14,.2))] " />
                  </div>

                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                    <span className="rounded-full border border-white/25 bg-black/50 px-3 py-1 font-mono text-[8.5px] uppercase tracking-[0.14em] text-white backdrop-blur">
                      {work.platform}
                    </span>
                    <span className="font-mono text-[9px] text-white/70">
                      0{index + 1} / 05
                    </span>
                  </div>

                  <div className="absolute bottom-6 inset-x-6 z-10 text-white">
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-[#b9a8ff]">
                      {work.tag}
                    </p>
                    <h3 className="mt-1 font-serif text-[32px] leading-[1.05] tracking-[-0.03em]">
                      {work.title}
                    </h3>
                    <div className="mt-5 flex items-center justify-between pt-3.5 border-t border-white/20">
                      <span className="text-[12.5px] font-medium text-white/90 group-hover:text-[#b9a8ff] transition-colors">
                        {isActive ? `Click to open on ${work.platform} ↗` : `Bring to front`}
                      </span>
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition-transform group-hover:scale-110">
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls & Active Item Details */}
          <div data-reveal className="space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-line bg-paper px-3.5 py-1 font-mono text-[8.5px] uppercase tracking-[0.15em] text-violet">
                  {items[currentIndex].platform}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  Study 0{currentIndex + 1} of 05
                </span>
              </div>
              <h3 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-none tracking-[-0.035em] text-ink">
                {items[currentIndex].title}
              </h3>
              <p className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.14em] text-violet">
                {items[currentIndex].tag}
              </p>
              <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-muted">
                Explore this 3D lookdev study, lighting setup, and motion composition
                published on {items[currentIndex].platform}. Click the card or button below to view the original post.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={items[currentIndex].href}
                target="_blank"
                rel="noreferrer noopener"
                className="button-primary"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Open on {items[currentIndex].platform} ↗
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous work"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line-strong bg-paper text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next work"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line-strong bg-paper text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Quick selector dots */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-line">
              {items.map((w, i) => (
                <button
                  key={w.href}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to item ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-8 bg-violet"
                      : "w-2.5 bg-line-strong hover:bg-muted"
                  }`}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-line">
              <a
                href={site.threeWorks.instagramProfile}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-[12px] font-medium text-ink"
              >
                Instagram: @mhr_3d
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
              <a
                href={site.threeWorks.behanceProfile}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-[12px] font-medium text-ink"
              >
                Behance: mahirfarian
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
