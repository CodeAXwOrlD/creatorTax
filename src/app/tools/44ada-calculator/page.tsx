import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorClient } from "@/components/calculator-client";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Section 44ADA Calculator (AY 2025-26) — Presumptive Tax & New vs Old Regime",
  description: "Calculate Section 44ADA presumptive profit (50%), compare New vs Old tax regimes for AY 2025-26, check the ₹75 Lakh digital receipts threshold, and estimate TDS refunds.",
  alternates: { canonical: "/tools/44ada-calculator" },
  openGraph: {
    title: "Section 44ADA Calculator (AY 2025-26) | CreatorTax India",
    description: "Interactive tax calculator for Indian freelancers and consultants opting for presumptive taxation.",
    type: "website"
  }
};

export default function CalculatorPage() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://creatortax.in";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${site}/tools`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Section 44ADA Calculator",
        item: `${site}/tools/44ada-calculator`
      }
    ]
  };

  return (
    <main>
      {/* ─── Hero Header ─── */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Statutory Tax Engine</span>
          <h1 className="serif">
            Section 44ADA<br />presumptive tax calculator.
          </h1>
          <p>
            Assess how the 50% presumptive-profit assumption works under the updated AY 2025-26 New and Old Tax Regimes. Compare slabs, verify the ₹75 Lakh digital receipts threshold under Section 44ADA(1B), and calculate your exact TDS refund or balance advance tax liability.
          </p>

          <div className="page-hero-meta-strip">
            <span className="page-hero-pill">
              AY 2025–26 &amp; Finance Act 2025
            </span>
            <span className="page-hero-pill">
              50% Deemed Profit Assumption
            </span>
            <span className="page-hero-pill">
              Single Installment: March 15th
            </span>
            <span className="page-hero-pill">
              Up to ₹75 Lakh Digital Limit
            </span>
          </div>
        </div>
      </section>

      {/* ─── Main Interactive Calculator Engine ─── */}
      <CalculatorClient />

      {/* ─── Statutory Foundations (Clean Executive Legal Layout) ─── */}
      <section className="section" style={{ background: "var(--paper-deep)", borderTop: "1px solid var(--line)", padding: "72px 0 80px" }}>
        <div className="container">
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <span className="eyebrow">Statutory Framework</span>
            <h2 className="serif" style={{ fontSize: "clamp(26px, 3.4vw, 36px)", margin: "10px 0 12px", color: "var(--ink)" }}>
              The Four Legal Pillars of Section 44ADA
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 14.5, margin: 0, lineHeight: 1.7 }}>
              Section 44ADA of the Income Tax Act, 1961 is a special simplified assessment code created to eliminate book-keeping burdens for independent professionals.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 20,
              marginBottom: 48
            }}
          >
            <div className="panel" style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 12 }}>
                Section 44ADA(1)
              </div>
              <strong style={{ display: "block", fontSize: 16, marginBottom: 8, color: "var(--ink)" }}>
                50% Flat Deemed Profit
              </strong>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                You are legally deemed to have earned 50% of your gross professional receipts as net taxable income. The remaining 50% is treated as statutory business expenditure without requiring expense receipts or vouchers.
              </p>
            </div>

            <div className="panel" style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 12 }}>
                Section 44ADA(1B)
              </div>
              <strong style={{ display: "block", fontSize: 16, marginBottom: 8, color: "var(--ink)" }}>
                ₹75 Lakh Digital Ceiling
              </strong>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                The statutory threshold is enhanced from ₹50 Lakhs to ₹75 Lakhs provided physical cash receipts do not exceed 5% of total gross receipts during the financial year.
              </p>
            </div>

            <div className="panel" style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 12 }}>
                Section 211(1)(b)
              </div>
              <strong style={{ display: "block", fontSize: 16, marginBottom: 8, color: "var(--ink)" }}>
                Single March 15th Installment
              </strong>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                Unlike regular companies and businesses that pay quarterly installments in June, September, and December, 44ADA filers pay 100% of advance tax on or before March 15th, completely free from quarterly 234C penalties.
              </p>
            </div>

            <div className="panel" style={{ padding: "26px 24px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 12 }}>
                Section 44AA(1)
              </div>
              <strong style={{ display: "block", fontSize: 16, marginBottom: 8, color: "var(--ink)" }}>
                Zero Mandatory Books of Account
              </strong>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                Professionals declaring income under Section 44ADA are legally exempt from maintaining formal books of accounts or undergoing mandatory chartered accountant tax audits under Section 44AB.
              </p>
            </div>
          </div>

          {/* Guide Banner */}
          <div style={{
            padding: "24px 28px",
            background: "var(--paper-card)",
            border: "1px solid var(--line)",
            borderRadius: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16
          }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)" }}>
                Statutory Reference Guide
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 17, fontFamily: "var(--font-serif)", color: "var(--ink)" }}>
                Section 44ADA Presumptive Taxation Handbook (AY 2025–26)
              </h3>
            </div>
            <Link
              href="/guides/section-44ada-presumptive-tax-guide"
              className="btn"
              style={{ fontSize: 13 }}
            >
              Read Complete Guide <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
