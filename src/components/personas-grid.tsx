"use client";

import { useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
} from "lucide-react";
import {
  PlatformBadge,
  GstCertificateIcon,
  SwiftRemittanceIcon,
  TaxReceiptSlipIcon,
  AdvanceTaxCalendarIcon,
  LegalStatuteBookIcon,
  FinancialCalcIcon,
  TerminalDevIcon,
  FilmVideoIcon,
  VectorDesignIcon,
  BroadcastMediaIcon,
  SecurityServerIcon,
} from "./brand-and-doc-icons";

export interface PersonaProfile {
  id: string;
  name: string;
  tagline: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  statuteCitation: string;
  professionClass: string;
  turnoverLimit: string;
  deemedProfitRatio: string;
  booksRule: string;
  auditRule: string;
  platforms: string[];
  sampleGross: string;
  sampleProfit: string;
  regularTax: string;
  presumptiveTax: string;
  savedTax: string;
  savingsPercentage: string;
  effectiveRate: string;
  advanceTaxRule: string;
  documents: {
    title: string;
    code: string;
    desc: string;
    iconType: "gst" | "swift" | "tds";
  }[];
  caTip: string;
  primaryAction: {
    label: string;
    href: string;
  };
  guideAction: {
    label: string;
    href: string;
  };
}

