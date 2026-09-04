import { FloatingNavbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { StatsCards } from "@/components/stats-cards";
import { DashboardPreview } from "@/components/dashboard-preview";
import { MobileDashboardPreview } from "@/components/mobile-dashboard-preview";
import { SolutionsSection } from "@/components/solutions";
import { PricingSection } from "@/components/pricing";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { MobileNewsletterSection } from "@/components/mobile-newsletter-section";
import { MobileBottomBar } from "@/components/mobile-bottom-bar";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen relative pb-16 md:pb-0">
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
        <MobileDashboardPreview />
        <SolutionsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <MobileNewsletterSection />
      </main>

      {/* App-like Mobile Bottom Navigation Bar */}
      <MobileBottomBar />

      {/* Footer */}
      <Footer />
    </div>
  );
}
