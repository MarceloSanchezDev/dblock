import "./ServiciosAutomation.css";

const capabilities = [
  {
    icon: "settings_input_component",
    code: "SRCE-041",
    title: "CI/CD Pipelines",
    text: "Automated deployment cycles that minimize human intervention. Continuous integration frameworks designed for sub-second latency in mission-critical environments.",
    type: "large",
  },
  {
    icon: "schema",
    title: "Business Process Automation",
    text: "Streamlining administrative and operational workflows using bespoke neural logic.",
    type: "small",
    color: "purple",
  },
  {
    icon: "bolt",
    title: "Legacy System Migration",
    text: "Decoupling monolithic architectures into modern, scalable cloud-native microservices.",
    type: "small",
    color: "green",
  },
];

const benefits = [
  {
    title: "Efficiency",
    text: "Reduce operational latency by up to 84% through direct hardware-to-logic synchronization and eliminating redundant human validation layers.",
    color: "blue",
  },
  {
    title: "Cost Reduction",
    text: "Minimize overhead by automating repetitive high-frequency tasks. Our systems pay for themselves within the first fiscal quarter of deployment.",
    color: "green",
  },
  {
    title: "Future-Proofing",
    text: "Building on modular frameworks that evolve with your enterprise. No more tech debt—just persistent, scalable innovation infrastructure.",
    color: "purple",
  },
];

const logicItems = [
  {
    icon: "settings",
    title: "Kinetic Automation Engine",
    color: "blue",
  },
  {
    icon: "account_tree",
    title: "Non-Linear Flow Architecture",
    color: "purple",
  },
  {
    icon: "radar",
    title: "Predictive System Monitoring",
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
            <p>System Status: Operational</p>
          </div>

          <h1>
            The Future of <br />
            <span>Workflow</span>
          </h1>

          <p>
            Architecting high-performance industrial automation and digital
            pipelines. We bridge the gap between legacy infrastructure and
            autonomous technical ecosystems.
          </p>

          <div className="servicios-automation-buttons">
            <a
              href="#contact"
              className="servicios-automation-btn servicios-automation-btn-primary"
            >
              Initialize Transformation
            </a>

            <a
              href="#capabilities"
              className="servicios-automation-btn servicios-automation-btn-secondary"
            >
              View Documentation
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
            <span>01 / Capabilities</span>
            <h2>IT Consulting & Automation</h2>
          </div>

          <div className="servicios-automation-bento">
            <article className="servicios-automation-card servicios-automation-card-large">
              <div>
                <div className="servicios-automation-card-top">
                  <span className="material-symbols-outlined icon-blue">
                    settings_input_component
                  </span>

                  <strong>SRCE-041</strong>
                </div>

                <h3>CI/CD Pipelines</h3>

                <p>
                  Automated deployment cycles that minimize human intervention.
                  Continuous integration frameworks designed for sub-second
                  latency in mission-critical environments.
                </p>
              </div>

              <a href="#contact" className="servicios-automation-card-link">
                Explore Integrations
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </article>

            <article className="servicios-automation-card servicios-automation-card-small purple-card">
              <span className="material-symbols-outlined icon-purple filled-icon">
                schema
              </span>

              <div>
                <h3>Business Process Automation</h3>

                <p>
                  Streamlining administrative and operational workflows using
                  bespoke neural logic.
                </p>
              </div>
            </article>

            <article className="servicios-automation-card servicios-automation-card-small green-card">
              <span className="material-symbols-outlined icon-green">bolt</span>

              <div>
                <h3>Legacy System Migration</h3>

                <p>
                  Decoupling monolithic architectures into modern, scalable
                  cloud-native microservices.
                </p>
              </div>
            </article>

            <article className="servicios-automation-image-card">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
                alt="Industrial automation circuit board"
              />

              <div className="servicios-automation-image-overlay"></div>

              <div className="servicios-automation-live-feed">
                <span>Live Feed</span>
                <h3>Core Engine Sector 7</h3>
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
                  Logic Visualization
                </span>

                <h2>Integrated Gear Dynamics</h2>

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
                  SYS_RENDER_0.8.2
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiciosAutomation;
