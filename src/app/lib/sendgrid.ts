import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

export async function sendEmail(name: string, email: string, message: string) {
  const msg = {
    to: email,
    from: "maxijofre.c@gmail.com",
    subject: `Mensaje recibido de ${name}`,
    text: "Contacto desde tu portfolio",
    html: `<div>
            <h1>PORTFOLIO</h1>
            <p>Estimado/a Maxi, Desde tu portfolio se comunica ${name}, su email es: ${email} y te dejo este mensaje: <strong>${message}</strong>.</p>
           </div>`,
  };

  const mailSentRes = await sgMail.send(msg);

  return {
    message: "Codigo enviado! Revisa tu casilla de mensajes",
    res: mailSentRes,
  };
}
