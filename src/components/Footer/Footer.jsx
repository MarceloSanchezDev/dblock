import "./Footer.css";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="home-footer">
      <div className="home-footer-brand">
        <h2>DBLOCK</h2>

        <p>
          Software, automatización y soluciones digitales para empresas.
        </p>
      </div>

      <nav className="home-footer-links" aria-label="Servicios">
        <h4>Servicios</h4>
        <Link to="/soluciones">Software a medida</Link>
        <Link to="/servicios-automatizacion">Automatización de procesos</Link>
        <Link to="/servicios-web">Desarrollo web y aplicaciones</Link>
        <Link to="/servicios-cloud">Cloud e infraestructura</Link>
      </nav>

      <nav className="home-footer-links" aria-label="Empresa">
        <h4>Empresa</h4>
        <Link to="/soluciones">Soluciones digitales</Link>
        <Link to="/beneficios">Beneficios</Link>
        <Link to="/acerca-de-nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <div className="home-footer-status">
        <span></span>

        <div>
          <strong>Consultas abiertas</strong>
          <p>Buenos Aires, Argentina · {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
