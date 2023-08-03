import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const msg = {
      to: "maxijofre.c@gmail.com",
      from: "maxijofre.c@gmail.com",
      subject: `Portfolio: Mensaje recibido de ${name}`,
      text: "Mensaje recibido",
      html: `<div>
              <h1>PORTFOLIO</h1>
              <p>Estimado Maxi, rellenaron los datos de tu form: </p>
              <br/>
              <p>Name: <strong>${name}</strong>.</p>
              <br/>
              <p>Email: <strong>${email}</strong>.</p>
              <br/>
              <p>Message: <strong>${message}</strong>.</p>
             </div>`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Correo enviado correctamente" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error al enviar el correo" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
};
