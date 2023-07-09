"use client";

import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { HeaderComp } from "./components/header";
import { FooterComp } from "./components/footer";

export default function HomePage() {
  return (
    <>
      <HeaderComp />
      <Home />
      <Skills />
      <Projects />
      {/* <ContactSection/> */}
      <FooterComp />
    </>
  );
}
