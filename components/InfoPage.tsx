import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

interface InfoSection {
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

interface PageData {
  title: string;
  subtitle: string;
  badge: string;
  sections: InfoSection[];
}

const pagesData: Record<string, PageData> = {
  about: {
    title: 'A Little Clarity Goes a Long Way.',
    subtitle:
      'CreatorTax India is an independent educational platform built to bring transparency, calm, and precision to the administrative and tax lives of Indian digital professionals.',
    badge: 'OUR MISSION & EDITORIAL STANDARDS',
    sections: [
      {
        heading: 'Why CreatorTax India Exists',
        paragraphs: [
          'India is experiencing an unprecedented boom in independent creative and technical work. Hundreds of thousands of software developers, video editors, 3D animators, UI/UX designers, and digital consultants earn a living by serving clients across the United States, Europe, Southeast Asia, and India.',
          'Yet the tax and banking architecture that governs this work remains deeply opaque. Confusing acronyms like LUT, FIRC, FIRA, AIS, and Section 44ADA create constant anxiety. Many creators either overpay taxes unnecessarily or make avoidable errors that attract automated scrutiny notices.',
          'CreatorTax India was founded with a single mission: to turn dense statutory rules into plain-English, step-by-step manuals with zero financial theatre.',
        ],
      },
      {
        heading: 'Our Editorial Board & Verification Process',
        paragraphs: [
          'We do not publish unverified opinions, social media rumors, or casual tax shortcuts. Every single guide on this website undergoes a strict two-stage editorial pipeline:',
        ],
        bulletPoints: [
          'Direct Statutory Grounding: Every article cites primary legislation (the Income Tax Act, 1961, Central Goods and Services Tax Act, 2017, and Reserve Bank of India Master Directions).',
          'Chartered Accountant Review: Prior to publication, drafts are reviewed by qualified, practicing Chartered Accountants with experience in foreign remittances and direct taxation.',
          'Annual Assessment Year Audits: Whenever the Union Budget or Finance Act amends thresholds, tax slabs, or rebate limits, our guides and calculators are updated immediately.',
        ],
      },
      {
        heading: 'Independence and Non-Advisory Status',
        paragraphs: [
          'CreatorTax India is an educational publisher. We do not sell proprietary accounting software, take referral commissions from CA firms, or file returns on behalf of clients. This independence guarantees that our advice remains unbiased and focused solely on what serves the creator best.',
        ],
      },
    ],
  },
  contact: {
    title: 'Have a Question for the Editorial Desk?',
    subtitle:
      'We welcome constructive feedback, guide topic requests, corrections, and partnerships from the creative and tax communities.',
    badge: 'CONTACT & EDITORIAL INQUIRIES',
    sections: [
      {
        heading: 'Get in Touch',
        paragraphs: [
          'For editorial queries, article corrections, or suggestions for new field guides, reach out directly to our publishing desk:',
          '• Editorial Desk Email: hello@creatortax.in',
          '• Corrections & Revisions: corrections@creatortax.in',
          '• Partnerships & Media: press@creatortax.in',
        ],
      },
      {
        heading: 'Important Security & Privacy Notice',
        paragraphs: [
          'Please do NOT send sensitive personal tax documents — such as your Permanent Account Number (PAN), Aadhaar Number, bank account numbers, login credentials, or Form 26AS PDFs — to our email addresses.',
          'CreatorTax India will never ask for your passwords, bank OTPs, or government portal credentials.',
        ],
      },
      {
        heading: 'Individual Tax Assistance',
        paragraphs: [
          'While we read every piece of feedback to improve our educational manuals, we cannot provide personalized tax advice or represent taxpayers in assessment proceedings. For individual filings, please engage a practicing Chartered Accountant.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Your Privacy Matters to Us.',
    subtitle:
      'A plain-English explanation of our privacy practices, cookie usage, data security, and adherence to the Digital Personal Data Protection Act (DPDPA), 2023.',
    badge: 'PRIVACY POLICY & DATA PRACTICES',
    sections: [
      {
        heading: '1. Information We Do Not Collect',
        paragraphs: [
          'CreatorTax India does not require user accounts, passwords, or logins to access our educational library. Our interactive tax estimator runs entirely on the client side inside your web browser. The income numbers, receipts, and TDS figures you enter never leave your device and are never transmitted to our servers or stored in any database.',
        ],
      },
      {
        heading: '2. Cookies and Web Analytics',
        paragraphs: [
          'We may use privacy-conscious analytics tools to measure anonymous website traffic, page views, and reading patterns (e.g. which guides are most popular). These metrics help us decide which tax guides to write next.',
          'Third-party advertising partners (such as Google AdSense) may use cookies (including the Google DART cookie) to serve relevant advertisements based on visits to this and other websites. You can opt out of personalized advertising by visiting Google Ads Settings (https://www.google.com/settings/ads).',
        ],
      },
      {
        heading: '3. Compliance with Indian Law (DPDPA 2023)',
        paragraphs: [
          'We process data in strict accordance with the Digital Personal Data Protection Act, 2023. If you communicate with us via email, we retain your email address solely to respond to your inquiry and do not sell, rent, or trade your contact details with third-party marketers.',
        ],
      },
      {
        heading: '4. External Links',
        paragraphs: [
          'Our guides frequently link to official government portals (incometax.gov.in, gst.gov.in, rbi.org.in). We are not responsible for the privacy practices or content of third-party external websites.',
        ],
      },
    ],
  },
  disclaimer: {
    title: 'Statutory Legal & Tax Disclaimer',
    subtitle:
      'Please read this statutory disclaimer carefully before relying on the information or tools provided on CreatorTax India.',
    badge: 'LEGAL & STATUTORY DISCLAIMER',
    sections: [
      {
        heading: '1. Purely Educational & Informational Content',
        paragraphs: [
          'All material published on CreatorTax India — including field guides, tax calculations, checklists, and templates — is provided for general informational and educational purposes only. Nothing on this website constitutes chartered accountancy advice, legal counsel, investment advice, or formal tax planning under the Chartered Accountants Act, 1949 or Advocates Act, 1961.',
        ],
      },
      {
        heading: '2. No Client-Professional Relationship',
        paragraphs: [
          'Browsing this website, utilizing our interactive tools, or communicating with us via email does not create a Chartered Accountant-client, attorney-client, or fiduciary relationship between you and CreatorTax India or its contributors.',
        ],
      },
      {
        heading: '3. Illustrative Nature of Estimators',
        paragraphs: [
          'Our tax estimator is a simplified mathematical model based on general assumptions (such as the 50% presumptive profit rule under Section 44ADA and standard tax slabs under Section 115BAC). It intentionally omits special capital gains rates, Alternate Minimum Tax (AMT), Section 234 interest calculations, and individual audit nuances. It should never be used as a final tax filing computation.',
        ],
      },
      {
        heading: '4. Dynamic Nature of Indian Tax Law',
        paragraphs: [
          'Tax statutes, judicial precedents, CBDT notifications, and GST portal workflows in India change frequently. While we strive to maintain current information, we make no representations or warranties regarding the absolute accuracy, completeness, or timeliness of any content. Always verify important decisions with official sources and a qualified Chartered Accountant before acting.',
        ],
      },
    ],
  },
};

export default function InfoPage({ kind }: { kind: keyof typeof pagesData }) {
  const page = pagesData[kind] || pagesData.about;

  return (
    <main className="info-page">
      <Link href="/" className="back-link">
        <ArrowLeft size={16} /> Back to CreatorTax India
      </Link>

      <div className="section-kicker">{page.badge}</div>
      <h1 className="info-page-title">{page.title}</h1>
      <p className="info-page-deck">{page.subtitle}</p>

      <div className="info-content-body">
        {page.sections.map((sec, idx) => (
          <section key={idx} className="info-section-item">
            <h2>{sec.heading}</h2>
            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}

            {sec.bulletPoints && (
              <ul className="info-bullets">
                {sec.bulletPoints.map((b, bIdx) => (
                  <li key={bIdx}>
                    <CheckCircle2 size={16} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="info-footer-cta">
          <div className="cta-trust-note">
            <ShieldCheck size={20} />
            <div>
              <strong>Grounded in Indian Tax & Privacy Law</strong>
              <p>Reviewed for Assessment Year 2025-26 & 2026-27.</p>
            </div>
          </div>
          <Link className="button button-dark" href="/#guides">
            Explore Field Guides <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
}
