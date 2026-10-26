import type { Metadata } from 'next';
import { articles } from '@/lib/articles';
import LearnSearchHub from '@/components/LearnSearchHub';

export const metadata: Metadata = {
  title: 'Tax & Compliance Knowledge Shelf | CreatorTax India',
  description:
    'Searchable library of plain-English Indian tax, GST, cross-border remittance, and contract manuals for independent digital workers.',
  alternates: {
    canonical: 'https://creatortax.in/learn',
  },
};

export default function LearnPage() {
  return (
    <main className="learn-page-layout">
      <div className="learn-page-container">
        <header className="learn-header">
          <div className="learn-header-badge">
            <span className="section-kicker">EDUCATIONAL RESOURCE CENTER</span>
          </div>
          <h1>
            The Independent Tax &amp;<br />
            <em>Financial Knowledge Shelf</em>
          </h1>
          <p className="learn-deck">
            Exhaustive, peer-reviewed statutory manuals for India&apos;s creators, engineers, editors, and
            consultants. Search topics directly or follow step-by-step curated roadmaps.
          </p>
        </header>

        {/* Interactive Search & Filter Component */}
        <LearnSearchHub initialArticles={articles} />
      </div>
    </main>
  );
}
