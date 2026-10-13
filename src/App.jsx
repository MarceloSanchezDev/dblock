import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Seo from "./components/Seo/Seo";
import Analytics from "./components/Analytics/Analytics";
import StructuredData from "./components/StructuredData/StructuredData";

const Home = lazy(() => import("./pages/Home/Home"));
const ServiciosWeb = lazy(() => import("./pages/ServicesWeb/ServicesWeb"));
const ServiciosCloud = lazy(() => import("./pages/ServicesCloud/ServicesCloud"));
const ServiciosAutomation = lazy(() => import("./pages/ServiciesAutomation/ServiceAutomation"));
const Approach = lazy(() => import("./pages/Approach/Approach"));
const Benefits = lazy(() => import("./pages/Beneficts/Benefits"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Solutions = lazy(() => import("./pages/Solutions/Solutions"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail/ServiceDetail"));
const IndustriesIndex = lazy(() => import("./pages/Industries/Industries").then((module) => ({ default: module.IndustriesIndex })));
const IndustryDetail = lazy(() => import("./pages/Industries/Industries").then((module) => ({ default: module.IndustryDetail })));

function App() {
  return (
    <div className="home-page">
      <Seo />
      <StructuredData />
      <Analytics />
      <Nav />

      <Suspense fallback={<main className="route-loading" aria-live="polite">Cargando…</main>}>
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
        <Route path="/software-a-medida" element={<ServiceDetail />} />
        <Route path="/automatizacion-de-procesos" element={<ServiceDetail />} />
        <Route path="/infraestructura-y-soporte" element={<ServiceDetail />} />
        <Route path="/industrias" element={<IndustriesIndex />} />
        <Route path="/industrias/:industry" element={<IndustryDetail />} />
      </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
