import "./Footer.css";

const Footer = () => {
  return (
    <footer className="home-footer">
      <div>
        <h2>DBLOCK</h2>
        <p>Industrial Systems Interface v4.2.1</p>
      </div>

      <div>
        <h4>Resources</h4>
        <a href="#solutions">Solutions</a>
        <a href="#approach">Approach</a>
        <a href="#benefits">Benefits</a>
      </div>

      <div>
        <h4>Company</h4>
        <a href="#contact">Contact</a>
        <a href="#solutions">Services</a>
        <a href="#approach">Process</a>
      </div>

      <div className="home-footer-status">
        <span></span>
        Status: Operational
      </div>
    </footer>
  );
};

export default Footer;
