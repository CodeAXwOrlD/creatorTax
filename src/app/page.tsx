import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  ChartNoAxesColumnIncreasing,
  Percent,
  Globe2,
  Wallet,
  ShieldCheck,
  BookOpen,
  Calculator,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Users,
  TrendingUp,
  Clock,
  Zap,
} from "lucide-react";
import { articles } from "@/lib/articles";
import { Reveal } from "@/components/reveal";
import { TaxPreview } from "@/components/tax-preview";
import { HeroAurora } from "@/components/hero-aurora";
import { InfiniteTicker } from "@/components/infinite-ticker";
import { TestimonialsBento } from "@/components/testimonials-bento";
import { PersonasGrid } from "@/components/personas-grid";
import { HeroArtInteractive } from "@/components/hero-art-interactive";
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
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="hero">
        {/* Ambient Cloud Shader Atmosphere */}
        <HeroAurora />

        <div className="container hero-grid" style={{ position: "relative", zIndex: 2 }}>
          <div>
            {/* Live badge */}
            <div className="animate-fade-up" style={{ marginBottom: 18 }}>
              <span className="badge">
                <span className="badge-dot" />
                Updated · AY 2025-26 · Finance Act Compliant
              </span>
            </div>

            <span className="eyebrow animate-fade-up delay-1" style={{ display: "block", marginBottom: 14 }}>
              Financial clarity for India&apos;s independent workforce
            </span>

            <h1 className="serif animate-fade-up delay-2">
              Make sense of your money.<br />
              Keep more <span className="gradient-text-shimmer">of what you earn.</span>
            </h1>

            <p className="hero-copy animate-fade-up delay-3">
              Practical, source-cited Indian income tax, Section 44ADA, GST LUT, and international
              payment guides for software engineers, video editors, designers, and digital creators.
            </p>

            <div className="hero-actions animate-fade-up delay-4">
              <Link className="btn" href="/guides">
                Explore the Knowledge Base <ArrowRight size={16} />
              </Link>
              <Link className="btn secondary" href="/tools/44ada-calculator">
                Try 44ADA Calculator <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="trust-pills animate-fade-up delay-5">
              {[
                { icon: CheckCircle2, label: "8 Comprehensive Guides" },
                { icon: ShieldCheck, label: "Primary-Source Cited" },
                { icon: Zap, label: "100% Free & Private" },
                { icon: Clock, label: "Updated Feb 2025" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="trust-pill">
                  <Icon size={12} className="trust-pill-icon" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Hero Art with 4 Satellite Motion Chips & Auto-Simulation */}
          <HeroArtInteractive />
        </div>

        {/* Wave divider */}
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: 0, height: 56,
          opacity: .3, pointerEvents: "none",
          background: "repeating-radial-gradient(ellipse at 60% 130%, transparent 0 17px, #7b9b8d 18px 19px, transparent 20px 29px)",
          maskImage: "linear-gradient(transparent,#000)"
        }} />
      </section>

      {/* ── Infinite Ecosystem & Statutory Ticker ──────────────── */}
      <InfiniteTicker />

      {/* ── Popular Topics Strip (Multi-directional slide reveals) ── */}
      <section className="topic-strip" aria-label="Essential topics">
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
              <Sparkles size={16} color="#f4d03f" />
              <span className="eyebrow" style={{ color: "#a8c9bc", margin: 0 }}>
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

            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 28px", display: "grid", gap: 10 }}>
              {[
                "Zero tax up to ₹7L presumptive profit via 87A rebate",
                "Single March 15th advance tax for 44ADA professionals",
                "New regime default from AY 2024-25 onwards",
              ].map((point) => (
                <li key={point} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13.5, color: "#c0d8ce" }}>
                  <CheckCircle2 size={16} color="#5be0a0" style={{ flexShrink: 0, marginTop: 2 }} />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              className="btn"
              style={{ background: "#f6f2e9", color: "#123d34", borderColor: "#f6f2e9" }}
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
                <TiltCard glowColor="rgba(18, 61, 52, 0.14)" scale={1.03}>
                  <div className="trust-item">
                    <div className="trust-icon-wrap">
                      <Icon size={22} color="var(--green)" />
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
              <span className="eyebrow">Freelance Discipline Matrix</span>
              <h2 className="serif" style={{ marginTop: 14 }}>
                Choose your discipline.<br />See your exact tax numbers.
              </h2>
              <p style={{ color: "var(--muted)", maxWidth: 600, margin: "14px auto 0", fontSize: 14.5, lineHeight: 1.75 }}>
                Statutory eligibility under Section 44ADA, AY 2025-26 tax savings ledger, and mandatory compliance shields calibrated to how you actually bill domestic and foreign clients.
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
            <div style={{ textAlign: "center" }}>
              <span className="eyebrow">Verified Community Outcomes</span>
              <h2 className="serif" style={{ marginTop: 14 }}>
                Real numbers. Real filings. Zero CA guesswork.
              </h2>
              <p style={{ color: "var(--muted)", maxWidth: 560, margin: "14px auto 0", fontSize: 14.5, lineHeight: 1.75 }}>
                How Indian software engineers, video editors, and remote contractors eliminate unnecessary taxes and file statutory compliances with 100% confidence.
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
            <div style={{ textAlign: "center", marginBottom: 0 }}>
              <span className="eyebrow">Common Questions</span>
              <h2 className="serif" style={{ marginTop: 14 }}>
                Frequently Asked Questions
              </h2>
              <p style={{ color: "var(--muted)", maxWidth: 520, margin: "14px auto 0", fontSize: 14, lineHeight: 1.7 }}>
                The most common questions Indian freelancers ask about 44ADA, GST, TDS, and
                international payment compliance.
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
                border: "1px solid rgba(255,255,255,.2)",
                background: "rgba(255,255,255,.08)", fontSize: 11.5,
                color: "#a8c9bc", fontWeight: 700, letterSpacing: ".06em"
              }}>
                <Users size={13} /> 1,000+ Indian freelancers trust this resource
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
                style={{ background: "#f6f2e9", color: "#123d34", borderColor: "#f6f2e9", minHeight: 52, fontSize: 15 }}
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
