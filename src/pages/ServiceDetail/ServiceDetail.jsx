import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import SliceToTopComponent from "../../components/SliceToTopComponent/SliceToTopComponent";
import { servicePages } from "../../content/seoContent";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const { slug: routeSlug } = useParams();
  const { pathname } = useLocation();
  const slug = routeSlug || pathname.replace(/^\//, "");
  const service = servicePages[slug];

  if (!service) return <Navigate to="/" replace />;

  return (
    <SliceToTopComponent>
      <main className="detail-page">
        <section className="detail-hero">
          <div className="detail-container">
          
            <h1>{service.title}</h1>
            <p className="detail-lead">{service.description}</p>
            
          </div>
        </section>

        <section className="detail-section">
          <div className="detail-container detail-two-columns">
            <div>
              
              <h2>Si esto pasa en tu empresa, podemos analizarlo.</h2>
            </div>
            <ul className="detail-list">
              {service.problems.map((problem) => <li key={problem}>{problem}</li>)}
            </ul>
          </div>
        </section>

        <section className="detail-section detail-section-muted">
          <div className="detail-container">
            <div className="detail-heading">
              
              <h2>Una solución pensada para el proceso, no un paquete genérico.</h2>
            </div>
            <div className="detail-solutions-grid">
              {service.solutions.map((solution, index) => (
                <article key={solution} className="detail-solution-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{solution}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-section">
          <div className="detail-container detail-faq-layout">
            <div>
              <h2>Antes de definir una solución, entendemos el contexto.</h2>
            </div>
            <div className="detail-faqs">
              {service.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="detail-contact-cta">
          <div className="detail-container">
            <h2>Contanos cómo trabajan hoy. Vemos juntos qué conviene mejorar.</h2>
            <Link className="detail-button detail-button-primary" to="/contacto">Solicitar una consulta <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </SliceToTopComponent>
  );
}
