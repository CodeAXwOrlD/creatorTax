import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  DollarSign,
  Gift,
  ShieldAlert,
  Video,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tax Guide for Indian Creators & Influencers | CreatorTax India',
  description:
    'The complete tax and GST playbook for Indian YouTubers, Instagram creators, and podcasters: Section 194R on barter gifts, international AdSense revenue, and Section 44AD vs 44ADA.',
  alternates: {
    canonical: 'https://creatortax.in/for-creators',
  },
};

export default function ForCreatorsPage() {
  return (
    <main className="profession-page-layout">
      <div className="profession-container">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} /> Back to CreatorTax India
        </Link>

        {/* Hero Header */}
        <header className="profession-hero">
          <div className="prof-hero-text">
            <span className="section-kicker">CREATOR TAX MANUAL · YOUTUBE &amp; SOCIAL MEDIA</span>
            <h1>
              Build the audience.<br />
              <em>Keep your earnings clear.</em>
            </h1>
            <p className="profession-lead">
              YouTubers, Instagram creators, and podcasters navigate a unique financial landscape: brand
              deals, barter gifts, foreign AdSense payouts, and Section 194R withholdings. Here is how to keep
              your compliance bulletproof while maximizing legitimate tax deductions.
            </p>

            <div className="prof-quick-tags">
              <span>Section 194R Perks</span>
              <span>AdSense Zero-Rated Export</span>
              <span>Barter GST Rules</span>
              <span>Camera Depreciation</span>
            </div>
          </div>

          <div className="prof-hero-visual">
            <div className="prof-image-frame">
              <Image
                src="/images/creator-studio.jpg"
                alt="High-end content creator studio in India with boom microphone, camera rig, and warm window light"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="prof-photo"
              />
            </div>
          </div>
        </header>

        {/* Section 1: Section 194R on Brand Perks & Barter */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <Gift size={22} className="card-accent-icon" />
            <div>
              <h2>1. The Section 194R Trap: Barter Gifts &amp; Free Tech Packages</h2>
              <span className="sub-statute">Section 194R of the Income Tax Act, 1961</span>
            </div>
          </div>

          <div className="prof-card-body">
            <p>
              Under Section 194R, introduced in the Finance Act 2022, brands providing any benefit or perquisite
              exceeding <strong>₹20,000 in a financial year</strong> are legally mandated to deduct 10% TDS before
              handing over the item.
            </p>

            <div className="prof-table-wrap">
              <table className="prof-data-table">
                <thead>
                  <tr>
                    <th>BRAND PERK / SCENARIO</th>
                    <th>TAX TREATMENT UNDER SECTION 194R</th>
                    <th>DOCUMENTATION REQUIRED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Smartphone / Laptop gifted for review &amp; retained</td>
                    <td>10% TDS deducted on fair market value; taxable in your ITR as business perquisite.</td>
                    <td>Form 16A from brand showing 194R credit.</td>
                  </tr>
                  <tr>
                    <td>Product returned to brand after shooting video</td>
                    <td>Exempt from 194R TDS if returned within a reasonable window with proof.</td>
                    <td>Courier return receipt and written brand agreement.</td>
                  </tr>
                  <tr>
                    <td>Sponsored luxury hotel stay or international flight</td>
                    <td>100% Taxable perquisite. Brand must pay TDS before providing tickets.</td>
                    <td>Sponsorship contract itemizing travel costs.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="prof-callout callout-warning">
              <ShieldAlert size={18} />
              <div>
                <strong>Barter Deals Trigger GST Liabilities</strong>
                <p>
                  If you receive a ₹80,000 camera in exchange for posting 2 Instagram Reels, GST law treats this as
                  a &quot;barter transaction with non-monetary consideration.&quot; If you are GST-registered, you must issue an
                  invoice for the fair market value of the camera and pay 18% GST on the service provided.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: International AdSense Payouts */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <DollarSign size={22} className="card-accent-icon" />
            <div>
              <h2>2. YouTube AdSense &amp; Foreign Affiliate Revenue</h2>
              <span className="sub-statute">Cross-Border GST &amp; FEMA Remittance</span>
            </div>
          </div>

          <div className="prof-card-body">
            <p>
              When Google Ireland or Google Asia Pacific deposits your monthly YouTube ad earnings into your Indian
              bank account, Indian GST classifies this as an <strong>export of services</strong>.
            </p>
            <ul className="prof-checklist">
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>File an Annual GST LUT:</strong> If your worldwide turnover exceeds ₹20 Lakhs, you must
                  register for GST and file an annual LUT (Form GST RFD-11) before April 1st to zero-rate Google
                  earnings legally.
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>Download Google Payment Receipts:</strong> From Google AdSense &gt; Payments &gt; View
                  Transactions, archive monthly tax invoices showing Google&apos;s foreign entity address and tax ID.
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>Request FIRA from Your Bank:</strong> Request your Authorised Dealer bank for Inward Remittance
                  Advice citing RBI Purpose Code <strong>P1007</strong> (Advertising services).
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Deductible Creator Expenses */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <Video size={22} className="card-accent-icon" />
            <div>
              <h2>3. Legitimate Tax Deductions for Content Creators</h2>
              <span className="sub-statute">Section 37(1) &amp; Section 32 Asset Depreciation</span>
            </div>
          </div>

          <div className="prof-card-body">
            <div className="prof-deductions-grid">
              <div className="deduction-box">
                <h4>Camera Bodies &amp; Lenses</h4>
                <p>Capitalized and depreciated at <strong>15% per year</strong> under Section 32 WDV.</p>
              </div>

              <div className="deduction-box">
                <h4>Editing PCs &amp; MacBooks</h4>
                <p>Eligible for high-rate <strong>40% annual depreciation</strong> under computers block.</p>
              </div>

              <div className="deduction-box">
                <h4>Studio Lighting &amp; Sound</h4>
                <p>Softboxes, key lights, acoustic foam, and microphones are 15% plant assets.</p>
              </div>

              <div className="deduction-box">
                <h4>Editing &amp; Music Licenses</h4>
                <p>Artlist, Epidemic Sound, Adobe Premiere, and Canva subscriptions are <strong>100% deductible</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Tools Row */}
        <section className="prof-tools-row">
          <div className="tools-row-copy">
            <h3>Recommended Tools for Creators</h3>
            <p>Use our free calculators to model your brand deal taxes and verify export compliance.</p>
          </div>
          <div className="tools-row-buttons">
            <Link href="/tools/freelancer-tax-estimator" className="button button-dark">
              Launch Tax Estimator <ArrowUpRight size={15} />
            </Link>
            <Link href="/tools/gst-lut-checklist" className="button button-secondary">
              GST LUT Checklist <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
