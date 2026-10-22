import Link from "next/link";
import {
  ArrowRight,
  FileText,
  ChartNoAxesColumnIncreasing,
  Percent,
  Globe2,
  Wallet,
  ShieldCheck,
  BookOpen,
  Calculator,
  ChevronDown,
  Users,
  TrendingUp,
} from "lucide-react";
import { articles } from "@/lib/articles";
import { Reveal } from "@/components/reveal";
import { TaxPreview } from "@/components/tax-preview";
import { HeroEditorial } from "@/components/hero-editorial";
import { InfiniteTicker } from "@/components/infinite-ticker";
import { TestimonialsBento } from "@/components/testimonials-bento";
import { PersonasGrid } from "@/components/personas-grid";
import { TiltCard } from "@/components/tilt-card";
import { FeaturedGuidesCreative } from "@/components/featured-guides-creative";
import { ComplianceWorkflow } from "@/components/compliance-workflow";

const TOPICS = [
  { title: "GST & LUT Renewal", desc: "Export services without 18% IGST under Form RFD-11", href: "/guides/renew-gst-lut-online", icon: FileText },
  { title: "Section 44ADA", desc: "50% presumptive profit & AY 25-26 regime check", href: "/tools/44ada-calculator", icon: Percent },
  { title: "TDS 194J Refunds", desc: "Reconcile 26AS/AIS and claim excess TDS credits", href: "/guides/claim-tds-refund-freelancers", icon: ChartNoAxesColumnIncreasing },
  { title: "USD Remittances", desc: "Wise, Stripe, PayPal purpose codes & BRC", href: "/guides/paypal-wise-stripe-firc-guide", icon: Globe2 },
  { title: "Advance Tax", desc: "March 15th single payment rule for 44ADA", href: "/guides/advance-tax-deadlines-penalties", icon: Wallet },
];

const STATS = [
  { num: "8", suffix: "+", label: "In-Depth Guides", sub: "Section 44ADA to GST LUT & beyond" },
  { num: "₹75L", suffix: "", label: "Digital Receipt Limit", sub: "Threshold explained with practical walkthroughs" },
  { num: "100%", suffix: "", label: "Client-Side Private", sub: "Zero income data sent to any server" },
  { num: "0", suffix: "₹", label: "Free Forever", sub: "No subscription, no paywall, no tracking" },
];

const TRUST = [
  { icon: ShieldCheck, title: "Primary-Source Backed", body: "Every legal statement cites the Income Tax Act, GST circulars, or RBI Master Directions directly. Not blog opinions — statute-level accuracy." },
  { icon: BookOpen, title: "Plain-Language Explanations", body: "Actionable steps for real freelancer challenges: e-FIRAs, LUT renewal, Form 15G/15H, TDS reconciliations, and advance tax planning." },
  { icon: Calculator, title: "100% Private Tools", body: "Calculations run locally in your browser. No income data, PAN, or financial numbers are ever sent to a server — by architecture, not just policy." },
];

