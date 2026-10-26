import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Editorial & Sourcing Policy | CreatorTax India',
  description:
    'Our public editorial standards, primary statutory sourcing policy, fact-checking methodology, and correction protocols.',
  alternates: {
    canonical: 'https://creatortax.in/editorial-policy',
  },
};

export default function EditorialPolicyPage() {
  return (
    <main className="info-page">
      <Link href="/" className="back-link">
        <ArrowLeft size={16} /> Back to CreatorTax India
      </Link>

      <div className="section-kicker">EDITORIAL GOVERNANCE &amp; STANDARDS</div>
      <h1 className="info-page-title">
        Our Editorial &amp;<br />
        <em>Correction Policy</em>
      </h1>
      <p className="info-page-deck">
        CreatorTax India publishes educational guidance for independent digital professionals. Because tax laws
        carry legal and financial consequences, our editorial integrity rests on three pillars: primary statutory
        grounding, chartered accountant verification, and transparent public correction protocols.
      </p>

      <div className="info-content-body">
        <section className="info-section-item">
          <h2>1. Primary Statutory Sourcing Standard</h2>
          <p>
            We do not rely on second-hand blog summaries, hearsay, or casual social media advice. Every field guide
            and calculator published on CreatorTax India is cited directly from primary statutory sources:
          </p>
          <ul className="info-bullets">
            <li>
              <CheckCircle2 size={16} />
              <span>
                <strong>Direct Taxation:</strong> Income Tax Act, 1961, relevant Finance Acts, and Central Board of
                Direct Taxes (CBDT) circulars and notifications.
              </span>
            </li>
            <li>
              <CheckCircle2 size={16} />
              <span>
                <strong>Indirect Taxation (GST):</strong> Central Goods and Services Tax (CGST) Act, 2017, Integrated
                GST (IGST) Act, 2017, and Central Board of Indirect Taxes and Customs (CBIC) circulars.
              </span>
            </li>
            <li>
              <CheckCircle2 size={16} />
              <span>
                <strong>Cross-Border Remittances:</strong> Foreign Exchange Management Act (FEMA), 1999 and Reserve
                Bank of India (RBI) Master Directions on foreign inward remittances.
              </span>
            </li>
          </ul>
        </section>

        <section className="info-section-item">
          <h2>2. Two-Stage Peer Review Pipeline</h2>
          <p>
            Before any guide is approved for publication:
          </p>
          <p>
            • <strong>Stage 1:</strong> Senior tax researchers draft the procedural walkthrough, incorporating practical
            screenshots, portal navigation routes, and worked calculations.
          </p>
          <p>
            • <strong>Stage 2:</strong> A practicing Fellow Chartered Accountant (FCA) reviews the calculations,
            assessment-year assumptions, and statutory edge cases for technical accuracy.
          </p>
        </section>

        <section className="info-section-item">
          <h2>3. Transparent Correction Protocol</h2>
          <p>
            Tax laws and portal processes change. When an error, portal workflow update, or judicial clarification is
            identified:
          </p>
          <p>
            1. We investigate the discrepancy against primary government sources within 24 hours.
          </p>
          <p>
            2. If an update is warranted, we amend the guide and display an explicit &quot;Updated On&quot; notice at the top
            of the article.
          </p>
          <p>
            3. Readers and practitioners can submit verified corrections directly to{' '}
            <Link href="/contact" className="text-link">
              corrections@creatortax.in
            </Link>
            .
          </p>
        </section>

        <section className="info-section-item">
          <h2>4. Commercial Independence</h2>
          <p>
            CreatorTax India does not accept sponsored editorial content, sell proprietary accounting software, or take
            undisclosed referral kickbacks from accounting firms. When we recommend accounting practices, our
            analysis is driven strictly by what protects the independent creator best.
          </p>
        </section>

        <div className="info-footer-cta">
          <div className="cta-trust-note">
            <ShieldCheck size={20} />
            <div>
              <strong>Have an Editorial Suggestion?</strong>
              <p>Reach out to our research desk anytime.</p>
            </div>
          </div>
          <Link className="button button-dark" href="/contact">
            Submit Feedback to Editorial Desk <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
}
