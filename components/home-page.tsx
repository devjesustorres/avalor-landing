import { FloatingNavbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { StatsCards } from "@/components/stats-cards";
import { DashboardPreview } from "@/components/dashboard-preview";
import { SolutionsSection } from "@/components/solutions";
import { PricingSection } from "@/components/pricing";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { MobileHome } from "@/components/mobile/mobile-home";

export default function HomePage() {
  return (
    <>
      {/* Vista Móvil Dedicada (Mobile-First sin barra inferior) */}
      <div className="block md:hidden">
        <MobileHome />
      </div>

      {/* Vista de Escritorio / Pantallas Grandes */}
      <div className="hidden md:block min-h-screen relative">
        {/* Background Ambient Glows */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] neural-glow rounded-full blur-3xl opacity-80" />
          <div className="absolute top-[600px] -right-32 w-[600px] h-[600px] neural-glow rounded-full blur-3xl opacity-50" />
          <div className="absolute top-[1400px] -left-32 w-[600px] h-[600px] neural-glow rounded-full blur-3xl opacity-40" />
        </div>

        {/* Floating Pill Nav */}
        <FloatingNavbar />

        {/* Main Sections */}
        <main className="relative z-10">
          <HeroSection />
          <StatsCards />
          <DashboardPreview />
          <SolutionsSection />
          <PricingSection />
          <FaqSection />
          <CtaSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

