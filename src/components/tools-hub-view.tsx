"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  FileText,
  Mail,
  ShieldCheck,
  Globe2,
  CalendarDays,
  FileCheck2,
  Copy,
  Check,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Percent,
  Download
} from "lucide-react";

type TabCategory = "all" | "calculators" | "templates" | "blueprints";

interface TemplateItem {
  id: string;
  title: string;
  badge: string;
  category: "templates" | "blueprints";
  statute: string;
  description: string;
  subject?: string;
  content: string;
  tip: string;
}

const TEMPLATES: TemplateItem[] = [
  {
    id: "tds-dispute",
    title: "Section 194J 10% Erroneous TDS Dispute Letter",
    badge: "Most Used",
    category: "templates",
    statute: "IT Act § 194J(1)(ba) · 2% vs 10%",
    description: "Send to Indian clients who mistakenly deduct 10% TDS instead of 2% on technical/consulting services, unnecessarily locking your funds for over a year.",
    subject: "Request for Correction: TDS Deduction under Section 194J on Invoice [Invoice #XXXX]",
    content: `Dear Accounts & Finance Team,

I hope this email finds you well.

I am writing regarding the TDS deducted on Invoice [Invoice #XXXX] issued by [Your Full Name] (PAN: [Your PAN Number]).

Upon reviewing my Form 26AS, I noticed that TDS was deducted at 10% under Section 194J(1). As per Section 194J of the Income Tax Act, 1961, the 10% rate applies exclusively to specified professions (legal, medical, engineering, architectural, or accountancy) or technical services by audited corporate entities.

For technical consulting, software development, and digital services, Section 194J(1)(ba) explicitly clarifies that fees for technical services (FTS) attract a reduced TDS rate of 2%. Furthermore, if categorized as contractual services, Section 194C mandates 1% for individual consultants.

A 10% deduction creates an undue working capital lockup, as my final tax liability is assessed under Section 44ADA at an effective rate below 3%.

Could you kindly:
1. Revise the TDS return (Form 26Q) for the relevant quarter to correct the deduction rate to 2% (or 1% under 194C); OR
2. Adjust the excess deducted TDS in the forthcoming invoice cycle.

I have attached the original service agreement, invoice copy, and a copy of my PAN card for your reference.

Thank you for your prompt support.

Warm regards,
[Your Name]
Professional Consultant / Independent Contractor
PAN: [Your PAN Number]`,
    tip: "Send this within the same calendar quarter before the client's finance team submits Form 26Q to TRACES."
  },
  {
    id: "gst-lut-invoice",
    title: "Rule 46 Compliant Export of Services Invoice (LUT)",
    badge: "Statutory",
    category: "blueprints",
    statute: "CGST Rule 46 & Rule 96A · 0% IGST",
    description: "Standard invoice header declaration required on invoices issued to foreign clients (Upwork, Deel, Wise, US/EU clients) to legally zero-rate export of services without paying 18% IGST.",
    content: `[TAX INVOICE - EXPORT OF SERVICES UNDER LUT]

Invoice Number: INV-2025-[XXXX]
Invoice Date: [DD/MM/YYYY]
GSTIN of Supplier: [Your 15-digit GSTIN]
LUT ARN Number: [ADXXXXXXXXXXXXX] dated [DD/MM/YYYY]
Place of Supply: Outside India (Export of Services)

Supplier Details:
Name / Trade Name: [Your Registered Name]
Registered Address: [Your Full Address in India]
State & Code: [e.g. Maharashtra - 27]

Client Details (Recipient Outside India):
Client Legal Name: [Client Company / Client Name]
Overseas Address: [Client Global Address, City, Country]
Country: [e.g. United States / United Kingdom / Germany]

MANDATORY STATUTORY DECLARATION (Under Rule 96A of CGST Rules):
"SUPPLY MEANT FOR EXPORT OF SERVICES UNDER LETTER OF UNDERTAKING (LUT) WITHOUT PAYMENT OF INTEGRATED TAX (IGST)."

Description of Service: Software Engineering & Cloud Infrastructure Advisory
SAC Code: 998314 (Information Technology Consulting)
Total Remittance Value: $[Amount in USD/EUR]
RBI Purpose Code: P0802 (Software Consultancy & Implementation)
Inward Remittance Channel: Direct Wire / Wise / Stripe / Payoneer`,
    tip: "Display the exact statutory sentence in capital letters on every export invoice to avoid 18% GST audit penalties."
  },
  {
    id: "efira-rectification",
    title: "Bank Inward Remittance e-FIRA & Purpose Code Notice",
    badge: "Foreign Remittance",
    category: "templates",
    statute: "RBI Master Direction · Code P0802",
    description: "Formal letter to Authorized Dealer (AD) Banks to reclassify inward international remittances under correct purpose codes and issue formal electronic FIRAs.",
    subject: "Request for Issuance of e-FIRA & Purpose Code Verification for Inward Remittance [UTR #XXXX]",
    content: `To,
The Branch Manager / Foreign Exchange Operations Desk,
[Authorized Dealer Bank Name],
[Branch Address, City, State]

Subject: Request for Issuance of e-FIRA for Inward Remittance (Ref: [Transaction UTR/Reference #])

Dear Sir/Madam,

I maintain Current/Savings Account Number [Your Account Number] with your branch under the name of [Your Full Name / Business Name] (PAN: [Your PAN Number], GSTIN: [Your GSTIN]).

On [Date of Credit], I received a foreign inward remittance of [Foreign Currency Amount, e.g., USD 3,500] credited as INR [INR Amount Credited] via [Wise / Stripe / Direct SWIFT Wire] originating from [Client/Sender Name], located in [Client Country].

This remittance represents professional fees for the export of Information Technology consulting services, falling under RBI Purpose Code P0802 (Software Consultancy and Implementation).

To comply with statutory GST export audits under Rule 96A of the CGST Rules, 1961, and proof of convertible foreign exchange realisation, I require the formal Electronic Foreign Inward Remittance Advice (e-FIRA) or Inward Remittance Certificate.

Please find enclosed:
1. Inward Wire Credit Advice / Transaction Statement
2. Export Tax Invoice issued to the foreign client
3. Valid GST Letter of Undertaking (LUT) acknowledgement for FY 2024-25

Kindly verify the purpose code P0802 and issue the e-FIRA at your earliest convenience.

Thank you.

Yours faithfully,
[Your Signature / Name]
Mobile: [Your Mobile Number]
Email: [Your Email]`,
    tip: "Without an e-FIRA proving realization in foreign exchange, GST authorities may demand 18% IGST on export income."
  },
  {
    id: "freelance-msa",
    title: "Freelance MSA IP & Milestone Protection Clause",
    badge: "Contract",
    category: "templates",
    statute: "Indian Contract Act, 1872 · Section 44ADA",
    description: "Standard contract clauses establishing independent contractor status (essential for Section 44ADA eligibility) and withholding IP transfer until final milestone invoice is paid in full.",
    content: `STANDARD FREELANCE INDEPENDENT CONTRACTOR CLAUSES

1. INDEPENDENT CONTRACTOR STATUS & NO EMPLOYMENT:
"The Consultant is engaged strictly as an independent professional contractor under Section 44AA of the Indian Income Tax Act, 1961. Nothing in this Agreement creates any partnership, joint venture, employer-employee, or agency relationship between Client and Consultant. Consultant retains sole discretion over working hours, methods, and equipment used."

2. INTELLECTUAL PROPERTY TRANSFER UPON FULL PAYMENT:
"Notwithstanding any other provision herein, all right, title, and interest in and to any deliverables, source code, designs, or work product created by Consultant shall remain the exclusive intellectual property of Consultant UNTIL the Client has made full, unencumbered payment of all fees and invoiced amounts pertaining to such deliverables. Upon receipt of cleared funds in Consultant's designated bank account, title shall automatically transfer to Client."

3. TAXES & STATUTORY COMPLIANCE:
"Client shall make payments without any unagreed deductions. Where Indian withholding tax (TDS) applies by statute, Client shall deduct only at the applicable statutory rate under Section 194J(1)(ba) (2%) and issue Form 16A quarterly. For cross-border clients, fees are zero-rated under Consultant's GST LUT."

4. LIMITATION OF LIABILITY & GOVERNING JURISDICTION:
"Consultant's aggregate liability arising out of or related to this Agreement shall be limited to the total fees actually received by Consultant under the applicable Statement of Work in the preceding three (3) months. This Agreement shall be governed by the laws of India, subject to the jurisdiction of courts in [Your City, India]."`,
    tip: "Prevents clients from claiming ownership of deliverables if they cancel milestones or default on final payment."
  },
  {
    id: "non-pe-declaration",
    title: "Non-Permanent Establishment (Non-PE) Declaration",
    badge: "Cross-Border",
    category: "templates",
    statute: "DTAA Article 5 · US/EU/UK Clients",
    description: "Declaration sent to foreign clients who request tax withholding exemptions under Double Taxation Avoidance Agreements (DTAA) to prove you operate solely from India.",
    subject: "Self-Declaration of Non-Permanent Establishment (Non-PE) & Tax Residency Status",
    content: `SELF-DECLARATION OF NON-PERMANENT ESTABLISHMENT (NON-PE)
(For Foreign Clients under Article 5 of Double Tax Avoidance Agreement)

To:
[Client Corporation Name]
[Address, City, Country]

I, [Your Full Name], an Indian tax resident individual and independent professional (PAN: [Your PAN Number]), hereby solemnly declare and certify that:

1. TAX RESIDENCY:
I am a tax resident of the Republic of India under Section 6 of the Indian Income Tax Act, 1961, and do not qualify as a tax resident of [Client Country, e.g. United States / United Kingdom / Germany] for the financial year 2024-25.

2. NO PERMANENT ESTABLISHMENT:
I perform all professional and consultancy services remotely from my location in India. I do not maintain, operate, or have access to any fixed place of business, office, branch, agency, or Permanent Establishment (PE) within [Client Country] as defined under Article 5 of the applicable Double Taxation Avoidance Agreement (DTAA).

3. INDEPENDENT CAPACITY:
All services are rendered on a principal-to-principal basis as an independent consultant without dependent agency authority to enter into contracts on behalf of [Client Corporation].

4. WITHHOLDING TAX EXEMPTION:
In accordance with Article 7 (Business Profits) and Article 14/15 (Independent Personal Services) of the DTAA, the income derived from services rendered outside [Client Country] is taxable solely in India and is exempt from withholding tax in [Client Country].

Date: [DD/MM/YYYY]
Place: [Your City, India]

[Your Name / Digital Signature]
Registered Professional Consultant
PAN: [Your PAN Number]`,
    tip: "Foreign clients frequently request this declaration alongside Form W-8BEN to process payments without 30% withholding."
  }
];

