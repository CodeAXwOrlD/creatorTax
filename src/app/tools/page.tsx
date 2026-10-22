import type { Metadata } from "next";
import { ToolsHubView } from "@/components/tools-hub-view";
import { ShieldCheck, FileCheck, Calculator, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Tax Calculators & Legal Templates for Indian Freelancers | CreatorTax India",
  description: "Explore free financial tools and copyable legal templates: Section 44ADA calculator, Section 194J TDS dispute letters, Rule 46 export LUT invoices, and RBI purpose code lookups.",
  alternates: { canonical: "/tools" }
};

export default function ToolsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Statutory Blueprints &amp; Tools</span>
          <h1 className="serif">
            Financial tools &amp; legal templates<br />for India&apos;s independent workforce.
          </h1>
          <p>
            Production-ready tax calculators, copyable Section 194J dispute emails, zero-rated GST export invoice declarations, and RBI remittance compliance kits. Verified for AY 2025-26 under the Income Tax Act &amp; CGST Rules.
          </p>

          {/* Hero Trust Badges Strip */}
          <div className="page-hero-meta-strip">
            <span className="page-hero-pill">
              <ShieldCheck size={14} color="#10b981" /> AY 2025-26 &amp; Finance Act 2025 Verified
            </span>
            <span className="page-hero-pill">
              <FileCheck size={14} color="#2563eb" /> 5 Copyable Dispute &amp; Invoicing Templates
            </span>
            <span className="page-hero-pill">
              <Calculator size={14} color="#2563eb" /> Section 44ADA Presumptive Engine
            </span>
            <span className="page-hero-pill">
              <Sparkles size={14} color="#f59e0b" /> 100% Free · No Sign-up Required
            </span>
          </div>
        </div>
      </section>

      <section className="container">
        <ToolsHubView />
      </section>
    </main>
  );
}
