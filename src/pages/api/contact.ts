import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { to, from, subject, text } = req.body;

    const msg = {
      to: to,
      from: from,
      subject: `Portfolio: Mensaje recibido de ${from}`,
      text: subject,
      html: `<div>
              <h1>PORTFOLIO</h1>
              <p>Estimado Maxi</p>
              <br/>
              Te dejaron este mensaje: <strong>${text}</strong>.</p>
             </div>`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Correo enviado correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al enviar el correo" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
};
