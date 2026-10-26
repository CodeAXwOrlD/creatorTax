import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowUpRight,
  BookmarkCheck,
  Calendar,
  CheckCircle2,
  ChevronRight,
  FileText,
  Info,
  Scale,
  ShieldAlert,
  UserCheck,
} from 'lucide-react';
import { articles } from '@/lib/articles';

export function generateStaticParams() {
  return articles.map((a) => ({ id: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const a = articles.find((x) => x.id === id);
  if (!a) return { title: 'Guide Not Found' };

  return {
    title: `${a.title} | CreatorTax India`,
    description: a.excerpt,
    keywords: [
      a.tag,
      a.category,
      'Indian freelancer tax',
      'Creator tax India',
      'Section 44ADA',
      'GST LUT',
      'FIRC FIRA',
    ],
    openGraph: {
      title: a.title,
      description: a.excerpt,
      type: 'article',
      publishedTime: '2026-04-01T00:00:00.000Z',
      authors: [a.author.name],
      tags: [a.tag, a.category],
    },
    alternates: {
      canonical: `https://creatortax.in/guides/${a.id}`,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const a = articles.find((x) => x.id === id);
  if (!a) notFound();

  const related = articles.filter((x) => x.id !== a.id).slice(0, 3);

  // Article Structured Data for Google Rich Snippets
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: a.title,
    description: a.excerpt,
    author: {
      '@type': 'Person',
      name: a.author.name,
      jobTitle: a.author.title,
    },
    reviewedBy: {
      '@type': 'Person',
      name: a.reviewer.name,
      jobTitle: a.reviewer.title,
    },
    publisher: {
      '@type': 'Organization',
      name: 'CreatorTax India',
      url: 'https://creatortax.in',
    },
    dateModified: '2026-04-01',
    mainEntityOfPage: `https://creatortax.in/guides/${a.id}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://creatortax.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: 'https://creatortax.in/#guides',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: a.title,
        item: `https://creatortax.in/guides/${a.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="article-page">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="guide-breadcrumbs">
          <Link href="/" className="crumb-link">
            Home
          </Link>
          <ChevronRight size={13} />
          <Link href="/#guides" className="crumb-link">
            Field Guides
          </Link>
          <ChevronRight size={13} />
          <span className="crumb-active">{a.category}</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div className="article-kicker-row">
            <span className="article-badge">{a.tag}</span>
            <span className="article-ay-badge">{a.assessmentYear}</span>
            <span className="article-read-time">{a.readTime}</span>
          </div>

          <h1 className="article-title">{a.title}</h1>
          <p className="article-deck">{a.subtitle}</p>

          <div className="article-meta-card">
            <div className="author-col">
              <div className="author-icon">
                <UserCheck size={18} />
              </div>
              <div>
                <strong>{a.author.name}</strong>
                <span>{a.author.title}</span>
                <small>{a.author.credentials}</small>
              </div>
            </div>

            <div className="meta-divider" />

            <div className="reviewer-col">
              <div className="reviewer-icon">
                <Scale size={18} />
              </div>
              <div>
                <strong>Reviewed by {a.reviewer.name}</strong>
                <span>{a.reviewer.title}</span>
                <small>{a.reviewer.credentials}</small>
              </div>
            </div>

            <div className="meta-divider" />

            <div className="date-col">
              <div className="date-icon">
                <Calendar size={18} />
              </div>
              <div>
                <strong>Published & Verified</strong>
                <span>{a.updatedDate}</span>
                <small>Checked against current CBIC / CBDT rules</small>
              </div>
            </div>
          </div>
        </header>

        {/* Executive Summary / Key Takeaways Box */}
        <div className="executive-takeaways">
          <div className="takeaways-header">
            <BookmarkCheck size={18} />
            <span>EXECUTIVE SUMMARY & KEY TAKEAWAYS</span>
          </div>
          <p className="takeaways-lede">{a.heroSummary}</p>
          <ul className="takeaways-list">
            {a.keyTakeaways.map((item, idx) => (
              <li key={idx}>
                <CheckCircle2 size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Article Content & Sidebar */}
        <div className="article-content-layout">
          {/* Sticky Table of Contents Sidebar */}
          <aside className="article-toc-sidebar">
            <div className="toc-sticky-box">
              <span className="toc-heading">IN THIS GUIDE</span>
              <nav className="toc-list" aria-label="Table of contents">
                {a.sections.map((sec) => (
                  <a key={sec.id} href={`#${sec.id}`} className="toc-item">
                    {sec.heading}
                  </a>
                ))}
                {a.faqs.length > 0 && (
                  <a href="#frequently-asked-questions" className="toc-item">
                    Frequently Asked Questions
                  </a>
                )}
                {a.statutoryCitations.length > 0 && (
                  <a href="#statutory-citations" className="toc-item">
                    Statutory Citations & Sources
                  </a>
                )}
              </nav>

              <div className="toc-cta-card">
                <span>ESTIMATE YOUR TAX</span>
                <p>Curious how your numbers look under Section 44ADA?</p>
                <Link href="/#calculator" className="toc-cta-button">
                  Launch Freelancer Desk <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </aside>

          {/* Body Sections */}
          <article className="article-main-body">
            {a.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="article-section-block">
                <h2 className="section-title">{sec.heading}</h2>

                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="article-paragraph">
                    {p}
                  </p>
                ))}

                {/* Callout Box if present */}
                {sec.callout && (
                  <div className={`article-callout callout-${sec.callout.type}`}>
                    <div className="callout-header">
                      {sec.callout.type === 'statute' ? (
                        <Scale size={18} />
                      ) : sec.callout.type === 'warning' ? (
                        <ShieldAlert size={18} />
                      ) : (
                        <Info size={18} />
                      )}
                      <strong>{sec.callout.title}</strong>
                    </div>
                    <p>{sec.callout.body}</p>
                  </div>
                )}

                {/* Table if present */}
                {sec.table && (
                  <div className="article-table-wrapper">
                    {sec.table.caption && (
                      <div className="table-caption">{sec.table.caption}</div>
                    )}
                    <table className="article-data-table">
                      <thead>
                        <tr>
                          {sec.table.headers.map((h, hIdx) => (
                            <th key={hIdx}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Step cards if present */}
                {sec.steps && (
                  <div className="article-steps-grid">
                    {sec.steps.map((st) => (
                      <div key={st.number} className="step-card">
                        <div className="step-number">{st.number}</div>
                        <div className="step-content">
                          <h3>{st.title}</h3>
                          <p>{st.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet points if present */}
                {sec.bulletPoints && (
                  <ul className="article-bullets">
                    {sec.bulletPoints.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* In-Article FAQs */}
            {a.faqs.length > 0 && (
              <section id="frequently-asked-questions" className="article-section-block faq-block">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="guide-faq-list">
                  {a.faqs.map((faq, fIdx) => (
                    <details key={fIdx} className="guide-faq-item">
                      <summary className="guide-faq-question">
                        <span>{faq.question}</span>
                        <ChevronRight size={16} className="faq-chevron" />
                      </summary>
                      <div className="guide-faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Statutory Citations */}
            {a.statutoryCitations.length > 0 && (
              <section id="statutory-citations" className="article-section-block citations-block">
                <div className="citations-header">
                  <FileText size={18} />
                  <h3>Official Sources & Statutory References</h3>
                </div>
                <p className="citations-note">
                  CreatorTax India grounds every recommendation in primary statutory texts and official CBDT / CBIC / RBI notifications:
                </p>
                <div className="citations-list">
                  {a.statutoryCitations.map((cit, cIdx) => (
                    <div key={cIdx} className="citation-row">
                      <span className="cit-source">{cit.source}</span>
                      <strong className="cit-ref">{cit.reference}</strong>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Statutory Legal Disclaimer */}
            <div className="guide-disclaimer-box">
              <ShieldAlert size={20} />
              <div>
                <strong>Statutory Notice & Educational Purpose</strong>
                <p>
                  This guide is published solely for educational, informational, and general record-keeping guidance under Indian law. It does not constitute formal tax, accounting, or legal advice. Individual facts, contract clauses, and tax classifications vary; always seek personal counsel from a qualified Chartered Accountant before filing returns or making tax positions.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Related Guides Footer */}
        <section className="related-guides-section">
          <div className="related-header">
            <div>
              <span className="section-kicker">CONTINUE EXPLORING</span>
              <h2>Related Field Guides for Independent Creators</h2>
            </div>
            <Link href="/#guides" className="browse-all-link">
              View all guides <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="related-cards-grid">
            {related.map((rel) => (
              <Link key={rel.id} href={`/guides/${rel.id}`} className="related-guide-card">
                <div className="rel-card-meta">
                  <span>{rel.category}</span>
                  <span>{rel.readTime}</span>
                </div>
                <h3>{rel.title}</h3>
                <p>{rel.excerpt}</p>
                <div className="rel-card-bottom">
                  <span>Read field guide</span>
                  <ArrowUpRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
