import Link from "next/link";
import { Percent, FileText, ChartNoAxesColumnIncreasing, Globe2, Wallet, ArrowUpRight } from "lucide-react";

const TOPICS = [
  {
    title: "Income Tax & 44ADA",
    desc: "50% presumptive profit, ₹75L threshold & ITR-4 filing",
    href: "/tools/44ada-calculator",
    icon: Percent,
    badge: "Calculator"
  },
  {
    title: "GST & LUT",
    desc: "Form RFD-11 annual renewal & zero-rated export invoices",
    href: "/guides/renew-gst-lut-online",
    icon: FileText,
    badge: "Guide"
  },
  {
    title: "TDS Refunds",
    desc: "Reconcile Form 26AS/AIS & claim 10% vs 2% excess credits",
    href: "/guides/claim-tds-refund-freelancers",
    icon: ChartNoAxesColumnIncreasing,
    badge: "Guide"
  },
  {
    title: "USD Remittances & FIRC",
    desc: "Wise, PayPal, Stripe purpose codes (P0802) & e-FIRA disposal",
    href: "/guides/paypal-wise-stripe-firc-guide",
    icon: Globe2,
    badge: "Guide"
  },
  {
    title: "Business Expenses",
    desc: "Home office rent, hardware depreciation & software deductions",
    href: "/guides/rent-electricity-business-expenses",
    icon: Wallet,
    badge: "Guide"
  }
];

export function TopicNav() {
  return (
    <nav className="topic-nav-strip" aria-label="Core topic navigation">
      <div className="container">
        <div className="topic-nav-header">
          <span className="eyebrow" style={{ color: "var(--brand-accent)" }}>
            Statutory Topics
          </span>
          <span className="topic-nav-sub">
            Direct access to essential tax workflows for independent Indian professionals
          </span>
        </div>

        <div className="topic-nav-grid">
          {TOPICS.map(({ title, desc, href, icon: Icon, badge }) => (
            <Link key={title} href={href} className="topic-nav-card">
              <div className="topic-nav-top">
                <div className="topic-nav-icon-wrap">
                  <Icon size={18} />
                </div>
                <span className="topic-nav-badge">{badge}</span>
              </div>
              <div className="topic-nav-content">
                <strong className="topic-nav-title">{title}</strong>
                <p className="topic-nav-desc">{desc}</p>
              </div>
              <span className="topic-nav-cta">
                Explore <ArrowUpRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
