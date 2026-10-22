"use client";

import { useMemo, useState } from "react";
import {
  calculateSection44ADA,
  formatINR,
  type SpecifiedProfession
} from "@/lib/tax";
import { AlertCircle, Check } from "lucide-react";

export function CalculatorClient() {
  const [grossInput, setGrossInput] = useState("1800000");
  const [tdsInput, setTdsInput] = useState("90000");
  const [cashPercent, setCashPercent] = useState<number>(0);
  const [profession, setProfession] = useState<SpecifiedProfession>("software_development_it");
  const [chapter6A, setChapter6A] = useState("150000");
  const [activeTab, setActiveTab] = useState<"new" | "old" | "compare">("compare");

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
      {/* Left Input Panel */}
      <div className="panel">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--line)" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "var(--ink)", fontFamily: "var(--font-sans)" }}>
              Financial Parameters
            </h2>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--muted)" }}>
              Enter your professional receipts and tax credits
            </p>
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, background: "var(--paper-deep)", color: "var(--ink-2)", padding: "4px 10px", borderRadius: 6, border: "1px solid var(--line)" }}>
            AY 2025–26
          </span>
        </div>

        {/* Gross Professional Receipts */}
        <div className="form-row">
          <label htmlFor="gross-receipts">
            Annual Gross Professional Receipts (₹)
          </label>
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 16,
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
              style={{ paddingLeft: 30, fontSize: 16, fontWeight: 600, color: "var(--ink)" }}
            />
          </div>

          {/* Quick preset chips */}
          <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
            {[1000000, 1800000, 2500000, 5000000, 7500000].map((val) => {
              const active = gross === val;
              return (
                <button
                  key={val}
                  type="button"
                  onClick={() => setGrossInput(val.toString())}
                  style={{
                    fontSize: 12,
                    fontWeight: active ? 700 : 500,
                    padding: "5px 12px",
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
          <small>
            Total gross professional fees received before platform fees or business expenses.
          </small>
        </div>

        {/* Cash Receipts Percentage */}
        <div className="form-row">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <label htmlFor="cash-percent" style={{ margin: 0 }}>Physical Cash Receipts: {cashPercent}%</label>
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              color: cashPercent <= 5 ? "#065f46" : "#92400e",
              background: cashPercent <= 5 ? "#ecfdf5" : "#fef3c7",
              padding: "2px 8px",
              borderRadius: 4
            }}>
              {cashPercent <= 5 ? "₹75L Limit Eligible" : "Capped at ₹50L Limit"}
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
          <small>
            Section 44ADA(1B): Turnover ceiling is ₹75 Lakhs if cash receipts do not exceed 5%.
          </small>
        </div>

        {/* Profession Eligibility Selector */}
        <div className="form-row">
          <label htmlFor="profession-select">Profession / Category</label>
          <select
            className="field"
            id="profession-select"
            value={profession}
            onChange={(e) => setProfession(e.target.value as SpecifiedProfession)}
            style={{ fontSize: 13.5 }}
          >
            <option value="software_development_it">Software Developer / IT Consultant (Sec 44AA)</option>
            <option value="technical_consultancy">Technical Consultant / Engineer</option>
            <option value="film_artist_video_editor">Film Artist / Video Editor / Animator</option>
            <option value="interior_decoration">Interior Decorator / Architect</option>
            <option value="legal_consulting">Legal Professional</option>
            <option value="accountancy">Accountant / Auditor</option>
            <option value="content_creator_other">YouTuber / Digital Creator (Non-specified)</option>
          </select>
          <small>
            {!isEligibleProfession
              ? "General creators may require classification under technical consultancy or film/artistic services under Section 44AA."
              : "Eligible specified profession under Section 44AA of the Income Tax Act, 1961."}
          </small>
        </div>

        {/* TDS Deducted */}
        <div className="form-row">
          <label htmlFor="tds-deducted">TDS Already Deducted by Clients (₹)</label>
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 16,
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
              inputMode="numeric"
              value={tdsInput}
              onChange={(e) => setTdsInput(e.target.value)}
              placeholder="90000"
              style={{ paddingLeft: 30, fontSize: 16, fontWeight: 600, color: "var(--ink)" }}
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
                    fontSize: 11,
                    fontWeight: active ? 700 : 500,
                    padding: "5px 10px",
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
          <small>TDS reflected in your Form 26AS / AIS acts as direct tax credit.</small>
        </div>

        {/* Chapter VI-A Deductions */}
        <div className="form-row" style={{ marginBottom: 0 }}>
          <label htmlFor="chapter-6a">
            Chapter VI-A Deductions for Old Regime (80C, 80D) (₹)
          </label>
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: 16,
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
              style={{ paddingLeft: 30, fontSize: 16, fontWeight: 600, color: "var(--ink)" }}
            />
          </div>
          <small>
            Used exclusively to compute whether Old Regime could save you more tax.
          </small>
        </div>
      </div>

      {/* Right Output Panel: Executive Financial Statement */}
      <div className="result-panel" aria-live="polite">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid var(--line)" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "var(--ink)", fontFamily: "var(--font-sans)" }}>
              Tax Computation
            </h2>
            <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--muted)" }}>
              Presumptive assessment under Section 44ADA
            </p>
          </div>
          <span style={{ fontSize: 11, fontWeight: 600, color: "var(--muted)", background: "var(--paper-deep)", padding: "4px 10px", borderRadius: 6, border: "1px solid var(--line)" }}>
            FY 2024–25
          </span>
        </div>

        {/* Turnover Check Warning */}
        {!result.isTurnoverWithinLimit && (
          <div
            role="alert"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              padding: "12px 14px",
              marginBottom: 18,
              borderRadius: 8,
              background: "#fef3c7",
              border: "1px solid #fde68a",
              color: "#92400e",
              fontSize: 12.5,
              lineHeight: 1.5
            }}
          >
            <AlertCircle size={16} style={{ flexShrink: 0, marginTop: 2 }} />
            <span>
              Turnover exceeds statutory ceiling of {formatINR(result.turnoverLimit)}. Section 44ADA presumptive taxation is not available; regular books of account and audit under Section 44AB apply.
            </span>
          </div>
        )}

        {/* Minimalist Segmented Tabs */}
        <div style={{
          display: "flex",
          gap: 4,
          padding: 4,
          background: "var(--paper-deep)",
          borderRadius: 8,
          marginBottom: 20
        }}>
          <button
            type="button"
            onClick={() => setActiveTab("compare")}
            style={{
              flex: 1,
              padding: "7px 10px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: activeTab === "compare" ? 700 : 500,
              border: 0,
              cursor: "pointer",
              background: activeTab === "compare" ? "#ffffff" : "transparent",
              color: activeTab === "compare" ? "var(--ink)" : "var(--muted)",
              boxShadow: activeTab === "compare" ? "0 1px 3px rgba(15,23,42,0.08)" : "none",
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
              padding: "7px 10px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: activeTab === "new" ? 700 : 500,
              border: 0,
              cursor: "pointer",
              background: activeTab === "new" ? "#ffffff" : "transparent",
              color: activeTab === "new" ? "var(--ink)" : "var(--muted)",
              boxShadow: activeTab === "new" ? "0 1px 3px rgba(15,23,42,0.08)" : "none",
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
              padding: "7px 10px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: activeTab === "old" ? 700 : 500,
              border: 0,
              cursor: "pointer",
              background: activeTab === "old" ? "#ffffff" : "transparent",
              color: activeTab === "old" ? "var(--ink)" : "var(--muted)",
              boxShadow: activeTab === "old" ? "0 1px 3px rgba(15,23,42,0.08)" : "none",
              transition: "all 0.15s ease"
            }}
          >
            Old Regime
          </button>
        </div>

        {/* Hero Result Banner (Clean Executive Card) */}
        <div
          style={{
            padding: "20px 22px",
            borderRadius: 12,
            background: isRefund ? "#f0fdf4" : "#fffbeb",
            border: isRefund ? "1px solid #bbf7d0" : "1px solid #fde68a",
            marginBottom: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div>
            <span style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontWeight: 700,
              color: isRefund ? "#166534" : "#92400e",
              display: "block",
              marginBottom: 4
            }}>
              {isRefund ? "Estimated TDS Refund Due to You" : "Estimated Balance Tax Payable"}
            </span>
            <div style={{
              fontSize: 32,
              fontWeight: 800,
              color: "var(--ink)",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1.1
            }}>
              {formatINR(netAmount)}
            </div>
            <p style={{ margin: "4px 0 0", fontSize: 12, color: isRefund ? "#15803d" : "#b45309" }}>
              {isRefund
                ? "Directly credited to your bank account after ITR processing"
                : "Pay on or before March 15th to avoid Sections 234B/C interest"}
            </p>
          </div>
          <span style={{
            fontSize: 11,
            fontWeight: 700,
            padding: "4px 10px",
            borderRadius: 6,
            background: isRefund ? "#dcfce7" : "#fef3c7",
            color: isRefund ? "#166534" : "#92400e",
            border: isRefund ? "1px solid #86efac" : "1px solid #fde68a"
          }}>
            {isRefund ? "Refund Due" : "Advance Tax Due"}
          </span>
        </div>

        {/* Tabular Statement Rows */}
        <div style={{ display: "grid", gap: 0, marginBottom: 16 }}>
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
                <span>Old Regime Tax Liability (with deductions)</span>
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
                <span>Base Tax</span>
                <strong>{formatINR(result.newRegime.baseTax)}</strong>
              </div>
              {result.newRegime.rebate87A > 0 && (
                <div className="result-line" style={{ color: "#059669" }}>
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
                <span>Claimed Deductions (80C/80D)</span>
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

        {/* Recommendation Statement */}
        <div
          style={{
            padding: "12px 14px",
            borderRadius: 8,
            background: "var(--paper-deep)",
            border: "1px solid var(--line)",
            fontSize: 12.5,
            color: "var(--ink-2)",
            lineHeight: 1.6,
            marginBottom: 14
          }}
        >
          <strong>Verdict: </strong>
          {result.recommendedRegime === "Equal"
            ? "Both tax regimes yield identical liability for your income level."
            : `${result.recommendedRegime} saves you approximately ${formatINR(result.estimatedTaxDifference)} in net tax.`}
        </div>

        {/* Footnote Rule */}
        <p style={{ margin: 0, fontSize: 11.5, color: "var(--muted)", lineHeight: 1.6 }}>
          <strong>Statutory Advance Tax Rule:</strong> Professionals declaring presumptive income under Section 44ADA are permitted to pay 100% of their advance tax in a single installment on or before March 15th, fully exempt from quarterly 234C interest penalties.
        </p>
      </div>
    </section>
  );
}
