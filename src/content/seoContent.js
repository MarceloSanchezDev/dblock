export const servicePages = {
  "software-a-medida": {
    eyebrow: "SOFTWARE A MEDIDA PARA EMPRESAS",
    title: "Software adaptado a la operación de tu empresa.",
    description: "Desarrollamos sistemas de gestión, CRM, ERP, portales y dashboards para empresas de Argentina que necesitan ordenar procesos e información.",
    problems: ["Información distribuida entre Excel, WhatsApp y emails.", "Procesos que dependen de tareas manuales o de una sola persona.", "Sistemas existentes que no acompañan la operación."],
    solutions: ["Sistemas de gestión y ERP personalizados", "CRM y portales B2B", "Pedidos, stock, clientes y documentación", "Dashboards para seguir la operación"],
    faqs: [["¿Dblock desarrolla ERP o CRM a medida?", "Sí. Analizamos el proceso actual y definimos una primera etapa útil para tu empresa."], ["¿Pueden integrarse con sistemas existentes?", "Sí. Podemos conectar APIs, ERPs, ecommerce y herramientas que hoy funcionan por separado."]],
  },
  "automatizacion-de-procesos": {
    eyebrow: "AUTOMATIZACIÓN DE PROCESOS",
    title: "Menos pasos manuales. Más control sobre la operación.",
    description: "Automatizamos procesos administrativos, comerciales y operativos para empresas que hoy trabajan con Excel, WhatsApp, emails y plataformas desconectadas.",
    problems: ["Pedidos que se cargan manualmente en varios lugares.", "Seguimientos comerciales que dependen de recordar tareas.", "Reportes y notificaciones que consumen horas cada semana."],
    solutions: ["Automatización de pedidos y notificaciones", "Integraciones entre sistemas y APIs", "Flujos comerciales conectados a CRM", "IA aplicada cuando aporta una mejora concreta"],
    faqs: [["¿Hace falta reemplazar todas las herramientas actuales?", "No. Primero evaluamos qué conviene mantener, conectar o reemplazar."], ["¿Se puede automatizar un proceso que usa WhatsApp?", "Sí. Según el flujo, podemos centralizar consultas, pedidos, avisos y seguimiento."]],
  },
  "aplicaciones-web": {
    eyebrow: "DESARROLLO DE APLICACIONES WEB",
    title: "Aplicaciones web para equipos, clientes y operaciones.",
    description: "Desarrollamos aplicaciones web, paneles internos, portales de clientes y dashboards para centralizar la información de tu empresa.",
    problems: ["No existe un lugar único para consultar el estado de la operación.", "Los equipos necesitan acceder a información actualizada desde distintos lugares.", "Los clientes piden por mensaje información que podrían consultar solos."],
    solutions: ["Paneles administrativos", "Portales para clientes y proveedores", "Dashboards operativos", "Sistemas documentales y de turnos"],
    faqs: [["¿Una aplicación web es lo mismo que un sitio web?", "No. Un sitio explica y capta oportunidades; una aplicación permite que usuarios trabajen, consulten o gestionen información."], ["¿Puede conectarse con una app móvil?", "Sí. Podemos construir web, backend y aplicación móvil como un ecosistema conectado."]],
  },
  "aplicaciones-moviles": {
    eyebrow: "APLICACIONES MÓVILES PARA EMPRESAS",
    title: "Apps conectadas a la operación de tu empresa.",
    description: "Creamos aplicaciones móviles para clientes, vendedores, equipos internos y operaciones logísticas, conectadas a sistemas web existentes.",
    problems: ["El equipo necesita trabajar fuera de la oficina.", "Vendedores y clientes requieren información actualizada en el momento.", "La operación de campo se gestiona por mensajes y llamadas."],
    solutions: ["Apps para clientes", "Apps para vendedores y equipos internos", "Seguimiento operativo y logístico", "Aplicaciones conectadas a backend y sistemas web"],
    faqs: [["¿Desarrollan para Android y iOS?", "Sí. Evaluamos el alcance y definimos la tecnología adecuada para llegar a los dispositivos que usa tu empresa."], ["¿Necesito tener un sistema web antes?", "No necesariamente. Podemos definir y construir el backend, la aplicación web y la app como parte de un mismo proyecto."]],
  },
  "seo-para-empresas": {
    eyebrow: "SEO Y CRECIMIENTO DIGITAL",
    title: "Una web tiene que encontrarse y generar oportunidades.",
    description: "Mejoramos SEO técnico, contenido, performance y conversión para empresas que necesitan aparecer en Google y recibir mejores consultas.",
    problems: ["La web existe pero no aparece para búsquedas comerciales.", "Las páginas cargan lento o explican poco el servicio.", "No hay medición de consultas ni de acciones importantes."],
    solutions: ["SEO técnico y arquitectura de contenidos", "Páginas de servicio e intención comercial", "Performance y Core Web Vitals", "Analítica de tráfico, clics y conversiones"],
    faqs: [["¿Cuándo se ven resultados de SEO?", "Depende de la competencia y el estado del sitio. Primero corregimos la base técnica y medimos la evolución de impresiones, clics y consultas."], ["¿Trabajan SEO local?", "Sí. Podemos optimizar la presencia para búsquedas geográficas relevantes para tu empresa."]],
  },
  "infraestructura-y-soporte": {
    eyebrow: "INFRAESTRUCTURA Y SOPORTE",
    title: "Sistemas estables para seguir operando y evolucionando.",
    description: "Implementamos cloud, deploys, backups, monitoreo y mantenimiento para que tus sistemas funcionen de forma segura y sostenible.",
    problems: ["Deploys manuales, servidores difíciles de mantener o falta de backups.", "Errores que no se detectan hasta que afectan a usuarios.", "Sistemas sin un plan claro de evolución y soporte."],
    solutions: ["Cloud, hosting, VPS y deploy", "Docker, bases de datos y backups", "Monitoreo y seguridad", "Soporte mensual y evolución continua"],
    faqs: [["¿Pueden mantener un sistema ya existente?", "Sí. Primero hacemos un relevamiento técnico para entender riesgos, accesos, infraestructura y prioridades."], ["¿Ofrecen soporte mensual?", "Sí. Podemos acordar mantenimiento, mejoras, monitoreo y nuevas funcionalidades según la necesidad de tu empresa."]],
  },
};

