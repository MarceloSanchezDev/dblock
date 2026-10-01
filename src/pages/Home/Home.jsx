import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SliceToTopComponent from "../../components/SliceToTopComponent/SliceToTopComponent";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import "./Home.css";

const services = [
  { icon: "account_tree", title: "Software a medida", text: "Sistemas de gestión, portales B2B, CRM, pedidos, stock y dashboards adaptados a tu operación.", examples: "ERP · CRM · Portales", path: "/soluciones" },
  { icon: "auto_mode", title: "Automatización", text: "Conectamos las tareas y herramientas que hoy dependen de planillas, mensajes y pasos manuales.", examples: "Flujos · APIs · IA aplicada", path: "/servicios-automatizacion" },
  { icon: "language", title: "Desarrollo web", text: "Sitios, ecommerce, catálogos y aplicaciones web claros, rápidos y preparados para convertir.", examples: "Web · Ecommerce · Portales", path: "/servicios-web" },
  { icon: "phone_iphone", title: "Aplicaciones móviles", text: "Apps para clientes, equipos comerciales y operación, conectadas a tu sistema y backend.", examples: "Android · iOS · React Native", path: "/servicios-web" },
  { icon: "query_stats", title: "SEO y crecimiento", text: "Mejoramos visibilidad, rendimiento y recorridos de conversión para generar oportunidades reales.", examples: "SEO técnico · Performance", path: "/servicios-web" },
  { icon: "dns", title: "Infraestructura y soporte", text: "Cloud, deploys, backups, monitoreo y evolución continua para operar sin fricciones.", examples: "Cloud · Seguridad · Soporte", path: "/servicios-cloud" },
];

const problems = [
  ["forum", "Manejo muchos pedidos por WhatsApp", "Sistema de pedidos, clientes y stock en un solo lugar."],
  ["table_view", "Tenemos todo en Excel", "Sistema de gestión centralizado y datos actualizados."],
  ["lan", "Nuestros sistemas no se comunican", "Integraciones, APIs y flujos automatizados."],
  ["visibility", "Los clientes preguntan el estado", "Portal de clientes con pedidos, documentos y seguimiento."],
  ["monitoring", "No puedo controlar la operación", "Dashboards y reportes para tomar decisiones a tiempo."],
  ["pending_actions", "Hay demasiadas tareas administrativas", "Automatizaciones que eliminan trabajo repetitivo."],
];

const industries = [
  ["local_shipping", "Distribuidoras", "Pedidos B2B · stock · reparto"],
  ["route", "Logística", "Flotas · remitos · seguimiento"],
  ["apartment", "Inmobiliarias", "Consultas · propiedades · documentación"],
  ["storefront", "Comercios", "Productos · ventas · clientes"],
  ["groups", "Clubes", "Socios · cuotas · reservas"],
  ["build", "Talleres", "Órdenes · vehículos · historial"],
];

const useCases = [
  ["Portal de clientes", "Accesos, pedidos, documentación, facturas y estados en un espacio propio."],
  ["Sistema de pedidos", "Pedido → stock → preparación → entrega, sin perder trazabilidad."],
  ["Dashboard empresarial", "Ventas, clientes, pedidos e ingresos para ver la operación completa."],
  ["CRM comercial", "Lead → contacto → seguimiento → propuesta → cliente."],
];

const process = [
  ["01", "Relevamiento", "Entendemos cómo funciona tu negocio."],
  ["02", "Análisis", "Detectamos problemas y oportunidades."],
  ["03", "Diseño", "Definimos la solución y sus etapas."],
  ["04", "Desarrollo", "Construimos con foco en lo importante."],
  ["05", "Implementación", "Integramos y ponemos en marcha."],
  ["06", "Evolución", "Medimos, mantenemos y mejoramos."],
];

function FadeContent({ children, className = "" }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.12 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef} className={`db-fade ${isVisible ? "is-visible" : ""} ${className}`}>{children}</div>;
}

function MagneticLink({ to, href, className, children }) {
  const elementRef = useRef(null);

  const handleMove = (event) => {
    if (window.matchMedia("(max-width: 700px)").matches) return;
    const rect = elementRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.13;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.16;
    elementRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    elementRef.current.style.transform = "translate(0, 0)";
  };

  const props = { ref: elementRef, className: `${className} db-magnetic`, onMouseMove: handleMove, onMouseLeave: handleLeave };
  return to ? <Link {...props} to={to}>{children}</Link> : <a {...props} href={href}>{children}</a>;
}

function SpotlightCard({ service, index }) {
  const cardRef = useRef(null);
  const handleMove = (event) => {
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  };

  return <article ref={cardRef} className="db-service db-spotlight" onMouseMove={handleMove}>
    <div className="db-service-top"><span className="material-symbols-outlined">{service.icon}</span><small>0{index + 1}</small></div>
    <h3>{service.title}</h3><p>{service.text}</p><span className="db-service-examples">{service.examples}</span><Link to={service.path}>Ver servicio <span aria-hidden="true">→</span></Link>
  </article>;
}

function DotField() {
  const fieldRef = useRef(null);
  const handleMove = (event) => {
    const rect = fieldRef.current.getBoundingClientRect();
    fieldRef.current.style.setProperty("--dot-x", `${event.clientX - rect.left}px`);
    fieldRef.current.style.setProperty("--dot-y", `${event.clientY - rect.top}px`);
  };
  return <div ref={fieldRef} className="db-dot-field" onMouseMove={handleMove} aria-hidden="true">{Array.from({ length: 220 }, (_, index) => <i key={index} />)}</div>;
}

