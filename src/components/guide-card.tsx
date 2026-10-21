import Link from "next/link";
import type { Article } from "@/lib/articles";
import {
  ArrowUpRight,
  Clock,
  Percent,
  FileText,
  Globe2,
  Wallet,
  Scale,
  Sparkles
} from "lucide-react";
import { TiltCard } from "./tilt-card";

function getStatuteTag(article: Article): { tag: string; iconColor: string } {
  if (article.slug.includes("lut")) {
    return { tag: "Form RFD-11 · Rule 96A", iconColor: "#d97706" };
  }
  if (article.slug.includes("44ada")) {
    return { tag: "IT Act § 44ADA · 50% Profit", iconColor: "#059669" };
  }
  if (article.slug.includes("firc") || article.slug.includes("wise") || article.slug.includes("remittance")) {
    return { tag: "RBI Code P0802 · e-FIRA", iconColor: "#0284c7" };
  }
  if (article.slug.includes("tds")) {
    return { tag: "Sec 194J(1)(ba) · 2% vs 10%", iconColor: "#059669" };
  }
  if (article.slug.includes("expenses") || article.slug.includes("rent")) {
    return { tag: "Sec 30-38 · Deductions", iconColor: "#c16b43" };
  }
  if (article.slug.includes("contract")) {
    return { tag: "Indian Contract Act · IP", iconColor: "#7c3aed" };
  }
  if (article.slug.includes("advance-tax")) {
    return { tag: "Sec 211 & 234C · Mar 15", iconColor: "#059669" };
  }
  if (article.slug.includes("new-vs-old")) {
    return { tag: "Sec 115BAC · ₹7L Rebate", iconColor: "#059669" };
  }
  return { tag: "Statutory Law", iconColor: "#059669" };
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "GST & Invoicing":
      return FileText;
    case "USD & Remittances":
      return Globe2;
    case "Expenses & Deductions":
      return Wallet;
    case "Legal & Compliance":
      return Scale;
    case "Income Tax":
    default:
      return Percent;
  }
}

export function GuideCard({
  article
}: {
  article: Article;
  index?: number;
}) {
  const { tag, iconColor } = getStatuteTag(article);
  const Icon = getCategoryIcon(article.category);

  return (
    <TiltCard glowColor={`${iconColor}20`} scale={1.015}>
      <Link href={`/guides/${article.slug}`} className="directory-guide-card">
        <div className="card-top-row">
          <div
            className="category-icon-box"
            style={{ background: `${iconColor}15`, color: iconColor }}
          >
            <Icon size={18} />
          </div>
          <span className="statute-badge">{tag}</span>
          <span className="read-time-pill">
            <Clock size={11} /> {article.readTime}
          </span>
        </div>

        <h3>{article.title}</h3>
        <p>{article.description}</p>

        {article.howTo && (
          <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 700, color: "var(--green)", marginBottom: 14 }}>
            <Sparkles size={12} color="#059669" /> Includes Step-by-Step Rich HowTo
          </div>
        )}

        <div className="card-footer-row">
          <span className="category-tag-pill">{article.category}</span>
          <span className="action-link">
            Read Guide <ArrowUpRight size={13} />
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
