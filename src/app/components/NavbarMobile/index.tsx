"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  MenuContainer,
  DropdownMenu,
  MenuTrigger,
  NavList,
  DropdownItem,
} from "./styled";
import { BurgerButton } from "@/app/ui/buttons";
import {
  SendPurpleIcon,
  HomeIcon,
  ProjetsIcon,
  TechIcon,
} from "@/app/ui/icons";

export function NavbarMobile() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const menuRef = useRef() as any;

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <MenuContainer ref={menuRef}>
      <MenuTrigger>
        <BurgerButton open={open} handleClick={handleClick} />
      </MenuTrigger>

      <DropdownMenu className={open ? "active" : "inactive"}>
        <NavList>
          <DropdownItem onClick={handleClick}>
            <HomeIcon />
            <Link href={"#top"} data-scroll-to="top">
              Sobre Mi
            </Link>
          </DropdownItem>
          <DropdownItem onClick={handleClick}>
            <TechIcon />
            <Link href={"#skills"} data-scroll-to="skills">
              Tecnologías
            </Link>
          </DropdownItem>
          <DropdownItem onClick={handleClick}>
            <ProjetsIcon />
            <Link href={"#projects"} data-scroll-to="projects">
              Proyectos
            </Link>
          </DropdownItem>
          <DropdownItem onClick={handleClick}>
            <SendPurpleIcon />
            <Link href={"#contact"} data-scroll-to="contact">
              Contacto
            </Link>
          </DropdownItem>
        </NavList>
      </DropdownMenu>
    </MenuContainer>
  );
}
