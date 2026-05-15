import "./ServiciosCloud.css";

const metrics = [
  {
    label: "NETWORK_UPTIME",
    value: "99.999%",
    color: "green",
  },
  {
    label: "THREAT_LATENCY",
    value: "<0.4ms",
    color: "blue",
  },
  {
    label: "ENCRYPTION_LVL",
    value: "AES-256-XTS",
    color: "white",
  },
  {
    label: "NODE_CAPACITY",
    value: "∞ UNLIMITED",
    color: "white",
  },
];

const architectureItems = [
  "BARE METAL VIRTUALIZATION",
  "QUANTUM-READY ENCRYPTION",
  "EDGE COMPUTING NODES",
];

const securityCards = [
  {
    icon: "vpn_key",
    title: "Isolated Key Mgmt",
    text: "Keys are stored in offline, air-gapped hardware modules with physical proximity locks.",
    color: "green",
  },
  {
    icon: "analytics",
    title: "Traffic Scrubbing",
    text: "Layer-7 filtering removes malicious payloads before they hit your core application stack.",
    color: "blue",
  },
];

const ServiciosCloud = () => {
  return (
    <>
      <section className="servicios-cloud-hero">
        <div className="servicios-cloud-hero-image">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80"
            alt="Network infrastructure and server nodes"
          />
        </div>

        <div className="servicios-cloud-hero-content">
          <div className="servicios-cloud-status">
            <span></span>
            <p>SYSTEM_STATUS: SECURE</p>
          </div>

          <h1>Unyielding System Integrity</h1>

          <p className="servicios-cloud-hero-text">
            Architecting the world&apos;s most resilient industrial
            infrastructures. We deliver defensive hardening and high-performance
            scalability for mission-critical operations.
          </p>

          <div className="servicios-cloud-buttons">
            <a
              href="#contact"
              className="servicios-cloud-btn servicios-cloud-btn-primary"
            >
              Deploy Protocol
            </a>

            <a
              href="#solutions"
              className="servicios-cloud-btn servicios-cloud-btn-secondary"
            >
              View Documentation
            </a>
          </div>
        </div>

        <div className="servicios-cloud-metrics">
          {metrics.map((metric) => (
            <article key={metric.label}>
              <span>{metric.label}</span>
              <strong className={`metric-${metric.color}`}>
                {metric.value}
              </strong>
            </article>
          ))}
        </div>
      </section>

      <section
        id="solutions"
        className="servicios-cloud-section servicios-cloud-solutions"
      >
        <div className="servicios-cloud-container">
          <div className="servicios-cloud-section-header">
            <h2>Cloud Solutions & Networking Infrastructure</h2>
            <div></div>
          </div>

          <div className="servicios-cloud-bento">
            <article className="servicios-cloud-card servicios-cloud-threat-card">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80"
                alt="Cybersecurity threat detection visualization"
              />

              <div>
                <span className="material-symbols-outlined">security</span>
                <h3>AI-Driven Threat Detection</h3>
                <p>
                  Real-time heuristic analysis identifying behavioral anomalies
                  across multi-layered server environments. Zero-day protection
                  enabled by default.
                </p>
              </div>
            </article>

            <article className="servicios-cloud-card servicios-cloud-uptime-card">
              <span className="material-symbols-outlined">router</span>

              <div>
                <h3>99.9% Uptime Networking</h3>
                <p>
                  Redundant fiber backbones and automated failover protocols
                  ensure your hardware stays active under any load.
                </p>

                <div className="servicios-cloud-protocol">
                  <span>ACTIVE PROTOCOL: ALPHA</span>
                  <i></i>
                </div>
              </div>
            </article>

            <article className="servicios-cloud-card servicios-cloud-architecture-card">
              <h3>Server-Side Architecture</h3>

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
                <h3>Seamless Scalability</h3>
                <p>
                  Our proprietary Elastic Shield allows your infrastructure to
                  expand instantly to meet sudden traffic spikes without a
                  single microsecond of latency increase.
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
              <span className="servicios-cloud-label">SECURITY_PARADIGM</span>

              <h2>Zero-Day Defense & Hardened Perimeters</h2>

              <p>
                We utilize a Never Trust, Always Verify architecture. Every
                internal node is treated as a potential breach point, requiring
                multi-signature validation for administrative execution.
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
              <span>●</span> LIVE_FEED_01
            </div>

            <img
              src="https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=1400&q=80"
              alt="High-performance server rack"
            />

            <div className="servicios-cloud-live-stats">
              <div>
                <span>CPU_LOAD</span>
                <strong>0.04%</strong>
              </div>

              <i></i>

              <div>
                <span>THERMAL_LVL</span>
                <strong>32°C</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="servicios-cloud-cta">
        <div className="servicios-cloud-container">
          <div className="servicios-cloud-cta-box">
            <div>
              <h2>Ready to Harden Your Infrastructure?</h2>

              <p>
                Connect with our systems architects for a full-stack security
                audit and performance optimization blueprint.
              </p>

              <a
                href="mailto:contact@dblock.com"
                className="servicios-cloud-cta-button"
              >
                Initialize Connection
              </a>
            </div>

            <span>DBLOCK_PROTOCOL</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiciosCloud;
