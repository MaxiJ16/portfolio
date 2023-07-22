import { SectionSubtitle, SectionTitle } from "@/app/ui/typography";
import { Section, ContactContainer } from "./styled";
import { ContactForm } from "../ContactForm";

export const Contact = () => {
  return (
    <Section id="contact" data-scroll-section>
      <SectionSubtitle>Escribeme</SectionSubtitle>
      <SectionTitle>Contacto</SectionTitle>
      <ContactContainer>
        <ContactForm />
      </ContactContainer>
    </Section>
  );
};
