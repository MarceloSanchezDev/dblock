import "./CaseStudyPlaceholders.css";

// Reemplazar cada campo entre corchetes con información aprobada por el cliente.
export const caseStudyPlaceholders = [
  { industry: "[Industria / tipo de empresa]", title: "[Problema operativo a resolver]", before: "[Cómo se gestionaba antes]", build: "[Sistema, integración o automatización implementada]", result: "[Resultado verificable o mejora observada]" },
  { industry: "[Industria / tipo de empresa]", title: "[Problema operativo a resolver]", before: "[Cómo se gestionaba antes]", build: "[Sistema, integración o automatización implementada]", result: "[Resultado verificable o mejora observada]" },
  { industry: "[Industria / tipo de empresa]", title: "[Problema operativo a resolver]", before: "[Cómo se gestionaba antes]", build: "[Sistema, integración o automatización implementada]", result: "[Resultado verificable o mejora observada]" },
];

// Activar esta sección cuando al menos un caso tenga datos reales y autorización de publicación.
export default function CaseStudyPlaceholders({ cases = caseStudyPlaceholders }) {
  return <section className="case-study-placeholders" aria-label="Estructura de futuros casos de éxito">
    <div className="case-study-placeholders__inner">
      <p>CASOS DE ÉXITO · ESTRUCTURA INTERNA</p>
      <h2>Un caso claro explica el problema, la solución y el cambio observado.</h2>
      <div className="case-study-placeholders__grid">{cases.map((item, index) => <article key={index}><span>{String(index + 1).padStart(2, "0")}</span><small>{item.industry}</small><h3>{item.title}</h3><dl><div><dt>ANTES</dt><dd>{item.before}</dd></div><div><dt>IMPLEMENTAMOS</dt><dd>{item.build}</dd></div><div><dt>RESULTADO</dt><dd>{item.result}</dd></div></dl></article>)}</div>
    </div>
  </section>;
}
