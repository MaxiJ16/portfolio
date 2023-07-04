"use client";

import { HomePage } from "./components/home-section";
import { ProjectsSection } from "./components/projects-section";
import { SkillsSection } from "./components/skills-section";

export default function Home() {
  return (
    <>
      <HomePage />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}
