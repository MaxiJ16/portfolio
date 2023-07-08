import Link from "next/link";
import { Title } from "@/app/ui/typography";

import { GithbubIcon, LinkedinIcon } from "@/app/ui/icons";
import { FooterContainer, FooterCopy, FooterLi, FooterList, FooterSocial } from "./styled";

export const Footer = () => {
  return (
    <FooterContainer className="container">
      <Title>Maxi</Title>

      <FooterList>
        <FooterLi>
          <Link href={"#"}>Home</Link>
        </FooterLi>

        <FooterLi>
          <Link href={"#skills"}>Habilidades</Link>
        </FooterLi>

        <FooterLi>
          <Link href={"#projects"}>Proyectos</Link>
        </FooterLi>
      </FooterList>

      <FooterSocial>
        <Link
          href={"https://www.linkedin.com/in/maximiliano-jofre/"}
          target="_blank"
          className="social-link"
        >
          <LinkedinIcon />
        </Link>
        <Link
          href={"https://github.com/MaxiJ16"}
          target="_blank"
          className="social-link"
        >
          <GithbubIcon />
        </Link>
      </FooterSocial>

      <FooterCopy> &#169; Maxi Jofré | 2023</FooterCopy>
    </FooterContainer>
  );
};
