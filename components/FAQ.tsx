'use client';

import { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
  tag: string;
}

const faqs: FaqItem[] = [
  {
    tag: 'CA ADVICE',
    q: 'Is CreatorTax India a substitute for hiring a Chartered Accountant?',
    a: 'No. CreatorTax India is an educational publication and research tool, not a registered chartered accountancy firm or legal advisor. Our mission is to make tax laws and banking workflows transparent so you can maintain organized records, avoid basic penalties, and ask informed questions when working with a qualified CA. For formal tax return filing, dispute representation, or custom corporate structures, you should consult an accountable professional.',
  },
  {
    tag: 'SEC 44ADA',
    q: 'Can video editors, designers, and creators use Section 44ADA presumptive taxation?',
    a: 'Section 44ADA explicitly enumerates specified professions under Section 44AA(1) (technical consultancy, engineering, interior decoration, legal, medical, and accountancy). Software developers, UI/UX engineers, and technical consultants clearly qualify. Video editors, creative directors, and content creators often fall under commercial services; depending on contract wording, some file under Technical Consultancy while others use Section 44AD (6% digital presumptive profit). We recommend having your contracts reviewed by a CA to determine the safest classification.',
  },
  {
    tag: 'TAX REGIMES',
    q: 'Which tax regime is better for freelancers: New Regime or Old Regime?',
    a: 'For most independent workers without massive housing loan interest or high Section 80C/80D investments, the New Tax Regime (Section 115BAC) offers substantially lower slab rates (up to ₹3L at 0%, 3–7L at 5%, 7–10L at 10%, 10–12L at 15%, 12–15L at 20%). Under the New Regime, individuals with taxable income up to ₹7,00,000 pay zero tax thanks to the Section 87A rebate. Our interactive estimator above calculates both side-by-side so you can see your exact difference.',
  },
  {
    tag: 'GST & LUT',
    q: 'Do I need to register for GST if 100% of my revenue comes from international clients?',
    a: 'If your aggregate worldwide turnover across all supplies is below ₹20 Lakhs in a financial year (or ₹10 Lakhs in special category states), Notification No. 10/2017-Integrated Tax exempts you from mandatory registration for export of services. However, the moment your cumulative receipts cross ₹20 Lakhs, GST registration is compulsory. Once registered, you must file an annual Letter of Undertaking (LUT) in Form GST RFD-11 before April 1st to export services at 0% IGST.',
  },
  {
    tag: 'FOREIGN INCOME',
    q: 'How do I obtain my FIRA when clients pay through PayPal, Stripe, or Wise?',
    a: 'Fintech platforms partner with Indian Authorised Dealer (AD Category-I) banks (such as Citibank, Standard Chartered, or HDFC) to convert foreign currency into INR. PayPal provides downloadable monthly electronic FIRAs under Activity > Statements > Monthly FIRC/FIRA. Stripe issues Inward Remittance Statements under Dashboard Reports. For direct SWIFT wire transfers, email your receiving Indian bank branch with your client invoice and request a Foreign Inward Remittance Advice citing the appropriate RBI Purpose Code (e.g. P0802 for software or P0807 for creative consulting).',
  },
  {
    tag: 'EXPENSES',
    q: 'Can I deduct rent, laptops, and internet expenses under Section 44ADA?',
    a: 'No. When you opt for Section 44ADA, you declare 50% of your gross receipts as taxable profit, and the remaining 50% is deemed by statute to cover all your business expenses, rent, utilities, and depreciation. You cannot claim individual expense deductions against presumptive income. If your actual verified business expenses exceed 50% of receipts, you can choose regular taxation (ITR-3), maintain audited books under Section 44AA, and claim itemized deductions under Section 37(1).',
  },
  {
    tag: 'TDS REFUND',
    q: 'A domestic client deducted 10% TDS under Section 194J. How do I get that money back?',
    a: 'TDS is not a sunk cost; it is an advance tax payment deposited with the government against your PAN. When you file your ITR in July, the tax portal cross-checks your total calculated tax liability against the TDS recorded in Form 26AS and the AIS. If your final tax liability is less than the total TDS deducted (common for freelancers earning below ₹7–10 Lakhs under the New Regime), the excess amount is electronically refunded to your pre-validated bank account with 0.5% monthly interest under Section 244A.',
  },
  {
    tag: 'CALENDAR & DEADLINES',
    q: 'When must I pay advance tax and file my annual return to avoid interest penalties?',
    a: 'If you file under Section 44ADA, you are required to pay 100% of your estimated tax on or before March 15th of the financial year. Regular business taxpayers must pay in four quarterly installments (June 15, Sept 15, Dec 15, March 15). The annual statutory deadline to file your Income Tax Return (ITR-3 or ITR-4) without penalty fees is July 31st of the assessment year.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section" aria-label="Frequently Asked Questions">
      <div className="faq-heading-pane">
        <div className="section-kicker">08 / THE FINE PRINT, CLARIFIED · COMMON QUESTIONS</div>
        <h2>
          Good questions<br />
          <em>are a good start.</em>
        </h2>
        <p>
          Straightforward answers to the legal, tax, and banking questions Indian creators and
          freelancers ask most often.
        </p>

        <div className="faq-trust-badge">
          <ShieldCheck size={20} />
          <div>
            <strong>Verified Against Statutory Rules</strong>
            <span>Updated for Assessment Year 2025-26 & 2026-27</span>
          </div>
        </div>
      </div>

      <div className="faq-list">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div className={`faq-item ${isOpen ? 'faq-open' : ''}`} key={idx}>
              <button
                type="button"
                className="faq-trigger"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <div className="faq-trigger-content">
                  <span className="faq-item-tag">{faq.tag}</span>
                  <span className="faq-question-text">{faq.q}</span>
                </div>
                <ChevronDown size={18} className="faq-arrow-icon" />
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
