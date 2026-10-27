'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  FileCheck2,
  FileText,
  Layers,
  LayoutGrid,
  Scale,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface KeyPoint {
  title: string;
  desc: string;
  highlight?: string;
}

interface JourneyStep {
  number: string;
  stageName: string;
  tag: string;
  title: string;
  lead: string;
  keyPoints: KeyPoint[];
  checkpoint: string;
  links: Array<{
    title: string;
    href: string;
    badge: string;
  }>;
}

const steps: JourneyStep[] = [
  {
    number: '01',
    stageName: 'CLASSIFICATION',
    tag: 'ORIGIN & NATURE OF FUNDS',
    title: 'Understand your income',
    lead: 'How money arrives and where clients reside dictate every statutory consequence.',
    keyPoints: [
      {
        title: 'Domestic TDS Credit (Sec 194J & 194C)',
        desc: 'Domestic client receipts undergo 10% (194J) or 1% to 2% (194C) TDS. This is an advance tax asset registered on Form 26AS against your PAN, not a forfeited expense.',
        highlight: '10% Advance Tax Asset',
      },
      {
        title: 'Cross-Border Zero-Rating (IGST Sec 2(6))',
        desc: 'Foreign client revenue received in convertible foreign exchange represents an "export of services". With a valid LUT, you legally invoice at 0% IGST without locking up capital.',
        highlight: '0% IGST with LUT',
      },
      {
        title: '50% Presumptive Relief (Section 44ADA)',
        desc: 'Specified vocations (software developers, designers, technical consultants) can declare 50% of gross receipts as deemed profit, legally skipping Section 44AA books and audits.',
        highlight: '50% Deemed Profit',
      },
    ],
    checkpoint: 'Statutory Check: RBI Purpose Codes (P0802 / P0807) & Section 44AA(1) Specified Professions',
    links: [
      {
        title: 'Section 44ADA Presumptive Tax Manual',
        href: '/guides/section-44ada-freelancers',
        badge: '50% Relief',
      },
      {
        title: 'PayPal, Stripe & Wire FIRA Protocol',
        href: '/guides/paypal-firc',
        badge: 'Foreign Inflow',
      },
      {
        title: 'Freelancer Taxation Master Overview',
        href: '/for-freelancers',
        badge: 'Field Guide',
      },
    ],
  },
  {
    number: '02',
    stageName: 'DOCUMENTATION',
    tag: 'EVIDENCE & VAULT ARCHITECTURE',
    title: 'Keep useful records',
    lead: 'Administrative calm is built on systematic record-keeping, not last-minute July panics.',
    keyPoints: [
      {
        title: 'Sequential Tax Invoices',
        desc: 'Issue sequentially numbered invoices stating client corporate addresses, PAN/GSTIN where applicable, currency conversion rates, and explicit payment terms (Net-15/30).',
        highlight: 'Sequential Numbers',
      },
      {
        title: 'Foreign Remittance Archive (FIRA / FIRC)',
        desc: 'For Stripe, PayPal, Wise, or wire remittances, systematically download monthly bank FIRA advices stating the correct RBI Purpose Code matching gross client invoices.',
        highlight: 'Monthly FIRA Vault',
      },
      {
        title: 'Section 37(1) Dual-Use Apportionment',
        desc: 'For regular accounting (ITR-3), maintain verified receipts for dual-use hardware (40% depreciation), cloud SaaS, and carpet-area home office rent under the statutory nexus test.',
        highlight: 'Section 37(1) Nexus',
      },
    ],
    checkpoint: 'Statutory Check: Section 37(1) Wholly & Exclusively Test + 6-Year Audit Retention Protocol',
    links: [
      {
        title: 'Dual-Use Expense Allocator Tool',
        href: '/tools/expense-planner',
        badge: 'Interactive Tool',
      },
      {
        title: 'Home Office & Equipment Deductions',
        href: '/guides/home-office-expenses',
        badge: 'Section 37',
      },
      {
        title: 'Creator Contracts & SOW Standards',
        href: '/guides/creator-contract',
        badge: 'Legal Checklist',
      },
    ],
  },
  {
    number: '03',
    stageName: 'STATUTES & CALENDAR',
    tag: 'THRESHOLD & TIMELINE COMPLIANCE',
    title: 'Understand your obligations',
    lead: 'Statutory responsibilities depend strictly on your turnover and filing status, not generic rules.',
    keyPoints: [
      {
        title: '₹20 Lakh GST Exemption Threshold',
        desc: 'Under Notification No. 10/2017-Integrated Tax, GST registration is optional until aggregate annual receipts cross ₹20 Lakhs (₹10L in special states), even for 100% export revenue.',
        highlight: '₹20L Threshold',
      },
      {
        title: 'Annual Form GST RFD-11 LUT Filing',
        desc: 'Once registered, file an annual Letter of Undertaking before April 1st to export services at 0% IGST without paying tax and filing tedious refund applications.',
        highlight: 'Annual LUT Renewal',
      },
      {
        title: 'Single March 15 Advance Tax (Section 211)',
        desc: 'Professionals under Section 44ADA pay 100% of their estimated tax in a single tranche on or before March 15th, sidestepping interest penalties under Sections 234B and 234C.',
        highlight: 'March 15 Deadline',
      },
    ],
    checkpoint: 'Statutory Check: ₹20 Lakh GST Threshold & March 15 Single Advance Tax Deadline',
    links: [
      {
        title: 'GST LUT Checklist & Generator',
        href: '/tools/gst-lut-checklist',
        badge: 'RFD-11 LUT',
      },
      {
        title: 'TDS Refund Recovery Planner',
        href: '/tools/tds-refund-checklist',
        badge: 'Form 26AS',
      },
      {
        title: 'GST LUT Filing & Renewal Manual',
        href: '/guides/gst-lut-renewal',
        badge: '0% IGST Guide',
      },
      {
        title: 'TDS Refund Recovery Guide',
        href: '/guides/tds-refund',
        badge: 'Sec 244A',
      },
    ],
  },
  {
    number: '04',
    stageName: 'ACTION & RUNWAY',
    tag: 'CALCULATION & DIRECT REFUND',
    title: 'Prepare your next step',
    lead: 'Evaluate tax regimes, select the correct ITR form, and orchestrate automated electronic refunds.',
    keyPoints: [
      {
        title: 'New vs Old Tax Regime Optimization',
        desc: 'Evaluate the New Tax Regime (Section 115BAC) with lower slabs and ₹0 net tax up to ₹7,00,000 via Section 87A rebate against itemized deductions under the Old Regime.',
        highlight: 'Sec 87A Rebate',
      },
      {
        title: 'ITR-4 (Sugam) vs ITR-3 Selection',
        desc: 'Select ITR-4 for 50% presumptive reporting under Section 44ADA. Choose ITR-3 if maintaining audited books, claiming high expenses, trading F&O, or declaring foreign equity.',
        highlight: 'ITR-4 vs ITR-3',
      },
      {
        title: 'Direct Electronic NACH Refund',
        desc: 'Pre-validate your bank account on the income tax portal. Excess TDS credits are credited directly to your account with 0.5% monthly interest under Section 244A.',
        highlight: '0.5% Monthly Interest',
      },
    ],
    checkpoint: 'Statutory Check: July 31 Annual Filing Deadline & Pre-Validated Bank Account Protocol',
    links: [
      {
        title: 'Interactive Freelancer Tax Estimator',
        href: '/tools/freelancer-tax-estimator',
        badge: 'Regime Comparison',
      },
      {
        title: 'ITR-3 vs ITR-4 Decision Manual',
        href: '/guides/itr-filing-creators',
        badge: 'Filing Guide',
      },
      {
        title: 'Explore All Tools & Checklists',
        href: '/tools',
        badge: 'Workbench',
      },
    ],
  },
];

