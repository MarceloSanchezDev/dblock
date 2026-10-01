import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "ventas@dblock.com.ar";

const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Dblock <contacto@dblock.com.ar>";

const MAX_FIELD_LENGTHS = {
  fullName: 120,
  email: 254,
  company: 160,
  phone: 60,
  service: 100,
  message: 3000,
};

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_COMPLETION_TIME_MS = 3000;
const requestLog = new Map();

const allowedServices = new Set([
  "Sistema de gestión o software a medida",
  "Automatización de procesos",
  "Aplicación web",
  "Aplicación móvil",
  "Ecommerce o portal B2B",
  "Integraciones entre sistemas",
  "SEO y crecimiento digital",
  "Infraestructura y soporte",
  "No estoy seguro",
]);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeText(value, maxLength) {
  return String(value || "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .trim()
    .replace(/[<>]/g, "")
    .slice(0, maxLength);
}

function getClientIp(request) {
  const forwardedFor =
    request.headers["x-vercel-forwarded-for"] ||
    request.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string") {
    return forwardedFor.split(",")[0].trim();
  }

  return request.socket?.remoteAddress || "unknown";
}

function isRateLimited(ip, now) {
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = (requestLog.get(ip) || []).filter(
    (timestamp) => timestamp > windowStart,
  );

  timestamps.push(now);
  requestLog.set(ip, timestamps);

  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
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
      <p><strong>Teléfono:</strong> ${data.phone || "No especificado"}</p>
      <p><strong>Servicio:</strong> ${data.service}</p>

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
    const now = Date.now();
    const clientIp = getClientIp(request);

    if (body.website) {
      return response.status(400).json({
        ok: false,
        message: "No se pudo enviar la consulta.",
      });
    }

    const formStartedAt = Number(body.formStartedAt);

    if (
      !Number.isFinite(formStartedAt) ||
      formStartedAt > now ||
      now - formStartedAt < MIN_FORM_COMPLETION_TIME_MS
    ) {
      return response.status(400).json({
        ok: false,
        message: "Esperá unos segundos antes de enviar la consulta.",
      });
    }

    if (isRateLimited(clientIp, now)) {
      response.setHeader("Retry-After", String(RATE_LIMIT_WINDOW_MS / 1000));

      return response.status(429).json({
        ok: false,
        message: "Recibimos demasiados intentos. Esperá unos minutos e intentá de nuevo.",
      });
    }

    const fullName = sanitizeText(body.fullName, MAX_FIELD_LENGTHS.fullName);
    const email = sanitizeText(body.email, MAX_FIELD_LENGTHS.email);
    const company = sanitizeText(body.company, MAX_FIELD_LENGTHS.company);
    const phone = sanitizeText(body.phone, MAX_FIELD_LENGTHS.phone);
    const service = sanitizeText(body.service, MAX_FIELD_LENGTHS.service);
    const message = sanitizeText(body.message, MAX_FIELD_LENGTHS.message);

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

    if (!allowedServices.has(service)) {
      return response.status(400).json({
        ok: false,
        message: "Seleccioná un servicio.",
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
      phone,
      service,
      message,
    };

    if (!resend) {
      console.error("RESEND_API_KEY is not configured.");

      return response.status(503).json({
        ok: false,
        message: "El formulario no está disponible temporalmente.",
      });
    }

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
