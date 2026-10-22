"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "General question",
    message: "",
    website: "" // honeypot
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        topic: "General question",
        message: "",
        website: ""
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="panel" style={{ padding: "36px 28px", textAlign: "center" }}>
        <CheckCircle2 size={44} color="#24364B" style={{ margin: "0 auto 16px" }} />
        <h3 className="serif" style={{ fontSize: 26, margin: "0 0 10px" }}>Message Received</h3>
        <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7, maxWidth: 440, margin: "0 auto 20px" }}>
          Thank you for reaching out. We carefully review all feedback, corrections, and inquiries within 24–48 business hours.
        </p>
        <button
          type="button"
          className="btn secondary"
          onClick={() => setStatus("idle")}
          style={{ fontSize: 12 }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="panel contact-form" onSubmit={handleSubmit} noValidate>
      {status === "error" && (
        <div
          role="alert"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 16px",
            borderRadius: 6,
            background: "#fff0f0",
            border: "1px solid #f5c2c2",
            color: "#c0392b",
            fontSize: 12
          }}
        >
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Honeypot field for bot deterrence - hidden from human users */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website">Do not fill this field</label>
        <input
          id="website"
          name="website"
          type="text"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="form-row">
        <label htmlFor="name">Your name</label>
        <input
          className="field"
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="e.g. Aditi Sharma"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="form-row">
        <label htmlFor="email">Email address</label>
        <input
          className="field"
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@domain.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="form-row">
        <label htmlFor="topic">What is this about?</label>
        <select
          className="field"
          id="topic"
          name="topic"
          value={formData.topic}
          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
        >
          <option value="General question">General question</option>
          <option value="Correction request">Correction request</option>
          <option value="Content suggestion">Content suggestion</option>
          <option value="Partnership">Partnership</option>
          <option value="Tax tool feedback">Tax tool feedback</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="message">Message</label>
        <textarea
          className="field"
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Provide context or details. For corrections, please include the relevant article URL and primary source reference."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button className="btn" type="submit" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending message...
          </>
        ) : (
          <>
            Submit inquiry <Send size={15} />
          </>
        )}
      </button>

      <small style={{ color: "var(--muted)", fontSize: 11, lineHeight: 1.5 }}>
        Submissions are protected against spam and processed securely. We never sell your contact information or share it with third-party advertisers.
      </small>
    </form>
  );
}
