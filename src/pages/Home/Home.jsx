import FirstSectionPage from "../../components/FirstSectionPage/FirstSectionPage";
import SliceToTopComponent from "../../components/SliceToTopComponent/SliceToTopComponent";
import { Link } from "react-router-dom";
import "./Home.css";

const services = [
  {
    icon: "web_asset",
    title: "Páginas web para empresas",
    text: "Diseñamos y desarrollamos sitios institucionales, landing pages, ecommerce y páginas comerciales preparadas para generar consultas.",
  },
  {
    icon: "troubleshoot",
    title: "SEO y posicionamiento web",
    text: "Optimizamos tu sitio para mejorar su visibilidad en Google, corregir problemas técnicos y atraer tráfico con intención comercial.",
  },
  {
    icon: "terminal",
    title: "Aplicaciones web a medida",
    text: "Creamos sistemas, paneles, plataformas y herramientas web para digitalizar procesos y mejorar la operación de tu empresa.",
  },
  {
    icon: "phone_iphone",
    title: "Aplicaciones móviles",
    text: "Desarrollamos apps móviles para empresas que necesitan llegar a sus clientes o equipos desde Android y dispositivos móviles.",
  },
  {
    icon: "cloud",
    title: "Infraestructura digital",
    text: "Configuramos hosting, servidores, despliegues y entornos digitales para que tus soluciones funcionen de forma estable y segura.",
  },
  {
    icon: "support_agent",
    title: "Soporte y mantenimiento",
    text: "Acompañamos a tu empresa con mejoras, monitoreo, correcciones y soporte técnico para mantener tus sistemas funcionando.",
  },
];

const methodology = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Analizamos tu negocio, tu presencia digital actual y los objetivos que querés alcanzar.",
  },
  {
    number: "02",
    title: "Estrategia",
    text: "Definimos la solución adecuada: página web, SEO, aplicación, infraestructura o mejora técnica.",
  },
  {
    number: "03",
    title: "Desarrollo",
    text: "Construimos la solución con una estructura clara, diseño profesional y buenas prácticas técnicas.",
  },
  {
    number: "04",
    title: "Optimización",
    text: "Medimos resultados, mejoramos rendimiento y ajustamos la solución para generar más consultas.",
  },
];

const benefits = [
  {
    title: "Más consultas comerciales",
    text: "Creamos soluciones pensadas para atraer visitantes y convertirlos en oportunidades reales para tu empresa.",
  },
  {
    title: "Presencia digital profesional",
    text: "Mejoramos cómo se ve, se comunica y funciona tu empresa en internet.",
  },
  {
    title: "Soluciones escalables",
    text: "Desarrollamos tecnología preparada para crecer junto con las necesidades de tu negocio.",
  },
];

const Home = () => {
  return (
    <SliceToTopComponent>
    <FirstSectionPage
     btnPrimary={ { text: "Solicitar una consulta", href: "/contacto" } }
     btnSecondary={ { text: "Ver Servicios", href: "/soluciones" } }
     description={"En Dblock creamos páginas web, aplicaciones web, apps móviles e infraestructura digital para empresas que quieren mejorar su presencia online, conseguir más consultas y trabajar con soluciones tecnológicas confiables."} 
     title={"Desarrollo web, SEO y aplicaciones para empresas"}
     span={"DESARROLLO WEB · SEO · APPS · INFRAESTRUCTURA"}
     statusCard={`SITIOS WEB - SEO TÉCNICO - SISTEMAS A MEDIDA`}
     />

      <section id="solutions" className="home-section home-solutions">
        <div className="home-container">
          <div className="home-section-header">
            <span className="home-eyebrow">SOLUCIONES DIGITALES</span>
            <h2>Servicios para hacer crecer la presencia digital de tu empresa</h2>
            <p>
              Ayudamos a empresas a construir, mejorar y mantener sus canales
              digitales con foco en claridad, rendimiento y conversión.
            </p>
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
              src="/assets/images/cloud-infrastructure.jpg"
              alt="Infraestructura digital y servidores para empresas"
            />

            <div className="home-image-label">SOLUCIONES DIGITALES</div>
          </div>

          <div className="home-case-content">
            <span className="home-eyebrow">PROBLEMAS QUE RESOLVEMOS</span>

            <h2>Tecnología pensada para generar resultados reales</h2>

            <div className="home-case-block">
              <h3>El problema</h3>
              <p className="home-danger-line">
                Muchas empresas tienen sitios lentos, poco claros, sin estrategia
                SEO, sin llamados a la acción y con sistemas que no acompañan el
                crecimiento del negocio.
              </p>
            </div>

            <div className="home-case-block home-resolution">
              <span className="material-symbols-outlined">bolt</span>

              <div>
                <h3>La solución</h3>
                <p>
                  Desarrollamos soluciones digitales claras, rápidas y orientadas
                  a conversión: sitios web profesionales, posicionamiento SEO,
                  aplicaciones a medida e infraestructura estable para operar con
                  confianza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="home-section home-methodology">
        <div className="home-container">
          <div className="home-section-header home-center">
            <span className="home-eyebrow">CÓMO TRABAJAMOS</span>
            <h2>Un proceso claro para transformar tu presencia digital</h2>
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
          <div className="home-section-header">
            <span className="home-eyebrow">POR QUÉ ELEGIR DBLOCK</span>
            <h2>Desarrollo, SEO e infraestructura con enfoque comercial</h2>
          </div>

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

      <section className="home-section home-faq">
        <div className="home-container">
          <div className="home-section-header">
            <span className="home-eyebrow">PREGUNTAS FRECUENTES</span>
            <h2>Dudas comunes antes de empezar un proyecto digital</h2>
          </div>

          <div className="home-services-grid">
            <article className="home-service-card">
              <h3>¿Dblock hace páginas web para cualquier tipo de empresa?</h3>
              <p>
                Sí. Podemos desarrollar sitios institucionales, landing pages,
                ecommerce, páginas de servicios y soluciones web adaptadas al
                rubro de cada empresa.
              </p>
            </article>

            <article className="home-service-card">
              <h3>¿También trabajan SEO?</h3>
              <p>
                Sí. Podemos mejorar la estructura técnica, el contenido, las
                palabras clave, la velocidad y la visibilidad del sitio en
                buscadores.
              </p>
            </article>

            <article className="home-service-card">
              <h3>¿Pueden desarrollar una aplicación a medida?</h3>
              <p>
                Sí. Desarrollamos aplicaciones web y móviles según las
                necesidades del negocio, ya sea para clientes, equipos internos
                o procesos operativos.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="home-final-cta">
        <div className="home-pattern-bg"></div>

        <div className="home-container">
          <span className="home-eyebrow">CONTACTO</span>

          <h2>¿Querés mejorar la presencia digital de tu empresa?</h2>

          <p>
            Contanos qué necesitás y te ayudamos a definir la mejor solución:
            página web, SEO, aplicación web, app móvil o infraestructura digital.
          </p>

          <Link
            to="/contacto"
            className="home-btn home-btn-primary"
          >
            Pedir una consulta
          </Link>
        </div>
      </section>
    </SliceToTopComponent>
  );
};

export default Home;
