import Link from "next/link";
import { NavbarMobile } from "../NavbarMobile";
import { LargeText, BodyText } from "@/app/ui/typography";
import { MoonIcon } from "@/app/ui/icons";
import { Navbar, HeaderContainer, NavList, NavItem, NavMenu } from "./styled";
import { useEffect } from "react";

export const HeaderComp: React.FC = () => {
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
    <HeaderContainer className="nav">
      <Navbar>
        <Link href="#">
          <LargeText>Maxi</LargeText>
        </Link>

        {/* Desktop Menu */}
        <NavMenu>
          <NavList className="grid">
            <NavItem>
              <Link href={"#home"}>
                <BodyText>Sobre Mi</BodyText>
              </Link>
            </NavItem>
            <NavItem>
              <Link href={"#projects"}>
                <BodyText>Proyectos</BodyText>
              </Link>
            </NavItem>
            <NavItem>
              <Link href={"#skills"}>
                <BodyText>Tecnologías</BodyText>
              </Link>
            </NavItem>
            <NavItem>
              <Link href={"#contact"}>
                <BodyText>Contacto</BodyText>
              </Link>
            </NavItem>
            <NavItem>
              <Link href={""}>
                <MoonIcon />
              </Link>
            </NavItem>
          </NavList>
        </NavMenu>

        {/* Mobile Menu */}
        <NavbarMobile />
      </Navbar>
    </HeaderContainer>
  );
};
