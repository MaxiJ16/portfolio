import Link from "next/link";
import { Title } from "@/app/ui/typography";

import { GithbubIcon, LinkedinIcon } from "@/app/ui/icons";
import {
  FooterContainer,
  FooterCopy,
  FooterLi,
  FooterList,
  FooterSocial,
} from "./styled";

export const FooterComp = () => {
  return (
    <FooterContainer>
      <Title>Maxi</Title>

      <FooterList>
        <FooterLi>
          <Link
            href="#top"
            data-scroll-to="top"
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </Link>
        </FooterLi>

        <FooterLi>
          <Link href={"#skills"} data-scroll-to="skills">
            Habilidades
          </Link>
        </FooterLi>

        <FooterLi>
          <Link href={"#projects"} data-scroll-to="projects">
            Proyectos
          </Link>
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
