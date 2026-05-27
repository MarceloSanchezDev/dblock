import './FirstSectionPage.css';

export default function FirstSectionPage({span,title,description,btnPrimary,btnSecondary,statusCard}) {
  return (
    <section className="home-hero">
        <div className="home-grid-bg"></div>

        <div className="home-container home-hero-content">
          <span className="home-eyebrow">
            {span}
          </span>

          <h1>
            {title}
          </h1>

          <p>
            {description}
          </p>

          <div className="home-hero-buttons">
            <a href={btnPrimary.href} className="home-btn home-btn-primary">
              {btnPrimary.text}
            </a>

            <a href={btnSecondary.href} className="home-btn home-btn-secondary">
              {btnSecondary.text}
            </a>
          </div>
        </div>

        <div className="home-status-card">
          {statusCard}
        </div>
      </section>
  )
}
