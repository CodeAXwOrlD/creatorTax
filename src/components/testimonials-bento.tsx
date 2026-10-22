"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, TrendingDown, TrendingUp, BookOpen, CheckCircle2 } from "lucide-react";
import {
  UpworkLogo,
  GstCertificateIcon,
  TaxReceiptSlipIcon,
  FinancialCalcIcon,
} from "./brand-and-doc-icons";

type CategoryTab = "all" | "dev" | "video" | "consulting";

export function TestimonialsBento() {
  const [activeTab, setActiveTab] = useState<CategoryTab>("all");
  const [filingMode, setFilingMode] = useState<"44ada" | "itr3">("44ada");

  const isDimmed = (cat: CategoryTab) => activeTab !== "all" && activeTab !== cat;
  const isFocused = (cat: CategoryTab) => activeTab === cat;

  const is44ada = filingMode === "44ada";

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
            &ldquo;
          </div>

          <div className="bento-card-inner">
            {/* Non-AI Editorial Header Row */}
            <div className="bento-header-row">
              <div className="bento-tag-wrap">
                <span className="bento-case-meta">
                  <span className="filing-status-dot" />
                  AY 2025-26 Filed Return
                </span>
                <span className="bento-platform-pill">
                  <UpworkLogo size={13} />
                  Upwork Top Rated Plus
                </span>
              </div>

              {/* Authentic Financial Stat Chip */}
              <div className="bento-savings-pill">
                <span className="savings-lbl">Verified Saving:</span>
                <strong>₹54,600</strong>
              </div>
            </div>

            {/* Quote Body with highlighted text */}
            <div className="bento-quote-box">
              <p className="bento-quote-text">
                &ldquo;I used to dread tax season because my local CA kept filing my freelance earnings as business income with complex balance sheets. CreatorTax walked me through Section 44ADA and AY 2025-26 New Regime step-by-step. The 50% presumptive profit rule{" "}
                <mark className="highlight-mark cobalt">slashed my tax liability legally and saved me over ₹54,000</mark>.&rdquo;
              </p>
            </div>

            {/* ── Premium Animated Fintech Comparison Panel ── */}
            <div className="ledger-panel" aria-label="Interactive Tax Comparison">
              {/* Header with segmented control */}
              <div className="ledger-panel-header">
                <div className="ledger-panel-title">
                  <FinancialCalcIcon size={13} className="text-cobalt" />
                  <span>Statutory Filing Comparison · Gross ₹24,00,000</span>
                </div>
                <div className="ledger-seg-control" role="group" aria-label="Select filing method">
                  {(["44ada", "itr3"] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setFilingMode(mode)}
                      className={`ledger-seg-btn ${filingMode === mode ? "active" : ""}`}
                    >
                      {mode === "44ada" ? "Sec 44ADA" : "Regular ITR-3"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Animated rows */}
              <div className="ledger-rows">
                {[
                  {
                    label: "Taxable Profit",
                    icon: <TrendingDown size={12} />,
                    val44: "₹12,00,000",
                    valITR: "₹18,50,000",
                    sub44: "Flat 50% (§44ADA)",
                    subITR: "Fully Assessed",
                    good: true,
                  },
                  {
                    label: "Final Tax Liability",
                    icon: <TrendingDown size={12} />,
                    val44: "₹41,600",
                    valITR: "₹96,200",
                    sub44: "New Regime AY 25-26",
                    subITR: "Old Slabs",
                    good: true,
                  },
                  {
                    label: "Books of Accounts",
                    icon: <BookOpen size={12} />,
                    val44: "Not Required",
                    valITR: "Mandatory P&L",
                    sub44: "§44AA Exempt",
                    subITR: "+ Balance Sheet",
                    good: true,
                  },
                ].map((row) => (
                  <div key={row.label} className="ledger-row">
                    <div className="ledger-row-label">
                      {row.label}
                    </div>
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={filingMode + row.label}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className={`ledger-row-val ${is44ada && row.good ? "ledger-val-good" : "ledger-val-muted"}`}
                      >
                        <span className="ledger-val-main">
                          {is44ada ? row.val44 : row.valITR}
                        </span>
                        <span className="ledger-val-sub">
                          {is44ada ? row.sub44 : row.subITR}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ))}

                {/* Verdict row */}
                <div className="ledger-verdict-row">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={filingMode + "verdict"}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className={`ledger-verdict-badge ${is44ada ? "emerald" : "amber"}`}
                    >
                      {is44ada ? (
                        <>
                          <CheckCircle2 size={13} />
                          57% Tax Saved Legally · ₹54,600 Back in Your Pocket
                        </>
                      ) : (
                        <>
                          <TrendingUp size={13} />
                          ₹54,600 Extra Tax Paid + Mandatory Audit Costs
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
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
                  <span className="filing-status-dot" style={{ width: 6, height: 6 }} />
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
            {/* Non-AI Header */}
            <div className="bento-header-row">
              <span className="bento-case-meta warm">
                <span className="filing-status-dot amber" />
                GST Form RFD-11 · LUT Active
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

        {/* Bento Card 3: Rahul Nair (TDS 194J Rectification) */}
        <div
          className={`bento-card bento-card-compact bento-card-dark ${
            isDimmed("consulting") ? "is-dimmed" : ""
          } ${isFocused("consulting") ? "is-focused" : ""}`}
        >
          <div className="bento-card-inner">
            {/* Non-AI Header */}
            <div className="bento-header-row">
              <span className="bento-case-meta">
                <span className="filing-status-dot" />
                Section 194J · TDS Rectification
              </span>
              <span className="bento-pill-mini">Form 16A Rectified</span>
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

        {/* Bento Card 4: Community Metrics — Proper horizontal stat grid */}
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
              <div className="metric-stat-block">
                <span className="metric-stat-num">₹14.8 Cr<sup>+</sup></span>
                <span className="metric-stat-label">Receipts Modeled</span>
                <span className="metric-stat-sub">Calculated locally · no servers</span>
              </div>
              <div className="metric-stat-divider" />
              <div className="metric-stat-block">
                <span className="metric-stat-num">0 Bytes</span>
                <span className="metric-stat-label">PAN / Income Stored</span>
                <span className="metric-stat-sub">Zero analytics on your income</span>
              </div>
              <div className="metric-stat-divider" />
              <div className="metric-stat-block">
                <span className="metric-stat-num">100%</span>
                <span className="metric-stat-label">Statute-Backed</span>
                <span className="metric-stat-sub">CBDT, GSTN &amp; RBI directions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
