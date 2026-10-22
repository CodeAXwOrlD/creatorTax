import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticle } from "@/lib/articles";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  UserCheck,
  AlertOctagon,
  ExternalLink,
  ChevronRight,
  Calculator,
  HelpCircle,
  FileCheck,
  Home,
  CheckCircle2,
  Scale,
  ListOrdered
} from "lucide-react";
import { CopyableDisputeTemplate } from "@/components/copyable-dispute-template";
import { ReadingProgressBar } from "@/components/reading-progress-bar";
import { GuideShareButton } from "@/components/guide-share-button";

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
    title: `${article.title} | CreatorTax India`,
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

  // Find previous and next articles for bottom navigation
  const currentIndex = articles.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

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
      {/* Scroll-Linked Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Editorial Page Hero */}
      <div className="guide-hero-banner">
        <div className="container">
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className="guide-breadcrumbs">
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <Home size={12} /> Home
            </Link>
            <ChevronRight size={11} style={{ opacity: 0.5 }} />
            <Link href="/guides">Guides</Link>
            <ChevronRight size={11} style={{ opacity: 0.5 }} />
            <span style={{ color: "var(--ink-2)", fontWeight: 600 }}>{article.category}</span>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
            <span className="tag">{article.category}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 999, background: "var(--emerald-light)", color: "var(--emerald-hover)", fontSize: 11, fontWeight: 700 }}>
              <CheckCircle2 size={12} color="#059669" /> AY 2025-26 &amp; Finance Act 2025 Verified
            </span>
          </div>

          <h1 className="serif" style={{ fontSize: "clamp(26px, 3.8vw, 38px)", lineHeight: 1.22, maxWidth: 880, margin: "10px 0 16px" }}>
            {article.title}
          </h1>

          <p style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 780, color: "var(--muted)", margin: 0 }}>
            {article.description}
          </p>

          {/* Meta & Share Actions Bar */}
          <div className="guide-hero-meta-bar">
            <span className="guide-hero-meta-pill">
              <CalendarDays size={14} color="var(--cobalt)" /> Updated {article.date}
            </span>
            <span className="guide-hero-meta-pill">
              <Clock3 size={14} color="var(--cobalt)" /> {article.readTime}
            </span>
            <span className="guide-hero-meta-pill">
              <UserCheck size={14} color="var(--cobalt)" /> {article.reviewer}
            </span>
            <GuideShareButton title={article.title} />
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container article-layout">
        <article className="article-content">
          {/* Quick Summary AEO Definition Block */}
          <div className="quick-summary quick-answer" data-aeo="direct-answer" style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, flexWrap: "wrap", gap: 6 }}>
              <strong style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--cobalt)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                <FileCheck size={14} /> Quick Summary (AEO Direct Answer)
              </strong>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 4, background: "var(--cobalt-light)", color: "var(--cobalt)", letterSpacing: "0.02em" }}>
                40-Word Direct Answer
              </span>
            </div>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.8, color: "var(--ink)", fontWeight: 450 }}>
              {article.quickAnswer}
            </p>
          </div>

          {/* Scope and Statutory Limits Badges */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              marginBottom: 36,
              padding: "18px 20px",
              background: "var(--paper-deep)",
              border: "1.5px solid var(--line)",
              borderRadius: 12
            }}
          >
            <div>
              <strong style={{ fontSize: 12, color: "var(--emerald-hover)", display: "flex", alignItems: "center", gap: 6, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
                <UserCheck size={14} /> Who This Applies To
              </strong>
              <p style={{ fontSize: 13.5, color: "var(--ink)", margin: 0, lineHeight: 1.65 }}>
                {article.whoItAppliesTo}
              </p>
            </div>
            {article.statutoryLimits && (
              <div>
                <strong style={{ fontSize: 12, color: "var(--cobalt)", display: "flex", alignItems: "center", gap: 6, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
                  <Scale size={14} /> Statutory Limits &amp; Rules
                </strong>
                <p style={{ fontSize: 13.5, color: "var(--ink)", margin: 0, lineHeight: 1.65 }}>
                  {article.statutoryLimits}
                </p>
              </div>
            )}
          </div>

          {/* Visual Step-by-Step HowTo Procedure Card (if HowTo schema exists) */}
          {article.howTo && (
            <div className="guide-howto-section">
              <div className="guide-howto-header">
                <div>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--green)", display: "block", marginBottom: 4 }}>
                    Step-by-Step Procedure
                  </span>
                  <h3 className="guide-howto-title">{article.howTo.name}</h3>
                </div>
                {article.howTo.totalTime && (
                  <span className="guide-howto-time-pill">
                    <Clock3 size={12} /> Approx {article.howTo.totalTime.replace("PT", "").toLowerCase()}
                  </span>
                )}
              </div>

              <div className="guide-howto-steps-list">
                {article.howTo.steps.map((s, idx) => (
                  <div key={idx} className="guide-howto-step-item">
                    <span className="guide-howto-step-num">{idx + 1}</span>
                    <div className="guide-howto-step-content">
                      <strong>{s.name}</strong>
                      <p>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Article Main Sections with Numbered Pills */}
          {article.sections.map((section, sectionIdx) => (
            <section key={section.heading} style={{ marginBottom: 44 }}>
              <h2
                id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                style={{ scrollMarginTop: 100, display: "flex", alignItems: "center" }}
              >
                <span className="section-num-pill">{String(sectionIdx + 1).padStart(2, "0")}</span>
                <span>{section.heading}</span>
              </h2>

              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {section.bullets && (
                <ul style={{ paddingLeft: 22, margin: "18px 0" }}>
                  {section.bullets.map((b) => (
                    <li key={b} style={{ marginBottom: 10 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div style={{ overflowX: "auto", margin: "24px 0" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: 13.5,
                      border: "1.5px solid var(--line)",
                      borderRadius: 8,
                      background: "#fff",
                      overflow: "hidden"
                    }}
                  >
                    <thead>
                      <tr style={{ background: "var(--paper-deep)", borderBottom: "1.5px solid var(--line)" }}>
                        {section.table.headers.map((h) => (
                          <th
                            key={h}
                            style={{
                              padding: "13px 16px",
                              textAlign: "left",
                              fontWeight: 700,
                              color: "var(--ink)",
                              letterSpacing: "0.02em"
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
                            background: rowIdx % 2 === 0 ? "#ffffff" : "#fbf9f4"
                          }}
                        >
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx} style={{ padding: "12px 16px" }}>
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
                margin: "44px 0",
                padding: "22px 24px",
                borderRadius: 10,
                background: "#fef6f5",
                border: "1.5px solid #fbd5d0",
                boxShadow: "0 4px 16px rgba(192, 57, 43, 0.05)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <AlertOctagon size={22} color="#c0392b" />
                <h3 style={{ margin: 0, color: "#922b21", fontSize: 19 }}>Statutory Pitfalls &amp; Common Audit Traps</h3>
              </div>
              <ul style={{ paddingLeft: 20, margin: 0, color: "#641e16" }}>
                {article.commonTraps.map((trap) => (
                  <li key={trap} style={{ marginBottom: 10, fontSize: 14.5, lineHeight: 1.65 }}>
                    {trap}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Frequently Asked Questions */}
          {article.faqs && article.faqs.length > 0 && (
            <section style={{ margin: "44px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <HelpCircle size={22} color="var(--green)" />
                <h2 id="faqs" style={{ margin: 0 }}>Frequently Asked Questions</h2>
              </div>
              <div style={{ display: "grid", gap: 16 }}>
                {article.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    style={{
                      padding: "18px 20px",
                      background: "var(--paper-card)",
                      border: "1.5px solid var(--line)",
                      borderRadius: 10,
                      boxShadow: "0 2px 8px rgba(18, 61, 52, 0.03)"
                    }}
                  >
                    <strong style={{ fontSize: 15.5, display: "block", color: "var(--ink)", marginBottom: 8 }}>
                      {faq.question}
                    </strong>
                    <p style={{ margin: 0, fontSize: 14, color: "var(--muted)", lineHeight: 1.75 }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Primary Sources & Citations */}
          {article.primarySources && article.primarySources.length > 0 && (
            <section style={{ marginTop: 50, paddingTop: 28, borderTop: "1.5px solid var(--line)" }}>
              <h3 style={{ fontSize: 15, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)", marginBottom: 14 }}>
                Authoritative Primary Sources &amp; Circulars
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
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
                      padding: "12px 16px",
                      background: "#fff",
                      border: "1px solid var(--line)",
                      borderRadius: 8,
                      fontSize: 13.5,
                      color: "var(--green)",
                      textDecoration: "none",
                      transition: "border-color 0.18s, box-shadow 0.18s"
                    }}
                  >
                    <span>
                      <strong style={{ color: "var(--ink)" }}>{source.title}</strong> — <span style={{ color: "var(--muted)" }}>{source.publisher}</span>
                    </span>
                    <ExternalLink size={14} style={{ flexShrink: 0, marginLeft: 10 }} />
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Next & Previous Guide Navigation */}
          {(prevArticle || nextArticle) && (
            <nav aria-label="Adjacent Guides" className="guide-nav-grid">
              {prevArticle ? (
                <Link href={`/guides/${prevArticle.slug}`} className="guide-nav-card">
                  <span className="nav-label">
                    <ArrowLeft size={12} /> Previous Guide
                  </span>
                  <span className="nav-title">{prevArticle.title}</span>
                </Link>
              ) : <div />}

              {nextArticle ? (
                <Link href={`/guides/${nextArticle.slug}`} className="guide-nav-card" style={{ textAlign: "right", alignItems: "flex-end" }}>
                  <span className="nav-label">
                    Next Guide <ArrowRight size={12} />
                  </span>
                  <span className="nav-title">{nextArticle.title}</span>
                </Link>
              ) : <div />}
            </nav>
          )}

          {/* Disclaimer & Policies Footer */}
          <div style={{ marginTop: 40, padding: "20px 22px", background: "var(--paper-deep)", borderRadius: 12, border: "1px solid var(--line)", fontSize: 13, color: "var(--muted)", lineHeight: 1.75 }}>
            <strong style={{ color: "var(--ink)" }}>Legal Notice:</strong> This article is published for educational and informational purposes only and does not constitute individualized tax, accounting, or legal advice. Tax provisions and portal workflows evolve; verify details with a qualified Indian Chartered Accountant before filing.
            <div style={{ marginTop: 12, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/disclaimer" style={{ color: "var(--cobalt)", fontWeight: 600 }}>Financial Disclaimer</Link>
              <Link href="/editorial-policy" style={{ color: "var(--cobalt)", fontWeight: 600 }}>Editorial Policy</Link>
              <Link href="/corrections" style={{ color: "var(--cobalt)", fontWeight: 600 }}>Report Correction</Link>
            </div>
          </div>
        </article>

        {/* Right Sidebar Table of Contents */}
        <aside className="article-aside">
          <strong style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--cobalt)", display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
            <ListOrdered size={14} /> Guide Outline
          </strong>

          {article.howTo && (
            <a
              href="#step-by-step-procedure"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "var(--cobalt)", fontWeight: 600 }}
            >
              <span>Step-by-Step Procedure</span>
              <FileCheck size={11} />
            </a>
          )}

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

          {/* Interactive Calculator Sidebar Card */}
          <div style={{
            marginTop: 28,
            padding: 22,
            background: "linear-gradient(150deg, #0f172a 0%, #0a0f1d 100%)",
            border: "1.5px solid rgba(37, 99, 235, 0.35)",
            color: "#ffffff",
            borderRadius: 14,
            boxShadow: "0 12px 32px rgba(10, 15, 29, 0.25)"
          }}>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: 8,
              background: "rgba(37, 99, 235, 0.25)",
              color: "#60a5fa",
              display: "grid",
              placeItems: "center",
              marginBottom: 12
            }}>
              <Calculator size={20} />
            </div>
            <strong style={{ display: "block", fontSize: 15, color: "#ffffff" }}>Section 44ADA Calculator</strong>
            <p style={{ fontSize: 12, color: "#94a3b8", margin: "6px 0 16px", lineHeight: 1.6 }}>
              Compute your net tax under New vs Old regimes with 50% presumptive profit and instant TDS offsets.
            </p>
            <Link
              href="/tools/44ada-calculator"
              className="btn"
              style={{
                width: "100%",
                background: "var(--cobalt)",
                color: "#ffffff",
                borderColor: "var(--cobalt)",
                minHeight: 38,
                fontSize: 12,
                fontWeight: 700,
                boxShadow: "0 4px 14px rgba(37, 99, 235, 0.35)"
              }}
            >
              Calculate Your Tax Free
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
