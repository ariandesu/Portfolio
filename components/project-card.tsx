import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import type { Project } from "@/content/projects";

const accents = {
  violet: {
    hex: "#5b4be6",
    soft: "bg-violet-soft",
    bar: "bg-violet",
    text: "text-violet",
  },
  sky: {
    hex: "#4269b0",
    soft: "bg-[#e8edf7]",
    bar: "bg-[#4269b0]",
    text: "text-[#355b9d]",
  },
  emerald: {
    hex: "#2d7f76",
    soft: "bg-[#e5f1ed]",
    bar: "bg-[#2d7f76]",
    text: "text-[#22685f]",
  },
} as const;

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const accent = accents[project.accent];
  const reverse = index % 2 === 1;
  const host = new URL(project.liveUrl).hostname.replace(/^www\./, "");
  const visibleStack = project.stack.slice(0, 5);
  const remaining = project.stack.length - visibleStack.length;

  return (
    <article
      className="project-card group border-t border-line py-10 sm:py-14 lg:py-16"
      style={{ "--accent": accent.hex } as CSSProperties}
    >
      <div
        className={`grid gap-8 lg:items-center lg:gap-12 xl:gap-16 ${
          reverse
            ? "lg:grid-cols-[.86fr_1.14fr]"
            : "lg:grid-cols-[1.14fr_.86fr]"
        }`}
      >
        <div className={reverse ? "lg:order-1" : "lg:order-2"}>
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-3">
              <span className={`h-1.5 w-1.5 rounded-full ${accent.bar}`} />
              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                {project.category}
              </span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
              0{index + 1} / 03
            </span>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="mt-5 inline-block"
          >
            <h3 className="project-title display text-[clamp(3.2rem,7vw,6.4rem)] text-ink">
              {project.title}
            </h3>
          </Link>

          <p className="mt-4 max-w-[46ch] font-serif text-[clamp(1.25rem,2.1vw,1.65rem)] leading-[1.25] tracking-[-0.02em] text-ink-soft">
            {project.subtitle}
          </p>

          <p className="mt-4 max-w-[54ch] text-[13.5px] leading-[1.8] text-muted">
            {project.summary.split(". ").slice(0, 1).join(". ")}.
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Main stack">
            {visibleStack.map((item) => (
              <li
                key={item}
                className={`rounded-full border border-line px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.09em] text-muted transition-colors duration-300 group-hover:border-line-strong ${accent.soft}`}
              >
                {item}
              </li>
            ))}
            {remaining > 0 ? (
              <li className="rounded-full border border-line px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.09em] text-muted">
                +{remaining}
              </li>
            ) : null}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-5">
            <Link
              href={`/projects/${project.slug}`}
              className="group/link inline-flex items-center gap-2 text-[12px] font-semibold text-ink transition-colors duration-300 hover:text-[var(--accent)]"
            >
              Read case study
              <span className="arrow-chip h-7 w-7">
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </span>
            </Link>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline text-[11px] font-medium text-muted hover:text-ink"
            >
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
              Live site
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline text-[11px] font-medium text-muted hover:text-ink"
            >
              <GithubIcon className="h-3 w-3" />
              GitHub
            </a>
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          aria-label={`Open the ${project.title} case study`}
          className={`relative block ${reverse ? "lg:order-2" : "lg:order-1"}`}
        >
          <div className="project-cover overflow-hidden rounded-xl border border-line-strong bg-paper-deep shadow-[0_20px_55px_-42px_rgba(20,19,17,.45)] transition-all duration-500 group-hover:border-line-strong group-hover:shadow-[0_28px_70px_-42px_rgba(20,19,17,.5)]">
            <div className="flex h-8 items-center justify-between gap-3 border-b border-line bg-[#f1efe8] px-3.5">
              <span className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4d0c6]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4d0c6]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4d0c6]" />
              </span>
              <span className="truncate font-mono text-[7.5px] tracking-[0.04em] text-muted">
                {host}
              </span>
              <span className="w-4" aria-hidden="true" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,12,14,.13),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-3 right-3 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-paper/95 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-ink opacity-0 shadow-sm backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                View case study
                <ArrowUpRight className="h-2.5 w-2.5" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div
            className="absolute -bottom-1.5 -left-1.5 -z-10 h-full w-full rounded-xl border border-line"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
