"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Copy,
  ArrowRight,
  ArrowUpRight,
  Calculator,
} from "lucide-react";

interface RolePreset {
  id: string;
  name: string;
  ceiling: string;
  profitRatio: string;
  auditExempt: string;
  advice: string;
  slug: string;
}

const ROLES: RolePreset[] = [
  {
    id: "software",
    name: "Software & Cloud",
    ceiling: "₹75,00,000 / year",
    profitRatio: "50% Deemed Profit",
    auditExempt: "Zero Books Audit (§ 44AA)",
    advice: "Software engineers declare flat 50% profit under Section 44ADA with zero expense bills required.",
    slug: "/tools/44ada-calculator",
  },
  {
    id: "video",
    name: "Video & Motion",
    ceiling: "₹75,00,000 / year",
    profitRatio: "50% Deemed Profit",
    auditExempt: "Zero Books Audit (§ 44AA)",
    advice: "Video editors billing foreign clients combine Section 44ADA with annual GST LUT for 0% IGST.",
    slug: "/guides/renew-gst-lut-online",
  },
  {
    id: "design",
    name: "Design & Product",
    ceiling: "₹75,00,000 / year",
    profitRatio: "50% Deemed Profit",
    auditExempt: "Zero Books Audit (§ 44AA)",
    advice: "Designers claim specified consultant status and offset 10% domestic TDS against final tax liability.",
    slug: "/guides/claim-tds-refund-freelancers",
  },
];

interface ExportShield {
  id: string;
  title: string;
  ruleCitation: string;
  referenceDoc: string;
  mechanism: string;
  summary: string;
}

const EXPORT_SHIELDS: ExportShield[] = [
  {
    id: "lut",
    title: "GST LUT",
    ruleCitation: "CGST Rule 96A",
    referenceDoc: "Form RFD-11 LUT",
    mechanism: "Zero-Rated 0% IGST Export",
    summary: "Export professional services internationally without paying 18% IGST upfront, keeping working capital liquid.",
  },
  {
    id: "firc",
    title: "RBI e-FIRA",
    ruleCitation: "RBI Purpose Code",
    referenceDoc: "SWIFT Inward Advice (P0802)",
    mechanism: "Foreign Exchange Proof",
    summary: "Bank evidence verifying foreign currency realization for software, design, or technical consulting.",
  },
  {
    id: "tds",
    title: "TDS Credit",
    ruleCitation: "IT Act § 194J",
    referenceDoc: "Form 26AS / AIS",
    mechanism: "Direct Tax Offset & Refund",
    summary: "Reconcile client TDS deductions (10% vs 2%) and claim excess tax back as a direct bank refund in your ITR.",
  },
];

