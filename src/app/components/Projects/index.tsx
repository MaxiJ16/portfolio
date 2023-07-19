import { SubTitle } from "@/app/ui/typography";
import { ProjectSection, Container } from "./styled";
import { Card } from "../ProjectsCard";
import { useGetProjects } from "@/app/hooks";

interface Project {
  title: string;
  image: string;
  description: string;
  demoUrl: string;
  codeUrl: string;
}

export const Projects = () => {
  const projects: Project[] | undefined = useGetProjects();
  return (
    <ProjectSection id="projects" data-scroll-section>
      <SubTitle>Proyectos</SubTitle>

      <Container>
        {projects?.map((p) => (
          <Card
            title={p.title}
            img={p.image}
            description={p.description}
            demoUrl={p.demoUrl}
            codeUrl={p.codeUrl}
            key={p.title}
          />
        ))}
      </Container>
    </ProjectSection>
  );
};
