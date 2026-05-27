import "./nav.css";
import { Link } from "react-router-dom";

const navLinks = [
  {
    path: "/soluciones",
    label: "Soluciones",
  },
  {
    path: "/servicios-web",
    label: "Servicios web",
  },
  {
    path: "/servicios-cloud",
    label: "Cloud",
  },
  {
    path: "/servicios-automatizacion",
    label: "Automatización",
  },
  {
    path: "/acerca-de-nosotros",
    label: "Nosotros",
  },
  {
    path: "/beneficios",
    label: "Beneficios",
  },
];

const Nav = () => {
  return (
    <nav className="home-navbar" aria-label="Navegación principal">
      <Link to="/" className="home-logo" aria-label="Ir al inicio de Dblock">
        <img src="/logo.png" alt="Logo de Dblock" className="img-logo" />
        <span>DBLOCK</span>
      </Link>

      <div className="home-navbar-links">
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        ))}
      </div>

      <Link to="/contacto" className="home-navbar-button">
        Solicitar consulta
      </Link>
    </nav>
  );
};

export default Nav;
