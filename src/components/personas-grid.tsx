"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Code2,
  Video,
  Palette,
  PenTool,
  Cpu,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface Persona {
  id: string;
  icon: typeof Code2;
  title: string;
  sub: string;
  platformTags: string[];
  taxBenefit: string;
  recommendedGuide: {
    title: string;
    href: string;
  };
  highlightColor: string;
}

const PERSONAS: Persona[] = [
  {
    id: "swe",
    icon: Code2,
    title: "Software Engineers",
    sub: "Remote fullstack, backend, frontend devs billing global clients directly or via marketplaces.",
    platformTags: ["Upwork", "Toptal", "Deel", "Direct Wire"],
    taxBenefit: "Declare only 50% profit under Sec 44ADA up to ₹75 Lakh receipts",
    recommendedGuide: {
      title: "44ADA Calculator & Eligibility",
      href: "/tools/44ada-calculator",
    },
    highlightColor: "#5be0a0",
  },
  {
    id: "video",
    icon: Video,
    title: "Video Editors & Animators",
    sub: "YouTube editors, motion designers, commercial colorists with high workstation expenses.",
    platformTags: ["YouTube", "Agencies", "Post-Houses"],
    taxBenefit: "Compare 44ADA vs Actual Expense Depreciation for M-series/GPU rigs",
    recommendedGuide: {
      title: "PayPal & Wise e-FIRA Guide",
      href: "/guides/paypal-wise-stripe-firc-guide",
    },
    highlightColor: "#f59e0b",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX & Product Designers",
    sub: "Product designers, branding consultants, design system leads on retainer contracts.",
    platformTags: ["Figma", "Contra", "Dribbble", "Retainers"],
    taxBenefit: "Zero 18% IGST on foreign client deliverables via annual GST LUT",
    recommendedGuide: {
      title: "Renew GST LUT RFD-11",
      href: "/guides/renew-gst-lut-online",
    },
    highlightColor: "#c16b43",
  },
  {
    id: "creators",
    icon: PenTool,
    title: "Content Creators & Writers",
    sub: "Technical writers, newsletters, YouTubers with sponsorship & affiliate income.",
    platformTags: ["Substack", "AdSense", "Brand Deals"],
    taxBenefit: "Navigate Section 194R on brand gift items & ₹20L GST registration thresholds",
    recommendedGuide: {
      title: "Claim TDS 194J Refunds",
      href: "/guides/claim-tds-refund-freelancers",
    },
    highlightColor: "#38bdf8",
  },
  {
    id: "consultants",
    icon: Cpu,
    title: "Tech & Cloud Architects",
    sub: "DevOps consultants, cybersecurity auditors, AI engineers on high-value contracts.",
    platformTags: ["Direct B2B", "Hourly Advisory", "US/EU Entities"],
    taxBenefit: "Single advance tax installment by March 15th with zero quarterly penalty",
    recommendedGuide: {
      title: "Advance Tax Deadlines",
      href: "/guides/advance-tax-deadlines-penalties",
    },
    highlightColor: "#a855f7",
  },
  {
    id: "appdev",
    icon: Smartphone,
    title: "Mobile App Developers",
    sub: "Indie hackers, iOS/Android contractors with in-app sales & contract billings.",
    platformTags: ["App Store", "Google Play", "Client Apps"],
    taxBenefit: "Purpose codes for cross-border software downloads & 15CA/15CB filings",
    recommendedGuide: {
      title: "Foreign Remittance Compliance",
      href: "/guides/paypal-wise-stripe-firc-guide",
    },
    highlightColor: "#10b981",
  },
];

export function PersonasGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="personas-bento-grid">
      {PERSONAS.map((p) => {
        const Icon = p.icon;
        const isHovered = hoveredId === p.id;

        return (
          <motion.div
            key={p.id}
            className={`persona-creative-card ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredId(p.id)}
            onMouseLeave={() => setHoveredId(null)}
            whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
          >
            {/* Top gradient accent line */}
            <div
              className="persona-card-accent"
              style={{
                background: `linear-gradient(90deg, transparent, ${p.highlightColor}, transparent)`,
              }}
            />

            <div className="persona-card-header">
              <div
                className="persona-icon-container"
                style={{
                  background: `${p.highlightColor}18`,
                  color: p.highlightColor,
                  borderColor: `${p.highlightColor}33`,
                }}
              >
                <Icon size={22} />
              </div>

              <div className="persona-meta">
                <h3 className="persona-title">{p.title}</h3>
                <div className="platform-tags">
                  {p.platformTags.map((tag) => (
                    <span key={tag} className="platform-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="persona-description">{p.sub}</p>

            {/* Tax Benefit Callout */}
            <div className="persona-benefit-box">
              <div className="benefit-icon-dot" style={{ background: p.highlightColor }} />
              <span>{p.taxBenefit}</span>
            </div>

            {/* Action Link */}
            <Link href={p.recommendedGuide.href} className="persona-guide-link">
              <span>{p.recommendedGuide.title}</span>
              <ArrowRight size={13} className="link-arrow" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
