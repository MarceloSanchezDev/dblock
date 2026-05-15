import "./Contact.css";

const trustBadges = [
  {
    icon: "speed",
    title: "Fast Response",
    text: "SLA-backed 4-hour response time for critical architecture inquiries.",
    color: "blue",
  },
  {
    icon: "terminal",
    title: "Technical Assessment",
    text: "Every inquiry is reviewed by a Lead Systems Architect, not a sales agent.",
    color: "green",
  },
  {
    icon: "architecture",
    title: "Personalized Solutions",
    text: "Tailored deployment strategies matching your specific legacy stack and future requirements.",
    color: "blue",
  },
];

const budgetOptions = [
  "$10k - $50k",
  "$50k - $200k",
  "$200k - $500k",
  "$500k+",
];

const Contact = () => {
  return (
    <main className="contact-page">
      <div className="contact-container">
        <section className="contact-hero">
          <div className="contact-status">
            <span></span>
            <p>System Online // Active Nodes</p>
          </div>

          <h1>Connect with an Architect</h1>

          <p>
            Initiate a high-priority communication link with our engineering
            team. We specialize in architecting resilient digital foundations
            for industrial-scale enterprises.
          </p>
        </section>

        <section className="contact-main-grid">
          <aside className="contact-sidebar">
            <div className="contact-trust-list">
              {trustBadges.map((badge) => (
                <article className="contact-trust-card" key={badge.title}>
                  <span
                    className={`material-symbols-outlined contact-icon-${badge.color}`}
                  >
                    {badge.icon}
                  </span>

                  <div>
                    <h3>{badge.title}</h3>
                    <p>{badge.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="contact-info-card">
              <div>
                <span>HQ Coordinates</span>
                <h3>Buenos Aires, Argentina</h3>
                <p>Morón, Buenos Aires Province</p>
              </div>

              <div className="contact-info-grid">
                <div>
                  <span>Secure Line</span>
                  <p>+54 11 0000-0000</p>
                </div>

                <div>
                  <span>Email Link</span>
                  <p>architect@dblock.systems</p>
                </div>
              </div>

              <div className="contact-operations">
                <div>
                  <strong>24/7 Operations</strong>

                  <div className="contact-signal-bars">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <p>
                  Active monitoring and support nodes globally distributed
                  across multiple regions.
                </p>
              </div>
            </div>
          </aside>

          <section className="contact-form-panel">
            <form className="contact-form">
              <div className="contact-form-grid">
                <div className="contact-field">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Entry required..."
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="secure@protocol.com"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Entity name..."
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="service">Service Stream</label>
                  <select id="service" defaultValue="">
                    <option value="" disabled>
                      Select Protocol...
                    </option>
                    <option>Software Architecture</option>
                    <option>Web Infrastructure</option>
                    <option>Cloud Migration</option>
                    <option>Cybersecurity Audit</option>
                    <option>Industrial Automation</option>
                  </select>
                </div>

                <div className="contact-field contact-full">
                  <label>Estimated Budget Range</label>

                  <div className="contact-budget-grid">
                    {budgetOptions.map((option, index) => (
                      <button
                        className={index === 1 ? "active" : ""}
                        type="button"
                        key={option}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="contact-field contact-full">
                  <label htmlFor="message">Message Payload</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Describe the scope of your objective..."
                  ></textarea>
                </div>
              </div>

              <button className="contact-submit" type="submit">
                Transmit Secure Request
              </button>
            </form>
          </section>
        </section>

        <section className="contact-map-section">
          <div className="contact-map-header">
            <h2>Global Node Infrastructure</h2>

            <div>
              <span>
                <i className="blue-dot"></i>
                Primary Hubs
              </span>

              <span>
                <i className="green-dot"></i>
                Active Nodes
              </span>
            </div>
          </div>

          <div className="contact-map-card">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
              alt="Global node infrastructure map"
            />

            <div className="contact-map-hud contact-map-hud-left">
              <p>LATITUDE: 34.6037° S</p>
              <p>LONGITUDE: 58.3816° W</p>
            </div>

            <div className="contact-map-hud contact-map-hud-right">
              <p>NETWORK STATUS: OPTIMAL</p>
              <span>LATENCY: 12ms AVG</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
