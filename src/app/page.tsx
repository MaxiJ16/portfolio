"use client";

import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import { HeaderComp } from "./components/header";
import { HomePage } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { FooterComp } from "./components/footer";
import { useThemeMode } from "./hooks/index";

const themes = {
  default: {
    colors: {
      background: "#f1f1f1", // Color de fondo
      surface: "#FFF", // Color de fondo de tarjetas.
      text: "#989898", // Color del texto
      text2: "#000", // Color de las cantidades
    },
  },
  dark: {
    colors: {
      background: "#23292d",
      surface: "#32383b",
      text: "#FFF",
      text2: "#317e94",
    },
  },
};

export default function Home() {
  const [theme, toggleTheme] = useThemeMode();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <ThemeProvider theme={theme ? themes[theme] : themes.default}>
      <GlobalStyle />
      <main data-scroll-container>
        <HeaderComp />
        <HomePage />
        <Skills />
        <Projects />
        <Contact />
        <FooterComp />
      </main>
    </ThemeProvider>
  );
}
