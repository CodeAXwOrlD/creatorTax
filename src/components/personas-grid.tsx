"use client";

import { useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Code2,
  Video,
  Palette,
  PenTool,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Calculator,
  FileCheck,
  AlertTriangle,
} from "lucide-react";

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
  }[];
  founderTip: string;
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
    tagline: "Remote fullstack, backend, DevOps & AI contractors billing global clients.",
    icon: Code2,
    statuteCitation: "INCOME TAX ACT § 44ADA · TECHNICAL CONSULTANCY",
    professionClass: "Information Technology & Technical Advisory (§ 44AA)",
    turnoverLimit: "₹75,00,000 / year (Non-Cash Receipts)",
    deemedProfitRatio: "50% Deemed Taxable Profit",
    booksRule: "Exempt from Books of Accounts (§ 44AA)",
    auditRule: "Exempt from Tax Audit (§ 44AB)",
    platforms: ["Upwork", "Deel", "Toptal", "US/EU Direct Wire", "Stripe"],
    sampleGross: "₹28,00,000",
    sampleProfit: "₹14,00,000",
    regularTax: "₹3,56,200",
    presumptiveTax: "₹83,200",
    savedTax: "₹2,73,000 Saved",
    savingsPercentage: "76% Tax Reduction",
    effectiveRate: "2.97% Effective Tax Rate",
    advanceTaxRule: "Single 100% payment by March 15th · Zero quarterly 234C interest penalty",
    documents: [
      {
        title: "GST Form RFD-11 (LUT)",
        code: "Rule 96A",
        desc: "Zero-rate export of software services without 18% IGST upfront",
      },
      {
        title: "SWIFT Purpose Code P0802",
        code: "RBI FEMA",
        desc: "Software consultancy inward remittance certification (e-FIRA)",
      },
      {
        title: "Form 26AS / AIS Reconcile",
        code: "Section 194J",
        desc: "Offset domestic 10% TDS deductions against final tax payable",
      },
    ],
    founderTip:
      "Never let an accountant file ITR-3 with arbitrary hardware receipts if your digital revenue is under ₹75 Lakh. Section 44ADA gives you an unchallenged, statutory 50% profit declaration with zero receipt audits.",
    primaryAction: {
      label: "Simulate Software Dev 44ADA Tax",
      href: "/tools/44ada-calculator",
    },
    guideAction: {
      label: "Read 44ADA Presumptive Guide",
      href: "/guides/section-44ada-presumptive-tax-guide",
    },
  },
  {
    id: "video",
    name: "Video & Motion",
    tagline: "YouTube editors, 3D artists, colorists & motion designers with foreign studios.",
    icon: Video,
    statuteCitation: "INCOME TAX ACT § 44ADA & CGST RULE 96A",
    professionClass: "Film Artist & Creative Technical Production (§ 44AA)",
    turnoverLimit: "₹75,00,000 / year (Digital Transfers)",
    deemedProfitRatio: "50% Deemed Taxable Profit",
    booksRule: "Zero expense bills or depreciation ledgers needed",
    auditRule: "Exempt from Section 44AB Tax Audit",
    platforms: ["YouTube Creators", "US Agencies", "Post-Houses", "Wise", "PayPal"],
    sampleGross: "₹22,00,000",
    sampleProfit: "₹11,00,000",
    regularTax: "₹2,42,000",
    presumptiveTax: "₹52,000",
    savedTax: "₹1,90,000 Saved",
    savingsPercentage: "78% Tax Reduction",
    effectiveRate: "2.36% Effective Tax Rate",
    advanceTaxRule: "Single March 15 payment · No penalties for skipping June/Sept/Dec installments",
    documents: [
      {
        title: "Annual GST LUT Renewal",
        code: "RFD-11",
        desc: "Protect international video editing contracts from 18% IGST leakage",
      },
      {
        title: "Wise / PayPal e-FIRA",
        code: "P0802 / P0807",
        desc: "Non-negotiable documentary proof for tax authorities & GST audits",
      },
      {
        title: "Hardware Depreciation Check",
        code: "Sec 32 vs 44ADA",
        desc: "44ADA beats 40% computer depreciation unless annual gear costs exceed 50%",
      },
    ],
    founderTip:
      "High workstation costs tempt editors to file regular ITR-3. But unless you spend more than 50% of your gross billing on gear and studio rent every single year, 44ADA saves more tax and shields you from scrutiny.",
    primaryAction: {
      label: "Calculate Video Editor Tax",
      href: "/tools/44ada-calculator",
    },
    guideAction: {
      label: "Download Wise/PayPal e-FIRA",
      href: "/guides/paypal-wise-stripe-firc-guide",
    },
  },
  {
    id: "design",
    name: "Product & UI/UX",
    tagline: "UI/UX leads, branding designers & design system consultants on retainer contracts.",
    icon: Palette,
    statuteCitation: "INCOME TAX ACT § 44ADA · TECHNICAL INTERIOR/DESIGN",
    professionClass: "Authorized Design & Technical Consultancy (§ 44AA)",
    turnoverLimit: "₹75,00,000 / year (Electronic Clearing)",
    deemedProfitRatio: "50% Deemed Taxable Profit",
    booksRule: "No balance sheets, P&L or journal ledgers",
    auditRule: "Exempt from Section 44AB Tax Audit",
    platforms: ["Figma Retainers", "Contra", "Dribbble Pro", "Direct Foreign B2B"],
    sampleGross: "₹20,00,000",
    sampleProfit: "₹10,00,000",
    regularTax: "₹1,95,000",
    presumptiveTax: "₹41,600",
    savedTax: "₹1,53,400 Saved",
    savingsPercentage: "79% Tax Reduction",
    effectiveRate: "2.08% Effective Tax Rate",
    advanceTaxRule: "Pay by March 15th · Reclaim excess domestic TDS as direct cash refund",
    documents: [
      {
        title: "Section 194J TDS Reclaim",
        code: "ITR-4 Refund",
        desc: "Recover excess 10% domestic client TDS deductions into your bank account",
      },
      {
        title: "GST Export LUT (RFD-11)",
        code: "Zero-Rated",
        desc: "Zero IGST on international design deliverables and Figma retainers",
      },
      {
        title: "Bank Inward Remittance",
        code: "FIRC / BRC",
        desc: "Proof of foreign inward currency for digital product deliverables",
      },
    ],
    founderTip:
      "Domestic clients routinely deduct 10% TDS under Section 194J. Under 44ADA New Regime, your actual tax rate is often only 2-3%. The remaining 7-8% comes back directly as an income tax refund upon filing.",
    primaryAction: {
      label: "Simulate Designer Tax & Refund",
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
    tagline: "YouTubers, Substack writers & digital media creators with sponsorship & affiliate income.",
    icon: PenTool,
    statuteCitation: "SECTION 44ADA / 44AD & SECTION 194R REGIME",
    professionClass: "Commercial Media & Independent Journalism Distribution",
    turnoverLimit: "₹75,00,000 (44ADA) / ₹3,00,00,000 (44AD)",
    deemedProfitRatio: "50% Deemed Profit (44ADA)",
    booksRule: "Simplified presumptive return under ITR-4 Sugam",
    auditRule: "Zero tax audit within statutory digital limits",
    platforms: ["Google AdSense", "Brand Deals", "Substack", "Affiliate Networks"],
    sampleGross: "₹18,00,000",
    sampleProfit: "₹9,00,000",
    regularTax: "₹1,54,000",
    presumptiveTax: "₹31,200",
    savedTax: "₹1,22,800 Saved",
    savingsPercentage: "80% Tax Reduction",
    effectiveRate: "1.73% Effective Tax Rate",
    advanceTaxRule: "Single March 15 installment · Maintain separate ledger for Section 194R gifts",
    documents: [
      {
        title: "Section 194R Barter Audit",
        code: "194R Compliance",
        desc: "Account for gifted review hardware, flights, and brand barters above ₹20K",
      },
      {
        title: "GST Registration (>₹20L)",
        code: "Domestic GST",
        desc: "Segregate zero-rated foreign AdSense from domestic brand sponsorship invoices",
      },
      {
        title: "Google AdSense FIRC",
        code: "Foreign SWIFT",
        desc: "Bank inward remittance documentation for Google Ireland/Singapore payouts",
      },
    ],
    founderTip:
      "AdSense remittances from Google Ireland count as export of services (0% GST with LUT), whereas domestic brand integration deals count toward the ₹20 Lakh Indian GST registration threshold.",
    primaryAction: {
      label: "Calculate Creator Tax & 194R",
      href: "/tools/44ada-calculator",
    },
    guideAction: {
      label: "Zero-Rate AdSense via LUT",
      href: "/guides/renew-gst-lut-online",
    },
  },
  {
    id: "consultants",
    name: "Tech & Security Advisory",
    tagline: "DevOps consultants, AI engineers, cybersecurity auditors on high-value B2B contracts.",
    icon: Cpu,
    statuteCitation: "INCOME TAX ACT § 44ADA & § 211(1) PROVISO",
    professionClass: "Engineering, Security & Strategic Technical Consultancy",
    turnoverLimit: "₹75,00,000 / year (Digital Receipts)",
    deemedProfitRatio: "50% Deemed Taxable Profit",
    booksRule: "Statutorily exempt from Section 44AA books maintenance",
    auditRule: "Zero audit liability under Section 44AB",
    platforms: ["Direct B2B Retainers", "Hourly Advisory", "US/EU Entities", "Deel"],
    sampleGross: "₹36,00,000",
    sampleProfit: "₹18,00,000",
    regularTax: "₹5,85,000",
    presumptiveTax: "₹1,66,400",
    savedTax: "₹4,18,600 Saved",
    savingsPercentage: "71% Tax Reduction",
    effectiveRate: "4.62% Effective Tax Rate",
    advanceTaxRule: "100% advance tax due March 15th · Exempt from quarterly advance tax schedules",
    documents: [
      {
        title: "Single March 15 Advance Tax",
        code: "Section 211",
        desc: "Statutorily exempt from June, September, and December installment schedules",
      },
      {
        title: "B2B Contractor Agreements",
        code: "FEMA Proof",
        desc: "Clear intellectual property and independent contractor relationship clauses",
      },
      {
        title: "Zero-Rated Form RFD-11",
        code: "Rule 96A",
        desc: "Eliminates 18% IGST working capital lockup on foreign consulting fees",
      },
    ],
    founderTip:
      "Unlike regular businesses that must pay advance tax in 4 quarterly installments, Section 44ADA professionals are legally exempted by statute to pay 100% in a single tranche on or before March 15th.",
    primaryAction: {
      label: "Simulate Consultant Advance Tax",
      href: "/tools/44ada-calculator",
    },
    guideAction: {
      label: "View Advance Tax Rules",
      href: "/guides/advance-tax-deadlines-penalties",
    },
  },
];

