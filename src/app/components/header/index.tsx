import Link from "next/link";
import { NavbarMobile } from "../NavbarMobile";
import { BodyText } from "@/app/ui/typography";
import { MoonIcon } from "@/app/ui/icons";
import { Navbar, HeaderContainer, NavList, NavItem, NavMenu } from "./styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Navbar>
        <Link href="#">
          <BodyText>Maxi</BodyText>
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
