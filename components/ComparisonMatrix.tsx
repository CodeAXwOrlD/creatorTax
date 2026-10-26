'use client';

import { CheckCircle2, ChevronRight, XCircle } from 'lucide-react';
import Link from 'next/link';
import Reveal from './Reveal';

export default function ComparisonMatrix() {
  const comparisons = [
    {
      category: 'International Invoicing',
      chaotic:
        'Invoicing global clients in foreign currency (USD/EUR) without an active LUT; department issues sudden 18% IGST demand notices with cumulative interest penalties.',
      systematic:
        'Annual Form GST RFD-11 filed before April 1st; mandatory statutory zero-rated export declaration and LUT ARN cited on every client invoice.',
      guideUrl: '/guides/gst-lut-renewal',
      guideText: 'LUT Manual',
    },
    {
      category: 'Foreign Remittance Proof',
      chaotic:
        'Relying solely on domestic bank credit SMS or fintech payout emails; unable to produce statutory remittance advice when assessing officers request proof of foreign inward inflow.',
      systematic:
        'Systematically archiving monthly bank Foreign Inward Remittance Advices (FIRA/FIRC) tagged with correct RBI Purpose Codes (P0802 for software, P0807/P1105 for creative services).',
      guideUrl: '/guides/paypal-firc',
      guideText: 'FIRA Playbook',
    },
    {
      category: 'Profit & Record Keeping',
      chaotic:
        'Stressful scrambling over every personal grocery receipt and software subscription, or spending thousands on complex balance sheet audits under regular accounting.',
      systematic:
        'Opting for Section 44ADA Presumptive Taxation: declare 50% gross receipts as deemed taxable profit, legally skip Section 44AA books, and avoid Section 44AB audits.',
      guideUrl: '/guides/section-44ada-freelancers',
      guideText: 'Section 44ADA',
    },
    {
      category: 'Client TDS Withholding',
      chaotic:
        'Treating domestic client TDS deductions (10% under Section 194J) as a lost business expense or sunk cost; never verifying client TAN deposits against PAN records.',
      systematic:
        'Quarterly reconciliation of Form 26AS and AIS; claiming full automated electronic tax credit or direct bank refund with 0.5% monthly statutory interest under Section 244A.',
      guideUrl: '/guides/tds-refund',
      guideText: 'TDS Recovery',
    },
    {
      category: 'Client Engagements & Scope',
      chaotic:
        'Informal WhatsApp agreements, delivering project files prior to final milestone payments, endless unpaid revision rounds, and zero cancellation protection.',
      systematic:
        'Written Statement of Work (SOW) mandating 50% upfront deposit, strict two-round revision ceilings, clear IP copyright transfer clauses upon full payment, and a 40% kill fee.',
      guideUrl: '/guides/creator-contract',
      guideText: 'Contract Standards',
    },
  ];

  return (
    <section className="comparison-section" aria-label="Workflow Comparison">
      <div className="section-header-centered">
        <span className="section-kicker">03 / THE OPERATIONAL DIVIDE · WORKFLOW COMPARISON</span>
        <h2>
          The Reactive Route vs.<br />
          <em>The Systematic Workflow</em>
        </h2>
        <p className="section-subcopy">
          Most independent workers in India don&apos;t have a tax ability problem — they have an administrative visibility
          problem. See how systematic compliance protects your earnings, saves working capital, and eliminates year-end panic.
        </p>
      </div>

      <div className="matrix-table-wrap">
        <div className="matrix-header-row">
          <div className="col-cat">OPERATIONAL DISCIPLINE</div>
          <div className="col-chaotic">
            <XCircle size={18} className="chaotic-icon" />
            <span>THE REACTIVE WAY (RISKY &amp; COSTLY)</span>
          </div>
          <div className="col-systematic">
            <CheckCircle2 size={18} className="systematic-icon" />
            <span>THE CREATORTAX SYSTEM (PREDICTABLE &amp; AUDIT-READY)</span>
          </div>
        </div>

        <div className="matrix-rows">
          {comparisons.map((row, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="matrix-row-item">
              <div className="col-cat">
                <span className="cat-badge">{row.category}</span>
              </div>

              <div className="col-chaotic row-card chaotic-card">
                <div className="card-mobile-label">REACTIVE ROUTE</div>
                <p>{row.chaotic}</p>
              </div>

              <div className="col-systematic row-card systematic-card">
                <div className="card-mobile-label">CREATORTAX SYSTEM</div>
                <p>{row.systematic}</p>
                <Link href={row.guideUrl} className="matrix-guide-pill" aria-label={`Read ${row.guideText} guide`}>
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
