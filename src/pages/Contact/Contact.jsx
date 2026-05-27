import SliceToTopComponent from "../../components/SliceToTopComponent/SliceToTopComponent";
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

const budgetOptions = [
  "A definir",
  "Proyecto inicial",
  "Proyecto avanzado",
  "Mantenimiento mensual",
];

const Contact = () => {
  return (
    <SliceToTopComponent>
    <main className="contact-page">
      <div className="contact-container">
        <section className="contact-hero">
          <div className="contact-status">
            <span></span>
            <p>Consultas abiertas para empresas</p>
          </div>

          <h1>Contactá a Dblock</h1>

          <p>
            Contanos qué necesita tu empresa. Podemos ayudarte con páginas web,
            SEO, aplicaciones web, aplicaciones móviles, infraestructura digital
            y mantenimiento técnico.
          </p>
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
                  <span>Teléfono</span>
                  <p>+54 11 0000-0000</p>
                </div>

                <div>
                  <span>Email</span>
                  <p>contact@dblock.com</p>
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
            <form className="contact-form">
              <div className="contact-form-grid">
                <div className="contact-field">
                  <label htmlFor="fullName">Nombre y apellido</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Escribí tu nombre"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tuemail@empresa.com"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="company">Empresa</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="service">Servicio que necesitás</label>
                  <select id="service" defaultValue="">
                    <option value="" disabled>
                      Seleccioná una opción
                    </option>
                    <option>Página web para empresa</option>
                    <option>SEO y posicionamiento web</option>
                    <option>Aplicación web a medida</option>
                    <option>Aplicación móvil</option>
                    <option>Infraestructura digital</option>
                    <option>Mantenimiento o soporte técnico</option>
                  </select>
                </div>

                <div className="contact-field contact-full">
                  <label>Tipo de proyecto</label>

                  <div className="contact-budget-grid">
                    {budgetOptions.map((option, index) => (
                      <button
                        className={index === 0 ? "active" : ""}
                        type="button"
                        key={option}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="contact-field contact-full">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Contanos qué necesitás, cuál es tu objetivo y si ya tenés una web o proyecto en marcha."
                  ></textarea>
                </div>
              </div>

              <button className="contact-submit" type="submit">
                Enviar consulta
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
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
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
