import { SectionTitle, SectionSubtitle } from "@/app/ui/typography";
import { ProjectSection, Container, ContainerTitlesSection } from "./styled";
import { Card } from "../ProjectsCard";
import { useGetProjects } from "@/app/hooks";
import { useScrollOpacity } from "@/app/hooks/useScrollOpactity";

interface Project {
  title: string;
  image: string;
  description: string;
  demoUrl: string;
  codeUrl: string;
  id: string;
}

export const Projects = () => {
  const projects: Project[] | undefined = useGetProjects();
  const isVisible = useScrollOpacity("projects");

  return (
    <ProjectSection
      id="projects"
      data-scroll-section
      className={isVisible ? "visible" : ""}
    >
      <ContainerTitlesSection>
        <SectionTitle>Proyectos</SectionTitle>
        <SectionSubtitle>Mi Portfolio</SectionSubtitle>
      </ContainerTitlesSection>

      <Container>
        {projects?.map((p) => (
          <Card
            title={p.title}
            img={p.image}
            description={p.description}
            demoUrl={p.demoUrl}
            codeUrl={p.codeUrl}
            key={p.id}
          />
        ))}
      </Container>
    </ProjectSection>
  );
};
