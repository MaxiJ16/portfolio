import Link from "next/link";
import Image from "next/image";
import { useGetAboutMe } from "@/app/hooks";
import { DownLoadIcon, GithbubIcon, LinkedinIcon } from "@/app/ui/icons";
import { BodyText, LargeText, Title } from "@/app/ui/typography";
import { HomeSocial, HomeData, HomeImg } from "./styled";
import { Fragment } from "react";

interface AboutMe {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  linkCv: string;
  id: string;
}

export const HomeContentData = () => {
  const about: any | undefined = useGetAboutMe();
  return (
    <>
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

      {about?.map((p: AboutMe) => (
        <Fragment key={p.id}>
          <HomeImg>
            <Image src={p.image} alt={p.title} width="1000" height="1000" priority={true}/>
          </HomeImg>

          <HomeData>
            <Title>{p.title}</Title>
            <LargeText>{p.subtitle}</LargeText>
            <BodyText>{p.description}</BodyText>
            <Link href={p?.linkCv} target="_blank">
              Descargar CV
              <DownLoadIcon />
            </Link>
          </HomeData>
        </Fragment>
      ))}
    </>
  );
};
