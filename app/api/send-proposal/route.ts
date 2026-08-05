import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, architectureType, projectBrief } = body;

    console.log("New Proposal Submission:", { name, email, phone, architectureType, projectBrief });

    return NextResponse.json({ success: true, message: "Proposal logged successfully" });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to process request" }, { status: 500 });
  }
}
