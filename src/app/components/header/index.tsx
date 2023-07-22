import { useEffect, useState } from "react";
import Link from "next/link";
import { NavbarMobile } from "../NavbarMobile";
import { LargeText, BodyText } from "@/app/ui/typography";
import { GlobalStyle, themes } from "../../styles/GlobalStyles";
import { Navbar, HeaderContainer, NavList, NavItem, NavMenu } from "./styled";
import { ToggleButton } from "@/app/ui/buttons";
import { useThemeMode } from "@/app/hooks";
import { ThemeProvider } from "styled-components";

export const HeaderComp: React.FC = () => {
  const [theme, toggleTheme] = useThemeMode();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 0) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <HeaderContainer className="nav">
        <Navbar>
          <Link
            href="#top"
            data-scroll-to="top"
            onClick={() => window.scrollTo(0, 0)}
          >
            <LargeText>Maxi</LargeText>
          </Link>

          {/* Desktop Menu */}
          <NavMenu>
            <NavList>
              <NavItem>
                <Link href={"#top"} data-scroll-to="top">
                  <BodyText>Sobre Mi</BodyText>
                </Link>
              </NavItem>
              <NavItem>
                <Link href={"#skills"} data-scroll-to="skills">
                  <BodyText>Tecnologías</BodyText>
                </Link>
              </NavItem>
              <NavItem>
                <Link href={"#projects"} data-scroll-to="projects">
                  <BodyText>Proyectos</BodyText>
                </Link>
              </NavItem>
              <NavItem>
                <Link href={"#contact"} data-scroll-to="contact">
                  <BodyText>Contacto</BodyText>
                </Link>
              </NavItem>
              <NavItem onClick={toggleTheme}>
                <ToggleButton />
              </NavItem>
            </NavList>
          </NavMenu>

          {/* Mobile Menu */}
          <NavbarMobile />
        </Navbar>
      </HeaderContainer>
    </ThemeProvider>
  );
};
