import { ArrowRightIcon } from "@/app/ui/icons";
import { SubTitle } from "@/app/ui/typography";
import {
  ProjectSection,
  Container,
  Filters,
  Item,
  Card,
  Img,
  Title,
  Button,
} from "./style";

export const ProjectsSection = () => {
  return (
    <ProjectSection id="projects">
      <SubTitle>Proyectos</SubTitle>

      <Filters>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Filters>

      <Container className="container grid">
        {/* 1 */}
        <Card>
          <Img />
          <Title>Compralo</Title>

          <Button href="#">
            Demo <ArrowRightIcon />
          </Button>
        </Card>
        {/* 2 */}
        <Card>
          <Img />
          <Title>Mascotas Perdidas</Title>

          <Button href="#">
            Demo <ArrowRightIcon />
          </Button>
        </Card>
        {/* 3 */}
        <Card>
          <Img />
          <Title>Piedra, Papel O Tijera</Title>

          <Button href="#">
            Demo <ArrowRightIcon />
          </Button>
        </Card>
        {/* 4 */}
        <Card>
          <Img />
          <Title>Prodigar</Title>

          <Button href="#">
            Demo <ArrowRightIcon />
          </Button>
        </Card>
      </Container>
    </ProjectSection>
  );
};
