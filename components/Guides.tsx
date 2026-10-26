'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, BookmarkCheck, FileText, Globe2, Sparkles } from 'lucide-react';
import { articles } from '@/lib/articles';
import Reveal from './Reveal';

export default function Guides() {
  const [filter, setFilter] = useState('All topics');

  const categories = [
    'All topics',
    'GST & Invoicing',
    'USD & Remittances',
    'Income Tax',
    'Expenses & Deductions',
    'Business Basics',
  ];

  const filtered = useMemo(() => {
    if (filter === 'All topics') return articles;
    return articles.filter((a) => a.category.toLowerCase() === filter.toLowerCase());
  }, [filter]);

  return (
    <section id="guides" className="guides-section" aria-label="CreatorTax Knowledge Shelf">
      <div className="section-heading">
        <div>
          <div className="section-kicker">04 / THE KNOWLEDGE SHELF · FIELD GUIDES</div>
          <h2>
            Small-business details.<br />
            <em>Big-picture clarity.</em>
          </h2>
        </div>
        <p>
          Substantial, statute-cited operational playbooks and tax manuals designed specifically for India&apos;s
          independent software engineers, video editors, designers, and creative consultants. Each guide translates dense
          statutory provisions into clear step-by-step checklists, real numerical examples, and audit-ready filing workflows.
        </p>
      </div>

      <div className="guide-toolbar">
        <div className="shelf-counter">
          <span>THE FIELD GUIDES</span>
          <b>({String(filtered.length).padStart(2, '0')})</b>
        </div>
        <div className="filter-list" role="tablist" aria-label="Topic filters">
          {categories.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="article-grid">
        {filtered.map((a, i) => (
          <Reveal key={a.id} delay={i * 0.08} className="article-wrap">
            <Link href={`/guides/${a.id}`} className="article-card" aria-label={`Read manual: ${a.title}`}>
              <div className={`article-art art-${i % 4}`}>
                <span className="article-tag">{a.tag}</span>

                {i === 0 ? (
                  <div className="art-graphic tax-sheet">
                    <span>GST RFD-11</span>
                    <b>0%</b>
                    <i>↗</i>
                  </div>
                ) : i === 1 ? (
                  <div className="art-graphic globe-art">
                    <Globe2 size={70} strokeWidth={0.8} />
                    <span>FIRC · FIRA</span>
                  </div>
                ) : i === 2 ? (
                  <div className="art-graphic document-art">
                    <FileText size={60} strokeWidth={0.9} />
                    <span>SEC 44ADA</span>
                  </div>
                ) : i === 3 ? (
                  <div className="art-graphic tax-sheet">
                    <span>26AS / AIS</span>
                    <b>₹</b>
                    <i>↺</i>
                  </div>
                ) : i === 4 ? (
                  <div className="art-graphic rings-art">
                    <span>ASSET</span>
                    <b>40%</b>
                  </div>
                ) : (
                  <div className="art-graphic document-art">
                    <Sparkles size={45} strokeWidth={0.9} />
                    <span>SOW · MSA</span>
                  </div>
                )}

                <span className="art-index">0{i + 1}</span>
              </div>

              <div className="article-meta">
                <span>{a.category}</span>
                <span>{a.readTime}</span>
              </div>

              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>

              <div className="article-card-footer">
                <span className="author-micro-tag">
                  <BookmarkCheck size={13} /> Statute Verified · AY 2025-26
                </span>
                <span className="round-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="guides-bottom">
        <span>Curated for continuous operational clarity, not last-minute July panic.</span>
        <Link href="#calculator">
          <span>Start with your numbers</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
