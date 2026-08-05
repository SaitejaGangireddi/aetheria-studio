import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, scope } = await request.json();

    if (!name || !email || !scope) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure Nodemailer for Titan Mail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465,
      secure: true, // SSL
      auth: {
        user: "saitejagangireddi@designerpal.in",
        pass: process.env.TITAN_MAIL_PASSWORD || "", // Set in .env.local or Vercel
      },
    });

    const mailOptions = {
      from: `"DesignerPal Studio" <saitejagangireddi@designerpal.in>`,
      to: "saitejagangireddi@designerpal.in",
      replyTo: email,
      subject: `🚀 New Project Brief from ${name}`,
      text: `New Project Brief Received:\n\nName: ${name}\nEmail: ${email}\n\nProject Scope:\n${scope}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b;">
          <h2 style="color: #7c3aed;">New Project Brief Received</h2>
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Work Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p><strong>Project Scope & Requirements:</strong></p>
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
            ${scope.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("API Send Error:", error);
    const err = error as Error;
    return NextResponse.json(
      { error: err?.message || "Failed to dispatch email" },
      { status: 500 }
    );
  }
}
