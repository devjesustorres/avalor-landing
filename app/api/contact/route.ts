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

    // 2. Comprobar Hostnames esperados
    const expectedAction = "contact";
    const allowedHostnames = new Set(
      (process.env.TURNSTILE_HOSTNAMES ?? "saventi-landing.vercel.app,saventihq.com,localhost,127.0.0.1")
        .split(",")
        .map((h) => h.trim())
        .filter(Boolean)
    );

    // Obtener IP del cliente para siteverify
    const clientIp =
      req.headers.get("cf-connecting-ip") ||
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      undefined;

    // 3. Llamada canónica a Cloudflare Turnstile siteverify
    const siteverifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        signal: AbortSignal.timeout(10000),
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET || "",
          response: token,
          ...(clientIp ? { remoteip: clientIp } : {}),
        }),
      }
    );

    if (!siteverifyRes.ok) {
      return NextResponse.json(
        { error: "Error de verificación de bot" },
        { status: 403 }
      );
    }

    const verification = await siteverifyRes.json();

    if (
      !verification.success ||
      (verification.action && verification.action !== expectedAction) ||
      (verification.hostname && !allowedHostnames.has(verification.hostname))
    ) {
      return NextResponse.json(
        { error: "Verificación de seguridad fallida" },
        { status: 403 }
      );
    }

    // 4. Sanitización de datos
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

    // 5. Inserción protegida en Supabase (leads visibles en Saventi-admin)
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
