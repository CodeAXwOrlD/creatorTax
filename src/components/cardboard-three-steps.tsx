"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUp,
  FileText,
  Paperclip,
  CheckCircle2,
  Sparkles,
  Play,
  Pause,
  Download,
  Share2,
  MessageSquare,
  ShieldCheck,
  Percent,
} from "lucide-react";
import Link from "next/link";

interface Scenario {
  key: string;
  tag: string;
  fullText: string;
  result: string;
  link: string;
  linkText: string;
}

const SCENARIOS: Scenario[] = [
  {
    key: "swe",
    tag: "SWE (Upwork)",
    fullText: "Software Engineer earning ₹24L via Upwork and direct US contracts",
    result: "Eligible for Sec 44ADA (50% deemed profit) + Form RFD-11 GST LUT for zero IGST on exports.",
    link: "/tools/44ada-calculator",
    linkText: "Launch 44ADA Tax Model →",
  },
  {
    key: "video",
    tag: "Video / Wise",
    fullText: "Freelance video editor billing $3,000/mo from foreign agencies via Wise",
    result: "Zero IGST under annual LUT. Download e-FIRA with purpose code P0802 for cross-border compliance.",
    link: "/guides/paypal-wise-stripe-firc-guide",
    linkText: "View Wise e-FIRA Guide →",
  },
  {
    key: "tds",
    tag: "194J Refund",
    fullText: "Indian client deducted 10% TDS under 194J instead of 1% or 2%",
    result: "Section 194J rectification available. Reconcile 26AS/AIS to claim excess TDS refund in ITR.",
    link: "/guides/claim-tds-refund-freelancers",
    linkText: "Claim TDS Refund Guide →",
  },
];

