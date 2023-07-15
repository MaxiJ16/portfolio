"use client";

import { HeaderComp } from "./components/header";
import { HomePage } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { FooterComp } from "./components/footer";

export default function Home() {
  return (
    <>
      <HeaderComp />
      <HomePage />
      <Skills />
      <Projects />
      <Contact />
      <FooterComp />
    </>
  );
}
