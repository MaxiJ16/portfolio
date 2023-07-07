import { SubTitle } from "@/app/ui/typography";
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
} from "./style";
import { SendIcon } from "@/app/ui/icons";

export const Contact = () => {
  return (
    <Section className="contact section" id="contact">
      <SubTitle>Contacto</SubTitle>

      <ContactContainer className="container grid">
        <div className="content">
          <TitleForm className="title">Escribeme</TitleForm>

          <Form action="" className="contactForm">
            <FormDiv className="formDiv">
              <Label htmlFor="" className="tag">
                Nombre
              </Label>
              <Input
                type="text"
                className="input"
                placeholder="Ingresa tu nombre"
              />
            </FormDiv>

            <FormDiv className="formDiv">
              <Label htmlFor="" className="tag">
                Email
              </Label>

              <Input
                type="text"
                className="input"
                placeholder="Ingresa tu email"
              />
            </FormDiv>

            <FormTextareaContainer className="formDiv">
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

            <Button className="button">
              Enviar Mensaje
              <SendIcon />
            </Button>
          </Form>
        </div>
      </ContactContainer>
    </Section>
  );
};
