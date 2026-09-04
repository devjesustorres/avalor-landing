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
  }
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
            <a href="https://avelorglobal.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src="/saventi-text.png" alt="Saventi" className="h-6 w-auto object-contain" />
            </a>
            <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              Propuesta Oficial
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/584120000000?text=Hola%20Saventi,%20he%20revisado%20la%20propuesta%20y%20deseo%20comentarla"
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