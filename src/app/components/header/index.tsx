import { useEffect, useState } from "react";
import Link from "next/link";
import { NavbarMobile } from "../NavbarMobile";
import { LargeText, BodyText } from "@/app/ui/typography";
import {
  Navbar,
  HeaderContainer,
  NavList,
  NavItem,
  NavMenu,
  ContainerMoon,
} from "./styled";

import { ToggleButton } from "../ToggleButton";

export const HeaderComp: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      const sections = document.querySelectorAll(
        "section[data-scroll-section]"
      );

      Array.prototype.forEach.call(sections, (section: HTMLElement) => {
        const rect = section.getBoundingClientRect();
        const isCurrentlyActive = rect.top <= 0 && rect.bottom > 0;

        if (isCurrentlyActive) {
          const sectionName = section.getAttribute("id") || "";
          setActiveSection(sectionName);
        }
      });

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
            <NavItem className={activeSection === "top" ? "activeSec" : ""}>
              <Link href={"#top"} data-scroll-to="top">
                <BodyText>Sobre Mi</BodyText>
              </Link>
            </NavItem>
            <NavItem className={activeSection === "projects" ? "activeSec" : ""}>
              <Link href={"#projects"} data-scroll-to="projects">
                <BodyText>Proyectos</BodyText>
              </Link>
            </NavItem>
            <NavItem className={activeSection === "skills" ? "activeSec" : ""}>
              <Link href={"#skills"} data-scroll-to="skills">
                <BodyText>Tecnologías</BodyText>
              </Link>
            </NavItem>
            <NavItem className={activeSection === "contact" ? "activeSec" : ""}>
              <Link href={"#contact"} data-scroll-to="contact">
                <BodyText>Contacto</BodyText>
              </Link>
            </NavItem>
          </NavList>
        </NavMenu>

        <ContainerMoon>
          <ToggleButton />

          {/* Mobile Menu */}
          <NavbarMobile />
        </ContainerMoon>
      </Navbar>
    </HeaderContainer>
  );
};
