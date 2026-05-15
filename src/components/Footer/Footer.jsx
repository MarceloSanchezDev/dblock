import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="home-footer">
      <div>
        <h2>DBLOCK</h2>
        <p>Industrial Systems Interface v4.2.1</p>
      </div>

      <div>
        <h4>Resources</h4>
        <Link to="/soluciones">Solutions</Link>
        <Link to="/acerca-de-nosotros">Approach</Link>
        <Link to="/beneficios">Benefits</Link>
      </div>

      <div>
        <h4>Company</h4>
        <Link to="/contacto">Contact</Link>
        <Link to="/soluciones">Services</Link>
        <Link to="/acerca-de-nosotros">Process</Link>
      </div>

      <div className="home-footer-status">
        <span></span>
        Status: Operational
      </div>
    </footer>
  );
};

export default Footer;
