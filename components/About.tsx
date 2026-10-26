import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Scale, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="about-section" aria-label="About CreatorTax India">
      <Reveal className="about-image">
        <Image
          src="/images/reference-sunrays.png"
          alt="Morning sunlight streaming through a lush forest canopy"
          width={736}
          height={1104}
          sizes="(max-width: 640px) 90vw, 45vw"
          className="about-photo"
        />
        <div className="image-caption">
          <span>THE EDITORIAL STANDARD / 2026</span>
          <b>MORE LIGHT ON THE FINE PRINT</b>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="about-copy">
        <div className="section-kicker">07 / WHY WE&apos;RE HERE · OUR EDITORIAL MANIFESTO</div>
        <h2>
          Good work deserves<br />
          <em>clear paperwork.</em>
        </h2>

        <p className="about-lead">
          Independent work already asks you to wear every hat: creative director, client service,
          project manager, debt collector, and technician. Navigating cross-border invoices, GST
          LUTs, and Section 44ADA shouldn&apos;t require a second degree in tax law.
        </p>

        <p>
          CreatorTax India was created to eliminate the fear, gatekeeping, and misinformation that
          plagues India&apos;s growing freelance and creator economy. We publish comprehensive,
          meticulously verified guides and interactive tools grounded in statutory law — so you can
          step into tax season with absolute confidence.
        </p>

        <div className="principles">
          <div className="principle-item">
            <ShieldCheck className="principle-icon" />
            <div className="principle-text">
              <strong>Ground Truth in Primary Statutes</strong>
              <span>
                Every guide cites the specific section of the Income Tax Act, 1961, CGST Rules, or RBI
                Master Directions — not hearsay or casual forum rumors.
              </span>
            </div>
          </div>

          <div className="principle-item">
            <Scale className="principle-icon" />
            <div className="principle-text">
              <strong>Independent Editorial Review</strong>
              <span>
                Content is authored by seasoned financial journalists and peer-reviewed by practicing
                Chartered Accountants (FCAs) specializing in direct and indirect taxation.
              </span>
            </div>
          </div>

          <div className="principle-item">
            <BookOpen className="principle-icon" />
            <div className="principle-text">
              <strong>Zero Jargon, 100% Practical Steps</strong>
              <span>
                Step-by-step screenshots, exact portal navigation routes, worked numerical examples,
                and downloadable templates designed for real-world execution.
              </span>
            </div>
          </div>
        </div>

        <div className="about-cta-row">
          <Link href="/about" className="button button-dark">
            Our Story & Editorial Board <ArrowUpRight size={16} />
          </Link>
          <Link href="/contact" className="quiet-link">
            Speak to the editorial desk →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
