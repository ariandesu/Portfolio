"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/content/site";

const navItems = [
  { id: "about", label: "About", number: "01" },
  { id: "skills", label: "Skills", number: "02" },
  { id: "education", label: "Education", number: "03" },
  { id: "three-works", label: "3D Works", number: "04" },
  { id: "projects", label: "Projects", number: "05" },
  { id: "contact", label: "Contact", number: "06" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const active = pathname === "/" ? activeSection : "";
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const marker = window.scrollY + window.innerHeight * 0.32;
      let current = "";

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= marker) current = item.id;
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 140
      ) {
        current = "contact";
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [open]);

  const linkFor = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <>
      <header
        className={`no-print fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "border-b border-line/80 bg-paper/88 backdrop-blur-xl"
            : "border-b border-transparent bg-paper/55 backdrop-blur-md"
        }`}
      >
        <div className="shell flex h-[var(--header-height)] items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
            aria-label={`${site.name} — home`}
          >
            <LogoMark className="h-9 w-9 text-[15px]" />
            <span className="leading-none">
              <span className="block font-serif text-[21px] tracking-[-0.04em] text-ink">
                Mahir Faisal
              </span>
              <span className="mt-1 hidden font-mono text-[8.5px] uppercase tracking-[0.19em] text-muted md:block">
                Full-stack · 3D · AI
              </span>
            </span>
          </Link>

          {/* Desktop Navigation - show from md (768px) */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-2"
          >
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={linkFor(item.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-300 min-h-[44px] ${
                    isActive
                      ? "bg-ink text-paper"
                      : "text-muted hover:bg-paper-deep hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Resume button - show from md (768px) */}
            <a
              href="/Mahir-Faisal-Resume.pdf"
              download
              className="button-secondary hidden lg:inline-flex !min-h-[42px] !px-4 text-[12px]"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Resume
            </a>
            {/* Mobile menu button - show on mobile/tablet */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="md:hidden grid h-11 w-11 place-items-center rounded-full border border-line-strong text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
            >
              <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Dialog */}
      {open && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[110] bg-paper text-ink overflow-hidden"
          style={{ maxWidth: "100vw" }}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Content - Full Height */}
          <div className="fixed inset-0 z-10 flex flex-col bg-paper overflow-y-auto" style={{ maxWidth: "100vw" }}>
            {/* Mobile Header */}
            <div className="shell flex h-[var(--header-height)] items-center justify-between flex-shrink-0" style={{ maxWidth: "100%", paddingLeft: "clamp(16px, 4vw, 24px)", paddingRight: "clamp(16px, 4vw, 24px)" }}>
              <Link
                href="/"
                className="flex items-center gap-3 flex-shrink-0 min-w-0"
                onClick={() => setOpen(false)}
              >
                <LogoMark className="h-9 w-9 text-[15px] flex-shrink-0" />
                <span className="font-serif text-[21px] tracking-[-0.04em] truncate">
                  Mahir Faisal
                </span>
              </Link>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-line-strong transition-colors duration-300 hover:bg-ink hover:text-paper flex-shrink-0"
              >
                <X className="h-[18px] w-[18px]" aria-hidden="true" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto pb-14 pt-10" style={{ maxWidth: "100%", paddingLeft: "clamp(16px, 4vw, 24px)", paddingRight: "clamp(16px, 4vw, 24px)" }}>
              <p className="eyebrow text-muted">Index</p>
              <nav aria-label="Mobile navigation" className="mt-6 border-t border-line">
                {navItems.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <Link
                      key={item.id}
                      href={linkFor(item.id)}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-between border-b border-line py-6 min-h-[44px] ${
                        isActive ? "text-violet" : ""
                      }`}
                    >
                      <span className="flex items-baseline gap-4 min-w-0 flex-1">
                        <span className="font-mono text-xs text-muted flex-shrink-0">
                          {item.number}
                        </span>
                        <span className="font-serif text-[clamp(1.8rem,8vw,3.5rem)] leading-none tracking-[-0.04em] transition-colors duration-300 group-hover:text-violet truncate">
                          {item.label}
                        </span>
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted flex-shrink-0">
                        ↗
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    Get in touch
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-3 block break-all font-serif text-xl tracking-[-0.02em]"
                  >
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone}`}
                    className="mt-1 block text-sm text-muted"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
                <div className="sm:justify-self-end min-w-0">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    Elsewhere
                  </p>
                  <SocialLinks showLabels className="mt-3" />
                </div>
              </div>

              <a
                href="/Mahir-Faisal-Resume.pdf"
                download
                className="button-primary mt-10 w-full sm:w-auto"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}