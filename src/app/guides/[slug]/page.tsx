import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticle } from "@/lib/articles";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  UserCheck,
  AlertOctagon,
  ExternalLink,
  ChevronRight,
  Calculator,
  HelpCircle,
  Sparkles
} from "lucide-react";
import { CopyableDisputeTemplate } from "@/components/copyable-dispute-template";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Guide Not Found" };

  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://creatortax.in";
  const url = `${site}/guides/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/guides/${article.slug}` },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: [article.author]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description
    }
  };
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://creatortax.in";
  const articleUrl = `${site}/guides/${article.slug}`;

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Organization",
      name: article.author,
      url: site
    },
    publisher: {
      "@type": "Organization",
      name: "CreatorTax India",
      url: site
    }
  };

  // FAQPage JSON-LD Schema for rich snippet eligibility
  const faqSchema = article.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;

  // BreadcrumbList JSON-LD Schema
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
        name: "Guides",
        item: `${site}/guides`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl
      }
    ]
  };

  // HowTo JSON-LD Schema for Google Rich Snippets (e.g. LUT renewal, e-FIRA download)
  const howToSchema = article.howTo ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: article.howTo.name,
    description: article.howTo.description,
    totalTime: article.howTo.totalTime || "PT10M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "0"
    },
    step: article.howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url ? `${site}${step.url}` : `${articleUrl}#step-${index + 1}`
    }))
  } : null;

  return (
    <main>
      {/* Page Header */}
      <div className="page-hero">
        <div className="container">
          <Link
            href="/guides"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              color: "var(--muted)",
              marginBottom: 16
            }}
          >
            <ArrowLeft size={14} /> Back to all guides
          </Link>

          <div>
            <span className="tag">{article.category}</span>
          </div>

          <h1 className="serif" style={{ maxWidth: 880, margin: "14px 0" }}>
            {article.title}
          </h1>

          <p style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 760 }}>
            {article.description}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              fontSize: 12,
              color: "var(--muted)",
              marginTop: 20,
              paddingTop: 16,
              borderTop: "1px solid var(--line)"
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <CalendarDays size={14} color="var(--green)" /> Updated {article.date}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Clock3 size={14} color="var(--green)" /> {article.readTime}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <UserCheck size={14} color="var(--green)" /> Review: {article.reviewer}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container article-layout">
        <article className="article-content">
          {/* Quick Summary AEO Definition Block */}
          <div className="quick-summary quick-answer" data-aeo="direct-answer" style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8, flexWrap: "wrap", gap: 6 }}>
              <strong style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--green)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                <Sparkles size={14} /> Quick Summary (AEO Definition)
              </strong>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 4, background: "#e8f2ec", color: "var(--green)", letterSpacing: "0.02em" }}>
                40-Word Direct Answer
              </span>
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: "var(--ink)" }}>
              {article.quickAnswer}
            </p>
          </div>

          {/* Scope and Limits Badges */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 34,
              padding: "16px 18px",
              background: "#faf6ee",
              border: "1px solid var(--line)",
              borderRadius: 8
            }}
          >
            <div>
              <strong style={{ fontSize: 12, color: "var(--green)", display: "block", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Who This Applies To
              </strong>
              <p style={{ fontSize: 13, color: "var(--ink)", margin: "4px 0 0", lineHeight: 1.6 }}>
                {article.whoItAppliesTo}
              </p>
            </div>
            {article.statutoryLimits && (
              <div>
                <strong style={{ fontSize: 12, color: "var(--terracotta)", display: "block", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Statutory Limits &amp; Rules
                </strong>
                <p style={{ fontSize: 13, color: "var(--ink)", margin: "4px 0 0", lineHeight: 1.6 }}>
                  {article.statutoryLimits}
                </p>
              </div>
            )}
          </div>

          {/* Article Main Sections */}
          {article.sections.map((section) => (
            <section key={section.heading} style={{ marginBottom: 40 }}>
              <h2
                id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                style={{ scrollMarginTop: 100 }}
              >
                {section.heading}
              </h2>

              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {section.bullets && (
                <ul style={{ paddingLeft: 22, margin: "16px 0" }}>
                  {section.bullets.map((b) => (
                    <li key={b} style={{ marginBottom: 8 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div style={{ overflowX: "auto", margin: "22px 0" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: 13,
                      border: "1px solid var(--line)",
                      borderRadius: 6,
                      background: "#fff"
                    }}
                  >
                    <thead>
                      <tr style={{ background: "var(--paper-deep)", borderBottom: "1px solid var(--line)" }}>
                        {section.table.headers.map((h) => (
                          <th
                            key={h}
                            style={{
                              padding: "12px 14px",
                              textAlign: "left",
                              fontWeight: 650,
                              color: "var(--ink)"
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rowIdx) => (
                        <tr
                          key={rowIdx}
                          style={{
                            borderBottom: "1px solid var(--line)",
                            background: rowIdx % 2 === 0 ? "transparent" : "#faf8f2"
                          }}
                        >
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx} style={{ padding: "11px 14px" }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {article.showDisputeTemplate && section.heading.toLowerCase().includes("section 194j") && (
                <CopyableDisputeTemplate />
              )}
            </section>
          ))}

          {/* Common Traps Alert */}
          {article.commonTraps && article.commonTraps.length > 0 && (
            <section
              style={{
                margin: "40px 0",
                padding: "20px 22px",
                borderRadius: 8,
                background: "#fef6f5",
                border: "1px solid #fbd5d0"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <AlertOctagon size={20} color="#c0392b" />
                <h3 style={{ margin: 0, color: "#922b21", fontSize: 18 }}>Common Traps to Avoid</h3>
              </div>
              <ul style={{ paddingLeft: 20, margin: 0, color: "#641e16" }}>
                {article.commonTraps.map((trap) => (
                  <li key={trap} style={{ marginBottom: 8, fontSize: 14 }}>
                    {trap}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Frequently Asked Questions */}
          {article.faqs && article.faqs.length > 0 && (
            <section style={{ margin: "40px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <HelpCircle size={22} color="var(--green)" />
                <h2 id="faqs" style={{ margin: 0 }}>Frequently Asked Questions</h2>
              </div>
              <div style={{ display: "grid", gap: 16 }}>
                {article.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    style={{
                      padding: "16px 18px",
                      background: "var(--surface)",
                      border: "1px solid var(--line)",
                      borderRadius: 8
                    }}
                  >
                    <strong style={{ fontSize: 15, display: "block", color: "var(--ink)", marginBottom: 6 }}>
                      {faq.question}
                    </strong>
                    <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted)", lineHeight: 1.7 }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Primary Sources & Citations */}
          {article.primarySources && article.primarySources.length > 0 && (
            <section style={{ marginTop: 45, paddingTop: 25, borderTop: "1px solid var(--line)" }}>
              <h3 style={{ fontSize: 16, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)" }}>
                Authoritative Primary Sources
              </h3>
              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                {article.primarySources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 14px",
                      background: "#fff",
                      border: "1px solid var(--line)",
                      borderRadius: 6,
                      fontSize: 13,
                      color: "var(--green)"
                    }}
                  >
                    <span>
                      <strong>{source.title}</strong> — <span style={{ color: "var(--muted)" }}>{source.publisher}</span>
                    </span>
                    <ExternalLink size={14} style={{ flexShrink: 0, marginLeft: 8 }} />
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Disclaimer & Policies Footer */}
          <div style={{ marginTop: 35, padding: "16px 18px", background: "var(--paper-deep)", borderRadius: 6, fontSize: 12, color: "var(--muted)", lineHeight: 1.7 }}>
            <strong>Legal Notice:</strong> This article is published for educational and informational purposes only and does not constitute individualized tax, accounting, or legal advice. Tax provisions and portal workflows evolve; verify details with a qualified Indian Chartered Accountant before filing.
            <div style={{ marginTop: 8 }}>
              <Link href="/disclaimer" style={{ color: "var(--green)", fontWeight: 600 }}>Financial Disclaimer</Link> · <Link href="/editorial-policy" style={{ color: "var(--green)", fontWeight: 600 }}>Editorial Policy</Link> · <Link href="/corrections" style={{ color: "var(--green)", fontWeight: 600 }}>Report Correction</Link>
            </div>
          </div>
        </article>

        {/* Right Sidebar Table of Contents */}
        <aside className="article-aside">
          <strong style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--green)", display: "block", marginBottom: 12 }}>
            Guide Outline
          </strong>

          {article.sections.map((s) => (
            <a
              key={s.heading}
              href={`#${s.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <span>{s.heading}</span>
              <ChevronRight size={12} style={{ opacity: 0.6 }} />
            </a>
          ))}

          {article.faqs.length > 0 && (
            <a href="#faqs" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span>Frequently Asked Questions</span>
              <ChevronRight size={12} style={{ opacity: 0.6 }} />
            </a>
          )}

          <div style={{ marginTop: 28, padding: 18, background: "var(--green)", color: "#fff", borderRadius: 8 }}>
            <Calculator size={22} style={{ marginBottom: 8 }} />
            <strong style={{ display: "block", fontSize: 14 }}>Try Section 44ADA Calculator</strong>
            <p style={{ fontSize: 11, color: "#d1ded6", margin: "6px 0 14px", lineHeight: 1.5 }}>
              Test your gross receipts under New and Old regimes with instant TDS credit offsetting.
            </p>
            <Link
              href="/tools/44ada-calculator"
              className="btn"
              style={{
                width: "100%",
                background: "#f6f2e9",
                color: "var(--green)",
                borderColor: "#f6f2e9",
                minHeight: 38,
                fontSize: 12
              }}
            >
              Launch Calculator
            </Link>
          </div>
        </aside>
      </div>

      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c") }}
        />
      )}
    </main>
  );
}
