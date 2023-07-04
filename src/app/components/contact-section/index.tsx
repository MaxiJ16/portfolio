import { SubTitle } from "@/app/ui/typography";
import { Section, ContactContainer } from "./style";

export const ContactSection = () => {
  return (
    <Section className="contact section" id="contact">
      <SubTitle>Contacto</SubTitle>
      <ContactContainer className="container grid">
        <div className="content">
          <h3 className="title">Escribeme</h3>

          <form action="" className="contactForm">
            <div className="formDiv">
              <label htmlFor="" className="tag">
                Nombre
              </label>
              <input
                type="text"
                className="input"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="formDiv">
              <label htmlFor="" className="tag">
                Email
              </label>
              <input
                type="text"
                className="input"
                placeholder="Ingresa tu email"
              />
            </div>

            <div className="formDiv">
              <label htmlFor="" className="tag">
                Mensaje
              </label>
              <textarea
                name=""
                id=""
                className="textarea"
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>

            <button className="button">Enviar</button>
          </form>
        </div>
      </ContactContainer>
    </Section>
  );
};
