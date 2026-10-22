import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorClient } from "@/components/calculator-client";
import {
  ShieldCheck,
  Percent,
  CalendarDays,
  FileCheck2,
  Check,
  BookOpen,
  ArrowRight,
  Info
} from "lucide-react";

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
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Financial Clarity, Not Guesswork</span>
          <h1 className="serif">
            Section 44ADA<br />presumptive tax calculator.
          </h1>
          <p>
            Explore how the 50% presumptive-profit assumption works under the updated AY 2025-26 New &amp; Old Tax Regimes. Compare slabs, check the ₹75 Lakh digital receipts ceiling under Section 44ADA(1B), and calculate your estimated TDS refund or balance tax due.
          </p>

          <div className="page-hero-meta-strip">
            <span className="page-hero-pill">
              <ShieldCheck size={14} color="#10b981" /> AY 2025-26 &amp; Finance Act 2025 Verified
            </span>
            <span className="page-hero-pill">
              <Percent size={14} color="#2563eb" /> 50% Deemed Profit Assumption
            </span>
            <span className="page-hero-pill">
              <CalendarDays size={14} color="#f59e0b" /> Single Installment: March 15th
            </span>
            <span className="page-hero-pill">
              <FileCheck2 size={14} color="#2563eb" /> Up to ₹75 Lakh Digital Limit
            </span>
          </div>
        </div>
      </section>

      {/* Main Interactive Calculator Engine */}
      <CalculatorClient />

      {/* Statutory Insights Section Below Calculator */}
      <section className="section" style={{ background: "var(--paper-deep)", borderTop: "1px solid var(--line)", padding: "64px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Statutory Foundations</span>
            <h2 className="serif" style={{ fontSize: "clamp(26px, 3.6vw, 36px)", margin: "10px 0 12px" }}>
              How Section 44ADA Works for Freelancers
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 15, margin: 0 }}>
              Section 44ADA is a special taxation scheme under the Income Tax Act, 1961 created to eliminate bookkeeping headaches for professionals.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
              marginBottom: 48
            }}
          >
            <div className="panel" style={{ padding: 24 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: "var(--cobalt-light)", color: "var(--cobalt)",
                display: "grid", placeItems: "center", marginBottom: 14
              }}>
                <Percent size={18} />
              </div>
              <strong style={{ display: "block", fontSize: 16, marginBottom: 8, color: "var(--ink)" }}>
                50% Flat Deemed Profit
              </strong>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                You are legally deemed to have earned 50% of gross receipts as net taxable income. The remaining 50% is treated as business expenditure without having to maintain expense bills or vouchers.
              </p>
            </div>

            <div className="panel" style={{ padding: 24 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: "var(--emerald-light)", color: "var(--emerald-hover)",
                display: "grid", placeItems: "center", marginBottom: 14
              }}>
                <ShieldCheck size={18} />
              </div>
              <strong style={{ display: "block", fontSize: 16, marginBottom: 8, color: "var(--ink)" }}>
                ₹75 Lakh Digital Limit
              </strong>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                Finance Act amendment enhanced the statutory ceiling from ₹50 Lakhs to ₹75 Lakhs, provided cash receipts do not exceed 5% of total gross receipts during the financial year.
              </p>
            </div>

            <div className="panel" style={{ padding: 24 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: "var(--gold-light)", color: "var(--gold-dark)",
                display: "grid", placeItems: "center", marginBottom: 14
              }}>
                <CalendarDays size={18} />
              </div>
              <strong style={{ display: "block", fontSize: 16, marginBottom: 8, color: "var(--ink)" }}>
                Single Advance Tax Installment
              </strong>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                Unlike regular businesses paying quarterly installments, 44ADA filers pay 100% of their advance tax on or before March 15th, completely exempt from quarterly 234C interest penalties.
              </p>
            </div>

            <div className="panel" style={{ padding: 24 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: "var(--cobalt-light)", color: "var(--cobalt)",
                display: "grid", placeItems: "center", marginBottom: 14
              }}>
                <FileCheck2 size={18} />
              </div>
              <strong style={{ display: "block", fontSize: 16, marginBottom: 8, color: "var(--ink)" }}>
                Zero Mandatory Books of Account
              </strong>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>
                Under Section 44AA(1), professionals opting for 44ADA are legally exempt from maintaining formal books of accounts or undergoing costly Section 44AB chartered accountant audits.
              </p>
            </div>
          </div>

          {/* Related Guides Banner */}
          <div
            style={{
              padding: "24px 30px",
              background: "var(--paper-card)",
              border: "1.5px solid var(--line)",
              borderRadius: 14,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16
            }}
          >
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--cobalt)" }}>
                Recommended In-Depth Blueprint
              </span>
              <h3 style={{ margin: "4px 0 0", fontSize: 18, fontFamily: "var(--font-serif)" }}>
                Read the Complete Section 44ADA Handbook (AY 2025-26)
              </h3>
            </div>

            <Link
              href="/guides/section-44ada-presumptive-tax-guide"
              className="btn"
              style={{ fontSize: 13 }}
            >
              Read Guide <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
