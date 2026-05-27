import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

import ServiciosWeb from "./pages/ServicesWeb/ServicesWeb";
import ServiciosCloud from "./pages/ServicesCloud/ServicesCloud";
import ServiciosAutomation from "./pages/ServiciesAutomation/ServiceAutomation";

import Approach from "./pages/Approach/Approach";
import Benefits from "./pages/Beneficts/Benefits";
import Contact from "./pages/Contact/Contact";
import Solutions from "./pages/Solutions/Solutions";

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