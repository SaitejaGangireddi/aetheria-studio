import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_123456789");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, architectureType, projectBrief } = body;

    // Send email notification via Resend
    const { data, error } = await resend.emails.send({
      from: "DesignerPal Inquiries <onboarding@resend.dev>",
      to: ["saitejagangireddi@designerpal.in", "saitejagangireddi@gmail.com"],
      subject: `🚀 New Project Inquiry: ${name} (${architectureType})`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #0f172a;">
          <h2 style="color: #7c3aed;">New Project Proposal Submitted</h2>
          <hr style="border: 0.5px solid #e2e8f0; margin: 15px 0;" />
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Architecture Type:</strong> ${architectureType}</p>
          <p><strong>Project Brief & Timeline:</strong></p>
          <blockquote style="background: #f8fafc; padding: 12px; border-left: 4px solid #7c3aed; margin: 10px 0;">
            ${projectBrief}
          </blockquote>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Dispatch Error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Internal Server Error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
