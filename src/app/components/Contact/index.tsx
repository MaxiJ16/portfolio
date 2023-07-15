import { SectionSubtitle, SectionTitle, SubTitle } from "@/app/ui/typography";

import {
  Section,
  ContactContainer,
  FormTextareaContainer,
  Form,
  TitleForm,
  FormDiv,
  Input,
  Label,
  Textarea,
  Button,
} from "./styled";

export const Contact = () => {
  return (
    <Section id="contact">
      <SectionSubtitle>Escribeme</SectionSubtitle>
      <SectionTitle>Contacto</SectionTitle>

      <ContactContainer>
        <TitleForm></TitleForm>

        <Form action="">
          <FormDiv>
            <Label htmlFor="" className="tag">
              Nombre
            </Label>
            <Input
              type="text"
              className="input"
              placeholder="Ingresa tu nombre"
            />
          </FormDiv>

          <FormDiv>
            <Label htmlFor="" className="tag">
              Email
            </Label>

            <Input
              type="text"
              className="input"
              placeholder="Ingresa tu email"
            />
          </FormDiv>

          <FormTextareaContainer>
            <Label htmlFor="" className="tag">
              Mensaje
            </Label>
            <Textarea
              name=""
              id=""
              className="textarea"
              placeholder="Escribe tu mensaje"
            ></Textarea>
          </FormTextareaContainer>

          <Button>Enviar</Button>
        </Form>
      </ContactContainer>
    </Section>
  );
};
