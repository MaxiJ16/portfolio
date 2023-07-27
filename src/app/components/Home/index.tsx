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
} from "./styled";

import {
  ArrowDownIcon,
  DownLoadIcon,
  GithbubIcon,
  LinkedinIcon,
  MouseIcon,
  Me,
} from "@/app/ui/icons";
import { Balancer } from "react-wrap-balancer";

export const HomePage = () => {
  return (
    <HomeSection id="top" data-scroll-section>
      <Balancer>
        <HomeContainer className="container grid">
          <HomeContent className="grid">
            <HomeSocial>
              <Link
                href={"https://www.linkedin.com/in/maximiliano-jofre/"}
                target="_blank"
              >
                <LinkedinIcon />
              </Link>

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
                Me especializo en la creación de aplicaciones web desde cero,
                con habilidades en el frontend y en el backend utilizando las
                últimas tecnologías. Disfruto creando interfaces atractivas,
                funcionales y enfrentando nuevos desafíos para continuar
                creciendo como desarrollador.
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

          <Link
            href={"#projects"}
            data-scroll-to="projects"
            className="scrollButton"
          >
            <MouseIcon className={"mouse"} />
            <BodyText>Scroll down</BodyText>
            <ArrowDownIcon />
          </Link>
        </HomeContainer>
      </Balancer>
    </HomeSection>
  );
};
