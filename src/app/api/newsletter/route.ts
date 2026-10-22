import { NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address.")
    .max(255, "Email address is too long.")
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      const errorMsg = result.error.issues[0]?.message || "Invalid email address.";
      return NextResponse.json({ success: false, error: errorMsg }, { status: 400 });
    }

    const { email } = result.data;
    // Log submission (in production this connects to email service like Loops/Resend)
    console.info(`[Newsletter Subscription] New subscriber: <${email}>`);

    return NextResponse.json({
      success: true,
      message: "You are subscribed. We only send critical statutory tax updates and deadline alerts."
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please check your network and try again." },
      { status: 500 }
    );
  }
}
