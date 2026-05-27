import "./Footer.css";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="home-footer">
      <div>
        <h2>DBLOCK</h2>

        <p>
          Desarrollo web, SEO, aplicaciones e infraestructura digital para
          empresas.
        </p>
      </div>

      <div>
        <h4>Servicios</h4>
        <Link to="/servicios-web">Páginas web para empresas</Link>
        <Link to="/servicios-cloud">Cloud e infraestructura</Link>
        <Link to="/servicios-automatizacion">Automatización de procesos</Link>
      </div>

      <div>
        <h4>Empresa</h4>
        <Link to="/soluciones">Soluciones digitales</Link>
        <Link to="/beneficios">Beneficios</Link>
        <Link to="/acerca-de-nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
      </div>

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
