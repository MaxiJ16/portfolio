"use client";

import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function HomePage() {
  return (
    <>
      <Home />
      <Skills />
      {/* <ProjectsSection />
      <ContactSection/> */}
    </>
  );
}
