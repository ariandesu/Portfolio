import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { site } from "@/content/site";
import { getNextProject, getProject, projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const accentMap = {
  violet: { hex: "#5b4be6", soft: "bg-violet-soft", text: "text-violet" },
  sky: { hex: "#4269b0", soft: "bg-[#e8edf7]", text: "text-[#355b9d]" },
  emerald: { hex: "#2d7f76", soft: "bg-[#e5f1ed]", text: "text-[#22685f]" },
} as const;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — ${project.category}`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${project.title} — ${project.category}`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [
        {
          url: project.image,
          width: 1400,
          height: 875,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.category}`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const accent = accentMap[project.accent];
  const nextProject = getNextProject(project.slug);
  const liveHost = new URL(project.liveUrl).hostname.replace(/^www\./, "");

  return (
    <main
      id="main"
      className="pt-[calc(var(--header-height)+34px)]"
      style={{ "--accent": accent.hex } as CSSProperties}
    >
      <article>
        <div className="shell">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted transition-colors duration-300 hover:text-ink"
            >
              <ArrowLeft
                className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              All projects
            </Link>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              Case study · {project.year}
            </span>
          </div>

          <header className="grid gap-8 pb-10 pt-10 lg:grid-cols-[1.12fr_.88fr] lg:items-end lg:gap-16 lg:pb-14 lg:pt-14">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center gap-2 rounded-full ${accent.soft} px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] ${accent.text}`}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: accent.hex }}
                  />
                  {project.category}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  {project.timeline}
                </span>
              </div>

              <h1 className="display mt-6 text-[clamp(3.6rem,10vw,9rem)] text-ink">
                {project.title}
              </h1>
              <p className="mt-5 max-w-[44ch] font-serif text-[clamp(1.35rem,2.5vw,2rem)] leading-[1.22] tracking-[-0.025em] text-ink-soft">
                {project.subtitle}
              </p>
            </div>

            <div className="border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <dl className="grid grid-cols-2 gap-x-5 gap-y-5">
                <div>
                  <dt className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                    Role
                  </dt>
                  <dd className="mt-1.5 text-[12.5px] font-medium leading-snug text-ink">
                    {project.role}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                    Stack
                  </dt>
                  <dd className="mt-1.5 text-[12.5px] font-medium leading-snug text-ink">
                    {project.stack.length} tools
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                    Live at
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-underline break-all text-[12.5px] font-medium text-ink hover:text-[var(--accent)]"
                    >
                      {liveHost}
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-primary !min-h-[42px] !px-4 text-[11px]"
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  Live project
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="button-secondary !min-h-[42px] !px-4 text-[11px]"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </header>
        </div>

        <div className="shell">
          <figure
            data-reveal
            className="relative overflow-hidden rounded-xl border border-line-strong bg-paper-deep shadow-[0_25px_80px_-50px_rgba(20,19,17,.5)]"
          >
            <div className="flex h-9 items-center justify-between gap-3 border-b border-line bg-[#f1efe8] px-4">
              <span className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4d0c6]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4d0c6]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4d0c6]" />
              </span>
              <span className="truncate font-mono text-[8px] tracking-[0.04em] text-muted">
                {liveHost}
              </span>
              <span className="w-4" aria-hidden="true" />
            </div>
            <div className="relative aspect-[16/9]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1152px"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="absolute bottom-3 right-3 rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[7.5px] uppercase tracking-[0.12em] text-muted backdrop-blur">
              Live interface
            </figcaption>
          </figure>
        </div>

        <div className="shell py-14 sm:py-20 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[.32fr_.68fr] lg:gap-16 xl:gap-24">
            <aside className="lg:sticky lg:top-[calc(var(--header-height)+30px)] lg:self-start">
              <div className="rounded-2xl border border-line bg-paper-warm p-5">
                <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                  Main stack
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-paper px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-2 border-t border-line pt-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-between gap-3 text-[11px] font-medium text-ink transition-colors duration-300 hover:text-[var(--accent)]"
                  >
                    Live project
                    <ArrowUpRight
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-between gap-3 text-[11px] font-medium text-ink transition-colors duration-300 hover:text-[var(--accent)]"
                  >
                    Source on GitHub
                    <ArrowUpRight
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-dashed border-line-strong p-5">
                <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                  Want the short version?
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">
                  The Resume collects the essentials. The case studies hold the
                  decisions.
                </p>
                <a
                  href="/Mahir-Faisal-Resume.pdf"
                  download
                  className="link-underline mt-4 inline-flex text-[11px] font-medium text-ink"
                >
                  Download Resume
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </aside>

            <div className="min-w-0">
              <section data-reveal>
                <p className="eyebrow text-[var(--accent)]">Overview</p>
                <p className="mt-5 max-w-[62ch] font-serif text-[clamp(1.45rem,2.7vw,2.15rem)] leading-[1.38] tracking-[-0.02em] text-ink">
                  {project.summary}
                </p>
              </section>

              <section data-reveal className="mt-14">
                <p className="eyebrow text-muted">The problem</p>
                <blockquote className="mt-5 border-l-2 border-[var(--accent)] pl-5 sm:pl-7">
                  <p className="max-w-[56ch] font-serif text-[clamp(1.25rem,2.3vw,1.8rem)] leading-[1.35] tracking-[-0.02em] text-ink-soft">
                    {project.problem}
                  </p>
                </blockquote>
              </section>

              <section data-reveal className="mt-16">
                <div className="flex items-end justify-between gap-5 border-b border-line pb-4">
                  <div>
                    <p className="eyebrow text-muted">What I built</p>
                    <h2 className="mt-4 font-serif text-[clamp(2rem,3.5vw,2.9rem)] leading-none tracking-[-0.035em] text-ink">
                      The product, piece by piece.
                    </h2>
                  </div>
                  <span className="hidden font-mono text-[9px] text-muted sm:block">
                    {String(project.features.length).padStart(2, "0")} features
                  </span>
                </div>

                <ul className="mt-2">
                  {project.features.map((feature, index) => (
                    <li
                      key={feature.title}
                      className="group grid gap-2 border-b border-line py-5 sm:grid-cols-[2.3rem_1fr] sm:gap-5"
                    >
                      <span className="font-mono text-[9px] text-muted">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-[14px] font-semibold tracking-[-0.01em] text-ink">
                          {feature.title}
                        </h3>
                        <p className="mt-1.5 max-w-[60ch] text-[13px] leading-relaxed text-muted">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section data-reveal className="mt-16">
                <p className="eyebrow text-muted">The hard parts</p>
                <h2 className="mt-4 font-serif text-[clamp(2rem,3.5vw,2.9rem)] leading-none tracking-[-0.035em] text-ink">
                  Challenges &amp; decisions.
                </h2>

                <div className="mt-7 grid gap-3">
                  {project.challenges.map((challenge, index) => (
                    <article
                      key={challenge.title}
                      className="group rounded-2xl border border-line bg-paper-warm p-5 transition-colors duration-300 hover:border-line-strong sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${accent.soft} font-mono text-[8px] ${accent.text}`}
                        >
                          0{index + 1}
                        </span>
                        <div>
                          <h3 className="text-[14px] font-semibold tracking-[-0.01em] text-ink">
                            {challenge.title}
                          </h3>
                          <p className="mt-2 max-w-[62ch] text-[13px] leading-[1.75] text-muted">
                            {challenge.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section data-reveal className="mt-16">
                <p className="eyebrow text-muted">What&apos;s next</p>
                <h2 className="mt-4 font-serif text-[clamp(2rem,3.5vw,2.9rem)] leading-none tracking-[-0.035em] text-ink">
                  Potential improvements.
                </h2>
                <ul className="mt-7 grid gap-0 border-t border-line">
                  {project.improvements.map((improvement) => (
                    <li
                      key={improvement}
                      className="flex items-start gap-3 border-b border-line py-3.5"
                    >
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent)]"
                        aria-hidden="true"
                      />
                      <span className="text-[13px] leading-relaxed text-ink-soft">
                        {improvement}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {project.note ? (
                <aside
                  data-reveal
                  className="mt-10 flex items-start gap-3 rounded-2xl border border-line bg-paper-warm p-5"
                >
                  <Sparkles
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                      A note on the build
                    </p>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-muted">
                      {project.note}
                    </p>
                  </div>
                </aside>
              ) : null}
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-line bg-paper-warm">
        <div className="shell py-10 sm:py-14">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="font-mono text-[8.5px] uppercase tracking-[0.15em] text-muted">
                Next case study
              </p>
              <h2 className="mt-3 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-[-0.04em] text-ink transition-colors duration-300 group-hover:text-violet">
                {nextProject.title}
              </h2>
              <p className="mt-2 text-[12px] text-muted">
                {nextProject.category} · {nextProject.year}
              </p>
            </div>
            <span className="grid h-12 w-12 place-items-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="shell py-10 sm:py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg font-serif text-[clamp(1.4rem,2.5vw,2rem)] leading-[1.2] tracking-[-0.025em] text-ink">
              Want to work on something{" "}
              <em className="text-violet">like this?</em>
            </p>
            <a
              href={`mailto:${site.email}`}
              className="button-primary w-fit"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