export const PERSONA_PROFILES: PersonaProfile[] = [
  {
    id: "software",
    name: "Software & Cloud",
    tagline: "Remote fullstack, backend, DevOps & AI engineers billing overseas companies.",
    icon: TerminalDevIcon,
    statuteCitation: "INCOME TAX ACT § 44ADA · TECHNICAL CONSULTANCY",
    professionClass: "Information Technology & Technical Advisory (§ 44AA)",
    turnoverLimit: "₹75,00,000 / year (via Online/Bank Receipts)",
    deemedProfitRatio: "50% Flat Deemed Profit",
    booksRule: "Exempt from maintaining P&L & Balance Sheet (§ 44AA)",
    auditRule: "Exempt from Chartered Accountant Tax Audit (§ 44AB)",
    platforms: ["Upwork", "Deel", "Toptal", "Direct Wire", "Stripe"],
    sampleGross: "₹28,00,000",
    sampleProfit: "₹14,00,000",
    regularTax: "₹3,56,200",
    presumptiveTax: "₹83,200",
    savedTax: "₹2,73,000 Saved",
    savingsPercentage: "76% Tax Reduction",
    effectiveRate: "2.97% Effective Rate",
    advanceTaxRule: "Single 100% payment by March 15th · Zero quarterly Section 234C interest penalties",
    documents: [
      {
        title: "GST Form RFD-11 (LUT)",
        code: "Rule 96A",
        desc: "Annual online filing on GST portal to export software services at 0% IGST without capital blockage",
        iconType: "gst",
      },
      {
        title: "Inward Remittance Advice (e-FIRA)",
        code: "RBI P0802",
        desc: "Statutory bank proof certifying foreign exchange received for software engineering services",
        iconType: "swift",
      },
      {
        title: "Form 26AS & AIS Reconciliation",
        code: "Section 194J",
        desc: "Offset domestic 10% TDS deductions against your final tax payable or claim direct bank refunds",
        iconType: "tds",
      },
    ],
    caTip:
      "Never let an accountant file regular ITR-3 with arbitrary hardware receipts if your digital revenue is under ₹75 Lakh. Section 44ADA provides an unchallenged statutory 50% profit declaration with zero book scrutiny.",
    primaryAction: {
      label: "Calculate Software Dev 44ADA Tax",
      href: "/tools/44ada-calculator",
    },
    guideAction: {
      label: "Read Section 44ADA Guide",
      href: "/guides/section-44ada-presumptive-tax-guide",
    },
  },
  {
    id: "video",
    name: "Video & Motion",
    tagline: "YouTube editors, 3D artists, colorists & motion designers with foreign studios.",
    icon: FilmVideoIcon,
    statuteCitation: "INCOME TAX ACT § 44ADA & CGST RULE 96A",
    professionClass: "Film Artist & Creative Technical Production (§ 44AA)",
    turnoverLimit: "₹75,00,000 / year (via Digital Transfers)",
    deemedProfitRatio: "50% Flat Deemed Profit",
    booksRule: "Zero expense receipts or depreciation registers required",
    auditRule: "Exempt from Section 44AB Tax Audit",
    platforms: ["YouTube", "US Studios", "Wise", "PayPal", "Direct Wire"],
    sampleGross: "₹22,00,000",
    sampleProfit: "₹11,00,000",
    regularTax: "₹2,42,000",
    presumptiveTax: "₹52,000",
    savedTax: "₹1,90,000 Saved",
    savingsPercentage: "78% Tax Reduction",
    effectiveRate: "2.36% Effective Rate",
    advanceTaxRule: "Single March 15 payment · No penalties for skipping June/September/December tranches",
    documents: [
      {
        title: "Annual GST LUT Renewal",
        code: "RFD-11",
        desc: "Protects international video editing contracts from 18% IGST upfront deduction",
        iconType: "gst",
      },
      {
        title: "Wise & PayPal e-FIRA Certificate",
        code: "P0802 / P0807",
        desc: "Non-negotiable documentary proof for tax officers & GST audit compliance",
        iconType: "swift",
      },
      {
        title: "Hardware Depreciation vs 44ADA",
        code: "Sec 32 Assessment",
        desc: "Section 44ADA yields higher post-tax savings unless annual gear costs exceed 50% of revenue",
        iconType: "tds",
      },
    ],
    caTip:
      "High workstation and GPU costs tempt editors to file regular ITR-3. But unless you spend more than 50% of your gross billing on hardware and studio rent every single year, Section 44ADA saves substantially more tax with zero audit exposure.",
    primaryAction: {
      label: "Calculate Video Editor Tax",
      href: "/tools/44ada-calculator",
    },
    guideAction: {
      label: "Download Wise & PayPal e-FIRA Guide",
      href: "/guides/paypal-wise-stripe-firc-guide",
    },
  },
  {
    id: "design",
    name: "Product & UI/UX",
    tagline: "UI/UX leads, branding designers & design system consultants on retainer contracts.",
    icon: VectorDesignIcon,
    statuteCitation: "INCOME TAX ACT § 44ADA · TECHNICAL INTERIOR/DESIGN",
    professionClass: "Authorized Design & Technical Consultancy (§ 44AA)",
    turnoverLimit: "₹75,00,000 / year (via Electronic Clearing)",
    deemedProfitRatio: "50% Flat Deemed Profit",
    booksRule: "No balance sheets, P&L statements or journal ledgers",
    auditRule: "Exempt from Section 44AB Tax Audit",
    platforms: ["Figma", "Stripe", "Direct Wire", "Upwork"],
    sampleGross: "₹20,00,000",
    sampleProfit: "₹10,00,000",
    regularTax: "₹1,95,000",
    presumptiveTax: "₹41,600",
    savedTax: "₹1,53,400 Saved",
    savingsPercentage: "79% Tax Reduction",
    effectiveRate: "2.08% Effective Rate",
    advanceTaxRule: "Pay by March 15th · Reclaim excess domestic TDS directly into bank account",
    documents: [
      {
        title: "Section 194J TDS Refund Claim",
        code: "ITR-4 Filing",
        desc: "Recover excess 10% domestic client TDS deductions back into your bank account as cash refund",
        iconType: "tds",
      },
      {
        title: "GST Export LUT (RFD-11)",
        code: "Zero-Rated",
        desc: "Zero IGST on international design deliverables, design sprints and Figma retainers",
        iconType: "gst",
      },
      {
        title: "Foreign Inward Remittance (FIRC)",
        code: "SWIFT Inward",
        desc: "Digital currency certificate verifying export of design services in convertible foreign exchange",
        iconType: "swift",
      },
    ],
    caTip:
      "Domestic Indian clients routinely deduct 10% TDS under Section 194J. Under 44ADA New Regime, your actual tax liability is often only 2-3%. The remaining 7-8% comes straight back to your bank account as an income tax refund upon filing.",
    primaryAction: {
      label: "Calculate Designer Tax & Refund",
      href: "/tools/44ada-calculator",
    },
    guideAction: {
      label: "Reclaim Excess TDS Guide",
      href: "/guides/claim-tds-refund-freelancers",
    },
  },
  {
    id: "creators",
    name: "Media & Creators",
    tagline: "YouTubers, newsletter writers & digital media creators with sponsorship & affiliate revenue.",
    icon: BroadcastMediaIcon,
    statuteCitation: "SECTION 44ADA / 44AD & SECTION 194R REGIME",
    professionClass: "Commercial Media & Independent Journalism Distribution",
    turnoverLimit: "₹75,00,000 (44ADA) / ₹3,00,00,000 (44AD)",
    deemedProfitRatio: "50% Deemed Profit (44ADA)",
    booksRule: "Simplified presumptive return under ITR-4 Sugam",
    auditRule: "Zero tax audit within statutory digital receipt limits",
    platforms: ["YouTube", "Substack", "Stripe", "Direct Wire"],
    sampleGross: "₹18,00,000",
    sampleProfit: "₹9,00,000",
    regularTax: "₹1,54,000",
    presumptiveTax: "₹31,200",
    savedTax: "₹1,22,800 Saved",
    savingsPercentage: "80% Tax Reduction",
    effectiveRate: "1.73% Effective Rate",
    advanceTaxRule: "Single March 15 installment · Maintain separate records for Section 194R brand barters",
    documents: [
      {
        title: "Section 194R Barter & Perk Record",
        code: "194R Compliance",
        desc: "Properly declare review phones, sponsor flights, and gifted brand hardware exceeding ₹20,000",
        iconType: "tds",
      },
      {
        title: "GST Registration (>₹20L Threshold)",
        code: "Domestic GST",
        desc: "Segregate zero-rated foreign AdSense revenue from domestic brand campaign invoices",
        iconType: "gst",
      },
      {
        title: "Google AdSense Remittance Advice",
        code: "Foreign SWIFT",
        desc: "Bank inward remittance advice for Google Ireland/Singapore payouts to retain 0% GST status",
        iconType: "swift",
      },
    ],
    caTip:
      "AdSense remittances from Google Ireland count as export of services (0% GST with LUT), whereas domestic brand integration deals count toward the ₹20 Lakh Indian GST registration threshold.",
    primaryAction: {
      label: "Calculate Creator Tax & 194R",
      href: "/tools/44ada-calculator",
    },
    guideAction: {
      label: "Renew GST LUT Online Guide",
      href: "/guides/renew-gst-lut-online",
    },
  },
  {
    id: "consultants",
    name: "Tech & Security Advisory",
    tagline: "DevOps consultants, AI specialists & cybersecurity auditors on high-value B2B contracts.",
    icon: SecurityServerIcon,
    statuteCitation: "INCOME TAX ACT § 44ADA & § 211(1) PROVISO",
    professionClass: "Engineering, Security & Strategic Technical Consultancy",
    turnoverLimit: "₹75,00,000 / year (via Digital Receipts)",
    deemedProfitRatio: "50% Flat Deemed Profit",
    booksRule: "Statutorily exempt from Section 44AA books maintenance",
    auditRule: "Zero audit liability under Section 44AB",
    platforms: ["Deel", "Direct Wire", "Toptal", "Stripe"],
    sampleGross: "₹36,00,000",
    sampleProfit: "₹18,00,000",
    regularTax: "₹5,85,000",
    presumptiveTax: "₹1,66,400",
    savedTax: "₹4,18,600 Saved",
    savingsPercentage: "71% Tax Reduction",
    effectiveRate: "4.62% Effective Rate",
    advanceTaxRule: "100% advance tax due on or before March 15th · Exempt from quarterly installment schedules",
    documents: [
      {
        title: "Single March 15 Advance Tax",
        code: "Section 211 Proviso",
        desc: "Statutory exemption from June, September, and December installment schedules",
        iconType: "tds",
      },
      {
        title: "B2B Contractor Agreements",
        code: "FEMA Verification",
        desc: "Explicit IP assignment and independent contractor clauses required for cross-border banking",
        iconType: "swift",
      },
      {
        title: "Zero-Rated Form RFD-11 LUT",
        code: "CGST Rule 96A",
        desc: "Completely eliminates 18% IGST lockup on foreign technical advisory fees",
        iconType: "gst",
      },
    ],
    caTip:
      "Unlike regular private companies that must pay advance tax in 4 quarterly tranches, Section 44ADA professionals are legally exempted by statute to pay 100% in a single tranche on or before March 15th.",
    primaryAction: {
      label: "Calculate Consultant Tax",
      href: "/tools/44ada-calculator",
    },
    guideAction: {
      label: "View Advance Tax Deadlines",
      href: "/guides/advance-tax-deadlines-penalties",
    },
  },
];