function MagnetLines() {
  return <svg className="db-magnet-lines" viewBox="0 0 700 420" preserveAspectRatio="none" aria-hidden="true"><path d="M-20 330 C170 230 260 380 438 230 S620 185 730 65" /><path d="M-20 385 C165 280 260 425 442 275 S620 230 730 115" /><path d="M135 440 C225 345 330 345 482 155 S620 95 720 -5" /></svg>;
}

export default function Home() {
  return (
    <SliceToTopComponent>
      <main className="home-page">
        <section className="db-hero">
          <HeroVideo className="db-hero-video" src="/assets/videos/home-hero.mp4" poster="/assets/images/cloud-infrastructure.jpg" />
          <DotField />
          <MagnetLines />
          <div className="home-container db-hero-content">
            <p className="db-kicker db-shiny"><span /> TECNOLOGÍA PARA EMPRESAS</p>
            <h1>Software y automatización para que tu empresa <em>trabaje mejor.</em></h1>
            <p className="db-lead">Desarrollamos sistemas, aplicaciones y soluciones digitales que ordenan procesos, centralizan información y reducen trabajo manual.</p>
            <div className="db-actions"><MagneticLink className="db-button db-button-main" to="/contacto">Contanos qué proceso querés mejorar <span aria-hidden="true">→</span></MagneticLink><MagneticLink className="db-button db-button-quiet" href="#servicios">Conocer nuestros servicios</MagneticLink></div>
            <dl className="db-hero-facts" aria-label="Capacidades de Dblock"><div><dt>01</dt><dd>Software a medida</dd></div><div><dt>02</dt><dd>Automatización</dd></div><div><dt>03</dt><dd>Soporte continuo</dd></div></dl>
          </div>
        </section>

        <FadeContent><section className="db-section db-discovery"><div className="home-container db-two-column"><div><p className="db-eyebrow">CÓMO EMPEZAMOS</p><h2>No vendemos software genérico.</h2></div><div className="db-discovery-copy"><p>Primero entendemos cómo funciona tu empresa: los procesos, las herramientas, las tareas repetitivas y la información que hoy está dispersa.</p><p>Con ese contexto, diseñamos una solución que se adapta a tu operación.</p></div></div><div className="home-container db-flow" aria-label="Proceso de descubrimiento">{["Negocio", "Análisis", "Problema", "Solución", "Automatización", "Resultados"].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div></section></FadeContent>

        <FadeContent><section id="servicios" className="db-section db-services"><div className="home-container"><div className="db-section-heading"><p className="db-eyebrow">LO QUE HACEMOS</p><h2>La tecnología que necesita tu operación.</h2><p>No hace falta empezar por la tecnología. Empezamos por el problema que querés resolver.</p></div><div className="db-services-grid">{services.map((service, index) => <SpotlightCard key={service.title} service={service} index={index} />)}</div></div></section></FadeContent>

        <FadeContent><section className="db-section db-problems"><div className="home-container"><div className="db-section-heading"><p className="db-eyebrow">PROBLEMAS REALES</p><h2>Cuando algo se repite, se pierde o se desordena, hay una oportunidad de mejorarlo.</h2></div><div className="db-problem-grid">{problems.map(([icon, problem, solution]) => <article key={problem}><span className="material-symbols-outlined">{icon}</span><h3>“{problem}”</h3><div><small>POSIBLE SOLUCIÓN</small><p>{solution}</p></div></article>)}</div></div></section></FadeContent>

        <FadeContent><section className="db-section db-industries"><div className="home-container"><div className="db-section-heading"><p className="db-eyebrow">SOLUCIONES POR INDUSTRIA</p><h2>Cada operación tiene su lógica.</h2><p>Diseñamos tecnología alrededor de la manera en que tu negocio realmente trabaja.</p></div><div className="db-industries-grid">{industries.map(([icon, title, details]) => <article key={title}><span className="material-symbols-outlined">{icon}</span><h3>{title}</h3><p>{details}</p></article>)}</div></div></section></FadeContent>

        <FadeContent><section className="db-section db-usecases"><div className="home-container db-usecase-layout"><div className="db-usecase-intro"><p className="db-eyebrow">QUÉ PODEMOS CONSTRUIR</p><h2>Herramientas conectadas a la forma de trabajar de tu empresa.</h2><Link className="db-text-link" to="/contacto">Hablemos de tu proyecto <span>→</span></Link></div><div className="db-usecase-list">{useCases.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><i aria-hidden="true">↗</i></article>)}</div></div></section></FadeContent>

        <FadeContent><section className="db-section db-process"><div className="home-container"><div className="db-section-heading"><p className="db-eyebrow">CÓMO TRABAJAMOS</p><h2>Un proceso claro, desde el problema hasta la evolución.</h2></div><ol>{process.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section></FadeContent>

        <section className="db-tech"><div className="home-container"><p className="db-eyebrow">CÓMO LO HACEMOS</p><div><h2>Tecnología que acompaña al negocio.</h2><p>React · Node.js · TypeScript · MySQL · MongoDB · Docker · Vercel · React Native · APIs REST</p></div></div></section>
        <FadeContent><section className="db-final"><div className="home-container"><p className="db-eyebrow">EMPECEMOS POR ENTENDERLO</p><h2>¿Hay un proceso de tu empresa que quieras mejorar?</h2><p>No hace falta que sepas qué tecnología necesitás. Contanos cómo trabajan hoy y analizamos qué se puede resolver.</p><MagneticLink className="db-button db-button-main" to="/contacto">Hablemos de tu proyecto <span aria-hidden="true">→</span></MagneticLink></div></section></FadeContent>
      </main>
    </SliceToTopComponent>
  );
}