export function PersonasGrid() {
  const [activePersona, setActivePersona] = useState<PersonaProfile>(PERSONA_PROFILES[0]);

  return (
    <div className="personas-dossier-wrapper" id="freelancer-matrix">
      {/* ── Category Selection Toolbar (Refined Editorial Pills) ── */}
      <div
        className="persona-toolbar"
        role="tablist"
        aria-label="Freelancer tax disciplines"
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

      {/* ── Active Discipline Master Dossier (3-Sheet Coordinated Blueprint) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePersona.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="persona-dossier-grid"
        >
          {/* Card 01: Statutory Scope & Eligibility */}
          <div className="workflow-card persona-dossier-card">
            <div className="card-top-header">
              <span className="step-numeral">01</span>
              <div className="step-tag-block">
                <span className="statute-label">{activePersona.statuteCitation}</span>
                <h3 className="card-editorial-title">Statutory Qualification</h3>
              </div>
            </div>

            <p className="card-editorial-desc">{activePersona.tagline}</p>

            {/* Invoicing Platform Tags */}
            <div className="persona-platform-wrap">
              <span className="platform-label">Verified Invoicing Channels:</span>
              <div className="platform-tags">
                {activePersona.platforms.map((plat) => (
                  <span key={plat} className="platform-tag">
                    {plat}
                  </span>
                ))}
              </div>
            </div>

            {/* Statutory Memo Schedule */}
            <div className="editorial-memo-sheet">
              <div className="memo-line-item">
                <span className="memo-key">Turnover Ceiling</span>
                <strong className="memo-val">{activePersona.turnoverLimit}</strong>
              </div>
              <div className="memo-line-item">
                <span className="memo-key">Deemed Net Profit</span>
                <strong className="memo-val text-emerald">{activePersona.deemedProfitRatio}</strong>
              </div>
              <div className="memo-line-item">
                <span className="memo-key">Books of Accounts</span>
                <strong className="memo-val">{activePersona.booksRule}</strong>
              </div>
              <div className="memo-line-item">
                <span className="memo-key">Tax Audit Status</span>
                <span className="memo-val badge">{activePersona.auditRule}</span>
              </div>

              {/* Founder Context Note */}
              <div className="persona-founder-callout">
                <CheckCircle2 size={15} className="founder-callout-icon" />
                <p>{activePersona.founderTip}</p>
              </div>
            </div>
          </div>

          {/* Card 02: AY 2025-26 Tax Comparison Schedule */}
          <div className="workflow-card persona-dossier-card">
            <div className="card-top-header">
              <span className="step-numeral">02</span>
              <div className="step-tag-block">
                <span className="statute-label">AY 2025-26 TAX COMPARISON LEDGER</span>
                <h3 className="card-editorial-title">Real Savings Schedule</h3>
              </div>
            </div>

            <p className="card-editorial-desc">
              Compare regular ITR-3 business taxation against presumptive 44ADA for {activePersona.name}.
            </p>

            <div className="editorial-memo-sheet computation">
              <div className="computation-table">
                <div className="comp-row">
                  <span>Illustrative Annual Gross</span>
                  <strong>{activePersona.sampleGross}</strong>
                </div>
                <div className="comp-row">
                  <span>44ADA Deemed Taxable Profit (50%)</span>
                  <strong className="text-emerald">{activePersona.sampleProfit}</strong>
                </div>
                <div className="comp-row strike">
                  <span>Regular Business Tax (ITR-3)</span>
                  <strong className="old-tax">{activePersona.regularTax}</strong>
                </div>
                <div className="comp-row">
                  <span>Tax Under Sec 44ADA (New Regime)</span>
                  <strong className="text-emerald">{activePersona.presumptiveTax}</strong>
                </div>
                <div className="comp-row total-saving">
                  <span>Net Legally Saved</span>
                  <span className="saving-badge">{activePersona.savedTax}</span>
                </div>
              </div>

              {/* Advance Tax Proviso */}
              <div className="advance-tax-note">
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <Sparkles size={13} color="#15803d" />
                  <strong>Advance Tax Single Payment Exemption</strong>
                </div>
                <span>{activePersona.advanceTaxRule}</span>
              </div>

              {/* Effective Rate Pill */}
              <div className="effective-rate-pill">
                <span>{activePersona.savingsPercentage}</span>
                <span className="rate-divider">·</span>
                <strong className="text-emerald">{activePersona.effectiveRate}</strong>
              </div>
            </div>
          </div>

          {/* Card 03: Compliance Shield & Action Launchpad */}
          <div className="workflow-card persona-dossier-card">
            <div className="card-top-header">
              <span className="step-numeral">03</span>
              <div className="step-tag-block">
                <span className="statute-label">MANDATORY REGULATORY SAFEGUARDS</span>
                <h3 className="card-editorial-title">Compliance Shield</h3>
              </div>
            </div>

            <p className="card-editorial-desc">
              Essential statutory documents required to protect payouts from GST demand notices.
            </p>

            <div className="editorial-memo-sheet certificate">
              {/* Document Badges */}
              <div className="persona-docs-list">
                {activePersona.documents.map((doc) => (
                  <div key={doc.title} className="persona-doc-item">
                    <div className="doc-icon-seal">
                      <FileCheck size={14} />
                    </div>
                    <div className="doc-meta">
                      <div className="doc-title-row">
                        <strong className="doc-title">{doc.title}</strong>
                        <span className="doc-code-badge">{doc.code}</span>
                      </div>
                      <span className="doc-desc">{doc.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Audit Warning */}
              <div className="persona-audit-warning">
                <AlertTriangle size={14} className="warning-icon" />
                <span>
                  Always retain e-FIRAs with authorized purpose codes to satisfy RBI FEMA Master Directions.
                </span>
              </div>

              {/* High-Impact Actions */}
              <div className="persona-actions-stack">
                <Link href={activePersona.primaryAction.href} className="comp-cta-btn">
                  <Calculator size={15} />
                  <span>{activePersona.primaryAction.label}</span>
                  <ArrowRight size={14} style={{ marginLeft: "auto" }} />
                </Link>

                <Link href={activePersona.guideAction.href} className="cert-guide-link-btn">
                  <ShieldCheck size={14} />
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
