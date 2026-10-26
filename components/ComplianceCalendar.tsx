'use client';

import { Calendar, Clock } from 'lucide-react';
import Reveal from './Reveal';

export default function ComplianceCalendar() {
  const milestones = [
    {
      quarter: 'Q1',
      date: 'June 15',
      title: 'First Advance Tax Installment (15%)',
      desc: 'Pay 15% of estimated net annual tax liability if filing regular accounting (ITR-3). Presumptive filers under Section 44ADA are exempt until March 15. Cross-check updated Form 16A certificates from clients.',
      tag: 'ADVANCE TAX',
      penalty: 'Interest under Section 234C (1% per month) if missed.',
    },
    {
      quarter: 'Q2',
      date: 'July 31',
      title: 'Annual Income Tax Return (ITR) Deadline',
      desc: 'Statutory deadline to submit ITR-3 or ITR-4 on incometax.gov.in for all non-audit individuals, independent professionals, and proprietary firms. Pre-validate your bank account to avoid refund dispatch delays.',
      tag: 'ANNUAL ITR',
      penalty: 'Late fee up to ₹5,000 under Section 234F + 1%/month interest under 234A.',
    },
    {
      quarter: 'Q2',
      date: 'Sept 15',
      title: 'Second Advance Tax Installment (45%)',
      desc: 'Cumulative 45% of estimated annual tax liability must be deposited via challan ITNS 280 (under Major Head 0021 / Minor Head 100). Essential checkpoint for freelancers experiencing mid-year revenue growth.',
      tag: 'ADVANCE TAX',
      penalty: 'Interest under Section 234C if installment is delayed.',
    },
    {
      quarter: 'Q3',
      date: 'Dec 15',
      title: 'Third Advance Tax Installment (75%)',
      desc: 'Cumulative 75% of tax liability payable for regular taxpayers. Review foreign inward remittances (Stripe, PayPal, Wise) and ensure FIRAs are reconciled before calendar year-end.',
      tag: 'ADVANCE TAX',
      penalty: 'Interest under Section 234C if shortfall exceeds 25%.',
    },
    {
      quarter: 'Q4',
      date: 'March 15',
      title: '100% Advance Tax (Mandatory for Section 44ADA)',
      desc: 'The single most critical deadline for presumptive taxpayers! Under the proviso to Section 211, professionals declaring 50% deemed profit under Section 44ADA must pay 100% of their estimated tax in a single tranche.',
      tag: 'CRITICAL FOR 44ADA',
      penalty: 'Penal interest under Sections 234B & 234C applies on unpaid tax.',
    },
    {
      quarter: 'Q4',
      date: 'March 31',
      title: 'GST Letter of Undertaking (LUT) Annual Renewal',
      desc: 'File Form GST RFD-11 on gst.gov.in before April 1st to ensure your international client invoices remain zero-rated without paying 18% IGST upfront throughout the upcoming financial year.',
      tag: 'GST EXPORT',
      penalty: 'Loss of zero-rated export status for invoices issued in April.',
    },
  ];

  return (
    <section className="calendar-section" aria-label="Tax Compliance Calendar">
      <div className="section-heading">
        <div>
          <div className="section-kicker">05 / ANNUAL STATUTORY TIMELINE · COMPLIANCE RHYTHM</div>
          <h2>
            The Independent Tax Calendar.<br />
            <em>Never pay late fees.</em>
          </h2>
        </div>
        <p>
          Six non-negotiable statutory milestones every Indian freelancer, consultant, and creator must keep on
          their operational calendar. Timely advance tax installments and annual filings eliminate automatic interest
          penalties under Sections 234A, 234B, and 234C of the Income Tax Act, while preserving 0% IGST export status.
        </p>
      </div>

      <div className="timeline-grid">
        {milestones.map((m, idx) => (
          <Reveal key={idx} delay={idx * 0.06} className="timeline-card-wrap">
            <div className="timeline-card">
              <div className="timeline-card-top">
                <span className="quarter-badge">{m.quarter}</span>
                <span className="timeline-tag">{m.tag}</span>
              </div>

              <div className="timeline-date-row">
                <Calendar size={18} className="cal-icon" />
                <span className="timeline-date">{m.date}</span>
              </div>

              <h3>{m.title}</h3>
              <p>{m.desc}</p>

              <div className="timeline-penalty">
                <Clock size={13} />
                <span>{m.penalty}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
