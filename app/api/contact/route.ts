import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, formType, service, message, country, researchArea, additionalInfo } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields: Name and Email are mandatory." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 0);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user;
    const to = process.env.SMTP_TO || user;

    if (!host || !port || !user || !pass || !from || !to) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass
      }
    });

    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("SMTP verify failed:", verifyError);
      return NextResponse.json(
        { error: "Email login failed. Check SMTP credentials or App Password." },
        { status: 500 }
      );
    }

    const safeService = service && service !== "Select a service" ? service : null;

    let emailText = `New Form Submission Details:\n\n`;
    emailText += `Form Type: ${formType || 'Contact / Service Inquiry'}\n`;
    emailText += `Name: ${name}\n`;
    emailText += `Email: ${email}\n`;
    
    if (phone) emailText += `Phone: ${phone}\n`;
    if (country) emailText += `Country: ${country}\n`;
    if (researchArea) emailText += `Research Area: ${researchArea}\n`;
    if (safeService) emailText += `Service Interested: ${safeService}\n`;
    if (message) emailText += `\nMessage:\n${message}\n`;
    if (additionalInfo) emailText += `\nAdditional Information:\n${additionalInfo}\n`;

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New Submission: ${formType || 'Contact Inquiry'} by ${name}`,
      text: emailText
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    const message =
      error instanceof Error ? error.message : "Unable to send message. Please try again.";
    return NextResponse.json(
      { error: process.env.NODE_ENV === "development" ? message : "Unable to send message. Please try again." },
      { status: 500 }
    );
  }
}
