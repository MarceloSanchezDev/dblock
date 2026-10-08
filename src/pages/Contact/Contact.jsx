import { useRef, useState } from "react";
import SliceToTopComponent from "../../components/SliceToTopComponent/SliceToTopComponent";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import { trackEvent } from "../../lib/analytics";
import "./Contact.css";

const trustBadges = [
  {
    icon: "speed",
    title: "Respuesta rápida",
    text: "Revisamos tu consulta para entender qué necesita tu empresa y proponerte el próximo paso.",
    color: "blue",
  },
  {
    icon: "terminal",
    title: "Análisis técnico",
    text: "Evaluamos si necesitás una página web, SEO, una aplicación, infraestructura o una mejora sobre lo existente.",
    color: "green",
  },
  {
    icon: "architecture",
    title: "Soluciones a medida",
    text: "Adaptamos la propuesta al tipo de empresa, presupuesto, objetivos y etapa del proyecto.",
    color: "blue",
  },
];

const serviceOptions = [
  "Sistema de gestión o software a medida",
  "Automatización de procesos",
  "Aplicación web",
  "Aplicación móvil",
  "Ecommerce o portal B2B",
  "Integraciones entre sistemas",
  "SEO y crecimiento digital",
  "Infraestructura y soporte",
  "No estoy seguro",
];

