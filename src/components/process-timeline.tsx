"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Calculator,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileText,
  Percent,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { BorderBeam } from "./border-beam";

interface ProcessStep {
  id: string;
  num: string;
  tag: string;
  icon: typeof BookOpen;
  title: string;
  summary: string;
  body: string;
  featurePills: string[];
  linkHref: string;
  linkText: string;
  visualPreview: {
    type: "guides" | "calculator" | "statute";
    headline: string;
    subtext: string;
    badge: string;
  };
}

const STEPS: ProcessStep[] = [
  {
    id: "step-1",
    num: "01",
    tag: "Discovery & Analysis",
    icon: BookOpen,
    title: "Find your exact scenario",
    summary: "Cut through internet confusion with statute-level clarity.",
    body: "Browse 8+ source-cited guides covering GST LUT, TDS refunds, Section 44ADA, foreign currency remittances, and expense deductions — all tailored specifically for Indian software engineers, video editors, and creators.",
    featurePills: ["Section 44ADA Presumptive", "Form RFD-11 LUT", "PayPal & Wise e-FIRA", "TDS 194J Credits"],
    linkHref: "/guides",
    linkText: "Explore Knowledge Base",
    visualPreview: {
      type: "guides",
      headline: "8 Comprehensive Guides",
      subtext: "Primary-source cited against CGST & IT Act",
      badge: "AY 2025-26 Live",
    },
  },
  {
    id: "step-2",
    num: "02",
    tag: "Local Computation",
    icon: Calculator,
    title: "Run the numbers yourself",
    summary: "100% private, client-side 44ADA vs Regular Regime modeling.",
    body: "Use our zero-server 44ADA tax estimator. No signup, no phone number, no data leaves your browser. Instantly see your 50% presumptive profit, Section 87A rebate eligibility, and compare New vs Old Regime outcomes.",
    featurePills: ["50% Deemed Profit", "₹75L Digital Receipts", "Section 87A Rebate", "100% Private Browser Execution"],
    linkHref: "/tools/44ada-calculator",
    linkText: "Launch 44ADA Calculator",
    visualPreview: {
      type: "calculator",
      headline: "₹18,00,000 ➔ ₹41,600 Tax",
      subtext: "Effective rate: 2.3% of gross income",
      badge: "57% Tax Reduction",
    },
  },
  {
    id: "step-3",
    num: "03",
    tag: "Execution & Filing",
    icon: CheckCircle2,
    title: "File with confidence",
    summary: "Verified portal workflows without expensive middleman fees.",
    body: "Every guide links directly to official Income Tax e-filing, GST Portal, and RBI Master Directions. Walk through step-by-step screenshots for Form RFD-11 LUT submission, 26AS matching, and advance tax payments.",
    featurePills: ["March 15 Single Payment", "Zero IGST on Invoices", "FIRC Bank Portal Steps", "Verified Statute Links"],
    linkHref: "/guides/renew-gst-lut-online",
    linkText: "View LUT Workflow",
    visualPreview: {
      type: "statute",
      headline: "Statutory Law Citing",
      subtext: "Directly linking Income Tax Act 1961 & CGST circulars",
      badge: "Audit-Proof Rigor",
    },
  },
];

