"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import {
  UpworkLogo,
  GstCertificateIcon,
  StatutoryShieldIcon,
  TaxReceiptSlipIcon,
  FinancialCalcIcon,
} from "./brand-and-doc-icons";

type CategoryTab = "all" | "dev" | "video" | "consulting";

export function TestimonialsBento() {
  const [activeTab, setActiveTab] = useState<CategoryTab>("all");
  const [filingMode, setFilingMode] = useState<"44ada" | "itr3">("44ada");

  const isDimmed = (cat: CategoryTab) => activeTab !== "all" && activeTab !== cat;
  const isFocused = (cat: CategoryTab) => activeTab === cat;

  return (
    <div className="testimonials-bento-root">
      {/* ── Category Filter Tabs ── */}
      <div className="bento-tabs-container">
        <div className="bento-tabs-nav" role="tablist">
          {[
            { key: "all", label: "All Stories" },
            { key: "dev", label: "Software Engineers" },
            { key: "video", label: "Video & Design" },
            { key: "consulting", label: "Consultants" },
          ].map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`bento-tab-btn ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key as CategoryTab)}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.div
                  layoutId="bento-active-pill"
                  className="bento-tab-pill-indicator"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Asymmetrical Bento Grid ── */}
      <div className="bento-grid-layout">
        {/* Featured Hero Bento Card: Aditya Kulkarni */}
        <div
          className={`bento-card bento-hero-card ${isDimmed("dev") ? "is-dimmed" : ""} ${
            isFocused("dev") ? "is-focused" : ""
          }`}
        >
          {/* Subtle Fintech Dot Matrix Overlay */}
          <div className="card-tech-grid" aria-hidden="true" />
          <div className="quote-watermark" aria-hidden="true">
            “
          </div>

          <div className="bento-card-inner">
            <div className="bento-header-row">
              <div className="bento-tag-wrap">
                <span className="bento-pill cobalt">
                  <StatutoryShieldIcon size={12} />
                  Verified Case Study
                </span>
                <span className="bento-pill platform" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <UpworkLogo size={13} />
                  Upwork Top Rated Plus
                </span>
              </div>

              {/* Tax Savings Metric Highlight (Replaced AI sparkles with Tax Receipt Slip) */}
              <div className="savings-badge">
                <TaxReceiptSlipIcon size={13} className="text-gold" />
                <span>Saved <strong>₹54,600</strong> in Tax</span>
              </div>
            </div>

            {/* Quote Body with highlighted text */}
            <div className="bento-quote-box">
              <p className="bento-quote-text">
                &ldquo;I used to dread tax season because my local CA kept filing my freelance earnings as business income with complex balance sheets. CreatorTax walked me through Section 44ADA and AY 2025-26 New Regime step-by-step. The 50% presumptive profit rule{" "}
                <mark className="highlight-mark cobalt">slashed my tax liability legally and saved me over ₹54,000</mark>.&rdquo;
              </p>
            </div>

            {/* Creative Interactive Tax Filing Comparison Ledger */}
            <div className="interactive-ledger-slip" aria-label="Interactive Tax Comparison Ledger">
              <div className="ledger-top-bar">
                <div className="ledger-title-group">
                  <FinancialCalcIcon size={14} className="text-cobalt" />
                  <span>Statutory Filing Comparison (Gross: ₹24,00,000)</span>
                </div>
                <div className="ledger-toggle-switch" role="group" aria-label="Select filing method">
                  <button
                    type="button"
                    className={`ledger-switch-btn ${filingMode === "44ada" ? "active" : ""}`}
                    onClick={() => setFilingMode("44ada")}
                  >
                    Sec 44ADA
                  </button>
                  <button
                    type="button"
                    className={`ledger-switch-btn ${filingMode === "itr3" ? "active" : ""}`}
                    onClick={() => setFilingMode("itr3")}
                  >
                    Regular ITR-3
                  </button>
                </div>
              </div>

              <div className="ledger-data-grid">
                <div className="ledger-data-col">
                  <span className="ledger-data-lbl">Taxable Profit</span>
                  <strong className={`ledger-data-val ${filingMode === "44ada" ? "highlight-emerald" : ""}`}>
                    {filingMode === "44ada" ? "₹12,00,000 (Flat 50%)" : "₹18,50,000 (Assessed)"}
                  </strong>
                </div>
                <div className="ledger-data-col">
                  <span className="ledger-data-lbl">Final Tax Liability</span>
                  <strong className={`ledger-data-val ${filingMode === "44ada" ? "highlight-emerald" : "strike-muted"}`}>
                    {filingMode === "44ada" ? "₹41,600 (AY 25-26)" : "₹96,200 (Old Slabs)"}
                  </strong>
                </div>
                <div className="ledger-data-col">
                  <span className="ledger-data-lbl">Books of Accounts</span>
                  <strong className="ledger-data-val">
                    {filingMode === "44ada" ? "0 Required (Sec 44AA Exempt)" : "Mandatory P&L + Balance Sheet"}
                  </strong>
                </div>
                <div className="ledger-data-col">
                  <span className="ledger-data-lbl">Verified Outcome</span>
                  <span className={`ledger-verdict-pill ${filingMode === "44ada" ? "emerald" : "amber"}`}>
                    {filingMode === "44ada" ? "✓ 57% Tax Saved legally (₹54,600)" : "⚠ ₹54,600 Excess Tax + Audit Costs"}
                  </span>
                </div>
              </div>
            </div>

            {/* Author Footer */}
            <div className="bento-author-bar">
              <div className="author-avatar-wrap">
                <div className="author-avatar-gradient">
                  <span>AK</span>
                </div>
                <div className="author-verified-badge" title="Verified Independent Worker">
                  <StatutoryShieldIcon size={10} />
                </div>
              </div>
              <div className="author-info">
                <strong className="author-name">Aditya Kulkarni</strong>
                <span className="author-role">Senior Cloud Architect · Bengaluru (US Client Billings)</span>
              </div>
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="star-gold" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bento Card 2: Priya Sharma (GST LUT & Foreign Inward) */}
        <div
          className={`bento-card bento-card-compact bento-card-light ${
            isDimmed("video") ? "is-dimmed" : ""
          } ${isFocused("video") ? "is-focused" : ""}`}
        >
          <div className="bento-card-inner">
            <div className="bento-header-row">
              <span className="bento-pill gold">
                <GstCertificateIcon size={13} />
                GST LUT · Zero IGST
              </span>
              <span className="bento-pill-mini">Export of Services</span>
            </div>

            <div className="bento-quote-box compact">
              <p className="bento-quote-text small">
                &ldquo;My CA told me I had to pay 18% IGST upfront and wait 8 months for refunds. Following CreatorTax&apos;s LUT renewal tutorial took me 12 minutes on the GST portal, and{" "}
                <mark className="highlight-mark gold">saved ₹2.8L in working capital from getting blocked</mark>.&rdquo;
              </p>
            </div>

            {/* Interactive LUT Document Badge with Official SVG */}
            <div className="mini-doc-preview">
              <div className="doc-icon-wrap">
                <GstCertificateIcon size={17} className="text-emerald" />
              </div>
              <div className="doc-meta">
                <strong>Form GST RFD-11</strong>
                <small>ARN: AA270325019827Z · Status: ACCEPTED</small>
              </div>
            </div>

            <div className="bento-author-bar">
              <div className="author-avatar-wrap">
                <div className="author-avatar-gradient warm">
                  <span>PS</span>
                </div>
              </div>
              <div className="author-info">
                <strong className="author-name">Priya Sharma</strong>
                <span className="author-role">Video &amp; Motion Artist · Mumbai (US/EU Retainers)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Card 3: Rahul Nair (TDS 194J & Rigor) */}
        <div
          className={`bento-card bento-card-compact bento-card-dark ${
            isDimmed("consulting") ? "is-dimmed" : ""
          } ${isFocused("consulting") ? "is-focused" : ""}`}
        >
          <div className="bento-card-inner">
            <div className="bento-header-row">
              <span className="bento-pill cobalt">
                <StatutoryShieldIcon size={13} />
                Primary Statute Citations
              </span>
              <span className="bento-pill-mini">Sec 194J &amp; 44ADA</span>
            </div>

            <div className="bento-quote-box compact">
              <p className="bento-quote-text small">
                &ldquo;What sets this platform apart is statutory rigor. Every claim links to the Income Tax Act or RBI Master Directions. When a client deducted 10% instead of 1%,{" "}
                <mark className="highlight-mark emerald">I cited CreatorTax and got my Form 16A corrected instantly</mark>.&rdquo;
              </p>
            </div>

            <div className="mini-stat-row">
              <div className="mini-stat-cell">
                <span className="mini-stat-label">AIS Matching</span>
                <strong className="mini-stat-val">100% Validated</strong>
              </div>
              <div className="mini-stat-cell">
                <span className="mini-stat-label">Audit Notices</span>
                <strong className="mini-stat-val text-emerald">0 in 4 Years</strong>
              </div>
            </div>

            <div className="bento-author-bar">
              <div className="author-avatar-wrap">
                <div className="author-avatar-gradient blue">
                  <span>RN</span>
                </div>
              </div>
              <div className="author-info">
                <strong className="author-name">Rahul Nair</strong>
                <span className="author-role">Independent Systems Consultant · Hyderabad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Card 4: Community Metrics & Privacy Pill */}
        <div className="bento-card bento-card-metrics">
          <div className="bento-card-inner">
            <div className="metrics-bento-header">
              <div className="metrics-icon-badge">
                <TaxReceiptSlipIcon size={20} />
              </div>
              <div>
                <strong>By the Numbers</strong>
                <p>Why 12,000+ Indian creators trust CreatorTax</p>
              </div>
            </div>

            <div className="metrics-bento-list">
              <div className="metric-row-item">
                <div className="metric-row-val">₹14.8 Cr+</div>
                <div className="metric-row-text">
                  <strong>Receipts Modeled</strong>
                  <small>Calculated locally in browser without servers</small>
                </div>
              </div>
              <div className="metric-row-item">
                <div className="metric-row-val">0 Bytes</div>
                <div className="metric-row-text">
                  <strong>PAN / Income Stored</strong>
                  <small>Zero analytics on your income numbers</small>
                </div>
              </div>
              <div className="metric-row-item">
                <div className="metric-row-val">100%</div>
                <div className="metric-row-text">
                  <strong>Statute-Backed</strong>
                  <small>CBDT, GSTN circulars &amp; RBI directions</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
