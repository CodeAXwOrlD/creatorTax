'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  {
    n: '01',
    eyebrow: 'THE INDEPENDENT CREATIVE ECONOMY',
    title: 'Your work is creative.',
    line: 'The admin can be clear.',
    copy: 'You turn raw thoughts into edits, products, software, stories, and services. Your money administration should protect and empower that craft — not become an exhausting second full-time job. With presumptive taxation and zero-rated invoicing, the administrative path becomes transparent.',
    img: '/images/reference-sunrays.png',
    alt: 'Golden shafts of morning sunlight filtering through an organic canopy of trees',
    tag: 'CLEAR SPACE FOR THE WORK',
    stat: '50% PRESUMPTIVE RELIEF',
  },
  {
    n: '02',
    eyebrow: 'MONEY CROSSES GLOBAL BORDERS',
    title: 'A global payment arrives.',
    line: 'The paper trail protects you.',
    copy: 'Foreign client invoices, platform remittance statements (PayPal, Stripe, Wise), bank credits, and FIRAs tell one unified story under FEMA and GST. When each document connects seamlessly, tax scrutiny transforms from a nightmare into a routine 5-minute formality.',
    img: '/images/reference-golden-water.png',
    alt: 'Sunlight glittering gold across the rippling surface of water',
    tag: 'FOLLOW THE REMITTANCE TRAIL',
    stat: '0% IGST WITH VALID LUT',
  },
  {
    n: '03',
    eyebrow: 'SMALL SYSTEMS, MASSIVE RELIEF',
    title: 'One systematic next step.',
    line: 'Then another.',
    copy: 'Understand the primary rules, maintain an ironclad Statement of Work, reconcile Form 26AS quarterly, and collaborate with a qualified CA who understands the digital economy. Long-term peace of mind isn’t built on risky shortcuts — it grows from a repeatable operational system.',
    img: '/images/reference-sunflower-light.png',
    alt: 'A delicate flower illuminated in warm, translucent late-afternoon backlight',
    tag: 'CLARITY OVER JARGON',
    stat: '100% PEACE OF MIND',
  },
];

const horizontalSteps = [
  {
    n: '01',
    title: 'Earn',
    stepName: 'The Client Contract',
    copy: 'Draft a written Statement of Work (SOW). Secure a 50% upfront deposit, cap revisions at two rounds, and specify Net-15 payment terms before moving a single pixel.',
    word: 'THE CRAFT',
    tone: 'h-panel-sage',
    iconSymbol: '↗',
    highlight: '50% UPFRONT DEPOSIT',
  },
  {
    n: '02',
    title: 'Invoice',
    stepName: 'Zero-Rated Compliance',
    copy: 'For international clients, cite your active GST LUT ARN to legally waive 18% IGST. For domestic clients, ensure their TAN is verified for quarterly TDS deposit.',
    word: 'THE INVOICE',
    tone: 'h-panel-cream',
    iconSymbol: '§',
    highlight: 'FORM GST RFD-11',
  },
  {
    n: '03',
    title: 'Record',
    stepName: 'The Bank Paper Trail',
    copy: 'Download monthly FIRA advice with proper RBI Purpose Codes (P0802 / P0807). Match bank credits against gross invoices to safeguard foreign export proof.',
    word: 'THE VAULT',
    tone: 'h-panel-amber',
    iconSymbol: '≋',
    highlight: 'FIRA / e-BRC ARCHIVE',
  },
  {
    n: '04',
    title: 'Reconcile',
    stepName: 'Refund & File',
    copy: 'Reconcile AIS and Form 26AS. Claim Section 44ADA 50% presumptive profit, calculate advance tax, and trigger direct electronic refund into your pre-validated account.',
    word: 'THE REFUND',
    tone: 'h-panel-sage',
    iconSymbol: '✳',
    highlight: 'DIRECT NACH REFUND',
  },
];

