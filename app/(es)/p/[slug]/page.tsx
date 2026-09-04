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
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Top Banner de Marca Saventi */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="https://avelorglobal.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src="/saventi-text-white.png" alt="Saventi" className="h-5 sm:h-6 w-auto object-contain" />
            </a>
            <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Propuesta Oficial
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/584120000000?text=Hola%20Saventi,%20he%20revisado%20la%20propuesta%20y%20deseo%20comentarla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
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

      {/* Footer confidencial */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-400">
        <p className="max-w-xl mx-auto px-4">
          Este documento es confidencial y ha sido preparado exclusivamente para <strong>{proposal.name}</strong> por <strong>Saventi</strong> bajo acuerdo NDA.
        </p>
      </footer>
    </div>
  );
}