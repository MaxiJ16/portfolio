"use client";

import Link from "next/link";
import { Menu } from "../menu-mobile";
import { BodyText, MediumText } from "@/app/ui/typography";
import { MoonIcon } from "@/app/ui/icons";
import { Navbar, HeaderContainer, NavList, NavItem, NavMenu } from "./styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Navbar>
        <Link href="#"><MediumText>Maxi</MediumText></Link>

        {/* Desktop Menu */}
        <NavMenu>
          <NavList className="grid">
            <NavItem>
              <Link href={"#home"}>
                <BodyText>Sobre Mi</BodyText>
              </Link>
            </NavItem>
            <NavItem>
              <Link href={"#project"}>
                <BodyText>Proyectos</BodyText>
              </Link>
            </NavItem>
            <NavItem>
              <Link href={"#tecnologies"}>
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
                <MoonIcon className={"moon"}/>
              </Link>
            </NavItem>
          </NavList>
        </NavMenu>

        {/* Mobile Menu */}
        <Menu />
      </Navbar>
    </HeaderContainer>
  );
};
