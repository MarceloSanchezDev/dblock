import FirstSectionPage from "../../components/FirstSectionPage/FirstSectionPage";
import SliceToTopComponent from "../../components/SliceToTopComponent/SliceToTopComponent";
import "./Approach.css";

const lifecycleSteps = [
  {
    number: "01",
    icon: "search",
    title: "Diagnóstico",
    text: "Analizamos tu empresa, tus objetivos, tu sitio actual y las oportunidades de mejora digital.",
    color: "blue",
  },
  {
    number: "02",
    icon: "terminal",
    title: "Estrategia",
    text: "Definimos qué solución conviene: página web, SEO, aplicación web, app móvil o infraestructura.",
    color: "green",
  },
  {
    number: "03",
    icon: "schema",
    title: "Arquitectura",
    text: "Organizamos la estructura técnica, el contenido, las secciones y el flujo de conversión del proyecto.",
    color: "blue",
    active: true,
  },
  {
    number: "04",
    icon: "code_blocks",
    title: "Desarrollo",
    text: "Construimos la solución con buenas prácticas, código mantenible, diseño responsive y foco en rendimiento.",
    color: "blue",
  },
  {
    number: "05",
    icon: "rocket_launch",
    title: "Publicación",
    text: "Preparamos el despliegue, revisamos detalles técnicos y dejamos la solución lista para funcionar online.",
    color: "green",
  },
  {
    number: "06",
    icon: "query_stats",
    title: "Optimización",
    text: "Medimos resultados, corregimos problemas y mejoramos la experiencia para conseguir más consultas.",
    color: "blue",
  },
];

const ecosystemItems = [
  {
    letter: "A",
    title: "Contenido y SEO",
    text: "Trabajamos textos, estructura, palabras clave y secciones pensadas para que Google entienda mejor tu negocio.",
    color: "blue",
  },
  {
    letter: "B",
    title: "Diseño y conversión",
    text: "Creamos interfaces claras, profesionales y orientadas a que el visitante realice una consulta.",
    color: "green",
  },
  {
    letter: "C",
    title: "Tecnología e infraestructura",
    text: "Desarrollamos y publicamos soluciones estables, rápidas y preparadas para crecer con tu empresa.",
    color: "gray",
  },
];

const Approach = () => {
  return (
    <SliceToTopComponent>

    <main className="approach-page">
    <FirstSectionPage
     btnPrimary={ { text: "Ver proceso", href: "#lifecycle" } }
     btnSecondary={ { text: "Ver enfoque", href: "#ecosystem" } }
     description={"En Dblock trabajamos con un proceso claro para crear páginas web, SEO, aplicaciones web, aplicaciones móviles e infraestructura digital para empresas que necesitan resultados reales."} 
     title={" Metodología de trabajo digital"}
     span={"Proceso de trabajo profesional"}
     statusCard={`SISTEMAS A MEDIDA`}
     />
      <section id="lifecycle" className="approach-section approach-lifecycle">
        <div className="approach-container">
          <div className="approach-section-title">
            <h2>Cómo desarrollamos soluciones digitales</h2>
            <p>PROCESO DE TRABAJO: 01 AL 06</p>
          </div>

          <div className="approach-lifecycle-grid">
            {lifecycleSteps.map((step) => (
              <article
                className={`approach-step-card ${
                  step.active ? "approach-step-active" : ""
                } approach-step-${step.color}`}
                key={step.number}
              >
                <div className="approach-step-top">
                  <span className="material-symbols-outlined">{step.icon}</span>
                  <strong>{step.number}</strong>
                </div>

                <h3>{step.title}</h3>
                <p>{step.text}</p>

                <div className="approach-step-line"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="approach-section approach-ecosystem">
        <div className="approach-container approach-ecosystem-grid">
          <div className="approach-flow-image-wrapper">
            <div className="approach-flow-image">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80"
                alt="Estrategia digital, SEO y desarrollo web para empresas"
              />
            </div>

            <span className="approach-block approach-block-green"></span>
            <span className="approach-block approach-block-blue"></span>
          </div>

          <div className="approach-ecosystem-content">
            <h2>
              Enfoque <br />
              <span>integral</span>
            </h2>

            <div className="approach-ecosystem-list">
              {ecosystemItems.map((item) => (
                <article className="approach-ecosystem-item" key={item.letter}>
                  <div className={`approach-letter approach-letter-${item.color}`}>
                    {item.letter}
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="approach-cta">
        <div className="approach-grid-bg"></div>

        <div className="approach-container">
          <div className="approach-cta-box">
            <h2>
              ¿Querés iniciar <br />
              un proyecto?
            </h2>

            <p>
              Contanos qué necesita tu empresa y te ayudamos a definir la mejor
              solución digital: web, SEO, aplicación o infraestructura.
            </p>

            <a href="mailto:contact@dblock.com" className="approach-cta-button">
              Solicitar una consulta
            </a>

            <div className="approach-cta-status">
              <span></span>
              <p>Listos para analizar tu proyecto</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </SliceToTopComponent>
  );
};

export default Approach;