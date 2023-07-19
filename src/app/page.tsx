"use client";

import { HeaderComp } from "./components/header";
import { HomePage } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { FooterComp } from "./components/footer";
import { useRef, useEffect } from "react";

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
