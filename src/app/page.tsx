"use client";
import { HeaderComp } from "./components/header";
import  {HomePage}  from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { FooterComp } from "./components/footer";
import { useLocomotiveScroll } from "./lib/locomotiveScroll";

export default async function Home() {
  useLocomotiveScroll();

  return (
    <main data-scroll-container>
      <HeaderComp />
      <HomePage  />
      <Projects />
      <Skills />
      <Contact />
      <FooterComp />
    </main>
  );
}