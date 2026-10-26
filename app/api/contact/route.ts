import { NextResponse } from 'next/server';

// In-memory rate limiter (per IP, max 5 requests per 15-minute sliding window)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

// Basic text sanitizer to prevent script injection
function sanitizeText(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 120;
}

export async function POST(request: Request) {
  try {
    // 1. IP extraction and Rate Limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';
    const now = Date.now();

    const rateData = rateLimitMap.get(ip);
    if (rateData) {
      if (now > rateData.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      } else if (rateData.count >= MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json(
          {
            success: false,
            error: 'Too many requests. Please wait 15 minutes before sending another inquiry.',
          },
          { status: 429 }
        );
      } else {
        rateData.count += 1;
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }

    // 2. Body parsing and size check
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength, 10) > 15000) {
      return NextResponse.json(
        { success: false, error: 'Payload too large.' },
        { status: 413 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message, websiteUrl } = body;

    // 3. Honeypot check (anti-bot)
    if (websiteUrl && websiteUrl.trim().length > 0) {
      // Silently accept without processing to trick automated bots
      return NextResponse.json({ success: true, message: 'Message dispatched successfully.' });
    }

    // 4. Input validation
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid legal or business name (2 to 100 characters).' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address so we can reply.' },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 2 || subject.trim().length > 150) {
      return NextResponse.json(
        { success: false, error: 'Please provide a descriptive subject (2 to 150 characters).' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 3000) {
      return NextResponse.json(
        { success: false, error: 'Message must be between 10 and 3,000 characters.' },
        { status: 400 }
      );
    }

    // 5. Sanitize
    const cleanSubmission = {
      name: sanitizeText(name),
      email: email.trim().toLowerCase(),
      subject: sanitizeText(subject),
      message: sanitizeText(message),
      receivedAt: new Date().toISOString(),
    };

    // Note: In production, this can forward to SendGrid, Resend, or AWS SES.
    // For local and zero-dependency production setups, the payload is verified and safely acknowledged.
    console.log('[CreatorTax Editorial Desk Inquiry]', {
      name: cleanSubmission.name,
      email: cleanSubmission.email,
      subject: cleanSubmission.subject,
      timestamp: cleanSubmission.receivedAt,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you. Your message has been received by the CreatorTax India editorial desk.',
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Malformed request payload.' },
      { status: 400 }
    );
  }
}
