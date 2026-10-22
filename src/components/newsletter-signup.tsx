"use client";

import { useState } from "react";
import { Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to complete subscription.");
      }

      setStatus("success");
      setMessage(data.message || "Subscribed successfully.");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="newsletter-card">
      <div className="newsletter-content">
        <span className="eyebrow" style={{ color: "var(--brand-accent)", marginBottom: 8, display: "inline-block" }}>
          Statutory Dispatch
        </span>
        <h3 className="serif newsletter-title">
          Never miss an advance tax deadline or GST rule change.
        </h3>
        <p className="newsletter-desc">
          Zero marketing spam. We only send critical statutory reminders (March 15 Advance Tax, April 1 LUT renewals, and CBDT notifications for digital freelancers).
        </p>

        {status === "success" ? (
          <div className="newsletter-success" role="status">
            <CheckCircle2 size={18} color="var(--brand-accent)" />
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form" noValidate>
            <div className="newsletter-input-wrap">
              <Mail size={16} className="newsletter-input-icon" />
              <input
                type="email"
                required
                aria-label="Email address for statutory updates"
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="newsletter-input"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn"
              style={{
                background: "var(--brand-primary)",
                color: "#ffffff",
                borderColor: "var(--brand-primary)",
                whiteSpace: "nowrap"
              }}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={15} className="spinner" /> Joining...
                </>
              ) : (
                "Get Tax Alerts"
              )}
            </button>
          </form>
        )}

        {status === "error" && (
          <div className="newsletter-error" role="alert">
            <AlertCircle size={15} />
            <span>{message}</span>
          </div>
        )}

        <div className="newsletter-footer-note">
          <span>✓ Private by design</span>
          <span>✓ Unsubscribe anytime</span>
          <span>✓ No promotional sponsored clutter</span>
        </div>
      </div>
    </div>
  );
}
