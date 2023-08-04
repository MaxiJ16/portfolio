import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import {
  FormTextareaContainer,
  FormDiv,
  Label,
  Button,
  FormContain,
  ErrorInputText,
  SuccessText,
  ErrorText,
} from "./styled";
import { Loader } from "@/app/ui/loader";
import { sendEmail } from "@/app/lib/sendgrid";
import { useState } from "react";
import { CheckIcon, AlertIcon } from "@/app/ui/icons";

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
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (
    values: ContactFormValues,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      const { name, email, message } = values;
      const emailSent = await sendEmail(name, email, message);
      if (!emailSent) {
        setError(true); // Marcar como error si no se envía correctamente
      }
      setSubmitted(true); // Marcar como enviado si se envía correctamente
      resetForm();
      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
    } catch (error) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
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
                placeholder="Juán Perez"
                type="text"
                onBlur={() => setFieldTouched("name", true)}
              />
              <ErrorMessage name="name" component={ErrorInputText} />
            </FormDiv>

            <FormDiv>
              <Label className="tag">Email</Label>
              <Field
                name="email"
                placeholder="juanperez@gmail.com"
                type="email"
                onBlur={() => setFieldTouched("email", true)}
              />
              <ErrorMessage name="email" component={ErrorInputText} />
            </FormDiv>

            <FormTextareaContainer>
              <Label className="tag">Mensaje</Label>
              <Field
                as="textarea"
                name="message"
                placeholder="Hola Maxi, me gustó tu trabajo..."
                onBlur={() => setFieldTouched("message", true)}
              />
              <ErrorMessage
                name="message"
                component={ErrorInputText}
                className="errorText"
              />
            </FormTextareaContainer>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Loader /> : "Enviar"}
            </Button>

            {submitted && !error && (
              <SuccessText>
                <CheckIcon />
                Mensaje enviado con éxito!
              </SuccessText>
            )}

            {error && (
              <ErrorText>
                <AlertIcon />
                Error al enviar el mensaje.
              </ErrorText>
            )}
          </FormContain>
        </Form>
      )}
    </Formik>
  );
};
