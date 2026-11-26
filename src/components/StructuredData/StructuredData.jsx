import { useLocation } from "react-router-dom";
import { industries, servicePages } from "../../content/seoContent";

const siteUrl = "https://dblock.com.ar";

const breadcrumbNames = {
  "/soluciones": "Soluciones digitales",
  "/servicios-web": "Desarrollo web",
  "/servicios-cloud": "Cloud e infraestructura",
  "/servicios-automatizacion": "Automatización de procesos",
  "/software-a-medida": "Software a medida",
  "/automatizacion-de-procesos": "Automatización de procesos",
  "/aplicaciones-web": "Aplicaciones web",
  "/aplicaciones-moviles": "Aplicaciones móviles",
  "/seo-para-empresas": "SEO para empresas",
  "/infraestructura-y-soporte": "Infraestructura y soporte",
  "/sistema-de-pedidos-b2b": "Sistema de pedidos B2B",
  "/integracion-de-sistemas-y-apis": "Integración de sistemas y APIs",
  "/industrias": "Industrias",
  "/acerca-de-nosotros": "Cómo trabajamos",
  "/beneficios": "Beneficios",
  "/contacto": "Contacto",
};

export default function StructuredData() {
  const { pathname } = useLocation();
  const service = servicePages[pathname.replace(/^\//, "")];
  const industry = industries[pathname.replace("/industrias/", "")];

  const graph = [];

  if (service) {
    graph.push(
      { "@type": "Service", name: service.title, description: service.description, url: `${siteUrl}${pathname}`, provider: { "@type": "ProfessionalService", name: "Dblock", url: siteUrl, areaServed: "Argentina" } },
      { "@type": "FAQPage", mainEntity: service.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    );
  } else if (industry) {
    graph.push({ "@type": "Service", name: industry.title, description: industry.description, url: `${siteUrl}${pathname}`, provider: { "@type": "ProfessionalService", name: "Dblock", url: siteUrl, areaServed: "Argentina" } });
  }

  const pageName = breadcrumbNames[pathname];
  if (pageName) {
    const crumbs = [{ "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl }];
    if (pathname.startsWith("/industrias/") && pathname !== "/industrias") crumbs.push({ "@type": "ListItem", position: 2, name: "Industrias", item: `${siteUrl}/industrias` });
    crumbs.push({ "@type": "ListItem", position: crumbs.length + 1, name: pageName, item: `${siteUrl}${pathname}` });
    graph.push({ "@type": "BreadcrumbList", itemListElement: crumbs });
  }

  return graph.length ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }} /> : null;
}
