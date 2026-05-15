import { Link } from "react-router-dom";
import "./Solutions.css";

const solutionCards = [
  {
    icon: "terminal",
    code: "CODE: WEB_ARCH",
    title: "Web Development",
    text: "High-performance React-driven architectures with SSR optimization and sub-second interaction latency.",
    type: "large",
    color: "blue",
    path: "/servicios-web",
  },
  {
    icon: "cloud",
    code: "NODE: AWS_GCP_AZURE",
    title: "Cloud Solutions",
    type: "wide",
    color: "green",
    path: "/servicios-cloud",
  },
  {
    icon: "security",
    title: "Cybersecurity",
    type: "small",
    color: "red",
    path: "/servicios-cloud",
  },
  {
    icon: "lan",
    title: "Networking",
    type: "small",
    color: "blue",
    path: "/servicios-cloud",
  },
  {
    icon: "query_stats",
    title: "IT Consulting",
    type: "small",
    color: "white",
    path: "/servicios-automation",
  },
  {
    icon: "developer_mode",
    title: "Software Dev",
    type: "small",
    color: "green",
    path: "/servicios-web",
  },
];

const featuredSolutions = [
  {
    title: "Cloud Architecture & Migration",
    label: "Critical Infrastructure",
    role: "Primary Platform Lead",
    benefits: "99.99% Uptime SLA",
    text: "We solve legacy bottleneck issues by refactoring monolithic environments into distributed, serverless cloud clusters that scale dynamically with demand.",
    useCase: "Use Case: Global Fintech Platform",
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    path: "/servicios-cloud",
  },
  {
    title: "Enterprise Security Systems",
    label: "Active Defense",
    role: "Guardian Sentinel",
    benefits: "Zero-Trust Protocol",
    text: "Deploying sophisticated EDR/XDR monitoring systems and military-grade encryption to secure industrial assets against persistent advanced threats.",
    useCase: "Use Case: Energy Grid Security",
    color: "green",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    path: "/servicios-cloud",
  },
];

const problemRows = [
  {
    problemIcon: "report",
    problem: "Legacy System Latency & Downtime",
    problemStatus: "[ CRITICAL ]",
    solutionIcon: "rocket_launch",
    solution: "Performance Optimization & Edge Delivery",
    solutionStatus: "[ RESOLVED ]",
    type: "critical",
    solutionColor: "green",
  },
  {
    problemIcon: "history",
    problem: "Manual Repetitive Workflows",
    problemStatus: "[ INEFFICIENCY ]",
    solutionIcon: "auto_mode",
    solution: "Full-Stack Process Automation",
    solutionStatus: "[ OPTIMIZED ]",
    type: "neutral",
    solutionColor: "blue",
  },
  {
    problemIcon: "security",
    problem: "Persistent Security Vulnerabilities",
    problemStatus: "[ ALERT ]",
    solutionIcon: "verified_user",
    solution: "Zero-Trust Hardened Monitoring",
    solutionStatus: "[ SECURED ]",
    type: "critical",
    solutionColor: "green",
  },
];

const techStack = [
  "REACT.JS",
  "NODE.JS",
  "TYPESCRIPT",
  "AWS/AZURE",
  "KUBERNETES",
  "TERRAFORM",
  "DOCKER",
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "Requirement analysis & system auditing.",
  },
  {
    number: "02",
    title: "Strategy",
    text: "Logic mapping & ROI forecasting.",
  },
  {
    number: "03",
    title: "Architecture",
    text: "Low-level design & stack selection.",
  },
  {
    number: "04",
    title: "Development",
    text: "Agile sprint-based implementation.",
  },
  {
    number: "05",
    title: "Deployment",
    text: "CI/CD automation & release.",
  },
  {
    number: "06",
    title: "Optimization",
    text: "Monitoring & continuous tuning.",
  },
];

const Solutions = () => {
  return (
    <main className="solutions-page">
      <section className="solutions-hero">
        <div className="solutions-hero-glow"></div>

        <div className="solutions-hero-content">
          <span className="solutions-eyebrow">
            Industrial-Grade Infrastructure
          </span>

          <h1>
            Architecting the Next <br />
            Digital Frontier
          </h1>

          <p>
            End-to-end technological ecosystems designed for high-performance
            scale, absolute security, and industrial-grade reliability. We build
            the systems that drive global enterprise.
          </p>

          <div className="solutions-hero-buttons">
            <a href="#capabilities" className="solutions-btn solutions-btn-primary">
              Explore Solutions
            </a>

            <Link to="/contact" className="solutions-btn solutions-btn-secondary">
              Start Consultation
            </Link>
          </div>
        </div>

        <div className="solutions-scan-line"></div>
      </section>

      <section id="capabilities" className="solutions-section solutions-overview">
        <div className="solutions-container">
          <div className="solutions-section-header">
            <h2>Capabilities Registry</h2>
            <p>[ SYSTEM_CAPABILITIES_V2.0 ]</p>
          </div>

          <div className="solutions-bento">
            {solutionCards.map((card) => (
              <Link
                to={card.path}
                className={`solutions-card solutions-card-${card.type} solutions-card-${card.color}`}
                key={card.title}
              >
                <div className="solutions-card-top">
                  <span className="material-symbols-outlined">{card.icon}</span>

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
              to="/servicios-automation"
              className="solutions-card solutions-card-automation"
            >
              <div>
                <div className="solutions-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <h3>Automation & Transformation</h3>
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
            <h2>Deep Core Solutions</h2>

            <p>
              Detailed architectural breakdown of our primary deployment
              strategies for global scale operations.
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
                      <span>Role</span>
                      <p>{item.role}</p>
                    </div>

                    <div>
                      <span>Benefits</span>
                      <p>{item.benefits}</p>
                    </div>
                  </div>

                  <p className="solutions-featured-text">{item.text}</p>

                  <div className="solutions-featured-footer">
                    <span className={`usecase-${item.color}`}>
                      {item.useCase}
                    </span>

                    <Link to={item.path}>View Details</Link>
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
              <h2>Technical Mapping</h2>
              <p>Incident Response & Remediation Flow</p>
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
                    <span className="material-symbols-outlined">double_arrow</span>
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
          <p>INTEGRATED_TECHNOLOGIES_ARRAY</p>
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
              From Logic <br />
              To Deployment
            </h2>

            <p>
              Our rigorous engineering process ensures that every solution is
              battle-tested and ready for production-level traffic.
            </p>

            <Link to="/approach">
              Learn our Approach
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
            Ready to build your <br />
            next digital system?
          </h2>

          <p>
            Connect with our engineering team today to architect a custom
            high-performance solution for your enterprise needs.
          </p>

          <Link to="/contact" className="solutions-final-button">
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Solutions;