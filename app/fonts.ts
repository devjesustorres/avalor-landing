import { Plus_Jakarta_Sans } from "next/font/google";

// Fuente compartida por ambos root layouts (es/en) para evitar duplicarla.
export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});
