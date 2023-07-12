import { BodyText, LargeText, SubTitle } from "@/app/ui/typography";
import { ArrowRightIcon, GitIcon, GithbubIcon } from "@/app/ui/icons";
import {
  CardContainer,
  ContainerButtons,
  CardContent,
  Title,
  ButtonLink,
} from "./styled";
import { ImageComponent } from "@/app/ui/image";

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
    <CardContainer>
      <ImageComponent src={img} alt={`${title}-img`} />

      <CardContent>
        <Title>{title}</Title>
        <BodyText>{description}</BodyText>

        <ContainerButtons>
          <ButtonLink href={demoUrl}>
            <ArrowRightIcon />
            Demo
          </ButtonLink>

          <ButtonLink href={codeUrl}>
            <GithbubIcon />
            Code
          </ButtonLink>
        </ContainerButtons>
      </CardContent>
    </CardContainer>
  );
};
