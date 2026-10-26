import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ShieldCheck } from 'lucide-react';
import TdsTool from '@/components/TdsTool';

export const metadata: Metadata = {
  title: 'TDS Reconciliation & Refund Planner (Form 26AS & AIS) | CreatorTax India',
  description:
    'Track taxes withheld by domestic clients under Section 194J and 194C, verify Form 26AS credit, and calculate statutory interest under Section 244A.',
  alternates: {
    canonical: 'https://creatortax.in/tools/tds-refund-checklist',
  },
};

export default function TdsRefundChecklistPage() {
  return (
    <main className="tool-detail-page">
      <div className="tool-detail-container">
        <Link href="/tools" className="back-link">
          <ArrowLeft size={16} /> Back to Tools Workbench
        </Link>

        <header className="tool-header">
          <div className="tool-header-meta">
            <span className="tool-badge">TDS &amp; CREDITS TOOL</span>
            <span className="tool-ay-badge">SECTION 194J, 194C &amp; SECTION 244A</span>
          </div>
          <h1>
            TDS Reconciliation &amp;<br />
            <em>Refund Recovery Planner</em>
          </h1>
          <p className="tool-deck">
            Organize taxes withheld by Indian domestic clients, spot Form 26AS discrepancies before tax season,
            verify your bank account for electronic refund dispatch, and compute Section 244A statutory interest.
          </p>
        </header>

        {/* Embedded Interactive TDS Tool */}
        <TdsTool />

        {/* Deep Explanatory Documentation */}
        <section className="tool-documentation-section">
          <div className="doc-grid">
            <div className="doc-col">
              <h2>Why 10% TDS Deductions Are Your Asset</h2>
              <p>
                When a domestic client withholds 10% under Section 194J from your invoice, they are required by law
                to deposit that amount with the government against your PAN. It is an advance tax payment that
                belongs to you.
              </p>
              <p>
                If your final calculated tax liability (e.g. under the New Regime Section 87A rebate) is lower than the
                total TDS deducted across the financial year, the excess is electronically refunded with interest.
              </p>
            </div>

            <div className="doc-col">
              <h2>Resolving Form 26AS Mismatches</h2>
              <p>
                If a client deducted TDS but it does not appear in your Form 26AS, do not claim that credit blindly in
                your return. The CPC automated processing system will generate a demand notice under Section 143(1).
              </p>
              <p>
                Request the client&apos;s finance department for the TDS deposit challan (BSR code, date, and challan
                number) and ensure they file a revised Form 26Q before July 31st.
              </p>
            </div>
          </div>

          <div className="doc-callout-box">
            <ShieldCheck size={24} />
            <div>
              <strong>Complete Step-by-Step Guide</strong>
              <p>
                Read our in-depth walkthrough on locating withheld credits in the AIS, pre-validating bank accounts,
                and choosing between ITR-3 and ITR-4.
              </p>
              <div className="doc-links-row">
                <Link href="/guides/tds-refund" className="doc-link">
                  Read Full TDS Refund Guide <ArrowUpRight size={14} />
                </Link>
                <Link href="/tools/freelancer-tax-estimator" className="doc-link">
                  Estimate Your Tax &amp; Refund <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
