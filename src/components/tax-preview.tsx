"use client";

import { useMemo, useState } from "react";
import { formatINR, calculateSection44ADA } from "@/lib/tax";
import { FinancialCalcIcon } from "./brand-and-doc-icons";

export function TaxPreview() {
  const [gross, setGross] = useState(1800000);
  
  const result = useMemo(() => {
    return calculateSection44ADA({
      grossReceipts: gross,
      tdsDeducted: 0,
      cashReceiptsPercent: 0
    });
  }, [gross]);

  return (
    <div className="calc-preview" aria-label="Interactive Section 44ADA Preview">
      <label htmlFor="preview-income">Illustrative Gross Annual Receipts</label>
      <div className="calc-number">{formatINR(gross)}</div>

      <input
        id="preview-income"
        type="range"
        min="200000"
        max="7500000"
        step="50000"
        value={gross}
        onChange={(e) => setGross(Number(e.target.value))}
        aria-label="Gross professional receipts in rupees"
      />

      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#94a3b8", marginTop: 8, fontWeight: 500 }}>
        <span>₹2 Lakh</span>
        <span>₹75 Lakh (Digital Limit)</span>
      </div>

      <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label style={{ fontSize: 11.5, color: "#94a3b8", display: "block", fontWeight: 600 }}>
              Presumptive Profit (50%)
            </label>
            <div style={{ fontFamily: "var(--font-serif, Georgia, serif)", fontSize: 26, fontWeight: 700, margin: "6px 0 0", color: "#f8fafc" }}>
              {formatINR(result.presumptiveProfit)}
            </div>
          </div>

          <div>
            <label style={{ fontSize: 11.5, color: "#94a3b8", display: "block", fontWeight: 600 }}>
              New Regime Tax (AY 25-26)
            </label>
            <div style={{ fontFamily: "var(--font-serif, Georgia, serif)", fontSize: 26, fontWeight: 700, margin: "6px 0 0", color: "#10B981" }}>
              {formatINR(result.newRegime.totalTaxLiability)}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 20,
          padding: "11px 14px",
          background: "rgba(37, 99, 235, 0.12)",
          border: "1px solid rgba(37, 99, 235, 0.28)",
          borderRadius: 8,
          fontSize: 11.5,
          display: "flex",
          alignItems: "center",
          gap: 8,
          color: "#bfdbfe",
          lineHeight: 1.5,
        }}
      >
        <FinancialCalcIcon size={14} className="text-cobalt" />
        <span>
          {result.presumptiveProfit <= 700000
            ? "Zero tax payable thanks to Section 87A full rebate under New Regime!"
            : `Effective tax rate: ${((result.newRegime.totalTaxLiability / gross) * 100).toFixed(1)}% of gross receipts.`}
        </span>
      </div>

      <p className="source-note" style={{ marginTop: 12 }}>
        Illustrative estimate under Section 44ADA &amp; 115BAC. Assumes no other income heads. Verify eligibility with your tax consultant.
      </p>
    </div>
  );
}
