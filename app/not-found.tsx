import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { WireframeOrb } from "@/components/wireframe-orb";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative flex min-h-[86vh] items-center overflow-hidden pb-20 pt-[calc(var(--header-height)+40px)]"
    >
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <WireframeOrb className="pointer-events-none absolute -right-32 top-1/4 h-[480px] w-[480px] text-violet/20" />
      <div className="shell relative">
        <p className="eyebrow text-violet">Error 404 / Off the map</p>
        <p className="display mt-6 text-[clamp(6rem,20vw,15rem)] leading-[0.8] text-ink">
          4<span className="text-violet">0</span>4
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <h1 className="max-w-[15ch] font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.035em] text-ink">
              This page took a <em className="text-violet">wrong turn.</em>
            </h1>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted">
              The link may be old, the URL slightly off, or the page may have
              moved into another experiment. The work is still where you left
              it.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/" className="button-primary">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back home
              </Link>
              <Link href="/#projects" className="button-secondary">
                View projects
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-paper-warm/80 p-5 backdrop-blur sm:p-6">
            <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-muted">
              Still looking for something?
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
              Email is the fastest way to reach me. I can point you to the right
              project or send the résumé directly.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-4 inline-flex text-[12px] font-medium text-violet"
            >
              {site.email}
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
