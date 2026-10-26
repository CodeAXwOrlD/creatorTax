import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  PenTool,
  Tablet,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tax Guide for Indian UI/UX & Brand Designers | CreatorTax India',
  description:
    'Section 44ADA eligibility for digital product designers, design system licensing clauses, hardware depreciation, and copyright transfer rules in India.',
  alternates: {
    canonical: 'https://creatortax.in/for-designers',
  },
};

export default function ForDesignersPage() {
  return (
    <main className="profession-page-layout">
      <div className="profession-container">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} /> Back to CreatorTax India
        </Link>

        {/* Hero Header */}
        <header className="profession-hero">
          <div className="prof-hero-text">
            <span className="section-kicker">DESIGN PLAYBOOK · PRODUCT &amp; BRAND DESIGNERS</span>
            <h1>
              Design the interface.<br />
              <em>Structure the business with precision.</em>
            </h1>
            <p className="profession-lead">
              UI/UX designers, design system architects, and brand strategists craft digital experiences for
              global startups. Here is how to navigate Section 44ADA, protect your Figma design systems from
              unpaid exploitation, and write off premium creative hardware legally.
            </p>

            <div className="prof-quick-tags">
              <span>UI/UX Technical Consultancy</span>
              <span>Design System IP Transfer</span>
              <span>40% iPad &amp; Mac Depreciation</span>
              <span>Figma SaaS Deductions</span>
            </div>
          </div>

          <div className="prof-hero-visual">
            <div className="prof-image-frame">
              <Image
                src="/images/designer-desk.jpg"
                alt="Product designer's sunlit desk with tablet wireframe sketch, Pantone swatches, coffee, and warm golden morning light"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="prof-photo"
              />
            </div>
          </div>
        </header>

        {/* Section 1: Classification & 44ADA */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <PenTool size={22} className="card-accent-icon" />
            <div>
              <h2>1. Tax Classification for Digital &amp; UI/UX Designers</h2>
              <span className="sub-statute">Technical Consultancy vs. Commercial Design</span>
            </div>
          </div>

          <div className="prof-card-body">
            <p>
              In the Indian tax code, design professionals fall into distinct buckets depending on their exact scope:
            </p>
            <div className="prof-table-wrap">
              <table className="prof-data-table">
                <thead>
                  <tr>
                    <th>DESIGN SPECIALIZATION</th>
                    <th>STATUTORY TAX CLASSIFICATION</th>
                    <th>PRESUMPTIVE TAX SECTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Digital Product Designers, UI/UX System Architects</td>
                    <td>Technical Consultancy (Section 44AA(1))</td>
                    <td><strong>Section 44ADA (50% presumptive profit)</strong></td>
                  </tr>
                  <tr>
                    <td>Interior Designers &amp; Spatial Planners</td>
                    <td>Interior Decoration (Section 44AA(1))</td>
                    <td><strong>Section 44ADA (50% presumptive profit)</strong></td>
                  </tr>
                  <tr>
                    <td>Commercial Graphic / Print Designers</td>
                    <td>Commercial Services / Business</td>
                    <td><strong>Section 44AD (6% digital profit)</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2: Design System Copyright & Figma Retention */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <Layers size={22} className="card-accent-icon" />
            <div>
              <h2>2. Design System IP Transfer &amp; Figma Access Terms</h2>
              <span className="sub-statute">Copyright Act, 1957 &amp; Master Services Agreements</span>
            </div>
          </div>

          <div className="prof-card-body">
            <p>
              When building multi-brand design systems, components, and token architectures, protect your intellectual
              property from scope creep and non-payment:
            </p>
            <ul className="prof-checklist">
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>View-Only Preview Until Milestone Clearance:</strong> Grant clients view-only Figma access
                  during iterative design reviews. Transfer editable component library permissions only upon cleared
                  milestone payment.
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>Conditional Copyright Transfer:</strong> Explicitly state that copyright in final UI layouts
                  transfers strictly upon receipt of 100% of agreed fees.
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>Revision Rounds Cap:</strong> Standard contracts should include two rounds of feedback per
                  milestone; modifications to previously approved user flows are billed hourly.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Hardware & Creative Tool Deductions */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <Tablet size={22} className="card-accent-icon" />
            <div>
              <h2>3. Writing Off Designer Hardware &amp; Typography Licenses</h2>
              <span className="sub-statute">Section 37(1) Deductions &amp; Section 32 WDV</span>
            </div>
          </div>

          <div className="prof-card-body">
            <div className="prof-deductions-grid">
              <div className="deduction-box">
                <h4>MacBooks, iPads &amp; Pens</h4>
                <p>Eligible for <strong>40% annual WDV depreciation</strong> under computer hardware rules.</p>
              </div>
              <div className="deduction-box">
                <h4>Figma &amp; Creative Cloud</h4>
                <p>Figma Organization, Adobe Creative Cloud, and Miro SaaS are <strong>100% deductible</strong>.</p>
              </div>
              <div className="deduction-box">
                <h4>Commercial Font Licenses</h4>
                <p>Client typography licenses purchased for professional projects are deductible.</p>
              </div>
              <div className="deduction-box">
                <h4>Ergonomic Chairs &amp; Desks</h4>
                <p>Standing desks and ergonomic seating depreciate at <strong>10% WDV</strong> under furniture.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Tools Row */}
        <section className="prof-tools-row">
          <div className="tools-row-copy">
            <h3>Designer Tax Utilities</h3>
            <p>Model your 50% presumptive profit and plan your allowable hardware deductions.</p>
          </div>
          <div className="tools-row-buttons">
            <Link href="/tools/freelancer-tax-estimator" className="button button-dark">
              Model Tax Slabs <ArrowUpRight size={15} />
            </Link>
            <Link href="/tools/expense-planner" className="button button-secondary">
              Expense &amp; Depreciation Planner <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
