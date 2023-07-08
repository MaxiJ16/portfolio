"use client";

import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      {/* <ProjectsSection />
      <ContactSection/> */}
      <Footer />
    </>
  );
}
