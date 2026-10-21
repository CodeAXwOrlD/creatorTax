import type { Metadata } from "next";
import Link from "next/link";
import { Send, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Corrections Policy — CreatorTax India",
  description: "How to report factual inaccuracies, statutory amendments, or workflow updates to the CreatorTax India editorial team.",
  alternates: { canonical: "/corrections" }
};

export default function CorrectionsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Zero-Compromise Accuracy</span>
          <h1 className="serif">Corrections policy.</h1>
          <p>
            Accuracy is more important than appearing infallible. When errors or statutory changes occur, we correct them transparently and promptly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          <h2 className="serif" style={{ fontSize: 30, fontWeight: 500, margin: "0 0 16px" }}>
            How We Handle Reader &amp; Expert Feedback
          </h2>
          <p style={{ lineHeight: 1.85, color: "var(--muted)", fontSize: 15 }}>
            CreatorTax India welcomes feedback from practicing chartered accountants, tax lawyers, GST practitioners, and independent creators. If you spot a factual error, an outdated portal navigation step, or an ambiguous legal interpretation, we investigate within 48 hours.
          </p>

          <div
            style={{
              padding: "24px",
              background: "#faf7f0",
              border: "1px solid var(--line)",
              borderRadius: 8,
              margin: "30px 0"
            }}
          >
            <strong style={{ fontSize: 16, display: "block", color: "var(--green)", marginBottom: 12 }}>
              What to Include When Reporting an Error
            </strong>
            <ul style={{ paddingLeft: 22, margin: 0, color: "var(--ink)", lineHeight: 1.8, fontSize: 14 }}>
              <li><strong>Article URL:</strong> The exact link to the guide or tool where the discrepancy appears.</li>
              <li><strong>Specific Claim:</strong> Quote the sentence or number you believe is inaccurate.</li>
              <li><strong>Primary Source Citation:</strong> Link to the relevant section of the Income Tax Act, CGST Rules, or CBDT notification supporting your correction.</li>
              <li><strong>Your Background (Optional):</strong> If you are a practicing CA, tax consultant, or legal professional, letting us know helps expedite technical review.</li>
            </ul>
          </div>

          <p style={{ lineHeight: 1.85, color: "var(--muted)", fontSize: 15 }}>
            Material corrections that affect tax liability or compliance deadlines are documented with a visible &quot;Updated / Correction Note&quot; at the top of the revised guide.
          </p>

          <div style={{ marginTop: 32, display: "flex", gap: 14 }}>
            <Link className="btn" href="/contact">
              Submit a Correction <Send size={14} />
            </Link>
            <Link className="btn secondary" href="/guides">
              Browse All Guides <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
