import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { to, from, subject, text } = req.body;

    const msg = {
      to: to,
      from: from,
      subject: `Mensaje recibido de ${subject}`,
      text: "Contacto desde tu portfolio",
      html: `<div>
              <h1>PORTFOLIO</h1>
              <p>Estimado/a Maxi, Desde tu portfolio se comunica ${to}, su email es: ${to} y te dejo este mensaje: <strong>${text}</strong>.</p>
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

  res.status(200).json({ status: "ok" });
};
