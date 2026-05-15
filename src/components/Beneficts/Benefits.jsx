import "./Benefits.css";

const metrics = [
  {
    value: "99.99%",
    label: "Guaranteed Uptime",
    color: "green",
  },
  {
    value: "3x",
    label: "Deployment Speed",
    color: "blue",
  },
  {
    value: "70%",
    label: "Cost Efficiency Gain",
    color: "white",
  },
];

const benefits = [
  {
    icon: "shield_lock",
    title: "Security",
    text: "Military-grade encryption with automated threat detection and real-time response protocols embedded at the kernel level.",
    color: "blue",
    large: true,
  },
  {
    icon: "dynamic_feed",
    title: "Scalability",
    text: "Instant vertical and horizontal auto-scaling nodes.",
    color: "green",
  },
  {
    icon: "robot_2",
    title: "Automation",
    text: "CI/CD pipelines integrated natively into the core.",
    color: "blue",
  },
  {
    icon: "bolt",
    title: "Performance",
    text: "Low-latency data processing via optimized edge networks.",
    color: "green",
  },
  {
    icon: "engineering",
    title: "Technical Support",
    text: "Direct access to tier-3 systems engineers 24/7/365. No queues, only solutions for mission-critical operations.",
    color: "blue",
    large: true,
  },
  {
    icon: "account_balance_wallet",
    title: "Cost Efficiency",
    text: "Algorithmic resource allocation to minimize waste.",
    color: "green",
  },
  {
    icon: "speed",
    title: "Efficiency",
    text: "Optimized resource footprint for maximum ROI.",
    color: "blue",
  },
  {
    icon: "update",
    title: "Future-Proof",
    text: "Modular architecture designed to evolve with quantum-ready cryptographic standards and upcoming tech stacks.",
    color: "green",
    large: true,
  },
];

const comparisonRows = [
  {
    metric: "Uptime",
    legacy: "99.5% Average",
    dblock: "99.99% Guaranteed",
  },
  {
    metric: "Deployment Latency",
    legacy: "12 - 45 Minutes",
    dblock: "< 180 Seconds",
  },
  {
    metric: "Security Compliance",
    legacy: "Manual Audits",
    dblock: "Real-time AI Auditing",
  },
  {
    metric: "Data Redundancy",
    legacy: "2x Local",
    dblock: "5x Global Sharding",
  },
  {
    metric: "Maintenance Overhead",
    legacy: "High Manual",
    dblock: "Zero-Touch Automation",
  },
];

const Benefits = () => {
  return (
    <main className="benefits-page">
      <section className="benefits-hero">
        <div className="benefits-hero-content">
          <div className="benefits-status">
            <span className="material-symbols-outlined">terminal</span>
            <p>System Status: Optimized</p>
          </div>

          <h1>Engineered for Performance</h1>

          <p className="benefits-hero-text">
            An industrial-grade infrastructure layer built for the next
            generation of high-density computational environments. Precision,
            security, and absolute reliability.
          </p>

          <div className="benefits-buttons">
            <a href="#cta" className="benefits-btn benefits-btn-primary">
              Deploy Protocol
            </a>

            <a
              href="#comparison"
              className="benefits-btn benefits-btn-secondary"
            >
              Technical Specs
            </a>
          </div>
        </div>

        <div className="benefits-hero-image">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1400&q=80"
            alt="Cybernetic technology grid"
          />
        </div>
      </section>

      <section className="benefits-metrics">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <strong className={`benefits-metric-${metric.color}`}>
              {metric.value}
            </strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <section className="benefits-section benefits-core">
        <div className="benefits-section-header">
          <h2>Core Advantages</h2>
          <div></div>
        </div>

        <div className="benefits-grid">
          {benefits.map((item) => (
            <article
              className={`benefits-card ${
                item.large ? "benefits-card-large" : ""
              } benefits-card-${item.color}`}
              key={item.title}
            >
              <span className="material-symbols-outlined">{item.icon}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className="benefits-card-line"></div>
            </article>
          ))}
        </div>
      </section>

      <section id="comparison" className="benefits-section benefits-comparison">
        <h2>Baseline vs. DBLOCK</h2>

        <div className="benefits-table-wrapper">
          <table className="benefits-table">
            <thead>
              <tr>
                <th>Metrics</th>
                <th>Standard Legacy</th>
                <th>DBLOCK Protocol</th>
              </tr>
            </thead>

            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.metric}>
                  <td>{row.metric}</td>
                  <td>{row.legacy}</td>
                  <td>{row.dblock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="cta" className="benefits-cta">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
          alt="Global digital network"
        />

        <div className="benefits-cta-content">
          <h2>Ready to Scale?</h2>

          <p>
            Join the ranks of high-performance organizations leveraging DBLOCK
            to power their infrastructure. Secure, efficient, and ready for
            deployment.
          </p>

          <div className="benefits-cta-buttons">
            <a
              href="mailto:contact@dblock.com"
              className="benefits-cta-primary"
            >
              Scale Your Infrastructure
            </a>

            <a
              href="mailto:sales@dblock.com"
              className="benefits-cta-secondary"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Benefits;
