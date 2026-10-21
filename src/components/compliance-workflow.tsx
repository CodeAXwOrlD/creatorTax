"use client";

import { useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Check,
  Copy,
  ArrowRight,
  ArrowUpRight,
  Shield,
  Calculator,
  Code2,
  Video,
  Palette,
  CheckCircle,
} from "lucide-react";

interface RolePreset {
  id: string;
  name: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  ceiling: string;
  profitRatio: string;
  auditExempt: string;
  advice: string;
  slug: string;
}

const ROLES: RolePreset[] = [
  {
    id: "software",
    name: "Software & Tech",
    icon: Code2,
    ceiling: "₹75,00,000 / year",
    profitRatio: "50% Deemed Profit",
    auditExempt: "Zero Books Audit (Sec 44AA)",
    advice: "Software engineers & dev consultants declare flat 50% profit. Declare zero expense bills legally with ITR-4 filing.",
    slug: "/tools/44ada-calculator",
  },
  {
    id: "video",
    name: "Video & Motion",
    icon: Video,
    ceiling: "₹75,00,000 / year",
    profitRatio: "50% Deemed Profit",
    auditExempt: "Zero Books Audit (Sec 44AA)",
    advice: "Video editors & 3D artists billing foreign studios file under 44ADA + Form RFD-11 LUT for zero 18% IGST on USD payouts.",
    slug: "/guides/renew-gst-lut-online",
  },
  {
    id: "design",
    name: "Design & Product",
    icon: Palette,
    ceiling: "₹75,00,000 / year",
    profitRatio: "50% Deemed Profit",
    auditExempt: "Zero Books Audit (Sec 44AA)",
    advice: "UI/UX & brand designers qualify as specified technical consultants. Reclaim excess 10% client TDS credits in your annual ITR.",
    slug: "/guides/claim-tds-refund-freelancers",
  },
];

interface ExportShield {
  id: string;
  title: string;
  ruleCitation: string;
  referenceDoc: string;
  arnStatus: string;
  summary: string;
}

