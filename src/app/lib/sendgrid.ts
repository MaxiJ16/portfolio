export async function sendEmail(name: string, email: string, message: string) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name, email, message }),
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
