import SliceToTopComponent from "../../components/SliceToTopComponent/SliceToTopComponent";
import "./Benefits.css";

const metrics = [
  {
    value: "+ consultas",
    label: "Sitios pensados para convertir visitantes en oportunidades comerciales",
    color: "green",
  },
  {
    value: "SEO",
    label: "Estructura preparada para mejorar visibilidad en Google",
    color: "blue",
  },
  {
    value: "Escalable",
    label: "Soluciones listas para crecer con tu empresa",
    color: "white",
  },
];

const benefits = [
  {
    icon: "shield_lock",
    title: "Seguridad",
    text: "Aplicamos buenas prácticas para proteger formularios, datos, accesos, infraestructura y entornos digitales.",
    color: "blue",
    large: true,
  },
  {
    icon: "dynamic_feed",
    title: "Escalabilidad",
    text: "Creamos soluciones preparadas para crecer en contenido, usuarios, servicios y funcionalidades.",
    color: "green",
  },
  {
    icon: "robot_2",
    title: "Automatización",
    text: "Ayudamos a reducir tareas repetitivas con sistemas, integraciones y flujos digitales más eficientes.",
    color: "blue",
  },
  {
    icon: "bolt",
    title: "Rendimiento",
    text: "Optimizamos velocidad, estructura y experiencia para que tu sitio o aplicación funcione mejor.",
    color: "green",
  },
  {
    icon: "engineering",
    title: "Soporte técnico",
    text: "Acompañamos a tu empresa con mantenimiento, mejoras, correcciones y asistencia técnica.",
    color: "blue",
    large: true,
  },
  {
    icon: "account_balance_wallet",
    title: "Inversión eficiente",
    text: "Priorizamos soluciones útiles para tu negocio, evitando desarrollos innecesarios o difíciles de mantener.",
    color: "green",
  },
  {
    icon: "speed",
    title: "Mejor experiencia",
    text: "Diseñamos interfaces claras, responsive y fáciles de usar para clientes y equipos internos.",
    color: "blue",
  },
  {
    icon: "update",
    title: "Preparado para el futuro",
    text: "Trabajamos con estructuras modulares que permiten mejorar, actualizar y ampliar el proyecto con el tiempo.",
    color: "green",
    large: true,
  },
];

const comparisonRows = [
  {
    metric: "Presencia digital",
    legacy: "Sitio básico sin estrategia",
    dblock: "Web clara, profesional y orientada a consultas",
  },
  {
    metric: "SEO",
    legacy: "Contenido sin estructura",
    dblock: "Arquitectura, textos y páginas pensadas para Google",
  },
  {
    metric: "Conversión",
    legacy: "Sin llamados a la acción claros",
    dblock: "CTAs, formularios y mensajes comerciales definidos",
  },
  {
    metric: "Mantenimiento",
    legacy: "Cambios difíciles o desordenados",
    dblock: "Código y estructura preparados para mejorar con el tiempo",
  },
  {
    metric: "Escalabilidad",
    legacy: "Solución limitada",
    dblock: "Base técnica lista para crecer con tu empresa",
  },
];

const Benefits = () => {
  return (
    <SliceToTopComponent>

    <main className="benefits-page">
      <section className="benefits-hero">
        <div className="benefits-hero-content">
          <div className="benefits-status">
            <span className="material-symbols-outlined">terminal</span>
            <p>Beneficios para empresas</p>
          </div>

          <h1>Beneficios de trabajar con Dblock</h1>

          <p className="benefits-hero-text">
            Desarrollamos páginas web, SEO, aplicaciones e infraestructura
            digital para empresas que quieren mejorar su presencia online,
            ordenar sus procesos y conseguir más consultas.
          </p>

          <div className="benefits-buttons">
            <a href="#cta" className="benefits-btn benefits-btn-primary">
              Pedir consulta
            </a>

            <a
              href="#comparison"
              className="benefits-btn benefits-btn-secondary"
            >
              Ver comparación
            </a>
          </div>
        </div>

        <div className="benefits-hero-image">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1400&q=80"
            alt="Beneficios de desarrollo web, SEO e infraestructura digital"
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
          <h2>Ventajas principales</h2>
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
        <h2>Dblock vs. una solución digital improvisada</h2>

        <div className="benefits-table-wrapper">
          <table className="benefits-table">
            <thead>
              <tr>
                <th>Área</th>
                <th>Solución común</th>
                <th>Con Dblock</th>
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
          alt="Red digital e infraestructura tecnológica para empresas"
        />

        <div className="benefits-cta-content">
          <h2>¿Querés mejorar tu presencia digital?</h2>

          <p>
            Hablemos sobre tu empresa y definamos qué solución necesitás:
            página web, SEO, aplicación web, app móvil o infraestructura digital.
          </p>

          <div className="benefits-cta-buttons">
            <a
              href="mailto:contact@dblock.com"
              className="benefits-cta-primary"
            >
              Solicitar una consulta
            </a>

            <a
              href="mailto:contact@dblock.com"
              className="benefits-cta-secondary"
            >
              Contactar a Dblock
            </a>
          </div>
        </div>
      </section>
    </main>
    </SliceToTopComponent>
  );
};

export default Benefits;
