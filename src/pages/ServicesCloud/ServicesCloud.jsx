import "./ServiciosCloud.css";
import FirstSectionPage from "../../components/FirstSectionPage/FirstSectionPage";

const architectureItems = [
  "HOSTING Y SERVIDORES",
  "DESPLIEGUE DE APLICACIONES",
  "MONITOREO Y MANTENIMIENTO",
];

const securityCards = [
  {
    icon: "vpn_key",
    title: "Accesos protegidos",
    text: "Ayudamos a ordenar accesos, credenciales y configuraciones sensibles para reducir riesgos técnicos.",
    color: "green",
  },
  {
    icon: "analytics",
    title: "Monitoreo técnico",
    text: "Revisamos rendimiento, disponibilidad y posibles problemas para mantener tu infraestructura funcionando.",
    color: "blue",
  },
];

const ServiciosCloud = () => {
  return (
    <>
<FirstSectionPage
         btnPrimary={ { text: "Solicitar consulta", href: "/contacto" } }
         btnSecondary={ { text: "Ver soluciones cloud", href: "#solutions" } }
         description={"Configuramos, optimizamos y mantenemos infraestructura digital paraempresas: hosting, servidores, despliegues, entornos cloud,seguridad técnica y soporte para aplicaciones web."} 
         title={"Servicios cloud, infraestructura web<"}
         span={"Infraestructura digital para empresas"}
         statusCard={`INFRAESTRUCTURA DIGITAL PARA EMPRESAS`}
         />
      <section
        id="solutions"
        className="servicios-cloud-section servicios-cloud-solutions"
      >
        <div className="servicios-cloud-container">
          <div className="servicios-cloud-section-header">
            <h2>Soluciones cloud, hosting y servidores</h2>
            <div></div>
          </div>

          <div className="servicios-cloud-bento">
            <article className="servicios-cloud-card servicios-cloud-threat-card">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80"
                alt="Seguridad técnica e infraestructura digital para empresas"
              />

              <div>
                <span className="material-symbols-outlined">security</span>
                <h3>Seguridad técnica</h3>
                <p>
                  Revisamos configuraciones, accesos, entornos y buenas
                  prácticas para reducir riesgos en sitios web, aplicaciones e
                  infraestructura.
                </p>
              </div>
            </article>

            <article className="servicios-cloud-card servicios-cloud-uptime-card">
              <span className="material-symbols-outlined">router</span>

              <div>
                <h3>Hosting y disponibilidad</h3>
                <p>
                  Preparamos entornos de hosting y servidores para que tu sitio o
                  aplicación funcione de forma estable y pueda escalar cuando lo
                  necesite.
                </p>

                <div className="servicios-cloud-protocol">
                  <span>ENTORNO: OPTIMIZADO</span>
                  <i></i>
                </div>
              </div>
            </article>

            <article className="servicios-cloud-card servicios-cloud-architecture-card">
              <h3>Arquitectura del servidor</h3>

              <ul>
                {architectureItems.map((item) => (
                  <li key={item}>
                    <span></span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="servicios-cloud-card servicios-cloud-scale-card">
              <div>
                <h3>Escalabilidad</h3>
                <p>
                  Diseñamos bases técnicas preparadas para crecer en tráfico,
                  usuarios, contenido y nuevas funcionalidades.
                </p>
              </div>

              <span className="material-symbols-outlined">trending_up</span>
            </article>
          </div>
        </div>
      </section>

      <section className="servicios-cloud-section servicios-cloud-benefits">
        <div className="servicios-cloud-container servicios-cloud-benefits-grid">
          <div className="servicios-cloud-benefits-content">
            <div>
              <span className="servicios-cloud-label">
                MANTENIMIENTO E INFRAESTRUCTURA
              </span>

              <h2>Una base técnica más ordenada, segura y estable</h2>

              <p>
                Ayudamos a empresas que necesitan publicar aplicaciones,
                mejorar el rendimiento de su web, ordenar servidores, migrar
                proyectos o contar con soporte técnico para su infraestructura.
              </p>
            </div>

            <div className="servicios-cloud-security-grid">
              {securityCards.map((card) => (
                <article
                  className="servicios-cloud-security-card"
                  key={card.title}
                >
                  <span
                    className={`material-symbols-outlined ${
                      card.color === "green" ? "icon-green" : "icon-blue"
                    }`}
                  >
                    {card.icon}
                  </span>

                  <h5>{card.title}</h5>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="servicios-cloud-live-card">
            <div className="servicios-cloud-live-label">
              <span>●</span> MONITOREO TÉCNICO
            </div>

            <img
              src="https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=1400&q=80"
              alt="Servidor y monitoreo de infraestructura cloud"
            />

            <div className="servicios-cloud-live-stats">
              <div>
                <span>ESTADO</span>
                <strong>ACTIVO</strong>
              </div>

              <i></i>

              <div>
                <span>SOPORTE</span>
                <strong>TÉCNICO</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="servicios-cloud-cta">
        <div className="servicios-cloud-container">
          <div className="servicios-cloud-cta-box">
            <div>
              <h2>¿Necesitás mejorar tu infraestructura digital?</h2>

              <p>
                Podemos ayudarte con hosting, servidores, despliegues,
                mantenimiento, seguridad técnica y optimización de aplicaciones
                web.
              </p>

              <a
                href="mailto:contact@dblock.com"
                className="servicios-cloud-cta-button"
              >
                Pedir consulta técnica
              </a>
            </div>

            <span>DBLOCK CLOUD</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiciosCloud;
