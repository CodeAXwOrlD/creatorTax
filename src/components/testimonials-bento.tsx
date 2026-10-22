"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface StoryItem {
  id: string;
  category: "dev" | "video" | "consulting";
  serviceBadge: string;
  yearBadge: string;
  metricNumber: string;
  metricLabel: string;
  quote: string;
  authorInitials: string;
  authorName: string;
  authorRole: string;
  authorLocation: string;
  referenceLink: {
    label: string;
    href: string;
  };
}

const STORIES: StoryItem[] = [
  {
    id: "aditya",
    category: "dev",
    serviceBadge: "Section 44ADA",
    yearBadge: "AY 2025–26 Verified",
    metricNumber: "₹54,600",
    metricLabel: "Direct Tax Saved Legally via 44ADA",
    quote:
      "My previous accountant insisted on filing regular ITR-3 with arbitrary equipment depreciation bills, which created severe audit anxiety. CreatorTax walked me through Section 44ADA presumptive taxation. Filing took under 20 minutes with an unchallenged flat 50% deemed profit declaration.",
    authorInitials: "AK",
    authorName: "Aditya Kulkarni",
    authorRole: "Senior Cloud Architect",
    authorLocation: "Bengaluru · US Client Billings",
    referenceLink: {
      label: "View Section 44ADA Guide",
      href: "/guides/section-44ada-presumptive-tax-guide",
    },
  },
  {
    id: "priya",
    category: "video",
    serviceBadge: "GST LUT (Rule 96A)",
    yearBadge: "Export of Services",
    metricNumber: "₹2,80,000",
    metricLabel: "Working Capital Unlocked from 18% IGST",
    quote:
      "I was advised that I had to pay 18% IGST upfront on foreign client retainers and wait 8 months for GST refunds. CreatorTax’s step-by-step annual LUT tutorial took 15 minutes on the GST portal and completely eliminated upfront tax withholding on my USD wire transfers.",
    authorInitials: "PS",
    authorName: "Priya Sharma",
    authorRole: "3D Motion Designer",
    authorLocation: "Mumbai · EU Studio Retainers",
    referenceLink: {
      label: "View GST LUT Renewal Guide",
      href: "/guides/renew-gst-lut-online",
    },
  },
  {
    id: "rahul",
    category: "consulting",
    serviceBadge: "TDS Section 194J",
    yearBadge: "Form 16A Rectified",
    metricNumber: "10% → 2%",
    metricLabel: "Erroneous TDS Deduction Corrected",
    quote:
      "When a domestic corporate client mistakenly deducted 10% TDS instead of 2% on software consulting fees, I copied the dispute letter template from CreatorTax. Their finance department corrected their Form 26Q quarterly filing within 48 hours without friction.",
    authorInitials: "RN",
    authorName: "Rahul Nair",
    authorRole: "Systems & Security Consultant",
    authorLocation: "Hyderabad · Independent Contractor",
    referenceLink: {
      label: "View TDS Dispute Letter",
      href: "/tools",
    },
  },
];

export function TestimonialsBento() {
  const [activeTab, setActiveTab] = useState<"all" | "dev" | "video" | "consulting">("all");

  const filtered = activeTab === "all" ? STORIES : STORIES.filter((s) => s.category === activeTab);

  return (
    <div className="testimonials-bento-root">
      {/* ── Category Filter Tabs ── */}
      <div className="bento-tabs-container">
        <div className="bento-tabs-nav" role="tablist">
          {[
            { key: "all", label: "All Case Studies" },
            { key: "dev", label: "Software Engineers" },
            { key: "video", label: "Video & Design" },
            { key: "consulting", label: "Consultants" },
          ].map((tab) => {
            const isSelected = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={isSelected}
                className={`bento-tab-btn ${isSelected ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Clean 3-Card Outcome Grid (Equal Height & Human-Crafted) ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        {filtered.map((item) => (
          <article
            key={item.id}
            style={{
              background: "#ffffff",
              border: "1px solid var(--line)",
              borderRadius: 16,
              padding: "32px 28px",
              boxShadow: "0 2px 10px rgba(15, 23, 42, 0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <div>
              {/* Header Badges */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: 6,
                    background: "var(--paper-deep)",
                    border: "1px solid var(--line)",
                    color: "var(--ink-2)",
                  }}
                >
                  {item.serviceBadge}
                </span>
                <span style={{ fontSize: 11, color: "var(--muted)", fontWeight: 500 }}>
                  {item.yearBadge}
                </span>
              </div>

              {/* Bold Financial Metric Hero */}
              <div style={{ marginBottom: 18 }}>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "var(--ink)",
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {item.metricNumber}
                </div>
                <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 600, marginTop: 4, display: "block" }}>
                  {item.metricLabel}
                </span>
              </div>

              {/* The Real Quote */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--ink-2)",
                  margin: "0 0 24px",
                  fontStyle: "normal",
                }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author Footer */}
            <div
              style={{
                paddingTop: 18,
                borderTop: "1px solid var(--line)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 8,
                    background: "var(--paper-deep)",
                    border: "1px solid var(--line)",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--ink)",
                    flexShrink: 0,
                  }}
                >
                  {item.authorInitials}
                </div>
                <div>
                  <strong style={{ fontSize: 13.5, color: "var(--ink)", display: "block" }}>
                    {item.authorName}
                  </strong>
                  <span style={{ fontSize: 11.5, color: "var(--muted)", display: "block" }}>
                    {item.authorRole} · {item.authorLocation}
                  </span>
                </div>
              </div>

              <Link
                href={item.referenceLink.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--ink)",
                  textDecoration: "none",
                  marginTop: 2,
                }}
              >
                <span>{item.referenceLink.label}</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
