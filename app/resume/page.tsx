import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé for Mahir Faisal — full-stack developer, 3D creative and AI builder.",
  alternates: {
    canonical: "/resume",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ResumePage() {
  return (
    <main
      id="main"
      className="resume-page bg-paper-deep pb-16 pt-[calc(var(--header-height)+32px)] sm:pb-20"
    >
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6">
        <div className="no-print mb-5 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted transition-colors duration-300 hover:text-ink"
          >
            <ArrowLeft
              className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            Back to portfolio
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
              Updated October 2026
            </span>
            <a
              href="/Mahir-Faisal-Resume.pdf"
              download
              className="button-primary !min-h-[40px] !px-4 text-[11px]"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Download PDF
            </a>
          </div>
        </div>

        <article className="resume-sheet mx-auto w-full max-w-[210mm] px-7 py-8 text-ink sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          <header className="border-b-2 border-ink pb-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="font-serif text-[clamp(2.4rem,5vw,3.5rem)] leading-[0.9] tracking-[-0.045em]">
                  Mahir Faisal
                </h1>
                <p className="mt-2 font-mono text-[8.5px] uppercase tracking-[0.16em] text-violet">
                  Full-Stack + 3D Creative &amp; AI Builder
                </p>
              </div>
              <address className="space-y-1.5 text-[9px] not-italic leading-tight text-muted sm:text-right">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-1.5 sm:justify-end"
                >
                  <Mail className="h-3 w-3" aria-hidden="true" />
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-1.5 sm:justify-end"
                >
                  <Phone className="h-3 w-3" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
                <span className="flex items-center gap-1.5 sm:justify-end">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  {site.location}
                </span>
              </address>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-line pt-3 text-[8.5px] text-muted">
              <a
                href={site.socials[0].href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 hover:text-ink"
              >
                <GithubIcon className="h-3 w-3" />
                github.com/ariandesu
              </a>
              <a
                href={site.socials[1].href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 hover:text-ink"
              >
                <LinkedinIcon className="h-3 w-3" />
                linkedin.com/in/mahirfaisal777
              </a>
              <span>Portfolio: mahir-faisal-portfolio.vercel.app</span>
            </div>
          </header>

          <section className="mt-5">
            <p className="max-w-[68ch] text-[11px] leading-[1.6] text-ink-soft">
              Computer Science &amp; Engineering student at USTC and the builder
              behind MHR3D. I design and ship full-stack products with Next.js,
              TypeScript and Cloudflare&apos;s edge, then add the 3D, motion and
              AI layers that make them feel alive. Currently building ShareFlow
              and exploring explainable health telemetry with STAR PLUS.
            </p>
          </section>

          <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-[1.48fr_1fr] sm:gap-x-8">
            <div className="space-y-6">
              <section>
                <h2 className="border-b border-line pb-1.5">Selected projects</h2>
                <div className="mt-3 space-y-2.5">
                  {projects.map((project) => (
                    <article key={project.slug}>
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-[12.5px] font-semibold tracking-[-0.015em]">
                          {project.title}
                        </h3>
                        <span className="shrink-0 font-mono text-[7px] uppercase tracking-[0.1em] text-muted">
                          {project.year}
                        </span>
                      </div>
                      <p className="mt-0.5 font-mono text-[7px] uppercase leading-relaxed tracking-[0.06em] text-violet">
                        {project.stack.slice(0, 6).join(" · ")}
                      </p>
                      <p className="mt-1 text-[10.2px] leading-[1.55] text-ink-soft">
                        {project.summary.split(". ").slice(0, 2).join(". ").replace(/\.$/, "")}.
                      </p>
                      <p className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-[7.6px] text-muted">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="hover:text-ink"
                        >
                          Live: {new URL(project.liveUrl).hostname.replace(/^www\./, "")}
                        </a>
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="hover:text-ink"
                        >
                          GitHub: {project.repoUrl.replace("https://github.com/", "")}
                        </a>
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="border-b border-line pb-1.5">Education</h2>
                <div className="mt-3 space-y-2.5">
                  {site.education.map((item) => (
                    <article key={item.institution}>
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-[11.5px] font-semibold leading-snug">
                          {item.degree}
                        </h3>
                        <span className="shrink-0 font-mono text-[7.6px] text-muted">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[8.5px] text-muted">
                        {item.institution}
                        {item.location ? ` · ${item.location}` : ""}
                      </p>
                      <p className="mt-0.5 text-[8.5px] text-muted">
                        {item.status}. {item.details[0]}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="border-b border-line pb-1.5">
                  Leadership &amp; community
                </h2>
                <div className="mt-3 space-y-1.5">
                  {site.about.leadership.map((item) => (
                    <div
                      key={`${item.organisation}-${item.role}`}
                      className="flex items-baseline justify-between gap-3"
                    >
                      <p className="text-[9px] leading-snug">
                        <span className="font-semibold">{item.role}</span>
                        <span className="text-muted"> · {item.organisation}</span>
                      </p>
                      <span className="shrink-0 font-mono text-[6.5px] text-muted">
                        {item.period}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="border-b border-line pb-1.5">Technical skills</h2>
                <dl className="mt-3 space-y-1.5">
                  {site.skills.map((group) => (
                    <div key={group.title}>
                      <dt className="font-mono text-[6.5px] uppercase tracking-[0.1em] text-muted">
                        {group.title}
                      </dt>
                      <dd className="mt-0.5 text-[8.8px] leading-[1.55] text-ink-soft">
                        {group.items.map((item) => item.name).join(", ")}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section>
                <h2 className="border-b border-line pb-1.5">Certifications</h2>
                <ul className="mt-3 space-y-1.5">
                  {site.certifications.map((certification) => (
                    <li
                      key={certification.title}
                      className="text-[8.8px] leading-[1.45] text-ink-soft"
                    >
                      {certification.title}
                      {certification.issuer ? (
                        <span className="block font-mono text-[6px] uppercase tracking-[0.06em] text-muted">
                          {certification.issuer}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="border-b border-line pb-1.5">Languages</h2>
                <dl className="mt-3 space-y-1.5">
                  {site.languages.map((language) => (
                    <div
                      key={language.name}
                      className="flex items-baseline justify-between gap-3"
                    >
                      <dt className="text-[9px]">{language.name}</dt>
                      <dd className="font-mono text-[6px] uppercase tracking-[0.08em] text-muted">
                        {language.level}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section>
                <h2 className="border-b border-line pb-1.5">Links</h2>
                <ul className="mt-3 space-y-1.5 text-[7.6px] text-muted">
                  <li>
                    <a
                      href={site.url}
                      className="hover:text-ink"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Portfolio · mahir-faisal-portfolio.vercel.app
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.socials[0].href}
                      className="hover:text-ink"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      GitHub · github.com/ariandesu
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.socials[1].href}
                      className="hover:text-ink"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      LinkedIn · linkedin.com/in/mahirfaisal777
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.socials[3].href}
                      className="hover:text-ink"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Behance · behance.net/mahirfarian
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <footer className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-3 text-[7px] text-muted">
            <span>References available on request.</span>
            <span className="font-mono uppercase tracking-[0.1em]">
              Chattogram · UTC+6
            </span>
          </footer>
        </article>

        <div className="no-print mt-5 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-md text-[10px] leading-relaxed text-muted">
            The PDF is generated from this page. For the full story behind the
            projects, open a case study.
          </p>
          <Link
            href="/#projects"
            className="link-underline inline-flex items-center gap-1.5 text-[11px] font-medium text-ink"
          >
            Browse the case studies
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
