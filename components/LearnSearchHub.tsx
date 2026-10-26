'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  RotateCcw,
  Search,
} from 'lucide-react';
import { Article } from '@/lib/articles';

export default function LearnSearchHub({ initialArticles }: { initialArticles: Article[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All topics');

  const categories = [
    'All topics',
    'GST & Invoicing',
    'USD & Remittances',
    'Income Tax',
    'Expenses & Deductions',
    'Business Basics',
  ];

  const learningPaths = [
    {
      title: 'Path 01: The First-Time Freelancer Blueprint',
      tag: 'BEGINNER ROADMAP',
      desc: 'Set up your operational foundation: master client contracts, establish payment terms, and understand Section 44ADA.',
      guides: ['creator-contract', 'section-44ada-freelancers', 'tds-refund'],
    },
    {
      title: 'Path 02: Global Invoicing & Zero-Rated Exports',
      tag: 'CROSS-BORDER WORK',
      desc: 'Everything you need to legally bill international clients in USD, EUR, and GBP without paying 18% IGST.',
      guides: ['gst-lut-renewal', 'paypal-firc', 'creator-contract'],
    },
    {
      title: 'Path 03: Tax Season & Refund Recovery',
      tag: 'ITR MASTERCLASS',
      desc: 'Reconcile Form 26AS and AIS, allocate dual-use business expenses, and file between ITR-3 and ITR-4 cleanly.',
      guides: ['tds-refund', 'home-office-expenses', 'itr-filing-creators'],
    },
  ];

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((art) => {
      const matchesCategory =
        selectedCategory === 'All topics' ||
        art.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        art.title.toLowerCase().includes(query) ||
        art.excerpt.toLowerCase().includes(query) ||
        art.tag.toLowerCase().includes(query) ||
        art.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [initialArticles, searchQuery, selectedCategory]);

  return (
    <div className="learn-hub-inner">
      {/* Search and Category Filter Toolbar */}
      <div className="learn-toolbar-card">
        <div className="learn-search-bar">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search tax topics, e.g. 'LUT', '44ADA', 'FIRA', 'MacBook depreciation'..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => setSearchQuery('')}
            >
              Clear
            </button>
          )}
        </div>

        <div className="learn-categories-row" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`cat-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Structured Learning Paths */}
      <section className="learning-paths-section">
        <div className="paths-header">
          <div className="section-kicker">CURATED LEARNING PATHS</div>
          <h2>Step-by-step roadmaps for every stage</h2>
        </div>

        <div className="paths-grid">
          {learningPaths.map((path, idx) => (
            <div key={idx} className="path-card">
              <span className="path-badge">{path.tag}</span>
              <h3>{path.title}</h3>
              <p>{path.desc}</p>
              <div className="path-guides-list">
                {path.guides.map((gId) => {
                  const g = initialArticles.find((a) => a.id === gId);
                  if (!g) return null;
                  return (
                    <Link key={g.id} href={`/guides/${g.id}`} className="path-guide-item">
                      <CheckCircle2 size={14} className="path-check-icon" />
                      <span>{g.title}</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guide Results Section */}
      <section className="learn-results-section">
        <div className="results-header">
          <div>
            <span className="section-kicker">KNOWLEDGE SHELF</span>
            <h2>
              Field Guides{' '}
              <span className="results-count">({filteredArticles.length})</span>
            </h2>
          </div>
          {searchQuery && (
            <span className="search-notice">
              Showing matches for &quot;<strong>{searchQuery}</strong>&quot;
            </span>
          )}
        </div>

        {filteredArticles.length === 0 ? (
          <div className="learn-empty-state">
            <BookOpen size={48} className="empty-icon" />
            <h3>No matching field guides found</h3>
            <p>
              We couldn&apos;t find any guides matching &quot;{searchQuery}&quot; under the &quot;{selectedCategory}&quot; category.
            </p>
            <button
              type="button"
              className="button button-dark reset-filter-btn"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All topics');
              }}
            >
              <RotateCcw size={15} /> Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="article-grid">
            {filteredArticles.map((a, i) => (
              <div key={a.id} className="article-wrap">
                <Link href={`/guides/${a.id}`} className="article-card">
                  <div className={`article-art art-${i % 4}`}>
                    <span className="article-tag">{a.tag}</span>
                    <div className="art-graphic document-art">
                      <FileText size={50} strokeWidth={0.8} />
                      <span>{a.assessmentYear}</span>
                    </div>
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
                      <GraduationCap size={13} /> Verified by CA
                    </span>
                    <span className="round-arrow">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
