import { SectionSubtitle, SectionTitle } from "@/app/ui/typography";
import { SkillSection, SkillsContainer } from "./styled";
import { BackendIcons, FrontendIcons, OtherIcons } from "../SkillsIcons";

export const Skills = () => {
  return (
    <SkillSection id="skills" data-scroll-section>
      <SectionSubtitle>Mis Tecnologías</SectionSubtitle>
      <SectionTitle>Habilidades</SectionTitle>

      <SkillsContainer className="grid">
        <FrontendIcons />
        <BackendIcons />
        <OtherIcons />
      </SkillsContainer>
    </SkillSection>
  );
};
