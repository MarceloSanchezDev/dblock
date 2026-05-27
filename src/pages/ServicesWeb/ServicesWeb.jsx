import FirstSectionPage from "../../components/FirstSectionPage/FirstSectionPage";
import SliceToTopComponent from "../../components/SliceToTopComponent/SliceToTopComponent";
import "./ServiciosWeb.css";

const capabilities = [
  {
    icon: "web_asset",
    title: "Páginas web profesionales",
    text: "Diseñamos y desarrollamos sitios web institucionales, landing pages y páginas comerciales para empresas que necesitan presencia digital clara y confiable.",
    action: "Ver soluciones web",
    color: "green",
  },
  {
    icon: "bolt",
    title: "Rendimiento y SEO técnico",
    text: "Optimizamos estructura, velocidad, etiquetas, contenido y experiencia para que tu sitio pueda posicionar mejor y generar más consultas.",
    action: "Mejorar mi sitio",
    color: "blue",
  },
];

const caseStudies = [
  {
    title: "Sitios web empresariales",
    text: "Creamos páginas web pensadas para explicar servicios, transmitir confianza y convertir visitantes en consultas reales.",
    tags: ["REACT", "SEO", "RESPONSIVE"],
    color: "blue",
  },
  {
    title: "Aplicaciones web a medida",
    text: "Desarrollamos sistemas, paneles y herramientas digitales para empresas que necesitan ordenar procesos o mejorar su operación.",
    tags: ["REACT", "NODE.JS", "API"],
    color: "green",
  },
];

const techStack = [
  {
    icon: "integration_instructions",
    name: "React",
  },
  {
    icon: "language",
    name: "SEO",
  },
  {
    icon: "api",
    name: "APIs",
  },
  {
    icon: "storage",
    name: "Backend",
  },
  {
    icon: "monitoring",
    name: "Analítica",
  },
  {
    icon: "deployed_code",
    name: "Deploy",
  },
];

const ServiciosWeb = () => {
  return (
    <SliceToTopComponent>
    <FirstSectionPage
         btnPrimary={ { text: "Ver soluciones", href: "#capabilities" } }
         btnSecondary={ { text: "Solicitar consulta", href: "/contacto" } }
         description={"Creamos páginas web, landing pages, ecommerce y aplicaciones webpara empresas que quieren mejorar su presencia online, explicarmejor sus servicios y conseguir más consultas."} 
         title={"Desarrollo web para empresas"}
         span={"Servicios web para empresas"}
         statusCard={`DESARROLLO WEB - SEO TÉCNICO - APLICACIONES WEB A MEDIDA - TECNOLOGÍAS Y PROCESO DE TRABAJO`}
         />

      <section
        id="documentation"
        className="servicios-web-section servicios-web-capabilities"
      >
        <div className="servicios-web-container">
          <div className="servicios-web-section-header">
            <div>
              <span>01 // Servicios web</span>
              <h2>Páginas web y aplicaciones orientadas a consultas</h2>
            </div>

            <p>
              Desarrollamos soluciones web con diseño responsive, contenido
              claro, estructura SEO y llamadas a la acción para que tu empresa
              pueda captar más oportunidades comerciales.
            </p>
          </div>

          <div className="servicios-web-bento-grid">
            <article className="servicios-web-bento-large">
              <div>
                <span className="material-symbols-outlined servicios-web-icon-primary">
                  database
                </span>

                <h3>Aplicaciones web a medida</h3>

                <p>
                  Construimos sistemas web, paneles administrativos, dashboards
                  y herramientas digitales adaptadas a los procesos reales de tu
                  empresa.
                </p>
              </div>

              <a href="#contact" className="servicios-web-card-link">
                Consultar por una aplicación web
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </article>

            {capabilities.map((item) => (
              <article
                className={`servicios-web-bento-card servicios-web-card-${item.color}`}
                key={item.title}
              >
                <span className="material-symbols-outlined">{item.icon}</span>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <a href="#contact">{item.action}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="servicios-web-section servicios-web-cases">
        <div className="servicios-web-container">
          <div className="servicios-web-section-header">
            <div>
              <span>02 // Soluciones</span>
              <h2>Qué podemos desarrollar para tu empresa</h2>
            </div>

            <p>
              Podemos ayudarte tanto si necesitás una web desde cero como si ya
              tenés un sitio y querés mejorarlo para vender más o recibir más
              consultas.
            </p>
          </div>

          <div className="servicios-web-cases-grid">
            {caseStudies.map((item) => (
              <article
                className={`servicios-web-case-card servicios-web-case-${item.color}`}
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <div className="servicios-web-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="servicios-web-section servicios-web-stack">
        <div className="servicios-web-container">
          <div className="servicios-web-section-header">
            <div>
              <span>03 // Tecnología</span>
              <h2>Tecnologías para sitios rápidos y escalables</h2>
            </div>

            <p>
              Usamos herramientas modernas para crear soluciones mantenibles,
              seguras y preparadas para crecer junto con tu negocio.
            </p>
          </div>

          <div className="servicios-web-stack-grid">
            {techStack.map((tech) => (
              <article key={tech.name}>
                <span className="material-symbols-outlined">{tech.icon}</span>
                <p>{tech.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="servicios-web-cta">
        <div className="servicios-web-container">
          <div className="servicios-web-cta-box">
            <h2>¿Querés una web profesional para tu empresa?</h2>

            <p>
              Contanos qué necesitás y te ayudamos a definir si conviene una
              landing page, sitio institucional, ecommerce o aplicación web a
              medida.
            </p>

            <a
              href="mailto:contact@dblock.com"
              className="servicios-web-cta-button"
            >
              Pedir una consulta
            </a>
          </div>
        </div>
      </section>
    </SliceToTopComponent>
  );
};

export default ServiciosWeb;
