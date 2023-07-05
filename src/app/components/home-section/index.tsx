import Link from "next/link";
import Image from "next/image";
import ImagePng from "../../ui/icons/image.png";

import { BodyText, LargeText, Title } from "@/app/ui/typography";
import {
  HomeContainer,
  HomeContent,
  HomeSection,
  HomeSocial,
  HomeData,
  HomeImg,
  ScrollButton,
} from "./styled";

import {
  ArrowDownIcon,
  DownLoadIcon,
  GithbubIcon,
  LinkedinIcon,
  MouseIcon,
  Me,
} from "@/app/ui/icons";
import { ScrollLink } from "../scroll-link";

export const HomePage = () => {
  return (
    <HomeSection>
      <HomeContainer className="container grid">
        <HomeContent className="grid">
          <HomeSocial>
            <ScrollLink
              href={"https://www.linkedin.com/in/maximiliano-jofre/"}
              target="_blank"
            >
              <LinkedinIcon />
            </ScrollLink>

            <Link href={"https://github.com/MaxiJ16"} target="_blank">
              <GithbubIcon />
            </Link>
          </HomeSocial>

          <HomeImg>
            <Me />
          </HomeImg>

          <HomeData>
            <Title>Hola, Soy Maxi</Title>
            <LargeText>FullStack Developer</LargeText>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus adipisicing elit,Repellendus adipisicing elit.
              Repellendus Patronus.
            </BodyText>
            <Link
              // download=""
              href="https://drive.google.com/file/d/15dbbPCV_ktIP3yFQdMP2Mpgh3EconX91/view?usp=sharing"
              target="_blank"
            >
              Descargar CV
              <DownLoadIcon />
            </Link>
          </HomeData>
        </HomeContent>

        <ScrollButton>
          <ScrollLink href="#about" itemRef="about">
            <MouseIcon />
            <BodyText>Scroll down</BodyText>
            <ArrowDownIcon />
          </ScrollLink>
        </ScrollButton>
      </HomeContainer>
    </HomeSection>
  );
};
