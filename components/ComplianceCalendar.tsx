'use client';

import { Calendar, ChevronRight, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Reveal from './Reveal';

export default function ComplianceCalendar() {
  const milestones = [
    {
      quarter: 'Q1',
      date: 'June 15',
      title: 'First Advance Tax Installment (15%)',
      desc: 'Pay 15% of estimated income tax if filing regular P&L. (Section 44ADA filers are exempt until March 15). Also download updated Form 16A certificates.',
      tag: 'ADVANCE TAX',
      penalty: 'Interest under Section 234C if missed.',
    },
    {
      quarter: 'Q2',
      date: 'July 31',
      title: 'Individual ITR Filing Deadline',
      desc: 'Statutory deadline to submit ITR-3 or ITR-4 on incometax.gov.in for all non-audit individuals, freelancers, and proprietary firms.',
      tag: 'ANNUAL ITR',
      penalty: 'Late fee up to ₹5,000 under Section 234F + 1%/mo interest under 234A.',
    },
    {
      quarter: 'Q2',
      date: 'Sept 15',
      title: 'Second Advance Tax Installment (45%)',
      desc: 'Cumulative 45% of estimated annual tax liability must be deposited via challan ITNS 280.',
      tag: 'ADVANCE TAX',
      penalty: 'Interest under Section 234C if missed.',
    },
    {
      quarter: 'Q3',
      date: 'Dec 15',
      title: 'Third Advance Tax Installment (75%)',
      desc: 'Cumulative 75% of tax payable for regular taxpayers. Review mid-year revenue growth from foreign clients.',
      tag: 'ADVANCE TAX',
      penalty: 'Interest under Section 234C if missed.',
    },
    {
      quarter: 'Q4',
      date: 'March 15',
      title: '100% Advance Tax (Critical for 44ADA)',
      desc: 'Crucial deadline for presumptive taxpayers! Under Section 211, all eligible professionals using Section 44ADA must deposit 100% of their advance tax.',
      tag: 'MANDATORY FOR 44ADA',
      penalty: 'Avoid penal interest under Section 234B & 234C.',
    },
    {
      quarter: 'Q4',
      date: 'March 31',
      title: 'GST LUT Annual Renewal Deadline',
      desc: 'File Form GST RFD-11 on the GST portal before April 1st to ensure your international client invoices remain zero-rated without paying 18% IGST.',
      tag: 'GST EXPORT',
      penalty: 'Loss of zero-rated invoicing coverage for April exports.',
    },
  ];

  return (
    <section className="calendar-section" aria-label="Tax Compliance Calendar">
      <div className="section-heading">
        <div>
          <div className="section-kicker">03 / COMPLIANCE RHYTHM</div>
          <h2>
            The Independent Tax Calendar.<br />
            <em>Never pay late fees.</em>
          </h2>
        </div>
        <p>
          Six non-negotiable milestones every Indian freelancer, consultant, and creator must keep on
          their calendar to avoid automatic Section 234 interest penalties.
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

      <div className="calendar-footer-bar">
        <div className="cal-footer-note">
          <ShieldCheck size={18} />
          <span>Dates apply to Assessment Year 2025-26 and Financial Year 2024-25. Always check for CBDT extensions.</span>
        </div>
        <Link href="/#calculator" className="cal-cta-link">
          Calculate your advance tax obligation <ChevronRight size={14} />
        </Link>
      </div>
    </section>
  );
}
