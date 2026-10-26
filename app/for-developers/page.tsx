import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Globe2,
  ShieldCheck,
  Terminal,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tax Guide for Indian Software Developers & Engineers | CreatorTax India',
  description:
    'Section 44ADA technical consultancy eligibility, RBI Purpose Code P0802, cloud infrastructure write-offs, and remote contract compliance for Indian developers.',
  alternates: {
    canonical: 'https://creatortax.in/for-developers',
  },
};

export default function ForDevelopersPage() {
  return (
    <main className="profession-page-layout">
      <div className="profession-container">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} /> Back to CreatorTax India
        </Link>

        {/* Hero Header */}
        <header className="profession-hero">
          <div className="prof-hero-text">
            <span className="section-kicker">ENGINEERING PLAYBOOK · DEVELOPERS &amp; ARCHITECTS</span>
            <h1>
              Ship the code.<br />
              <em>Automate your tax architecture.</em>
            </h1>
            <p className="profession-lead">
              Independent software engineers, full-stack developers, and DevOps consultants enjoy crystal-clear
              eligibility under Section 44ADA Technical Consultancy. Here is how to declare 50% presumptive profit,
              zero-rate international contracts via Deel and Wise, and deduct your entire cloud infrastructure.
            </p>

            <div className="prof-quick-tags">
              <span>Sec 44ADA Technical Consultancy</span>
              <span>RBI Code P0802</span>
              <span>₹75L Cashless Threshold</span>
              <span>100% Cloud Write-Offs</span>
            </div>
          </div>

          <div className="prof-hero-visual">
            <div className="prof-image-frame">
              <Image
                src="/images/developer-desk.jpg"
                alt="Independent software engineer's workspace with code editor on laptop, coffee, and linen notebook in warm sunlight"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="prof-photo"
              />
            </div>
          </div>
        </header>

        {/* Section 1: Section 44ADA Technical Consultancy */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <Terminal size={22} className="card-accent-icon" />
            <div>
              <h2>1. Crystal-Clear Eligibility Under Section 44AA(1) &amp; 44ADA</h2>
              <span className="sub-statute">CBDT Notification SO 18(E) · Technical Consultancy</span>
            </div>
          </div>

          <div className="prof-card-body">
            <p>
              Unlike creative fields with ambiguous statutory definitions, software development and IT system
              architecture fall squarely under &quot;Technical Consultancy&quot;—an explicitly notified profession under
              Section 44AA(1) of the Income Tax Act.
            </p>
            <div className="prof-callout callout-statute">
              <ShieldCheck size={18} />
              <div>
                <strong>The 50% Presumptive Advantage for Engineers</strong>
                <p>
                  If your annual gross receipts from US/EU/domestic clients are ₹40,00,000, you can declare ₹20,00,000
                  as net taxable profit under Section 44ADA. You skip maintaining ledgers, avoid balance sheet audits,
                  and pay tax solely on the half.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Global Remote Invoicing (Deel, Wise, Stripe) */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <Globe2 size={22} className="card-accent-icon" />
            <div>
              <h2>2. Remote Contracts, Deel / Wise Inflows &amp; Purpose Code P0802</h2>
              <span className="sub-statute">FEMA &amp; Reserve Bank of India Master Directions</span>
            </div>
          </div>

          <div className="prof-card-body">
            <p>
              When working for international startups via contractor platforms like Deel, Remote.com, or direct
              wire, follow this non-negotiable compliance trail:
            </p>
            <ul className="prof-checklist">
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>RBI Purpose Code P0802:</strong> Always ensure your inward remittance advice is tagged
                  with P0802 (&quot;Software consultancy and implementation services&quot;) to guarantee export legitimacy.
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>Active GST LUT:</strong> Quote your annual RFD-11 ARN on monthly invoices to legally waive
                  18% IGST.
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>Schedule FSI &amp; Foreign Equity:</strong> If overseas clients grant you stock options (ESOPs)
                  or crypto, you CANNOT file ITR-4. You must file ITR-3 and disclose all holdings in Schedule FA.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Cloud & Tool Deductions */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <Cloud size={22} className="card-accent-icon" />
            <div>
              <h2>3. Writing Off Developer Infrastructure (If Filing ITR-3)</h2>
              <span className="sub-statute">Section 37(1) Deductions &amp; Section 32 Depreciation</span>
            </div>
          </div>

          <div className="prof-card-body">
            <p>
              If your actual business costs exceed 50% and you opt for regular P&amp;L accounting (ITR-3), these
              developer expenses are 100% deductible as revenue expenses:
            </p>
            <div className="prof-deductions-grid">
              <div className="deduction-box">
                <h4>Cloud Servers &amp; Databases</h4>
                <p>AWS, Google Cloud, Vercel, Supabase, and DigitalOcean invoices are 100% deductible.</p>
              </div>
              <div className="deduction-box">
                <h4>AI APIs &amp; Developer Tools</h4>
                <p>OpenAI, Anthropic Claude, GitHub Copilot, Cursor, and JetBrains licenses.</p>
              </div>
              <div className="deduction-box">
                <h4>Laptops &amp; External Displays</h4>
                <p>40% WDV depreciation on MacBooks, custom Linux rigs, and 4K programming monitors.</p>
              </div>
              <div className="deduction-box">
                <h4>Home Fiber Broadband</h4>
                <p>High-speed internet apportioned for remote standups and server deployments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Tools Row */}
        <section className="prof-tools-row">
          <div className="tools-row-copy">
            <h3>Developer Tax Utilities</h3>
            <p>Model your Section 44ADA savings and generate compliant export invoice declarations.</p>
          </div>
          <div className="tools-row-buttons">
            <Link href="/tools/freelancer-tax-estimator" className="button button-dark">
              Model Presumptive Slabs <ArrowUpRight size={15} />
            </Link>
            <Link href="/tools/gst-lut-checklist" className="button button-secondary">
              Export LUT Checklist <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
