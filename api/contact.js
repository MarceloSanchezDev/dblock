import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "ventas@dblock.com.ar";

const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Dblock <contacto@dblock.com.ar>";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeText(value) {
  return String(value || "")
    .trim()
    .replace(/[<>]/g, "");
}

function createEmailHtml(data) {
  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h1>Nueva consulta desde Dblock</h1>

      <p>
        Recibiste una nueva consulta desde el formulario de contacto del sitio web.
      </p>

      <hr />

      <h2>Datos del contacto</h2>

      <p><strong>Nombre:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Empresa:</strong> ${data.company || "No especificada"}</p>
      <p><strong>Servicio:</strong> ${data.service}</p>
      <p><strong>Tipo de proyecto:</strong> ${data.projectType}</p>

      <h2>Mensaje</h2>
      <p style="white-space: pre-line;">${data.message}</p>
    </div>
  `;
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({
      ok: false,
      message: "Método no permitido.",
    });
  }

  try {
    const body = request.body || {};

    const fullName = sanitizeText(body.fullName);
    const email = sanitizeText(body.email);
    const company = sanitizeText(body.company);
    const service = sanitizeText(body.service);
    const projectType = sanitizeText(body.projectType);
    const message = sanitizeText(body.message);

    if (!fullName || fullName.length < 3) {
      return response.status(400).json({
        ok: false,
        message: "Ingresá tu nombre y apellido.",
      });
    }

    if (!email || !isValidEmail(email)) {
      return response.status(400).json({
        ok: false,
        message: "Ingresá un email válido.",
      });
    }

    if (!service) {
      return response.status(400).json({
        ok: false,
        message: "Seleccioná un servicio.",
      });
    }

    if (!projectType) {
      return response.status(400).json({
        ok: false,
        message: "Seleccioná un tipo de proyecto.",
      });
    }

    if (!message || message.length < 10) {
      return response.status(400).json({
        ok: false,
        message: "El mensaje debe tener al menos 10 caracteres.",
      });
    }

    const contactData = {
      fullName,
      email,
      company,
      service,
      projectType,
      message,
    };

    const { data, error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `Nueva consulta de ${fullName} - Dblock`,
      html: createEmailHtml(contactData),
    });

    if (error) {
      console.error("Resend error:", error);

      return response.status(500).json({
        ok: false,
        message: "No se pudo enviar la consulta.",
      });
    }

    return response.status(200).json({
      ok: true,
      message: "Consulta enviada correctamente.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return response.status(500).json({
      ok: false,
      message: "Error interno del servidor.",
    });
  }
}