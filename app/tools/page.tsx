import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Calculator,
  CheckSquare,
  Globe2,
  Receipt,
  Scale,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interactive Tax Tools & Calculators for Indian Freelancers | CreatorTax India',
  description:
    'Free, privacy-first interactive tools for Indian freelancers, creators, and engineers: Section 44ADA tax estimator, GST LUT readiness checklist, business expense planner, and TDS refund tracker.',
  alternates: {
    canonical: 'https://creatortax.in/tools',
  },
};

export default function ToolsHubPage() {
  const tools = [
    {
      id: 'freelancer-tax-estimator',
      title: 'Freelancer Tax & Regime Estimator',
      category: 'Direct Tax · Section 44ADA',
      description:
        'Compare New Tax Regime (Section 115BAC) vs Old Tax Regime, declare 50% presumptive profit under Section 44ADA, and calculate your net tax payable or potential NACH refund.',
      features: [
        'AY 2025-26 and AY 2026-27 slab rules',
        'Section 87A rebate calculation (₹0 tax up to ₹7L)',
        '4% Health and Education Cess + Surcharge',
        'Form 26AS client TDS offset',
      ],
      icon: Calculator,
      url: '/tools/freelancer-tax-estimator',
      badge: 'POPULAR TOOL',
    },
    {
      id: 'gst-lut-checklist',
      title: 'GST LUT Export Readiness Checklist',
      category: 'Indirect Tax · Cross-Border',
      description:
        'Verify your export-of-services eligibility under Section 2(6) of the IGST Act, prepare required documents, and get the mandatory invoice declaration text for foreign clients.',
      features: [
        '5 statutory export-of-services tests',
        'Step-by-step Form GST RFD-11 filing checklist',
        'Mandatory invoice header snippet generator',
        'FIRA and RBI purpose code verification',
      ],
      icon: Globe2,
      url: '/tools/gst-lut-checklist',
      badge: 'ZERO-RATED EXPORTS',
    },
    {
      id: 'expense-planner',
      title: 'Dual-Use Business Expense Allocator',
      category: 'Record Keeping · Section 37(1)',
      description:
        'Determine whether itemized accounting beats Section 44ADA. Calculate room area apportionment for home rent, fiber broadband, and Section 32 hardware depreciation (40% for laptops).',
      features: [
        'Home office carpet area apportionment',
        'Written Down Value (WDV) hardware depreciation',
        'Software SaaS annual write-off tracker',
        'Break-even comparison vs 50% presumptive profit',
      ],
      icon: Receipt,
      url: '/tools/expense-planner',
      badge: 'EXPENSE PLANNER',
    },
    {
      id: 'tds-refund-checklist',
      title: 'TDS Reconciliation & Refund Planner',
      category: 'Compliance · Form 26AS',
      description:
        'Organize tax withheld by domestic clients under Section 194J and 194C, verify your pre-validated bank status, and calculate statutory interest under Section 244A.',
      features: [
        'Section 194J (10%/2%) vs 194C (1%) tracking',
        'Form 26AS and AIS discrepancy resolution steps',
        'Pre-validated refund bank account checklist',
        'Section 244A refund interest calculator (0.5%/mo)',
      ],
      icon: CheckSquare,
      url: '/tools/tds-refund-checklist',
      badge: 'REFUND RECOVERY',
    },
  ];

  return (
    <main className="tools-hub-page">
      {/* Hero Banner */}
      <section className="tools-hero">
        <div className="tools-hero-inner">
          <div className="tools-hero-copy">
            <span className="section-kicker">INTERACTIVE WORKBENCH · AY 2025-26 & 2026-27</span>
            <h1>
              Practical tools for<br />
              <em>independent finance.</em>
            </h1>
            <p className="tools-lead">
              Free, browser-native calculators and checklists engineered for Indian creators, developers,
              and consultants. Every tool runs 100% locally on your device — your financial numbers
              never touch a remote server or analytics tracker.
            </p>

            <div className="tools-meta-row">
              <span className="privacy-badge">
                <ShieldCheck size={16} /> 100% Client-Side & Private
              </span>
              <span className="statute-badge">
                <Scale size={16} /> Grounded in Primary Statutes
              </span>
            </div>
          </div>

          <div className="tools-hero-visual">
            <div className="tools-photo-wrap">
              <Image
                src="/images/tools-workbench.jpg"
                alt="Architectural financial desk with leather ledger, calculator, and crisp invoices in morning light"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="tools-hero-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="tools-grid-section">
        <div className="tools-section-header">
          <div>
            <span className="section-kicker">AVAILABLE UTILITIES (04)</span>
            <h2>Select a tool to begin</h2>
          </div>
          <p>
            Choose the utility tailored to your operational question — whether estimating annual income tax,
            zero-rating international client invoices, or organizing dual-use expenses.
          </p>
        </div>

        <div className="tools-card-grid">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.id} className="tool-workbench-card">
                <div className="tool-card-top">
                  <div className="tool-icon-circle">
                    <Icon size={24} />
                  </div>
                  <span className="tool-category-badge">{t.badge}</span>
                </div>

                <span className="tool-category-sub">{t.category}</span>
                <h3>{t.title}</h3>
                <p>{t.description}</p>

                <div className="tool-features-list">
                  {t.features.map((f, i) => (
                    <div key={i} className="tool-feat-line">
                      <span className="feat-bullet">▪</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="tool-card-footer">
                  <Link href={t.url} className="button button-dark tool-launch-btn">
                    <span>Launch Utility</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Assumptions & Compliance Notice */}
      <section className="tools-notice-section">
        <div className="tools-notice-card">
          <ShieldCheck size={28} className="notice-icon" />
          <div className="notice-copy">
            <h3>Our Calculation Principles & Limitations</h3>
            <p>
              These utilities are simplified mathematical and administrative models based on current Indian
              tax legislation (Income Tax Act, 1961, Integrated GST Act, 2017, and relevant CBDT/CBIC
              notifications). They do not account for Alternate Minimum Tax (AMT), undisclosed foreign
              assets, special capital gains tax rates, or judicial disputes. Always verify calculations with a
              practicing Chartered Accountant before filing returns.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