export function CardboardThreeSteps() {
  // ── Card 1: Automatic Typewriter + Interactive Prompt State ──
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const currentScenario = SCENARIOS[scenarioIdx];

  // Automatic Typewriter Effect loop
  useEffect(() => {
    if (isUserInteracting) return;

    let charIdx = 0;
    const targetText = currentScenario.fullText;
    setDisplayedText("");
    setIsSubmitted(false);
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      charIdx++;
      setDisplayedText(targetText.slice(0, charIdx));

      if (charIdx >= targetText.length) {
        clearInterval(typeInterval);
        setIsTyping(false);

        // Auto-submit after typing finishes
        setTimeout(() => {
          setIsSubmitted(true);

          // Hold answer for 3.8s then advance to next scenario
          setTimeout(() => {
            setScenarioIdx((prev) => (prev + 1) % SCENARIOS.length);
          }, 3800);
        }, 600);
      }
    }, 45);

    return () => clearInterval(typeInterval);
  }, [scenarioIdx, isUserInteracting]);

  const handleSelectPreset = (idx: number) => {
    setIsUserInteracting(true);
    setScenarioIdx(idx);
    setDisplayedText(SCENARIOS[idx].fullText);
    setIsSubmitted(true);
  };

  const handleManualSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsUserInteracting(true);
    setIsSubmitted(true);
  };

  // ── Card 2: Automatic Video Timeline Scrubber State ──
  const [playheadPos, setPlayheadPos] = useState(15);
  const [isPlaying, setIsPlaying] = useState(true);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Automatic playback loop advancing scrubber smoothly
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setPlayheadPos((prev) => {
        if (prev >= 94) return 8; // seamless loop back
        return prev + 1.2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const TIMELINE_STAGES = [
    { at: 8, label: "00:00 · 44ADA Check", title: "Eligibility Validated", clip: "b1" },
    { at: 32, label: "00:45 · GST RFD-11", title: "LUT Auto-Generated", clip: "b2" },
    { at: 60, label: "01:30 · Wise P0802", title: "e-FIRA Purpose Linked", clip: "b3" },
    { at: 82, label: "02:15 · ITR-4 File", title: "Presumptive Tax Zero", clip: "b4" },
  ];

  const currentStage =
    TIMELINE_STAGES.slice().reverse().find((s) => playheadPos >= s.at) ||
    TIMELINE_STAGES[0];

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (clickX / rect.width) * 100));
    setPlayheadPos(pct);
  };

  return (
    <div className="cardboard-three-steps-root">
      <div className="cardboard-cards-grid">
        {/* ── CARD 1: Describe It (Auto-Typing & Interactive Chat) ── */}
        <div className="cardboard-card">
          <div className="card-media-canvas card-input-canvas">
            <div className="canvas-header-tag">
              <span className="dot-green" />
              <span>Interactive Tax Assistant · Live Demo</span>
              <span className="auto-live-badge">Auto-Playing</span>
            </div>

            {/* Quick Scenario Preset Chips */}
            <div className="prompt-presets-row">
              {SCENARIOS.map((sc, i) => (
                <button
                  key={sc.key}
                  type="button"
                  className={`prompt-chip ${scenarioIdx === i ? "active" : ""}`}
                  onClick={() => handleSelectPreset(i)}
                >
                  {sc.tag}
                </button>
              ))}
            </div>

            {/* Interactive Prompt Input Box */}
            <form onSubmit={handleManualSubmit} className="cardboard-prompt-box">
              <div className="input-with-cursor">
                <input
                  type="text"
                  value={displayedText}
                  onChange={(e) => {
                    setIsUserInteracting(true);
                    setDisplayedText(e.target.value);
                    setIsSubmitted(false);
                  }}
                  onFocus={() => setIsUserInteracting(true)}
                  className="cardboard-input"
                  placeholder="Describe your freelance income..."
                />
                {isTyping && <span className="blinking-cursor">|</span>}
              </div>

              <div className="prompt-footer-row">
                <div className="prompt-attachments">
                  <span className="attachment-pill">
                    <FileText size={10} /> contract.pdf
                  </span>
                  <span className="attachment-pill">
                    <Paperclip size={10} /> foreign_firc
                  </span>
                </div>

                <motion.button
                  type="submit"
                  className="cardboard-send-btn"
                  animate={isSubmitted ? { scale: [1, 1.25, 1], background: "#5be0a0" } : {}}
                  title="Submit and navigate to statutory advice"
                >
                  <ArrowUp size={14} />
                </motion.button>
              </div>
            </form>

            {/* Dynamic Submission Result Card */}
            <AnimatePresence mode="wait">
              {isSubmitted && (
                <motion.div
                  key={currentScenario.key}
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="prompt-response-card"
                >
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <CheckCircle2
                      size={14}
                      className="text-emerald"
                      style={{ marginTop: 2, flexShrink: 0 }}
                    />
                    <div>
                      <p className="prompt-result-text">{currentScenario.result}</p>
                      <Link href={currentScenario.link} className="prompt-action-link">
                        {currentScenario.linkText}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="cardboard-card-info">
            <h3 className="cardboard-step-title">Describe it</h3>
            <p className="cardboard-step-desc">
              Type or pick your income setup. CreatorTax automatically builds your statutory regime,
              LUT zero-rating certificate, and advance tax roadmap.
            </p>
          </div>
        </div>

        {/* ── CARD 2: Direct It (Auto-Moving Timeline Scrubber & Video Cuts) ── */}
        <div className="cardboard-card">
          <div className="card-media-canvas card-timeline-canvas">
            {/* Chat speech bubble overlays */}
            <div className="timeline-chat-bubble top">
              <span>Make the LUT zero-rated and add purpose code</span>
            </div>
            <div className="timeline-chat-bubble bot">
              <CheckCircle2 size={11} className="text-emerald" />
              <span>Done. Form RFD-11 active &amp; P0802 matched.</span>
            </div>

            {/* Interactive & Auto-Moving Video Editor Timeline Surface */}
            <div
              className="interactive-timeline-surface"
              ref={timelineRef}
              onClick={handleTimelineClick}
              title="Click or drag anywhere to scrub the timeline"
            >
              {/* Time Ruler */}
              <div className="timeline-ruler">
                <span>0:00</span>
                <span>0:45</span>
                <span>01:30</span>
                <span>02:15</span>
              </div>

              {/* Video Clip Blocks Strip (Active block highlights dynamically) */}
              <div className="timeline-clips-track">
                <div
                  className={`timeline-clip-block b1 ${
                    currentStage.clip === "b1" ? "active-clip" : ""
                  }`}
                >
                  <span>GST RFD-11</span>
                </div>
                <div
                  className={`timeline-clip-block b2 ${
                    currentStage.clip === "b2" ? "active-clip" : ""
                  }`}
                >
                  <span>Wise P0802</span>
                </div>
                <div
                  className={`timeline-clip-block b3 ${
                    currentStage.clip === "b3" ? "active-clip" : ""
                  }`}
                >
                  <span>Sec 44ADA</span>
                </div>
                <div
                  className={`timeline-clip-block b4 ${
                    currentStage.clip === "b4" ? "active-clip" : ""
                  }`}
                >
                  <span>ITR-4 JSON</span>
                </div>
              </div>

              {/* Sound Waveform / Audio track */}
              <div className="timeline-audio-track">
                <motion.div
                  className="waveform-line"
                  animate={{ opacity: isPlaying ? [0.35, 0.7, 0.35] : 0.35 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="audio-label">compliance_sync.wav · Active</span>
              </div>

              {/* Auto-moving & Draggable Playhead Scrubber */}
              <div
                className="timeline-playhead-line"
                style={{ left: `${playheadPos}%` }}
              >
                <div className="playhead-handle">
                  <span>{currentStage.label.split(" · ")[0]}</span>
                </div>
              </div>
            </div>

            {/* Scrubber Status & Play/Pause Controls */}
            <div className="timeline-scrub-indicator">
              <span className="scrub-badge">
                <span className="pulse-dot-sm" />
                {currentStage.title}
              </span>
              <button
                type="button"
                className="scrub-play-btn"
                onClick={() => setIsPlaying(!isPlaying)}
                title="Toggle timeline playback"
              >
                {isPlaying ? <Pause size={10} /> : <Play size={10} />}
                <span>{isPlaying ? "Auto-Scrubbing" : "Play Scrub"}</span>
              </button>
            </div>
          </div>

          <div className="cardboard-card-info">
            <h3 className="cardboard-step-title">Direct it</h3>
            <p className="cardboard-step-desc">
              Watch the compliance scrubber glide across your financial year. Click any point to inspect
              statutory thresholds, LUT renewal dates, and quarterly advance tax milestones.
            </p>
          </div>
        </div>

        {/* ── CARD 3: Share It (Continuous Orbiting Radar Movement) ── */}
        <div className="cardboard-card">
          <div className="card-media-canvas card-radar-canvas">
            {/* Concentric Radar Orbit Rings */}
            <div className="radar-ring r1" />
            <div className="radar-ring r2" />
            <div className="radar-ring r3" />

            {/* Rotating Sonar Sweep Line */}
            <div className="radar-sweep-scanner" />

            {/* Central Pulse Hub (CreatorTax Shield) */}
            <div className="radar-center-hub">
              <ShieldCheck size={24} className="text-emerald" />
              <div className="hub-ping-ring" />
            </div>

            {/* Orbiting & Floating Elements with Continuous Motion */}
            <motion.div
              className="radar-floating-chip chip-top-right is-clickable"
              animate={{
                y: [0, -8, 0],
                x: [0, 5, 0],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, zIndex: 20 }}
            >
              <Download size={11} className="text-emerald" />
              <span>Export ITR-4 JSON</span>
            </motion.div>

            <motion.div
              className="radar-floating-chip chip-top-left is-clickable"
              animate={{
                y: [0, 7, 0],
                x: [0, -4, 0],
              }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.1, zIndex: 20 }}
            >
              <CheckCircle2 size={11} style={{ color: "#5be0a0" }} />
              <span>Zero IGST LUT Active</span>
            </motion.div>

            <motion.div
              className="radar-floating-chip chip-bot-left is-clickable"
              animate={{
                y: [0, -6, 0],
                x: [0, -6, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.1, zIndex: 20 }}
            >
              <Share2 size={11} style={{ color: "#38bdf8" }} />
              <span>Shared with CA</span>
            </motion.div>

            <motion.div
              className="radar-floating-chip chip-bot-right is-clickable"
              animate={{
                y: [0, 6, 0],
                x: [0, 5, 0],
              }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              whileHover={{ scale: 1.1, zIndex: 20 }}
            >
              <MessageSquare size={11} style={{ color: "#f59e0b" }} />
              <span>3 Form 16A Matched</span>
            </motion.div>

            {/* Orbiting Freelancer Avatars */}
            <div className="radar-orbit-track track-inner">
              <div className="av-circle ak" title="Aditya (Bengaluru)">
                AK
              </div>
            </div>

            <div className="radar-orbit-track track-outer">
              <div className="av-circle ps" title="Priya (Mumbai)">
                PS
              </div>
            </div>
          </div>

          <div className="cardboard-card-info">
            <h3 className="cardboard-step-title">Share it</h3>
            <p className="cardboard-step-desc">
              Export verified ITR-4 computation summaries, copy statutory LUT invoicing legends, or
              collaborate with your tax accountant in a single click.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
