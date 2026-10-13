import { useLocation } from "react-router-dom";
import { industries, servicePages } from "../../content/seoContent";

const siteUrl = "https://dblock.com.ar";

export default function StructuredData() {
  const { pathname } = useLocation();
  const service = servicePages[pathname.replace(/^\//, "")];
  const industry = industries[pathname.replace("/industrias/", "")];

  let data = null;
  if (service) {
    data = {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Service", name: service.eyebrow, description: service.description, url: `${siteUrl}${pathname}`, provider: { "@type": "ProfessionalService", name: "Dblock", url: siteUrl, areaServed: "Argentina" } },
        { "@type": "FAQPage", mainEntity: service.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
      ],
    };
  } else if (industry) {
    data = { "@context": "https://schema.org", "@type": "Service", name: industry.title, description: industry.description, url: `${siteUrl}${pathname}`, provider: { "@type": "ProfessionalService", name: "Dblock", url: siteUrl, areaServed: "Argentina" } };
  }

  return data ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} /> : null;
}
