export async function sendEmail(name: string, email: string, message: string) {
  const data = {
    from: email,
    to: "maxijofre.c@gmail.com",
    subject: "Contacto desde tu portfolio",
    text: `Usuario: ${name},\nEmail: ${name},\nMensaje: ${message}`,
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(data),
    });
    

    if (response.ok) {
      return "¡Correo enviado correctamente!";
    } else {
      console.error("Error al enviar el correo");
    }
  } catch (error) {
    console.error("Error al realizar la solicitud");
  }
}
