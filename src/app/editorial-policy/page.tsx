import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial Policy & Sourcing Standards — CreatorTax India",
  description: "Learn how CreatorTax India researches, writes, cites, and reviews tax and compliance guides for Indian digital professionals.",
  alternates: { canonical: "/editorial-policy" }
};

export default function EditorialPolicyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Integrity by Design</span>
          <h1 className="serif">Our editorial standards.</h1>
          <p>
            Trust is earned through rigorous primary sourcing, unambiguous terminology, explicit dates, and prompt factual corrections.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          <h2 className="serif" style={{ fontSize: 32, fontWeight: 500, margin: "0 0 16px" }}>
            The Four Pillars of CreatorTax Editorial Integrity
          </h2>

          <div style={{ display: "grid", gap: 18, margin: "28px 0 36px" }}>
            <div className="panel" style={{ padding: "18px 22px", display: "flex", gap: 14 }}>
              <CheckCircle size={22} color="var(--green)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <strong style={{ fontSize: 15, display: "block", marginBottom: 4 }}>
                  1. Authoritative Primary Sources
                </strong>
                <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted)", lineHeight: 1.65 }}>
                  We prioritize primary statutory documents: the Income Tax Act 1961, CGST/IGST Acts 2017, official CBDT notifications, CBIC circulars, and RBI Master Directions. We cite these directly with outbound links so readers can independently verify every claim.
                </p>
              </div>
            </div>

            <div className="panel" style={{ padding: "18px 22px", display: "flex", gap: 14 }}>
              <CheckCircle size={22} color="var(--green)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <strong style={{ fontSize: 15, display: "block", marginBottom: 4 }}>
                  2. Assessment Year &amp; Temporal Relevance
                </strong>
                <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted)", lineHeight: 1.65 }}>
                  Tax law is not static. Every article prominently displays the financial/assessment year it applies to (currently AY 2025-26 / FY 2024-25) and its last updated timestamp. When new Union Budgets pass into law, articles are updated to reflect amendments.
                </p>
              </div>
            </div>

            <div className="panel" style={{ padding: "18px 22px", display: "flex", gap: 14 }}>
              <CheckCircle size={22} color="var(--green)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <strong style={{ fontSize: 15, display: "block", marginBottom: 4 }}>
                  3. Clear Scope &amp; Statutory Traps
                </strong>
                <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted)", lineHeight: 1.65 }}>
                  We refuse to publish generic advice. Every guide clearly specifies &quot;Who This Applies To&quot; and highlights common traps—such as the risk of claiming home office expenses under Section 44ADA or accepting PayPal payments without proper e-FIRAs.
                </p>
              </div>
            </div>

            <div className="panel" style={{ padding: "18px 22px", display: "flex", gap: 14 }}>
              <CheckCircle size={22} color="var(--green)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <strong style={{ fontSize: 15, display: "block", marginBottom: 4 }}>
                  4. Transparent Commercial Independence
                </strong>
                <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted)", lineHeight: 1.65 }}>
                  Our editorial analysis is independent. We never accept payment to recommend specific software, banks, or accounting services, and commercial partnerships will never alter our objective assessment of tax compliance.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 32, display: "flex", gap: 14 }}>
            <Link className="btn" href="/guides">
              Explore Verified Guides <ArrowRight size={15} />
            </Link>
            <Link className="btn secondary" href="/corrections">
              View Corrections Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
