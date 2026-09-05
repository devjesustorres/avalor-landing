import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import {
  CheckCircle2,
  Clock,
  Briefcase,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Calendar,
  Sparkles,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

export const dynamic = 'force-dynamic';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://anpbyokcibolulyqikqo.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFucGJ5b2tjaWJvbHVseXFpa3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzMjY0MTQsImV4cCI6MjEwMzkwMjQxNH0.wY58HH5o1-GzvR64BE90xoplHj6a6O6hnqrvjwANElA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function getProject(slug: string) {
  try {
    const { data, error } = await supabase
      .from('campaigns')
      .select('*')
      .eq('status', 'project')
      .eq('subject', slug)
      .maybeSingle();

    if (!error && data) {
      let meta: any = {};
      try {
        meta = JSON.parse(data.template || '{}');
      } catch (e) {
        meta = {};
      }

      return {
        id: data.id,
        slug: data.subject,
        clientName: data.name,
        title: meta.title || 'Desarrollo de Software & Automatización',
        projectStatus: meta.projectStatus || 'En curso',
        startDate: meta.startDate || data.created_at,
        targetDeliveryDate: meta.targetDeliveryDate || '5–7 Semanas',
        totalProgress: typeof meta.totalProgress === 'number' ? meta.totalProgress : 50,
        fases: meta.fases || [
          { name: 'Fase 1: Levantamiento y DB', progress: 100, status: 'Completado', desc: 'Reglas de negocio, arquitectura y base de datos.' },
          { name: 'Fase 2: Frontend y Paneles', progress: 60, status: 'En desarrollo', desc: 'Paneles de control y desarrollo de módulos principales.' },
          { name: 'Fase 3: Pruebas y Despliegue', progress: 0, status: 'Pendiente', desc: 'Control de calidad, pruebas con usuarios y despliegue final.' }
        ],
        deliverables: meta.deliverables || [
          { name: 'Base de datos en la nube', done: true },
          { name: 'Panel web responsivo', done: true },
          { name: 'Módulo de control operativo', done: false },
          { name: 'Capacitación final del personal', done: false }
        ],
        contactWhatsApp: meta.contactWhatsApp || '584147708179',
        createdAt: data.created_at
      };
    }
  } catch (err) {
    console.warn('Error querying project in landing:', err);
  }

  // Fallback demo for 'quiserma'
  if (slug.toLowerCase() === 'quiserma') {
    return {
      id: 'PRJ-quiserma-001',
      slug: 'quiserma',
      clientName: 'Quiserma C.A.',
      title: 'Transformación digital de la operación de maquila',
      projectStatus: 'En desarrollo activo',
      startDate: '15 Feb 2026',
      targetDeliveryDate: '5–7 Semanas',
      totalProgress: 65,
      fases: [
        { name: 'Fase 1: Levantamiento y DB', progress: 100, status: 'Completado', desc: 'Modelado relacional de fórmulas, clientes y materias primas.' },
        { name: 'Fase 2: Frontend y Paneles', progress: 65, status: 'En desarrollo', desc: 'Panel de mezcla, trazabilidad por lote y posición de pallets en racks de 1.200 m³.' },
        { name: 'Fase 3: Pruebas y Despliegue', progress: 0, status: 'Pendiente', desc: 'Validaciones de despacho y capacitación de operarios en planta.' }
      ],
      deliverables: [
        { name: 'Módulo de formulación y mezclas químicas', done: true },
        { name: 'Generador de lote y código de seguimiento', done: true },
        { name: 'Localizador de pallets en bodega de 1.200 m³', done: false },
        { name: 'Portal de consulta para clientes de maquila', done: false }
      ],
      contactWhatsApp: '584147708179',
      createdAt: new Date().toISOString()
    };
  }

  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: 'Portal de Clientes | Saventi',
      robots: { index: false, follow: false }
    };
  }

  return {
    title: `Portal de Avances: ${project.clientName} | Saventi`,
    description: `Seguimiento en vivo del desarrollo para ${project.clientName}.`,
    robots: { index: false, follow: false }
  };
}

