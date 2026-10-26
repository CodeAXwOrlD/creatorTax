import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  FileCode,
  Film,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tax Guide for Indian Video Editors & Motion Designers | CreatorTax India',
  description:
    'Hardware depreciation (40% WDV), project file buyout clauses, international client retainers, and GST LUT compliance for Indian video editors and animators.',
  alternates: {
    canonical: 'https://creatortax.in/for-video-editors',
  },
};

export default function ForVideoEditorsPage() {
  return (
    <main className="profession-page-layout">
      <div className="profession-container">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} /> Back to CreatorTax India
        </Link>

        {/* Hero Header */}
        <header className="profession-hero">
          <div className="prof-hero-text">
            <span className="section-kicker">POST-PRODUCTION MANUAL · EDITORS &amp; ANIMATORS</span>
            <h1>
              Edit the cut.<br />
              <em>Keep the cashflow protected.</em>
            </h1>
            <p className="profession-lead">
              Video editing, color grading, and motion design demand expensive high-performance computing,
              massive storage arrays, and constant cloud transfer. Here is how to write off your workstations
              legally, protect project files from scope creep, and zero-rate international client retainers.
            </p>

            <div className="prof-quick-tags">
              <span>40% Mac Studio Depreciation</span>
              <span>Project File Buyout Terms</span>
              <span>RBI Code P1105</span>
              <span>40% Kill Fee Protection</span>
            </div>
          </div>

          <div className="prof-hero-visual">
            <div className="prof-image-frame">
              <Image
                src="/images/video-editor-suite.jpg"
                alt="Professional video editing suite with widescreen color grading timeline and warm golden-hour window light"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="prof-photo"
              />
            </div>
          </div>
        </header>

        {/* Section 1: Hardware Depreciation */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <Cpu size={22} className="card-accent-icon" />
            <div>
              <h2>1. Workstation &amp; GPU Depreciation Under Section 32</h2>
              <span className="sub-statute">Written Down Value (WDV) Block of Assets</span>
            </div>
          </div>

          <div className="prof-card-body">
            <p>
              When you invest ₹3,50,000 in a Mac Studio, high-performance RTX GPU, or calibrated OLED monitor,
              you cannot deduct the full amount in month one. Under Section 32 of the Income Tax Act, you capitalize
              them into asset blocks:
            </p>

            <div className="prof-table-wrap">
              <table className="prof-data-table">
                <thead>
                  <tr>
                    <th>ASSET CATEGORY</th>
                    <th>ANNUAL DEPRECIATION RATE</th>
                    <th>HALF-YEAR RULE (OCT 4 CUTOFF)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mac Studio, Editing PC, Laptops &amp; NAS Servers</td>
                    <td><strong>40% WDV per year</strong> (Computers Block)</td>
                    <td>20% in Year 1 if put to use on or after October 4th.</td>
                  </tr>
                  <tr>
                    <td>Studio Reference Monitors &amp; Audio Interfaces</td>
                    <td><strong>15% WDV per year</strong> (Plant &amp; Machinery)</td>
                    <td>7.5% in Year 1 if put to use on or after October 4th.</td>
                  </tr>
                  <tr>
                    <td>DaVinci Resolve Studio, Adobe CC, Frame.io SaaS</td>
                    <td><strong>100% Fully Deductible</strong> in current FY</td>
                    <td>Treated as pure revenue operational expenditure.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2: Project Files & Buyout Clauses */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <FileCode size={22} className="card-accent-icon" />
            <div>
              <h2>2. The Project File (.prproj / .drp) Ownership Clause</h2>
              <span className="sub-statute">Copyright Act, 1957 &amp; Contract Law</span>
            </div>
          </div>

          <div className="prof-card-body">
            <p>
              A common dispute occurs when a client abruptly demands your complete project file containing your
              proprietary color grading nodes, transition presets, and layered motion templates.
            </p>
            <ul className="prof-checklist">
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>Finished Render vs. Project File:</strong> Your base contract must explicitly state that
                  deliverables include high-resolution exported master files (ProRes / MP4) only.
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>Buyout Markup Fee:</strong> State clearly in your SOW that raw project files (.prproj,
                  .drp, .aep) require an additional buyout fee (typically <strong>50% to 100% markup</strong> over
                  the base project cost).
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} />
                <span>
                  <strong>Conditional Copyright Transfer:</strong> Ownership transfers strictly upon receipt of 100%
                  cleared funds into your bank account.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Invoicing Foreign YouTubers & FIRA */}
        <section className="prof-section-card">
          <div className="prof-card-title-row">
            <Film size={22} className="card-accent-icon" />
            <div>
              <h2>3. Billing Overseas Channels &amp; Remittance Purpose Codes</h2>
              <span className="sub-statute">FEMA &amp; RBI Master Directions</span>
            </div>
          </div>

          <div className="prof-card-body">
            <p>
              If you edit for creators in the US, UK, Australia, or Canada, your work qualifies as zero-rated export
              of services under an active GST LUT.
            </p>
            <p>
              When requesting your Foreign Inward Remittance Advice (FIRA) from Wise, Stripe, or your AD bank,
              specify RBI Purpose Code <strong>P1105</strong> (Audio-visual and related services) or{' '}
              <strong>P0807</strong> (Other computer and media services).
            </p>

            <div className="prof-callout callout-statute">
              <ShieldCheck size={18} />
              <div>
                <strong>Section 44ADA Presumptive Eligibility Note</strong>
                <p>
                  While technical consultancy is explicitly enumerated under Section 44AA(1), commercial video editing
                  is sometimes audited under Section 44AD (6% digital presumptive profit) rather than Section 44ADA.
                  Review your contract wording with a CA to ensure safe classification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Tools Row */}
        <section className="prof-tools-row">
          <div className="tools-row-copy">
            <h3>Essential Tools for Video Editors</h3>
            <p>Model your workstation write-offs and verify zero-rated international invoicing.</p>
          </div>
          <div className="tools-row-buttons">
            <Link href="/tools/expense-planner" className="button button-dark">
              Launch Expense &amp; Hardware Planner <ArrowUpRight size={15} />
            </Link>
            <Link href="/tools/gst-lut-checklist" className="button button-secondary">
              GST LUT Readiness Checklist <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
