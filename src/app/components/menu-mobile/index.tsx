import Link from "next/link";
import { useEffect, useRef, useState } from "react";
// import { TertiaryButton } from "ui/buttons";
// import { User, Search, Logout } from "ui/icons";
// import { BodyTextBold } from "ui/text";
import {
  MenuContainer,
  DropdownMenu,
  MenuTrigger,
  NavList,
  DropdownItem,
} from "./styled";
import { BurguerButton } from "@/app/ui/buttons";
import { ContactIcon, HomeIcon, ProjetsIcon, TechIcon } from "@/app/ui/icons";

export function Menu({ router, token, logOut, userData }: any) {
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
      <MenuTrigger onClick={handleClick}>
        <BurguerButton open={open} />
      </MenuTrigger>

      <DropdownMenu className={open ? "active" : "inactive"}>
        {/* <p className="greeting">Bienvenido</p> */}
        <NavList>
          <DropdownItem onClick={handleClick}>
            <HomeIcon />
            <Link href={"#"}>Sobre Mi</Link>
          </DropdownItem>

          <DropdownItem onClick={handleClick}>
            <ProjetsIcon />
            <Link href={"#projects"}>Proyectos</Link>
          </DropdownItem>
          <DropdownItem onClick={handleClick}>
            <TechIcon />
            <Link href={"#tecnologies"}>Tecnologías</Link>
          </DropdownItem>
          <DropdownItem onClick={handleClick}>
            <ContactIcon />
            <Link href={"#contact"}>Contacto</Link>
          </DropdownItem>
        </NavList>
      </DropdownMenu>
    </MenuContainer>
  );
}
