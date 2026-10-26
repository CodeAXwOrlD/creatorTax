import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  FileCheck2,
  Receipt,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tax Guide for Indian Freelancers & Independent Consultants | CreatorTax India',
  description:
    'The universal tax and money guide for Indian independent workers: Section 44ADA 50% presumptive profit, March 15 advance tax, and TDS refund recovery.',
  alternates: {
    canonical: 'https://creatortax.in/for-freelancers',
  },
};

export default function ForFreelancersPage() {
  return (
    <main className="profession-page-layout">
      <div className="profession-container">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} /> Back to CreatorTax India
        </Link>

        {/* Hero Header */}
        <header className="profession-hero">
          <div className="prof-hero-text">
            <span className="section-kicker">INDEPENDENT BUSINESS PLAYBOOK · FREELANCERS &amp; CONSULTANTS</span>
            <h1>
              Build your own practice.<br />
              <em>Keep the foundation rock-solid.</em>
            </h1>
            <p className="profession-lead">
              Independent consultants, copywriters, strategists, and solo practitioners wear every hat.
              Here is the definitive guide to structuring contracts with milestone deposits, declaring 50%
              presumptive income legally, and recovering 100% of client-deducted TDS.
            </p>

            <div className="prof-quick-tags">
              <span>50% Upfront Milestone SOW</span>
              <span>March 15 Advance Tax (Sec 211)</span>
              <span>10% TDS Recovery (Sec 194J)</span>
              <span>₹20L GST Threshold</span>
            </div>
          </div>

          <div className="prof-hero-visual">
            <div className="prof-image-frame">
              <Image
                src="/images/sunlit-workspace.png"
                alt="Calm, sunlit independent freelancer working desk with laptop, notebook, and warm natural morning light"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="prof-photo"
              />
            </div>
          </div>
        </header>

        {/* Section 1: Contracts & Milestones */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <FileCheck2 size={22} className="card-accent-icon" />
            <div>
              <h2>1. The Non-Negotiable Contract Architecture</h2>
              <span className="sub-statute">Indian Contract Act, 1872 &amp; Commercial Terms</span>
            </div>
          </div>

          <div className="prof-card-body">
            <p>
              Handshake agreements and informal WhatsApp chats leave you defenseless when clients delay payments
              or expand project scope. Every freelance engagement must begin with a signed Statement of Work (SOW):
            </p>
            <ul className="prof-checklist">
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>50% Upfront Commitment Deposit:</strong> Never begin billable work without a cleared upfront
                  deposit. This filters out non-serious clients and establishes mutual skin in the game.
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>Net-15 Payment Terms:</strong> Clearly define invoice due dates as Net-7 or Net-15, with an
                  explicit 1.5% monthly late payment interest fee on overdue invoices.
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>The 40% Kill Fee:</strong> If a client abruptly freezes or cancels a project post-initiation,
                  your contract must guarantee retention of the deposit plus a 40% kill fee for blocked work hours.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Advance Tax Deadlines */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <Calendar size={22} className="card-accent-icon" />
            <div>
              <h2>2. The March 15th Advance Tax Rule for Section 44ADA</h2>
              <span className="sub-statute">Section 211 of the Income Tax Act, 1961</span>
            </div>
          </div>

          <div className="prof-card-body">
            <p>
              Salaried workers have taxes automatically deducted monthly by employers. As an independent worker, the
              responsibility of paying income tax in advance falls entirely on you.
            </p>
            <div className="prof-callout callout-statute">
              <ShieldCheck size={18} />
              <div>
                <strong>The 100% Single-Installment Relief for 44ADA</strong>
                <p>
                  While traditional businesses must pay advance tax in 4 quarterly installments (June, Sept, Dec, March),
                  eligible professionals filing under Section 44ADA are granted an exemption: you only need to deposit
                  <strong>100% of your advance tax on or before March 15th</strong> of the financial year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: TDS Recovery Playbook */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <Receipt size={22} className="card-accent-icon" />
            <div>
              <h2>3. Recovering 10% TDS Deducted by Domestic Clients</h2>
              <span className="sub-statute">Section 194J &amp; Form 26AS Electronic Refunds</span>
            </div>
          </div>

          <div className="prof-card-body">
            <p>
              When Indian corporate clients pay you ₹90,000 on a ₹1,00,000 invoice, they deposit ₹10,000 with the
              tax department against your PAN under Section 194J.
            </p>
            <p>
              Under the New Tax Regime (Section 115BAC), individuals earning up to ₹7,00,000 taxable income pay zero
              tax due to the Section 87A rebate. When you file your ITR in July, the entire ₹10,000 withheld across all
              clients is refunded directly to your pre-validated bank account with 0.5% monthly interest!
            </p>
          </div>
        </section>

        {/* Recommended Tools Row */}
        <section className="prof-tools-row">
          <div className="tools-row-copy">
            <h3>Essential Tools for Freelancers</h3>
            <p>Estimate your advance tax liability and track your withheld client TDS credits.</p>
          </div>
          <div className="tools-row-buttons">
            <Link href="/tools/freelancer-tax-estimator" className="button button-dark">
              Launch Tax Estimator <ArrowUpRight size={15} />
            </Link>
            <Link href="/tools/tds-refund-checklist" className="button button-secondary">
              TDS Refund Tracker <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