export default function ScrollStory() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = section.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 900px)',
        isMobile: '(max-width: 899px)',
      },
      (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean; isMobile: boolean };

        // Story Intro title masked reveal
        gsap.fromTo(
          '.story-intro-title',
          { clipPath: 'inset(0 0 100% 0)', y: 35 },
          {
            clipPath: 'inset(0 0 0% 0)',
            y: 0,
            ease: 'power3.out',
            duration: 1.1,
            scrollTrigger: {
              trigger: '.story-intro',
              start: 'top 75%',
              once: true,
            },
          }
        );

        // Story chapters image scrub
        gsap.utils.toArray<HTMLElement>('.story-chapter').forEach((chapter) => {
          const image = chapter.querySelector('.chapter-image-inner');
          const copy = chapter.querySelector('.chapter-copy');

          if (image) {
            gsap.fromTo(
              image,
              { scale: 1.15, yPercent: 4 },
              {
                scale: 1,
                yPercent: -4,
                ease: 'none',
                scrollTrigger: {
                  trigger: chapter,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.2,
                },
              }
            );
          }

          if (copy) {
            gsap.fromTo(
              copy,
              { y: 35, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: chapter,
                  start: 'top 70%',
                  end: 'top 35%',
                  scrub: 0.8,
                },
              }
            );
          }
        });

        // Desktop pinned horizontal storytelling
        if (isDesktop) {
          const track = document.querySelector('.horizontal-track') as HTMLElement;
          if (track) {
            const scrollDistance = track.scrollWidth - window.innerWidth;
            gsap.to(track, {
              x: -scrollDistance,
              ease: 'none',
              scrollTrigger: {
                trigger: '.horizontal-story',
                pin: true,
                scrub: 1,
                start: 'top top',
                end: () => `+=${scrollDistance}`,
                invalidateOnRefresh: true,
              },
            });
          }
        }
      },
      el
    );

    return () => mm.revert();
  }, []);

  return (
    <section id="story" ref={section} className="story">
      {/* 01: Atmospheric Cloud Introduction */}
      <div className="story-intro">
        <div className="section-kicker">A FIELD GUIDE FOR THE SELF-MADE</div>
        <h2 className="story-intro-title">
          You built the work.<br />
          <em>Let’s untangle the rest.</em>
        </h2>
        <p>
          Running an independent creative or tech business brings a thousand moving pieces.
          Here is how to transform the administrative maze into a clean, repeatable engine that
          protects your earnings.
        </p>
        <a href="#story-chapters" className="story-scroll-cue">
          STEP INTO THE CHAPTERS <ArrowDownRight size={16} />
        </a>
        <div className="cloud-wash" aria-hidden="true" />
      </div>

      {/* 02: Three Large Image-Led Chapters */}
      <div id="story-chapters" className="story-chapters">
        {chapters.map((c) => (
          <article className={`story-chapter chapter-${c.n}`} key={c.n}>
            <div className="chapter-image">
              <div className="chapter-image-inner">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="chapter-photo-element"
                />
              </div>
              <span className="chapter-photo-label">{c.tag}</span>
              <span className="chapter-number">{c.n} / 03</span>
              <div className="chapter-stat-badge">{c.stat}</div>
            </div>

            <div className="chapter-copy">
              <span className="chapter-eyebrow">{c.eyebrow}</span>
              <h3>
                {c.title}<br />
                <em>{c.line}</em>
              </h3>
              <p>{c.copy}</p>
              <Link href="#guides" className="chapter-link">
                Explore the field guides <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* 03: Pinned Horizontal Storytelling Track */}
      <div className="horizontal-story" aria-label="Independent workflow steps">
        <div className="horizontal-top">
          <div>
            <span className="section-kicker">THE 4-STEP INDEPENDENT WORKFLOW</span>
            <h3 className="horizontal-heading">From First Brief to Clean Tax Refund</h3>
          </div>
          <span className="horizontal-hint">SCROLL VERTICALLY TO PROGRESS ↔</span>
        </div>

        <div className="horizontal-track">
          {horizontalSteps.map((p) => (
            <article className={`horizontal-panel ${p.tone}`} key={p.n}>
              <div className="h-panel-top">
                <span className="h-panel-step-index">{p.n} / THE 4 STEPS</span>
                <span className="h-panel-pill">{p.highlight}</span>
              </div>

              <div className="h-panel-graphic">
                <span>{p.word}</span>
                <i>{p.iconSymbol}</i>
              </div>

              <div className="h-panel-copy">
                <div className="h-panel-sub">{p.stepName}</div>
                <h3>
                  {p.title}
                  <span>.</span>
                </h3>
                <p>{p.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
