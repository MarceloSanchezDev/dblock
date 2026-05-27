import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

import ServiciosWeb from "./components/ServicesWeb/ServicesWeb";
import ServiciosCloud from "./components/ServicesCloud/ServicesCloud";
import ServiciosAutomation from "./components/ServiciesAutomation/ServiceAutomation";

import Approach from "./components/Approach/Approach";
import Benefits from "./components/Beneficts/Benefits";
import Contact from "./components/Contact/Contact";
import Solutions from "./components/Solutions/Solutions";

function App() {
  return (
    <main className="home-page">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios-web" element={<ServiciosWeb />} />
        <Route path="/servicios-cloud" element={<ServiciosCloud />} />
        <Route
          path="/servicios-automatizacion"
          element={<ServiciosAutomation />}
        />
        <Route path="/acerca-de-nosotros" element={<Approach />} />
        <Route path="/beneficios" element={<Benefits />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/soluciones" element={<Solutions />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;