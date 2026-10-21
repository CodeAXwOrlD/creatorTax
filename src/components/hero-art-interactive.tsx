"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  ArrowUpRight,
  TrendingDown,
  Percent,
  FileText,
  Globe2,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

interface SimProfile {
  turnover: string;
  role: string;
  profit: string;
  newTax: string;
  oldTax: string;
  savedLabel: string;
  savedAmount: string;
  barPercent: string;
  tag: string;
}

const PROFILES: SimProfile[] = [
  {
    turnover: "₹18,00,000",
    role: "Software · Video · Consulting",
    profit: "₹9,00,000",
    newTax: "₹41,600",
    oldTax: "₹96,200",
    savedLabel: "57% Lower Tax",
    savedAmount: "Saved ₹54,600",
    barPercent: "34%",
    tag: "SWE (Upwork / US Clients)",
  },
  {
    turnover: "₹28,50,000",
    role: "Video Editor & 3D Motion Artist",
    profit: "₹14,25,000",
    newTax: "₹1,18,500",
    oldTax: "₹2,61,000",
    savedLabel: "54% Lower Tax",
    savedAmount: "Saved ₹1,42,500",
    barPercent: "54%",
    tag: "Motion Artist (Wise / Deel)",
  },
  {
    turnover: "₹46,00,000",
    role: "Design Lead & Technical Consultant",
    profit: "₹23,00,000",
    newTax: "₹2,80,800",
    oldTax: "₹5,75,000",
    savedLabel: "51% Lower Tax",
    savedAmount: "Saved ₹2,94,200",
    barPercent: "76%",
    tag: "UI Lead (Stripe / Inward)",
  },
];

