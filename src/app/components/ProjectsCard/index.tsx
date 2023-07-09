import { LargeText, SubTitle } from "@/app/ui/typography";
import { ContainerCard, CardImg, CardContent, Img } from "./styled";

type propsCard = {
  title?: string;
  price?: string;
  img?: string;
  objectId?: string;
};

export function Card({ title = "Titulo", price = "price", img, objectId }: propsCard) {
  return (
    <ContainerCard>
      <CardImg>
        <Img src={img} alt={`${title}-img`} />
      </CardImg>

      <CardContent>
        <SubTitle>{title}</SubTitle>
        <LargeText>{price}</LargeText>
      </CardContent>
    </ContainerCard>
  );
}