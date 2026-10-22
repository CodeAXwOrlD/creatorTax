"use client";

import { useMemo, useState } from "react";
import { formatINR, calculateSection44ADA } from "@/lib/tax";

const PRESETS = [1000000, 1800000, 2500000, 5000000, 7500000];

export function TaxPreview() {
  const [gross, setGross] = useState(1800000);

  const result = useMemo(() => {
    return calculateSection44ADA({
      grossReceipts: gross,
      tdsDeducted: 0,
      cashReceiptsPercent: 0
    });
  }, [gross]);

  const effectiveRate = ((result.newRegime.totalTaxLiability / gross) * 100).toFixed(1);

  return (
    <div
      style={{
        background: "#182432",
        border: "1px solid rgba(154, 167, 180, 0.18)",
        borderRadius: 16,
        padding: "32px 28px",
        boxShadow: "0 24px 60px -12px rgba(24, 36, 50, 0.45)",
        color: "#F6F1E8",
      }}
      aria-label="Interactive Section 44ADA Preview"
    >
      {/* Top Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", fontWeight: 700 }}>
          Annual Gross Receipts
        </span>
        <span style={{ fontSize: 11, color: "#64748b", fontWeight: 600, background: "rgba(255,255,255,0.06)", padding: "2px 8px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.08)" }}>
          AY 2025–26
        </span>
      </div>

      {/* Massive Tabular Number */}
      <div style={{
        fontSize: "clamp(36px, 4.2vw, 46px)",
        fontWeight: 800,
        color: "#ffffff",
        letterSpacing: "-0.03em",
        fontVariantNumeric: "tabular-nums",
        lineHeight: 1.05,
        marginBottom: 16
      }}>
        {formatINR(gross)}
      </div>

      {/* Quick Preset Buttons (Vercel Style) */}
      <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
        {PRESETS.map((p) => {
          const active = gross === p;
          return (
            <button
              key={p}
              type="button"
              onClick={() => setGross(p)}
              style={{
                fontSize: 11.5,
                fontWeight: active ? 700 : 500,
                padding: "4px 10px",
                borderRadius: 6,
                border: active ? "1px solid #ffffff" : "1px solid rgba(255, 255, 255, 0.12)",
                background: active ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                color: active ? "#0b0f19" : "#cbd5e1",
                cursor: "pointer",
                transition: "all 0.15s ease"
              }}
            >
              ₹{(p / 100000).toFixed(0)}L
            </button>
          );
        })}
      </div>

      {/* Range Slider */}
      <input
        id="preview-income"
        type="range"
        min="200000"
        max="7500000"
        step="50000"
        value={gross}
        onChange={(e) => setGross(Number(e.target.value))}
        aria-label="Gross professional receipts in rupees"
        style={{
          width: "100%",
          accentColor: "#ffffff",
          cursor: "pointer",
          margin: "4px 0 6px"
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#64748b", fontWeight: 500, marginBottom: 24 }}>
        <span>₹2 Lakh</span>
        <span>₹75 Lakh (Digital Cap)</span>
      </div>

      {/* Breakdown Matrix */}
      <div style={{
        paddingTop: 20,
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
      }}>
        <div>
          <span style={{ fontSize: 11.5, color: "#94a3b8", display: "block", fontWeight: 600 }}>
            Presumptive Profit (50%)
          </span>
          <div style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#f8fafc",
            fontVariantNumeric: "tabular-nums",
            marginTop: 4,
            letterSpacing: "-0.02em"
          }}>
            {formatINR(result.presumptiveProfit)}
          </div>
        </div>

        <div>
          <span style={{ fontSize: 11.5, color: "#94a3b8", display: "block", fontWeight: 600 }}>
            New Regime Tax (Default)
          </span>
          <div style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#ffffff",
            fontVariantNumeric: "tabular-nums",
            marginTop: 4,
            letterSpacing: "-0.02em"
          }}>
            {formatINR(result.newRegime.totalTaxLiability)}
          </div>
        </div>
      </div>

      {/* Status Verdict Pill */}
      <div style={{
        marginTop: 22,
        padding: "10px 14px",
        background: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 8,
        fontSize: 12,
        color: "#cbd5e1",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8
      }}>
        <span>
          {result.presumptiveProfit <= 700000
            ? "Full rebate under Section 87A: Zero net tax payable."
            : `Effective statutory rate: ${effectiveRate}% of receipts.`}
        </span>
        <span style={{ fontSize: 10.5, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Sec 44ADA
        </span>
      </div>

      <p style={{ margin: "14px 0 0", fontSize: 11, color: "#64748b", lineHeight: 1.55 }}>
        Simulation based on Section 44ADA and 115BAC for individual professionals with no other income heads.
      </p>
    </div>
  );
}
