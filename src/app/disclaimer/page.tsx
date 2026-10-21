import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Financial & Legal Disclaimer — CreatorTax India",
  description: "Read the limits of CreatorTax India's educational tools and content. Understand why our resources do not substitute for qualified CA advice.",
  alternates: { canonical: "/disclaimer" }
};

export default function DisclaimerPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Important Legal Limits</span>
          <h1 className="serif">Financial disclaimer.</h1>
          <p>
            CreatorTax India provides general educational information and illustrative tools. Please read this notice before relying on any estimate or article.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          <div
            style={{
              padding: "18px 22px",
              borderRadius: 8,
              background: "#fffaf0",
              border: "1px solid #fce8c3",
              marginBottom: 32,
              display: "flex",
              gap: 14,
              alignItems: "flex-start"
            }}
          >
            <AlertTriangle size={24} color="var(--terracotta)" style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <strong style={{ fontSize: 14, color: "#8a4b27", display: "block", marginBottom: 4 }}>
                Educational Resource Only — Not Professional Tax Advice
              </strong>
              <p style={{ margin: 0, fontSize: 13, color: "var(--ink)", lineHeight: 1.65 }}>
                The articles, checklists, and calculators published on this website are designed exclusively for general educational and informational purposes. They do not constitute personalized tax, accounting, investment, or legal advice, and do not establish a chartered accountant-client or attorney-client relationship.
              </p>
            </div>
          </div>

          <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, margin: "24px 0 12px" }}>
            1. Statutory Rules Change Frequently
          </h2>
          <p style={{ lineHeight: 1.85, color: "var(--muted)", fontSize: 14.5 }}>
            Indian tax legislation, Finance Act amendments, GST Council notifications, judicial precedents, and official e-filing portal workflows undergo frequent updates. While we strive to maintain accuracy for the ongoing Assessment Year (AY 2025-26), you must verify all current limits and rules with primary official publications before taking financial or tax-filing actions.
          </p>

          <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, margin: "28px 0 12px" }}>
            2. Calculator Limitations
          </h2>
          <p style={{ lineHeight: 1.85, color: "var(--muted)", fontSize: 14.5 }}>
            The Section 44ADA calculator is an illustrative mathematical simulation. It does not establish your legal eligibility under Section 44AA, nor does it compute surcharge, marginal relief, capital gains, residential status adjustments, or cross-border treaty relief (DTAA). Never use a website estimate as your final tax filing return without professional validation.
          </p>

          <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, margin: "28px 0 12px" }}>
            3. Limitation of Liability
          </h2>
          <p style={{ lineHeight: 1.85, color: "var(--muted)", fontSize: 14.5 }}>
            CreatorTax India, its contributors, and operators disclaim all liability for any direct, indirect, incidental, or consequential loss, interest, penalty, or tax notice resulting from reliance on the content, calculations, or materials provided on this platform.
          </p>

          <div style={{ marginTop: 32, display: "flex", gap: 14 }}>
            <Link className="btn" href="/tools/44ada-calculator">
              Explore Calculator
            </Link>
            <Link className="btn secondary" href="/contact">
              Submit a Question
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
