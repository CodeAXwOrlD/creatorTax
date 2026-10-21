"use client";

import { useState, useMemo } from "react";
import type { Article } from "@/lib/articles";
import { GuideCard } from "@/components/guide-card";
import { Search, BookOpen } from "lucide-react";

const CATEGORIES = [
  "All Guides",
  "Income Tax",
  "GST & Invoicing",
  "USD & Remittances",
  "Expenses & Deductions",
  "Legal & Compliance"
] as const;

export function GuidesDirectory({ allArticles }: { allArticles: Article[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Guides");

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All Guides" || article.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.quickAnswer.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [allArticles, searchQuery, selectedCategory]);

  return (
    <div>
      {/* Search and Filters Bar */}
      <div
        style={{
          display: "grid",
          gap: 16,
          margin: "0 0 32px"
        }}
      >
        <div style={{ position: "relative" }}>
          <Search
            size={18}
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--muted)"
            }}
          />
          <input
            className="search-input"
            type="search"
            placeholder="Search guides by keyword, section (e.g. 44ADA, LUT, PayPal, TDS, Rent)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingLeft: 46, fontSize: 14 }}
            aria-label="Search guides"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="filter-row" style={{ margin: 0 }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-chip ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Status */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
          fontSize: 12,
          color: "var(--muted)"
        }}
      >
        <span>
          Showing <strong>{filteredArticles.length}</strong> {filteredArticles.length === 1 ? "guide" : "guides"}
          {selectedCategory !== "All Guides" ? ` in ${selectedCategory}` : ""}
          {searchQuery ? ` matching "${searchQuery}"` : ""}
        </span>
        {(searchQuery || selectedCategory !== "All Guides") && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Guides");
            }}
            style={{
              background: "none",
              border: 0,
              color: "var(--terracotta)",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 600
            }}
          >
            Clear filters
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
            padding: "48px 24px",
            textAlign: "center",
            background: "#fffdf7"
          }}
        >
          <BookOpen size={40} color="var(--muted)" style={{ margin: "0 auto 14px", opacity: 0.6 }} />
          <h3 className="serif" style={{ fontSize: 24, margin: "0 0 8px" }}>
            No matching guides found
          </h3>
          <p style={{ color: "var(--muted)", fontSize: 13, maxWidth: 420, margin: "0 auto 18px" }}>
            We couldn&apos;t find any articles matching &quot;{searchQuery}&quot;. Try a different search term or explore all guides above.
          </p>
          <button
            type="button"
            className="btn secondary"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Guides");
            }}
          >
            Reset search filters
          </button>
        </div>
      )}
    </div>
  );
}
