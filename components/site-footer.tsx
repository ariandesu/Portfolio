import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/content/site";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print on-dark relative overflow-hidden bg-night text-paper">
      <div className="shell border-t border-night-line py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <LogoMark className="h-10 w-10 text-[16px]" />
              <span>
                <span className="block font-serif text-2xl leading-none tracking-[-0.04em]">
                  Mahir Faisal
                </span>
                <span className="mt-1.5 block font-mono text-[8.5px] uppercase tracking-[0.18em] text-night-muted">
                  Full-stack · 3D · AI
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-night-muted">
              Building thoughtful products at the intersection of full-stack
              engineering, 3D graphics and applied AI.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-5 inline-flex text-sm text-paper"
            >
              {site.email}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-night-muted">
              Explore
            </p>
            <ul className="mt-5 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/80 transition-colors duration-300 hover:text-lavender"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/Mahir-Faisal-Resume.pdf"
                  download
                  className="text-sm text-paper/80 transition-colors duration-300 hover:text-lavender"
                >
                  Résumé (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-night-muted">
              Elsewhere
            </p>
            <SocialLinks variant="dark" className="mt-5" />
            <p className="mt-5 text-xs leading-relaxed text-night-muted">
              {site.location}
              <br />
              {site.timezoneLabel}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-night-line pt-6 text-[11px] text-night-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>Next.js · TypeScript · Three.js</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-paper"
            >
              Back to top
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
