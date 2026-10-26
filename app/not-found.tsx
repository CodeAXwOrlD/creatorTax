import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Calculator, FileText, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="info-page not-found-page">
      <Link href="/" className="back-link">
        <ArrowLeft size={16} /> Back to CreatorTax India
      </Link>

      <div className="section-kicker">404 ERROR · PAGE NOT FOUND</div>
      <h1 className="info-page-title">
        This page took<br />
        <em>a different route.</em>
      </h1>
      <p className="info-page-deck">
        The link you followed may be outdated, moved, or the URL might have a typo.
        Explore these popular destinations to find what you need:
      </p>

      <div className="not-found-grid">
        <Link href="/" className="nf-card">
          <Home size={20} />
          <div>
            <strong>CreatorTax Homepage</strong>
            <span>Return to the main cinematic editorial feature</span>
          </div>
          <ArrowUpRight size={16} />
        </Link>

        <Link href="/tools" className="nf-card">
          <Calculator size={20} />
          <div>
            <strong>Tools &amp; Calculators</strong>
            <span>Section 44ADA estimator, GST LUT, and expense planners</span>
          </div>
          <ArrowUpRight size={16} />
        </Link>

        <Link href="/learn" className="nf-card">
          <FileText size={20} />
          <div>
            <strong>Knowledge Shelf</strong>
            <span>Searchable tax guides and compliance manuals</span>
          </div>
          <ArrowUpRight size={16} />
        </Link>

        <Link href="/contact" className="nf-card">
          <Search size={20} />
          <div>
            <strong>Contact Editorial Desk</strong>
            <span>Let us know if you were looking for a specific topic</span>
          </div>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  );
}