import type { Metadata } from "next";
import { CalculatorClient } from "@/components/calculator-client";

export const metadata: Metadata = {
  title: "Section 44ADA Calculator (AY 2025-26) — Presumptive Tax & New vs Old Regime",
  description: "Calculate Section 44ADA presumptive profit (50%), compare New vs Old tax regimes for AY 2025-26, check the ₹75 Lakh digital receipts threshold, and estimate TDS refunds.",
  alternates: { canonical: "/tools/44ada-calculator" },
  openGraph: {
    title: "Section 44ADA Calculator (AY 2025-26) | CreatorTax India",
    description: "Interactive tax calculator for Indian freelancers and consultants opting for presumptive taxation.",
    type: "website"
  }
};

export default function CalculatorPage() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://creatortax.in";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: `${site}/tools`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Section 44ADA Calculator",
        item: `${site}/tools/44ada-calculator`
      }
    ]
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Financial clarity, not guesswork</span>
          <h1 className="serif">
            Section 44ADA<br />presumptive tax calculator.
          </h1>
          <p>
            Explore how the 50% presumptive-profit assumption works under the updated AY 2025-26 New &amp; Old Tax Regimes. Compare slabs, check the ₹75 Lakh digital receipts ceiling under Section 44ADA(1B), and calculate your estimated TDS refund or balance tax due.
          </p>
        </div>
      </section>

      <CalculatorClient />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
