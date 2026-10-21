import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { GuidesDirectory } from "@/components/guides-directory";
import { ShieldCheck, FileCheck, Percent, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Tax, GST & Remittance Guides for Indian Freelancers | CreatorTax India",
  description: "Browse 8+ in-depth, source-cited guides covering Section 44ADA, GST LUT renewal, Wise/PayPal remittance e-FIRA, TDS refunds, and expense deductions.",
  alternates: { canonical: "/guides" }
};

export default function GuidesPage() {
  return (
    <main>
      <section className="page-hero" style={{ paddingBottom: 48 }}>
        <div className="container">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 12px", borderRadius: 999, background: "#e8f5ee", color: "var(--green)", fontSize: 11.5, fontWeight: 700, marginBottom: 14 }}>
            <BookOpen size={12} color="#059669" /> The CreatorTax Knowledge Library
          </div>

          <h1 className="serif" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: 1.15, maxWidth: 880, margin: "0 0 16px" }}>
            Statutory tax, GST &amp; remittance guides for independent Indian professionals.
          </h1>

          <p style={{ maxWidth: 760, fontSize: 16, lineHeight: 1.75, color: "var(--muted)", margin: "0 0 28px" }}>
            Practical, source-cited blueprints covering Section 44ADA presumptive taxation, Form RFD-11 LUT renewals, inward bank e-FIRA disposal, and Section 194J TDS refunds—verified against the Income Tax Act, 1961 and CGST Rules.
          </p>

          {/* Editorial Trust Badges Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 12,
              paddingTop: 20,
              borderTop: "1px solid var(--line)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 12.5, fontWeight: 600, color: "var(--ink-2)" }}>
              <ShieldCheck size={16} color="var(--green)" />
              <span>AY 2025-26 &amp; Finance Act 2025</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 12.5, fontWeight: 600, color: "var(--ink-2)" }}>
              <Percent size={16} color="var(--green)" />
              <span>Section 44ADA 50% Presumptive</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 12.5, fontWeight: 600, color: "var(--green)" }}>
              <FileCheck size={16} color="var(--green)" />
              <span>Zero-Rated GST Export Rules</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 12.5, fontWeight: 600, color: "var(--green)" }}>
              <BookOpen size={16} color="var(--green)" />
              <span>8 Comprehensive Guides (100% Free)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 36, paddingBottom: 80 }}>
        <div className="container">
          <GuidesDirectory allArticles={articles} />
        </div>
      </section>
    </main>
  );
}
