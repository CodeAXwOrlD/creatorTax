import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ShieldCheck } from 'lucide-react';
import CalculatorComponent from '@/components/Calculator';

export const metadata: Metadata = {
  title: 'Freelancer Tax Estimator & Regime Comparison (AY 2025-26 & 2026-27) | CreatorTax India',
  description:
    'Calculate Indian income tax for freelancers and creators under Section 44ADA (50% presumptive profit). Compare New vs Old Tax Regime, Section 87A rebate, and TDS refund claims.',
  alternates: {
    canonical: 'https://creatortax.in/tools/freelancer-tax-estimator',
  },
};

export default function FreelancerTaxEstimatorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CreatorTax Freelancer Tax & Regime Estimator',
    operatingSystem: 'Any Web Browser',
    applicationCategory: 'FinanceApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    description:
      'Interactive income tax calculation tool for Indian freelancers, creators, and consultants under Section 44ADA and Section 115BAC.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="tool-detail-page">
        <div className="tool-detail-container">
          <Link href="/tools" className="back-link">
            <ArrowLeft size={16} /> Back to Tools Workbench
          </Link>

          <header className="tool-header">
            <div className="tool-header-meta">
              <span className="tool-badge">TAX ESTIMATOR</span>
              <span className="tool-ay-badge">UPDATED FOR AY 2025-26 & 2026-27</span>
            </div>
            <h1>
              Freelancer Tax &amp; Regime<br />
              <em>Interactive Estimator</em>
            </h1>
            <p className="tool-deck">
              Model your annual income under the 50% presumptive profit rules of Section 44ADA or itemized
              expenses. Compare the New Tax Regime (Section 115BAC) against the Old Tax Regime with zero
              server tracking.
            </p>
          </header>

          {/* Embed the interactive calculator */}
          <div className="standalone-calc-wrap">
            <CalculatorComponent />
          </div>

          {/* Deep Explanatory Documentation */}
          <section className="tool-documentation-section">
            <div className="doc-grid">
              <div className="doc-col">
                <h2>How This Estimator Operates</h2>
                <p>
                  This utility models the tax liabilities of independent professionals resident in India. Under
                  Section 44ADA of the Income Tax Act, 1961, eligible professionals with gross receipts up to
                  ₹75 Lakhs (provided cash receipts do not exceed 5%) can offer 50% of their total receipts as net
                  taxable profit.
                </p>
                <p>
                  The remaining 50% is statutorily presumed to cover all operational costs, hardware depreciation,
                  rent, and software subscriptions. You cannot deduct further business expenses under Sections 30
                  to 38 against this 50% deemed profit.
                </p>
              </div>

              <div className="doc-col">
                <h2>The New vs Old Regime Decision</h2>
                <p>
                  Under the New Tax Regime (Section 115BAC), individuals with taxable income up to ₹7,00,000 pay
                  ₹0 tax due to the full Section 87A tax rebate. The standard deduction of ₹75,000 applies strictly to
                  salaried individuals and cannot be claimed against business or professional profits.
                </p>
                <p>
                  The Old Tax Regime permits deductions under Chapter VI-A (Section 80C up to ₹1.5L, Section 80D
                  health insurance, Section 80CCD NPS), but has significantly narrower tax slabs.
                </p>
              </div>
            </div>

            <div className="doc-callout-box">
              <ShieldCheck size={24} />
              <div>
                <strong>Statutory Limits & Presumptive Verification</strong>
                <p>
                  If your actual business expenses exceed 50% of gross receipts, you can choose regular taxation
                  (ITR-3), maintain audited books under Section 44AA, and get audited by a CA under Section 44AB.
                </p>
                <div className="doc-links-row">
                  <Link href="/guides/section-44ada-freelancers" className="doc-link">
                    Read Complete Section 44ADA Guide <ArrowUpRight size={14} />
                  </Link>
                  <Link href="/guides/tds-refund" className="doc-link">
                    Read TDS Refund Guide <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
