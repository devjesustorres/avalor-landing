import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://anpbyokcibolulyqikqo.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFucGJ5b2tjaWJvbHVseXFpa3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzMjY0MTQsImV4cCI6MjEwMzkwMjQxNH0.wY58HH5o1-GzvR64BE90xoplHj6a6O6hnqrvjwANElA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function getProposal(slug: string) {
  try {
    const { data, error } = await supabase
      .from('campaigns')
      .select('*')
      .eq('status', 'proposal')
      .eq('subject', slug)
      .maybeSingle();

    if (error || !data) return null;
    return data;
  } catch {
    return null;
    if (!error && data) return data;
  } catch (err) {
    console.warn('Notice querying proposal in landing:', err);
  }

  // Fallback demo for 'quiserma'
  if (slug.toLowerCase() === 'quiserma') {
    return {
      id: 'prop_quiserma_001',
      name: 'Servicios Industriales Quiserma, C.A.',
      subject: 'quiserma',
      template: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Propuesta Comercial - Servicios Industriales Quiserma, C.A.</title>
  <style>
    .prop-container { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1e293b; max-width: 900px; margin: 0 auto; line-height: 1.6; }
    .prop-card { background: #ffffff; border-radius: 24px; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05); padding: 36px 40px; margin-bottom: 24px; }
    .badge-chip { display: inline-flex; align-items: center; gap: 6px; background: #eff6ff; color: #2563eb; font-size: 11.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.8px; padding: 6px 14px; border-radius: 9999px; border: 1px solid #bfdbfe; }
    .gradient-title { font-size: 32px; font-weight: 900; color: #0f172a; letter-spacing: -0.5px; margin: 16px 0 10px 0; line-height: 1.25; }
    .subtitle { font-size: 16px; color: #64748b; margin: 0 0 24px 0; }
    .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 24px; }
    .feature-item { background: #f8fafc; border-radius: 16px; padding: 22px; border: 1px solid #e2e8f0; }
    .feature-icon { width: 36px; height: 36px; border-radius: 10px; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 12px; }
    .feature-item h4 { margin: 0 0 8px 0; color: #0f172a; font-size: 15px; font-weight: 700; }
    .feature-item p { font-size: 13.5px; color: #64748b; margin: 0; line-height: 1.5; }
    .timeline-step { display: flex; gap: 16px; margin-bottom: 20px; }
    .step-number { width: 32px; height: 32px; border-radius: 50%; background: #2563eb; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; shrink: 0; }
    .price-banner { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; border-radius: 24px; padding: 36px 40px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; box-shadow: 0 16px 36px -12px rgba(15, 23, 42, 0.25); }
    .cta-btn { background: #2563eb; color: #ffffff; font-weight: 800; text-decoration: none; padding: 16px 36px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 8px; font-size: 15px; box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.4); }
    @media (max-width: 640px) { .prop-card { padding: 24px 20px; } .gradient-title { font-size: 24px; } .price-banner { padding: 28px 24px; } }
  </style>
</head>
<body>
  <div class="prop-container">
    <div class="prop-card">
      <span class="badge-chip">Propuesta Técnica &amp; Económica · Exclusiva</span>
      <h1 class="gradient-title">Sistema de Trazabilidad de Lotes y Control de Maquila Química</h1>
      <p class="subtitle">Preparado exclusivamente para <strong>Servicios Industriales Quiserma, C.A.</strong> por el equipo de ingeniería de Saventi.</p>
      
      <div style="background: #f1f5f9; padding: 18px 22px; border-radius: 14px; border-left: 4px solid #2563eb; margin-bottom: 24px;">
        <p style="margin: 0; font-size: 14px; color: #334155;">
          <strong>Diagnóstico Operativo:</strong> Digitalización y control de la operación de maquila (fabricación, formulado, mezclado y envasado de productos químicos y cosméticos), automatizando el seguimiento por lote desde la recepción de materias primas hasta el almacenamiento en sus 1.200 m³ de racks y despacho final.
        </p>
      </div>

      <h3 style="font-size: 18px; font-weight: 800; color: #0f172a; margin: 28px 0 6px 0;">Alcance y Módulos de la Solución</h3>
      <div class="feature-grid">
        <div class="feature-item">
          <div class="feature-icon">⚗️</div>
          <h4>Módulo de Formulación &amp; Mezcla</h4>
          <p>Catálogo maestro de fórmulas, recetas y dosificaciones con control de mermas y validaciones para operarios.</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🏷️</div>
          <h4>Generador de Lotes &amp; QR</h4>
          <p>Asignación automática de identificador de lote, impresión de etiquetas con código QR y ficha técnica del lote.</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">📦</div>
          <h4>Control de Racks (1.200 m³)</h4>
          <p>Mapa interactivo de almacenamiento para localizar pallets, fechas de ingreso y lotes listos para entrega.</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🌐</div>
          <h4>Portal de Clientes de Maquila</h4>
          <p>Acceso seguro para que las marcas cliente consulten el estado de su orden, stock elaborado y descargas de certificados.</p>
        </div>
      </div>
    </div>

    <div class="prop-card">
      <h3 style="font-size: 18px; font-weight: 800; color: #0f172a; margin: 0 0 20px 0;">Cronograma de Entrega (5 a 7 Semanas)</h3>
      <div class="timeline-step">
        <div class="step-number">1</div>
        <div>
          <h4 style="margin: 0 0 4px 0; color: #0f172a; font-size: 15px;">Fase 1: Levantamiento Técnico &amp; Arquitectura</h4>
          <p style="margin: 0; font-size: 13.5px; color: #64748b;">Modelado relacional en base de datos PostgreSQL, definición de fórmulas y catálogo de materias primas.</p>
        </div>
      </div>
      <div class="timeline-step">
        <div class="step-number">2</div>
        <div>
          <h4 style="margin: 0 0 4px 0; color: #0f172a; font-size: 15px;">Fase 2: Motor de Lotes y Mapeo de Bodega</h4>
          <p style="margin: 0; font-size: 13.5px; color: #64748b;">Desarrollo del panel de operario, generación de lotes, control de mezclas y visualizador de racks.</p>
        </div>
      </div>
      <div class="timeline-step" style="margin-bottom: 0;">
        <div class="step-number">3</div>
        <div>
          <h4 style="margin: 0 0 4px 0; color: #0f172a; font-size: 15px;">Fase 3: Portal Web, Pruebas en Planta &amp; Despliegue</h4>
          <p style="margin: 0; font-size: 13.5px; color: #64748b;">Pruebas de estrés, despliegue en la nube, capacitación del personal de Quiserma y entrega del 100% del código fuente.</p>
        </div>
      </div>
    </div>

    <div class="price-banner">
      <div>
        <div style="font-size: 12px; color: #94a3b8; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Inversión Proyecto Llave en Mano</div>
        <div style="font-size: 38px; font-weight: 900; color: #ffffff; margin: 4px 0 2px 0;">$2,400 <span style="font-size: 16px; color: #94a3b8; font-weight: 600;">USD</span></div>
        <div style="font-size: 12.5px; color: #cbd5e1;">Código 100% de Quiserma · Sin mensualidades de licencia · Garantía post-entrega</div>
      </div>
      <div>
        <a href="https://wa.me/584147708179?text=Hola%20Saventi,%20he%20revisado%20la%20propuesta%20de%20Quiserma%20y%20deseo%20aprobarla" target="_blank" class="cta-btn">
          <span>Aprobar Propuesta</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</body>
</html>`
    };
  }

  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const proposal = await getProposal(slug);

  if (!proposal) {
    return {
      title: 'Propuesta Comercial | Saventi',
      robots: { index: false, follow: false }
    };
  }

  return {
    title: `Propuesta Técnica & Comercial para ${proposal.name} | Saventi`,
    description: 'Documento exclusivo de propuesta técnica y económica.',
    robots: { index: false, follow: false }
  };
}

export default async function ProposalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const proposal = await getProposal(slug);

  if (!proposal) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* Top Banner de Marca Saventi */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="https://www.saventihq.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src="/saventi-text.png" alt="Saventi" className="h-6 w-auto object-contain" />
            </a>
            <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              Propuesta Oficial
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/584147708179?text=Hola%20Saventi,%20he%20revisado%20la%20propuesta%20y%20deseo%20comentarla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
            >
              Contactar Asesor
            </a>
          </div>
        </div>
      </header>

      {/* Contenido HTML de la propuesta inyectado */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div
          className="proposal-content-wrapper"
          dangerouslySetInnerHTML={{ __html: proposal.template }}
        />
      </main>

      {/* Footer corporativo con Logo Oficial Saventi */}
      <footer className="border-t border-slate-200/80 py-12 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4 flex flex-col items-center">
          <a href="https://www.saventihq.com" target="_blank" rel="noopener noreferrer follow" className="inline-block mb-3">
            <img 
              src="/saventi-text.png" 
              alt="Saventi — Desarrollo de Software a la Medida" 
              className="h-7 w-auto object-contain mx-auto" 
            />
          </a>
          <p className="text-xs font-medium text-slate-500 tracking-wide uppercase mb-3">
            Software diseñado alrededor de operaciones reales.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] font-semibold text-slate-500 mb-3">
            <a href="https://www.saventihq.com/servicios" className="hover:text-blue-600 transition-colors">Servicios</a>
            <span>•</span>
            <a href="https://www.saventihq.com/desarrollo-erp" className="hover:text-blue-600 transition-colors">Sistemas ERP</a>
            <span>•</span>
            <a href="https://www.saventihq.com/aplicaciones-moviles" className="hover:text-blue-600 transition-colors">Apps Móviles</a>
            <span>•</span>
            <a href="https://www.saventihq.com/terms" className="hover:text-blue-600 transition-colors">Términos</a>
          </div>
          <div className="w-12 h-px bg-slate-200 my-2"></div>
          <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
            Este documento es estrictamente confidencial y ha sido preparado exclusivamente para <strong>{proposal.name}</strong> por Saventi bajo acuerdo de confidencialidad (NDA). Queda prohibida su reproducción o distribución sin previa autorización.
          </p>
        </div>
      </footer>
    </div>
  );
}