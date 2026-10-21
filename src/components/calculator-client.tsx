"use client";

import { useMemo, useState } from "react";
import {
  calculateSection44ADA,
  formatINR,
  type SpecifiedProfession
} from "@/lib/tax";
import {
  Info,
  Calendar,
  AlertTriangle,
  Scale,
  Sparkles
} from "lucide-react";

export function CalculatorClient() {
  const [grossInput, setGrossInput] = useState("1800000");
  const [tdsInput, setTdsInput] = useState("90000");
  const [cashPercent, setCashPercent] = useState<number>(0);
  const [profession, setProfession] = useState<SpecifiedProfession>("software_development_it");
  const [chapter6A, setChapter6A] = useState("150000"); // 80C default for comparison
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

  return (
    <section className="container calculator-grid" aria-label="Section 44ADA Tax Calculator">
      {/* Left Input Column */}
      <div className="panel">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
          <h2 style={{ margin: 0 }}>Your Financial Inputs</h2>
          <span className="tag">AY 2025-26</span>
        </div>

        {/* Gross Professional Receipts */}
        <div className="form-row">
          <label htmlFor="gross-receipts">
            Annual Gross Professional Receipts (₹)
          </label>
          <input
            className="field"
            id="gross-receipts"
            type="number"
            min="0"
            step="10000"
            inputMode="numeric"
            value={grossInput}
            onChange={(e) => setGrossInput(e.target.value)}
            placeholder="e.g. 1800000"
          />
          <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
            {[1000000, 1800000, 2500000, 4500000, 6500000].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setGrossInput(val.toString())}
                style={{
                  fontSize: 10,
                  padding: "4px 8px",
                  borderRadius: 4,
                  border: "1px solid var(--line)",
                  background: gross === val ? "var(--green)" : "#fff",
                  color: gross === val ? "#fff" : "var(--ink)",
                  cursor: "pointer"
                }}
              >
                ₹{(val / 100000).toFixed(0)}L
              </button>
            ))}
          </div>
          <small>
            Total gross professional fees credited before any platform fees or business expenses.
          </small>
        </div>

        {/* Cash Receipts Percentage */}
        <div className="form-row">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <label htmlFor="cash-percent">Percentage Received in Physical Cash: {cashPercent}%</label>
            <span style={{ fontSize: 11, color: cashPercent <= 5 ? "var(--green)" : "var(--terracotta)", fontWeight: 600 }}>
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
            style={{ width: "100%", accentColor: "var(--green)" }}
          />
          <small>
            Under Section 44ADA(1B), if cash receipts do not exceed 5%, the turnover ceiling increases from ₹50 Lakhs to ₹75 Lakhs.
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
          >
            <option value="software_development_it">Software Developer / IT Consultant (Sec 44AA)</option>
            <option value="technical_consultancy">Technical Consultant / Engineer</option>
            <option value="film_artist_video_editor">Film Artist / Video Editor / Animator (Notification 18/2001)</option>
            <option value="interior_decoration">Interior Decorator / Architect</option>
            <option value="legal_consulting">Legal Professional</option>
            <option value="accountancy">Accountant / Auditor</option>
            <option value="content_creator_other">YouTuber / Content Creator / Influencer (Non-specified)</option>
          </select>
          <small>
            {!isEligibleProfession
              ? "Note: General influencers or content creators may not fall directly within specified professions under Section 44AA unless classified under technical consultancy or film/artistic services. Section 44AD or normal bookkeeping might apply."
              : "Recognized as an eligible specified profession under Section 44AA / Central Board of Direct Taxes notifications."}
          </small>
        </div>

        {/* TDS Deducted */}
        <div className="form-row">
          <label htmlFor="tds-deducted">TDS Already Deducted by Clients / Platforms (₹)</label>
          <input
            className="field"
            id="tds-deducted"
            type="number"
            min="0"
            inputMode="numeric"
            value={tdsInput}
            onChange={(e) => setTdsInput(e.target.value)}
            placeholder="e.g. 90000"
          />
          <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
            <button
              type="button"
              onClick={() => setTdsInput(Math.round(gross * 0.10).toString())}
              style={{ fontSize: 10, padding: "3px 8px", borderRadius: 4, border: "1px solid var(--line)", background: "#fff", cursor: "pointer" }}
            >
              10% (Sec 194J)
            </button>
            <button
              type="button"
              onClick={() => setTdsInput(Math.round(gross * 0.02).toString())}
              style={{ fontSize: 10, padding: "3px 8px", borderRadius: 4, border: "1px solid var(--line)", background: "#fff", cursor: "pointer" }}
            >
              2% (Sec 194C)
            </button>
            <button
              type="button"
              onClick={() => setTdsInput("0")}
              style={{ fontSize: 10, padding: "3px 8px", borderRadius: 4, border: "1px solid var(--line)", background: "#fff", cursor: "pointer" }}
            >
              Zero TDS (Export/LUT)
            </button>
          </div>
          <small>TDS reflected in your Form 26AS / AIS acts as tax credit against your final liability.</small>
        </div>

        {/* Chapter VI-A Deductions for Old Regime Comparison */}
        <div className="form-row" style={{ marginBottom: 0 }}>
          <label htmlFor="chapter-6a">
            Eligible Chapter VI-A Deductions for Old Regime (80C, 80D, etc.) (₹)
          </label>
          <input
            className="field"
            id="chapter-6a"
            type="number"
            min="0"
            max="500000"
            inputMode="numeric"
            value={chapter6A}
            onChange={(e) => setChapter6A(e.target.value)}
          />
          <small>
            Under New Regime (Sec 115BAC), Chapter VI-A deductions are not available. They are used here only to compare whether Old Regime could save you more tax.
          </small>
        </div>
      </div>

      {/* Right Output Panel */}
      <div className="panel result-panel" aria-live="polite">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ color: "#fffdf7", margin: 0 }}>Tax Computation</h2>
          <span style={{ fontSize: 11, background: "rgba(255,255,255,0.15)", padding: "3px 8px", borderRadius: 4, color: "#fff" }}>
            FY 2024-25 (AY 2025-26)
          </span>
        </div>

        {/* Turnover Check Warning */}
        {!result.isTurnoverWithinLimit && (
          <div
            role="alert"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 14px",
              margin: "16px 0",
              borderRadius: 6,
              background: "#ffedd5",
              color: "#9a3412",
              fontSize: 12
            }}
          >
            <AlertTriangle size={18} style={{ flexShrink: 0 }} />
            <span>
              Turnover exceeds statutory ceiling of {formatINR(result.turnoverLimit)}. Section 44ADA presumptive taxation is not available; regular books of account and tax audit under Section 44AB may be mandatory.
            </span>
          </div>
        )}

        <div style={{ margin: "20px 0 10px" }}>
          <span className="muted">Deemed Presumptive Profit (50% of Receipts)</span>
          <div className="result-value" style={{ margin: "4px 0 16px" }}>
            {formatINR(result.presumptiveProfit)}
          </div>
        </div>

        {/* Regime Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
          <button
            type="button"
            onClick={() => setActiveTab("compare")}
            style={{
              flex: 1,
              padding: "8px 10px",
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 600,
              border: 0,
              cursor: "pointer",
              background: activeTab === "compare" ? "#fffdf7" : "rgba(255,255,255,0.15)",
              color: activeTab === "compare" ? "var(--green)" : "#fff"
            }}
          >
            <Scale size={13} style={{ verticalAlign: "middle", marginRight: 4 }} />
            Comparison
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("new")}
            style={{
              flex: 1,
              padding: "8px 10px",
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 600,
              border: 0,
              cursor: "pointer",
              background: activeTab === "new" ? "#fffdf7" : "rgba(255,255,255,0.15)",
              color: activeTab === "new" ? "var(--green)" : "#fff"
            }}
          >
            New Regime (Default)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("old")}
            style={{
              flex: 1,
              padding: "8px 10px",
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 600,
              border: 0,
              cursor: "pointer",
              background: activeTab === "old" ? "#fffdf7" : "rgba(255,255,255,0.15)",
              color: activeTab === "old" ? "var(--green)" : "#fff"
            }}
          >
            Old Regime
          </button>
        </div>

        {/* Active Tab View */}
        {activeTab === "compare" && (
          <div style={{ background: "rgba(255,255,255,0.08)", padding: 16, borderRadius: 8 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
              <div style={{ borderRight: "1px solid rgba(255,255,255,0.15)", paddingRight: 10 }}>
                <div style={{ fontSize: 11, color: "#c9d8d0" }}>New Regime Tax</div>
                <div style={{ fontSize: 20, fontFamily: "Georgia, serif", fontWeight: 700, margin: "4px 0" }}>
                  {formatINR(result.newRegime.totalTaxLiability)}
                </div>
                <small style={{ fontSize: 10, color: "#d1ded6" }}>
                  {result.newRegime.taxableIncome <= 700000 ? "Zero tax (Sec 87A rebate)" : "Slab rates applied"}
                </small>
              </div>

              <div>
                <div style={{ fontSize: 11, color: "#c9d8d0" }}>Old Regime Tax</div>
                <div style={{ fontSize: 20, fontFamily: "Georgia, serif", fontWeight: 700, margin: "4px 0" }}>
                  {formatINR(result.oldRegime.totalTaxLiability)}
                </div>
                <small style={{ fontSize: 10, color: "#d1ded6" }}>
                  With {formatINR(result.oldRegime.claimedDeductions)} deductions
                </small>
              </div>
            </div>

            <div
              style={{
                padding: "10px 12px",
                borderRadius: 6,
                background: "rgba(255,255,255,0.12)",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                gap: 8
              }}
            >
              <Sparkles size={16} color="#f4d03f" />
              <span>
                <strong>Recommendation:</strong> {result.recommendedRegime === "Equal"
                  ? "Both regimes yield identical tax for this income level."
                  : `${result.recommendedRegime} saves you approximately ${formatINR(result.estimatedTaxDifference)}.`}
              </span>
            </div>
          </div>
        )}

        {activeTab === "new" && (
          <div>
            <div className="result-line">
              <span>Taxable Deemed Income</span>
              <strong>{formatINR(result.newRegime.taxableIncome)}</strong>
            </div>
            <div className="result-line">
              <span>Base Income Tax</span>
              <strong>{formatINR(result.newRegime.baseTax)}</strong>
            </div>
            {result.newRegime.rebate87A > 0 && (
              <div className="result-line" style={{ color: "#a7f3d0" }}>
                <span>Section 87A Rebate</span>
                <strong>-{formatINR(result.newRegime.rebate87A)}</strong>
              </div>
            )}
            <div className="result-line">
              <span>Health &amp; Education Cess (4%)</span>
              <strong>{formatINR(result.newRegime.cess)}</strong>
            </div>
            <div className="result-line" style={{ borderBottom: "2px solid #fff", fontSize: 13 }}>
              <span>Total Tax Liability</span>
              <strong>{formatINR(result.newRegime.totalTaxLiability)}</strong>
            </div>
          </div>
        )}

        {activeTab === "old" && (
          <div>
            <div className="result-line">
              <span>Presumptive Profit</span>
              <strong>{formatINR(result.presumptiveProfit)}</strong>
            </div>
            <div className="result-line">
              <span>Less: Chapter VI-A Deductions</span>
              <strong>-{formatINR(result.oldRegime.claimedDeductions)}</strong>
            </div>
            <div className="result-line">
              <span>Taxable Net Income</span>
              <strong>{formatINR(result.oldRegime.taxableIncome)}</strong>
            </div>
            <div className="result-line">
              <span>Base Tax + 4% Cess</span>
              <strong>{formatINR(result.oldRegime.totalTaxLiability)}</strong>
            </div>
          </div>
        )}

        {/* TDS Credit & Net Balance Section */}
        <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.2)" }}>
          <div className="result-line">
            <span>TDS Credit Claimed</span>
            <strong>{formatINR(result.tdsDeducted)}</strong>
          </div>
          <div className="result-line" style={{ fontSize: 14, fontWeight: 700 }}>
            <span>
              {result.newRegime.netBalancePayableOrRefund <= 0
                ? "Estimated TDS Refund Due"
                : "Estimated Balance Tax Payable"}
            </span>
            <strong style={{ color: result.newRegime.netBalancePayableOrRefund <= 0 ? "#a7f3d0" : "#fed7aa" }}>
              {formatINR(Math.abs(result.newRegime.netBalancePayableOrRefund))}
            </strong>
          </div>
        </div>

        {/* Statutory Advance Tax Reminder */}
        <div
          style={{
            marginTop: 16,
            padding: "12px 14px",
            borderRadius: 6,
            background: "rgba(255,255,255,0.08)",
            fontSize: 11,
            lineHeight: 1.6,
            display: "flex",
            gap: 8
          }}
        >
          <Calendar size={18} style={{ flexShrink: 0, marginTop: 2 }} />
          <div>
            <strong>Advance Tax Statutory Exemption:</strong> Unlike regular taxpayers who must pay in 4 quarterly installments, professionals declaring income under Section 44ADA are permitted to pay <strong>100% of their advance tax in a single installment on or before March 15th</strong> of the financial year.
          </div>
        </div>

        {/* Educational Disclaimer */}
        <p className="source-note" style={{ marginTop: 16 }}>
          <Info size={12} style={{ verticalAlign: "middle", marginRight: 4 }} />
          Educational illustration only. Assumes individual tax resident under age 60 with no capital gains or lottery income. Final computation requires verifying Form 26AS/AIS, Section 44AA eligibility, and consulting a qualified Indian Chartered Accountant before return filing.
        </p>
      </div>
    </section>
  );
}
