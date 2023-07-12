"use client";

import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { HomePage } from "./components/Home";
import { HeaderComp } from "./components/header";
import { FooterComp } from "./components/footer";

export default function Home() {
  return (
    <>
      <HeaderComp />
      <HomePage />
      <Skills />
      <Projects />
      {/* <ContactSection/> */}
      <FooterComp />
    </>
  );
}
