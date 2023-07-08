import { ArrowRightIcon, GitIcon, GithbubIcon } from "@/app/ui/icons";
import { BodyText, SubTitle } from "@/app/ui/typography";
import {
  ProjectSection,
  Container,
  Filters,
  Item,
  Card,
  Img,
  Title,
  Button,
} from "./styled";

export const Projects = () => {
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

          <div className="card-content">
            <Title>Piedra, Papel O Tijera</Title>
            <p className="description">Famoso piedra papel o tijeras</p>

            <div className="containerButton">
              <Button href="#">
                <ArrowRightIcon />
                Demo
              </Button>

              <Button href="#">
                <GithbubIcon />
                Code
              </Button>
            </div>
          </div>
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
