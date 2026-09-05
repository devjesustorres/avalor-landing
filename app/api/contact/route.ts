import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { token, companyName, email, description, source = "desktop" } = body;

    // 1. Validaciones básicas de entrada
    if (
      typeof token !== "string" ||
      token.length === 0 ||
      token.length > 2048
    ) {
      return NextResponse.json(
        { error: "Token de verificación requerido" },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Correo electrónico inválido" },
        { status: 400 }
      );
    }

    // Secret fallback seguro de Cloudflare Turnstile
    const turnstileSecret =
      process.env.TURNSTILE_SECRET ||
      "0x4AAAAAAEpcH0KbuPhu09ZZP2SmpeFwygk";

    // 2. Llamada canónica a Cloudflare Turnstile siteverify
    const siteverifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        signal: AbortSignal.timeout(10000),
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: token,
        }),
      }
    );

    const verification = await siteverifyRes.json().catch(() => null);

    console.log("Turnstile siteverify response:", verification);

    if (!verification || !verification.success) {
      console.warn("Turnstile failed verification:", verification);
      return NextResponse.json(
        {
          error: "Verificación de seguridad fallida. Por favor recarga e intenta de nuevo.",
          details: verification?.["error-codes"] || [],
        },
        { status: 403 }
      );
    }

    // 3. Sanitización de datos
    const sanitize = (val: string, maxLen: number) =>
      val
        .replace(/<[^>]*>?/gm, "")
        .replace(/[\u0000-\u001F\u007F-\u009F]/g, "")
        .trim()
        .slice(0, maxLen);

    const cleanEmail = sanitize(email, 120).toLowerCase();
    const cleanCompany = sanitize(companyName || "", 120);
    const cleanDesc = sanitize(description || "", 1000);

    const finalCompany =
      cleanCompany ||
      (cleanEmail.split("@")[1]
        ? cleanEmail.split("@")[1].split(".")[0].toUpperCase()
        : "Lead Web");

    // 4. Inserción protegida en Supabase (leads visibles en Saventi-admin)
    const { error: dbError } = await supabase.from("prospects").insert([
      {
        company_name: finalCompany,
        email_primary: cleanEmail,
        sector: source === "mobile" ? "Mobile Landing" : "Inbound Landing",
        location: source === "mobile" ? "Mobile" : "Web",
        custom_subject: "Interesado en Plan Mensual Gestionado",
        custom_message:
          cleanDesc ||
          `Prospecto verificado por Cloudflare Turnstile a través de ${source}.`,
        stage: "nuevo",
        lead_status: "warm",
        lead_score: 50,
      },
    ]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Error al guardar el prospecto" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
