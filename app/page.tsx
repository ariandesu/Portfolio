import type { Metadata } from "next";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experiments } from "@/components/experiments";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { Skills } from "@/components/skills";
import { ThreeWorks } from "@/components/three-works";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Skills />
      <Education />
      <ThreeWorks />
      <ProjectsSection />
      <Experiments />
      <Contact />
    </main>
  );
}
