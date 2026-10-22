import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, ArrowRight } from "lucide-react";
import { getArticle } from "@/lib/articles";

const FEATURED_SLUGS = [
  "renew-gst-lut-online",
  "paypal-wise-stripe-firc-guide",
  "claim-tds-refund-freelancers",
  "rent-electricity-business-expenses",
  "freelancer-contract-tax-records",
];

export function EditorialFeaturedGuides() {
  const guides = FEATURED_SLUGS.map((slug) => getArticle(slug)).filter(Boolean);
  const leadGuide = guides[0];
  const gridGuides = guides.slice(1);

  if (!leadGuide) return null;

  return (
    <div className="editorial-featured-guides">
      {/* ── Lead Story (Editorial Asymmetric Showcase) ── */}
      <div className="editorial-lead-card">
        <Link href={`/guides/${leadGuide.slug}`} className="editorial-lead-link">
          <div className="editorial-lead-image-wrap">
            {leadGuide.image ? (
              <Image
                src={leadGuide.image}
                alt={leadGuide.imageAlt || leadGuide.title}
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className="editorial-image"
                priority
              />
            ) : (
              <div className="editorial-image-placeholder" />
            )}
            <span className="editorial-lead-pill">{leadGuide.category}</span>
          </div>

          <div className="editorial-lead-content">
            <div className="editorial-meta-row">
              <span className="editorial-statute-note">CGST Rule 96A · Form RFD-11</span>
              <span className="editorial-readtime">
                <Clock size={12} /> {leadGuide.readTime}
              </span>
            </div>

            <h3 className="serif editorial-lead-title">{leadGuide.title}</h3>

            <p className="editorial-lead-summary">{leadGuide.description}</p>

            <div className="editorial-action-strip">
              <span className="editorial-read-cta">
                Read Full Blueprint <ArrowRight size={14} />
              </span>
              <span className="editorial-verified-tag">Updated AY 2025–26</span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── 4 Secondary Editorial Cards ── */}
      <div className="editorial-grid-quad">
        {gridGuides.map((guide) => {
          if (!guide) return null;
          return (
            <article key={guide.slug} className="editorial-card-item">
              <Link href={`/guides/${guide.slug}`} className="editorial-card-link">
                <div className="editorial-card-media">
                  {guide.image ? (
                    <Image
                      src={guide.image}
                      alt={guide.imageAlt || guide.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="editorial-image"
                    />
                  ) : (
                    <div className="editorial-image-placeholder" />
                  )}
                  <span className="editorial-card-pill">{guide.category}</span>
                </div>

                <div className="editorial-card-body">
                  <div className="editorial-meta-row">
                    <span className="editorial-readtime">
                      <Clock size={11} /> {guide.readTime}
                    </span>
                  </div>

                  <h4 className="serif editorial-card-title">{guide.title}</h4>

                  <p className="editorial-card-desc">{guide.description}</p>

                  <div className="editorial-card-footer">
                    <span className="editorial-inline-cta">
                      Read Guide <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
