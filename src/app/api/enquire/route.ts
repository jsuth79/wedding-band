import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/sendEmail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, eventDate, eventType, message } = body;

    // Validate required fields
    if (!name || !email || !eventDate || !eventType || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate date is in the future
    const selectedDate = new Date(eventDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return NextResponse.json(
        { error: "Event date must be in the future" },
        { status: 400 }
      );
    }

    // Send the email
    await sendEnquiryEmail({
      name,
      email,
      eventDate,
      eventType,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Failed to send enquiry. Please try again later." },
      { status: 500 }
    );
  }
}
