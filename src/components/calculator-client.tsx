"use client";

import { useMemo, useState } from "react";
import {
  calculateSection44ADA,
  formatINR,
  type SpecifiedProfession
} from "@/lib/tax";
import { AlertCircle } from "lucide-react";

export function CalculatorClient() {
  const [grossInput, setGrossInput] = useState("1800000");
  const [tdsInput, setTdsInput] = useState("90000");
  const [cashPercent, setCashPercent] = useState<number>(0);
  const [profession, setProfession] = useState<SpecifiedProfession>("software_development_it");
  const [chapter6A, setChapter6A] = useState("150000");
  const [activeTab, setActiveTab] = useState<"compare" | "new" | "old">("compare");

  const gross = Number(grossInput) || 0;
  const tds = Number(tdsInput) || 0;
  const deductions = Number(chapter6A) || 0;

  const result = useMemo(() => {
    return calculateSection44ADA({
      grossReceipts: gross,
      tdsDeducted: tds,
      cashReceiptsPercent: cashPercent,
      profession,
      chapter6ADeductions: deductions
    });
  }, [gross, tds, cashPercent, profession, deductions]);

  const isEligibleProfession = profession !== "content_creator_other";
  const isRefund = result.newRegime.netBalancePayableOrRefund <= 0;
  const netAmount = Math.abs(result.newRegime.netBalancePayableOrRefund);

  return (
    <section className="container calculator-grid" aria-label="Section 44ADA Tax Calculator">
      {/* ─── Left Column: Financial Input Parameters ─── */}
      <div className="panel" style={{ padding: "32px 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, paddingBottom: 16, borderBottom: "1px solid var(--line)" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.01em" }}>
              Financial Parameters
            </h2>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--muted)" }}>
              Receipts, TDS deductions &amp; eligible regime deductions
            </p>
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, background: "var(--paper-deep)", color: "var(--ink-2)", padding: "4px 9px", borderRadius: 6, border: "1px solid var(--line)" }}>
            AY 2025–26
          </span>
        </div>

        {/* 1. Gross Receipts */}
        <div className="form-row">
          <label htmlFor="gross-receipts" style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)", display: "flex", justifyContent: "space-between" }}>
            <span>Annual Gross Receipts</span>
            <span style={{ fontWeight: 400, color: "var(--muted)", fontSize: 12 }}>Before platform fees</span>
          </label>
          <div style={{ position: "relative", marginTop: 6 }}>
            <span style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 15,
              fontWeight: 600,
              color: "var(--muted)",
              pointerEvents: "none"
            }}>
              ₹
            </span>
            <input
              className="field"
              id="gross-receipts"
              type="number"
              min="0"
              step="10000"
              inputMode="numeric"
              value={grossInput}
              onChange={(e) => setGrossInput(e.target.value)}
              placeholder="1800000"
              style={{
                paddingLeft: 32,
                fontSize: 15,
                fontWeight: 600,
                color: "var(--ink)",
                borderRadius: 8,
                border: "1px solid var(--line)",
                background: "#ffffff"
              }}
            />
          </div>

          {/* Preset Buttons (Clean Monochrome Slate) */}
          <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
            {[1000000, 1800000, 2500000, 5000000, 7500000].map((val) => {
              const active = gross === val;
              return (
                <button
                  key={val}
                  type="button"
                  onClick={() => setGrossInput(val.toString())}
                  style={{
                    fontSize: 11.5,
                    fontWeight: active ? 700 : 500,
                    padding: "4px 11px",
                    borderRadius: 6,
                    border: active ? "1px solid #0f172a" : "1px solid var(--line)",
                    background: active ? "#0f172a" : "#ffffff",
                    color: active ? "#ffffff" : "var(--ink-2)",
                    cursor: "pointer",
                    transition: "all 0.15s ease"
                  }}
                >
                  ₹{(val / 100000).toFixed(0)}L
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Cash Receipts Ratio */}
        <div className="form-row" style={{ marginTop: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <label htmlFor="cash-percent" style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>
              Physical Cash Share: {cashPercent}%
            </label>
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              color: "var(--ink-2)",
              background: "var(--paper-deep)",
              padding: "2px 8px",
              borderRadius: 4,
              border: "1px solid var(--line)"
            }}>
              {cashPercent <= 5 ? "Eligible for ₹75L Limit" : "Capped at ₹50L Limit"}
            </span>
          </div>
          <input
            id="cash-percent"
            type="range"
            min="0"
            max="20"
            step="1"
            value={cashPercent}
            onChange={(e) => setCashPercent(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#0f172a", cursor: "pointer" }}
          />
          <small style={{ color: "var(--muted)", fontSize: 12, marginTop: 4 }}>
            Section 44ADA(1B): Turnover threshold is ₹75 Lakhs when physical cash receipts remain &le; 5%.
          </small>
        </div>

        {/* 3. Profession Selector */}
        <div className="form-row" style={{ marginTop: 20 }}>
          <label htmlFor="profession-select" style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)", display: "block", marginBottom: 6 }}>
            Specified Profession (Section 44AA)
          </label>
          <select
            className="field"
            id="profession-select"
            value={profession}
            onChange={(e) => setProfession(e.target.value as SpecifiedProfession)}
            style={{ fontSize: 13.5, borderRadius: 8, border: "1px solid var(--line)", background: "#ffffff" }}
          >
            <option value="software_development_it">Software Developer / IT Consultant</option>
            <option value="technical_consultancy">Technical Consultant / Engineer</option>
            <option value="film_artist_video_editor">Film Artist / Video Editor / Animator</option>
            <option value="interior_decoration">Interior Decorator / Architect</option>
            <option value="legal_consulting">Legal Professional</option>
            <option value="accountancy">Accountant / Auditor</option>
            <option value="content_creator_other">YouTuber / Digital Creator (Non-specified)</option>
          </select>
          <small style={{ color: "var(--muted)", fontSize: 12, marginTop: 4 }}>
            {!isEligibleProfession
              ? "General creators without technical/film services classify under standard business provisions."
              : "Eligible specified profession under Central Board of Direct Taxes (CBDT) notifications."}
          </small>
        </div>

        {/* 4. TDS Deductions */}
        <div className="form-row" style={{ marginTop: 20 }}>
          <label htmlFor="tds-deducted" style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)", display: "flex", justifyContent: "space-between" }}>
            <span>TDS Credits Claimed (₹)</span>
            <span style={{ fontWeight: 400, color: "var(--muted)", fontSize: 12 }}>From Form 26AS / AIS</span>
          </label>
          <div style={{ position: "relative", marginTop: 6 }}>
            <span style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50)",
              fontSize: 15,
              fontWeight: 600,
              color: "var(--muted)",
              pointerEvents: "none"
            }}>
              ₹
            </span>
            <input
              className="field"
              id="tds-deducted"
              type="number"
              min="0"
              step="5000"
              inputMode="numeric"
              value={tdsInput}
              onChange={(e) => setTdsInput(e.target.value)}
              placeholder="90000"
              style={{
                paddingLeft: 32,
                fontSize: 15,
                fontWeight: 600,
                color: "var(--ink)",
                borderRadius: 8,
                border: "1px solid var(--line)",
                background: "#ffffff"
              }}
            />
          </div>

          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            {[
              { label: "10% (Sec 194J)", rate: 0.10 },
              { label: "2% (Sec 194C/J)", rate: 0.02 },
              { label: "Zero TDS (Export)", rate: 0 }
            ].map(({ label, rate }) => {
              const calcVal = Math.round(gross * rate);
              const active = tds === calcVal;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setTdsInput(calcVal.toString())}
                  style={{
                    fontSize: 11.5,
                    fontWeight: active ? 700 : 500,
                    padding: "4px 10px",
                    borderRadius: 6,
                    border: active ? "1px solid #0f172a" : "1px solid var(--line)",
                    background: active ? "#0f172a" : "#ffffff",
                    color: active ? "#ffffff" : "var(--ink-2)",
                    cursor: "pointer"
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Deductions for Old Regime */}
        <div className="form-row" style={{ marginTop: 20, marginBottom: 0 }}>
          <label htmlFor="chapter-6a" style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)", display: "flex", justifyContent: "space-between" }}>
            <span>Chapter VI-A Deductions (Old Regime)</span>
            <span style={{ fontWeight: 400, color: "var(--muted)", fontSize: 12 }}>80C, 80D, 80CCD</span>
          </label>
          <div style={{ position: "relative", marginTop: 6 }}>
            <span style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 15,
              fontWeight: 600,
              color: "var(--muted)",
              pointerEvents: "none"
            }}>
              ₹
            </span>
            <input
              className="field"
              id="chapter-6a"
              type="number"
              min="0"
              max="500000"
              inputMode="numeric"
              value={chapter6A}
              onChange={(e) => setChapter6A(e.target.value)}
              style={{
                paddingLeft: 32,
                fontSize: 15,
                fontWeight: 600,
                color: "var(--ink)",
                borderRadius: 8,
                border: "1px solid var(--line)",
                background: "#ffffff"
              }}
            />
          </div>
          <small style={{ color: "var(--muted)", fontSize: 12, marginTop: 4 }}>
            Used strictly to evaluate whether claiming deductions under Old Regime outperforms the New Regime.
          </small>
        </div>
      </div>

      {/* ─── Right Column: Executive Financial Statement ─── */}
      <div className="result-panel" aria-live="polite" style={{ padding: "32px 28px" }}>
        {/* Header Strip */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--line)" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.01em" }}>
              Assessment Statement
            </h2>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--muted)" }}>
              Section 44ADA Presumptive Tax Computation
            </p>
          </div>
          <span style={{ fontSize: 11, fontWeight: 600, color: "var(--muted)", background: "var(--paper-deep)", padding: "4px 9px", borderRadius: 6, border: "1px solid var(--line)" }}>
            FY 2024–25 (AY 2025–26)
          </span>
        </div>

        {/* Limit Warning if applicable */}
        {!result.isTurnoverWithinLimit && (
          <div
            role="alert"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              padding: "12px 14px",
              marginBottom: 20,
              borderRadius: 8,
              background: "#fffbeb",
              border: "1px solid #fde68a",
              color: "#92400e",
              fontSize: 12.5,
              lineHeight: 1.55
            }}
          >
            <AlertCircle size={16} style={{ flexShrink: 0, marginTop: 2 }} />
            <span>
              Gross receipts exceed the statutory limit of {formatINR(result.turnoverLimit)}. Presumptive taxation cannot be claimed; standard profit &amp; loss accounts with tax audit under Section 44AB apply.
            </span>
          </div>
        )}

        {/* Executive Primary Number (Clean, High-Contrast Obsidian - NO Neon Green!) */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: 700,
              color: "var(--muted)"
            }}>
              {isRefund ? "Estimated TDS Refund Due" : "Estimated Balance Tax Payable"}
            </span>
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              padding: "3px 8px",
              borderRadius: 4,
              background: "var(--paper-deep)",
              color: "var(--ink-2)",
              border: "1px solid var(--line)"
            }}>
              {isRefund ? "Direct Bank Credit" : "Advance Tax Due"}
            </span>
          </div>

          <div style={{
            fontSize: "clamp(34px, 4vw, 44px)",
            fontWeight: 800,
            color: "var(--ink)",
            fontVariantNumeric: "tabular-nums",
            letterSpacing: "-0.03em",
            lineHeight: 1.05
          }}>
            {formatINR(netAmount)}
          </div>

          <p style={{ margin: "6px 0 0", fontSize: 12.5, color: "var(--muted)" }}>
            {isRefund
              ? "Credited directly to your linked bank account upon verification of your ITR filing."
              : "Payable on or before March 15th to avoid Section 234B and 234C interest penalties."}
          </p>
        </div>

        {/* Minimalist Tab Navigation (Stripe / iOS Segmented Control) */}
        <div style={{
          display: "flex",
          gap: 2,
          padding: 3,
          background: "var(--paper-deep)",
          borderRadius: 8,
          marginBottom: 20
        }}>
          <button
            type="button"
            onClick={() => setActiveTab("compare")}
            style={{
              flex: 1,
              padding: "6px 10px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: activeTab === "compare" ? 700 : 500,
              border: 0,
              cursor: "pointer",
              background: activeTab === "compare" ? "#ffffff" : "transparent",
              color: activeTab === "compare" ? "var(--ink)" : "var(--muted)",
              boxShadow: activeTab === "compare" ? "0 1px 2px rgba(15,23,42,0.06)" : "none",
              transition: "all 0.15s ease"
            }}
          >
            Regime Comparison
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("new")}
            style={{
              flex: 1,
              padding: "6px 10px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: activeTab === "new" ? 700 : 500,
              border: 0,
              cursor: "pointer",
              background: activeTab === "new" ? "#ffffff" : "transparent",
              color: activeTab === "new" ? "var(--ink)" : "var(--muted)",
              boxShadow: activeTab === "new" ? "0 1px 2px rgba(15,23,42,0.06)" : "none",
              transition: "all 0.15s ease"
            }}
          >
            New Regime (Default)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("old")}
            style={{
              flex: 1,
              padding: "6px 10px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: activeTab === "old" ? 700 : 500,
              border: 0,
              cursor: "pointer",
              background: activeTab === "old" ? "#ffffff" : "transparent",
              color: activeTab === "old" ? "var(--ink)" : "var(--muted)",
              boxShadow: activeTab === "old" ? "0 1px 2px rgba(15,23,42,0.06)" : "none",
              transition: "all 0.15s ease"
            }}
          >
            Old Regime
          </button>
        </div>

        {/* Tabular Statement Rows (Clean Ledger Style - Zero Nested Boxes) */}
        <div style={{ display: "grid", gap: 0, marginBottom: 20 }}>
          <div className="result-line">
            <span>Gross Professional Receipts</span>
            <strong>{formatINR(gross)}</strong>
          </div>
          <div className="result-line">
            <span>Deemed Presumptive Profit (50%)</span>
            <strong>{formatINR(result.presumptiveProfit)}</strong>
          </div>

          {activeTab === "compare" && (
            <>
              <div className="result-line">
                <span>New Regime Tax Liability</span>
                <strong>{formatINR(result.newRegime.totalTaxLiability)}</strong>
              </div>
              <div className="result-line">
                <span>Old Regime Tax Liability</span>
                <strong>{formatINR(result.oldRegime.totalTaxLiability)}</strong>
              </div>
            </>
          )}

          {activeTab === "new" && (
            <>
              <div className="result-line">
                <span>Taxable Income</span>
                <strong>{formatINR(result.newRegime.taxableIncome)}</strong>
              </div>
              <div className="result-line">
                <span>Base Slab Tax</span>
                <strong>{formatINR(result.newRegime.baseTax)}</strong>
              </div>
              {result.newRegime.rebate87A > 0 && (
                <div className="result-line">
                  <span>Section 87A Rebate</span>
                  <strong>-{formatINR(result.newRegime.rebate87A)}</strong>
                </div>
              )}
              <div className="result-line">
                <span>Health &amp; Education Cess (4%)</span>
                <strong>{formatINR(result.newRegime.cess)}</strong>
              </div>
              <div className="result-line">
                <span>Total Tax Liability</span>
                <strong>{formatINR(result.newRegime.totalTaxLiability)}</strong>
              </div>
            </>
          )}

          {activeTab === "old" && (
            <>
              <div className="result-line">
                <span>Claimed Deductions (80C / 80D)</span>
                <strong>-{formatINR(result.oldRegime.claimedDeductions)}</strong>
              </div>
              <div className="result-line">
                <span>Taxable Net Income</span>
                <strong>{formatINR(result.oldRegime.taxableIncome)}</strong>
              </div>
              <div className="result-line">
                <span>Total Tax Liability (with Cess)</span>
                <strong>{formatINR(result.oldRegime.totalTaxLiability)}</strong>
              </div>
            </>
          )}

          <div className="result-line">
            <span>TDS Credits Claimed (Form 26AS)</span>
            <strong>-{formatINR(result.tdsDeducted)}</strong>
          </div>
        </div>

        {/* Clean Typographic Verdict */}
        <div style={{
          paddingTop: 16,
          borderTop: "1px solid var(--line)",
          marginBottom: 16,
          fontSize: 13,
          color: "var(--ink-2)",
          lineHeight: 1.6
        }}>
          <strong style={{ color: "var(--ink)" }}>Optimal Regime: </strong>
          {result.recommendedRegime === "Equal"
            ? "Both tax regimes result in identical tax liability for your income bracket."
            : `${result.recommendedRegime} saves you approximately ${formatINR(result.estimatedTaxDifference)} in net tax.`}
        </div>

        {/* Subtle Regulatory Rule Note */}
        <p style={{ margin: 0, fontSize: 11.5, color: "var(--muted)", lineHeight: 1.6 }}>
          <strong>Statutory Advance Tax Rule:</strong> Professionals declaring presumptive income under Section 44ADA are permitted to pay 100% of their advance tax in a single installment on or before March 15th, fully exempt from quarterly 234C interest penalties.
        </p>
      </div>
    </section>
  );
}
