"use client";

import Link from "next/link";
import { Navbar, HeaderContainer, NavList, NavItem, NavMenu } from "./styled";
import { Menu } from "../menu-mobile";
import { SubTitle } from "@/app/ui/typography";
import { ContactIcon, HomeIcon, ProjetsIcon, TechIcon } from "@/app/ui/icons";

export const Header = () => {
  return (
    <HeaderContainer>
      <Navbar className="container">
        <Link href="#">
          <SubTitle className="nameNavbar">Maxi</SubTitle>
        </Link>

        {/* Desktop Menu */}
        <NavMenu>
          <NavList className="grid">
            <NavItem>
              <Link href={"#home"}>Sobre Mi</Link>
            </NavItem>
            <NavItem>
              <Link href={"#project"}>Proyectos</Link>
            </NavItem>
            <NavItem>
              <Link href={"#tecnologies"}>Tecnologías</Link>
            </NavItem>
            <NavItem>
              <Link href={"#contact"}>Contacto</Link>
            </NavItem>
          </NavList>
        </NavMenu>

        {/* Mobile Menu */}
        <Menu />
      </Navbar>
    </HeaderContainer>
  );
};
