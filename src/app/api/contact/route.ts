import { NextResponse } from "next/server";
import { z } from "zod";

// Rate limiting in-memory map: IP -> timestamp list
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  recent.push(now);
  rateLimitMap.set(ip, recent);
  
  // Cleanup old entries periodically if map grows
  if (rateLimitMap.size > 1000) {
    for (const [key, times] of rateLimitMap.entries()) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        rateLimitMap.delete(key);
      }
    }
  }
  
  return false;
}

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email is too long"),
  topic: z.enum([
    "General question",
    "Correction request",
    "Content suggestion",
    "Partnership",
    "Tax tool feedback"
  ]),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message must be under 3000 characters"),
  // Honeypot field for bot deterrence - must be empty
  website: z.string().max(0, "Spam detected").optional().or(z.literal(""))
});

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait a minute before submitting again."
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message || "Invalid input";
      return NextResponse.json(
        {
          success: false,
          error: firstError,
          details: result.error.flatten().fieldErrors
        },
        { status: 400 }
      );
    }

    const { name, email, topic, message } = result.data;

    // Log securely without exposing sensitive details
    console.info(`[Contact Submission] Topic: "${topic}" from "${name}" <${email}> (${message.length} chars)`);

    // In production, integrate with a transactional email provider (Resend/SendGrid/SES)
    // or securely append to database with RLS.
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for getting in touch. Your message has been received, and our editorial team will review it shortly."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again or reach out directly via hello@creatortax.in"
      },
      { status: 500 }
    );
  }
}