const COMPLIANCE_TOOLS = [
  {
    title: "Section 44ADA Presumptive Calculator",
    category: "Financial Engine",
    badge: "AY 2025–26",
    statute: "IT Act § 44ADA · 50% Profit",
    desc: "Calculate presumptive profit (50%), compare New vs Old tax regimes for AY 2025-26, test the ₹75 Lakh digital turnover limit, and compute instant TDS refund credit.",
    href: "/tools/44ada-calculator",
    icon: Calculator,
    featured: true,
    highlights: ["50% Deemed Profit Rule", "₹75L Digital Ceiling Check", "Instant TDS Refund Estimator"]
  },
  {
    title: "GST LUT & Zero-Rating Verification",
    category: "Export Compliance",
    badge: "Rule 96A",
    statute: "Form RFD-11 · Export Rules",
    desc: "Verify whether your international freelance revenue qualifies as zero-rated export of service without paying 18% IGST upfront, and download filing checklists.",
    href: "/guides/renew-gst-lut-online",
    icon: ShieldCheck,
    highlights: ["Form RFD-11 Annual Renewal", "Zero-Rated IGST Exemption", "Export Criteria Audit"]
  },
  {
    title: "RBI Remittance Purpose Code Directory",
    category: "Foreign Exchange",
    badge: "RBI Codes",
    statute: "RBI Master Direction · e-FIRA",
    desc: "Look up correct RBI purpose codes (P0802, P1007, P0902) to ensure Wise, Stripe, and PayPal remittances receive legitimate electronic FIRAs for GST audits.",
    href: "/guides/paypal-wise-stripe-firc-guide",
    icon: Globe2,
    highlights: ["P0802 Software Consultancy", "P1007 Digital Media & Content", "Wise / Stripe FIRA Disposal"]
  },
  {
    title: "Advance Tax Calendar & Penalty Estimator",
    category: "Statutory Deadlines",
    badge: "March 15th",
    statute: "IT Act § 211, 234B & 234C",
    desc: "Avoid 1% monthly interest under Sections 234B and 234C. 44ADA filers enjoy a single-installment statutory deadline on or before March 15th.",
    href: "/guides/advance-tax-deadlines-penalties",
    icon: CalendarDays,
    highlights: ["Single Installment Exemption", "1% Monthly Interest Shield", "Q4 Advance Tax Planner"]
  },
  {
    title: "Freelancer Contract & Invoicing Checklist",
    category: "Contract Records",
    badge: "Rule 46",
    statute: "Rule 46 CGST · Section 44AA",
    desc: "Mandatory contract clauses, intellectual property transfer triggers upon payment, and statutory Rule 46 GST invoice declarations.",
    href: "/guides/freelancer-contract-tax-records",
    icon: FileCheck2,
    highlights: ["Mandatory Contract Clauses", "IP Assignment Protections", "Rule 46 Invoice Checks"]
  },
  {
    title: "New vs Old Regime Decision Engine",
    category: "Tax Strategy",
    badge: "Finance Act 2025",
    statute: "Section 115BAC · Slab Analysis",
    desc: "Compare net tax payable under the default New Regime (₹7 Lakh Section 87A rebate) versus the Old Regime with Chapter VI-A deductions (80C, 80D, NPS).",
    href: "/guides/new-vs-old-tax-regime-freelancers",
    icon: Percent,
    highlights: ["₹7L Zero-Tax Slabs", "Chapter VI-A Breakeven Test", "Optimal Regime Choice"]
  }
];

