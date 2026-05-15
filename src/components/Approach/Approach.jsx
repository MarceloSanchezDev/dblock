import "./Approach.css";

const lifecycleSteps = [
  {
    number: "01",
    icon: "search",
    title: "Discovery",
    text: "Deep-dive extraction of system requirements and performance bottlenecks in legacy infrastructures.",
    color: "blue",
  },
  {
    number: "02",
    icon: "terminal",
    title: "Strategy",
    text: "Synthesizing raw data into an actionable roadmap aligned with core business vertical objectives.",
    color: "green",
  },
  {
    number: "03",
    icon: "schema",
    title: "Architecture",
    text: "Designing high-resilience structural blueprints with 99.999% uptime redundancy targets.",
    color: "blue",
    active: true,
  },
  {
    number: "04",
    icon: "code_blocks",
    title: "Development",
    text: "Agile engineering sprints focused on clean code, modular integrity, and low-latency execution.",
    color: "blue",
  },
  {
    number: "05",
    icon: "rocket_launch",
    title: "Deployment",
    text: "Seamless transition to live environments through blue-green strategies and automated CI/CD pipelines.",
    color: "green",
  },
  {
    number: "06",
    icon: "query_stats",
    title: "Optimization",
    text: "Continuous feedback loops and hardware acceleration tuning to maintain peak performance thresholds.",
    color: "blue",
  },
];

const ecosystemItems = [
  {
    letter: "A",
    title: "Core Sync",
    text: "Real-time synchronization of decentralized nodes across global hardware clusters.",
    color: "blue",
  },
  {
    letter: "B",
    title: "L2 Validation",
    text: "Secondary layer verification protocols ensuring zero-knowledge cryptographic security.",
    color: "green",
  },
  {
    letter: "C",
    title: "Edge Push",
    text: "Low-latency data distribution to edge compute environments for immediate response times.",
    color: "gray",
  },
];

const Approach = () => {
  return (
    <main className="approach-page">
      <section className="approach-hero">
        <div className="approach-grid-bg"></div>

        <img
          className="approach-hero-bg"
          src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1600&q=80"
          alt="Technical methodology background"
        />

        <div className="approach-container">
          <div className="approach-hero-panel">
            <div className="approach-status">
              <span></span>
              <p>Operational Standards v2.4</p>
            </div>

            <h1>
              Strategic <br />
              <span>Methodology</span>
            </h1>

            <p className="approach-hero-text">
              A rigorous, industrial-grade framework engineered for high-density
              information environments and mission-critical system deployment.
              We eliminate ambiguity through structural honesty.
            </p>

            <div className="approach-buttons">
              <a href="#lifecycle" className="approach-btn approach-btn-primary">
                View Parameters
              </a>

              <a href="#ecosystem" className="approach-btn approach-btn-secondary">
                Technical Specs
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="lifecycle" className="approach-section approach-lifecycle">
        <div className="approach-container">
          <div className="approach-section-title">
            <h2>Operational Lifecycle</h2>
            <p>PHASE SEQUENCE: 01 THROUGH 06</p>
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
                alt="System flow visualization"
              />
            </div>

            <span className="approach-block approach-block-green"></span>
            <span className="approach-block approach-block-blue"></span>
          </div>

          <div className="approach-ecosystem-content">
            <h2>
              Integration <br />
              <span>Ecosystem</span>
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
              Ready to <br />
              Integrate?
            </h2>

            <p>
              Connect with our engineering lead to discuss your system
              parameters and optimization requirements.
            </p>

            <a href="mailto:contact@dblock.com" className="approach-cta-button">
              Initiate Consultation
            </a>

            <div className="approach-cta-status">
              <span></span>
              <p>System Ready for Protocol Link</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Approach;