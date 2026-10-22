import Link from "next/link";
import {
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { HeroEditorial } from "@/components/hero-editorial";
import { TopicNav } from "@/components/topic-nav";
import { EditorialFeaturedGuides } from "@/components/editorial-featured-guides";
import { TaxPreview } from "@/components/tax-preview";
import { EditorialTrust } from "@/components/editorial-trust";
import { ToolsPreview } from "@/components/tools-preview";
import { NewsletterSignup } from "@/components/newsletter-signup";

const FAQS = [
  {
    q: "Who is CreatorTax India built for?",
    a: "Digital professionals who earn independently in India — software engineers, technical consultants, video editors, designers, content writers, and remote contractors billing overseas or domestic clients. If you receive professional fees (194J), contract payments (194C), or foreign remittances (Wise, PayPal, Stripe), this resource is built for your compliance needs."
  },
  {
    q: "What is Section 44ADA and who can use it?",
    a: "Section 44ADA is a simplified presumptive taxation scheme under the Income Tax Act, 1961 for specified professionals (including software developers, designers, engineers, technical consultants) with gross annual receipts up to ₹75 Lakh (provided cash receipts remain ≤ 5%). Under 44ADA, 50% of your gross turnover is deemed as your taxable profit, exempting you from maintaining formal accounting books and tax audits."
  },
  {
    q: "Is the 44ADA calculator private? Will my financial data be stored?",
    a: "100% private. All calculations run strictly in your web browser using client-side JavaScript. No income numbers, TDS credits, PAN details, or client receipts are ever transmitted to or stored on any server. You can even run the calculator completely offline once loaded."
  },
  {
    q: "What is a GST LUT and do I need one as a freelance service exporter?",
    a: "If you export services to clients outside India (e.g., billing US or European clients through Wise or Stripe), you can file a Letter of Undertaking (LUT) in Form GST RFD-11 annually on the GST portal. This legally zero-rates your export invoices, allowing you to supply services without paying 18% IGST upfront from your working capital."
  },
  {
    q: "What is an e-FIRA and why is it needed for PayPal and Wise payments?",
    a: "Foreign Inward Remittance Advice (FIRA/FIRC) is the official certificate issued by an Authorized Dealer bank proving that foreign currency arrived in India for a declared RBI purpose code (e.g. P0802 for software/consultancy). You must archive e-FIRAs to prove zero-rated GST export compliance and demonstrate the non-domestic origin of your earnings to tax authorities."
  },
  {
    q: "When must Section 44ADA professionals pay advance tax?",
    a: "Taxpayers opting for Section 44ADA enjoy a major statutory benefit under Section 211(1)(b): instead of paying four quarterly installments, you pay 100% of your advance tax in a single payment on or before March 15th of the financial year. If your net tax after TDS exceeds ₹10,000, paying by March 15 prevents interest penalties under Sections 234B and 234C."
  },
  {
    q: "Does CreatorTax India provide individualized legal or tax advice?",
    a: "No. CreatorTax India is an educational publication and interactive calculation tool, not a Chartered Accountancy firm or personalized advisory service. All guides cite statutory provisions, CBDT notifications, and CGST rules for general educational clarity. For complex filings or specific audits, consult a qualified CA."
  }
];

export default function HomePage() {
  return (
    <main>
      {/* ── 1. Cinematic Editorial Hero ─────────────────────────────── */}
      <HeroEditorial />

      {/* ── 2A. Core Topic Navigation ──────────────────────────────── */}
      <TopicNav />

      {/* ── 2B. Featured Guides (Curated Editorial Showcase) ────────── */}
      <section className="section" id="featured-guides">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Practical Knowledge Library</span>
              <h2 className="serif">
                Essential tax, GST &amp; compliance blueprints.
              </h2>
            </div>
            <p className="section-intro">
              Step-by-step statutory workflows, official portal navigations, and deduction limits—verified against the Income Tax Act, 1961 and CGST Rules.
            </p>
          </div>

          <EditorialFeaturedGuides />

          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link className="btn secondary" href="/guides">
              Browse All 8 In-Depth Guides <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2C. Section 44ADA Calculator Preview ───────────────────── */}
      <section className="feature-band" id="calculator-preview">
        <div className="container feature-grid">
          <div>
            <span className="eyebrow" style={{ color: "var(--brand-secondary)" }}>
              Section 44ADA Tax Estimator
            </span>

            <h2 className="serif" style={{ color: "#ffffff", marginTop: 8 }}>
              Know your numbers before filing your ITR.
            </h2>

            <p style={{ color: "rgba(246, 241, 232, 0.85)", fontSize: 15, lineHeight: 1.7, margin: "16px 0 20px" }}>
              Section 44ADA allows independent professionals to declare 50% of gross receipts as taxable profit. Compare the New Tax Regime (Section 115BAC) with the Old Regime, check your eligibility under the ₹75 Lakh digital receipts ceiling, and see how TDS credits trigger an automated tax refund.
            </p>

            <div className="feature-highlights-list">
              <div className="feature-highlight-item">
                <span className="feature-highlight-bullet" />
                <span>Zero tax up to ₹7,00,000 presumptive profit via Section 87A rebate</span>
              </div>
              <div className="feature-highlight-item">
                <span className="feature-highlight-bullet" />
                <span>Single annual advance tax payment due on March 15th (no quarterly penalties)</span>
              </div>
              <div className="feature-highlight-item">
                <span className="feature-highlight-bullet" />
                <span>Applicable to software developers, consultants, film artists &amp; technical professionals</span>
              </div>
            </div>

            <div style={{ marginTop: 28 }}>
              <Link
                className="btn"
                style={{
                  background: "#ffffff",
                  color: "var(--brand-primary)",
                  borderColor: "#ffffff",
                  fontWeight: 700
                }}
                href="/tools/44ada-calculator"
              >
                Launch Full 44ADA Calculator <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div>
            <TaxPreview />
          </div>
        </div>
      </section>

      {/* ── 2D. Editorial Trust & Accountability ────────────────────── */}
      <section className="section" id="editorial-trust" style={{ background: "var(--paper-deep)" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Editorial Principles</span>
              <h2 className="serif">
                Built on primary statutes, not marketing claims.
              </h2>
            </div>
            <p className="section-intro">
              Tax information demands rigor, primary source citations, and clear boundary limits. Here is how we verify our content.
            </p>
          </div>

          <EditorialTrust />
        </div>
      </section>

      {/* ── 2E. Tools and Templates Preview ────────────────────────── */}
      <section className="section" id="tools-preview">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Interactive Hub</span>
              <h2 className="serif">
                Practical calculators &amp; copyable legal templates.
              </h2>
            </div>
            <p className="section-intro">
              Zero-fluff templates and tools built to resolve real freelancer invoicing hurdles, erroneous TDS deductions, and export filings.
            </p>
          </div>

          <ToolsPreview />

          <div style={{ marginTop: 36, textAlign: "center" }}>
            <Link className="btn secondary" href="/tools">
              Explore All Tools &amp; Blueprints <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2F. Newsletter Dispatch ─────────────────────────────────── */}
      <section className="section" style={{ background: "var(--paper-deep)", paddingBlock: 80 }}>
        <div className="container">
          <NewsletterSignup />
        </div>
      </section>

      {/* ── Common Statutory FAQs ──────────────────────────────────── */}
      <section className="faq-band" id="faq">
        <div className="container">
          <div className="faq-band-header">
            <span className="eyebrow">Direct Answers</span>
            <h2 className="serif">
              Frequently Asked Compliance Questions
            </h2>
            <p>
              Clear statutory answers to the most common questions Indian freelancers ask regarding Section 44ADA, GST LUT, TDS reconciliations, and international payments.
            </p>
          </div>

          <div className="faq-grid">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="faq-item">
                <summary className="faq-q">
                  {q}
                  <ChevronDown size={16} className="faq-chevron" />
                </summary>
                <div className="faq-a">{a}</div>
              </details>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 44 }}>
            <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 16 }}>
              Have a nuanced situation or need statutory verification?
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link className="btn" href="/guides">Browse Full Knowledge Base <ArrowRight size={15} /></Link>
              <Link className="btn secondary" href="/contact">Contact Editorial Team</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
