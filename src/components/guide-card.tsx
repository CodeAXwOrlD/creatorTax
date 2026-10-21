import Link from "next/link";
import type { Article } from "@/lib/articles";
import { ArrowUpRight, Clock } from "lucide-react";

const artClass = ["", "warm", "green"];

export function GuideCard({
  article,
  index = 0
}: {
  article: Article;
  index?: number;
}) {
  return (
    <article className="guide-card">
      <div className={`guide-art ${artClass[index % artClass.length]}`}>
        <div className="paper-sheet" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <small style={{ fontSize: 9, color: "var(--green)", fontWeight: 700, letterSpacing: "0.08em" }}>
            {article.category.toUpperCase()}
          </small>
        </div>
      </div>

      <div className="guide-body">
        <span className="tag">{article.category}</span>
        <h3>
          <Link href={`/guides/${article.slug}`}>{article.title}</Link>
        </h3>
        <p style={{ minHeight: 60 }}>{article.description}</p>

        <div className="guide-meta">
          <span>{article.date}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <Clock size={11} /> {article.readTime} ·{" "}
            <ArrowUpRight size={13} style={{ verticalAlign: "middle" }} />
          </span>
        </div>
      </div>
    </article>
  );
}
