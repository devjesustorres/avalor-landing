import { FloatingNavbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { StatsCards } from "@/components/stats-cards";
import { DashboardPreview } from "@/components/dashboard-preview";
import { SolutionsSection } from "@/components/solutions";
import { BusinessImpactSection } from "@/components/business-impact-section";
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
        {/* Background Ambient Glows with Richer Colors & Subtle Motion */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] neural-glow rounded-full blur-3xl opacity-80" />
          <div className="absolute top-[600px] -right-32 w-[600px] h-[600px] neural-glow rounded-full blur-3xl opacity-50" />
          <div className="absolute top-[1400px] -left-32 w-[600px] h-[600px] neural-glow rounded-full blur-3xl opacity-40" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[950px] h-[550px] neural-glow rounded-full blur-3xl opacity-90 animate-pulse-glow" />
          <div className="absolute top-[450px] -right-24 w-[650px] h-[650px] neural-glow-purple rounded-full blur-3xl opacity-75 animate-float-slow" />
          <div className="absolute top-[1200px] -left-32 w-[650px] h-[650px] neural-glow-cyan rounded-full blur-3xl opacity-75 animate-float-delayed" />
          <div className="absolute top-[2200px] right-1/4 w-[700px] h-[500px] neural-glow rounded-full blur-3xl opacity-60" />
        </div>

        {/* Floating Pill Nav */}
        <FloatingNavbar />

        {/* Main Sections */}
        <main className="relative z-10">
          <HeroSection />
          <StatsCards />
          <BusinessImpactSection />
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
