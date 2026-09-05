"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

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
    "nav.team": "Equipo",
    "nav.models": "Modalidades",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "nav.schedule": "Agendar Llamada",
    "nav.quote": "Cotizar Proyecto",

    // Hero
    "hero.badge": "Software Gestionado & Soluciones Digitales",
    "hero.badge_chip": "Plan Mensual Todo Incluido",
    "hero.title_prefix": "Desarrollamos y Gestionamos el Software para ",
    "hero.title_highlight": "Empresas en Crecimiento.",
    "hero.subtitle": "Resolvemos los cuellos de botella de tu empresa con sistemas a la medida, paneles web y automatizaciones privadas, bajo un plan mensual accesible y con soporte continuo incluido.",
    "hero.cta_quote": "Consultar Plan Mensual",
    "hero.cta_services": "Explorar Soluciones",
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

    "benefits.card3.chip": "Cero Dolores de Cabeza",
    "benefits.card3.val": "100%",
    "benefits.card3.title": "Servicio Gestionado Todo Incluido",
    "benefits.card3.desc": "Nos encargamos de los servidores, mantenimiento, actualizaciones y resolución de problemas bajo una suscripción mensual accesible y sin costos sorpresa.",
    "benefits.card3.bottom_l": "Confidencialidad Garantizada",
    "benefits.card3.bottom_r": "Soporte Continuo Directo",

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
    "method.flow.subtitle": "Proceso ágil y transparente con evolución periódica de tu sistema",
    "method.flow.chip": "Evolución Continua",
    "method.flow.step1_title": "analisis_y_prototipado_ux()",
    "method.flow.step1_desc": "Diseño a la medida",
    "method.flow.step1_badge": "Aprobado",
    "method.flow.step2_title": "desarrollo_modular_fullstack()",
    "method.flow.step2_desc": "React / Node / Cloud",
    "method.flow.step2_badge": "Optimizado",
    "method.flow.step3_title": "auditoria_qa_y_despliegue()",
    "method.flow.step3_desc": "Monitoreo & Seguridad",
    "method.flow.step3_badge": "0 Errores",
    "method.status.title": "Garantías del Servicio",
    "method.status.val": "100%",
    "method.status.sub": "Tranquilidad & Operatividad",
    "method.status.item1_l": "Privacidad de tu Información",
    "method.status.item1_r": "Datos Protegidos",
    "method.status.item2_l": "Infraestructura & Servidores",
    "method.status.item2_r": "Todo Incluido",
    "method.status.item3_l": "Soporte y Mantenimiento Activo",
    "method.status.item3_r": "Siempre Disponible",
    "method.callout.title": "¿Tienes un problema o proceso que automatizar?",
    "method.callout.desc": "Te asesoramos con el diseño técnico y una propuesta mensual accesible.",
    "method.callout.btn": "Solicitar Diagnóstico Gratis",

    // Solutions / Services
    "services.badge": "Nuestros Servicios",
    "services.title": "Soluciones de Software para Empresas Exigentes",
    "services.subtitle": "Resolvemos los problemas operativos de tu empresa con soluciones digitales gestionadas, hosting optimizado y soporte técnico continuo.",
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
    "services.s5.desc": "Migramos procesos manuales y hojas de Excel hacia paneles ágiles en la nube, mejorando la rapidez, el control y la seguridad de tu información.",
    "services.s5.cta": "Modernizar software",
    "services.s6.title": "Soporte Técnico Continuo & Mantenimiento",
    "services.s6.desc": "Tu sistema siempre en línea, seguro y actualizado. Nos encargamos de resolver incidencias técnicas para que tu negocio nunca se detenga.",
    "services.s6.cta": "Conocer plan de soporte",

    // Models / Pricing
    "pricing.badge": "Planes & Suscripción",
    "pricing.title": "Software Gestionado sin Inversiones Exorbitantes",
    "pricing.subtitle": "Accede a tecnología a la medida para tu empresa con una cuota mensual predecible que incluye desarrollo, servidores, soporte y mejoras continuas.",
    "pricing.t1.title": "Plan Inicial Gestionado",
    "pricing.t1.desc": "Ideal para digitalizar tus operaciones clave sin grandes desembolsos de entrada.",
    "pricing.t1.price": "Mensual",
    "pricing.t1.period": "Suscripción accesible todo incluido",
    "pricing.t1.f1": "Diseño de interfaz y desarrollo a la medida",
    "pricing.t1.f2": "Servidores cloud y base de datos incluidos",
    "pricing.t1.f3": "Soporte técnico directo y resolución de dudas",
    "pricing.t1.f4": "Actualizaciones continuas y copias de seguridad",
    "pricing.t1.f5": "Sin costos imprevistos de infraestructura",
    "pricing.t1.cta": "Consultar Plan Inicial",

    "pricing.t2.badge": "Más Popular",
    "pricing.t2.title": "Plan Empresarial Pro",
    "pricing.t2.desc": "Para empresas que requieren sistemas más completos y atención técnica prioritaria.",
    "pricing.t2.price": "Mensual",
    "pricing.t2.period": "Todo incluido con soporte prioritario",
    "pricing.t2.f1": "Plataforma completa a medida (ventas, inventario, etc.)",
    "pricing.t2.f2": "Infraestructura cloud de alto rendimiento",
    "pricing.t2.f3": "Soporte prioritario por WhatsApp directo",
    "pricing.t2.f4": "Mejoras y nuevas funciones mensuales incluidas",
    "pricing.t2.f5": "Monitoreo constante de fallos y estabilidad",
    "pricing.t2.cta": "Solicitar Plan Empresarial",

    "pricing.t3.title": "Solución a Escala",
    "pricing.t3.desc": "Para operaciones complejas, integraciones con terceros y alta concurrencia.",
    "pricing.t3.price": "A Medida",
    "pricing.t3.period": "Cuota mensual adaptada a tu volumen",
    "pricing.t3.f1": "Módulos avanzados e integraciones con APIs externas",
    "pricing.t3.f2": "Servidores dedicados de alta disponibilidad",
    "pricing.t3.f3": "Atención técnica continua e inmediata",
    "pricing.t3.f4": "Ajustes constantes según crezca tu operación",
    "pricing.t3.f5": "Copias de seguridad diarias y seguridad reforzada",
    "pricing.t3.cta": "Hablar de Mi Proyecto",

    // FAQ Section
    "faq.badge": "Preguntas Frecuentes",
    "faq.title": "Todo lo que necesitas saber antes de iniciar",
    "faq.subtitle": "Resolvemos tus dudas sobre cómo trabajamos, cómo funciona el plan mensual y cómo protegemos tu negocio.",
    "faq.q1": "¿Cuánto tiempo toma tener mi sistema funcionando?",
    "faq.a1": "Nos enfocamos en la rapidez de implementación. Una primera versión funcional suele estar lista entre 2 y 4 semanas, permitiéndote empezar a operar y ver resultados de inmediato.",
    "faq.q2": "¿Cómo funciona el modelo de suscripción mensual?",
    "faq.a2": "En lugar de pagar miles de dólares de golpe por un software y luego preocuparte por servidores o mantenimientos, pagas una cuota mensual accesible. Nosotros cubrimos el desarrollo, el hosting, la seguridad, las correcciones y el soporte continuo.",
    "faq.q3": "¿Cómo protegen la privacidad de la información de mi empresa?",
    "faq.a3": "Tratamos tus datos y procesos comerciales con total confidencialidad y reserva. Tu información está aislada en bases de datos seguras con accesos encriptados y copias de seguridad continuas.",
    "faq.q4": "¿Qué tecnologías utilizan para construir las plataformas?",
    "faq.a4": "Utilizamos las herramientas más veloces y probadas de la industria: React, Next.js y TypeScript en las pantallas, respaldados por bases de datos PostgreSQL y Node.js en servidores cloud de alta disponibilidad.",
    "faq.q5": "¿Tengo que pagar servidores o costos técnicos por separado?",
    "faq.a5": "No. Tu plan mensual cubre toda la infraestructura necesaria para que tu sistema funcione 24/7 sin que tengas que configurar servidores, dominios ni lidiar con tecnicismos.",
    "faq.q6": "¿Qué pasa si mi negocio crece y necesito nuevas funciones?",
    "faq.a6": "Tu plan incluye mejoras y ajustes continuos. Si necesitas nuevos módulos, reportes o automatizaciones, los desarrollamos progresivamente dentro de tu servicio mensual.",
    "faq.q7": "¿Puedo conectar el sistema con WhatsApp o mis herramientas de venta?",
    "faq.a7": "Sí, totalmente. Integramos recordatorios automáticos de WhatsApp, pasarelas de pago y conexión con tus canales de venta para que todo opere de forma automática y sin retrasos.",

    // CTA Section
    "cta.title": "Hagamos Realidad el Software que tu Empresa Necesita",
    "cta.subtitle": "Cuéntanos sobre tu proyecto o necesidad operativa y te entregamos un diagnóstico y propuesta técnica a la medida en menos de 24 horas.",
    "cta.success": "¡Gracias! Nos pondremos en contacto contigo hoy mismo.",
    "cta.placeholder_company": "Nombre / Razón Social",
    "cta.placeholder": "Ingresa tu correo",
    "cta.placeholder_desc": "Describe brevemente qué necesitas o qué problema quieres resolver...",
    "cta.btn": "Solicitar Propuesta",
    "cta.disclaimer": "Respuesta en menos de 24 horas hábiles. Tus datos y procesos están 100% protegidos.",

    // Footer
    "footer.copyright": "Saventi. Todos los derechos reservados.",
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
    "nav.team": "Team",
    "nav.models": "Plans & Pricing",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.schedule": "Book a Call",
    "nav.quote": "Get Started",

    // Hero
    "hero.badge": "Managed Custom Software & Digital Solutions",
    "hero.badge_chip": "Managed Monthly Plan",
    "hero.title_prefix": "We Build and Manage Custom Software for ",
    "hero.title_highlight": "Growing Enterprises.",
    "hero.subtitle": "We solve your operational headaches with tailored web applications, real-time dashboards, and automated workflows—fully hosted and maintained under a predictable monthly subscription.",
    "hero.cta_quote": "Get a Monthly Plan Estimate",
    "hero.cta_services": "Explore Solutions",
    "hero.tech_heading": "Built with industry-leading, high-performance & secure technologies",

    // Benefits / Stats
    "benefits.badge": "Why Choose Saventi",
    "benefits.title": "Managed Software Engineering with Zero Headaches",
    "benefits.subtitle": "We build and run your technology so you can focus 100% on running and scaling your business.",
    "benefits.card1.chip": "100% Custom Built",
    "benefits.card1.val": "0%",
    "benefits.card1.title": "Template Limitations",
    "benefits.card1.desc": "Every database schema, workflow, and user interface is tailored to your unique business logic, without generic constraints.",
    "benefits.card1.bottom_l": "Clean & Modular Code",
    "benefits.card1.bottom_r": "Guaranteed Reliability",

    "benefits.card2.chip": "High Efficiency",
    "benefits.card2.val": "+80%",
    "benefits.card2.title": "Operational Time Savings",
    "benefits.card2.desc": "We automate repetitive tasks and centralize business data so your teams can focus on strategic growth and customer value.",
    "benefits.card2.bottom_l": "Scalable Cloud Architecture",
    "benefits.card2.bottom_r": "Fast & Secure",

    "benefits.card3.chip": "Zero Tech Headaches",
    "benefits.card3.val": "100%",
    "benefits.card3.title": "All-Inclusive Managed Service",
    "benefits.card3.desc": "We manage hosting, server security, bug fixes, updates, and direct support under an accessible monthly plan with no surprise fees.",
    "benefits.card3.bottom_l": "Complete Confidentiality",
    "benefits.card3.bottom_r": "Ongoing Direct Support",

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
    "method.flow.subtitle": "Agile and transparent process with scheduled functional evolution",
    "method.flow.chip": "Continuous Evolution",
    "method.flow.step1_title": "ux_prototyping_and_specs()",
    "method.flow.step1_desc": "Custom UX Prototyping",
    "method.flow.step1_badge": "Approved",
    "method.flow.step2_title": "modular_fullstack_build()",
    "method.flow.step2_desc": "React / Node / Cloud",
    "method.flow.step2_badge": "Optimized",
    "method.flow.step3_title": "qa_audit_and_deployment()",
    "method.flow.step3_desc": "Monitoring & Security",
    "method.flow.step3_badge": "0 Bugs",
    "method.status.title": "Service Guarantees",
    "method.status.val": "100%",
    "method.status.sub": "Operational Peace of Mind",
    "method.status.item1_l": "Data Privacy & Protection",
    "method.status.item1_r": "Protected Data",
    "method.status.item2_l": "Cloud Servers & Hosting",
    "method.status.item2_r": "All Included",
    "method.status.item3_l": "Active Maintenance & Support",
    "method.status.item3_r": "Always Online",
    "method.callout.title": "Have an operational problem to solve?",
    "method.callout.desc": "We provide free architectural guidance and an accessible monthly quote.",
    "method.callout.btn": "Request Free Diagnosis",

    // Solutions / Services
    "services.badge": "Our Services",
    "services.title": "Managed Digital Solutions for Modern Businesses",
    "services.subtitle": "We cover the full software journey: bespoke development, cloud hosting, continuous monitoring, and proactive support.",
    "services.s1.title": "Custom ERPs & Management Systems",
    "services.s1.desc": "Centralize inventories, orders, invoicing, and operations in a private cloud application designed exactly for your workflows.",
    "services.s1.cta": "Estimate system",
    "services.s2.title": "Web Platforms & SaaS Applications",
    "services.s2.desc": "High-speed, scalable web applications with intuitive admin dashboards and frictionless user experiences.",
    "services.s2.cta": "Build platform",
    "services.s3.title": "Mobile Applications (iOS & Android)",
    "services.s3.desc": "Native and cross-platform apps featuring real-time data sync, push notifications, and direct database integration.",
    "services.s3.cta": "Develop App",
    "services.s4.title": "API Integrations & Workflow Automation",
    "services.s4.desc": "Connect existing tools with payment gateways (Stripe, PayPal, local banks), WhatsApp API, CRMs, and 3rd-party services.",
    "services.s4.cta": "Explore integrations",
    "services.s5.title": "Legacy Modernization & Cloud Migration",
    "services.s5.desc": "Modernize messy Excel sheets or legacy tools to sleek cloud dashboards with zero business disruption.",
    "services.s5.cta": "Modernize software",
    "services.s6.title": "Ongoing Technical Support & Maintenance",
    "services.s6.desc": "Keep your system secure, fast, and bug-free. We resolve technical issues promptly so your operations never stop.",
    "services.s6.cta": "View support plan",

    // Models / Pricing
    "pricing.badge": "Plans & Subscription",
    "pricing.title": "Managed Software Without Upfront Fortunes",
    "pricing.subtitle": "Get tailored technology with a predictable monthly plan that covers development, cloud hosting, updates, and ongoing support.",
    "pricing.t1.title": "Starter Managed Plan",
    "pricing.t1.desc": "Ideal for digitizing key business operations without huge upfront investments.",
    "pricing.t1.price": "Monthly",
    "pricing.t1.period": "Accessible all-inclusive subscription",
    "pricing.t1.f1": "Custom UI design & tailored development",
    "pricing.t1.f2": "Cloud hosting & database included",
    "pricing.t1.f3": "Direct tech support & troubleshooting",
    "pricing.t1.f4": "Continuous updates & automated backups",
    "pricing.t1.f5": "Zero surprise infrastructure bills",
    "pricing.t1.cta": "Inquire Starter Plan",

    "pricing.t2.badge": "Most Popular",
    "pricing.t2.title": "Business Pro Plan",
    "pricing.t2.desc": "For growing businesses needing advanced management features and priority support.",
    "pricing.t2.price": "Monthly",
    "pricing.t2.period": "All-inclusive with priority support",
    "pricing.t2.f1": "Complete tailored platform (sales, inventory, etc.)",
    "pricing.t2.f2": "High-performance cloud infrastructure",
    "pricing.t2.f3": "Priority WhatsApp direct communication",
    "pricing.t2.f4": "Monthly enhancements and new features included",
    "pricing.t2.f5": "Continuous uptime monitoring & security",
    "pricing.t2.cta": "Request Business Plan",

    "pricing.t3.title": "Scale Solution",
    "pricing.t3.desc": "For high-volume operations requiring advanced API integrations and dedicated capacity.",
    "pricing.t3.price": "Custom",
    "pricing.t3.period": "Monthly rate adapted to your scale",
    "pricing.t3.f1": "Advanced custom modules & 3rd-party integrations",
    "pricing.t3.f2": "Dedicated high-availability cloud cluster",
    "pricing.t3.f3": "Immediate continuous technical attention",
    "pricing.t3.f4": "Ongoing architectural adjustments as you grow",
    "pricing.t3.f5": "Daily backups & enterprise data isolation",
    "pricing.t3.cta": "Discuss My Project",

    // FAQ Section
    "faq.badge": "Frequently Asked Questions",
    "faq.title": "Everything you need to know before starting",
    "faq.subtitle": "Clear answers regarding our managed software subscriptions, support, and confidentiality.",
    "faq.q1": "How long does it take to have my system running?",
    "faq.a1": "We focus on quick operational turnaround. A working initial version is typically up and running within 2 to 4 weeks, so you can start benefiting immediately.",
    "faq.q2": "How does the monthly subscription model work?",
    "faq.a2": "Instead of paying thousands of dollars upfront and worrying about hosting or maintenance, you pay an accessible monthly fee. We take care of development, cloud hosting, bugfixes, and continuous improvements.",
    "faq.q3": "How do you protect my company data privacy?",
    "faq.a3": "We treat all your business data and internal processes with strict confidentiality. Your records are stored in encrypted, isolated cloud databases with continuous backups.",
    "faq.q4": "Which technologies do you build on?",
    "faq.a4": "We build with modern, high-speed industry standards: React, Next.js, and TypeScript on the frontend, with robust PostgreSQL and Node.js on high-availability cloud servers.",
    "faq.q5": "Do I have to pay for servers or hosting separately?",
    "faq.a5": "No. Your monthly subscription covers all hosting and infrastructure needed to keep your system operational 24/7 without technical hassles.",
    "faq.q6": "What happens if my business grows and I need new features?",
    "faq.a6": "Your subscription includes continuous evolution. As your operations expand, we build and deploy new modules, workflows, and reports progressively.",
    "faq.q7": "Can you connect the system to WhatsApp and existing tools?",
    "faq.a7": "Yes, absolutely. We connect automated WhatsApp notifications, payment methods, and existing tools to keep your workflows connected smoothly.",

    // CTA Section
    "cta.title": "Let's Build the Solution Your Enterprise Needs",
    "cta.subtitle": "Tell us about your operational challenge and receive a tailored managed proposal within 24 hours.",
    "cta.success": "Thank you! We will get in touch with you today.",
    "cta.placeholder_company": "Company / Business Name",
    "cta.placeholder": "Enter your email",
    "cta.placeholder_desc": "Briefly describe your project or operational requirements...",
    "cta.btn": "Request Proposal",
    "cta.disclaimer": "Fast response in under 24 business hours. Your data and processes are 100% protected.",

    // Footer
    "footer.copyright": "Saventi. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.security": "Security & Confidentiality",
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
  const pathname = usePathname();
  // El idioma se define por la URL: español en "/" y rutas base, inglés bajo "/en".
  const urlLang: Language =
    pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
  const [lang, setLangState] = useState<Language>(urlLang);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setLangState(urlLang);
    document.documentElement.lang = urlLang;
  }, [urlLang]);

  const setLang = (newLang: Language) => {
    if (newLang === lang) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setLangState(newLang);
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
