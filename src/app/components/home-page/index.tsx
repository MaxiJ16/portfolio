import Link from "next/link";
import ImagePng from "../../ui/icons/image.png";
import {
  HomeContainer,
  HomeContent,
  HomeSection,
  HomeSocial,
  HomeData,
  HomeScroll,
  HomeImg,
} from "./styled";

import {
  ArrowDownIcon,
  DownLoadIcon,
  GithbubIcon,
  LinkedinIcon,
  MouseIcon,
  MyPictureIcon,
} from "@/app/ui/icons";
import { BodyText, LargeText, Title } from "@/app/ui/typography";
import Image from "next/image";

export const HomePage = () => {
  return (
    <HomeSection className="home section">
      <HomeContainer className="home__container container grid">
        <HomeContent className="home__content grid">
          {/* Social Links */}
          <HomeSocial className="home__social">
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

          {/* Home Img  - ver min: 28:07 blob.svg*/}
          <HomeImg className="home__img home__blob">
            <Image src={ImagePng} alt="My Picture" className="home__blob-img" />
          </HomeImg>

          {/* Home Data -  29:20*/}
          <HomeData className="home__data">
            <Title className="home__title">Hola, Soy Maxi</Title>
            <LargeText className="home__subtitle">
              FullStack Developer
            </LargeText>
            <BodyText className="home__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus adipisicing elit,Repellendus adipisicing elit.
              Repellendus Patronus.
            </BodyText>
            <Link
              href="https://drive.google.com/file/d/15dbbPCV_ktIP3yFQdMP2Mpgh3EconX91/view?usp=sharing"
              download=""
              target="_blank"
              className="button button--flex"
            >
              Descargar CV
              <DownLoadIcon />
            </Link>
          </HomeData>
        </HomeContent>
        {/* Home Scroll -  30:38*/}
        <HomeScroll className="home__scroll">
          <Link href="#about" className="home__scroll-button button-flex">
            <MouseIcon className="home__scroll-mouse" />
            <span className="home__scroll-name">Scroll down</span>
            <ArrowDownIcon className="home__scroll-arrow" />
          </Link>
        </HomeScroll>


      </HomeContainer>
    </HomeSection>
  );
};
