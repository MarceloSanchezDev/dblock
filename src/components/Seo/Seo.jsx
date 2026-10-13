import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://dblock.com.ar";
const socialImage = `${siteUrl}/assets/images/cloud-infrastructure.jpg`;

const pageMetadata = {
  "/": {
    title: "Dblock | Software a Medida y Automatización para Empresas",
    description:
      "Dblock desarrolla software a medida, automatizaciones, aplicaciones y soluciones digitales para empresas en Argentina.",
  },
  "/soluciones": {
    title: "Software y Soluciones Digitales para Empresas | Dblock",
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
  "/software-a-medida": {
    title: "Desarrollo de Software a Medida en Argentina | Dblock",
    description: "Desarrollamos sistemas de gestión, CRM, ERP, portales y dashboards a medida para empresas argentinas.",
  },
  "/automatizacion-de-procesos": {
    title: "Automatización de Procesos para Empresas | Dblock",
    description: "Automatizamos tareas, conectamos sistemas y reducimos trabajo manual en empresas de Argentina.",
  },
  "/aplicaciones-web": {
    title: "Desarrollo de Aplicaciones Web para Empresas | Dblock",
    description: "Creamos aplicaciones web, paneles, portales de clientes y dashboards adaptados a tu operación.",
  },
  "/aplicaciones-moviles": {
    title: "Desarrollo de Aplicaciones Móviles para Empresas | Dblock",
    description: "Desarrollamos apps móviles para clientes, vendedores y equipos conectadas a la operación de tu empresa.",
  },
  "/seo-para-empresas": {
    title: "SEO para Empresas: Más Visibilidad y Consultas | Dblock",
    description: "Mejoramos SEO técnico, contenido, performance y conversión para atraer consultas comerciales relevantes.",
  },
  "/infraestructura-y-soporte": {
    title: "Infraestructura Cloud y Soporte de Sistemas | Dblock",
    description: "Cloud, deploys, backups, monitoreo y soporte para que tus sistemas sigan operando y evolucionando.",
  },
  "/industrias": {
    title: "Software por Industria para Empresas | Dblock",
    description: "Soluciones de software y automatización para distribuidoras, logística, inmobiliarias, clubes y talleres.",
  },
  "/industrias/distribuidoras": { title: "Software para Distribuidoras | Dblock", description: "Software a medida para pedidos, stock, precios, reparto y clientes de distribuidoras." },
  "/industrias/logistica": { title: "Software para Logística | Dblock", description: "Sistemas para organizar flotas, remitos, entregas, documentación y consultas de clientes." },
  "/industrias/inmobiliarias": { title: "Software para Inmobiliarias | Dblock", description: "CRM, propiedades, consultas y documentación en una solución adaptada a inmobiliarias." },
  "/industrias/clubes": { title: "Software para Clubes | Dblock", description: "Sistemas para socios, cuotas, reservas, actividades y comunicación de clubes." },
  "/industrias/talleres": { title: "Software para Talleres | Dblock", description: "Órdenes de trabajo, vehículos, presupuestos e historial de clientes para talleres." },
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