export function HeroArtInteractive() {
  const shouldReduceMotion = useReducedMotion();
  const [isClusteredHovered, setIsClusteredHovered] = useState(false);
  const [activeProfileIdx, setActiveProfileIdx] = useState(0);
  const [isManuallyControlled, setIsManuallyControlled] = useState(false);

  // Automatic simulation cycle: rotates realistic creator figures every 4s
  useEffect(() => {
    if (isManuallyControlled) return;

    const interval = setInterval(() => {
      setActiveProfileIdx((prev) => (prev + 1) % PROFILES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isManuallyControlled]);

  // Inactivity timeout to resume auto-simulation if user clicked
  useEffect(() => {
    if (!isManuallyControlled) return;
    const timeout = setTimeout(() => setIsManuallyControlled(false), 9000);
    return () => clearTimeout(timeout);
  }, [isManuallyControlled, activeProfileIdx]);

  const profile = PROFILES[activeProfileIdx];

  const handleNextProfile = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsManuallyControlled(true);
    setActiveProfileIdx((prev) => (prev + 1) % PROFILES.length);
  };

  return (
    <div
      className="hero-art"
      aria-label="Interactive illustration of freelance income and tax summaries"
      onMouseEnter={() => setIsClusteredHovered(true)}
      onMouseLeave={() => setIsClusteredHovered(false)}
    >
      <div className="art-ring" />
      <div className="art-ring-2" />
      <div className="glass-blob" />

      {/* ── CARD 1: Gross Receipts Card (Continuous Levitation & Auto-Simulating) ── */}
      <motion.div
        className="hero-card-interactive-wrap receipt-wrap"
        initial={shouldReduceMotion ? false : { opacity: 0, x: 20, y: -15, rotate: -3 }}
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : {
                opacity: 1,
                x: 0,
                y: [0, -6, 0],
                rotate: [-3, -2, -3],
              }
        }
        transition={{
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.6, delay: 0.15 },
        }}
        whileHover={{
          scale: 1.05,
          rotate: 0,
          y: -8,
          zIndex: 25,
          transition: { type: "spring", stiffness: 350, damping: 20 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href="#interactive-estimator"
          className="hero-card receipt is-interactive-card"
          title="Click to simulate in full 44ADA estimator"
        >
          {/* Header Status Bar with Live AY indicator */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                fontSize: 9.5,
                fontWeight: 700,
                color: "#123d34",
                background: "rgba(18, 61, 52, 0.08)",
                padding: "2px 8px",
                borderRadius: 999,
              }}
            >
              <span className="pulse-dot-sm" />
              AY 2025-26 Live
            </span>

            <button
              type="button"
              onClick={handleNextProfile}
              title="Click to cycle next income scenario"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--muted)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: 2,
              }}
            >
              <RefreshCw size={11} />
            </button>
          </div>

          <div className="card-top-indicator">
            <small>Freelance Gross Receipts</small>
            <ArrowUpRight size={14} className="card-click-arrow" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={profile.turnover}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <strong>{profile.turnover}</strong>
              <hr />
              <small>{profile.tag}</small>
              <p style={{ fontSize: 11, color: "#686b61", margin: "4px 0 0" }}>
                {profile.role}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="card-click-hint">Click to simulate your income →</div>
        </Link>
      </motion.div>

      {/* ── CARD 2: Presumptive Profit & Tax Card (Continuous Levitation & Auto-Calculating) ── */}
      <motion.div
        className="hero-card-interactive-wrap tax-wrap"
        initial={shouldReduceMotion ? false : { opacity: 0, x: -20, y: 20, rotate: 2 }}
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : {
                opacity: 1,
                x: 0,
                y: [0, 6, 0],
                rotate: [2, 3, 2],
              }
        }
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.6, delay: 0.3 },
        }}
        whileHover={{
          scale: 1.06,
          rotate: 0,
          y: -10,
          zIndex: 26,
          transition: { type: "spring", stiffness: 350, damping: 20 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href="/tools/44ada-calculator"
          className="hero-card tax is-interactive-card"
          title="Click to launch full Section 44ADA Calculator"
        >
          <div className="card-top-indicator">
            <small>Presumptive Profit · 50%</small>
            <span className="card-tag-badge">
              <TrendingDown size={11} /> {profile.savedLabel}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={profile.profit}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <strong>{profile.profit}</strong>
              <small style={{ color: "#a7f3d0" }}>
                New Regime Tax: {profile.newTax} (vs {profile.oldTax} Old)
              </small>
            </motion.div>
          </AnimatePresence>

          <div className="mini-bar">
            <motion.div
              className="mini-bar-fill"
              animate={{ width: profile.barPercent }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          <div className="card-click-hint dark">
            <span>{profile.savedAmount}</span> · Launch Calculator ↗
          </div>
        </Link>
      </motion.div>

      {/* ── 4 SATELLITE CHIPS: BALANCED SYMMETRICAL FRAME & BLOOM ── */}
      {!shouldReduceMotion && (
        <div className="satellite-chips-orbit" aria-hidden="false">
          {/* Satellite 1: Section 44ADA (Top-Left) */}
          <motion.div
            className="satellite-chip sat-top-left"
            animate={
              isClusteredHovered
                ? { x: -24, y: -16, scale: 1.05, opacity: 1 }
                : { x: 26, y: 20, scale: 0.94, opacity: 0.95 }
            }
            transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.8 }}
            whileHover={{ scale: 1.12, zIndex: 40 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/tools/44ada-calculator"
              className="sat-pill green"
              title="Click to calculate Section 44ADA tax"
            >
              <span className="sat-icon">
                <Percent size={11} />
              </span>
              <div className="sat-text">
                <strong>Section 44ADA</strong>
                <small>50% Deemed Profit</small>
              </div>
              <ArrowUpRight size={10} className="sat-arrow" />
            </Link>
          </motion.div>

          {/* Satellite 2: Wise · Stripe USD FIRC (Top-Right) */}
          <motion.div
            className="satellite-chip sat-top-right"
            animate={
              isClusteredHovered
                ? { x: 24, y: -16, scale: 1.05, opacity: 1 }
                : { x: -26, y: 20, scale: 0.94, opacity: 0.95 }
            }
            transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.8 }}
            whileHover={{ scale: 1.12, zIndex: 40 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/guides/paypal-wise-stripe-firc-guide"
              className="sat-pill blue"
              title="Click to view Wise/Stripe e-FIRA guide"
            >
              <span className="sat-icon">
                <Globe2 size={11} />
              </span>
              <div className="sat-text">
                <strong>Wise · Stripe FIRC</strong>
                <small>Export Remittances</small>
              </div>
              <ArrowUpRight size={10} className="sat-arrow" />
            </Link>
          </motion.div>

          {/* Satellite 3: Form RFD-11 LUT (Bottom-Left) */}
          <motion.div
            className="satellite-chip sat-bot-left"
            animate={
              isClusteredHovered
                ? { x: -24, y: 16, scale: 1.05, opacity: 1 }
                : { x: 26, y: -18, scale: 0.94, opacity: 0.95 }
            }
            transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.8 }}
            whileHover={{ scale: 1.12, zIndex: 40 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/guides/renew-gst-lut-online"
              className="sat-pill gold"
              title="Click to read GST LUT renewal guide"
            >
              <span className="sat-icon">
                <FileText size={11} />
              </span>
              <div className="sat-text">
                <strong>Form RFD-11 LUT</strong>
                <small>Zero 18% IGST</small>
              </div>
              <ArrowUpRight size={10} className="sat-arrow" />
            </Link>
          </motion.div>

          {/* Satellite 4: TDS 194J Reconcile (Bottom-Right) */}
          <motion.div
            className="satellite-chip sat-bot-right"
            animate={
              isClusteredHovered
                ? { x: 24, y: 16, scale: 1.05, opacity: 1 }
                : { x: -26, y: -18, scale: 0.94, opacity: 0.95 }
            }
            transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.8 }}
            whileHover={{ scale: 1.12, zIndex: 40 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/guides/claim-tds-refund-freelancers"
              className="sat-pill emerald"
              title="Click to read TDS 194J refund guide"
            >
              <span className="sat-icon">
                <ShieldCheck size={11} />
              </span>
              <div className="sat-text">
                <strong>TDS 194J Reconcile</strong>
                <small>Excess Tax Refund</small>
              </div>
              <ArrowUpRight size={10} className="sat-arrow" />
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
}
