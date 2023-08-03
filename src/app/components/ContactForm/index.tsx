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

  const handleSubmit = (values: ContactFormValues, { setSubmitting, resetForm }: any) => {
    setTimeout(async () => {
      try {
        const { name, email, message } = values;
        const res = await sendEmail(name, email, message);
        console.log({ res });
        if (!res) {
          setError(true); // Marcar como error si no se envía correctamente
        } else {
          setSubmitted(true); // Marcar como enviado si se envía correctamente
        }
      } catch (error) {
        setError(true); // Marcar como error si ocurre una excepción
        resetForm();
      } finally {
        setSubmitting(false);
      }
    }, 100);
  };

  const handleReset = (resetForm: () => void) => {
    resetForm(); // Restablecer los valores del formulario a los valores iniciales
    setSubmitted(false); // Restablecer el estado de envío a falso
    setError(false); // Restablecer el estado de error a falso
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
                placeholder="Hola, me comunico desde tu portfolio..."
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
                <AlertIcon/>
                Error al enviar el mensaje.
              </ErrorText>
            )}
          </FormContain>
        </Form>
      )}
    </Formik>
  );
};
