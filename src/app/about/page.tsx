import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Scale, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About CreatorTax India — Mission & Editorial Standards",
  description: "Learn why CreatorTax India was founded: to empower Indian freelancers, video editors, and creators with transparent, source-backed tax education.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Why We Exist</span>
          <h1 className="serif">
            Built for India&apos;s<br />independent workforce.
          </h1>
          <p>
            CreatorTax India is an educational technology publication dedicated to helping independent professionals, developers, content creators, and remote consultants navigate Indian taxes, GST, and foreign remittances with confidence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          <h2 className="serif" style={{ fontSize: 36, fontWeight: 500, margin: "0 0 16px" }}>
            Clarity before complexity.
          </h2>
          <p style={{ lineHeight: 1.85, color: "var(--muted)", fontSize: 15 }}>
            India has one of the fastest-growing freelance and digital creator economies in the world. Yet, the financial resources available to independent workers remain plagued by outdated advice, aggressive chartered accountant sales pitches, or generic corporate tax jargon designed for large enterprises.
          </p>
          <p style={{ lineHeight: 1.85, color: "var(--muted)", fontSize: 15 }}>
            Our mission is simple: translate complex Income Tax sections, GST council circulars, and Reserve Bank of India foreign exchange rules into transparent, battle-tested checklists, interactive calculators, and plain-English guides.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              margin: "36px 0"
            }}
          >
            <div className="panel" style={{ padding: 22 }}>
              <ShieldCheck size={24} color="var(--green)" style={{ marginBottom: 10 }} />
              <strong style={{ display: "block", fontSize: 16, marginBottom: 6 }}>Source-Backed Truth</strong>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                Every tax claim, threshold, and deadline links directly to authoritative Income Tax Department circulars or GST portal statutes.
              </p>
            </div>

            <div className="panel" style={{ padding: 22 }}>
              <Scale size={24} color="var(--terracotta)" style={{ marginBottom: 10 }} />
              <strong style={{ display: "block", fontSize: 16, marginBottom: 6 }}>Zero Unrealistic Promises</strong>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                We never promise zero tax hacks or fabricate exemptions. We explain both the legal benefits and statutory risks clearly.
              </p>
            </div>
          </div>

          <h2 className="serif" style={{ fontSize: 30, fontWeight: 500, marginTop: 40, marginBottom: 14 }}>
            Our Editorial Framework
          </h2>
          <p style={{ lineHeight: 1.85, color: "var(--muted)", fontSize: 15 }}>
            All content on CreatorTax India is independently produced and peer-reviewed against the latest legislative amendments (such as the Finance Act updates for AY 2025-26). We openly display review dates, primary source links, and clear educational notices on every page.
          </p>

          <div style={{ marginTop: 32, display: "flex", gap: 14 }}>
            <Link className="btn" href="/guides">
              Explore the Guides <ArrowRight size={15} />
            </Link>
            <Link className="btn secondary" href="/contact">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