export function ProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const active = STEPS[activeStepIndex];
  const Icon = active.icon;

  return (
    <div className="process-timeline-root">
      {/* ── Top Step Selection Rail (Horizontal Tabs with Connected Energy Beam) ── */}
      <div className="timeline-rail-container">
        <div className="timeline-rail-track">
          <div
            className="timeline-rail-progress"
            style={{
              width: `${(activeStepIndex / (STEPS.length - 1)) * 100}%`,
            }}
          />
        </div>

        <div className="timeline-steps-nav" role="tablist" aria-label="Process steps navigation">
          {STEPS.map((step, idx) => {
            const isCurrent = activeStepIndex === idx;
            const isCompleted = activeStepIndex > idx;

            return (
              <button
                key={step.id}
                type="button"
                role="tab"
                className={`timeline-step-btn ${isCurrent ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                onClick={() => setActiveStepIndex(idx)}
                aria-selected={isCurrent}
              >
                <div className="step-btn-badge">
                  <span>{step.num}</span>
                  {isCurrent && (
                    <motion.div
                      layoutId="timeline-glow-ring"
                      className="step-btn-ring"
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                </div>
                <div className="step-btn-info">
                  <span className="step-btn-tag">{step.tag}</span>
                  <strong className="step-btn-title">{step.title}</strong>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Active Stage Dynamic Card Presentation ── */}
      <div className="timeline-stage-viewport">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -40, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="timeline-stage-card"
          >
            <BorderBeam size={220} duration={10} colorFrom="#5be0a0" colorTo="#c8962a" />

            <div className="timeline-stage-grid">
              {/* Left Column: Details & Step Execution */}
              <div className="stage-content">
                <div className="stage-num-pill">
                  <Icon size={16} className="text-emerald" />
                  <span>PHASE {active.num} · {active.tag.toUpperCase()}</span>
                </div>

                <h3 className="stage-heading">{active.title}</h3>
                <p className="stage-summary">{active.summary}</p>
                <p className="stage-body">{active.body}</p>

                {/* Feature Chips */}
                <div className="stage-pills-list">
                  {active.featurePills.map((pill) => (
                    <span key={pill} className="stage-pill">
                      <CheckCircle2 size={12} className="text-emerald" />
                      {pill}
                    </span>
                  ))}
                </div>

                <div className="stage-action-row">
                  <Link href={active.linkHref} className="btn">
                    {active.linkText} <ArrowRight size={15} />
                  </Link>

                  {/* Step navigation controls */}
                  <div className="stage-step-controllers">
                    <button
                      type="button"
                      className="stage-ctrl-btn"
                      disabled={activeStepIndex === 0}
                      onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                      title="Previous Step"
                    >
                      ← Prev
                    </button>
                    <span className="stage-ctrl-indicator">
                      {activeStepIndex + 1} / {STEPS.length}
                    </span>
                    <button
                      type="button"
                      className="stage-ctrl-btn"
                      disabled={activeStepIndex === STEPS.length - 1}
                      onClick={() => setActiveStepIndex((prev) => Math.min(STEPS.length - 1, prev + 1))}
                      title="Next Step"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Visual Artifact Card */}
              <div className="stage-visual-container">
                <motion.div
                  className="stage-visual-card"
                  whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.25 } }}
                >
                  <div className="stage-visual-header">
                    <span className="stage-visual-badge">
                      <Sparkles size={11} className="text-gold" />
                      {active.visualPreview.badge}
                    </span>
                    <span className="pulse-dot-sm" />
                  </div>

                  <div className="stage-visual-content">
                    <h4 className="stage-visual-headline">
                      {active.visualPreview.headline}
                    </h4>
                    <p className="stage-visual-subtext">
                      {active.visualPreview.subtext}
                    </p>
                  </div>

                  {/* Micro Visual Decor based on step */}
                  {active.id === "step-1" && (
                    <div className="stage-micro-list">
                      <div className="stage-micro-row">
                        <FileText size={14} className="text-emerald" />
                        <span>Form RFD-11 LUT Filing</span>
                        <strong className="ml-auto">Active</strong>
                      </div>
                      <div className="stage-micro-row">
                        <Percent size={14} className="text-gold" />
                        <span>Presumptive 50% Profit</span>
                        <strong className="ml-auto">ITR-4</strong>
                      </div>
                      <div className="stage-micro-row">
                        <ShieldCheck size={14} style={{ color: "#38bdf8" }} />
                        <span>Wise / Stripe e-FIRA</span>
                        <strong className="ml-auto">Secured</strong>
                      </div>
                    </div>
                  )}

                  {active.id === "step-2" && (
                    <div className="stage-micro-calc">
                      <div className="calc-mini-row">
                        <span>Digital Gross Receipts</span>
                        <strong>₹18,00,000</strong>
                      </div>
                      <div className="calc-mini-bar-wrap">
                        <div className="calc-mini-bar-green" style={{ width: "50%" }} />
                        <div className="calc-mini-bar-tax" style={{ width: "2.3%" }} />
                      </div>
                      <div className="calc-mini-row sub">
                        <span style={{ color: "#5be0a0" }}>● Deemed Profit: ₹9L</span>
                        <span style={{ color: "#f59e0b" }}>● Tax: ₹41.6K</span>
                      </div>
                    </div>
                  )}

                  {active.id === "step-3" && (
                    <div className="stage-micro-seal">
                      <div className="seal-badge">
                        <ShieldCheck size={28} className="text-emerald" />
                      </div>
                      <div className="seal-meta">
                        <strong>Source-Cited Compliance</strong>
                        <small>Income Tax Act § 44ADA(1) · CGST Rule 96A</small>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
