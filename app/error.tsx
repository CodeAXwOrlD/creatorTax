'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCcw } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error securely
    console.error('[CreatorTax Application Error]', error);
  }, [error]);

  return (
    <main className="info-page error-page">
      <Link href="/" className="back-link">
        <ArrowLeft size={16} /> Back to CreatorTax India
      </Link>

      <div className="section-kicker">SYSTEM NOTICE · TEMPORARY DISRUPTION</div>
      <h1 className="info-page-title">
        Something didn’t render<br />
        <em>as expected.</em>
      </h1>
      <p className="info-page-deck">
        We encountered an unexpected display issue while processing this view. You can reload the component
        or return to the home sanctuary.
      </p>

      <div className="error-actions-row">
        <button type="button" className="button button-dark" onClick={() => reset()}>
          <RotateCcw size={16} /> Retry View
        </button>
        <Link href="/" className="button button-secondary">
          Return Home
        </Link>
      </div>
    </main>
  );
}
