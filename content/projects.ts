export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  role: string;
  timeline: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  image: string;
  imageAlt: string;
  accent: "violet" | "sky" | "emerald";
  summary: string;
  problem: string;
  features: { title: string; description: string }[];
  challenges: { title: string; description: string }[];
  improvements: string[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "shareflow",
    title: "ShareFlow",
    subtitle:
      "Privacy-first file transfer, 39+ utilities and a digital store — all on the edge.",
    year: "2026",
    category: "Platform / product",
    role: "Solo full-stack developer & designer",
    timeline: "Jul 2026 — ongoing",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Cloudflare Pages",
      "Cloudflare Workers",
      "WebRTC",
      "Cloudflare R2",
      "Supabase",
      "Upstash Redis",
      "PDF-Lib",
    ],
    liveUrl: "https://shareflow.design-public.com",
    repoUrl: "https://github.com/ariandesu/shareflow",
    image: "/images/projects/shareflow.webp",
    imageAlt:
      "ShareFlow homepage with a large file-transfer panel and a light blue interface.",
    accent: "sky",
    summary:
      "ShareFlow is a zero-login file and secret-sharing platform built around a simple promise: your file should reach the other person without taking up permanent residence on someone else's server. It combines direct browser-to-browser transfer over WebRTC with ephemeral text sharing, a suite of 39+ developer utilities, and a small digital store — all shipped on Cloudflare's edge.",
    problem:
      "Most file-transfer tools trade privacy for convenience. You create an account, upload a file, wait for a server to process it, and hope the link expires when it says it will. ShareFlow explores the opposite shape: open the page, send the file, and keep the bytes between the two browsers whenever that is possible.",
    features: [
      {
        title: "Direct browser-to-browser transfer",
        description:
          "WebRTC data channels move files between peers without a permanent copy being stored. A self-hosted signalling layer handles the handshake.",
      },
      {
        title: "Links for when P2P is not enough",
        description:
          "Optional cloud-backed sharing uses Cloudflare R2, Supabase and Upstash Redis so a transfer can survive a closed tab or a restrictive network.",
      },
      {
        title: "Self-destructing text shares",
        description:
          "Code snippets, credentials and notes can be shared with view limits and expiry timers instead of being left in a chat history.",
      },
      {
        title: "39+ developer utilities",
        description:
          "JSON formatting, JWT decoding, regex testing, Base64, UUIDs, image compression, PDF merging and more, grouped into one consistent tool surface.",
      },
      {
        title: "A store with an honest unlock loop",
        description:
          "Rewarded-ad steps mint one-time 100% off coupons for starter kits and datasets, with the product catalogue living alongside the utilities.",
      },
    ],
    challenges: [
      {
        title: "Signalling without a room server",
        description:
          "WebRTC needs the two peers to exchange offer, answer and ICE candidates before the data channel exists. I built the signalling flow on edge functions and designed explicit waiting, failure and retry states so a blocked connection never looks like a frozen page.",
      },
      {
        title: "Large files in a browser tab",
        description:
          "A browser cannot buffer an unlimited file in memory. The transfer flow chunks data, surfaces progress and supports cancellation, while keeping the UI responsive. The fallback path to object storage has to preserve the same clarity about where a file actually is.",
      },
      {
        title: "One voice across 39 tools",
        description:
          "A utility suite can easily become a pile of unrelated pages. Each tool shares the same layout, input states, copy actions, empty states and dark/light tokens, with route-level splitting so the home page does not carry the whole suite.",
      },
      {
        title: "Privacy claims that match the architecture",
        description:
          "P2P and cloud storage have different privacy properties. The interface makes that distinction visible instead of hiding it behind a single 'secure' badge, so users know whether a file is travelling directly or being retained.",
      },
    ],
    improvements: [
      "Add a TURN relay fallback for symmetric NATs and restrictive corporate networks.",
      "Introduce resumable transfers and an opt-in, locally stored transfer history.",
      "Cover the signalling state machine and tool routes with end-to-end tests.",
      "Run a full accessibility and performance audit across all 39 tools.",
      "Turn the most-used utilities into an installable PWA with offline support.",
      "Add observability for transfer failures without collecting file contents.",
    ],
    note: "ShareFlow is a live product. Some store and reward flows are demonstration experiences rather than production payment flows.",
  },
  {
    slug: "star-plus",
    title: "STAR PLUS",
    subtitle:
      "A role-based astronaut health dashboard for NASA Space Apps Challenge 2026.",
    year: "2026",
    category: "Space health / data product",
    role: "Full-stack developer & 3D interface",
    timeline: "Sep — Oct 2026",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Three.js / WebGL",
      "Cloudflare Workers",
      "Wrangler",
      "NASA OSDR-inspired data",
    ],
    liveUrl: "https://star-plus.shareflow.workers.dev/",
    repoUrl: "https://github.com/ariandesu/star-plus",
    image: "/images/projects/starplus.webp",
    imageAlt:
      "STAR PLUS mission login screen with an astronaut, Earth view and role selection cards.",
    accent: "violet",
    summary:
      "STAR PLUS — Space Telemetry & Astronaut Recovery Physiological Long-term Unobtrusive System — turns dense physiological and environmental telemetry into a mission-ready dashboard. Three roles see the same mission through different lenses: an astronaut's personal health portal, a flight medical officer's triage view, and mission control's operational picture.",
    problem:
      "Long-duration spaceflight produces a firehose of biometric and environmental data. The hard part is not displaying it; it is helping a crew member or medical officer understand what changed, why it matters, and what to do next. A dashboard that only shows numbers pushes that interpretation back onto the busiest person in the room.",
    features: [
      {
        title: "Three role-based portals",
        description:
          "Astronaut, Flight Medical Officer and Mission Control each get a focused view of the same underlying mission, with demo credentials for exploring the prototype.",
      },
      {
        title: "Baselines and a 72-hour window",
        description:
          "Vitals are compared against a 30-day personal baseline while a 72-hour moving window looks for early deviations in sleep, resting heart rate, stress, exercise and reaction time.",
      },
      {
        title: "Explainable WATCH signals",
        description:
          "Every flagged signal opens a 'Why was this flagged?' view with raw values, percentage change, contributing operational factors and deterministic intervention guidance.",
      },
      {
        title: "Environmental telemetry",
        description:
          "Mission Control can monitor ECLSS cabin conditions and simulate CO₂, temperature and radiation anomalies to see how the system responds.",
      },
      {
        title: "3D digital twin",
        description:
          "A Three.js/WebGL scene gives the mission a spatial layer — the Space Shuttle Discovery and anatomical organ views alongside the charts.",
      },
      {
        title: "Honest demo boundaries",
        description:
          "All crew vitals and environmental data are synthetic, and the interface says so. The product is a research prototype, not a clinical device.",
      },
    ],
    challenges: [
      {
        title: "Explainable rules, not a black box",
        description:
          "The clinical story only works if a medical officer can audit it. I kept the baseline and deviation logic deterministic, then designed a modal that exposes the raw measurement, the percentage shift, the contributing factors and the recommended next step.",
      },
      {
        title: "Two rendering worlds in one app",
        description:
          "Recharts handles the dense time-series views while Three.js handles the digital twin. Keeping both performant meant lazy-loading the 3D scene, pausing work when it is off-screen, and avoiding hydration mismatches in charts that depend on measured widths.",
      },
      {
        title: "Roles on the edge",
        description:
          "The app targets Cloudflare Workers with a static export. Role-based demo access, protected views and route transitions had to work without a traditional always-on server, while remaining easy for judges to try.",
      },
      {
        title: "Dense data, calm interface",
        description:
          "WATCH states need to be legible without relying on colour alone. The telemetry views combine labels, icons, ordered hierarchy and responsive charts so the dashboard still reads on a laptop during a demo.",
      },
    ],
    improvements: [
      "Ingest real NASA OSDR data with clear provenance and dataset versioning.",
      "Put the thresholds and intervention rules through a clinical review process.",
      "Add ML anomaly detection alongside the deterministic rules — with explanations, not instead of them.",
      "Introduce audit logging and real role permissions before any clinical pilot.",
      "Design a mobile-first telemetry view for crew members away from a console.",
      "Publish a transparent methodology page for the baseline and WATCH logic.",
    ],
    note: "STAR PLUS is a synthetic demonstration environment. All crew vitals, biomarkers and environmental telemetry are generated, and the system is not a clinical diagnostic tool or medical device.",
  },
  {
    slug: "bazardor",
    title: "BazarDor",
    subtitle:
      "A Bengali-first daily commodity price tracker for markets across Bangladesh.",
    year: "2026",
    category: "Local data / web app",
    role: "Full-stack developer & interface designer",
    timeline: "Oct 2026",
    stack: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "BetterAuth",
      "Hind Siliguri",
      "Lucide React",
      "Vercel",
      "REST API with failover",
    ],
    liveUrl: "https://bazardor-mhr3d.vercel.app",
    repoUrl: "https://github.com/ariandesu/Assignment-7-ph",
    image: "/images/projects/bazardor.webp",
    imageAlt:
      "BazarDor homepage in Bengali with a green price ticker, vegetable illustration and market categories.",
    accent: "emerald",
    summary:
      "BazarDor (বাজার দর) makes everyday market prices legible in Bengali. It brings today's commodity prices, risers and fallers, category browsing and market-by-market breakdowns into one clean interface, with authentication and a resilient data layer underneath.",
    problem:
      "Daily commodity prices are scattered across markets and often presented in English-first interfaces. A shopper should not need to translate a table in their head to know whether rice is up this week. BazarDor treats Bengali as the default language and the local market as the default context — not an afterthought.",
    features: [
      {
        title: "Bengali-first typography",
        description:
          "Hind Siliguri, Bengali numerals and carefully tuned line lengths make prices and categories feel native rather than translated.",
      },
      {
        title: "Today at a glance",
        description:
          "A live price ticker, top risers and top fallers surface the movement that matters before the full product grid.",
      },
      {
        title: "Category and product detail",
        description:
          "Dynamic category pages support sorting and filtering, while product pages break prices down by market with min, max and average values.",
      },
      {
        title: "Authentication that fits",
        description:
          "BetterAuth provides email/password plus Google and GitHub OAuth, protected product routes and a small profile area for updating account details.",
      },
      {
        title: "A data layer with a plan B",
        description:
          "Primary and fallback API endpoints, skeleton loading states, empty states and toast feedback keep the app honest when a feed misbehaves.",
      },
    ],
    challenges: [
      {
        title: "Designing for Bengali first",
        description:
          "Bengali glyphs, numerals and line heights behave differently from Latin defaults. The type scale, numeric formatting and mixed Bengali/English labels needed their own rules, not a direct port of an English dashboard.",
      },
      {
        title: "Data that cannot afford to disappear",
        description:
          "Price comparisons are only useful if the feed is available. I added automatic failover between API endpoints, explicit loading and error states, and sorting/filtering that remains stable across dynamic routes.",
      },
      {
        title: "Auth across server and client",
        description:
          "BetterAuth sessions, protected product detail pages and profile updates cross the App Router boundary. Keeping the signed-in state consistent without duplicating logic was the main integration challenge.",
      },
      {
        title: "A local product, not a translation",
        description:
          "Per-kilogram and per-dozen units, market names and the visual language of a Bangladeshi bazaar all matter. The interface uses local vocabulary and a green, produce-led palette instead of a generic fintech blue.",
      },
    ],
    improvements: [
      "Cache price feeds with ISR or edge caching and show a clear last-updated timestamp.",
      "Add historical price charts and optional price-drop alerts.",
      "Turn the app into a PWA with push notifications for daily changes.",
      "Expand market coverage and add a lightweight verification workflow.",
      "Add automated tests for the API failover and auth boundaries.",
      "Instrument client errors without exposing personal account data.",
    ],
    note: "BazarDor began as a Programming Hero assignment and has been extended into a fuller product study.",
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};
