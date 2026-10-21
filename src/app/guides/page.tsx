import type { Metadata } from "next";
import { articles } from "@/lib/articles";
import { GuidesDirectory } from "@/components/guides-directory";

export const metadata: Metadata = {
  title: "Tax, GST & Remittance Guides for Indian Freelancers",
  description: "Browse 8+ in-depth, source-cited guides covering Section 44ADA, GST LUT renewal, Wise/PayPal remittance e-FIRA, TDS refunds, and expense deductions.",
  alternates: { canonical: "/guides" }
};

export default function GuidesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">The Knowledge Library</span>
          <h1 className="serif">
            Guides for every stage<br />of your freelance journey.
          </h1>
          <p>
            Practical, India-focused explanations for taxes, GST filing, international payments, and statutory recordkeeping—built specifically for independent creators, developers, and consultants.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <GuidesDirectory allArticles={articles} />
        </div>
      </section>
    </main>
  );
}
