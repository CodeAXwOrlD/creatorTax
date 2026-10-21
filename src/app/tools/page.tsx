import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  FileCheck2,
  CalendarDays,
  Globe2,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tax Calculators & Compliance Tools for Indian Freelancers",
  description: "Explore free financial tools for Indian creators: Section 44ADA calculator, New vs Old regime comparison, GST LUT requirements, and remittance purpose codes.",
  alternates: { canonical: "/tools" }
};

const tools = [
  {
    title: "Section 44ADA Presumptive Calculator",
    desc: "Calculate presumptive profit (50%), compare New vs Old tax regimes for AY 2025-26, test the ₹75 Lakh digital turnover limit, and compute TDS refund or balance tax payable.",
    href: "/tools/44ada-calculator",
    icon: Calculator,
    tag: "Interactive Tool",
    statusBadge: "Active (AY 2025-26)",
    featured: true
  },
  {
    title: "GST LUT & Export Zero-Rating Guide",
    desc: "Verify whether your cross-border services qualify for zero-rated export of service without paying 18% IGST upfront under Rule 96A.",
    href: "/guides/renew-gst-lut-online",
    icon: ShieldCheck,
    tag: "Interactive Guide",
    statusBadge: "Available"
  },
  {
    title: "RBI Remittance Purpose Code Directory",
    desc: "Look up correct RBI purpose codes (P0802, P1007, P0902) to ensure Wise, Stripe, and PayPal remittances receive legitimate e-FIRAs.",
    href: "/guides/paypal-wise-stripe-firc-guide",
    icon: Globe2,
    tag: "Reference Library",
    statusBadge: "Available"
  },
  {
    title: "Advance Tax Calendar & Penalty Estimator",
    desc: "Never miss the March 15th statutory 44ADA deadline or quarterly installments to avoid 1% monthly interest under Sections 234B and 234C.",
    href: "/guides/advance-tax-deadlines-penalties",
    icon: CalendarDays,
    tag: "Compliance Calendar",
    statusBadge: "Available"
  },
  {
    title: "Freelancer Contract & Invoicing Checklist",
    desc: "Standard checklist of mandatory clauses, IP assignment upon full payment, and Rule 46 GST invoice declarations.",
    href: "/guides/freelancer-contract-tax-records",
    icon: FileCheck2,
    tag: "Checklist",
    statusBadge: "Available"
  }
];

export default function ToolsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Useful by design</span>
          <h1 className="serif">
            Tools to simplify<br />your freelance finances.
          </h1>
          <p>
            Practical tools and interactive checklists designed to make Indian tax law, GST compliance, and international remittances transparent, predictable, and stress-free.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-grid">
            {tools.map(({ title, desc, href, icon: Icon, tag, statusBadge, featured }) => (
              <article
                className="guide-card"
                key={title}
                style={featured ? { border: "1.5px solid var(--green)", boxShadow: "var(--shadow)" } : undefined}
              >
                <div className="guide-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 8,
                        background: featured ? "var(--green)" : "#f2ece1",
                        display: "grid",
                        placeItems: "center"
                      }}
                    >
                      <Icon size={22} color={featured ? "#f6f2e9" : "var(--terracotta)"} />
                    </div>
                    <span className="tag" style={featured ? { background: "#d1e4d9", color: "var(--green)" } : undefined}>
                      {statusBadge}
                    </span>
                  </div>

                  <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)", fontWeight: 600 }}>
                    {tag}
                  </span>

                  <h3 style={{ margin: "8px 0 10px" }}>{title}</h3>
                  <p style={{ minHeight: 66 }}>{desc}</p>

                  <div style={{ marginTop: 20 }}>
                    <Link
                      className={`btn ${featured ? "" : "secondary"}`}
                      href={href}
                      style={{ width: "100%", fontSize: 12 }}
                    >
                      Open tool <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