export const industries = {
  distribuidoras: { title: "Software para distribuidoras", description: "Pedidos B2B, stock, precios, reparto y portales comerciales para distribuidoras.", needs: ["Pedidos por WhatsApp y teléfono", "Stock y precios difíciles de actualizar", "Seguimiento de reparto y clientes"], systems: ["Portal B2B para clientes", "Sistema de pedidos y stock", "Listas de precios y cuentas corrientes", "Tablero de ventas y reparto"] },
  logistica: { title: "Software para logística", description: "Sistemas para ordenar seguimiento, flotas, remitos, documentación y comunicación con clientes.", needs: ["Información dispersa entre choferes, oficina y clientes", "Seguimiento manual de entregas", "Documentación sin trazabilidad"], systems: ["Seguimiento operativo", "Gestión de flota y entregas", "Remitos y documentación", "Portal de consulta para clientes"] },
  inmobiliarias: { title: "Software para inmobiliarias", description: "CRM, consultas, propiedades, interesados y documentación en un sistema adaptado a la inmobiliaria.", needs: ["Consultas sin seguimiento", "Información de propiedades desactualizada", "Documentación repartida en distintos canales"], systems: ["CRM de interesados", "Gestión de propiedades", "Seguimiento comercial", "Documentación y vencimientos"] },
  clubes: { title: "Software para clubes", description: "Sistemas para socios, cuotas, actividades, reservas y comunicación con la comunidad.", needs: ["Altas y cuotas gestionadas manualmente", "Reservas por mensajes", "Información de socios difícil de consultar"], systems: ["Gestión de socios", "Cuotas y estados de cuenta", "Reservas y actividades", "Portal para socios"] },
  talleres: { title: "Software para talleres", description: "Órdenes de trabajo, vehículos, clientes e historial de servicios para talleres.", needs: ["Órdenes y presupuestos sin trazabilidad", "Historiales de vehículos repartidos", "Clientes consultando el estado del trabajo"], systems: ["Órdenes de trabajo", "Historial de vehículos", "Presupuestos y avisos", "Portal o seguimiento para clientes"] },
};
