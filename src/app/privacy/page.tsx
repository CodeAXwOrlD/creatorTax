import type { Metadata } from "next";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — CreatorTax India",
  description: "Read CreatorTax India's privacy policy, data minimization commitments, and browser-local calculator architecture.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Your Privacy Matters</span>
          <h1 className="serif">Privacy policy.</h1>
          <p>
            We believe privacy is an architectural principle, not an afterthought. Here is our transparent commitment to your data.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 20px",
              background: "#eaf3ee",
              border: "1px solid #cce5d6",
              borderRadius: 8,
              marginBottom: 32
            }}
          >
            <Lock size={22} color="var(--green)" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: 13.5, color: "var(--ink)", lineHeight: 1.6 }}>
              <strong>Client-Side Processing Guarantee:</strong> The Section 44ADA calculator runs entirely inside your browser JavaScript engine. Your income numbers, TDS values, and turnover figures are never transmitted to our servers or saved to a database.
            </p>
          </div>

          <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, margin: "24px 0 12px" }}>
            1. Information We Collect
          </h2>
          <p style={{ lineHeight: 1.85, color: "var(--muted)", fontSize: 14.5 }}>
            • <strong>Voluntary Inquiries:</strong> When you submit a contact or correction form, we collect your name, email address, topic, and message to respond to your inquiry. We retain this communication only as long as needed to address your feedback.
          </p>
          <p style={{ lineHeight: 1.85, color: "var(--muted)", fontSize: 14.5 }}>
            • <strong>Server Logs:</strong> Like standard web infrastructure, our hosting environment temporarily logs IP addresses and user-agent strings for security, rate-limiting, and DDoS protection.
          </p>

          <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, margin: "28px 0 12px" }}>
            2. Cookies and Tracking
          </h2>
          <p style={{ lineHeight: 1.85, color: "var(--muted)", fontSize: 14.5 }}>
            CreatorTax India does not deploy deceptive cross-site tracking cookies, behavioral ad pixels, or third-party data broker scripts. We prioritize fast static delivery and respect Do Not Track (DNT) browser signals.
          </p>

          <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, margin: "28px 0 12px" }}>
            3. Sensitive Tax Data Notice
          </h2>
          <p style={{ lineHeight: 1.85, color: "var(--muted)", fontSize: 14.5 }}>
            We explicitly instruct users never to transmit sensitive tax identifiers—such as Permanent Account Numbers (PAN), Aadhaar numbers, net banking passwords, or unredacted tax return PDFs—via contact forms or general email.
          </p>

          <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, margin: "28px 0 12px" }}>
            4. Data Retention &amp; Rights
          </h2>
          <p style={{ lineHeight: 1.85, color: "var(--muted)", fontSize: 14.5 }}>
            You have the right to request access to or deletion of any email correspondence you have sent us. To exercise your data rights or report a privacy concern, contact our privacy desk at <a href="mailto:privacy@creatortax.in" style={{ color: "var(--green)", fontWeight: 600 }}>privacy@creatortax.in</a>.
          </p>

          <div style={{ marginTop: 36, paddingTop: 20, borderTop: "1px solid var(--line)", fontSize: 12, color: "var(--muted)" }}>
            Effective Date: October 2026 · Last Reviewed: AY 2025-26
          </div>
        </div>
      </section>
    </main>
  );
}
