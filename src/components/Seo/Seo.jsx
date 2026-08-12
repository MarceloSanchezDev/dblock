import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://dblock.com.ar";
const socialImage = `${siteUrl}/assets/images/cloud-infrastructure.jpg`;

const pageMetadata = {
  "/": {
    title: "Dblock | Desarrollo Web, SEO y Soluciones Digitales",
    description:
      "Dblock desarrolla sitios web, SEO, aplicaciones, cloud y automatización para empresas que buscan crecer digitalmente.",
  },
  "/soluciones": {
    title: "Soluciones Digitales para Empresas | Dblock",
    description:
      "Soluciones de desarrollo web, cloud y automatización para mejorar la presencia online y los procesos de tu empresa.",
  },
  "/servicios-web": {
    title: "Desarrollo Web y Aplicaciones para Empresas | Dblock",
    description:
      "Creamos páginas web, landing pages, ecommerce y aplicaciones web rápidas, claras y orientadas a generar consultas.",
  },
  "/servicios-cloud": {
    title: "Cloud, Hosting e Infraestructura Digital | Dblock",
    description:
      "Configuramos cloud, hosting, servidores e infraestructura digital estable, segura y preparada para crecer.",
  },
  "/servicios-automatizacion": {
    title: "Automatización de Procesos para Empresas | Dblock",
    description:
      "Digitalizamos tareas, conectamos herramientas y diseñamos flujos de trabajo para reducir errores y ganar eficiencia.",
  },
  "/acerca-de-nosotros": {
    title: "Metodología de Trabajo Digital | Dblock",
    description:
      "Conocé el proceso de Dblock: diagnóstico, estrategia, arquitectura, desarrollo, publicación y optimización.",
  },
  "/beneficios": {
    title: "Beneficios de una Solución Digital Profesional | Dblock",
    description:
      "Descubrí cómo una solución digital profesional mejora la conversión, el SEO, la escalabilidad y la operación de tu empresa.",
  },
  "/contacto": {
    title: "Contacto | Desarrollo Web, Cloud y Automatización | Dblock",
    description:
      "Contanos qué necesita tu empresa. Te ayudamos con desarrollo web, SEO, aplicaciones, infraestructura y automatización.",
  },
};

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
}

export default function Seo() {
  const { pathname } = useLocation();
  const metadata = pageMetadata[pathname] || pageMetadata["/"];
  const canonicalUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`;

  useEffect(() => {
    document.title = metadata.title;
    setMeta('meta[name="description"]', "content", metadata.description);
    setMeta('meta[property="og:title"]', "content", metadata.title);
    setMeta('meta[property="og:description"]', "content", metadata.description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", socialImage);
    setMeta('meta[name="twitter:title"]', "content", metadata.title);
    setMeta('meta[name="twitter:description"]', "content", metadata.description);
    setMeta('meta[name="twitter:image"]', "content", socialImage);

    const canonical = document.head.querySelector('link[rel="canonical"]');

    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    }
  }, [canonicalUrl, metadata]);

  return null;
}
