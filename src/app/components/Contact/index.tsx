import { SectionSubtitle, SectionTitle } from "@/app/ui/typography";
import { Section, ContactContainer } from "./styled";
import { ContactForm } from "../ContactForm";
import { useScrollOpacity } from "@/app/hooks/useScrollOpactity";

export const Contact = () => {
  const isVisible = useScrollOpacity("contact");
  return (
    <Section
      id="contact"
      data-scroll-section
      className={isVisible ? "visible" : ""}
    >
      <SectionSubtitle>Escribeme</SectionSubtitle>
      <SectionTitle>Contacto</SectionTitle>
      <ContactContainer>
        <ContactForm />
      </ContactContainer>
    </Section>
  );
};