export default async function ProjectPortalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const progress = Number(project.totalProgress) || 0;
  const waMsg = encodeURIComponent(`Hola Saventi, estoy revisando el portal de avance de ${project.clientName} y deseo hacer una consulta.`);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-blue-600 selection:text-white pb-16">
      {/* Top Bar - Modo Claro */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="https://www.saventihq.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src="/saventi-text.png" alt="Saventi" className="h-5 sm:h-6 w-auto object-contain" />
            </a>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              Portal Privado
            </span>
          </div>

          <a
            href={`https://wa.me/${project.contactWhatsApp.replace(/[^0-9]/g, '')}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-all shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Hablar con Gestor</span>
          </a>
        </div>
      </header>

      {/* Main Content - Modo Claro */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 flex flex-col gap-8">
        {/* Hero Card en Modo Claro */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 tracking-wide uppercase mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Cliente Verificado · {project.clientName}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-2xl">
                Monitoreo continuo de arquitectura, desarrollo de módulos e hitos de entrega en tiempo real.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
              <div className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                {project.projectStatus}
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Plazo estimado: <strong className="text-slate-800">{project.targetDeliveryDate}</strong>
              </div>
            </div>
          </div>

          {/* Big Progress Bar */}
          <div className="mt-8 pt-8 border-t border-slate-100">
            <div className="flex justify-between items-end mb-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Avance General</div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
                  {progress}% <span className="text-sm font-semibold text-slate-500">completado</span>
                </div>
              </div>
              <div className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                Fase Activa: {project.fases?.find((f: any) => f.progress > 0 && f.progress < 100)?.name?.split(':')[0] || 'Desarrollo'}
              </div>
            </div>

            <div className="w-full h-3.5 sm:h-4 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 transition-all duration-700 shadow-sm"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Timeline of Phases en Modo Claro */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2.5 mb-6">
            <Layers className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Línea de Tiempo de Fases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.fases?.map((fase: any, idx: number) => {
              const isDone = fase.progress === 100;
              const isInProgress = fase.progress > 0 && fase.progress < 100;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border p-5 flex flex-col justify-between transition-all ${
                    isDone
                      ? 'border-emerald-200 bg-emerald-50/40'
                      : isInProgress
                      ? 'border-blue-200 bg-blue-50/40 shadow-sm'
                      : 'border-slate-200 bg-slate-50/60 opacity-80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                        {fase.name.split(':')[0]}
                      </span>
                      {isDone ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" /> Hecho
                        </span>
                      ) : isInProgress ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 border border-blue-200">
                          <Activity className="w-3 h-3 animate-pulse" /> {fase.progress}%
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-200 text-slate-600">
                          Pendiente
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {fase.name.includes(':') ? fase.name.split(':')[1].trim() : fase.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {fase.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200/60">
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${isDone ? 'bg-emerald-500' : 'bg-blue-600'}`}
                        style={{ width: `${fase.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deliverables Checklist & Contact en Modo Claro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Deliverables */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Hitos y Entregables del Proyecto</span>
            </h3>

            <div className="flex flex-col gap-3">
              {project.deliverables?.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80"
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                      item.done ? 'bg-emerald-600 text-white' : 'border border-slate-300 bg-white text-transparent'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-xs sm:text-sm font-medium ${item.done ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Support & Direct Line */}
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-b from-blue-50/50 to-white p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-100 border border-blue-200 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Soporte &amp; Atención Directa
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                ¿Deseas agendar una revisión o consultar una duda?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Tu gestor técnico en Saventi está disponible para coordinar avances, demostraciones de los módulos y atender requerimientos especiales.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/${project.contactWhatsApp.replace(/[^0-9]/g, '')}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>

              <span className="text-xs text-slate-500">
                Respuesta en horario laboral · Valencia, VE
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* Footer con Enlaces Follow hacia la Landing */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 mt-12 border-t border-slate-200 text-center">
        <a href="https://www.saventihq.com" target="_blank" rel="noopener noreferrer follow" className="inline-block mb-3">
          <img src="/saventi-text.png" alt="Saventi — Soluciones Digitales y Software a la Medida" className="h-6 w-auto object-contain mx-auto" />
        </a>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-semibold text-slate-500 mb-3">
          <a href="https://www.saventihq.com/servicios" className="hover:text-blue-600 transition-colors">Servicios de Software</a>
          <span>•</span>
          <a href="https://www.saventihq.com/desarrollo-erp" className="hover:text-blue-600 transition-colors">Desarrollo ERP</a>
          <span>•</span>
          <a href="https://www.saventihq.com/aplicaciones-moviles" className="hover:text-blue-600 transition-colors">Apps Móviles</a>
          <span>•</span>
          <a href="https://www.saventihq.com/terms" className="hover:text-blue-600 transition-colors">Términos de Servicio</a>
          <span>•</span>
          <a href="https://www.saventihq.com/privacy" className="hover:text-blue-600 transition-colors">Política de Privacidad</a>
        </div>
        <p className="text-xs text-slate-500">
          Portal exclusivo de clientes · Saventi Software &amp; Automatización. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