export function PersonasGrid() {
  const [activePersona, setActivePersona] = useState<PersonaProfile>(PERSONA_PROFILES[0]);

  return (
    <div className="personas-dossier-wrapper" id="freelancer-matrix">
      {/* ── Category Selection Toolbar (Authentic SVGs & Modern Pills) ── */}
      <div
        className="persona-toolbar"
        role="tablist"
        aria-label="Freelance tax professions"
      >
        {PERSONA_PROFILES.map((p) => {
          const Icon = p.icon;
          const isSelected = activePersona.id === p.id;

          return (
            <button
              key={p.id}
              role="tab"
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActivePersona(p)}
              className={`persona-tab-btn ${isSelected ? "active" : ""}`}
            >
              <div className="persona-tab-icon-wrap">
                <Icon size={16} />
              </div>
              <span className="persona-tab-name">{p.name}</span>
              <span className="persona-tab-tag">44ADA</span>
            </button>
          );
        })}
      </div>

      {/* ── Active Discipline Master Dossier (3-Card Blueprint) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePersona.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="persona-dossier-grid"
        >
          {/* Card 01: Statutory Scope & Eligibility */}
          <div className="workflow-card persona-dossier-card">
            <div className="card-top-header">
              <span className="step-numeral">01</span>
              <div className="step-tag-block">
                <span className="statute-label">{activePersona.statuteCitation}</span>
                <h3 className="card-editorial-title">Eligibility &amp; Scope</h3>
              </div>
            </div>

            <p className="card-editorial-desc">{activePersona.tagline}</p>

            {/* Invoicing Platform Tags with Authentic Brand Logos */}
            <div className="persona-platform-wrap">
              <span className="platform-label">Verified Invoicing Channels</span>
              <div className="platform-tags">
                {activePersona.platforms.map((plat) => (
                  <PlatformBadge key={plat} name={plat} />
                ))}
              </div>
            </div>

            {/* Statutory Memo Schedule */}
            <div className="editorial-memo-sheet">
              <div className="memo-line-item">
                <span className="memo-key">Gross Receipts Cap</span>
                <strong className="memo-val">{activePersona.turnoverLimit}</strong>
              </div>
              <div className="memo-line-item">
                <span className="memo-key">Flat Presumptive Profit</span>
                <strong className="memo-val text-emerald">{activePersona.deemedProfitRatio}</strong>
              </div>
              <div className="memo-line-item">
                <span className="memo-key">Books of Accounts (§ 44AA)</span>
                <strong className="memo-val">{activePersona.booksRule}</strong>
              </div>
              <div className="memo-line-item">
                <span className="memo-key">Tax Audit Status (§ 44AB)</span>
                <span className="memo-val badge">{activePersona.auditRule}</span>
              </div>

              {/* CA Advisory Context Note */}
              <div className="persona-founder-callout">
                <LegalStatuteBookIcon size={15} className="founder-callout-icon text-cobalt" />
                <p>{activePersona.caTip}</p>
              </div>
            </div>
          </div>

          {/* Card 02: AY 2025-26 Tax Comparison Schedule */}
          <div className="workflow-card persona-dossier-card">
            <div className="card-top-header">
              <span className="step-numeral">02</span>
              <div className="step-tag-block">
                <span className="statute-label">AY 2025-26 TAX COMPARISON</span>
                <h3 className="card-editorial-title">Section 44ADA vs ITR-3</h3>
              </div>
            </div>

            <p className="card-editorial-desc">
              Compare standard business taxation against presumptive 44ADA for {activePersona.name}.
            </p>

            {/* Direct Statutory Savings Hero Anchor */}
            <div className="persona-savings-hero-block">
              <div className="savings-hero-top">
                <span className="savings-hero-label">Direct Statutory Tax Saving</span>
                <span className="savings-hero-badge">{activePersona.savingsPercentage}</span>
              </div>
              <div className="savings-hero-amount-row">
                <span className="savings-hero-currency">₹</span>
                <span className="savings-hero-number">
                  {activePersona.savedTax.replace("₹", "").replace(" Saved", "")}
                </span>
                <span className="savings-hero-suffix">saved annually</span>
              </div>
              <div className="savings-hero-sub">
                Effective Tax Rate: <strong>{activePersona.effectiveRate}</strong> under Sec 44ADA
              </div>
            </div>

            {/* 3-Column Comparative Fintech Ledger Matrix */}
            <div className="fintech-comparison-ledger" role="table" aria-label="Tax Comparison Schedule">
              <div className="ledger-matrix-header" role="row">
                <span role="columnheader">Tax Parameter</span>
                <span role="columnheader" className="regular">Regular ITR-3</span>
                <span role="columnheader" className="presumptive">Sec 44ADA</span>
              </div>

              <div className="ledger-matrix-row" role="row">
                <span className="matrix-row-lbl">Gross Receipts</span>
                <span className="matrix-row-val">{activePersona.sampleGross}</span>
                <span className="matrix-row-val highlight">{activePersona.sampleGross}</span>
              </div>

              <div className="ledger-matrix-row" role="row">
                <span className="matrix-row-lbl">Taxable Profit Base</span>
                <span className="matrix-row-val strike-tax">100% Assessed</span>
                <span className="matrix-row-val highlight">
                  {activePersona.sampleProfit} <small>(50%)</small>
                </span>
              </div>

              <div className="ledger-matrix-row" role="row">
                <span className="matrix-row-lbl">Books of Accounts</span>
                <span className="matrix-row-val text-red">Mandatory P&amp;L</span>
                <span className="matrix-row-val highlight-badge">Exempt (§ 44AA)</span>
              </div>

              <div className="ledger-matrix-row matrix-total-row" role="row">
                <span className="matrix-row-lbl">Final Tax Payable</span>
                <span className="matrix-row-val strike-tax">{activePersona.regularTax}</span>
                <span className="matrix-row-val final-tax">{activePersona.presumptiveTax}</span>
              </div>
            </div>

            {/* Advance Tax Proviso - Real Calendar Icon (No AI Sparkles) */}
            <div className="advance-tax-note">
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
                <AdvanceTaxCalendarIcon size={14} className="text-emerald" />
                <strong>Advance Tax: Single March 15th Deadline</strong>
              </div>
              <span>{activePersona.advanceTaxRule}</span>
            </div>
          </div>

          {/* Card 03: Compliance Shield & Action Launchpad */}
          <div className="workflow-card persona-dossier-card">
            <div className="card-top-header">
              <span className="step-numeral">03</span>
              <div className="step-tag-block">
                <span className="statute-label">MANDATORY REGULATORY SAFEGUARDS</span>
                <h3 className="card-editorial-title">Required Documents</h3>
              </div>
            </div>

            <p className="card-editorial-desc">
              Essential compliance paperwork required to retain 0% GST export status and claim TDS credits.
            </p>

            <div className="editorial-memo-sheet certificate">
              {/* Document Badges with Official Distinct SVGs */}
              <div className="persona-docs-list">
                {activePersona.documents.map((doc) => {
                  const renderDocIcon = () => {
                    if (doc.iconType === "gst") return <GstCertificateIcon size={15} />;
                    if (doc.iconType === "swift") return <SwiftRemittanceIcon size={15} />;
                    return <TaxReceiptSlipIcon size={15} />;
                  };

                  return (
                    <div key={doc.title} className="persona-doc-item">
                      <div className="doc-icon-seal">
                        {renderDocIcon()}
                      </div>
                      <div className="doc-meta">
                        <div className="doc-title-row">
                          <strong className="doc-title">{doc.title}</strong>
                          <span className="doc-code-badge">{doc.code}</span>
                        </div>
                        <span className="doc-desc">{doc.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* FEMA Compliance Notice */}
              <div className="persona-audit-warning">
                <AlertTriangle size={14} className="warning-icon" />
                <span>
                  Retain digital copies of e-FIRAs with authorized RBI purpose codes for 6 years to satisfy GST audit inquiries.
                </span>
              </div>

              {/* High-Impact Actions */}
              <div className="persona-actions-stack">
                <Link href={activePersona.primaryAction.href} className="comp-cta-btn">
                  <FinancialCalcIcon size={15} />
                  <span>{activePersona.primaryAction.label}</span>
                  <ArrowRight size={14} style={{ marginLeft: "auto" }} />
                </Link>

                <Link href={activePersona.guideAction.href} className="cert-guide-link-btn">
                  <LegalStatuteBookIcon size={14} />
                  <span>{activePersona.guideAction.label}</span>
                  <ArrowUpRight size={13} style={{ marginLeft: "auto" }} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Quick Comparative Benchmark Strip ── */}
      <div className="persona-benchmark-strip">
        <div className="benchmark-title-col">
          <span className="benchmark-eyebrow">At-A-Glance Benchmark</span>
          <strong>All 5 Freelance Disciplines Compared</strong>
        </div>

        <div className="benchmark-items-grid">
          {PERSONA_PROFILES.map((p) => {
            const isCurrent = p.id === activePersona.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePersona(p)}
                className={`benchmark-cell-btn ${isCurrent ? "current" : ""}`}
              >
                <div className="bench-role-line">
                  <span className="bench-role-name">{p.name.split(" ")[0]}</span>
                  {isCurrent && <span className="bench-dot" />}
                </div>
                <div className="bench-numbers">
                  <span className="bench-gross">{p.sampleGross}</span>
                  <span className="bench-saving">{p.savedTax}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