const FAQS = [
  {
    q: "Who is CreatorTax India built for?",
    a: "Digital professionals who earn independently — software engineers, video editors, graphic designers, content creators, UX researchers, and anyone billing clients for professional services. If you receive professional fees (194J), contract payments (194C), or foreign remittances (Wise, PayPal, Stripe), this site is for you."
  },
  {
    q: "What is Section 44ADA and who can use it?",
    a: "Section 44ADA is a presumptive taxation scheme for specified professionals (including software developers, designers, technical consultants) earning up to ₹75 lakh in gross receipts from digital services. Under 44ADA, 50% of your gross receipts is deemed as your profit — you declare no actual expenses. This significantly simplifies ITR filing and reduces tax liability for most digital freelancers."
  },
  {
    q: "Is the 44ADA calculator safe to use? Will my income data be saved?",
    a: "Completely safe. All calculations happen in your browser using JavaScript — your income figures, TDS amounts, and PAN details are never transmitted to any server. There is no account system, no analytics on your inputs, and no data retention. You can even run it offline once the page loads."
  },
  {
    q: "What is a GST LUT and do I need one as a freelancer?",
    a: "If you export services internationally (e.g., billing a US client from India via Wise or Stripe), you can either pay 18% IGST upfront and claim a refund, or file a Letter of Undertaking (LUT) annually to zero-rate your exports from day one. The LUT route is simpler, fee-free, and strongly recommended for anyone billing ₹20,000+ internationally per year."
  },
  {
    q: "What is e-FIRA and why do PayPal/Wise users need it?",
    a: "Foreign Inward Remittance Advice (FIRA/FIRC) is the documentary proof that foreign currency entered your Indian bank account for a specific purpose code. Banks issue it for SWIFT transfers. PayPal and Wise have their own variants (e-FIRA from PayPal, digital FIRC from Wise). You need this document for GST LUT compliance, ITR proof of income, and 15CA/15CB filings."
  },
  {
    q: "How is advance tax calculated for 44ADA freelancers?",
    a: "Under Section 44ADA, you can pay the entire advance tax as a single installment by March 15th (instead of the quarterly installments required for regular ITR). If your total tax liability after TDS credits exceeds ₹10,000 for the year, you must pay advance tax to avoid interest under Sections 234B and 234C."
  },
  {
    q: "Does CreatorTax India provide personalized tax advice?",
    a: "No — CreatorTax India is an educational resource, not a tax advisory service. All content is general information based on statute and regulatory guidance. For your specific ITR filing, GST registration, or complex cross-border situation, consult a qualified Chartered Accountant. This distinction is stated clearly on every guide page."
  },
  {
    q: "How often are the guides updated?",
    a: "Every guide carries a 'Last reviewed' date. We review all guides after major tax events: Union Budget (February), Finance Act notifications (March–April), and any CBDT/GSTN circulars that change thresholds or procedures. The site is currently updated for Assessment Year 2025-26 and Finance Act 2025."
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Cinematic Editorial Hero ─────────────────────────────── */}
      <HeroEditorial />

      {/* ── Infinite Ecosystem & Statutory Ticker ──────────────── */}
      <InfiniteTicker />

      {/* ── Popular Topics Strip (Multi-directional slide reveals) ── */}
      <section className="topic-strip" id="topics" aria-label="Essential topics">
        <div className="container topic-grid">
          {TOPICS.map(({ title, desc, href, icon: Icon }, i) => (
            <Reveal key={title} direction={i % 2 === 0 ? "left" : "right"} distance={24} delay={i * 0.05} spring={true}>
              <Link className="topic" href={href}>
                <div className="topic-icon-wrap">
                  <Icon className="topic-icon" size={18} />
                </div>
                <span>
                  <strong>{title}</strong>
                  <small>{desc}</small>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Featured Guides (Second Section Creative & Professional Overhaul) ── */}
      <section className="section">
        <div className="container">
          <Reveal direction="blur">
            <div className="section-head">
              <div>
                <span className="eyebrow">Practical Knowledge Library</span>
                <h2 className="serif">
                  Start with what you need<br />to figure out today.
                </h2>
              </div>
              <p className="section-intro">
                Step-by-step statutory guides, official portal workflows, and deduction rules — written
                specifically for India&apos;s digital workforce.
              </p>
            </div>
          </Reveal>

          <FeaturedGuidesCreative />

          <div style={{ marginTop: 36, textAlign: "center" }}>
            <Link className="btn secondary" href="/guides">
              Browse all {articles.length} guides <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Your Freelance Tax Clarity in Three Steps ── */}
      <section className="section" style={{ background: "var(--paper-deep)", paddingBlock: 112 }}>
        <div className="container">
          <Reveal direction="blur">
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span className="eyebrow">Three-Step Compliance Flow</span>
              <h2 className="serif" style={{ marginTop: 14 }}>
                Your freelance tax clarity in three steps.
              </h2>
              <p style={{ color: "var(--muted)", maxWidth: 580, margin: "14px auto 0", fontSize: 14.5, lineHeight: 1.75 }}>
                Classify your income under Section 44ADA, protect foreign receipts with Form RFD-11 LUT, and compute your single March 15 advance tax payment.
              </p>
            </div>
          </Reveal>

          <ComplianceWorkflow />
        </div>
      </section>

      {/* ── Stats Band (Float physics with staggered springs) ────── */}
      <section className="stats-band">
        <div className="container">
          <div className="stats-grid">
            {STATS.map(({ num, suffix, label, sub }, i) => (
              <Reveal key={label} direction="float" distance={28} delay={i * 0.08} spring={true}>
                <div className="stat-item">
                  <div className="stat-num">
                    {num}<span>{suffix}</span>
                  </div>
                  <div className="stat-label">{label}</div>
                  <div className="stat-sub">{sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive Tax Estimator (Directional slide-in) ────── */}
      <section className="feature-band" id="interactive-estimator">
        <div className="container feature-grid">
          <Reveal direction="left" distance={45} spring={true}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 14 }}>
              <span className="eyebrow" style={{ color: "#94a3b8", margin: 0 }}>
                Interactive Tax Estimator
              </span>
            </div>

            <h2 className="serif">
              Know your numbers<br />before filing your ITR.
            </h2>

            <p>
              Compare the New Tax Regime (Section 115BAC) with the Old Regime under Section 44ADA.
              Test how the ₹75 Lakh digital receipts threshold, TDS deductions, and Section 87A rebate
              impact your net take-home income.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 28px", display: "grid", gap: 11 }}>
              {[
                "Zero tax up to ₹7L presumptive profit via 87A rebate",
                "Single March 15th advance tax for 44ADA professionals",
                "New regime default from AY 2024-25 onwards",
              ].map((point) => (
                <li key={point} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, color: "#cbd5e1" }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#94a3b8", flexShrink: 0, marginTop: 8 }} />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              className="btn"
              style={{ background: "#ffffff", color: "#0f172a", borderColor: "#ffffff", fontWeight: 700 }}
              href="/tools/44ada-calculator"
            >
              Launch Full 44ADA Calculator <ArrowRight size={15} />
            </Link>
          </Reveal>

          <Reveal direction="right" distance={45} delay={0.12} spring={true}>
            <TaxPreview />
          </Reveal>
        </div>
      </section>

      {/* ── Trust & Editorial Integrity (3D Magnetic Tilt Cards) ── */}
      <section className="section">
        <div className="container">
          <Reveal direction="blur">
            <div className="section-head">
              <div>
                <span className="eyebrow">Editorial Integrity</span>
                <h2 className="serif">Built on trust, not trends.</h2>
              </div>
              <p className="section-intro">
                Tax information requires rigor, statutory citations, and clear scope — not
                overconfident claims or marketing hype.
              </p>
            </div>
          </Reveal>

          <div className="trust-grid">
            {TRUST.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} direction="scale" delay={i * 0.08} spring={true}>
                <TiltCard glowColor="rgba(36, 54, 75, 0.14)" scale={1.03}>
                  <div className="trust-item">
                    <div className="trust-icon-wrap">
                      <Icon size={22} color="var(--brand-primary)" />
                    </div>
                    <strong>{title}</strong>
                    <p>{body}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who This Is For ─────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--paper-deep)", paddingBlock: 112 }}>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span className="eyebrow">Tailored by Profession</span>
              <h2 className="serif" style={{ marginTop: 14 }}>
                Select your line of work.<br />See your exact tax &amp; compliance rules.
              </h2>
              <p style={{ color: "var(--muted)", maxWidth: 620, margin: "14px auto 0", fontSize: 14.5, lineHeight: 1.75 }}>
                Section 44ADA eligibility, real AY 2025-26 tax savings comparison, and the exact paperwork (GST LUT, e-FIRA, and TDS credits) required for your client invoicing model.
              </p>
            </div>
          </Reveal>

          <PersonasGrid />
        </div>
      </section>

      {/* ── Creative Testimonials Bento Showcase ────────────────── */}
      <section className="testimonials-band">
        <div className="container">
          <Reveal>
            <div className="section-center-head">
              <span className="eyebrow">Verified Community Outcomes</span>
              <h2 className="serif">
                Real numbers. Real filings.<br />Zero CA guesswork.
              </h2>
              <p>
                How Indian software engineers, video editors, and remote contractors eliminate
                unnecessary taxes and file statutory compliances with 100% confidence.
              </p>
            </div>
          </Reveal>

          <TestimonialsBento />
        </div>
      </section>

      {/* ── FAQs ────────────────────────────────────────────────── */}
      <section className="faq-band">
        <div className="container">
          <Reveal>
            <div className="faq-band-header">
              <span className="eyebrow">Common Questions</span>
              <h2 className="serif">
                Frequently Asked Questions
              </h2>
              <p>
                The most common questions Indian freelancers ask about 44ADA, GST, TDS,
                and international payment compliance.
              </p>
            </div>
          </Reveal>

          <div className="faq-grid">
            {FAQS.map(({ q, a }, i) => (
              <Reveal key={q} delay={i * 0.04}>
                <details className="faq-item">
                  <summary className="faq-q">
                    {q}
                    <ChevronDown size={16} className="faq-chevron" />
                  </summary>
                  <div className="faq-a">{a}</div>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 16 }}>
                Still have questions? Browse the full knowledge base or reach out.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Link className="btn" href="/guides">Browse All Guides <ArrowRight size={15} /></Link>
                <Link className="btn secondary" href="/contact">Contact Editorial Team</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Final CTA Band ──────────────────────────────────────── */}
      <section className="cta-band">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "6px 16px", borderRadius: 999,
                border: "1px solid rgba(255,255,255,.18)",
                background: "rgba(255,255,255,.08)", fontSize: 11.5,
                color: "var(--brand-paper)", fontWeight: 700, letterSpacing: ".06em"
              }}>
                <Users size={13} color="var(--brand-accent)" /> 1,000+ Indian freelancers trust this resource
              </span>
            </div>
            <h2 className="serif">
              Stop overpaying.<br />Start with the 44ADA calculator.
            </h2>
            <p>
              Takes 60 seconds. No signup, no data collection — just instant clarity on your
              Section 44ADA tax liability for AY 2025-26.
            </p>
            <div className="cta-actions">
              <Link
                className="btn"
                style={{ background: "var(--brand-primary)", color: "#ffffff", borderColor: "rgba(255,255,255,0.2)", minHeight: 52, fontSize: 15, boxShadow: "0 8px 25px rgba(0,0,0,0.3)" }}
                href="/tools/44ada-calculator"
              >
                <TrendingUp size={18} />
                Calculate My Tax Now
              </Link>
              <Link
                className="btn ghost"
                style={{ minHeight: 52, fontSize: 15 }}
                href="/guides"
              >
                Explore All Guides <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
