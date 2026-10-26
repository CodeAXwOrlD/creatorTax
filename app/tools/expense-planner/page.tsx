import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ShieldCheck } from 'lucide-react';
import ExpensePlannerTool from '@/components/ExpensePlannerTool';

export const metadata: Metadata = {
  title: 'Dual-Use Business Expense & Depreciation Planner | CreatorTax India',
  description:
    'Calculate home office rent apportionment, utility deductions under Section 37(1), and computer depreciation (40% WDV) under Section 32. Compare against Section 44ADA.',
  alternates: {
    canonical: 'https://creatortax.in/tools/expense-planner',
  },
};

export default function ExpensePlannerPage() {
  return (
    <main className="tool-detail-page">
      <div className="tool-detail-container">
        <Link href="/tools" className="back-link">
          <ArrowLeft size={16} /> Back to Tools Workbench
        </Link>

        <header className="tool-header">
          <div className="tool-header-meta">
            <span className="tool-badge">EXPENSE &amp; ASSET ALLOCATOR</span>
            <span className="tool-ay-badge">SECTION 37(1) &amp; SECTION 32 WDV</span>
          </div>
          <h1>
            Dual-Use Business Expense<br />
            <em>&amp; Asset Depreciation Planner</em>
          </h1>
          <p className="tool-deck">
            Determine whether itemized accounting beats Section 44ADA. Model home office floor area rent
            allocation, commercial broadband, and hardware depreciation rates without leaking private financial data.
          </p>
        </header>

        {/* Embedded Interactive Expense Planner Tool */}
        <ExpensePlannerTool />

        {/* Deep Explanatory Documentation */}
        <section className="tool-documentation-section">
          <div className="doc-grid">
            <div className="doc-col">
              <h2>The Strict Section 37(1) Test</h2>
              <p>
                To claim an expenditure against business income, it must be incurred &quot;wholly and exclusively for the
                purpose of business.&quot; If you use your broadband or apartment for both personal living and freelance
                consulting, claiming 100% of the cost is an immediate audit trigger.
              </p>
              <p>
                The safest legal defense is objective carpet area proportioning for rent and realistic business percentage
                allocation for utility bills.
              </p>
            </div>

            <div className="doc-col">
              <h2>Depreciation: Why You Can’t Expense MacBooks in Month 1</h2>
              <p>
                Computers, monitors, and studio cameras are capital assets with multi-year utility. Under Section 32 of
                the Income Tax Act, they must be capitalized and depreciated using the Written Down Value (WDV) method:
              </p>
              <p>
                • Computers and Software: 40% per annum.<br />
                • Cameras &amp; Audio Equipment: 15% per annum.<br />
                • Office Furniture: 10% per annum.
              </p>
            </div>
          </div>

          <div className="doc-callout-box">
            <ShieldCheck size={24} />
            <div>
              <strong>Important Statutory Distinction</strong>
              <p>
                If you file under Section 44ADA (50% presumptive profit), individual expenses cannot be separately
                claimed. This calculator helps you determine whether your actual expenses exceed 50% of revenue.
              </p>
              <div className="doc-links-row">
                <Link href="/guides/home-office-expenses" className="doc-link">
                  Read Full Expense &amp; Depreciation Guide <ArrowUpRight size={14} />
                </Link>
                <Link href="/tools/freelancer-tax-estimator" className="doc-link">
                  Explore Tax Estimator <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
