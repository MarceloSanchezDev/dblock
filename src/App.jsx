import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Seo from "./components/Seo/Seo";
import Analytics from "./components/Analytics/Analytics";
import StructuredData from "./components/StructuredData/StructuredData";

const Home = lazy(() => import("./pages/Home/Home"));
const StandardPage = lazy(() => import("./pages/NewDesign/ModernPage").then((module) => ({ default: module.StandardPage })));
const ServiceDetail = lazy(() => import("./pages/NewDesign/ModernPage").then((module) => ({ default: module.ServicePage })));
const IndustriesIndex = lazy(() => import("./pages/NewDesign/ModernPage").then((module) => ({ default: module.IndustriesIndex })));
const IndustryDetail = lazy(() => import("./pages/NewDesign/ModernPage").then((module) => ({ default: module.IndustryPage })));
const Contact = lazy(() => import("./pages/NewDesign/ModernContact"));

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
        <Route path="/servicios-web" element={<StandardPage />} />
        <Route path="/servicios-cloud" element={<StandardPage />} />
        <Route path="/servicios-automatizacion" element={<StandardPage />} />
        <Route path="/acerca-de-nosotros" element={<StandardPage />} />
        <Route path="/beneficios" element={<StandardPage />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/soluciones" element={<StandardPage />} />
        <Route path="/software-a-medida" element={<ServiceDetail />} />
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
