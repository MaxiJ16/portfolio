import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import {
  FormTextareaContainer,
  FormDiv,
  Label,
  Button,
  FormContain,
  ErrorText,
} from "./styled";
import { Loader } from "@/app/ui/loader";
import { sendEmail } from "@/app/lib/sendgrid";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const isRequired = "Campo obligatorio!";
const contactSchema = yup.object({
  name: yup.string().required(isRequired),
  email: yup
    .string()
    .required(isRequired)
    .email("Formato de correo electrónico inválido"),
  message: yup.string().required(isRequired),
});

export const ContactForm = () => {
  const handleSubmit = (values: ContactFormValues, { setSubmitting }: any) => {
    setTimeout(async () => {
      const { name, email, message } = values;
      console.log({ name, email, message });
      // const res = await sendEmail(name, email, message);

      setSubmitting(false);
    }, 600);
  };

  return (
    <Formik<ContactFormValues>
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
      initialValues={initialValues}
    >
      {({ isSubmitting, setFieldTouched }) => (
        <Form>
          <FormContain>
            <FormDiv>
              <Label className="tag">Nombre</Label>
              <Field
                name="name"
                placeholder="Ingresa tu nombre"
                type="text"
                onBlur={() => setFieldTouched("name", true)}
              />
              <ErrorMessage name="name" component={ErrorText} />
            </FormDiv>

            <FormDiv>
              <Label className="tag">Email</Label>
              <Field
                name="email"
                placeholder="Ingresa tu email"
                type="email"
                onBlur={() => setFieldTouched("email", true)}
              />
              <ErrorMessage name="email" component={ErrorText} />
            </FormDiv>

            <FormTextareaContainer>
              <Label className="tag">Mensaje</Label>
              <Field
                as="textarea"
                name="message"
                placeholder="Escribe tu mensaje"
                onBlur={() => setFieldTouched("message", true)}
              />
              <ErrorMessage
                name="message"
                component={ErrorText}
                className="errorText"
              />
            </FormTextareaContainer>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Loader /> : "Enviar"}
            </Button>
          </FormContain>
        </Form>
      )}
    </Formik>
  );
};
