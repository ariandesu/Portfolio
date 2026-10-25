import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-32">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end lg:gap-20">
          <div data-reveal>
            <SectionHeading
              number="06"
              label="Selected work / 2026"
              title="Products, not just screens."
            />
          </div>
          <div
            data-reveal
            className="max-w-md lg:justify-self-end lg:text-right"
          >
            <p className="text-[15px] leading-relaxed text-muted">
              Three case studies that show the range: a privacy-first platform,
              a space-health dashboard, and a Bengali-first local product. Every
              card opens the full story.
            </p>
            <p className="mt-5 font-mono text-[8.5px] uppercase tracking-[0.15em] text-muted">
              {projects.length} projects · 2026
            </p>
          </div>
        </div>

        <div className="mt-12 border-b border-line">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div
          data-reveal
          className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-lg text-[13px] leading-relaxed text-muted">
            More experiments live on GitHub — from machine-learning notebooks to
            small tools built to answer a question.
          </p>
          <a
            href={site.socials[0].href}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-line-strong px-5 py-3 text-[12px] font-medium text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
          >
            <GithubIcon className="h-4 w-4" />
            Browse the GitHub
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
