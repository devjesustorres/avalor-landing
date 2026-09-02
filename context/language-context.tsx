"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  isTransitioning: boolean;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navbar
    "nav.services": "Servicios",
    "nav.methodology": "Metodología",
    "nav.benefits": "Beneficios",
    "nav.models": "Modalidades",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "nav.schedule": "Agendar Llamada",
    "nav.quote": "Cotizar Proyecto",

    // Hero
    "hero.badge": "Ingeniería de Software & Soluciones Digitales",
    "hero.badge_chip": "100% a la Medida",
    "hero.title_prefix": "Desarrollamos el Software a la Medida para ",
    "hero.title_highlight": "Empresas en Crecimiento.",
    "hero.subtitle": "Transformamos los procesos y desafíos de tu empresa en plataformas web robustas, aplicaciones móviles y sistemas escalables, diseñados exactamente según las necesidades de tu negocio.",
    "hero.cta_quote": "Cotizar Proyecto Gratis",
    "hero.cta_services": "Explorar Servicios",
    "hero.tech_heading": "Construido con las tecnologías más modernas, rápidas y seguras",

    // Benefits / Stats
    "benefits.badge": "Por Qué Elegirnos",
    "benefits.title": "Ingeniería de Software con Estándares de Excelencia",
    "benefits.subtitle": "Diseñamos soluciones tecnológicas que impulsan la productividad y rentabilidad de tu empresa.",
    "benefits.card1.chip": "100% a la Medida",
    "benefits.card1.val": "0%",
    "benefits.card1.title": "Limitaciones de Plantillas",
    "benefits.card1.desc": "Cada función, pantalla y base de datos se modela según las reglas exactas de tu negocio, sin atarte a software prefabricado.",
    "benefits.card1.bottom_l": "Código Limpio & Modular",
    "benefits.card1.bottom_r": "Garantía Total",

    "benefits.card2.chip": "Alta Eficiencia",
    "benefits.card2.val": "+80%",
    "benefits.card2.title": "Ahorro de Tiempo Operativo",
    "benefits.card2.desc": "Automatizamos flujos de trabajo repetitivos y centralizamos tu información para que tu equipo se enfoque en hacer crecer el negocio.",
    "benefits.card2.bottom_l": "Arquitectura Cloud Escalable",
    "benefits.card2.bottom_r": "Rápido & Seguro",

    "benefits.card3.chip": "Tu Propiedad 100%",
    "benefits.card3.val": "100%",
    "benefits.card3.title": "Propiedad del Código Fuente",
    "benefits.card3.desc": "Todo el código, diseño y bases de datos son tuyos. Firmamos acuerdos de confidencialidad (NDA) para proteger tu propiedad intelectual.",
    "benefits.card3.bottom_l": "Acuerdos de Confidencialidad",
    "benefits.card3.bottom_r": "Soporte Post-Entrega",

    // Methodology / Dashboard
    "method.badge": "Metodología & Calidad",
    "method.title": "Sistemas Robustos, Intuitivos y Preparados para Crecer",
    "method.subtitle": "Diseñamos paneles de control, plataformas web y arquitecturas backend con los más altos estándares visuales y de rendimiento.",
    "method.tab1": "Arquitectura & Backend",
    "method.tab2": "Interfaces & UX/UI",
    "method.tab3": "Control de Calidad (QA)",
    "method.metric1.label": "Respuesta de APIs",
    "method.metric1.badge": "ms",
    "method.metric2.label": "Disponibilidad de Servidores",
    "method.metric2.badge": "Garantizado",
    "method.metric3.label": "Cobertura de Pruebas QA",
    "method.metric3.badge": "Validado",
    "method.flow.title": "Flujo de Ingeniería & Entrega Continua",
    "method.flow.subtitle": "Proceso transparente con entregas funcionales periódicas",
    "method.flow.chip": "Sprints Ágiles",
    "method.flow.step1_title": "analisis_y_prototipado_ux()",
    "method.flow.step1_desc": "Figma / Wireframes",
    "method.flow.step1_badge": "Aprobado",
    "method.flow.step2_title": "desarrollo_modular_fullstack()",
    "method.flow.step2_desc": "React / Node / PostgreSQL",
    "method.flow.step2_badge": "Optimizado",
    "method.flow.step3_title": "auditoria_qa_y_despliegue()",
    "method.flow.step3_desc": "Seguridad & Stress Test",
    "method.flow.step3_badge": "0 Errores",
    "method.status.title": "Garantías Técnicas",
    "method.status.val": "100%",
    "method.status.sub": "Transparencia & Entrega",
    "method.status.item1_l": "Acuerdo de Confidencialidad",
    "method.status.item1_r": "NDA Incluido",
    "method.status.item2_l": "Código Fuente Completo",
    "method.status.item2_r": "Tu Propiedad",
    "method.status.item3_l": "Garantía Post-Lanzamiento",
    "method.status.item3_r": "Sin Costo Extra",
    "method.callout.title": "¿Tienes un proyecto en mente?",
    "method.callout.desc": "Te asesoramos con el diseño técnico y presupuesto sin costo.",
    "method.callout.btn": "Solicitar Diagnóstico Gratis",

    // Solutions / Services
    "services.badge": "Nuestros Servicios",
    "services.title": "Soluciones de Software para Empresas Exigentes",
    "services.subtitle": "Cubrimos todo el ciclo de desarrollo tecnológico: desde el análisis de requerimientos hasta el despliegue y soporte continuo.",
    "services.s1.title": "Sistemas de Gestión & ERPs a Medida",
    "services.s1.desc": "Centraliza inventarios, ventas, facturación, compras y operaciones en una plataforma privada diseñada exactamente según tus procesos internos.",
    "services.s1.cta": "Cotizar sistema",
    "services.s2.title": "Plataformas Web & Aplicaciones SaaS",
    "services.s2.desc": "Desarrollamos soluciones web escalables y de alta velocidad con paneles de administración modernos y experiencias fluidas para usuarios.",
    "services.s2.cta": "Construir plataforma",
    "services.s3.title": "Aplicaciones Móviles (iOS & Android)",
    "services.s3.desc": "Apps móviles nativas e híbridas con sincronización en tiempo real, notificaciones push y conexión directa con tus bases de datos.",
    "services.s3.cta": "Desarrollar App",
    "services.s4.title": "Integraciones de APIs & Automatización",
    "services.s4.desc": "Conectamos tus herramientas actuales con pasarelas de pago (Stripe, PayPal, bancos locales), WhatsApp API, CRMs y servicios externos.",
    "services.s4.cta": "Ver integraciones",
    "services.s5.title": "Modernización de Sistemas & Bases de Datos",
    "services.s5.desc": "Migramos software obsoleto o lento hacia arquitecturas cloud contemporáneas, mejorando radicalmente la seguridad, rapidez y usabilidad.",
    "services.s5.cta": "Modernizar software",
    "services.s6.title": "Consultoría Técnica & Arquitectura Cloud",
    "services.s6.desc": "Te asesoramos en el diseño de arquitectura, selección de infraestructura (AWS, Azure, Google Cloud) y optimización de costos de servidores.",
    "services.s6.cta": "Agendar consultoría",

    // Models / Pricing
    "pricing.badge": "Modalidades de Trabajo",
    "pricing.title": "Modelos Flexibles y Transparentes",
    "pricing.subtitle": "Nos adaptamos a la escala y metas de tu empresa con presupuestos claros, entregas por fases y sin costos ocultos.",
    "pricing.t1.title": "Proyecto Llave en Mano",
    "pricing.t1.desc": "Ideal para sistemas nuevos, MVPs o digitalizaciones con alcance definido.",
    "pricing.t1.price": "A Medida",
    "pricing.t1.period": "Presupuesto e hitos fijos",
    "pricing.t1.f1": "Levantamiento técnico y diseño UX/UI",
    "pricing.t1.f2": "Desarrollo Full-Stack frontend y backend",
    "pricing.t1.f3": "Pruebas de calidad y despliegue cloud",
    "pricing.t1.f4": "Transferencia total del código fuente",
    "pricing.t1.f5": "Garantía de soporte post-lanzamiento",
    "pricing.t1.cta": "Cotizar Proyecto",

    "pricing.t2.badge": "Más Recomendado",
    "pricing.t2.title": "Equipo Dedicado (Squad)",
    "pricing.t2.desc": "Desarrolladores e ingenieros asignados para desarrollo ágil continuo.",
    "pricing.t2.price": "Mensual",
    "pricing.t2.period": "Sprints ágiles y capacidad a demanda",
    "pricing.t2.f1": "Ingenieros de software senior dedicados",
    "pricing.t2.f2": "Metodología ágil con entregas semanales",
    "pricing.t2.f3": "Comunicación directa por Slack / Teams",
    "pricing.t2.f4": "Control de calidad y revisión de código",
    "pricing.t2.f5": "Flexibilidad total para escalar el equipo",
    "pricing.t2.cta": "Solicitar Propuesta de Equipo",

    "pricing.t3.title": "Soporte & Consultoría",
    "pricing.t3.desc": "Mantenimiento preventivo, optimizaciones y soporte para sistemas activos.",
    "pricing.t3.price": "Bolsa de Horas",
    "pricing.t3.period": "Planes de soporte continuo",
    "pricing.t3.f1": "Monitoreo y copias de seguridad continuas",
    "pricing.t3.f2": "Parches de seguridad y optimización de velocidad",
    "pricing.t3.f3": "Banco de horas para nuevas funcionalidades",
    "pricing.t3.f4": "Tiempos de respuesta (SLA) garantizados",
    "pricing.t3.f5": "Asesoría en infraestructura cloud",
    "pricing.t3.cta": "Hablar con un Especialista",

    // FAQ Section
    "faq.badge": "Preguntas Frecuentes",
    "faq.title": "Todo lo que necesitas saber antes de iniciar",
    "faq.subtitle": "Resolvemos las dudas más habituales sobre nuestro proceso de desarrollo, contratos y garantías.",
    "faq.q1": "¿Cuánto tiempo toma desarrollar un software a la medida?",
    "faq.a1": "Depende de la complejidad y alcance. Un MVP o sistema inicial suele desarrollarse en 4 a 8 semanas, mientras que plataformas complejas o ERPs avanzados toman entre 8 y 16 semanas con entregas funcionales quincenales.",
    "faq.q2": "¿El código fuente y la propiedad intelectual me pertenecen al 100%?",
    "faq.a2": "Sí, absolutamente. Al finalizar cada etapa y el proyecto, te transferimos todos los derechos de autor, repositorios de código, esquemas de bases de datos y accesos directos sin dependencias ni regalías.",
    "faq.q3": "¿Firman acuerdos de confidencialidad (NDA)?",
    "faq.a3": "Sí. Antes de cualquier análisis técnico o reunión de descubrimiento detallada, firmamos un Acuerdo de Confidencialidad y No Divulgación (NDA) para proteger tu idea, datos y procesos comerciales.",
    "faq.q4": "¿Qué tecnologías utilizan para el desarrollo?",
    "faq.a4": "Trabajamos con el stack tecnológico más robusto y moderno: React, Next.js, TypeScript, Tailwind CSS en el frontend; Node.js, Python, PostgreSQL, MySQL y Redis en el backend; y despliegues en AWS, Google Cloud, Azure o Vercel.",
    "faq.q5": "¿Ofrecen garantía y soporte después del lanzamiento?",
    "faq.a5": "Sí. Todos nuestros proyectos incluyen garantía técnica post-entrega contra bugs o inconsistencias. Además, ofrecemos planes de soporte preventivo, monitoreo de infraestructura y evolución continua por bolsa de horas.",

    // CTA Section
    "cta.title": "Hagamos Realidad el Software que tu Empresa Necesita",
    "cta.subtitle": "Cuéntanos sobre tu proyecto o necesidad operativa y te entregamos un diagnóstico y propuesta técnica a la medida en menos de 24 horas.",
    "cta.success": "¡Gracias! Un especialista técnico se contactará contigo hoy mismo.",
    "cta.placeholder": "Ingresa tu correo empresarial",
    "cta.btn": "Solicitar Propuesta",
    "cta.disclaimer": "Respuesta en menos de 24 horas hábiles. 100% confidencial bajo acuerdo NDA.",

    // Footer
    "footer.copyright": "Avelor Software Solutions. Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos del Servicio",
    "footer.security": "Seguridad & Confidencialidad",
    "footer.status": "Servicios y Soporte Activo",
  },
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.methodology": "Methodology",
    "nav.benefits": "Benefits",
    "nav.models": "Engagement Models",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.schedule": "Book a Call",
    "nav.quote": "Get a Quote",

    // Hero
    "hero.badge": "Software Engineering & Digital Solutions",
    "hero.badge_chip": "100% Bespoke",
    "hero.title_prefix": "We Engineer Custom Software Solutions for ",
    "hero.title_highlight": "Growing Enterprises.",
    "hero.subtitle": "We transform your company's operational bottlenecks and complex challenges into robust web platforms, mobile apps, and scalable systems built precisely for your business goals.",
    "hero.cta_quote": "Request Free Estimate",
    "hero.cta_services": "Explore Services",
    "hero.tech_heading": "Built with industry-leading, high-performance & secure technologies",

    // Benefits / Stats
    "benefits.badge": "Why Choose Us",
    "benefits.title": "Software Engineering with Uncompromising Quality",
    "benefits.subtitle": "We architect high-impact technological solutions designed to maximize your company's efficiency and ROI.",
    "benefits.card1.chip": "100% Custom Built",
    "benefits.card1.val": "0%",
    "benefits.card1.title": "Template Limitations",
    "benefits.card1.desc": "Every database schema, workflow, and user interface is tailored to your unique business logic, without generic constraints.",
    "benefits.card1.bottom_l": "Clean & Modular Codebase",
    "benefits.card1.bottom_r": "Full Quality Assurance",

    "benefits.card2.chip": "High Efficiency",
    "benefits.card2.val": "+80%",
    "benefits.card2.title": "Operational Time Savings",
    "benefits.card2.desc": "We automate repetitive tasks and centralize business data so your teams can focus on strategic growth and customer value.",
    "benefits.card2.bottom_l": "Scalable Cloud Architecture",
    "benefits.card2.bottom_r": "Fast & Secure",

    "benefits.card3.chip": "100% Ownership",
    "benefits.card3.val": "100%",
    "benefits.card3.title": "Full Source Code Ownership",
    "benefits.card3.desc": "All intellectual property, repositories, and databases belong completely to you. We sign strict Non-Disclosure Agreements (NDAs).",
    "benefits.card3.bottom_l": "Strict NDA Agreements",
    "benefits.card3.bottom_r": "Post-Launch Warranty",

    // Methodology / Dashboard
    "method.badge": "Methodology & Quality",
    "method.title": "Robust, Intuitive Systems Built to Scale",
    "method.subtitle": "We design admin dashboards, SaaS applications, and cloud backend architectures with top-tier performance and UX standards.",
    "method.tab1": "Architecture & Backend",
    "method.tab2": "UI/UX & Frontend",
    "method.tab3": "Quality Assurance (QA)",
    "method.metric1.label": "API Response Latency",
    "method.metric1.badge": "ms",
    "method.metric2.label": "Server Uptime SLA",
    "method.metric2.badge": "Guaranteed",
    "method.metric3.label": "QA Test Coverage",
    "method.metric3.badge": "Validated",
    "method.flow.title": "Continuous Delivery & Engineering Flow",
    "method.flow.subtitle": "Transparent agile process with scheduled functional releases",
    "method.flow.chip": "Agile Sprints",
    "method.flow.step1_title": "ux_prototyping_and_specs()",
    "method.flow.step1_desc": "Figma / Interactive Wireframes",
    "method.flow.step1_badge": "Approved",
    "method.flow.step2_title": "modular_fullstack_build()",
    "method.flow.step2_desc": "React / Node / PostgreSQL",
    "method.flow.step2_badge": "Optimized",
    "method.flow.step3_title": "qa_audit_and_deployment()",
    "method.flow.step3_desc": "Security & Stress Testing",
    "method.flow.step3_badge": "0 Bugs",
    "method.status.title": "Engineering Standards",
    "method.status.val": "100%",
    "method.status.sub": "Transparency & Delivery",
    "method.status.item1_l": "Confidentiality Agreement",
    "method.status.item1_r": "NDA Signed",
    "method.status.item2_l": "Complete Source Code",
    "method.status.item2_r": "Your Property",
    "method.status.item3_l": "Post-Launch Warranty",
    "method.status.item3_r": "Included",
    "method.callout.title": "Have a custom project in mind?",
    "method.callout.desc": "We provide free architectural guidance and budget estimation.",
    "method.callout.btn": "Request Free Diagnosis",

    // Solutions / Services
    "services.badge": "Our Services",
    "services.title": "Software Engineering for Demanding Enterprises",
    "services.subtitle": "We cover the complete software lifecycle: from discovery and UX architecture to cloud deployment and ongoing maintenance.",
    "services.s1.title": "Custom ERPs & Management Systems",
    "services.s1.desc": "Centralize inventories, orders, invoicing, HR, and operations in a private cloud application designed exactly for your workflows.",
    "services.s1.cta": "Estimate system",
    "services.s2.title": "Web Platforms & SaaS Applications",
    "services.s2.desc": "High-speed, scalable web applications with intuitive admin dashboards and frictionless user experiences.",
    "services.s2.cta": "Build platform",
    "services.s3.title": "Mobile Applications (iOS & Android)",
    "services.s3.desc": "Native and cross-platform apps featuring real-time data sync, push notifications, and direct database integration.",
    "services.s3.cta": "Develop App",
    "services.s4.title": "API Integrations & Workflow Automation",
    "services.s4.desc": "Connect existing systems with payment gateways (Stripe, PayPal, local banks), WhatsApp API, CRMs, and 3rd-party services.",
    "services.s4.cta": "Explore integrations",
    "services.s5.title": "Legacy Modernization & Database Migration",
    "services.s5.desc": "Modernize legacy codebases and slow databases to contemporary cloud architectures with zero operational downtime.",
    "services.s5.cta": "Modernize software",
    "services.s6.title": "Cloud Architecture & Tech Consulting",
    "services.s6.desc": "Strategic technical advice to choose the optimal cloud infrastructure (AWS, Azure, Google Cloud) and lower hosting overhead.",
    "services.s6.cta": "Book consultation",

    // Models / Pricing
    "pricing.badge": "Engagement Models",
    "pricing.title": "Flexible & Transparent Collaboration",
    "pricing.subtitle": "We align with your roadmap and budget with milestone-based deliverables, clear scopes, and zero hidden fees.",
    "pricing.t1.title": "Turnkey Project",
    "pricing.t1.desc": "Ideal for new systems, MVPs, or digital transformations with a defined scope.",
    "pricing.t1.price": "Custom",
    "pricing.t1.period": "Fixed budget & milestone delivery",
    "pricing.t1.f1": "Technical discovery & UI/UX prototyping",
    "pricing.t1.f2": "Full-stack frontend & backend engineering",
    "pricing.t1.f3": "QA security audit & production cloud deployment",
    "pricing.t1.f4": "100% intellectual property & code handover",
    "pricing.t1.f5": "Post-launch warranty & bugfix support",
    "pricing.t1.cta": "Request Quote",

    "pricing.t2.badge": "Most Popular",
    "pricing.t2.title": "Dedicated Squad",
    "pricing.t2.desc": "Senior software engineers dedicated to continuous agile development for your company.",
    "pricing.t2.price": "Monthly",
    "pricing.t2.period": "Agile sprints & on-demand capacity",
    "pricing.t2.f1": "Dedicated senior full-stack engineers",
    "pricing.t2.f2": "Agile workflow with weekly functional releases",
    "pricing.t2.f3": "Direct daily communication via Slack / Teams",
    "pricing.t2.f4": "Integrated QA and continuous code reviews",
    "pricing.t2.f5": "Flexible team scaling based on workload",
    "pricing.t2.cta": "Request Squad Proposal",

    "pricing.t3.title": "Support & Maintenance",
    "pricing.t3.desc": "Preventive maintenance, speed optimization, and ongoing feature updates.",
    "pricing.t3.price": "Retainer",
    "pricing.t3.period": "Continuous maintenance plans",
    "pricing.t3.f1": "Continuous uptime monitoring & cloud backups",
    "pricing.t3.f2": "Security patches & performance tuning",
    "pricing.t3.f3": "Monthly allocated hours for new feature requests",
    "pricing.t3.f4": "Guaranteed priority SLA response times",
    "pricing.t3.f5": "Cloud infrastructure optimization consulting",
    "pricing.t3.cta": "Talk to a Specialist",

    // FAQ Section
    "faq.badge": "Frequently Asked Questions",
    "faq.title": "Everything you need to know before starting",
    "faq.subtitle": "Clear answers regarding our software engineering lifecycle, IP ownership, and guarantees.",
    "faq.q1": "How long does it take to develop a custom software project?",
    "faq.a1": "Timelines depend on scope. An initial MVP or targeted business system typically takes 4 to 8 weeks, while full enterprise platforms or comprehensive ERPs take 8 to 16 weeks with bi-weekly demonstrable sprints.",
    "faq.q2": "Do I own 100% of the source code and intellectual property?",
    "faq.a2": "Yes, absolutely. Upon milestone completion and final delivery, all intellectual property, git repositories, database schemas, and infrastructure credentials are fully handed over to you with zero recurring vendor lock-in.",
    "faq.q3": "Do you sign Non-Disclosure Agreements (NDAs)?",
    "faq.a3": "Yes. Prior to reviewing your internal workflows, proprietary algorithms, or data models, we execute a bilateral Non-Disclosure Agreement (NDA) to safeguard your confidentiality.",
    "faq.q4": "Which technology stack do you specialize in?",
    "faq.a4": "We build on modern, enterprise-proven stacks: React, Next.js, TypeScript, and Tailwind CSS on frontend; Node.js, Python, PostgreSQL, MySQL, and Redis on backend; deployed seamlessly on AWS, Google Cloud, Azure, or Vercel.",
    "faq.q5": "What kind of post-launch warranty and maintenance do you offer?",
    "faq.a5": "Every custom build includes a dedicated post-launch warranty against bugs. In addition, we provide proactive monthly maintenance, cloud monitoring, and retainer hours for ongoing feature enhancements.",

    // CTA Section
    "cta.title": "Let's Build the Custom Software Your Enterprise Deserves",
    "cta.subtitle": "Tell us about your project or operational requirements and receive a comprehensive technical proposal within 24 hours.",
    "cta.success": "Thank you! A senior solutions architect will contact you today.",
    "cta.placeholder": "Enter your work email",
    "cta.btn": "Request Proposal",
    "cta.disclaimer": "Fast turnaround in under 24 business hours. 100% confidential under NDA.",

    // Footer
    "footer.copyright": "Avelor Software Solutions. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.security": "Security & NDA",
    "footer.status": "All Systems & Support Active",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  isTransitioning: false,
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Detect browser preference or saved localStorage
    const saved = localStorage.getItem("avelor_lang") as Language | null;
    if (saved && (saved === "es" || saved === "en")) {
      setLangState(saved);
      document.documentElement.lang = saved;
    } else {
      const browserLang = navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
      setLangState(browserLang);
      document.documentElement.lang = browserLang;
    }
  }, []);

  const setLang = (newLang: Language) => {
    if (newLang === lang) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setLangState(newLang);
      localStorage.setItem("avelor_lang", newLang);
      document.documentElement.lang = newLang;
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  const t = (key: string): string => {
    const dict = translations[lang] || translations.es;
    return (dict as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, isTransitioning, t }}>
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isTransitioning ? "opacity-0 scale-[0.995]" : "opacity-100 scale-100"
        }`}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
