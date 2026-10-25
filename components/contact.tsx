import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { GhostCursorField } from "@/components/ghost-cursor-field";
import { LocalTime } from "@/components/local-time";
import { SocialLinks } from "@/components/social-links";
import { WireframeOrb } from "@/components/wireframe-orb";
import { site } from "@/content/site";

export function Contact() {
  const channels = [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: <Mail className="h-4 w-4" aria-hidden="true" />,
    },
    {
      label: "Phone",
      value: site.phoneDisplay,
      href: `tel:${site.phone}`,
      icon: <Phone className="h-4 w-4" aria-hidden="true" />,
    },
    {
      label: "LinkedIn",
      value: "in/mahirfaisal777",
      href: site.socials[1].href,
      icon: <LinkedinIcon className="h-4 w-4" />,
    },
    {
      label: "GitHub",
      value: "@ariandesu",
      href: site.socials[0].href,
      icon: <GithubIcon className="h-4 w-4" />,
    },
  ];

  return (
    <section
      id="contact"
      className="on-dark relative overflow-hidden bg-night py-20 text-paper sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(247,246,242,.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(247,246,242,.22) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-[10%] -top-[20%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(91,75,230,.38),transparent_66%)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-[30%] left-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(185,168,255,.12),transparent_68%)] blur-2xl"
        aria-hidden="true"
      />
      <WireframeOrb className="pointer-events-none absolute -bottom-28 right-[-8%] h-[540px] w-[540px] text-lavender/15" />
      <GhostCursorField />

      <div className="shell relative z-20">
        <div
          data-reveal
          className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.16em] text-night-muted"
        >
          <span>08</span>
          <span className="h-px flex-1 bg-night-line" aria-hidden="true" />
          <span>Contact / Say hello</span>
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.12fr_.88fr] lg:gap-16 xl:gap-24">
          <div>
            <span
              data-reveal
              className="inline-flex items-center gap-2 rounded-full border border-night-line bg-night-soft/60 px-3.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-lavender"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lavender" />
              {site.availability}
            </span>

            <h2
              data-reveal
              className="display mt-7 max-w-[12ch] text-[clamp(3.3rem,7.2vw,7.3rem)] text-paper"
            >
              Let&apos;s make something{" "}
              <em className="text-lavender">worth clicking.</em>
            </h2>

            <p
              data-reveal
              className="mt-7 max-w-[48ch] text-[15px] leading-[1.8] text-night-muted sm:text-[16px]"
            >
              Have a product, a collaboration, or a strange 3D idea? My inbox is
              open. I usually reply within 48 hours — no forms, no funnel, just
              a conversation.
            </p>

            <div
              data-reveal
              className="mt-10 border-t border-night-line pt-7"
            >
              <p className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-night-muted">
                Best way to reach me
              </p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex max-w-full items-center gap-3 font-serif text-[clamp(1.3rem,3.4vw,2.6rem)] leading-none tracking-[-0.025em] text-paper transition-colors duration-300 hover:text-lavender"
                >
                  <span className="break-all">{site.email}</span>
                  <ArrowUpRight
                    className="h-[clamp(1rem,2vw,1.5rem)] w-[clamp(1rem,2vw,1.5rem)] shrink-0 text-lavender transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <CopyEmail email={site.email} />
              </div>
            </div>

            <div
              data-reveal
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] text-night-muted"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-lavender/70" aria-hidden="true" />
                {site.location}
              </span>
              <LocalTime />
            </div>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "90ms" } as CSSProperties}
            className="lg:pt-2"
          >
            <div className="rounded-2xl border border-night-line bg-night-soft/55 p-2 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4 px-3 pb-2 pt-3">
                <p className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-night-muted">
                  Direct lines
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-lavender/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7ac9a3]" />
                  Available
                </span>
              </div>
              <ul className="divide-y divide-night-line border-t border-night-line">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        channel.href.startsWith("http")
                          ? "noreferrer noopener"
                          : undefined
                      }
                      className="group flex items-center gap-4 px-3 py-4 transition-colors duration-300 hover:bg-white/[0.035]"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-night-line text-lavender/80 transition-colors duration-300 group-hover:border-lavender group-hover:text-lavender">
                        {channel.icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[7.5px] uppercase tracking-[0.14em] text-night-muted">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block truncate text-[12.5px] font-medium text-paper/90">
                          {channel.value}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 shrink-0 text-night-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lavender"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/Mahir-Faisal-Resume.pdf"
              download
              className="button-dark mt-4 w-full"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-night-muted">
                Elsewhere
              </p>
              <SocialLinks variant="dark" />
            </div>
          </div>
        </div>

        <div
          data-reveal
          className="mt-16 flex flex-col gap-4 border-t border-night-line pt-6 text-[10px] text-night-muted sm:mt-20 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md leading-relaxed">
            Open to remote roles, freelance projects and thoughtful
            collaborations. Bangladesh Standard Time, UTC+6.
          </p>
          <a
            href="#top"
            className="link-underline w-fit text-paper/80 hover:text-lavender"
          >
            Back to the top
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