export function ComplianceWorkflow() {
  const [activeRole, setActiveRole] = useState(ROLES[0]);
  const [activeShield, setActiveShield] = useState(EXPORT_SHIELDS[0]);
  const [hasCopiedLegend, setHasCopiedLegend] = useState(false);

  const handleCopyLegend = () => {
    navigator.clipboard.writeText(
      "SUPPLY MEANT FOR EXPORT OF SERVICES UNDER LETTER OF UNDERTAKING WITHOUT PAYMENT OF INTEGRATED TAX (CGST RULE 96A)"
    );
    setHasCopiedLegend(true);
    setTimeout(() => setHasCopiedLegend(false), 2400);
  };

  return (
    <div className="compliance-workflow-root">
      <div className="workflow-grid">
        {/* ── CARD 1: Presumptive Taxation ── */}
        <div className="workflow-card">
          <div>
            <div className="card-top-header">
              <span className="step-numeral">01</span>
              <div className="step-tag-block">
                <span className="statute-label">Income Tax Act · Section 44ADA</span>
                <h3 className="card-editorial-title">Check Presumptive Eligibility</h3>
              </div>
            </div>

            <p className="card-editorial-desc">
              Verify whether your freelance services qualify for the 50% deemed profit assumption and statutory audit exemption.
            </p>

            {/* Segmented Preset Chips */}
            <div className="editorial-tabs-row" role="tablist">
              {ROLES.map((role) => {
                const isSelected = activeRole.id === role.id;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setActiveRole(role)}
                    className={`editorial-tab ${isSelected ? "selected" : ""}`}
                    role="tab"
                    aria-selected={isSelected}
                  >
                    {role.name}
                  </button>
                );
              })}
            </div>

            {/* Specification Ledger Rows */}
            <div className="workflow-spec-list">
              <div className="workflow-spec-row">
                <span className="spec-label">Turnover Ceiling</span>
                <strong className="spec-val">{activeRole.ceiling}</strong>
              </div>
              <div className="workflow-spec-row">
                <span className="spec-label">Presumptive Profit</span>
                <strong className="spec-val">{activeRole.profitRatio}</strong>
              </div>
              <div className="workflow-spec-row">
                <span className="spec-label">Bookkeeping Duty</span>
                <strong className="spec-val">{activeRole.auditExempt}</strong>
              </div>
            </div>

            <p className="workflow-card-note">{activeRole.advice}</p>
          </div>

          <div className="workflow-card-footer">
            <Link href={activeRole.slug} className="workflow-action-link">
              <span>View 44ADA Filing Blueprint</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* ── CARD 2: Zero-Rated Foreign Payouts ── */}
        <div className="workflow-card">
          <div>
            <div className="card-top-header">
              <span className="step-numeral">02</span>
              <div className="step-tag-block">
                <span className="statute-label">CGST Rule 96A · Export of Services</span>
                <h3 className="card-editorial-title">Zero-Rate Foreign Payouts</h3>
              </div>
            </div>

            <p className="card-editorial-desc">
              File annual Form RFD-11 LUT to legally invoice foreign clients without 18% IGST and verify RBI purpose codes.
            </p>

            {/* Segmented Preset Chips */}
            <div className="editorial-tabs-row" role="tablist">
              {EXPORT_SHIELDS.map((sh) => {
                const isSelected = activeShield.id === sh.id;
                return (
                  <button
                    key={sh.id}
                    type="button"
                    onClick={() => setActiveShield(sh)}
                    className={`editorial-tab ${isSelected ? "selected" : ""}`}
                    role="tab"
                    aria-selected={isSelected}
                  >
                    {sh.title}
                  </button>
                );
              })}
            </div>

            {/* Specification Ledger Rows */}
            <div className="workflow-spec-list">
              <div className="workflow-spec-row">
                <span className="spec-label">Statutory Rule</span>
                <strong className="spec-val">{activeShield.ruleCitation}</strong>
              </div>
              <div className="workflow-spec-row">
                <span className="spec-label">Filing Form</span>
                <strong className="spec-val">{activeShield.referenceDoc}</strong>
              </div>
              <div className="workflow-spec-row">
                <span className="spec-label">Compliance Mechanism</span>
                <strong className="spec-val">{activeShield.mechanism}</strong>
              </div>
            </div>

            <p className="workflow-card-note">{activeShield.summary}</p>
          </div>

          <div className="workflow-card-footer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button
              type="button"
              onClick={handleCopyLegend}
              className="workflow-copy-btn"
              title="Copy official CGST Rule 96A export invoice declaration"
            >
              {hasCopiedLegend ? <Check size={12} /> : <Copy size={12} />}
              <span>{hasCopiedLegend ? "Copied to Clipboard" : "Copy Invoice Legend"}</span>
            </button>

            <Link href="/guides/renew-gst-lut-online" className="workflow-action-link">
              <span>LUT Guide</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* ── CARD 3: Advance Tax & Net Computation ── */}
        <div className="workflow-card">
          <div>
            <div className="card-top-header">
              <span className="step-numeral">03</span>
              <div className="step-tag-block">
                <span className="statute-label">ITR-4 Sugam · AY 2025–26</span>
                <h3 className="card-editorial-title">Plan Advance Tax &amp; Slabs</h3>
              </div>
            </div>

            <p className="card-editorial-desc">
              Calculate net tax under Section 115BAC (New Regime) and pay your single March 15th advance tax installment.
            </p>

            {/* Benchmark Tab Tag */}
            <div className="editorial-tabs-row">
              <span className="workflow-benchmark-tag">Sample FY 2024–25 Calculation</span>
            </div>

            {/* Specification Ledger Rows */}
            <div className="workflow-spec-list">
              <div className="workflow-spec-row">
                <span className="spec-label">Annual Gross Receipts</span>
                <strong className="spec-val">₹24,00,000</strong>
              </div>
              <div className="workflow-spec-row">
                <span className="spec-label">44ADA Deemed Profit (50%)</span>
                <strong className="spec-val">₹12,00,000</strong>
              </div>
              <div className="workflow-spec-row">
                <span className="spec-label">New Regime Tax Liability</span>
                <strong className="spec-val">₹52,000</strong>
              </div>
            </div>

            <p className="workflow-card-note">
              <strong>Statutory Benefit:</strong> 44ADA filers pay 100% of advance tax in one installment on or before March 15th, exempt from quarterly 234C penalties.
            </p>
          </div>

          <div className="workflow-card-footer">
            <Link href="/tools/44ada-calculator" className="btn" style={{ width: "100%", fontSize: 13, gap: 6 }}>
              <Calculator size={14} />
              <span>Launch 44ADA Calculator</span>
              <ArrowRight size={13} style={{ marginLeft: "auto" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
