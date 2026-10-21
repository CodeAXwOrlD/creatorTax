"use client";

import { useState, useMemo } from "react";
import type { Article } from "@/lib/articles";
import { GuideCard } from "@/components/guide-card";
import { Search, BookOpen, X, ArrowUpDown } from "lucide-react";

const CATEGORIES = [
  "All Guides",
  "Income Tax",
  "GST & Invoicing",
  "USD & Remittances",
  "Expenses & Deductions",
  "Legal & Compliance"
] as const;

const QUICK_SUGGESTIONS = [
  "Section 44ADA",
  "GST LUT Renewal",
  "Wise e-FIRA",
  "TDS 194J Refund",
  "Home Office Rent",
  "Advance Tax Deadlines"
];

export function GuidesDirectory({ allArticles }: { allArticles: Article[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Guides");
  const [sortBy, setSortBy] = useState<"default" | "readTimeAsc" | "readTimeDesc">("default");

  // Dynamic category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Guides": allArticles.length };
    for (const a of allArticles) {
      counts[a.category] = (counts[a.category] || 0) + 1;
    }
    return counts;
  }, [allArticles]);

  const filteredArticles = useMemo(() => {
    let list = allArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All Guides" || article.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.quickAnswer.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.sections.some((s) => s.heading.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "readTimeAsc") {
      list = [...list].sort((a, b) => {
        const timeA = parseInt(a.readTime) || 0;
        const timeB = parseInt(b.readTime) || 0;
        return timeA - timeB;
      });
    } else if (sortBy === "readTimeDesc") {
      list = [...list].sort((a, b) => {
        const timeA = parseInt(a.readTime) || 0;
        const timeB = parseInt(b.readTime) || 0;
        return timeB - timeA;
      });
    }

    return list;
  }, [allArticles, searchQuery, selectedCategory, sortBy]);

  return (
    <div>
      {/* Search and Filters Bar */}
      <div style={{ display: "grid", gap: 14, margin: "0 0 32px" }}>
        <div className="guide-search-wrapper">
          <Search
            size={18}
            style={{
              position: "absolute",
              left: 18,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--muted)",
              pointerEvents: "none"
            }}
          />
          <input
            className="guide-search-input"
            type="search"
            placeholder="Search guides by statute, keyword, or workflow (e.g. 44ADA, Form RFD-11, Wise, Section 194J, Rent)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search guides"
          />
          {searchQuery && (
            <button
              type="button"
              className="guide-search-clear-btn"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              <X size={13} />
            </button>
          )}
        </div>

        {/* Quick query chips */}
        <div className="guide-search-suggestions">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontWeight: 700, fontSize: 11, color: "var(--cobalt)" }}>
            <BookOpen size={12} /> Popular:
          </span>
          {QUICK_SUGGESTIONS.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              className="guide-search-tag-chip"
              onClick={() => setSearchQuery(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>

        {/* Category Filter Pills & Sort Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            marginTop: 6
          }}
        >
          <div className="filter-row" style={{ margin: 0 }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-chip ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
                <span className="chip-count">{categoryCounts[cat] || 0}</span>
              </button>
            ))}
          </div>

          {/* Sort selector */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <ArrowUpDown size={13} color="var(--muted)" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "default" | "readTimeAsc" | "readTimeDesc")}
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "var(--ink-2)",
                background: "var(--paper-card)",
                border: "1px solid var(--line)",
                borderRadius: 8,
                padding: "6px 10px",
                cursor: "pointer"
              }}
              aria-label="Sort guides"
            >
              <option value="default">Default (Curated Order)</option>
              <option value="readTimeAsc">Quickest Read First</option>
              <option value="readTimeDesc">Most In-Depth First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count & Status */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 22,
          paddingBottom: 14,
          borderBottom: "1px solid var(--line)",
          fontSize: 12.5,
          color: "var(--muted)"
        }}
      >
        <span>
          Showing <strong>{filteredArticles.length}</strong> {filteredArticles.length === 1 ? "guide" : "guides"}
          {selectedCategory !== "All Guides" ? ` in ${selectedCategory}` : ""}
          {searchQuery ? ` matching "${searchQuery}"` : ""}
        </span>
        {(searchQuery || selectedCategory !== "All Guides" || sortBy !== "default") && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Guides");
              setSortBy("default");
            }}
            style={{
              background: "none",
              border: 0,
              color: "var(--terracotta)",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700
            }}
          >
            Reset filters &amp; search
          </button>
        )}
      </div>

      {/* Guides Grid */}
      {filteredArticles.length > 0 ? (
        <div className="guide-grid">
          {filteredArticles.map((article, i) => (
            <GuideCard key={article.slug} article={article} index={i} />
          ))}
        </div>
      ) : (
        <div
          className="panel"
          style={{
            padding: "54px 24px",
            textAlign: "center",
            background: "#fffdf7",
            borderRadius: 14,
            border: "1.5px dashed var(--line)"
          }}
        >
          <BookOpen size={42} color="var(--muted)" style={{ margin: "0 auto 16px", opacity: 0.5 }} />
          <h3 className="serif" style={{ fontSize: 24, margin: "0 0 10px", color: "var(--ink)" }}>
            No matching guides found
          </h3>
          <p style={{ color: "var(--muted)", fontSize: 13.5, maxWidth: 440, margin: "0 auto 20px", lineHeight: 1.6 }}>
            We couldn&apos;t find any articles matching &quot;{searchQuery}&quot;. Try exploring a broader search term like &quot;44ADA&quot;, &quot;LUT&quot;, or &quot;TDS&quot;.
          </p>
          <button
            type="button"
            className="btn secondary"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Guides");
            }}
          >
            View All Guides
          </button>
        </div>
      )}
    </div>
  );
}
