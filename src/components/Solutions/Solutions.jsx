import { Link } from "react-router-dom";
import "./Solutions.css";

const solutionCards = [
  {
    icon: "terminal",
    code: "DESARROLLO WEB",
    title: "Páginas web y aplicaciones",
    text: "Creamos sitios web, landing pages, ecommerce y aplicaciones web pensadas para empresas que necesitan presencia digital profesional.",
    type: "large",
    color: "blue",
    path: "/servicios-web",
  },
  {
    icon: "cloud",
    code: "CLOUD E INFRAESTRUCTURA",
    title: "Infraestructura digital",
    text: "Configuramos entornos cloud, hosting, servidores y despliegues para que tus soluciones funcionen de forma estable y segura.",
    type: "wide",
    color: "green",
    path: "/servicios-cloud",
  },
  {
    icon: "security",
    title: "Seguridad técnica",
    text: "Aplicamos buenas prácticas para proteger formularios, accesos, datos y entornos digitales.",
    type: "small",
    color: "red",
    path: "/servicios-cloud",
  },
  {
    icon: "lan",
    title: "Conectividad y sistemas",
    text: "Ayudamos a ordenar herramientas, integraciones y procesos digitales dentro de tu empresa.",
    type: "small",
    color: "blue",
    path: "/servicios-cloud",
  },
  {
    icon: "query_stats",
    title: "Consultoría digital",
    text: "Analizamos tu situación actual y definimos qué solución tecnológica conviene implementar primero.",
    type: "small",
    color: "white",
    path: "/servicios-automatizacion",
  },
  {
    icon: "developer_mode",
    title: "Software a medida",
    text: "Desarrollamos funcionalidades y sistemas adaptados a las necesidades reales de tu negocio.",
    type: "small",
    color: "green",
    path: "/servicios-web",
  },
];

const featuredSolutions = [
  {
    title: "Desarrollo web para empresas",
    label: "Presencia digital",
    role: "Sitios web y aplicaciones",
    benefits: "Más claridad y más consultas",
    text: "Creamos páginas web profesionales, landing pages, ecommerce y aplicaciones web con estructura clara, diseño responsive y contenido orientado a conversión.",
    useCase: "Ideal para: empresas que necesitan mejorar su presencia online",
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    path: "/servicios-web",
  },
  {
    title: "Infraestructura, cloud y automatización",
    label: "Operación digital",
    role: "Cloud, servidores y procesos",
    benefits: "Mayor estabilidad y eficiencia",
    text: "Ayudamos a empresas a ordenar su infraestructura, automatizar tareas repetitivas y mejorar el funcionamiento de sus sistemas digitales.",
    useCase: "Ideal para: empresas que quieren escalar o mejorar procesos",
    color: "green",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    path: "/servicios-cloud",
  },
];

const problemRows = [
  {
    problemIcon: "report",
    problem: "Sitio web lento, desactualizado o poco claro",
    problemStatus: "PROBLEMA",
    solutionIcon: "rocket_launch",
    solution: "Web optimizada, responsive y orientada a consultas",
    solutionStatus: "SOLUCIÓN",
    type: "critical",
    solutionColor: "green",
  },
  {
    problemIcon: "history",
    problem: "Tareas manuales y procesos repetitivos",
    problemStatus: "INEFICIENCIA",
    solutionIcon: "auto_mode",
    solution: "Automatización de procesos y sistemas a medida",
    solutionStatus: "OPTIMIZADO",
    type: "neutral",
    solutionColor: "blue",
  },
  {
    problemIcon: "security",
    problem: "Infraestructura inestable o difícil de mantener",
    problemStatus: "RIESGO",
    solutionIcon: "verified_user",
    solution: "Entornos digitales más seguros, ordenados y escalables",
    solutionStatus: "MEJORADO",
    type: "critical",
    solutionColor: "green",
  },
];

const techStack = [
  "REACT",
  "NODE.JS",
  "JAVASCRIPT",
  "SEO",
  "CLOUD",
  "DOCKER",
  "AUTOMATIZACIÓN",
];

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Analizamos tu empresa, tus objetivos y los problemas digitales actuales.",
  },
  {
    number: "02",
    title: "Estrategia",
    text: "Definimos qué solución conviene: web, SEO, cloud, automatización o aplicación.",
  },
  {
    number: "03",
    title: "Arquitectura",
    text: "Organizamos estructura, tecnología, contenido y flujo de conversión.",
  },
  {
    number: "04",
    title: "Desarrollo",
    text: "Creamos la solución con buenas prácticas y diseño responsive.",
  },
  {
    number: "05",
    title: "Publicación",
    text: "Preparamos el despliegue y dejamos el proyecto funcionando online.",
  },
  {
    number: "06",
    title: "Optimización",
    text: "Medimos, corregimos y mejoramos para conseguir mejores resultados.",
  },
];

