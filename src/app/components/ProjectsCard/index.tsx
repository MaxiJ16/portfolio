import { BodyText } from "@/app/ui/typography";
import { ArrowRightIcon, GithbubIcon } from "@/app/ui/icons";
import { ImageComponent } from "@/app/ui/image";

import {
  CardContainer,
  ContainerButtons,
  CardContent,
  Title,
  ButtonLink,
  ContainerImg,
} from "./styled";

type CardProps = {
  title: string;
  img: string;
  description: string;
  demoUrl: string;
  codeUrl: string;
};

export const Card = ({
  title,
  img,
  description,
  demoUrl,
  codeUrl,
}: CardProps) => {
  return (
    <CardContainer className="bg">
      <ContainerImg>
        <ImageComponent src={img} alt={`${title}-img`} />
      </ContainerImg>

      <CardContent>
        <Title>{title}</Title>

        <BodyText>{description}</BodyText>

        <ContainerButtons>
          <ButtonLink href={demoUrl} target="_blank">
            <ArrowRightIcon />
            Demo
          </ButtonLink>

          <ButtonLink href={codeUrl} target="_blank">
            <GithbubIcon />
            Code
          </ButtonLink>
        </ContainerButtons>
      </CardContent>
    </CardContainer>
  );
};
