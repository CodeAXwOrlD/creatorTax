import Link from 'next/link';
import { MoveUpRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-top">
        <div className="footer-brand-col">
          <Link href="/" className="brand">
            <span className="brand-mark">
              ct<span>.</span>
            </span>
            <div className="brand-text">
              <span className="brand-name">
                CreatorTax <i>India</i>
              </span>
              <span className="brand-tagline">FIELD GUIDE FOR INDEPENDENT WORK</span>
            </div>
          </Link>
          <p className="footer-tagline">
            Practical tax manuals, interactive calculators, and compliance playbooks for India&apos;s independent
            creators, video editors, software engineers, and digital consultants.
          </p>
          <div className="footer-ay-tag">
            <span>ASSESSMENT YEARS: AY 2025-26 &amp; AY 2026-27</span>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <span className="footer-col-title">FIELD GUIDES</span>
            <Link href="/learn">All Guides (Knowledge Shelf)</Link>
            <Link href="/guides/gst-lut-renewal">GST LUT Renewal Guide</Link>
            <Link href="/guides/paypal-firc">PayPal &amp; Stripe FIRA</Link>
            <Link href="/guides/section-44ada-freelancers">Section 44ADA Slabs</Link>
            <Link href="/guides/tds-refund">TDS Refund Recovery</Link>
            <Link href="/guides/home-office-expenses">Home Office Expenses</Link>
            <Link href="/guides/creator-contract">Creator Contracts SOW</Link>
            <Link href="/guides/itr-filing-creators">ITR-3 vs ITR-4 Decision</Link>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">INTERACTIVE TOOLS</span>
            <Link href="/tools">Tools Workbench (All)</Link>
            <Link href="/tools/freelancer-tax-estimator">Freelancer Tax Estimator</Link>
            <Link href="/tools/gst-lut-checklist">GST LUT Checklist &amp; Generator</Link>
            <Link href="/tools/expense-planner">Dual-Use Expense Allocator</Link>
            <Link href="/tools/tds-refund-checklist">TDS Reconciliation Planner</Link>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">BY PROFESSION</span>
            <Link href="/for-developers">For Software Developers</Link>
            <Link href="/for-video-editors">For Video Editors</Link>
            <Link href="/for-creators">For Content Creators</Link>
            <Link href="/for-designers">For UI/UX Designers</Link>
            <Link href="/for-freelancers">For General Freelancers</Link>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">GOVERNANCE &amp; LEGAL</span>
            <Link href="/about">About Us &amp; Reviewers</Link>
            <Link href="/editorial-policy">Editorial &amp; Sourcing Standards</Link>
            <Link href="/contact">Contact Research Desk</Link>
            <Link href="/privacy">Privacy Policy (DPDPA 2023)</Link>
            <Link href="/disclaimer">Statutory Legal Disclaimer</Link>
          </div>
        </div>

        <div className="footer-back-top-row">
          <Link href="#top" className="back-top" aria-label="Return to top of page">
            <span>Back to top</span>
            <MoveUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="footer-middle-note">
        <ShieldCheck size={18} />
        <p>
          <strong>Statutory Disclaimer:</strong> CreatorTax India is an educational publication and is not a
          Chartered Accountancy firm, legal counsel, or financial advisor. All materials and tools are provided
          for informational and illustrative guidance under Indian law. Tax laws change regularly; always seek
          personal advice from a qualified Chartered Accountant before filing returns.
        </p>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} CreatorTax India. Designed and engineered in India.</span>
        <div className="footer-bottom-links">
          <Link href="/about">About</Link>
          <Link href="/editorial-policy">Editorial Policy</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
        <span>Made for clarity, not financial theatre.</span>
      </div>
    </footer>
  );
}
