import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ShieldCheck, FileCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Editorial Corrections",
  description: "Get in touch with the CreatorTax India editorial team, submit content corrections, or suggest topics.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1 className="serif">
            Let&apos;s make freelancer<br />finance less confusing.
          </h1>
          <p>
            Send a question, content suggestion, or correction request. We prioritize transparency, rigorous sourcing, and community-driven accuracy.
          </p>
        </div>
      </section>

      <section className="container contact-grid">
        <ContactForm />

        <aside className="panel">
          <span className="eyebrow">Editorial Integrity</span>
          <h2 className="serif" style={{ fontSize: 28, fontWeight: 500, margin: "14px 0" }}>
            Help us maintain zero-compromise accuracy.
          </h2>

          <div style={{ display: "grid", gap: 18, marginTop: 20 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <FileCheck size={20} color="#123d34" style={{ flexShrink: 0, marginTop: 3 }} />
              <div>
                <strong style={{ fontSize: 13, display: "block" }}>For Content Corrections</strong>
                <p style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.6, margin: "4px 0 0" }}>
                  Please include the specific article URL, the exact sentence you question, and a link to the primary official circular or statutory provision.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <ShieldCheck size={20} color="#123d34" style={{ flexShrink: 0, marginTop: 3 }} />
              <div>
                <strong style={{ fontSize: 13, display: "block" }}>Privacy Notice</strong>
                <p style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.6, margin: "4px 0 0" }}>
                  Never send PAN, Aadhaar numbers, net banking passwords, or unredacted tax return PDFs over unencrypted communication channels.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <Mail size={20} color="#123d34" style={{ flexShrink: 0, marginTop: 3 }} />
              <div>
                <strong style={{ fontSize: 13, display: "block" }}>Direct Editorial Desk</strong>
                <p style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.6, margin: "4px 0 0" }}>
                  Editorial inquiries: <a href="mailto:hello@creatortax.in" style={{ color: "var(--green)", fontWeight: 600 }}>hello@creatortax.in</a>
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
