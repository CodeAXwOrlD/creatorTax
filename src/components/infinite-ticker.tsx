"use client";

import React from "react";
import { Sparkles, ShieldCheck, Zap, Globe2, FileCheck2, Calculator, CheckCircle2 } from "lucide-react";

const TICKER_ITEMS = [
  { icon: ShieldCheck, label: "Section 44ADA Presumptive Scheme" },
  { icon: Globe2, label: "Wise, Stripe & PayPal USD Remittances" },
  { icon: FileCheck2, label: "Form RFD-11 GST LUT Zero IGST" },
  { icon: Calculator, label: "100% Client-Side Private Computation" },
  { icon: Zap, label: "Section 194J TDS Reconciliations" },
  { icon: CheckCircle2, label: "AY 2025-26 & Finance Act Compliant" },
  { icon: Sparkles, label: "Upwork, Toptal & Deel Remote Contractors" },
];

export function InfiniteTicker() {
  return (
    <div className="ticker-wrapper" aria-label="CreatorTax ecosystem highlights">
      <div className="ticker-fade left" />
      <div className="ticker-track">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="ticker-item">
              <Icon size={13} className="ticker-icon" />
              <span>{item.label}</span>
              <span className="ticker-dot">·</span>
            </div>
          );
        })}
      </div>
      <div className="ticker-fade right" />
    </div>
  );
}
