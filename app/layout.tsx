import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Avaro AI — Enterprise Autonomous Intelligence Platform",
  description: "Next-generation corporate SaaS platform for autonomous neural workflows, real-time telemetry, and enterprise-grade multi-agent cloud orchestration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans antialiased selection:bg-brand-600 selection:text-white`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

