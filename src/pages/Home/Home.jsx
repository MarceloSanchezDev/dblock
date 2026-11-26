import { useEffect } from "react";
import { Link } from "react-router-dom";
import SliceToTopComponent from "../../components/SliceToTopComponent/SliceToTopComponent";
import { trackEvent } from "../../lib/analytics";
import "./Home.css";

const services = [
  ["01", "Software a medida", "Sistemas de gestión, pedidos, clientes, stock y reportes diseñados alrededor de tu operación.", "/software-a-medida"],
  ["02", "Automatización de procesos", "Conectamos herramientas y eliminamos pasos manuales que hoy consumen tiempo y generan errores.", "/servicios-automatizacion"],
  ["03", "Aplicaciones web", "Portales y herramientas claras para equipos, clientes y procesos comerciales.", "/servicios-web"],
  ["04", "Infraestructura", "Cloud, integraciones, despliegues y soporte para que la operación tenga una base confiable.", "/servicios-cloud"],
];

const signals = [
  ["01", "Los pedidos viven entre WhatsApp, mails y planillas."],
  ["02", "La información importante depende de quién se acuerde."],
  ["03", "Los equipos repiten tareas que un sistema podría resolver."],
];

const process = [
  ["01", "Entendemos la operación", "Revisamos cómo trabajan hoy, qué información circula y dónde aparecen las fricciones."],
  ["02", "Definimos una solución", "Priorizamos lo que tiene impacto y planteamos un camino de implementación claro."],
  ["03", "Construimos y mejoramos", "Desarrollamos, integramos y acompañamos la evolución de la herramienta."],
];

function Reveal({ children, className = "" }) {
  return <div className={`apple-reveal ${className}`} data-reveal>{children}</div>;
}

export default function Home() {
  useEffect(() => {
    document.body.classList.add("apple-home-active");
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => {
      document.body.classList.remove("apple-home-active");
      observer.disconnect();
    };
  }, []);

  const contactClick = (location) => trackEvent("cta_click", { cta_name: "home_contacto", cta_location: location });

  return (
    <SliceToTopComponent>
      <main className="apple-home">
        <section className="apple-hero" aria-labelledby="inicio-title">
          <div className="apple-orb apple-orb-one" aria-hidden="true" />
          <div className="apple-orb apple-orb-two" aria-hidden="true" />
          <div className="apple-shell apple-hero-content">
            <h1 id="inicio-title">Tu negocio no tiene que depender de tu memoria.</h1>
            <p className="apple-hero-copy">Creamos sistemas a medida y automatizaciones para ordenar la información, reducir el caos diario y hacer que tu empresa funcione con más claridad.</p>
            <div className="apple-actions">
              <Link className="apple-button apple-button-primary" to="/contacto" onClick={() => contactClick("hero")}>Contanos qué querés mejorar <span aria-hidden="true">→</span></Link>
              <a className="apple-button apple-button-text" href="#servicios">Ver cómo podemos ayudarte <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="apple-hero-visual" aria-hidden="true">
            <img src="/assets/images/digital-network.jpg" alt="" />
            <div className="apple-visual-card apple-visual-card-a">Información conectada</div>
            <div className="apple-visual-card apple-visual-card-b">Procesos más claros</div>
          </div>
        </section>

        <section className="apple-intro apple-section">
          <div className="apple-shell apple-intro-grid">
            <Reveal><h2>La tecnología sirve cuando resuelve un problema real de la operación.</h2></Reveal>
            <Reveal className="apple-intro-copy"><p>Antes de hablar de herramientas, entendemos qué está frenando a tu equipo: tareas repetidas, datos dispersos, pedidos sin trazabilidad o sistemas que no se comunican.</p><p>Con ese contexto, diseñamos una solución que se adapta a la forma en que tu empresa trabaja.</p></Reveal>
          </div>
        </section>

        <section className="apple-section apple-signal-section">
          <div className="apple-shell">
            <Reveal><h2>Cuando la operación crece, improvisar empieza a costar.</h2></Reveal>
            <div className="apple-signals">{signals.map(([number, text]) => <Reveal key={number} className="apple-signal"><span>{number}</span><p>{text}</p><i aria-hidden="true">↗</i></Reveal>)}</div>
          </div>
        </section>

        <section className="apple-section apple-services" id="servicios">
          <div className="apple-shell"><Reveal><h2>Una solución para cada parte de tu operación.</h2><p className="apple-section-lead">Podés empezar por un problema concreto y construir desde ahí.</p></Reveal>
            <div className="apple-service-grid">{services.map(([number, title, text, path]) => <Reveal key={title} className="apple-service-card"><span>{number}</span><h3>{title}</h3><p>{text}</p><Link to={path} onClick={() => trackEvent("service_click", { service_name: title })}>Conocer servicio <b aria-hidden="true">→</b></Link></Reveal>)}</div>
          </div>
        </section>

        <section className="apple-section apple-process-section">
          <div className="apple-shell"><Reveal><h2>Un proceso claro, sin promesas vacías.</h2></Reveal>
            <div className="apple-process-grid">{process.map(([number, title, text]) => <Reveal key={number} className="apple-process-step"><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
          </div>
        </section>

        <section className="apple-final">
          <Reveal className="apple-shell apple-final-inner"><h2>¿Hay algo de tu empresa que hoy se podría ordenar mejor?</h2><p>No necesitás tener definida la tecnología. Contanos cómo trabajan hoy y vemos qué camino tiene más sentido.</p><Link className="apple-button apple-button-primary" to="/contacto" onClick={() => contactClick("final")}>Hablemos de tu proyecto <span aria-hidden="true">→</span></Link></Reveal>
        </section>
      </main>
    </SliceToTopComponent>
  );
}
