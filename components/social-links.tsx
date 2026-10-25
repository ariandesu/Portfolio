import { site } from "@/content/site";
import {
  BehanceIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/brand-icons";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  behance: BehanceIcon,
  facebook: FacebookIcon,
};

type SocialLinksProps = {
  variant?: "light" | "dark";
  showLabels?: boolean;
  className?: string;
};

export function SocialLinks({
  variant = "light",
  showLabels = false,
  className = "",
}: SocialLinksProps) {
  const isDark = variant === "dark";
  const base = isDark
    ? "border-night-line text-paper hover:border-lavender hover:bg-lavender hover:text-night"
    : "border-line-strong text-ink hover:border-violet hover:bg-violet hover:text-white";

  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {site.socials.map((social) => {
        const Icon = iconMap[social.key];
        return (
          <li key={social.key}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${social.label} — ${social.handle}`}
              className={
                showLabels
                  ? `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-colors duration-300 ${base}`
                  : `grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300 ${base}`
              }
            >
              <Icon className="h-[15px] w-[15px]" />
              {showLabels ? <span>{social.label}</span> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