export default function ClearerPath() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'stepper' | 'grid'>('stepper');
  const containerRef = useRef<HTMLElement>(null);
  const showcaseCardRef = useRef<HTMLDivElement>(null);

  // Animate showcase card transition on activeStep change
  useEffect(() => {
    if (showcaseCardRef.current && viewMode === 'stepper') {
      gsap.fromTo(
        showcaseCardRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
    }
  }, [activeStep, viewMode]);

  // Keyboard navigation for steps 1-4
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveStep((prev) => (prev < 3 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const cur = steps[activeStep];

  return (
    <section
      id="clearer-path"
      ref={containerRef}
      className="clearer-path-section"
      aria-labelledby="clearer-path-heading"
    >
      {/* Editorial Header */}
      <div className="clearer-path-header">
        <div className="section-kicker">
          <span className="kicker-icon" aria-hidden="true">
            <Compass size={14} />
          </span>
          <span>09 / A NOTE ON COMPLEXITY · THE FOUR-STEP TAX JOURNEY</span>
        </div>

        <h2 id="clearer-path-heading" className="clearer-path-title">
          A clearer path<br />
          <em>through creator taxes.</em>
        </h2>

        <p className="clearer-path-lead">
          Tax responsibilities in India can feel intimidating when presented all at once as fragmented statutory
          jargon and conflicting forum advice. Yet for independent professionals—whether you code, design, write,
          produce, or advise—tax compliance follows a coherent, repeatable sequence that can be managed one step
          at a time.
        </p>

        <div className="clearer-path-badge-strip">
          <div className="strip-item">
            <ShieldCheck size={14} className="strip-icon" />
            <span>Grounded in Income Tax Act, 1961 &amp; CGST Rules</span>
          </div>
          <span className="strip-divider" aria-hidden="true">·</span>
          <div className="strip-item">
            <Scale size={14} className="strip-icon" />
            <span>Circumstance-Specific Guidance — Not Generic Rules</span>
          </div>
          <span className="strip-divider" aria-hidden="true">·</span>
          <div className="strip-item">
            <CheckCircle2 size={14} className="strip-icon" />
            <span>Zero Unrelated 3D Bloat · 100% Working Tools</span>
          </div>
        </div>
      </div>

      {/* View Switcher & Stage Control Bar */}
      <div className="stage-controls-toolbar">
        <div className="stage-indicator-count">
          <span className="count-badge">STEP {activeStep + 1} OF 4</span>
          <span className="count-label">{cur.stageName} · {cur.title}</span>
        </div>

        <div className="view-mode-toggle" role="tablist" aria-label="Journey view format">
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'stepper'}
            className={`view-toggle-btn ${viewMode === 'stepper' ? 'active' : ''}`}
            onClick={() => setViewMode('stepper')}
          >
            <Layers size={14} />
            <span>Interactive Stepper</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'grid'}
            className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <LayoutGrid size={14} />
            <span>All 4 Stages (2×2)</span>
          </button>
        </div>
      </div>

      {/* Prominent Animated 1 · 2 · 3 · 4 Stage Navigator */}
      <div className="stage-navigator-wrapper" aria-label="Tax journey stages navigation">
        <div className="stage-nav-track" aria-hidden="true">
          <div className="stage-nav-base" />
          <div
            className="stage-nav-progress"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />
        </div>

        <div className="stage-nav-nodes-grid">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;
            return (
              <button
                key={s.number}
                type="button"
                className={`stage-nav-node-btn ${isActive ? 'node-active' : ''} ${isCompleted ? 'node-completed' : ''}`}
                onClick={() => {
                  setActiveStep(idx);
                  if (viewMode === 'grid') setViewMode('stepper');
                }}
                aria-current={isActive ? 'step' : undefined}
                aria-label={`Jump to stage ${s.number}: ${s.title}`}
              >
                <div className="node-num-circle">
                  <span>{s.number}</span>
                  {isActive && <span className="node-pulse-ring" />}
                </div>
                <div className="node-label-group">
                  <span className="node-kicker">STAGE {s.number}</span>
                  <strong className="node-title">{s.stageName}</strong>
                  <span className="node-subtitle">{s.title}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* VIEW 1: INTERACTIVE STEPPER (Featured Active Step) */}
      {viewMode === 'stepper' && (
        <div className="stepper-showcase-container" ref={showcaseCardRef}>
          <div className="stepper-showcase-card">
            {/* Left Column: Visual Schematic, Checkpoint & Resource Links */}
            <div className="showcase-left-col">
              <div className="schematic-card-frame">
                <div className="schematic-header">
                  <span className="schematic-kicker">ARCHITECTURE SCHEMATIC</span>
                  <span className="schematic-tag">{cur.tag}</span>
                </div>
                <div className="schematic-svg-wrap">
                  {activeStep === 0 && <DiagramStepOne />}
                  {activeStep === 1 && <DiagramStepTwo />}
                  {activeStep === 2 && <DiagramStepThree />}
                  {activeStep === 3 && <DiagramStepFour />}
                </div>
              </div>

              {/* Statutory Checkpoint Card */}
              <div className="statutory-checkpoint-card">
                <FileCheck2 size={18} className="checkpoint-card-icon" />
                <div className="checkpoint-card-content">
                  <strong>Statutory Foundation</strong>
                  <span>{cur.checkpoint}</span>
                </div>
              </div>

              {/* Recommended Guides & Tools */}
              <div className="showcase-resources-card">
                <span className="resources-title">PRACTICAL GUIDES &amp; INTERACTIVE TOOLS</span>
                <div className="resources-pills-list">
                  {cur.links.map((link, lIdx) => (
                    <Link key={lIdx} href={link.href} className="resource-pill-item">
                      <div className="pill-text-block">
                        <span className="pill-title">{link.title}</span>
                        <span className="pill-badge">{link.badge}</span>
                      </div>
                      <ArrowUpRight size={14} className="pill-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Formatted Playbook & Action Points */}
            <div className="showcase-right-col">
              <div className="showcase-card-header">
                <div className="showcase-meta-row">
                  <span className="stage-kicker-pill">STAGE {cur.number} / 04</span>
                  <span className="stage-theme-tag">{cur.tag}</span>
                </div>
                <h3 className="showcase-stage-title">
                  <span className="title-num">{cur.number} — </span>
                  {cur.title}
                </h3>
                <p className="showcase-stage-lead">{cur.lead}</p>
              </div>

              {/* Formatted Key Playbook Checklist Items */}
              <div className="playbook-points-list">
                <div className="playbook-section-label">KEY STATUTORY ACTION POINTS</div>
                {cur.keyPoints.map((pt, pIdx) => (
                  <div key={pIdx} className="playbook-item-card">
                    <div className="playbook-item-icon-box">
                      <CheckCircle2 size={18} />
                    </div>
                    <div className="playbook-item-content">
                      <div className="playbook-item-header">
                        <h4>{pt.title}</h4>
                        {pt.highlight && <span className="playbook-highlight-pill">{pt.highlight}</span>}
                      </div>
                      <p>{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stage Navigation Footer Bar */}
              <div className="stepper-footer-nav">
                <button
                  type="button"
                  className="step-nav-btn prev-btn"
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                >
                  <ChevronLeft size={16} />
                  <span>Previous Stage</span>
                </button>

                <div className="step-dots-track">
                  {steps.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      className={`step-dot-indicator ${activeStep === dotIdx ? 'dot-active' : ''}`}
                      onClick={() => setActiveStep(dotIdx)}
                      aria-label={`Go to stage ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                {activeStep < 3 ? (
                  <button
                    type="button"
                    className="step-nav-btn next-btn"
                    onClick={() => setActiveStep((prev) => Math.min(3, prev + 1))}
                  >
                    <span>Next: {steps[activeStep + 1].stageName}</span>
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <Link href="/tools" className="step-nav-btn next-btn finish-btn">
                    <span>Explore Tools Workbench</span>
                    <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: ALL 4 STAGES GRID (Formatted 2x2 Layout) */}
      {viewMode === 'grid' && (
        <div className="grid-showcase-container">
          <div className="grid-showcase-layout">
            {steps.map((s, idx) => (
              <article key={s.number} className="grid-step-card">
                <div className="grid-card-top">
                  <div className="grid-num-badge">{s.number}</div>
                  <div className="grid-stage-meta">
                    <span className="grid-kicker">STAGE {s.number} · {s.stageName}</span>
                    <h3 className="grid-title">{s.title}</h3>
                  </div>
                </div>

                <p className="grid-lead">{s.lead}</p>

                <div className="grid-schematic-wrap">
                  {idx === 0 && <DiagramStepOne />}
                  {idx === 1 && <DiagramStepTwo />}
                  {idx === 2 && <DiagramStepThree />}
                  {idx === 3 && <DiagramStepFour />}
                </div>

                <div className="grid-points-list">
                  {s.keyPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="grid-point-item">
                      <CheckCircle2 size={15} className="grid-point-icon" />
                      <div>
                        <strong>{pt.title}:</strong> <span>{pt.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid-checkpoint-box">
                  <FileCheck2 size={15} />
                  <span>{s.checkpoint}</span>
                </div>

                <div className="grid-links-row">
                  {s.links.map((link, lIdx) => (
                    <Link key={lIdx} href={link.href} className="grid-link-item">
                      <span>{link.title}</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Editorial Field Desk & Verified Compliance Archive */}
      <div className="editorial-archive-portal">
        <div className="archive-portal-header">
          <div className="archive-badge-row">
            <span className="archive-seal-badge">
              <ShieldCheck size={14} />
              <span>CBDT & CBIC STATUTORY BENCHMARK</span>
            </span>
            <span className="archive-meta-pill">UPDATED FOR FY 2025–26 (AY 2026–27)</span>
          </div>
          <h3 className="archive-portal-title">
            Run an independent practice with <em>mathematical peace of mind.</em>
          </h3>
          <p className="archive-portal-desc">
            No ambiguous advice, sponsored software placements, or opaque CA retainers. Every playbook is grounded in primary statutes—Section 44ADA, CGST Rule 96A, and RBI FEMA Master Directions—curated for independent creators, video editors, software engineers, and digital consultants.
          </p>
        </div>

        <div className="archive-cards-grid">
          {/* Card 1: Curated Field Guides */}
          <div className="archive-card archive-card-guides">
            <div className="archive-card-header">
              <div className="archive-card-icon-box">
                <BookOpen size={20} />
              </div>
              <div>
                <span className="archive-card-kicker">KNOWLEDGE VAULT</span>
                <h4 className="archive-card-title">Curated Field Guides</h4>
              </div>
            </div>
            <p className="archive-card-text">
              Exhaustive, step-by-step documentation for every compliance milestone in your financial year.
            </p>
            <ul className="archive-guide-list">
              <li>
                <Link href="/learn/section-44ada-presumptive-taxation-freelancers" className="archive-guide-link">
                  <span className="guide-dot" />
                  <span className="guide-name">Section 44ADA Presumptive Taxation Manual</span>
                  <ArrowUpRight size={14} className="guide-arrow" />
                </Link>
              </li>
              <li>
                <Link href="/learn/gst-lut-export-services-filing-guide" className="archive-guide-link">
                  <span className="guide-dot" />
                  <span className="guide-name">GST LUT Export Invoicing & 0% IGST Filing</span>
                  <ArrowUpRight size={14} className="guide-arrow" />
                </Link>
              </li>
              <li>
                <Link href="/learn/paypal-stripe-wise-fira-foreign-inward-remittance" className="archive-guide-link">
                  <span className="guide-dot" />
                  <span className="guide-name">Foreign Remittance Reconciliation & Bank FIRA</span>
                  <ArrowUpRight size={14} className="guide-arrow" />
                </Link>
              </li>
            </ul>
            <Link href="/learn" className="archive-action-primary">
              <span>Browse All Field Guides</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Card 2: Interactive Calculators */}
          <div className="archive-card archive-card-tools">
            <div className="archive-card-header">
              <div className="archive-card-icon-box tool-accent">
                <Calculator size={20} />
              </div>
              <div>
                <span className="archive-card-kicker">INTERACTIVE INSTRUMENTS</span>
                <h4 className="archive-card-title">Tax & Compliance Workbench</h4>
              </div>
            </div>
            <p className="archive-card-text">
              Live mathematical models to calculate your exact liability, compare tax regimes, and time advance tax deposits.
            </p>
            <ul className="archive-guide-list">
              <li>
                <Link href="/tools/freelancer-tax-estimator" className="archive-guide-link">
                  <span className="guide-dot tool-dot" />
                  <span className="guide-name">Freelancer Tax Estimator (Old vs New Regime)</span>
                  <ArrowUpRight size={14} className="guide-arrow" />
                </Link>
              </li>
              <li>
                <Link href="/tools/gst-lut-generator" className="archive-guide-link">
                  <span className="guide-dot tool-dot" />
                  <span className="guide-name">GST LUT Renewal Checklist & Export Validator</span>
                  <ArrowUpRight size={14} className="guide-arrow" />
                </Link>
              </li>
              <li>
                <Link href="/tools/tds-reconciler" className="archive-guide-link">
                  <span className="guide-dot tool-dot" />
                  <span className="guide-name">Form 26AS & AIS Quarterly TDS Reconciler</span>
                  <ArrowUpRight size={14} className="guide-arrow" />
                </Link>
              </li>
            </ul>
            <Link href="/tools" className="archive-action-secondary">
              <span>Launch Interactive Tools</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className="archive-portal-footer">
          <div className="archive-disclaimer">
            <Scale size={14} />
            <span>Statute-backed editorial research. Independent from tax software vendors and accounting intermediaries.</span>
          </div>
          <div className="archive-jurisdiction">
            <span>JURISDICTION: REPUBLIC OF INDIA · CBDT / CBIC</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   CUSTOM SVG SCHEMATICS & VISUAL ARCHITECTURE FOR EACH STEP
   Crisp, responsive, highly editorial vector illustrations
   ========================================================================== */

function DiagramStepOne() {
  return (
    <svg
      viewBox="0 0 340 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="step-svg-visual"
      aria-label="Inward flow diagram: domestic TDS vs cross-border foreign remittance"
    >
      <rect width="340" height="130" rx="6" fill="#F7F5F0" />
      <rect x="1" y="1" width="338" height="128" rx="5" stroke="#E2DDD3" strokeWidth="1" />

      {/* Domestic Channel */}
      <g transform="translate(14, 18)">
        <rect width="145" height="42" rx="4" fill="#ffffff" stroke="#D9D4C9" strokeWidth="1" />
        <circle cx="16" cy="16" r="6" fill="#344B42" />
        <text x="30" y="16" fill="#202622" fontSize="10" fontWeight="600" fontFamily="var(--sans)">
          Domestic (INR)
        </text>
        <text x="30" y="30" fill="#727771" fontSize="8" fontFamily="var(--mono)">
          TDS Sec 194J (10%)
        </text>
        <path d="M145 21 L168 21" stroke="#344B42" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="168,18 174,21 168,24" fill="#344B42" />
      </g>

      {/* Cross-border Channel */}
      <g transform="translate(14, 70)">
        <rect width="145" height="42" rx="4" fill="#ffffff" stroke="#D9D4C9" strokeWidth="1" />
        <circle cx="16" cy="16" r="6" fill="#B68B54" />
        <text x="30" y="16" fill="#202622" fontSize="10" fontWeight="600" fontFamily="var(--sans)">
          Global (USD / EUR)
        </text>
        <text x="30" y="30" fill="#986E38" fontSize="8" fontFamily="var(--mono)">
          0% IGST with LUT
        </text>
        <path d="M145 21 L168 21" stroke="#B68B54" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="168,18 174,21 168,24" fill="#B68B54" />
      </g>

      {/* Destination Outcome */}
      <g transform="translate(182, 18)">
        <rect width="144" height="94" rx="4" fill="#ffffff" stroke="#D9D4C9" strokeWidth="1" />
        <text x="12" y="20" fill="#344B42" fontSize="9" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          STATUTORY RESULT
        </text>
        <line x1="12" y1="28" x2="132" y2="28" stroke="#E2DDD3" strokeWidth="1" />
        <text x="12" y="44" fill="#202622" fontSize="9.5" fontWeight="600" fontFamily="var(--sans)">
          Form 26AS Tax Credit
        </text>
        <text x="12" y="58" fill="#727771" fontSize="8" fontFamily="var(--mono)">
          Off-sets advance tax
        </text>
        <line x1="12" y1="64" x2="132" y2="64" stroke="#E2DDD3" strokeWidth="1" />
        <text x="12" y="78" fill="#202622" fontSize="9.5" fontWeight="600" fontFamily="var(--sans)">
          FIRA / Purpose Code
        </text>
        <text x="12" y="88" fill="#727771" fontSize="8" fontFamily="var(--mono)">
          P0802 / P0807 proof
        </text>
      </g>
    </svg>
  );
}

function DiagramStepTwo() {
  return (
    <svg
      viewBox="0 0 340 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="step-svg-visual"
      aria-label="Three-point audit proof record-keeping architecture"
    >
      <rect width="340" height="130" rx="6" fill="#F7F5F0" />
      <rect x="1" y="1" width="338" height="128" rx="5" stroke="#E2DDD3" strokeWidth="1" />

      {/* Step 1: Invoice */}
      <g transform="translate(12, 20)">
        <rect width="96" height="90" rx="4" fill="#ffffff" stroke="#D9D4C9" strokeWidth="1" />
        <rect x="10" y="12" width="22" height="6" rx="2" fill="#344B42" opacity="0.85" />
        <line x1="10" y1="26" x2="86" y2="26" stroke="#E2DDD3" strokeWidth="1" />
        <text x="10" y="40" fill="#202622" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          Tax Invoice
        </text>
        <text x="10" y="52" fill="#727771" fontSize="7.5" fontFamily="var(--mono)">
          #CT-2026-084
        </text>
        <text x="10" y="66" fill="#727771" fontSize="7.5" fontFamily="var(--mono)">
          Net-15 terms
        </text>
        <text x="10" y="78" fill="#344B42" fontSize="7.5" fontWeight="600" fontFamily="var(--mono)">
          LUT Ref cited
        </text>
      </g>

      <path d="M112 65 L124 65" stroke="#344B42" strokeWidth="1.5" />
      <polygon points="124,62 129,65 124,68" fill="#344B42" />

      {/* Step 2: Remittance */}
      <g transform="translate(133, 20)">
        <rect width="96" height="90" rx="4" fill="#ffffff" stroke="#D9D4C9" strokeWidth="1" />
        <rect x="10" y="12" width="22" height="6" rx="2" fill="#B68B54" opacity="0.85" />
        <line x1="10" y1="26" x2="86" y2="26" stroke="#E2DDD3" strokeWidth="1" />
        <text x="10" y="40" fill="#202622" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          Bank Advice
        </text>
        <text x="10" y="52" fill="#727771" fontSize="7.5" fontFamily="var(--mono)">
          FIRA Certificate
        </text>
        <text x="10" y="66" fill="#727771" fontSize="7.5" fontFamily="var(--mono)">
          USD to INR proof
        </text>
        <text x="10" y="78" fill="#986E38" fontSize="7.5" fontWeight="600" fontFamily="var(--mono)">
          e-BRC matched
        </text>
      </g>

      <path d="M233 65 L245 65" stroke="#344B42" strokeWidth="1.5" />
      <polygon points="245,62 250,65 245,68" fill="#344B42" />

      {/* Step 3: Vault Archive */}
      <g transform="translate(254, 20)">
        <rect width="74" height="90" rx="4" fill="#202622" />
        <circle cx="37" cy="30" r="12" fill="#344B42" />
        <path d="M33 30 L36 33 L42 27" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="37" y="56" textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="600" fontFamily="var(--sans)">
          6-Year
        </text>
        <text x="37" y="68" textAnchor="middle" fill="#C9D2C4" fontSize="8" fontFamily="var(--sans)">
          Archive
        </text>
        <text x="37" y="80" textAnchor="middle" fill="#B68B54" fontSize="7" fontFamily="var(--mono)">
          AUDIT-READY
        </text>
      </g>
    </svg>
  );
}

function DiagramStepThree() {
  return (
    <svg
      viewBox="0 0 340 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="step-svg-visual"
      aria-label="Statutory obligation matrix: GST threshold, advance tax, and TDS matching"
    >
      <rect width="340" height="130" rx="6" fill="#F7F5F0" />
      <rect x="1" y="1" width="338" height="128" rx="5" stroke="#E2DDD3" strokeWidth="1" />

      {/* Pillar 1: GST */}
      <g transform="translate(12, 16)">
        <rect width="98" height="98" rx="4" fill="#ffffff" stroke="#D9D4C9" strokeWidth="1" />
        <text x="10" y="18" fill="#344B42" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          GST THRESHOLD
        </text>
        <line x1="10" y1="24" x2="88" y2="24" stroke="#E2DDD3" strokeWidth="1" />
        <text x="10" y="40" fill="#202622" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          &lt; ₹20L: Optional
        </text>
        <text x="10" y="52" fill="#727771" fontSize="7.5" fontFamily="var(--sans)">
          Notif 10/2017-IT
        </text>
        <line x1="10" y1="58" x2="88" y2="58" stroke="#E2DDD3" strokeWidth="1" />
        <text x="10" y="74" fill="#202622" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          &gt; ₹20L: Compulsory
        </text>
        <text x="10" y="86" fill="#344B42" fontSize="7.5" fontWeight="600" fontFamily="var(--mono)">
          File RFD-11 LUT
        </text>
      </g>

      {/* Pillar 2: Advance Tax */}
      <g transform="translate(121, 16)">
        <rect width="98" height="98" rx="4" fill="#ffffff" stroke="#D9D4C9" strokeWidth="1" />
        <text x="10" y="18" fill="#B68B54" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          ADVANCE TAX
        </text>
        <line x1="10" y1="24" x2="88" y2="24" stroke="#E2DDD3" strokeWidth="1" />
        <text x="10" y="40" fill="#202622" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          Sec 44ADA relief
        </text>
        <text x="10" y="52" fill="#727771" fontSize="7.5" fontFamily="var(--sans)">
          Single tranche
        </text>
        <line x1="10" y1="58" x2="88" y2="58" stroke="#E2DDD3" strokeWidth="1" />
        <rect x="8" y="66" width="82" height="22" rx="3" fill="#F9F4EB" stroke="#D9D4C9" strokeWidth="1" />
        <text x="14" y="80" fill="#986E38" fontSize="8" fontWeight="700" fontFamily="var(--mono)">
          DUE: MARCH 15
        </text>
      </g>

      {/* Pillar 3: TDS Reconciliation */}
      <g transform="translate(230, 16)">
        <rect width="98" height="98" rx="4" fill="#ffffff" stroke="#D9D4C9" strokeWidth="1" />
        <text x="10" y="18" fill="#344B42" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          TDS &amp; 26AS
        </text>
        <line x1="10" y1="24" x2="88" y2="24" stroke="#E2DDD3" strokeWidth="1" />
        <text x="10" y="40" fill="#202622" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          Quarterly match
        </text>
        <text x="10" y="52" fill="#727771" fontSize="7.5" fontFamily="var(--sans)">
          Client TAN deposits
        </text>
        <line x1="10" y1="58" x2="88" y2="58" stroke="#E2DDD3" strokeWidth="1" />
        <text x="10" y="74" fill="#202622" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          AIS verification
        </text>
        <text x="10" y="86" fill="#344B42" fontSize="7.5" fontWeight="600" fontFamily="var(--mono)">
          Full credit locked
        </text>
      </g>
    </svg>
  );
}

function DiagramStepFour() {
  return (
    <svg
      viewBox="0 0 340 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="step-svg-visual"
      aria-label="Filing runway: regime choice, ITR form selection, and electronic refund credit"
    >
      <rect width="340" height="130" rx="6" fill="#F7F5F0" />
      <rect x="1" y="1" width="338" height="128" rx="5" stroke="#E2DDD3" strokeWidth="1" />

      {/* Phase 1: Regime Choice */}
      <g transform="translate(12, 16)">
        <rect width="92" height="98" rx="4" fill="#ffffff" stroke="#D9D4C9" strokeWidth="1" />
        <text x="10" y="18" fill="#344B42" fontSize="8" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          01. REGIME
        </text>
        <line x1="10" y1="24" x2="82" y2="24" stroke="#E2DDD3" strokeWidth="1" />
        <rect x="8" y="32" width="76" height="24" rx="3" fill="#E7ECE3" />
        <text x="14" y="44" fill="#202622" fontSize="8.5" fontWeight="600" fontFamily="var(--sans)">
          New (115BAC)
        </text>
        <text x="14" y="52" fill="#344B42" fontSize="7" fontFamily="var(--mono)">
          ₹7L zero tax slab
        </text>
        <rect x="8" y="62" width="76" height="24" rx="3" fill="#FAF8F4" stroke="#D9D4C9" strokeWidth="1" />
        <text x="14" y="74" fill="#727771" fontSize="8.5" fontFamily="var(--sans)">
          Old Regime
        </text>
        <text x="14" y="82" fill="#8E948D" fontSize="7" fontFamily="var(--mono)">
          With itemized 80C
        </text>
      </g>

      <path d="M107 65 L119 65" stroke="#344B42" strokeWidth="1.5" />
      <polygon points="119,62 124,65 119,68" fill="#344B42" />

      {/* Phase 2: Form Choice */}
      <g transform="translate(128, 16)">
        <rect width="92" height="98" rx="4" fill="#ffffff" stroke="#D9D4C9" strokeWidth="1" />
        <text x="10" y="18" fill="#B68B54" fontSize="8" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          02. ITR FORM
        </text>
        <line x1="10" y1="24" x2="82" y2="24" stroke="#E2DDD3" strokeWidth="1" />
        <rect x="8" y="32" width="76" height="24" rx="3" fill="#F9F4EB" stroke="#D9D4C9" strokeWidth="1" />
        <text x="14" y="44" fill="#986E38" fontSize="8.5" fontWeight="600" fontFamily="var(--sans)">
          ITR-4 (Sugam)
        </text>
        <text x="14" y="52" fill="#986E38" fontSize="7" fontFamily="var(--mono)">
          44ADA Presumptive
        </text>
        <rect x="8" y="62" width="76" height="24" rx="3" fill="#FAF8F4" stroke="#D9D4C9" strokeWidth="1" />
        <text x="14" y="74" fill="#727771" fontSize="8.5" fontFamily="var(--sans)">
          ITR-3 Normal
        </text>
        <text x="14" y="82" fill="#8E948D" fontSize="7" fontFamily="var(--mono)">
          Books &amp; Sched FA
        </text>
      </g>

      <path d="M223 65 L235 65" stroke="#344B42" strokeWidth="1.5" />
      <polygon points="235,62 240,65 235,68" fill="#344B42" />

      {/* Phase 3: Bank Refund */}
      <g transform="translate(244, 16)">
        <rect width="84" height="98" rx="4" fill="#202622" />
        <text x="10" y="18" fill="#C9D2C4" fontSize="8" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          03. REFUND
        </text>
        <line x1="10" y1="24" x2="74" y2="24" stroke="#344B42" strokeWidth="1" />
        <circle cx="42" cy="46" r="14" fill="#344B42" />
        <path d="M36 46 L40 50 L48 42" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="42" y="72" textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="600" fontFamily="var(--sans)">
          Pre-Validated
        </text>
        <text x="42" y="82" textAnchor="middle" fill="#C9D2C4" fontSize="7.5" fontFamily="var(--sans)">
          Bank Account
        </text>
        <text x="42" y="94" textAnchor="middle" fill="#B68B54" fontSize="7" fontFamily="var(--mono)">
          +0.5% INTEREST
        </text>
      </g>
    </svg>
  );
}
