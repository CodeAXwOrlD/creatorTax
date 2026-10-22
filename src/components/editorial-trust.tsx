import Link from "next/link";
import { Scale, BookCheck, ShieldCheck, Flag, ArrowRight } from "lucide-react";

export function EditorialTrust() {
  const principles = [
    {
      icon: Scale,
      title: "Authoritative Primary Sources",
      body: "Every tax computation, eligibility rule, and compliance workflow is derived directly from the Income Tax Act, 1961, the CGST Rules, 2017, and RBI Master Directions on Export of Services. We do not publish anecdotal advice or unverified hearsay."
    },
    {
      icon: BookCheck,
      title: "Statutory Dates & Versioning",
      body: "Every guide and calculation tool prominently displays its applicable financial year (FY 2024–25) and assessment year (AY 2025–26). When the Union Budget or CBDT issues statutory amendments, all guides are systematically revised."
    },
    {
      icon: ShieldCheck,
      title: "Transparent Assumptions & Scope",
      body: "We explicitly detail all calculation assumptions—such as the 50% deemed profit floor under Section 44ADA, the 95% non-cash requirement for the ₹75 Lakh threshold, and which specified professions qualify under Section 44AA(1)."
    },
    {
      icon: Flag,
      title: "Corrections & Public Accountability",
      body: "Tax regulations are dynamic. If you identify a statutory change, circular revision, or drafting error in any guide, our editorial board reviews reports within 48 business hours and logs public errata."
    }
  ];

  return (
    <div className="editorial-trust-wrapper">
      <div className="editorial-trust-grid">
        {principles.map(({ icon: Icon, title, body }) => (
          <div key={title} className="editorial-trust-card">
            <div className="editorial-trust-icon-box">
              <Icon size={20} />
            </div>
            <h3 className="editorial-trust-card-title">{title}</h3>
            <p className="editorial-trust-card-body">{body}</p>
          </div>
        ))}
      </div>

      <div className="editorial-trust-cta-banner">
        <div>
          <h4 className="serif editorial-trust-banner-title">
            Have a question or spotted a regulatory change?
          </h4>
          <p className="editorial-trust-banner-desc">
            We welcome corrections, citations, and questions from independent creators, Chartered Accountants, and tax practitioners.
          </p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <Link href="/corrections" className="btn secondary" style={{ fontSize: 13 }}>
            Report a Correction
          </Link>
          <Link href="/contact" className="btn" style={{ fontSize: 13 }}>
            Contact Editorial Board <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
