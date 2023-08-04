import { SectionSubtitle, SectionTitle } from "@/app/ui/typography";
import { SkillSection, SkillsContainer } from "./styled";
import { BackendIcons, FrontendIcons, OtherIcons } from "../SkillsIcons";
import { useScrollOpacity } from "@/app/hooks/useScrollOpactity";

export const Skills = () => {
  const isVisible = useScrollOpacity("skills");
  return (
    <SkillSection
      id="skills"
      data-scroll-section
      className={isVisible ? "visible" : ""}
    >
      <SectionSubtitle>Mis Habilidades</SectionSubtitle>
      <SectionTitle>Tecnologías</SectionTitle>

      <SkillsContainer className="grid">
        <FrontendIcons />
        <BackendIcons />
        <OtherIcons />
      </SkillsContainer>
    </SkillSection>
  );
};
