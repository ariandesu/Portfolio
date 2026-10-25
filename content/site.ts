export type SocialKey =
  | "github"
  | "linkedin"
  | "instagram"
  | "behance"
  | "facebook";

export type Social = {
  key: SocialKey;
  label: string;
  handle: string;
  href: string;
};

export type SkillLevel = "Daily" | "Comfortable" | "Exploring";

export type Skill = {
  name: string;
  level: SkillLevel;
  icon?: string;
};

export type SkillGroup = {
  title: string;
  kicker: string;
  description: string;
  items: Skill[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  status: string;
  details: string[];
};

export type LeadershipItem = {
  role: string;
  organisation: string;
  period: string;
  note: string;
};

export type Certification = {
  title: string;
  issuer?: string;
};

export type Experiment = {
  name: string;
  description: string;
  meta: string;
  href?: string;
  linkLabel?: string;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahir-faisal-portfolio.vercel.app";

export const site = {
  url: siteUrl,
  name: "Mahir Faisal",
  firstName: "Mahir",
  alias: "ariandesu",
  brand: "MHR3D",
  designation: "Full-Stack + 3D Creative & AI Builder",
  location: "Chattogram, Bangladesh",
  timezone: "Asia/Dhaka",
  timezoneLabel: "UTC+6",
  email: "mahirfaisalarian@gmail.com",
  phone: "+8801888430239",
  phoneDisplay: "+880 1888 430239",
  availability: "Open to remote work & collaborations",
  description:
    "Mahir Faisal is a full-stack developer, 3D creative and AI builder from Chattogram, Bangladesh. CSE student at USTC, creator of ShareFlow and STAR PLUS.",
  longDescription:
    "Mahir Faisal — also known as ariandesu and MHR3D — builds fast, tactile web products at the intersection of full-stack engineering, 3D graphics and applied AI.",
  socials: [
    {
      key: "github",
      label: "GitHub",
      handle: "@ariandesu",
      href: "https://github.com/ariandesu",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      handle: "in/mahirfaisal777",
      href: "https://www.linkedin.com/in/mahirfaisal777/",
    },
    {
      key: "instagram",
      label: "Instagram",
      handle: "@mhr_3d",
      href: "https://www.instagram.com/mhr_3d",
    },
    {
      key: "behance",
      label: "Behance",
      handle: "mahirfarian",
      href: "https://www.behance.net/mahirfarian",
    },
    {
      key: "facebook",
      label: "Facebook",
      handle: "mahir.faisal.39",
      href: "https://www.facebook.com/mahir.faisal.39",
    },
  ] satisfies Social[],
  threeWorks: {
    instagramProfile: "https://www.instagram.com/mhr_3d",
    behanceProfile: "https://www.behance.net/mahirfarian",
    items: [
      {
        title: "3D Render & Motion 01",
        platform: "Instagram",
        href: "https://www.instagram.com/p/C1wO0mbv9-g/?hl=bn",
        tag: "Blender / LookDev",
        video: "/videos/3d-works/work-01.mp4",
      },
      {
        title: "3D Render & Motion 02",
        platform: "Instagram",
        href: "https://www.instagram.com/p/DFRtXqzyinE/?hl=bn",
        tag: "Lighting & Shading",
        video: "/videos/3d-works/work-02.mp4",
      },
      {
        title: "3D Render & Motion 03",
        platform: "Instagram",
        href: "https://www.instagram.com/p/DIHeaNITJAR/?hl=bn",
        tag: "Character / Asset",
        video: "/videos/3d-works/work-03.mp4",
      },
      {
        title: "3D Render & Motion 04",
        platform: "Instagram",
        href: "https://www.instagram.com/p/DMkU1PMyBbm/?hl=bn",
        tag: "Motion Study",
        video: "/videos/3d-works/work-04.mp4",
      },
      {
        title: "3D Render & Motion 05",
        platform: "Instagram",
        href: "https://www.instagram.com/p/DXkH4bgis_f/?hl=bn",
        tag: "Environment / Scene",
        video: "/videos/3d-works/work-05.mp4",
      },
    ],
  },
  hero: {
    eyebrow: "Chattogram, Bangladesh · UTC+6",
    headline: "Full-stack developer,",
    headlineAccent: "3D creative",
    headlineEnd: "& AI builder.",
    intro:
      "I build fast, tactile products for the web — and the 3D, edge and AI systems that make them feel alive.",
    currently: "Currently building ShareFlow & studying CSE at USTC",
  },
  ticker: [
    "Next.js",
    "React",
    "TypeScript",
    "Three.js",
    "Cloudflare",
    "Python",
    "Blender",
    "Tailwind CSS",
    "WebRTC",
    "Supabase",
  ],
  about: {
    eyebrow: "A little context",
    heading: "A builder with a soft spot for strange ideas.",
    paragraphs: [
      "I'm Mahir — a Computer Science & Engineering student at the University of Science and Technology, Chittagong, and the builder behind MHR3D. My path started with HTML and CSS assignments, then React, then the realisation that the most interesting problems live where the interface meets the system.",
      "Today I build full-stack products with Next.js, TypeScript and Cloudflare's edge, model and animate in Blender, and wire 3D scenes into the browser with Three.js and WebGL. ShareFlow, a privacy-first file-sharing platform, and STAR PLUS, a NASA Space Apps health dashboard, are the two projects that best show how those interests fit together.",
      "I also spend time on AI and ML: NLP experiments, prompt-injection detection, spam classification, and autonomous agent pipelines on my home server. The common thread is curiosity about systems that can act on their own without becoming opaque.",
      "Outside a screen, I'm usually modelling, rigging or animating something in Blender, Maya or KeyShot, collecting design references, or keeping my cat company while a render finishes.",
    ],
    hobbies: [
      "3D art & animation",
      "Design & typography",
      "Home-server tinkering",
      "Sci-fi interfaces",
      "My cat",
    ],
    facts: [
      { label: "Based in", value: "Chattogram, BD" },
      { label: "Studying", value: "CSE at USTC, 2024–2027" },
      { label: "Languages", value: "English · Bengali" },
      { label: "In 3D since", value: "2022" },
    ],
    leadership: [
      {
        role: "Campus Ambassador",
        organisation: "GearON",
        period: "Jun 2026 — present",
        note: "Representing the platform on campus and connecting students with its programmes.",
      },
      {
        role: "Campus Ambassador",
        organisation: "LinkedIn Community Bangladesh",
        period: "Jun 2026 — present",
        note: "Community building and event support for the LCB campus network.",
      },
      {
        role: "Campus Ambassador",
        organisation: "InfoGram",
        period: "May 2026 — present",
        note: "On-campus outreach in Chattogram.",
      },
      {
        role: "Public Relation Secretary",
        organisation: "Programming Club, USTC",
        period: "Sep 2025 — Aug 2026",
        note: "Coordinated communications and helped run club programmes.",
      },
      {
        role: "Volunteer",
        organisation: "Futurenation",
        period: "Apr 2026 — present",
        note: "Supporting community initiatives and youth-focused programmes.",
      },
    ] satisfies LeadershipItem[],
  },
  skills: [
    {
      title: "Full-stack",
      kicker: "Build",
      description: "Product surfaces, APIs and the glue between them.",
      items: [
        { name: "Next.js", level: "Daily", icon: "nextdotjs" },
        { name: "React", level: "Daily", icon: "react" },
        { name: "TypeScript", level: "Daily", icon: "typescript" },
        { name: "Tailwind CSS", level: "Daily", icon: "tailwindcss" },
        { name: "Node.js", level: "Comfortable", icon: "nodedotjs" },
        { name: "Supabase", level: "Comfortable", icon: "supabase" },
        { name: "REST APIs", level: "Comfortable" },
        { name: "WebRTC", level: "Comfortable" },
      ],
    },
    {
      title: "3D & creative",
      kicker: "Shape",
      description: "Modelling, motion and real-time graphics for the browser.",
      items: [
        { name: "Three.js / WebGL", level: "Daily", icon: "threedotjs" },
        { name: "Blender", level: "Daily", icon: "blender" },
        { name: "3D modelling", level: "Daily" },
        { name: "Rigging & animation", level: "Comfortable" },
        { name: "Maya", level: "Comfortable" },
        { name: "KeyShot", level: "Comfortable" },
        { name: "Figma", level: "Comfortable", icon: "figma" },
        { name: "Photoshop / Illustrator", level: "Comfortable" },
      ],
    },
    {
      title: "AI & data",
      kicker: "Explore",
      description: "Experiments in machine learning, language and agents.",
      items: [
        { name: "Python", level: "Daily", icon: "python" },
        { name: "Supervised ML", level: "Comfortable" },
        { name: "NLP", level: "Exploring" },
        { name: "Prompt-injection detection", level: "Exploring" },
        { name: "Kaggle GPU / TPU", level: "Comfortable" },
        { name: "Jupyter", level: "Comfortable" },
        { name: "Agent pipelines", level: "Exploring" },
      ],
    },
    {
      title: "Edge & tools",
      kicker: "Ship",
      description: "The infrastructure that keeps products quick and quiet.",
      items: [
        { name: "Cloudflare Workers", level: "Daily", icon: "cloudflare" },
        { name: "Cloudflare R2", level: "Comfortable" },
        { name: "Upstash Redis", level: "Comfortable" },
        { name: "Docker", level: "Comfortable", icon: "docker" },
        { name: "Linux", level: "Comfortable", icon: "linux" },
        { name: "Git / GitHub", level: "Daily", icon: "github" },
        { name: "Vercel", level: "Daily", icon: "vercel" },
        { name: "Postman", level: "Comfortable" },
      ],
    },
  ] satisfies SkillGroup[],
  education: [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "University of Science and Technology, Chittagong",
      location: "Chattogram, Bangladesh",
      period: "2024 — 2027",
      status: "In progress",
      details: [
        "Data structures, algorithms, object-oriented programming and database systems.",
        "Operating systems, computer networks and software engineering fundamentals.",
        "Machine learning fundamentals alongside independent AI/ML experiments.",
      ],
    },
    {
      degree: "Higher Secondary Certificate — Science",
      institution: "Bapza Public School and College",
      location: "Bangladesh",
      period: "2020 — 2022",
      status: "Completed",
      details: [
        "Science stream with a focus on mathematics, physics and chemistry.",
      ],
    },
  ] satisfies EducationItem[],
  certifications: [
    {
      title: "Professional 3D Animation",
      issuer: "Certification",
    },
    {
      title: "Web Design — NSDA Level 3",
      issuer: "National Skills Development Authority",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Certification",
    },
    {
      title: "Python Basics",
      issuer: "Certification",
    },
  ] satisfies Certification[],
  languages: [
    { name: "Bengali", level: "Native" },
    { name: "English", level: "Professional" },
  ],
  experiments: [
    {
      name: "Beacon",
      description:
        "Real-time disaster-response coordination prototype connecting requesters, responders and an operations centre.",
      meta: "React · TypeScript · Appwrite · Leaflet",
      href: "https://github.com/ariandesu/beacon-disaster-response",
      linkLabel: "GitHub",
    },
    {
      name: "FitLog",
      description:
        "A dark, no-nonsense workout library and weekly planner with local persistence and a five-exercise plan cap.",
      meta: "Next.js · React · Context API",
      href: "https://github.com/ariandesu/FitLog-Assignment-6",
      linkLabel: "GitHub",
    },
    {
      name: "Gredient Gen",
      description:
        "An ingredient-led recipe generator built as a small TypeScript product experiment.",
      meta: "Next.js · TypeScript",
      href: "https://github.com/ariandesu/gredient-gen",
      linkLabel: "GitHub",
    },
    {
      name: "Phishing notebook",
      description:
        "ML notebooks covering phishing and spam classification, run on a local RTX 4060 GPU worker.",
      meta: "Python · Jupyter · scikit-learn",
      href: "https://github.com/ariandesu/phishing-notebook",
      linkLabel: "GitHub",
    },
    {
      name: "Sanctuary",
      description:
        "A self-hosted autonomous agent running around the clock on a home server — an ongoing systems experiment.",
      meta: "Agents · Home server · Private build",
      linkLabel: "Private",
    },
  ] satisfies Experiment[],
};

export type Site = typeof site;
