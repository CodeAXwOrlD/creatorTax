'use client';

import { CheckCircle2, ChevronRight, XCircle } from 'lucide-react';
import Link from 'next/link';
import Reveal from './Reveal';

export default function ComparisonMatrix() {
  const comparisons = [
    {
      category: 'International Invoicing',
      chaotic: 'Invoicing global clients in USD without an LUT; sudden 18% IGST liability notice from GST department.',
      systematic: 'Annual Form GST RFD-11 filed before April 1st; LUT ARN cited on every zero-rated export invoice.',
      guideUrl: '/guides/gst-lut-renewal',
      guideText: 'LUT Guide',
    },
    {
      category: 'Foreign Remittance Proof',
      chaotic: 'Relying only on bank SMS or PayPal balance; no inward remittance advice when banks ask for proof.',
      systematic: 'Auto-archiving monthly FIRA / e-BRC with correct RBI Purpose Codes (P0802 / P0807) for clean audit defense.',
      guideUrl: '/guides/paypal-firc',
      guideText: 'FIRA Playbook',
    },
    {
      category: 'Profit & Record Keeping',
      chaotic: 'Stressing over every coffee bill, software invoice, and complex balance-sheet audits at year-end.',
      systematic: 'Presumptive Taxation under Section 44ADA: legally declare 50% gross receipts as profit, skip balance sheet audits.',
      guideUrl: '/guides/section-44ada-freelancers',
      guideText: 'Section 44ADA',
    },
    {
      category: 'Client TDS Withholding',
      chaotic: 'Losing 10% of gross invoice value to Section 194J; treating withheld tax as lost money.',
      systematic: 'Reconciling Form 26AS & AIS in June; claiming full electronic refund with 6% statutory interest into your bank.',
      guideUrl: '/guides/tds-refund',
      guideText: 'TDS Refund',
    },
    {
      category: 'Client Engagements',
      chaotic: 'Vague WhatsApp chats, endless unpaid revisions, project cancellation without compensation.',
      systematic: 'Ironclad SOW with milestone payments (50% deposit), strict 2-round revision limits, and a 40% kill fee.',
      guideUrl: '/guides/creator-contract',
      guideText: 'Contract Guide',
    },
  ];

  return (
    <section className="comparison-section" aria-label="Workflow Comparison">
      <div className="section-header-centered">
        <span className="section-kicker">TWO WAYS TO RUN INDEPENDENT WORK</span>
        <h2>
          The Chaotic Route vs.<br />
          <em>The Systematic Workflow</em>
        </h2>
        <p className="section-subcopy">
          Most freelancers don&apos;t have a tax problem — they have an administrative visibility problem.
          See the difference structured systems make.
        </p>
      </div>

      <div className="matrix-table-wrap">
        <div className="matrix-header-row">
          <div className="col-cat">OPERATIONAL AREA</div>
          <div className="col-chaotic">
            <XCircle size={18} className="chaotic-icon" />
            <span>THE CHAOTIC / REACTIVE WAY</span>
          </div>
          <div className="col-systematic">
            <CheckCircle2 size={18} className="systematic-icon" />
            <span>THE CREATORTAX SYSTEM</span>
          </div>
        </div>

        <div className="matrix-rows">
          {comparisons.map((row, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="matrix-row-item">
              <div className="col-cat">
                <span className="cat-badge">{row.category}</span>
              </div>

              <div className="col-chaotic row-card chaotic-card">
                <div className="card-mobile-label">CHAOTIC WAY</div>
                <p>{row.chaotic}</p>
              </div>

              <div className="col-systematic row-card systematic-card">
                <div className="card-mobile-label">CREATORTAX WAY</div>
                <p>{row.systematic}</p>
                <Link href={row.guideUrl} className="matrix-guide-pill">
                  <span>{row.guideText}</span>
                  <ChevronRight size={13} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