const Solutions = () => {
  return (
    <main className="solutions-page">
      <section className="solutions-hero">
        <div className="solutions-hero-glow"></div>

        <div className="solutions-hero-content">
          <span className="solutions-eyebrow">
            Soluciones digitales para empresas
          </span>

          <h1>
            Desarrollo web, cloud y automatización para empresas
          </h1>

          <p>
            En Dblock ayudamos a empresas a mejorar su presencia online,
            ordenar sus procesos digitales y construir soluciones tecnológicas
            estables, escalables y orientadas a generar más consultas.
          </p>

          <div className="solutions-hero-buttons">
            <a
              href="#capabilities"
              className="solutions-btn solutions-btn-primary"
            >
              Ver soluciones
            </a>

            <Link
              to="/contacto"
              className="solutions-btn solutions-btn-secondary"
            >
              Solicitar consulta
            </Link>
          </div>
        </div>

        <div className="solutions-scan-line"></div>
      </section>

      <section
        id="capabilities"
        className="solutions-section solutions-overview"
      >
        <div className="solutions-container">
          <div className="solutions-section-header">
            <h2>Soluciones principales</h2>
            <p>Servicios digitales pensados para empresas</p>
          </div>

          <div className="solutions-bento">
            {solutionCards.map((card) => (
              <Link
                to={card.path}
                className={`solutions-card solutions-card-${card.type} solutions-card-${card.color}`}
                key={card.title}
              >
                <div className="solutions-card-top">
                  <span className="material-symbols-outlined">
                    {card.icon}
                  </span>

                  {card.code && <strong>{card.code}</strong>}
                </div>

                <div className="solutions-card-content">
                  <h3>{card.title}</h3>

                  {card.text && <p>{card.text}</p>}
                </div>

                {card.type === "wide" && (
                  <span className="material-symbols-outlined solutions-arrow">
                    arrow_forward
                  </span>
                )}
              </Link>
            ))}

            <Link
              to="/servicios-automatizacion"
              className="solutions-card solutions-card-automation"
            >
              <div>
                <div className="solutions-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <h3>Automatización y transformación digital</h3>
                <p>
                  Digitalizamos procesos para que tu empresa trabaje de forma
                  más ordenada, rápida y eficiente.
                </p>
              </div>

              <span className="material-symbols-outlined">
                precision_manufacturing
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="solutions-section solutions-featured">
        <div className="solutions-container">
          <div className="solutions-featured-header">
            <h2>Soluciones destacadas</h2>

            <p>
              Diseñamos soluciones digitales adaptadas al momento actual de tu
              empresa, priorizando claridad, rendimiento, seguridad y
              conversión.
            </p>
          </div>

          <div className="solutions-featured-grid">
            {featuredSolutions.map((item) => (
              <article className="solutions-featured-card" key={item.title}>
                <div className="solutions-featured-image">
                  <img src={item.image} alt={item.title} />

                  <div className="solutions-featured-overlay"></div>

                  <span
                    className={`solutions-featured-label label-${item.color}`}
                  >
                    {item.label}
                  </span>
                </div>

                <div className="solutions-featured-body">
                  <h3>{item.title}</h3>

                  <div className="solutions-featured-meta">
                    <div>
                      <span>Servicio</span>
                      <p>{item.role}</p>
                    </div>

                    <div>
                      <span>Beneficio</span>
                      <p>{item.benefits}</p>
                    </div>
                  </div>

                  <p className="solutions-featured-text">{item.text}</p>

                  <div className="solutions-featured-footer">
                    <span className={`usecase-${item.color}`}>
                      {item.useCase}
                    </span>

                    <Link to={item.path}>Ver detalles</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-section solutions-mapping">
        <div className="solutions-container">
          <div className="solutions-mapping-box">
            <div className="solutions-mapping-glow"></div>

            <div className="solutions-mapping-header">
              <h2>Problemas que resolvemos</h2>
              <p>De una situación desordenada a una solución digital clara</p>
            </div>

            <div className="solutions-problem-list">
              {problemRows.map((row) => (
                <article className="solutions-problem-row" key={row.problem}>
                  <div
                    className={`solutions-problem-card problem-${row.type}`}
                  >
                    <div>
                      <span className="material-symbols-outlined">
                        {row.problemIcon}
                      </span>
                      <p>{row.problem}</p>
                    </div>

                    <strong>{row.problemStatus}</strong>
                  </div>

                  <div className="solutions-problem-arrow">
                    <span className="material-symbols-outlined">
                      double_arrow
                    </span>
                  </div>

                  <div
                    className={`solutions-problem-card solution-${row.solutionColor}`}
                  >
                    <div>
                      <span className="material-symbols-outlined">
                        {row.solutionIcon}
                      </span>
                      <p>{row.solution}</p>
                    </div>

                    <strong>{row.solutionStatus}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-tech-stack">
        <div className="solutions-container">
          <p>Tecnologías y áreas de trabajo</p>
        </div>

        <div className="solutions-stack-row">
          {techStack.map((tech, index) => (
            <span key={tech}>
              <strong>{tech}</strong>
              {index !== techStack.length - 1 && <i></i>}
            </span>
          ))}
        </div>
      </section>

      <section className="solutions-section solutions-process">
        <div className="solutions-container solutions-process-grid">
          <div className="solutions-process-content">
            <h2>
              De la idea a una solución digital funcionando
            </h2>

            <p>
              Trabajamos con un proceso claro para entender el problema,
              definir la solución, desarrollarla, publicarla y mejorarla con el
              tiempo.
            </p>

            <Link to="/acerca-de-nosotros">
              Conocer nuestra metodología
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="solutions-process-cards">
            {processSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-final-cta">
        <div className="solutions-final-overlay"></div>

        <div className="solutions-final-content">
          <h2>
            ¿Querés construir o mejorar una solución digital?
          </h2>

          <p>
            Contanos qué necesita tu empresa y te ayudamos a definir el camino
            más conveniente: página web, SEO, infraestructura, automatización o
            aplicación a medida.
          </p>

          <Link to="/contacto" className="solutions-final-button">
            Solicitar una consulta
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Solutions;