const EXPORT_SHIELDS: ExportShield[] = [
  {
    id: "lut",
    title: "GST LUT (Form RFD-11)",
    ruleCitation: "CGST Rule 96A · Zero-Rated Export",
    referenceDoc: "Letter of Undertaking for Export of Services",
    arnStatus: "ARN: AA270325019827Z · ACCEPTED",
    summary: "Export digital services to US, UK, or EU clients without paying 18% IGST upfront. Zero working capital locked in refunds.",
  },
  {
    id: "firc",
    title: "RBI Purpose Code (P0802)",
    ruleCitation: "FEMA Master Directions · Software Exports",
    referenceDoc: "Bank Inward Remittance Advice (e-FIRA)",
    arnStatus: "Bank SWIFT Purpose: P0802 · VALIDATED",
    summary: "Official documentary evidence that foreign currency entered India for software, video, or digital consulting services.",
  },
  {
    id: "tds",
    title: "Section 194J TDS Credit",
    ruleCitation: "Income Tax Act § 194J & 26AS Audit",
    referenceDoc: "Annual Information Statement (AIS)",
    arnStatus: "AIS / 26AS Reconciliation: MATCHED",
    summary: "Reconcile domestic client deductions (10% vs 2%). Automatically claim excess deducted TDS as a direct cash refund in your ITR.",
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
        {/* ── CARD 1: Statutory Scheme Scanner (Editorial Memo) ── */}
        <div className="workflow-card">
          <div className="card-top-header">
            <span className="step-numeral">01</span>
            <div className="step-tag-block">
              <span className="statute-label">INCOME TAX ACT · SECTION 44ADA</span>
              <h3 className="card-editorial-title">Check Presumptive Eligibility</h3>
            </div>
          </div>

          <p className="card-editorial-desc">
            Verify whether your freelancing profession qualifies for the 50% deemed profit regime
            and zero-account maintenance rules.
          </p>

          {/* Clean Editorial Role Tabs */}
          <div className="editorial-tabs-row">
            {ROLES.map((role) => {
              const Icon = role.icon;
              const isSelected = activeRole.id === role.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setActiveRole(role)}
                  className={`editorial-tab ${isSelected ? "selected" : ""}`}
                >
                  <Icon size={13} />
                  <span>{role.name}</span>
                </button>
              );
            })}
          </div>

          {/* Memo Document Body */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="editorial-memo-sheet"
            >
              <div className="memo-line-item">
                <span className="memo-key">Turnover Ceiling</span>
                <strong className="memo-value">{activeRole.ceiling}</strong>
              </div>
              <div className="memo-line-item">
                <span className="memo-key">Deemed Net Profit</span>
                <strong className="memo-value text-emerald">{activeRole.profitRatio}</strong>
              </div>
              <div className="memo-line-item">
                <span className="memo-key">Books of Accounts</span>
                <span className="memo-badge">{activeRole.auditExempt}</span>
              </div>

              <div className="memo-verdict-box">
                <CheckCircle size={14} className="verdict-icon" />
                <p>{activeRole.advice}</p>
              </div>

              <Link href={activeRole.slug} className="memo-action-link">
                <span>View Section 44ADA Filing Guide</span>
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── CARD 2: Zero-Rated Export Clearance (Official Certificate) ── */}
        <div className="workflow-card">
          <div className="card-top-header">
            <span className="step-numeral">02</span>
            <div className="step-tag-block">
              <span className="statute-label">CGST RULE 96A · EXPORT OF SERVICES</span>
              <h3 className="card-editorial-title">Zero-Rate Foreign Payouts</h3>
            </div>
          </div>

          <p className="card-editorial-desc">
            File annual Form RFD-11 LUT to legally invoice foreign clients without 18% IGST and link
            RBI purpose codes on Wise or Stripe payouts.
          </p>

          {/* Interactive Shield Navigation */}
          <div className="editorial-tabs-row">
            {EXPORT_SHIELDS.map((sh) => (
              <button
                key={sh.id}
                type="button"
                onClick={() => setActiveShield(sh)}
                className={`editorial-tab ${activeShield.id === sh.id ? "selected" : ""}`}
              >
                <span>{sh.title.split(" (")[0]}</span>
              </button>
            ))}
          </div>

          {/* Official Document Sheet */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeShield.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="editorial-memo-sheet certificate"
            >
              <div className="certificate-header">
                <div className="certificate-seal">
                  <Shield size={13} />
                </div>
                <div>
                  <span className="cert-heading">{activeShield.ruleCitation}</span>
                  <small className="cert-sub">{activeShield.referenceDoc}</small>
                </div>
              </div>

              <div className="arn-status-badge">
                <span>{activeShield.arnStatus}</span>
              </div>

              <p className="cert-summary-text">{activeShield.summary}</p>

              <div className="cert-footer-row">
                <button
                  type="button"
                  onClick={handleCopyLegend}
                  className="cert-copy-btn"
                  title="Copy official CGST Rule 96A invoice legend for foreign clients"
                >
                  {hasCopiedLegend ? <Check size={12} color="#123d34" /> : <Copy size={12} />}
                  <span>{hasCopiedLegend ? "Legend Copied to Clipboard" : "Copy LUT Invoice Disclaimer"}</span>
                </button>

                <Link href="/guides/renew-gst-lut-online" className="cert-guide-link">
                  LUT Guide <ArrowUpRight size={12} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── CARD 3: Tax Computation Dossier (CA-Grade Schedule) ── */}
        <div className="workflow-card">
          <div className="card-top-header">
            <span className="step-numeral">03</span>
            <div className="step-tag-block">
              <span className="statute-label">ITR-4 SUGAM · AY 2025-26</span>
              <h3 className="card-editorial-title">Compute &amp; Plan Advance Tax</h3>
            </div>
          </div>

          <p className="card-editorial-desc">
            Calculate your net tax under Section 115BAC (New Regime) and pay your single March 15th
            advance tax installment without quarterly penalties.
          </p>

          {/* CA Computation Schedule */}
          <div className="editorial-memo-sheet computation">
            <div className="computation-table">
              <div className="comp-row">
                <span>Illustrative Gross Turnover</span>
                <strong>₹24,00,000</strong>
              </div>
              <div className="comp-row">
                <span>44ADA Deemed Taxable Profit (50%)</span>
                <strong className="text-emerald">₹12,00,000</strong>
              </div>
              <div className="comp-row">
                <span>New Regime Tax (AY 2025-26)</span>
                <strong>₹52,000</strong>
              </div>
              <div className="comp-row strike">
                <span>Old Regular Regime (ITR-3)</span>
                <span className="old-tax">₹1,35,200</span>
              </div>
              <div className="comp-row total-saving">
                <span>Net Legally Saved via 44ADA</span>
                <span className="saving-badge">₹83,200 Saved</span>
              </div>
            </div>

            <div className="advance-tax-note">
              <strong>Single March 15 Advance Tax:</strong> Section 44ADA professionals pay 100% advance tax
              by March 15th — exempt from Sections 234B &amp; 234C quarterly interest.
            </div>

            <Link href="/tools/44ada-calculator" className="comp-cta-btn">
              <Calculator size={14} />
              <span>Launch Full 44ADA Calculator</span>
              <ArrowRight size={13} style={{ marginLeft: "auto" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
