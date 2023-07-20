"use client";

import { useEffect } from "react";
import { HeaderComp } from "./components/header";
import { HomePage } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { FooterComp } from "./components/footer";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main data-scroll-container>
      <HeaderComp />
      <HomePage />
      <Skills />
      <Projects />
      <Contact />
      <FooterComp />
    </main>
  );
}
