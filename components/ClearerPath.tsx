'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  Compass,
  FileCheck2,
  Scale,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface JourneyStep {
  number: string;
  stageName: string;
  tag: string;
  title: string;
  lead: string;
  paragraphs: string[];
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
    paragraphs: [
      'Not all creator and freelance revenue is treated alike under Indian tax statutes. Receipts from domestic Indian clients almost universally undergo Tax Deducted at Source (TDS)—typically 10% under Section 194J for technical and professional services, or 1% to 2% under Section 194C for contractual deliverables. This deduction is an advance tax credit registered against your PAN, not a forfeited expense.',
      'Conversely, income from cross-border clients (such as global brands, overseas SaaS companies, or remote clients) received in convertible foreign exchange represents an "export of services" under Section 2(6) of the IGST Act. Furthermore, your exact professional discipline determines whether you qualify for Section 44ADA’s 50% presumptive profit relief (specified for technical, design, software, and consulting vocations) or standard book-keeping.',
    ],
    checkpoint: 'Statutory Check: RBI Purpose Codes (P0802/P0807) & Section 44AA(1) Specified Professions',
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
    paragraphs: [
      'Administrative friction disappears when record-keeping becomes an automated routine rather than an annual scramble. Issue sequentially numbered tax invoices for every engagement—stating client corporate addresses, PAN/GSTIN where applicable, currency conversion rates, and clear payment terms (such as Net-15 or Net-30).',
      'For cross-border clients remitting via Stripe, PayPal, Wise, or direct SWIFT bank transfers, immediately archive your monthly Foreign Inward Remittance Advice (FIRA/FIRC) stating the appropriate RBI Purpose Code. For those filing under regular accounting (ITR-3) or planning future business expense claims, maintain organized receipts for dual-use hardware, monitors, software subscriptions, co-working desks, and utility apportionments under Section 37(1).',
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
    paragraphs: [
      'Compliance requirements are not uniform; they activate based on specific statutory criteria. Under Notification No. 10/2017-Integrated Tax, GST registration is not mandatory until your aggregate annual receipts exceed ₹20 Lakhs (₹10 Lakhs in special category states)—even if your entire revenue comes from foreign service exports. Once turnover crosses that threshold, registration is legally binding.',
      'Registered service exporters must file an annual Letter of Undertaking (Form GST RFD-11) before April 1st to invoice international clients at 0% IGST without locking up working capital. On income tax, professionals under Section 44ADA pay 100% of their estimated tax in a single advance tax installment on or before March 15th, sidestepping interest penalties under Sections 234B and 234C. Concurrently, domestic TDS must be cross-matched against Form 26AS and AIS.',
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
    paragraphs: [
      'With income classified, paper trails established, and obligations identified, the final phase is disciplined execution. Compare the New Tax Regime (Section 115BAC) against the Old Regime using side-by-side estimators. For most independent creators without substantial home loan interest or large itemized deductions, the New Regime provides substantially lower tax slabs—with zero net tax on taxable income up to ₹7,00,000 via Section 87A.',
      'Next, verify your filing form: select ITR-4 (Sugam) for simple 50% presumptive reporting under Section 44ADA/44AD, or ITR-3 if you maintain audited books, itemize deductions, hold capital gains, or have foreign equity/RSU holdings (which require Schedule FA disclosure). Finally, pre-validate your bank account on the income tax portal to ensure electronic refund dispatch with 0.5% monthly interest under Section 244A.',
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
  const containerRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 992px)',
        isMobile: '(max-width: 991px)',
      },
      (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean; isMobile: boolean };

        // Desktop horizontal progress line fill
        if (isDesktop && progressBarRef.current) {
          gsap.fromTo(
            progressBarRef.current,
            { scaleX: 0 },
            {
              scaleX: 1,
              transformOrigin: 'left center',
              ease: 'none',
              scrollTrigger: {
                trigger: el.querySelector('.clearer-path-timeline'),
                start: 'top 75%',
                end: 'bottom 80%',
                scrub: 0.6,
              },
            }
          );
        }

        // Mobile vertical line fill
        if (!isDesktop && progressBarRef.current) {
          gsap.fromTo(
            progressBarRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              transformOrigin: 'top center',
              ease: 'none',
              scrollTrigger: {
                trigger: el.querySelector('.clearer-path-timeline'),
                start: 'top 80%',
                end: 'bottom 85%',
                scrub: 0.6,
              },
            }
          );
        }

        // Staggered node marker pop-in
        gsap.utils.toArray<HTMLElement>('.timeline-step-node').forEach((node) => {
          gsap.fromTo(
            node,
            { scale: 0.7, autoAlpha: 0.3 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.6,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: node,
                start: isDesktop ? 'top 80%' : 'top 85%',
                once: true,
              },
            }
          );
        });

        // Step cards reveal
        gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card, idx) => {
          gsap.fromTo(
            card,
            { y: 30, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              delay: isDesktop ? idx * 0.12 : 0.05,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: isDesktop ? 'top 82%' : 'top 88%',
                once: true,
              },
            }
          );
        });
      },
      el
    );

    return () => mm.revert();
  }, []);

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
          at a time. While your precise obligations (such as GST thresholds, presumptive eligibility, or foreign
          remittance proofs) depend on your specific income structure and client base, this four-stage framework
          brings structure, predictability, and calm to your financial year.
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

      {/* Connected Timeline Journey */}
      <div className="clearer-path-timeline">
        {/* Desktop Progress Track Line */}
        <div className="timeline-track-desktop" aria-hidden="true">
          <div className="timeline-base-line" />
          <div ref={progressBarRef} className="timeline-progress-bar" />
        </div>

        {/* 4 Connected Step Columns */}
        <div className="timeline-steps-grid">
          {steps.map((step, idx) => (
            <article key={step.number} className="timeline-column" aria-labelledby={`step-${step.number}-heading`}>
              {/* Marker Node */}
              <div className="timeline-step-node" aria-hidden="true">
                <span className="node-number">{step.number}</span>
                <span className="node-pulse" />
              </div>

              {/* Step Card Content */}
              <div className="timeline-card">
                {/* Visual Architecture Diagram per Step */}
                <div className="step-diagram-wrap" aria-hidden="true">
                  {idx === 0 && <DiagramStepOne />}
                  {idx === 1 && <DiagramStepTwo />}
                  {idx === 2 && <DiagramStepThree />}
                  {idx === 3 && <DiagramStepFour />}
                </div>

                <div className="card-top-meta">
                  <span className="step-tag-pill">{step.tag}</span>
                  <span className="step-stage-kicker">{step.stageName}</span>
                </div>

                <h3 id={`step-${step.number}-heading`} className="step-card-title">
                  <span className="step-num-prefix">{step.number} — </span>
                  {step.title}
                </h3>

                <p className="step-card-lead">{step.lead}</p>

                <div className="step-card-body">
                  {step.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Statutory Checkpoint Box */}
                <div className="step-checkpoint-box">
                  <FileCheck2 size={15} className="checkpoint-icon" />
                  <span className="checkpoint-text">{step.checkpoint}</span>
                </div>

                {/* Working Internal Resource Links */}
                <div className="step-links-block">
                  <span className="step-links-label">RECOMMENDED GUIDES &amp; TOOLS</span>
                  <ul className="step-links-list">
                    {step.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link href={link.href} className="step-resource-link">
                          <span className="link-title-group">
                            <span className="link-bullet">→</span>
                            <span className="link-title">{link.title}</span>
                          </span>
                          <span className="link-badge">{link.badge}</span>
                          <ArrowUpRight size={13} className="link-arrow" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Comprehensive Action Banner & Clear CTA */}
      <div className="clearer-path-cta-banner">
        <div className="cta-banner-content">
          <div className="cta-kicker">
            <Sparkles size={14} className="cta-sparkle" />
            <span>CONTINUE YOUR TAX EDUCATION</span>
          </div>
          <h3 className="cta-banner-title">
            Explore our curated field guides and interactive tools.
          </h3>
          <p className="cta-banner-desc">
            No vague generalities, sponsored recommendations, or marketing jargon. Every manual is statute-cited,
            editorially reviewed, and tailored specifically for India&apos;s independent creators, video editors,
            engineers, and creative consultants.
          </p>
        </div>

        <div className="cta-banner-actions">
          <Link href="/learn" className="clearer-path-primary-btn">
            <BookOpen size={16} />
            <span>Explore the tax guides</span>
            <ArrowRight size={16} />
          </Link>
          <Link href="/tools/freelancer-tax-estimator" className="clearer-path-secondary-btn">
            <Calculator size={15} />
            <span>Calculate your taxes</span>
          </Link>
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
      <rect width="340" height="130" rx="6" fill="#f4f3ec" />
      <rect x="1" y="1" width="338" height="128" rx="5" stroke="#e2ded4" strokeWidth="1" />

      {/* Domestic Channel */}
      <g transform="translate(14, 18)">
        <rect width="145" height="42" rx="4" fill="#ffffff" stroke="#cdd5cc" strokeWidth="1" />
        <circle cx="16" cy="16" r="6" fill="#315c4e" />
        <text x="30" y="16" fill="#182522" fontSize="10" fontWeight="600" fontFamily="var(--sans)">
          Domestic (INR)
        </text>
        <text x="30" y="30" fill="#6b756e" fontSize="8" fontFamily="var(--mono)">
          TDS Sec 194J (10%)
        </text>
        <path d="M145 21 L168 21" stroke="#315c4e" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="168,18 174,21 168,24" fill="#315c4e" />
      </g>

      {/* Cross-border Channel */}
      <g transform="translate(14, 70)">
        <rect width="145" height="42" rx="4" fill="#ffffff" stroke="#e8dcc4" strokeWidth="1" />
        <circle cx="16" cy="16" r="6" fill="#d9a85b" />
        <text x="30" y="16" fill="#182522" fontSize="10" fontWeight="600" fontFamily="var(--sans)">
          Global (USD / EUR)
        </text>
        <text x="30" y="30" fill="#8d682e" fontSize="8" fontFamily="var(--mono)">
          0% IGST with LUT
        </text>
        <path d="M145 21 L168 21" stroke="#d9a85b" strokeWidth="1.5" strokeDasharray="3 3" />
        <polygon points="168,18 174,21 168,24" fill="#d9a85b" />
      </g>

      {/* Destination Outcome */}
      <g transform="translate(182, 18)">
        <rect width="144" height="94" rx="4" fill="#ffffff" stroke="#cdd5cc" strokeWidth="1" />
        <text x="12" y="20" fill="#315c4e" fontSize="9" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          STATUTORY RESULT
        </text>
        <line x1="12" y1="28" x2="132" y2="28" stroke="#ebe8de" strokeWidth="1" />
        <text x="12" y="44" fill="#182522" fontSize="9.5" fontWeight="600" fontFamily="var(--sans)">
          Form 26AS Tax Credit
        </text>
        <text x="12" y="58" fill="#6b756e" fontSize="8" fontFamily="var(--mono)">
          Off-sets advance tax
        </text>
        <line x1="12" y1="64" x2="132" y2="64" stroke="#ebe8de" strokeWidth="1" />
        <text x="12" y="78" fill="#182522" fontSize="9.5" fontWeight="600" fontFamily="var(--sans)">
          FIRA / Purpose Code
        </text>
        <text x="12" y="88" fill="#6b756e" fontSize="8" fontFamily="var(--mono)">
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
      <rect width="340" height="130" rx="6" fill="#f4f3ec" />
      <rect x="1" y="1" width="338" height="128" rx="5" stroke="#e2ded4" strokeWidth="1" />

      {/* Step 1: Invoice */}
      <g transform="translate(12, 20)">
        <rect width="96" height="90" rx="4" fill="#ffffff" stroke="#cdd5cc" strokeWidth="1" />
        <rect x="10" y="12" width="22" height="6" rx="2" fill="#315c4e" opacity="0.8" />
        <line x1="10" y1="26" x2="86" y2="26" stroke="#e4e0d4" strokeWidth="1" />
        <text x="10" y="40" fill="#182522" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          Tax Invoice
        </text>
        <text x="10" y="52" fill="#6b756e" fontSize="7.5" fontFamily="var(--mono)">
          #CT-2026-084
        </text>
        <text x="10" y="66" fill="#6b756e" fontSize="7.5" fontFamily="var(--mono)">
          Net-15 terms
        </text>
        <text x="10" y="78" fill="#315c4e" fontSize="7.5" fontWeight="600" fontFamily="var(--mono)">
          LUT Ref cited
        </text>
      </g>

      <path d="M112 65 L124 65" stroke="#315c4e" strokeWidth="1.5" />
      <polygon points="124,62 129,65 124,68" fill="#315c4e" />

      {/* Step 2: Remittance */}
      <g transform="translate(133, 20)">
        <rect width="96" height="90" rx="4" fill="#ffffff" stroke="#cdd5cc" strokeWidth="1" />
        <rect x="10" y="12" width="22" height="6" rx="2" fill="#d9a85b" opacity="0.8" />
        <line x1="10" y1="26" x2="86" y2="26" stroke="#e4e0d4" strokeWidth="1" />
        <text x="10" y="40" fill="#182522" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          Bank Advice
        </text>
        <text x="10" y="52" fill="#6b756e" fontSize="7.5" fontFamily="var(--mono)">
          FIRA Certificate
        </text>
        <text x="10" y="66" fill="#6b756e" fontSize="7.5" fontFamily="var(--mono)">
          USD to INR proof
        </text>
        <text x="10" y="78" fill="#b8863b" fontSize="7.5" fontWeight="600" fontFamily="var(--mono)">
          e-BRC matched
        </text>
      </g>

      <path d="M233 65 L245 65" stroke="#315c4e" strokeWidth="1.5" />
      <polygon points="245,62 250,65 245,68" fill="#315c4e" />

      {/* Step 3: Vault Archive */}
      <g transform="translate(254, 20)">
        <rect width="74" height="90" rx="4" fill="#203e35" />
        <circle cx="37" cy="30" r="12" fill="#315c4e" />
        <path d="M33 30 L36 33 L42 27" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="37" y="56" textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="600" fontFamily="var(--sans)">
          6-Year
        </text>
        <text x="37" y="68" textAnchor="middle" fill="#dce7d9" fontSize="8" fontFamily="var(--sans)">
          Archive
        </text>
        <text x="37" y="80" textAnchor="middle" fill="#d9a85b" fontSize="7" fontFamily="var(--mono)">
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
      <rect width="340" height="130" rx="6" fill="#f4f3ec" />
      <rect x="1" y="1" width="338" height="128" rx="5" stroke="#e2ded4" strokeWidth="1" />

      {/* Pillar 1: GST */}
      <g transform="translate(12, 16)">
        <rect width="98" height="98" rx="4" fill="#ffffff" stroke="#cdd5cc" strokeWidth="1" />
        <text x="10" y="18" fill="#315c4e" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          GST THRESHOLD
        </text>
        <line x1="10" y1="24" x2="88" y2="24" stroke="#ebe8de" strokeWidth="1" />
        <text x="10" y="40" fill="#182522" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          &lt; ₹20L: Optional
        </text>
        <text x="10" y="52" fill="#6b756e" fontSize="7.5" fontFamily="var(--sans)">
          Notif 10/2017-IT
        </text>
        <line x1="10" y1="58" x2="88" y2="58" stroke="#ebe8de" strokeWidth="1" />
        <text x="10" y="74" fill="#182522" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          &gt; ₹20L: Compulsory
        </text>
        <text x="10" y="86" fill="#315c4e" fontSize="7.5" fontWeight="600" fontFamily="var(--mono)">
          File RFD-11 LUT
        </text>
      </g>

      {/* Pillar 2: Advance Tax */}
      <g transform="translate(121, 16)">
        <rect width="98" height="98" rx="4" fill="#ffffff" stroke="#cdd5cc" strokeWidth="1" />
        <text x="10" y="18" fill="#d9a85b" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          ADVANCE TAX
        </text>
        <line x1="10" y1="24" x2="88" y2="24" stroke="#ebe8de" strokeWidth="1" />
        <text x="10" y="40" fill="#182522" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          Sec 44ADA relief
        </text>
        <text x="10" y="52" fill="#6b756e" fontSize="7.5" fontFamily="var(--sans)">
          Single tranche
        </text>
        <line x1="10" y1="58" x2="88" y2="58" stroke="#ebe8de" strokeWidth="1" />
        <rect x="8" y="66" width="82" height="22" rx="3" fill="#fef8eb" stroke="#ebd6b0" strokeWidth="1" />
        <text x="14" y="80" fill="#b8863b" fontSize="8" fontWeight="700" fontFamily="var(--mono)">
          DUE: MARCH 15
        </text>
      </g>

      {/* Pillar 3: TDS Reconciliation */}
      <g transform="translate(230, 16)">
        <rect width="98" height="98" rx="4" fill="#ffffff" stroke="#cdd5cc" strokeWidth="1" />
        <text x="10" y="18" fill="#315c4e" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          TDS &amp; 26AS
        </text>
        <line x1="10" y1="24" x2="88" y2="24" stroke="#ebe8de" strokeWidth="1" />
        <text x="10" y="40" fill="#182522" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          Quarterly match
        </text>
        <text x="10" y="52" fill="#6b756e" fontSize="7.5" fontFamily="var(--sans)">
          Client TAN deposits
        </text>
        <line x1="10" y1="58" x2="88" y2="58" stroke="#ebe8de" strokeWidth="1" />
        <text x="10" y="74" fill="#182522" fontSize="9" fontWeight="600" fontFamily="var(--sans)">
          AIS verification
        </text>
        <text x="10" y="86" fill="#315c4e" fontSize="7.5" fontWeight="600" fontFamily="var(--mono)">
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
      <rect width="340" height="130" rx="6" fill="#f4f3ec" />
      <rect x="1" y="1" width="338" height="128" rx="5" stroke="#e2ded4" strokeWidth="1" />

      {/* Phase 1: Regime Choice */}
      <g transform="translate(12, 16)">
        <rect width="92" height="98" rx="4" fill="#ffffff" stroke="#cdd5cc" strokeWidth="1" />
        <text x="10" y="18" fill="#315c4e" fontSize="8" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          01. REGIME
        </text>
        <line x1="10" y1="24" x2="82" y2="24" stroke="#ebe8de" strokeWidth="1" />
        <rect x="8" y="32" width="76" height="24" rx="3" fill="#e8f0e6" />
        <text x="14" y="44" fill="#203e35" fontSize="8.5" fontWeight="600" fontFamily="var(--sans)">
          New (115BAC)
        </text>
        <text x="14" y="52" fill="#315c4e" fontSize="7" fontFamily="var(--mono)">
          ₹7L zero tax slab
        </text>
        <rect x="8" y="62" width="76" height="24" rx="3" fill="#faf9f5" stroke="#e4e0d4" strokeWidth="1" />
        <text x="14" y="74" fill="#6b756e" fontSize="8.5" fontFamily="var(--sans)">
          Old Regime
        </text>
        <text x="14" y="82" fill="#889189" fontSize="7" fontFamily="var(--mono)">
          With itemized 80C
        </text>
      </g>

      <path d="M107 65 L119 65" stroke="#315c4e" strokeWidth="1.5" />
      <polygon points="119,62 124,65 119,68" fill="#315c4e" />

      {/* Phase 2: Form Choice */}
      <g transform="translate(128, 16)">
        <rect width="92" height="98" rx="4" fill="#ffffff" stroke="#cdd5cc" strokeWidth="1" />
        <text x="10" y="18" fill="#d9a85b" fontSize="8" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          02. ITR FORM
        </text>
        <line x1="10" y1="24" x2="82" y2="24" stroke="#ebe8de" strokeWidth="1" />
        <rect x="8" y="32" width="76" height="24" rx="3" fill="#fef8eb" stroke="#eedcbe" strokeWidth="1" />
        <text x="14" y="44" fill="#b8863b" fontSize="8.5" fontWeight="600" fontFamily="var(--sans)">
          ITR-4 (Sugam)
        </text>
        <text x="14" y="52" fill="#8d682e" fontSize="7" fontFamily="var(--mono)">
          44ADA Presumptive
        </text>
        <rect x="8" y="62" width="76" height="24" rx="3" fill="#faf9f5" stroke="#e4e0d4" strokeWidth="1" />
        <text x="14" y="74" fill="#6b756e" fontSize="8.5" fontFamily="var(--sans)">
          ITR-3 Normal
        </text>
        <text x="14" y="82" fill="#889189" fontSize="7" fontFamily="var(--mono)">
          Books &amp; Sched FA
        </text>
      </g>

      <path d="M223 65 L235 65" stroke="#315c4e" strokeWidth="1.5" />
      <polygon points="235,62 240,65 235,68" fill="#315c4e" />

      {/* Phase 3: Bank Refund */}
      <g transform="translate(244, 16)">
        <rect width="84" height="98" rx="4" fill="#203e35" />
        <text x="10" y="18" fill="#dce7d9" fontSize="8" fontWeight="700" letterSpacing="0.08em" fontFamily="var(--mono)">
          03. REFUND
        </text>
        <line x1="10" y1="24" x2="74" y2="24" stroke="#315c4e" strokeWidth="1" />
        <circle cx="42" cy="46" r="14" fill="#315c4e" />
        <path d="M36 46 L40 50 L48 42" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="42" y="72" textAnchor="middle" fill="#fff" fontSize="8.5" fontWeight="600" fontFamily="var(--sans)">
          Pre-Validated
        </text>
        <text x="42" y="82" textAnchor="middle" fill="#dce7d9" fontSize="7.5" fontFamily="var(--sans)">
          Bank Account
        </text>
        <text x="42" y="94" textAnchor="middle" fill="#d9a85b" fontSize="7" fontFamily="var(--mono)">
          +0.5% INTEREST
        </text>
      </g>
    </svg>
  );
}