export function ToolsHubView() {
  const [activeTab, setActiveTab] = useState<TabCategory>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedTemplateId, setExpandedTemplateId] = useState<string | null>("tds-dispute");

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      // fallback
    }
  };

  const handleDownloadTxt = (title: string, text: string) => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const showTemplates = activeTab === "all" || activeTab === "templates" || activeTab === "blueprints";
  const showTools = activeTab === "all" || activeTab === "calculators";

  return (
    <div className="tools-hub-container">
      {/* Category Segmented Tabs */}
      <div className="tools-segment-bar" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "all"}
          className={`tools-segment-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All Resources (11)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "calculators"}
          className={`tools-segment-btn ${activeTab === "calculators" ? "active" : ""}`}
          onClick={() => setActiveTab("calculators")}
        >
          Financial Calculators (2)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "templates"}
          className={`tools-segment-btn ${activeTab === "templates" ? "active" : ""}`}
          onClick={() => setActiveTab("templates")}
        >
          Legal &amp; Dispute Letters (3)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "blueprints"}
          className={`tools-segment-btn ${activeTab === "blueprints" ? "active" : ""}`}
          onClick={() => setActiveTab("blueprints")}
        >
          GST &amp; Invoicing Blueprints (2)
        </button>
      </div>

      {/* Featured Spotlight Card: 44ADA Calculator (Executive Clean Light Style) */}
      {(activeTab === "all" || activeTab === "calculators") && (
        <div className="tools-spotlight-card">
          <div className="spotlight-info">
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 4, background: "var(--paper-deep)", color: "var(--ink-2)", border: "1px solid var(--line)" }}>
                Featured Financial Engine
              </span>
              <span style={{ fontSize: 11, color: "var(--muted)", fontWeight: 500 }}>
                AY 2025–26 &amp; Finance Act 2025
              </span>
            </div>

            <h2>Section 44ADA Presumptive Tax Calculator</h2>
            <p>
              Simulate presumptive taxation for software developers, consultants, and technical creators. Compute deemed 50% profits, verify the ₹75 Lakh digital receipts ceiling under Section 44ADA(1B), and calculate your exact TDS refund credit.
            </p>

            <div className="spotlight-features">
              <div className="spotlight-feature-item">
                <Check size={15} color="#059669" />
                <span>50% Deemed Profit (Zero Bookkeeping)</span>
              </div>
              <div className="spotlight-feature-item">
                <Check size={15} color="#059669" />
                <span>₹75 Lakh Limit (&le;5% Cash Receipts)</span>
              </div>
              <div className="spotlight-feature-item">
                <Check size={15} color="#059669" />
                <span>New vs Old Regime Slab Comparison</span>
              </div>
              <div className="spotlight-feature-item">
                <Check size={15} color="#059669" />
                <span>Single Advance Tax Due: March 15th</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/tools/44ada-calculator"
                className="btn"
                style={{ fontSize: 13 }}
              >
                Launch Calculator <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/guides/section-44ada-presumptive-tax-guide"
                className="btn secondary"
                style={{ fontSize: 13 }}
              >
                Read 44ADA Statute Guide
              </Link>
            </div>
          </div>

          {/* Right Live Simulation Preview */}
          <div className="spotlight-preview-box">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", fontWeight: 700 }}>
                Sample Presumptive Calculation
              </span>
              <span style={{ fontSize: 11, background: "#ecfdf5", color: "#065f46", border: "1px solid #a7f3d0", padding: "2px 8px", borderRadius: 4, fontWeight: 600 }}>
                AY 2025–26
              </span>
            </div>

            <div style={{ display: "grid", gap: 9 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--ink-2)" }}>
                <span>Gross Professional Receipts:</span>
                <strong style={{ color: "var(--ink)" }}>₹18,00,000</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--ink-2)" }}>
                <span>Deemed Profit (50% under 44ADA):</span>
                <strong style={{ color: "var(--ink)" }}>₹9,00,000</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--ink-2)" }}>
                <span>Tax in New Regime (AY 25-26):</span>
                <strong style={{ color: "var(--ink)" }}>₹41,600</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--ink-2)" }}>
                <span>TDS Deducted (10% under 194J):</span>
                <strong style={{ color: "var(--ink)" }}>₹90,000</strong>
              </div>
            </div>

            <div
              style={{
                marginTop: 18,
                padding: "14px 16px",
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div>
                <span style={{ fontSize: 11, color: "#166534", display: "block", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Estimated TDS Refund Due
                </span>
                <strong style={{ fontSize: 24, color: "var(--ink)", fontVariantNumeric: "tabular-nums" }}>
                  ₹48,400
                </strong>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#166534", background: "#ffffff", padding: "4px 8px", borderRadius: 4, border: "1px solid #86efac" }}>
                Direct to Bank
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Copyable Legal & Dispute Templates Section */}
      {showTemplates && (
        <section style={{ marginBottom: 64 }}>
          <div style={{ marginBottom: 28 }}>
            <span className="eyebrow">Statutory Blueprints</span>
            <h2 className="serif" style={{ fontSize: "clamp(24px, 3.2vw, 34px)", margin: "10px 0 8px" }}>
              Copyable Legal, TDS &amp; Invoicing Templates
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 15, margin: 0 }}>
              Standardized, statute-backed templates you can copy directly into your email client or invoice generator.
            </p>
          </div>

          <div className="templates-grid">
            {TEMPLATES.map((tmpl) => {
              const isExpanded = expandedTemplateId === tmpl.id;
              const isCopied = copiedId === tmpl.id;
              const fullCopyText = tmpl.subject
                ? `Subject: ${tmpl.subject}\n\n${tmpl.content}`
                : tmpl.content;

              return (
                <article key={tmpl.id} className="template-card">
                  <div className="template-header">
                    <span className="template-badge">{tmpl.badge}</span>
                    <span style={{ fontSize: 11, color: "var(--muted)", fontWeight: 500 }}>
                      {tmpl.statute}
                    </span>
                  </div>

                  <h3>{tmpl.title}</h3>
                  <p>{tmpl.description}</p>

                  {tmpl.subject && (
                    <div style={{
                      padding: "8px 12px",
                      background: "var(--paper-deep)",
                      borderRadius: 6,
                      fontSize: 12,
                      marginBottom: 12,
                      color: "var(--ink-2)"
                    }}>
                      <strong style={{ color: "var(--muted)" }}>Subject: </strong>
                      <span style={{ fontFamily: "monospace", color: "var(--ink)", fontWeight: 600 }}>{tmpl.subject}</span>
                    </div>
                  )}

                  <div className="template-preview-code">
                    {isExpanded ? tmpl.content : `${tmpl.content.slice(0, 220)}...`}
                  </div>

                  <p style={{ margin: "0 0 16px", fontSize: 12, color: "var(--muted)", lineHeight: 1.5 }}>
                    <strong>Note: </strong>{tmpl.tip}
                  </p>

                  <div className="template-footer">
                    <button
                      type="button"
                      onClick={() => setExpandedTemplateId(isExpanded ? null : tmpl.id)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--muted)",
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4
                      }}
                    >
                      {isExpanded ? (
                        <>Collapse <ChevronUp size={14} /></>
                      ) : (
                        <>View Full Template <ChevronDown size={14} /></>
                      )}
                    </button>

                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        type="button"
                        onClick={() => handleDownloadTxt(tmpl.title, fullCopyText)}
                        title="Download as .txt file"
                        style={{
                          padding: "7px 12px",
                          borderRadius: 6,
                          background: "#ffffff",
                          border: "1px solid var(--line)",
                          color: "var(--ink-2)",
                          fontSize: 12,
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5
                        }}
                      >
                        <Download size={13} />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopy(tmpl.id, fullCopyText)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "7px 16px",
                          borderRadius: 6,
                          background: isCopied ? "#065f46" : "#0f172a",
                          color: "#ffffff",
                          border: isCopied ? "1px solid #065f46" : "1px solid #0f172a",
                          fontSize: 12,
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.15s ease"
                        }}
                      >
                        {isCopied ? (
                          <>
                            <Check size={14} /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={14} /> Copy Template
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* Compliance Calculators & Reference Tools Grid */}
      {showTools && (
        <section>
          <div style={{ marginBottom: 28 }}>
            <span className="eyebrow">Calculators &amp; Reference</span>
            <h2 className="serif" style={{ fontSize: "clamp(24px, 3.2vw, 34px)", margin: "10px 0 8px" }}>
              Interactive Compliance Calculators &amp; Lookups
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 15, margin: 0 }}>
              Practical engines for Indian freelancers navigating Advance Tax, GST exports, and foreign remittances.
            </p>
          </div>

          <div className="guide-grid">
            {COMPLIANCE_TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <article
                  key={tool.title}
                  className="guide-card"
                >
                  <div className="guide-body">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <div
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: 8,
                          background: "var(--paper-deep)",
                          color: "var(--ink)",
                          display: "grid",
                          placeItems: "center"
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="tag">
                        {tool.badge}
                      </span>
                    </div>

                    <span style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", fontWeight: 600 }}>
                      {tool.statute}
                    </span>

                    <h3 style={{ margin: "8px 0 10px", fontSize: 18, fontFamily: "var(--font-serif)" }}>
                      {tool.title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.65, minHeight: 64, margin: "0 0 16px" }}>
                      {tool.desc}
                    </p>

                    <div style={{ display: "grid", gap: 6, marginBottom: 20 }}>
                      {tool.highlights.map((item) => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "var(--ink-2)", fontWeight: 500 }}>
                          <Check size={13} color="#059669" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: "auto" }}>
                      <Link
                        className="btn secondary"
                        href={tool.href}
                        style={{ width: "100%", fontSize: 12.5 }}
                      >
                        Open Tool <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
