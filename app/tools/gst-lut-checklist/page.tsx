import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ShieldCheck } from 'lucide-react';
import LutTool from '@/components/LutTool';

export const metadata: Metadata = {
  title: 'GST LUT Export Readiness Checklist & Invoice Generator | CreatorTax India',
  description:
    'Interactive 5-point export of services verification under Section 2(6) IGST Act, Form GST RFD-11 filing tracker, and statutory export invoice declaration generator.',
  alternates: {
    canonical: 'https://creatortax.in/tools/gst-lut-checklist',
  },
};

export default function GstLutChecklistPage() {
  return (
    <main className="tool-detail-page">
      <div className="tool-detail-container">
        <Link href="/tools" className="back-link">
          <ArrowLeft size={16} /> Back to Tools Workbench
        </Link>

        <header className="tool-header">
          <div className="tool-header-meta">
            <span className="tool-badge">GST COMPLIANCE TOOL</span>
            <span className="tool-ay-badge">SECTION 16 IGST ACT & RULE 96A</span>
          </div>
          <h1>
            GST LUT Export Readiness<br />
            <em>Interactive Checklist &amp; Generator</em>
          </h1>
          <p className="tool-deck">
            Verify whether your international client revenue qualifies as a zero-rated export of services, track
            your annual Form GST RFD-11 filing on gst.gov.in, and generate the mandatory statutory invoice
            declaration text.
          </p>
        </header>

        {/* Embedded Interactive LUT Tool */}
        <LutTool />

        {/* Documentation Section */}
        <section className="tool-documentation-section">
          <div className="doc-grid">
            <div className="doc-col">
              <h2>Why the LUT is Compulsory for Freelancers</h2>
              <p>
                Under Section 16(3) of the IGST Act, any export of goods or services can be made either on
                payment of IGST (which must subsequently be claimed as a refund) or under a Letter of
                Undertaking (LUT) without paying IGST upfront.
              </p>
              <p>
                Without an active LUT approved for the current financial year, you are legally compelled to charge
                18% IGST on foreign client bills or pay it out-of-pocket, creating severe cashflow stress.
              </p>
            </div>

            <div className="doc-col">
              <h2>The 9-Month Remittance Window</h2>
              <p>
                Under Rule 96A(1)(b) of the CGST Rules, furnishing an LUT binds you to receive convertible
                foreign exchange into your Indian bank account within 9 months from the invoice date (or RBI
                extended period).
              </p>
              <p>
                Always download and archive your monthly Foreign Inward Remittance Advice (FIRA) from PayPal,
                Stripe, or your receiving bank to prove realization.
              </p>
            </div>
          </div>

          <div className="doc-callout-box">
            <ShieldCheck size={24} />
            <div>
              <strong>Need a complete walkthrough?</strong>
              <p>
                Read our exhaustive, step-by-step guide with portal screenshots, witness rules, and common error
                resolutions.
              </p>
              <div className="doc-links-row">
                <Link href="/guides/gst-lut-renewal" className="doc-link">
                  Read GST LUT Step-by-Step Filing Guide <ArrowUpRight size={14} />
                </Link>
                <Link href="/guides/paypal-firc" className="doc-link">
                  Read FIRA & Remittance Guide <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
