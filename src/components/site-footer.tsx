import Link from "next/link";
import { Twitter, Linkedin, Github, Youtube } from "lucide-react";
import { CTLogoFull } from "@/components/logo";

const KNOWLEDGE = [
  { href: "/guides", label: "All Guides (8)" },
  { href: "/guides/section-44ada-presumptive-tax-guide", label: "Section 44ADA Guide" },
  { href: "/guides/renew-gst-lut-online", label: "GST LUT Renewal" },
  { href: "/guides/paypal-wise-stripe-firc-guide", label: "Wise & PayPal e-FIRA" },
  { href: "/guides/claim-tds-refund-freelancers", label: "TDS 194J Refunds" },
  { href: "/guides/advance-tax-deadlines-penalties", label: "Advance Tax Calendar" },
];

const TOOLS = [
  { href: "/tools", label: "Tools Overview" },
  { href: "/tools/44ada-calculator", label: "44ADA Tax Calculator" },
  { href: "/guides/new-vs-old-tax-regime-freelancers", label: "New vs Old Regime" },
  { href: "/guides/rent-electricity-business-expenses", label: "Expense Deductions" },
];

const LEGAL = [
  { href: "/about", label: "About Us" },
  { href: "/editorial-policy", label: "Editorial Standards" },
  { href: "/disclaimer", label: "Financial Disclaimer" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/corrections", label: "Report a Correction" },
  { href: "/contact", label: "Contact Editorial" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand col */}
          <div>
            <CTLogoFull dark />
            <p style={{ marginTop: 18, maxWidth: 310 }}>
              Practical, source-cited financial education and interactive tools for India&apos;s
              independent workforce. Clear answers, statutory thresholds, zero jargon.
            </p>

            {/* Social icons */}
            <div className="footer-social">
              <a href="https://twitter.com" aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
                <Twitter size={15} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={15} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <Youtube size={15} />
              </a>
              <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github size={15} />
              </a>
            </div>

            {/* Trust badge */}
            <div
              style={{
                marginTop: 24, display: "inline-flex", alignItems: "center", gap: 8,
                padding: "9px 14px", border: "1px solid rgba(255,255,255,.1)",
                borderRadius: 8, fontSize: 11, color: "#8aac9e", background: "rgba(255,255,255,.04)"
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5be0a0", display: "inline-block" }} />
              Finance Act 2025 · Updated AY 2025-26
            </div>
          </div>

          {/* Knowledge Base */}
          <div>
            <h4>Knowledge Base</h4>
            <div className="footer-links">
              {KNOWLEDGE.map(({ href, label }) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4>Calculators &amp; Tools</h4>
            <div className="footer-links">
              {TOOLS.map(({ href, label }) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4>Standards &amp; Legal</h4>
            <div className="footer-links">
              {LEGAL.map(({ href, label }) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} CreatorTax India. Built for India&apos;s digital professionals.</span>
          <span>Educational information only — not individualized tax, legal, or accounting advice.</span>
        </div>
      </div>
    </footer>
  );
}
