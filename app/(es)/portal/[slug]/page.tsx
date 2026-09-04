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
        contactWhatsApp: meta.contactWhatsApp || '584120000000',
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
      contactWhatsApp: '584120000000',
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
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-blue-600 selection:text-white pb-16">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0a0f1d]/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="https://avelorglobal.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src="/saventi-text-white.png" alt="Saventi" className="h-5 sm:h-6 w-auto object-contain" />
            </a>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Portal Privado
            </span>
          </div>

          <a
            href={`https://wa.me/${project.contactWhatsApp.replace(/[^0-9]/g, '')}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Hablar con Gestor</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 flex flex-col gap-8">
        {/* Hero Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-[#0f172a] to-[#0a0f1d] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 tracking-wide uppercase mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Cliente Verificado · {project.clientName}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
                Monitoreo continuo de arquitectura, desarrollo de módulos e hitos de entrega en tiempo real.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
              <div className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide bg-blue-500/20 text-blue-300 border border-blue-400/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                {project.projectStatus}
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                Plazo estimado: <strong className="text-slate-200">{project.targetDeliveryDate}</strong>
              </div>
            </div>
          </div>

          {/* Big Progress Bar */}
          <div className="mt-8 pt-8 border-t border-slate-800/80">
            <div className="flex justify-between items-end mb-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Avance General</div>
                <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                  {progress}% <span className="text-sm font-semibold text-slate-400">completado</span>
                </div>
              </div>
              <div className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">
                Fase Activa: {project.fases?.find((f: any) => f.progress > 0 && f.progress < 100)?.name?.split(':')[0] || 'Desarrollo'}
              </div>
            </div>

            <div className="w-full h-3.5 sm:h-4 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-400 transition-all duration-700 shadow-lg shadow-blue-500/30"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Timeline of Phases */}
        <div className="rounded-3xl border border-slate-800 bg-[#0c1222] p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <Layers className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg sm:text-xl font-extrabold text-white">
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
                      ? 'border-emerald-500/30 bg-emerald-500/[0.04]'
                      : isInProgress
                      ? 'border-blue-500/40 bg-blue-500/[0.06] shadow-lg shadow-blue-500/5'
                      : 'border-slate-800/70 bg-slate-900/30 opacity-70'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                        {fase.name.split(':')[0]}
                      </span>
                      {isDone ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300">
                          <CheckCircle2 className="w-3 h-3" /> Hecho
                        </span>
                      ) : isInProgress ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300">
                          <Activity className="w-3 h-3 animate-pulse" /> {fase.progress}%
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400">
                          Pendiente
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-white mb-2">
                      {fase.name.includes(':') ? fase.name.split(':')[1].trim() : fase.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {fase.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/60">
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${isDone ? 'bg-emerald-400' : 'bg-blue-500'}`}
                        style={{ width: `${fase.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deliverables Checklist & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Deliverables */}
          <div className="rounded-3xl border border-slate-800 bg-[#0c1222] p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-extrabold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Hitos y Entregables del Proyecto</span>
            </h3>

            <div className="flex flex-col gap-3">
              {project.deliverables?.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80"
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                      item.done ? 'bg-emerald-500 text-white' : 'border border-slate-700 bg-slate-800/40 text-transparent'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className={`text-xs sm:text-sm font-medium ${item.done ? 'text-slate-200' : 'text-slate-400'}`}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Support & Direct Line */}
          <div className="rounded-3xl border border-blue-900/30 bg-gradient-to-b from-blue-950/20 to-[#0c1222] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-blue-300 bg-blue-500/10 border border-blue-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Soporte &amp; Atención Directa
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                ¿Deseas agendar una revisión o consultar una duda?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Tu gestor técnico en Saventi está disponible para coordinar avances, demostraciones de los módulos y atender requerimientos especiales.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/${project.contactWhatsApp.replace(/[^0-9]/g, '')}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
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
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 mt-12 border-t border-slate-800/80 text-center">
        <img src="/saventi-text-white.png" alt="Saventi" className="h-5 w-auto object-contain mx-auto mb-3 opacity-80" />
        <p className="text-xs text-slate-500">
          Portal exclusivo de clientes · Saventi Software &amp; Automatización. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
