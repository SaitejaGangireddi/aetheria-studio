import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, scope } = body;

    if (!name || !email || !scope) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Optional: Send to a Webhook URL (e.g. Slack, Discord, Zapier, Resend, or SendGrid)
    const webhookUrl = process.env.PROPOSAL_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🚀 *New Project Brief Received on DesignerPal Studio*\n\n*Name:* ${name}\n*Email:* ${email}\n*Scope:* ${scope}`,
        }),
      });
    }

    console.log("New Project Brief Received:", { name, email, scope });

    return NextResponse.json({ success: true, message: "Proposal brief dispatched successfully" });
  } catch (error) {
    console.error("Error submitting proposal:", error);
    return NextResponse.json({ error: "Failed to dispatch email brief" }, { status: 500 });
  }
}