const initialFormData = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const Contact = () => {
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const [formData, setFormData] = useState(initialFormData);
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const hasTrackedFormStart = useRef(false);

  const isSubmitting = submitStatus === "loading";

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setFieldErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    if (name === "service" && value) {
      trackEvent("contact_service_selected", { service_type: value });
    }
  };

  const handleFormFocus = () => {
    if (hasTrackedFormStart.current) return;

    hasTrackedFormStart.current = true;
    trackEvent("contact_form_start");
  };

  const validateForm = () => {
    const errors = {};

    if (formData.fullName.trim().length < 3) {
      errors.fullName = "Ingresá tu nombre y apellido.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Ingresá un email válido.";
    }

    if (!formData.service) {
      errors.service = "Seleccioná un servicio.";
    }

    if (formData.message.trim().length < 10) {
      errors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm();
    setFieldErrors(errors);
    setSubmitMessage("");

    if (Object.keys(errors).length > 0) {
      trackEvent("form_error", { error_count: Object.keys(errors).length });
      setSubmitStatus("error");
      setSubmitMessage("Revisá los campos marcados antes de enviar.");
      return;
    }

    try {
      setSubmitStatus("loading");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          message: formData.message.trim(),
          formStartedAt,
          website: "",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "No se pudo enviar la consulta.");
      }

      setSubmitStatus("success");
      trackEvent("generate_lead", { service_type: formData.service });
      setSubmitMessage("Tu consulta fue enviada correctamente. Te responderemos a la brevedad.");
      setFormData(initialFormData);
      setFormStartedAt(Date.now());
      setFieldErrors({});
    } catch (error) {
      trackEvent("contact_submit_error");
      setSubmitStatus("error");
      setSubmitMessage(
        error.message || "Ocurrió un error al enviar la consulta."
      );
    }
  };

  return (
    <SliceToTopComponent>
      <main className="contact-page">
        <div className="contact-container">
          <section className="contact-hero">
            <HeroVideo
              className="contact-hero-video"
              src="/assets/videos/contact-hero.mp4"
              poster="/assets/images/digital-network.jpg"
            />
            <div className="contact-hero-content">
              <div className="contact-status">
                <span></span>
                <p>Consultas abiertas para empresas</p>
              </div>

              <h1>Contactá a Dblock</h1>

              <p>
                Contanos cómo trabaja hoy tu empresa y qué proceso quieren mejorar.
                Analizamos el problema antes de proponer una solución.
              </p>
            </div>
          </section>

          <section className="contact-main-grid">
            <aside className="contact-sidebar">
              <div className="contact-trust-list">
                {trustBadges.map((badge) => (
                  <article className="contact-trust-card" key={badge.title}>
                    <span
                      className={`material-symbols-outlined contact-icon-${badge.color}`}
                    >
                      {badge.icon}
                    </span>

                    <div>
                      <h3>{badge.title}</h3>
                      <p>{badge.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="contact-info-card">
                <div>
                  <span>Ubicación</span>
                  <h3>Buenos Aires, Argentina</h3>
                  <p>Morón, Provincia de Buenos Aires</p>
                </div>

                <div className="contact-info-grid">
                  <div>
                    <span>Email</span>
                    <p>ventas@dblock.com.ar</p>
                  </div>
                </div>

                <div className="contact-operations">
                  <div>
                    <strong>Atención a empresas</strong>

                    <div className="contact-signal-bars">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                  <p>
                    Podemos ayudarte a definir el alcance del proyecto, mejorar tu
                    sitio actual o crear una nueva solución digital desde cero.
                  </p>
                </div>
              </div>
            </aside>

            <section className="contact-form-panel">
              <form className="contact-form" onSubmit={handleSubmit} onFocusCapture={handleFormFocus} noValidate>
                <div className="contact-honeypot" aria-hidden="true">
                  <label htmlFor="website">Sitio web</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="contact-form-grid">
                  <div className="contact-field">
                    <label htmlFor="fullName">Nombre y apellido</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Escribí tu nombre"
                      maxLength={120}
                      autoComplete="name"
                      aria-invalid={Boolean(fieldErrors.fullName)}
                    />
                    {fieldErrors.fullName && (
                      <p className="contact-field-error">{fieldErrors.fullName}</p>
                    )}
                  </div>

                  <div className="contact-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tuemail@empresa.com"
                      maxLength={254}
                      autoComplete="email"
                      aria-invalid={Boolean(fieldErrors.email)}
                    />
                    {fieldErrors.email && (
                      <p className="contact-field-error">{fieldErrors.email}</p>
                    )}
                  </div>

                  <div className="contact-field">
                    <label htmlFor="company">Empresa</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nombre de tu empresa"
                      maxLength={160}
                      autoComplete="organization"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="phone">Teléfono <span>(opcional)</span></label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Código de área y número"
                      maxLength={60}
                      autoComplete="tel"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="service">¿Qué querés mejorar?</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(fieldErrors.service)}
                    >
                      <option value="" disabled>
                        Seleccioná una opción
                      </option>

                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.service && (
                      <p className="contact-field-error">{fieldErrors.service}</p>
                    )}
                  </div>

                  <div className="contact-field contact-full">
                    <label htmlFor="message">Contanos cómo trabajan hoy o qué problema quieren resolver</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Por ejemplo: recibimos pedidos por WhatsApp y después los cargamos a mano en una planilla."
                      maxLength={3000}
                      aria-invalid={Boolean(fieldErrors.message)}
                    />
                    {fieldErrors.message && (
                      <p className="contact-field-error">{fieldErrors.message}</p>
                    )}
                  </div>
                </div>

                {submitMessage && (
                  <div
                    className={`contact-submit-message contact-submit-message-${submitStatus}`}
                    role="status"
                  >
                    {submitMessage}
                  </div>
                )}

                <button
                  className="contact-submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Analizando consulta..." : "Analizar mi proyecto"}
                </button>
              </form>
            </section>
          </section>

          <section className="contact-map-section">
            <div className="contact-map-header">
              <h2>Atención digital para empresas</h2>

              <div>
                <span>
                  <i className="blue-dot"></i>
                  Buenos Aires
                </span>

                <span>
                  <i className="green-dot"></i>
                  Argentina
                </span>
              </div>
            </div>

            <div className="contact-map-card">
              <img
                src="/assets/images/digital-network.jpg"
                alt="Servicios digitales para empresas en Buenos Aires Argentina"
              />

              <div className="contact-map-hud contact-map-hud-left">
                <p>UBICACIÓN: BUENOS AIRES</p>
                <p>ZONA: MORÓN</p>
              </div>

              <div className="contact-map-hud contact-map-hud-right">
                <p>CONSULTAS: ACTIVAS</p>
                <span>RESPUESTA: A COORDINAR</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </SliceToTopComponent>
  );
};

export default Contact;
