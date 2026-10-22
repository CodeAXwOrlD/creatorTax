import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles";
import { ArrowUpRight, Clock, FileCheck } from "lucide-react";

function getStatuteTag(article: Article): string {
  if (article.slug.includes("lut")) return "Form RFD-11 · CGST Rule 96A";
  if (article.slug.includes("44ada")) return "IT Act § 44ADA · 50% Profit";
  if (article.slug.includes("firc") || article.slug.includes("wise") || article.slug.includes("remittance")) return "RBI Code P0802 · e-FIRA";
  if (article.slug.includes("tds")) return "Sec 194J(1)(ba) · 2% vs 10%";
  if (article.slug.includes("expenses") || article.slug.includes("rent")) return "Sec 30–38 · Deductions";
  if (article.slug.includes("contract")) return "Indian Contract Act · IP";
  if (article.slug.includes("advance-tax")) return "Sec 211 & 234C · Single Mar 15";
  if (article.slug.includes("new-vs-old")) return "Sec 115BAC · ₹7L Rebate";
  return "Statutory Framework";
}

export function GuideCard({
  article
}: {
  article: Article;
  index?: number;
}) {
  const statuteTag = getStatuteTag(article);

  return (
    <article className="directory-editorial-card">
      <Link href={`/guides/${article.slug}`} className="directory-card-link">
        {article.image && (
          <div className="directory-card-image-wrap">
            <Image
              src={article.image}
              alt={article.imageAlt || article.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="directory-card-image"
            />
            <span className="directory-category-badge">{article.category}</span>
          </div>
        )}

        <div className="directory-card-content">
          <div className="directory-card-meta">
            <span className="directory-statute-tag">{statuteTag}</span>
            <span className="directory-read-time">
              <Clock size={11} /> {article.readTime}
            </span>
          </div>

          <h3 className="serif directory-card-title">{article.title}</h3>

          <p className="directory-card-summary">{article.description}</p>

          {article.howTo && (
            <div className="directory-card-howto-badge">
              <FileCheck size={12} color="var(--brand-primary)" /> Includes Step-by-Step Portal Navigation
            </div>
          )}

          <div className="directory-card-footer">
            <span className="directory-read-cta">
              Read Guide <ArrowUpRight size={13} />
            </span>
            <span className="directory-date-note">{article.date}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
