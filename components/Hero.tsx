'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Calculator } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 24,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.1,
      });

      gsap.from('.hero-visual', {
        y: 45,
        rotate: 3,
        autoAlpha: 0,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.to('.floating-stamp', {
        y: -8,
        rotate: 8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="hero" aria-labelledby="hero-heading">
      <div className="hero-noise" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-overline">
          <span className="tiny-star" aria-hidden="true">✳</span>
          <span>01 / INDEPENDENT TAX &amp; COMPLIANCE BLUEPRINT</span>
        </div>

        <h1 id="hero-heading">
          Make money.<br />
          <em>Keep it clear.</em>
        </h1>

        <p className="hero-lede">
          Statute-cited tax manuals, dual-regime calculators, and zero-rated GST export playbooks for India&apos;s
          independent software engineers, video editors, designers, and creative consultants. Turn dense provisions like
          Section 44ADA, domestic TDS reconciliation, and cross-border FIRA remittances into a repeatable, low-stress operational routine.
        </p>

        <div className="hero-actions">
          <Link className="button button-dark" href="#story">
            <span>Explore the Roadmap</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link className="quiet-link" href="#calculator">
            <Calculator size={15} />
            <span>Estimate your taxes</span>
            <ArrowDown size={14} />
          </Link>
        </div>

        <div className="hero-footnote">
          <span className="status-dot" aria-hidden="true" />
          <span>AY 2025-26 &amp; AY 2026-27 statutory rules · 100% Client-side privacy · Verified against primary CBDT &amp; CBIC statutes</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-glow" aria-hidden="true" />
        <Image
          className="hero-photo"
          src="/images/hero-workspace.jpg"
          alt="Clean sunlit oak desk in India with laptop invoice spreadsheet, notebook, warm filter coffee, and receipts in tray"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 640px) 94vw, (max-width: 1024px) 80vw, 42vw"
        />
        <div className="photo-label">
          <span>FIELD NOTES / 2026</span>
          <span>MADE FOR INDIA&apos;S INDEPENDENT MINDS</span>
        </div>
        <div className="floating-stamp" aria-hidden="true">
          <span>LESS</span>
          <span>GUESSWORK</span>
          <b>↗</b>
        </div>
      </div>

      <div className="hero-index">
        <span>01 — STATUTORY CLARITY OVER FINANCIAL THEATRE</span>
        <span>SCROLL DOWN ↓</span>
      </div>
    </section>
  );
}
