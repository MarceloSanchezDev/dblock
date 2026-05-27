import "./ServiciosAutomation.css";

const capabilities = [
  {
    icon: "settings_input_component",
    code: "AUTO-01",
    title: "Automatización de procesos",
    text: "Digitalizamos tareas repetitivas para reducir errores, ahorrar tiempo y mejorar la operación diaria de tu empresa.",
    type: "large",
  },
  {
    icon: "schema",
    title: "Flujos de trabajo digitales",
    text: "Ordenamos procesos administrativos, comerciales u operativos mediante herramientas digitales adaptadas a tu negocio.",
    type: "small",
    color: "purple",
  },
  {
    icon: "bolt",
    title: "Modernización de sistemas",
    text: "Mejoramos procesos existentes, conectamos herramientas y ayudamos a reemplazar tareas manuales por soluciones más eficientes.",
    type: "small",
    color: "green",
  },
];

const benefits = [
  {
    title: "Más eficiencia",
    text: "Reducí tareas manuales, tiempos de carga, duplicación de información y pasos innecesarios dentro de tu operación.",
    color: "blue",
  },
  {
    title: "Menos errores",
    text: "La automatización ayuda a evitar olvidos, errores de carga y procesos desordenados que afectan la productividad.",
    color: "green",
  },
  {
    title: "Procesos escalables",
    text: "Creamos soluciones que pueden crecer junto con tu empresa y adaptarse a nuevas áreas, usuarios o necesidades.",
    color: "purple",
  },
];

const logicItems = [
  {
    icon: "settings",
    title: "Automatización de tareas repetitivas",
    color: "blue",
  },
  {
    icon: "account_tree",
    title: "Diseño de flujos de trabajo",
    color: "purple",
  },
  {
    icon: "radar",
    title: "Monitoreo y mejora continua",
    color: "green",
  },
];

const ServiciosAutomation = () => {
  return (
    <main className="servicios-automation-page">
      <section className="servicios-automation-hero">
        <div className="servicios-automation-glow"></div>

        <div className="servicios-automation-hero-content">
          <div className="servicios-automation-status">
            <span></span>
            <p>Automatización para empresas</p>
          </div>

          <h1>
            Automatización de <br />
            <span>procesos digitales</span>
          </h1>

          <p>
            Ayudamos a empresas a ordenar tareas repetitivas, conectar
            herramientas, digitalizar procesos y crear sistemas que ahorran
            tiempo, reducen errores y mejoran la operación diaria.
          </p>

          <div className="servicios-automation-buttons">
            <a
              href="#contact"
              className="servicios-automation-btn servicios-automation-btn-primary"
            >
              Solicitar consulta
            </a>

            <a
              href="#capabilities"
              className="servicios-automation-btn servicios-automation-btn-secondary"
            >
              Ver soluciones
            </a>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="servicios-automation-section servicios-automation-capabilities"
      >
        <div className="servicios-automation-container">
          <div className="servicios-automation-section-header">
            <span>01 / Automatización</span>
            <h2>Consultoría IT y automatización de procesos</h2>
          </div>

          <div className="servicios-automation-bento">
            <article className="servicios-automation-card servicios-automation-card-large">
              <div>
                <div className="servicios-automation-card-top">
                  <span className="material-symbols-outlined icon-blue">
                    settings_input_component
                  </span>

                  <strong>AUTO-01</strong>
                </div>

                <h3>Automatización de tareas</h3>

                <p>
                  Analizamos tus procesos actuales y detectamos tareas que pueden
                  automatizarse para ahorrar tiempo, reducir errores y mejorar la
                  productividad del equipo.
                </p>
              </div>

              <a href="#contact" className="servicios-automation-card-link">
                Consultar automatización
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </article>

            {capabilities.slice(1).map((item) => (
              <article
                className={`servicios-automation-card servicios-automation-card-small ${item.color}-card`}
                key={item.title}
              >
                <span
                  className={`material-symbols-outlined icon-${item.color} ${
                    item.color === "purple" ? "filled-icon" : ""
                  }`}
                >
                  {item.icon}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}

            <article className="servicios-automation-image-card">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
                alt="Automatización de procesos digitales para empresas"
              />

              <div className="servicios-automation-image-overlay"></div>

              <div className="servicios-automation-live-feed">
                <span>Proceso digital</span>
                <h3>Flujos automatizados</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="servicios-automation-benefits">
        <div className="servicios-automation-container">
          <div className="servicios-automation-benefits-grid">
            {benefits.map((benefit) => (
              <article
                className={`servicios-automation-benefit benefit-${benefit.color}`}
                key={benefit.title}
              >
                <h4>{benefit.title}</h4>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="servicios-automation-section servicios-automation-visualization">
        <div className="servicios-automation-container">
          <div className="servicios-automation-visual-card">
            <div className="servicios-automation-square-decoration"></div>

            <div className="servicios-automation-visual-grid">
              <div>
                <span className="servicios-automation-label">
                  Flujo de trabajo
                </span>

                <h2>Procesos más ordenados y eficientes</h2>

                <div className="servicios-automation-logic-list">
                  {logicItems.map((item) => (
                    <article
                      className={`servicios-automation-logic-item logic-${item.color}`}
                      key={item.title}
                    >
                      <div>
                        <span className="material-symbols-outlined">
                          {item.icon}
                        </span>
                      </div>

                      <p>{item.title}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="servicios-automation-system-render">
                <div className="servicios-automation-render-frame">
                  <div className="servicios-automation-render-center">
                    <div>
                      <span className="material-symbols-outlined filled-icon">
                        memory
                      </span>
                    </div>
                  </div>

                  <span className="render-dot dot-one"></span>
                  <span className="render-dot dot-two"></span>
                  <span className="render-line line-one"></span>
                  <span className="render-line line-two"></span>
                </div>

                <span className="servicios-automation-render-version">
                  AUTOMATIZACIÓN DBLOCK
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="servicios-automation-section">
        <div className="servicios-automation-container">
          <div className="servicios-automation-visual-card">
            <div className="servicios-automation-visual-grid">
              <div>
                <span className="servicios-automation-label">
                  Consultoría digital
                </span>

                <h2>¿Querés automatizar procesos en tu empresa?</h2>

                <p>
                  Contanos qué tareas se repiten en tu negocio y te ayudamos a
                  detectar oportunidades de automatización, integración o
                  desarrollo a medida.
                </p>
              </div>

              <div>
                <a
                  href="mailto:contact@dblock.com"
                  className="servicios-automation-btn servicios-automation-btn-primary"
                >
                  Pedir una consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiciosAutomation;