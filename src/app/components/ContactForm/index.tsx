import {
  FormTextareaContainer,
  Form,
  FormDiv,
  Input,
  Label,
  Textarea,
  Button,
} from "./styled";

export const ContactForm = () => {
  return (
    <Form>
      <FormDiv>
        <Label className="tag">Nombre</Label>
        <Input type="text" className="input" placeholder="Ingresa tu nombre" />
      </FormDiv>

      <FormDiv>
        <Label className="tag">Email</Label>

        <Input type="text" className="input" placeholder="Ingresa tu email" />
      </FormDiv>

      <FormTextareaContainer>
        <Label className="tag">Mensaje</Label>
        <Textarea
          className="textarea"
          placeholder="Escribe tu mensaje"
        ></Textarea>
      </FormTextareaContainer>

      <Button>Enviar</Button>
    </Form>
  );
};
