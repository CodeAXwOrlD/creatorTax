"use client";

import { useMemo, useState } from "react";
import { formatINR, calculateSection44ADA } from "@/lib/tax";
import { Sparkles } from "lucide-react";

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

      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#d3ded7", marginTop: 8 }}>
        <span>₹2 Lakh</span>
        <span>₹75 Lakh (Digital Limit)</span>
      </div>

      <div style={{ marginTop: 22, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div>
            <label style={{ fontSize: 11, color: "#c9d8d0", display: "block" }}>
              Presumptive Profit (50%)
            </label>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 700, margin: "6px 0 0" }}>
              {formatINR(result.presumptiveProfit)}
            </div>
          </div>

          <div>
            <label style={{ fontSize: 11, color: "#c9d8d0", display: "block" }}>
              New Regime Tax (AY 25-26)
            </label>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 700, margin: "6px 0 0", color: "#a7f3d0" }}>
              {formatINR(result.newRegime.totalTaxLiability)}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 18,
          padding: "10px 12px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: 6,
          fontSize: 11,
          display: "flex",
          alignItems: "center",
          gap: 6
        }}
      >
        <Sparkles size={14} color="#f4d03f" style={{ flexShrink: 0 }} />
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
