import {
  SectionSubtitle,
  SectionTitle,
  SubTitle,
  TinyText,
} from "@/app/ui/typography";
import { SkillSection, SkillsContainer } from "./style";
import { BackendIcons, FrontendIcons, OtherIcons } from "../skills-icons";

export const SkillsSection = () => {
  return (
    <SkillSection id="skills">
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
