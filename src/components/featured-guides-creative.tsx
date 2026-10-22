"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Percent,
  Globe2,
  Wallet,
  ShieldCheck,
  ArrowRight,
  Clock,
  BookOpen,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";
import { articles } from "@/lib/articles";
import { TiltCard } from "./tilt-card";

type CategoryFilter = "all" | "Income Tax" | "GST & Invoicing" | "USD & Remittances" | "Expenses & Deductions" | "Legal & Compliance";

export function FeaturedGuidesCreative() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredGuides =
    activeCategory === "all"
      ? articles.slice(0, 6)
      : articles.filter((a) => a.category === activeCategory).slice(0, 6);

  // Spotlight Master Guide (Section 44ADA)
  const masterGuide = articles.find((a) => a.slug.includes("44ada")) || articles[0];

  return (
    <div className="featured-guides-creative-root">
      {/* ── Category Filter Bar ── */}
      <div className="guides-filter-bar">
        {[
          { key: "all", label: "All Master Guides (8)" },
          { key: "Income Tax", label: "Income Tax & 44ADA (4)" },
          { key: "GST & Invoicing", label: "GST & LUT Zero-Rating (1)" },
          { key: "USD & Remittances", label: "USD, Wise & PayPal FIRC (1)" },
          { key: "Expenses & Deductions", label: "Deductions & Expenses (1)" },
          { key: "Legal & Compliance", label: "Contracts & IP (1)" }
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`guide-filter-chip ${activeCategory === tab.key ? "active" : ""}`}
            onClick={() => setActiveCategory(tab.key as CategoryFilter)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Creative Bento Guides Grid ── */}
      <div className="guides-bento-grid">
        {/* Spotlight Featured Guide (Large Bento Card) */}
        {activeCategory === "all" && masterGuide && (
          <div className="guide-hero-bento">
            <TiltCard glowColor="rgba(91, 224, 160, 0.2)" scale={1.015}>
              <div className="guide-hero-card-inner">
                <div className="guide-hero-header">
                  <div className="guide-tag-group">
                    <span className="guide-badge-pill popular">
                      <BookOpen size={11} /> MOST READ MASTER GUIDE
                    </span>
                    <span className="guide-badge-pill statute">
                      CBDT &amp; IT Act § 44ADA
                    </span>
                  </div>
                  <span className="guide-readtime">
                    <Clock size={12} /> {masterGuide.readTime}
                  </span>
                </div>

                <h3 className="guide-hero-title">
                  <Link href={`/guides/${masterGuide.slug}`}>
                    {masterGuide.title}
                  </Link>
                </h3>

                <p className="guide-hero-desc">{masterGuide.description}</p>

                {/* Quick Statutory Highlights Grid */}
                <div className="guide-highlights-grid">
                  <div className="highlight-pill">
                    <Percent size={13} className="text-emerald" />
                    <span>50% Deemed Profit Scheme</span>
                  </div>
                  <div className="highlight-pill">
                    <ShieldCheck size={13} className="text-emerald" />
                    <span>₹75 Lakh Digital Ceiling</span>
                  </div>
                  <div className="highlight-pill">
                    <CheckCircle size={13} className="text-emerald" />
                    <span>No Books of Accounts Required</span>
                  </div>
                  <div className="highlight-pill">
                    <Clock size={13} className="text-emerald" />
                    <span>Single Advance Tax by Mar 15</span>
                  </div>
                </div>

                <div className="guide-hero-footer">
                  <span className="guide-reviewer-badge">
                    Verified for AY 2025-26 &amp; Finance Act 2025
                  </span>
                  <Link href={`/guides/${masterGuide.slug}`} className="guide-read-btn">
                    Read Complete Guide <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </div>
        )}

        {/* Regular Guides Grid */}
        <div className={`guides-sub-grid ${activeCategory !== "all" ? "full-width" : ""}`}>
          {filteredGuides
            .filter((g) => (activeCategory === "all" ? g.slug !== masterGuide.slug : true))
            .map((guide) => {
              // Custom category badges & accent colors
              let iconColor = "#10b981";
              let Icon = FileText;
              let statuteTag = "Primary Statute";

              if (guide.category === "GST & Invoicing") {
                iconColor = "#f59e0b";
                Icon = FileText;
                statuteTag = "CGST Rule 96A";
              } else if (guide.category === "USD & Remittances") {
                iconColor = "#2F435C";
                Icon = Globe2;
                statuteTag = "RBI Purpose P0802";
              } else if (guide.category === "Expenses & Deductions") {
                iconColor = "#B87552";
                Icon = Wallet;
                statuteTag = "IT Act § 32 Depreciation";
              } else if (guide.category === "Income Tax") {
                iconColor = "#24364B";
                Icon = Percent;
                statuteTag = "Sec 194J & 44ADA";
              } else if (guide.category === "Legal & Compliance") {
                iconColor = "#24364B";
                Icon = ShieldCheck;
                statuteTag = "Contract Act · IP Shield";
              }

              return (
                <TiltCard key={guide.slug} glowColor={`${iconColor}22`} scale={1.02}>
                  <Link href={`/guides/${guide.slug}`} className="guide-creative-card">
                    <div className="card-top-bar">
                      <div
                        className="guide-icon-badge"
                        style={{ background: `${iconColor}15`, color: iconColor }}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="statute-chip">{statuteTag}</span>
                      <span className="guide-readtime-sm">
                        <Clock size={11} /> {guide.readTime}
                      </span>
                    </div>

                    <h4 className="guide-card-title">{guide.title}</h4>
                    <p className="guide-card-desc">{guide.description}</p>

                    <div className="guide-card-bottom">
                      <span className="guide-category-label">{guide.category}</span>
                      <span className="guide-arrow-link">
                        Read Guide <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              );
            })}
        </div>
      </div>
    </div>
  );
}
