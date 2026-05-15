import "./Home.css";

const services = [
  {
    icon: "terminal",
    title: "Software Development",
    text: "Low-latency, scalable systems engineered for mission-critical operations.",
  },
  {
    icon: "web_asset",
    title: "Web Development",
    text: "High-quality interfaces, dashboards, landing pages and business platforms.",
  },
  {
    icon: "cloud",
    title: "Cloud Solutions",
    text: "Cloud infrastructure, deployment, hosting and scalable server solutions.",
  },
  {
    icon: "troubleshoot",
    title: "IT Consulting",
    text: "Strategic technical roadmaps to improve systems, processes and performance.",
  },
  {
    icon: "shield_lock",
    title: "Cybersecurity",
    text: "Secure architectures, protection strategies and data integrity solutions.",
  },
  {
    icon: "robot_2",
    title: "Automation",
    text: "Workflow automation, digital transformation and process optimization.",
  },
  {
    icon: "support_agent",
    title: "Technical Support",
    text: "Technical assistance, monitoring and support for business operations.",
  },
  {
    icon: "data_center",
    title: "Infrastructure",
    text: "Network, servers, hardware and virtual infrastructure for modern companies.",
  },
];

const methodology = [
  {
    number: "01",
    title: "Analysis",
    text: "We analyze your current systems, needs and business goals.",
  },
  {
    number: "02",
    title: "Design",
    text: "We create a scalable, secure and efficient technical solution.",
  },
  {
    number: "03",
    title: "Deployment",
    text: "We implement the solution with clean processes and minimal disruption.",
  },
  {
    number: "04",
    title: "Optimization",
    text: "We monitor, improve and optimize the system for long-term performance.",
  },
];

const benefits = [
  {
    title: "Hardened Security",
    text: "Protection, monitoring and secure practices for your digital assets.",
  },
  {
    title: "Scalability",
    text: "Solutions prepared to grow with your business and future requirements.",
  },
  {
    title: "Automation",
    text: "Reduce repetitive tasks and improve efficiency with smart workflows.",
  },
];

const Home = () => {
  return (
    <>
      <section className="home-hero">
        <div className="home-grid-bg"></div>

        <div className="home-container home-hero-content">
          <span className="home-eyebrow">SYSTEM_INITIALIZATION_COMPLETE</span>

          <h1>
            Engineering the <br />
            <span>Digital Frontier</span>
          </h1>

          <p>
            High-performance IT infrastructure and bespoke software systems
            engineered for absolute precision. We build the architecture that
            powers modern business scale.
          </p>

          <div className="home-hero-buttons">
            <a href="#contact" className="home-btn home-btn-primary">
              Initiate Consultation
            </a>

            <a href="#solutions" className="home-btn home-btn-secondary">
              View Capabilities
            </a>
          </div>
        </div>

        <div className="home-status-card">
          LATENCY: 12ms
          <br />
          UPTIME: 99.999%
          <br />
          LOCATION: SECTOR_01
        </div>
      </section>

      <section id="solutions" className="home-section home-solutions">
        <div className="home-container">
          <div className="home-section-header">
            <span className="home-eyebrow">OPERATIONAL_SCOPE</span>
            <h2>Core Architecture</h2>
          </div>

          <div className="home-services-grid">
            {services.map((service) => (
              <article className="home-service-card" key={service.title}>
                <span className="material-symbols-outlined">
                  {service.icon}
                </span>

                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-case-study">
        <div className="home-container home-case-grid">
          <div className="home-image-card">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
              alt="Modern server infrastructure"
            />

            <div className="home-image-label">SECURED_NODE_v9</div>
          </div>

          <div className="home-case-content">
            <span className="home-eyebrow">CASE_STUDY_04</span>

            <h2>Real-World Architecture</h2>

            <div className="home-case-block">
              <h4>The Vulnerability</h4>
              <p className="home-danger-line">
                Legacy systems failing under peak loads, causing service
                timeouts, poor performance and fragmented data.
              </p>
            </div>

            <div className="home-case-block home-resolution">
              <span className="material-symbols-outlined">bolt</span>

              <div>
                <h4>The Resolution</h4>
                <p>
                  Implementation of a distributed infrastructure with automated
                  load balancing, monitoring and real-time synchronization.
                  Result: better performance, security and scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="home-section home-methodology">
        <div className="home-container">
          <div className="home-section-header home-center">
            <h2>Methodology V4</h2>
            <div className="home-title-line"></div>
          </div>

          <div className="home-methodology-grid">
            {methodology.map((item) => (
              <article className="home-method-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="home-section home-benefits">
        <div className="home-container">
          <div className="home-benefits-grid">
            {benefits.map((benefit) => (
              <article className="home-benefit-item" key={benefit.title}>
                <span className="material-symbols-outlined">check_circle</span>

                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="home-final-cta">
        <div className="home-pattern-bg"></div>

        <div className="home-container">
          <h2>Ready for Integration?</h2>

          <p>
            Transition your operations to the DBLOCK standard. Deploy
            high-performance systems today.
          </p>

          <a
            href="mailto:contact@dblock.com"
            className="home-btn home-btn-primary"
          >
            Initiate Connection
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
