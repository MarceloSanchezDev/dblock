import "./ServiciosWeb.css";

const capabilities = [
  {
    icon: "terminal",
    title: "Clean Architecture",
    text: "Adhering to SOLID principles and modular patterns to ensure your codebase remains maintainable for years to come.",
    action: "Explore Principles",
    color: "green",
  },
  {
    icon: "bolt",
    title: "Performance First",
    text: "Optimized rendering pipelines and edge caching strategies that deliver instant experiences across all global regions.",
    action: "View Benchmarks",
    color: "blue",
  },
];

const caseStudies = [
  {
    title: "E-commerce Backends",
    text: "Architecting high-volume transactional systems capable of handling 50k+ requests per second during peak scaling events.",
    tags: ["GOLANG", "KUBERNETES", "REDIS"],
    color: "blue",
  },
  {
    title: "Custom CRM Systems",
    text: "Developing deeply integrated enterprise dashboards with real-time data visualization and automated workflow engines.",
    tags: ["REACT", "POSTGRES", "AWS"],
    color: "green",
  },
];

const techStack = [
  {
    icon: "integration_instructions",
    name: "TypeScript",
  },
  {
    icon: "cloud",
    name: "Cloud Native",
  },
  {
    icon: "api",
    name: "REST / GraphQL",
  },
  {
    icon: "memory",
    name: "Microservices",
  },
  {
    icon: "monitoring",
    name: "Observability",
  },
  {
    icon: "deployed_code",
    name: "CI/CD Pipeline",
  },
];

const ServiciosWeb = () => {
  return (
    <>
      <section className="servicios-web-hero">
        <div className="servicios-web-hero-glow"></div>

        <div className="servicios-web-hero-content">
          <div className="servicios-web-status">
            <span></span>
            <p>System Status: Optimal</p>
          </div>

          <h1>
            Precision Codebase <br />
            <span>Architecture</span>
          </h1>

          <p className="servicios-web-hero-text">
            Engineering high-performance enterprise systems with surgical
            precision. We build the digital infrastructure that powers industry
            leaders.
          </p>

          <div className="servicios-web-buttons">
            <a
              href="#contact"
              className="servicios-web-btn servicios-web-btn-primary"
            >
              Initialize Deployment
            </a>

            <a
              href="#documentation"
              className="servicios-web-btn servicios-web-btn-secondary"
            >
              View Documentation
            </a>
          </div>
        </div>

        <div className="servicios-web-hero-image">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
            alt="Futuristic server rack with blue lights"
          />
        </div>
      </section>

      <section className="servicios-web-section servicios-web-capabilities">
        <div className="servicios-web-container">
          <div className="servicios-web-section-header">
            <div>
              <span>01 // Core Capabilities</span>
              <h2>Full-stack & Enterprise Web Solutions</h2>
            </div>

            <p>
              Specialized engineering for complex ecosystems. We bridge the gap
              between heavy-duty backend logic and refined user interfaces.
            </p>
          </div>

          <div className="servicios-web-bento-grid">
            <article className="servicios-web-bento-large">
              <div>
                <span className="material-symbols-outlined servicios-web-icon-primary">
                  database
                </span>

                <h3>Scalable Backend Infrastructure</h3>

                <p>
                  Constructing resilient server architectures designed for
                  massive concurrency. Our backends prioritize data integrity
                  and sub-millisecond response times.
                </p>
              </div>

              <div className="servicios-web-terminal">
                <pre>
                  <code>{`[SYSTEM] Initializing DB Cluster...
[INFO] Load Balancer: Active
[INFO] Nodes Online: 12/12
[SUCCESS] Uptime: 99.999%`}</code>
                </pre>
              </div>

              <span className="material-symbols-outlined servicios-web-bg-icon">
                hub
              </span>
            </article>

            {capabilities.map((item) => (
              <article className="servicios-web-bento-card" key={item.title}>
                <span
                  className={`material-symbols-outlined ${
                    item.color === "green"
                      ? "servicios-web-icon-green"
                      : "servicios-web-icon-primary"
                  }`}
                >
                  {item.icon}
                </span>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <div
                  className={`servicios-web-card-link ${
                    item.color === "green"
                      ? "servicios-web-card-link-green"
                      : "servicios-web-card-link-blue"
                  }`}
                >
                  <span>{item.action}</span>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </article>
            ))}

            <article className="servicios-web-bento-wide">
              <div>
                <span className="material-symbols-outlined servicios-web-icon-primary">
                  security
                </span>

                <h3>Fortified Security</h3>

                <p>
                  Every implementation includes zero-trust authentication,
                  automated vulnerability scanning, and end-to-end encryption.
                </p>
              </div>

              <div className="servicios-web-lock-card">
                <div>
                  <span className="material-symbols-outlined">lock</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="servicios-web-section servicios-web-implementation">
        <div className="servicios-web-container servicios-web-implementation-grid">
          <div>
            <span className="servicios-web-section-label">
              02 // Case Studies
            </span>

            <h2>Implementation Examples</h2>

            <div className="servicios-web-case-list">
              {caseStudies.map((study) => (
                <article
                  className={`servicios-web-case-card servicios-web-case-${study.color}`}
                  key={study.title}
                >
                  <h4>{study.title}</h4>

                  <p>{study.text}</p>

                  <div className="servicios-web-tags">
                    {study.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="servicios-web-code-image-wrapper">
            <div className="servicios-web-code-image">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                alt="Source code on a monitor"
              />

              <div className="servicios-web-code-overlay"></div>
            </div>

            <div className="servicios-web-engine-card">
              <p>PROPRIETARY ENGINE v4.2</p>
              <span>
                Advanced middleware layer for real-time synchronization across
                distributed nodes.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="servicios-web-section servicios-web-stack">
        <div className="servicios-web-container">
          <div className="servicios-web-stack-header">
            <h2>Our Technology Perimeter</h2>

            <p>
              Forging solutions with the most powerful tools in the modern
              ecosystem.
            </p>
          </div>

          <div className="servicios-web-stack-grid">
            {techStack.map((tech) => (
              <article className="servicios-web-stack-item" key={tech.name}>
                <span className="material-symbols-outlined">{tech.icon}</span>
                <h4>{tech.name}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="servicios-web-cta">
        <span className="material-symbols-outlined servicios-web-cta-icon">
          settings_input_component
        </span>

        <div className="servicios-web-container">
          <h2>Ready for Architectural Stability?</h2>

          <a
            href="mailto:contact@dblock.com"
            className="servicios-web-cta-button"
          >
            Initiate Consultation →
          </a>
        </div>
      </section>
    </>
  );
};

export default ServiciosWeb;
