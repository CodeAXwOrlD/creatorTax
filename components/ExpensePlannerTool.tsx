'use client';

import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Laptop,
  Percent,
  Receipt,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

const formatINR = (val: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(val)));

export default function ExpensePlannerTool() {
  // Gross turnover
  const [grossTurnover, setGrossTurnover] = useState(2400000);

  // Home office rent
  const [annualRent, setAnnualRent] = useState(360000); // 30k/mo
  const [dedicatedAreaPercent, setDedicatedAreaPercent] = useState(25); // 25% area

  // Utilities
  const [annualUtilities, setAnnualUtilities] = useState(72000); // 6k/mo (internet + power)
  const [utilityBusinessPercent, setUtilityBusinessPercent] = useState(60);

  // Software & SaaS
  const [softwareSaaS, setSoftwareSaaS] = useState(120000); // 10k/mo (Figma, Adobe, AI, GitHub)

  // Hardware Purchases (Capital Assets)
  const [laptopCost, setLaptopCost] = useState(220000); // MacBook / PC
  const [laptopHalfYear, setLaptopHalfYear] = useState(false); // Purchased after Oct 4

  const [cameraCost, setCameraCost] = useState(150000); // Camera / Audio
  const [cameraHalfYear, setCameraHalfYear] = useState(false);

  // Calculations
  const allowableRent = useMemo(() => {
    return (annualRent * dedicatedAreaPercent) / 100;
  }, [annualRent, dedicatedAreaPercent]);

  const allowableUtilities = useMemo(() => {
    return (annualUtilities * utilityBusinessPercent) / 100;
  }, [annualUtilities, utilityBusinessPercent]);

  const allowableSoftware = softwareSaaS; // 100% deductible revenue expense

  const laptopDepreciation = useMemo(() => {
    const rate = laptopHalfYear ? 0.2 : 0.4; // 40% normal, 20% if put to use < 180 days
    return laptopCost * rate;
  }, [laptopCost, laptopHalfYear]);

  const cameraDepreciation = useMemo(() => {
    const rate = cameraHalfYear ? 0.075 : 0.15; // 15% normal, 7.5% if put to use < 180 days
    return cameraCost * rate;
  }, [cameraCost, cameraHalfYear]);

  const totalActualDeductions = useMemo(() => {
    return allowableRent + allowableUtilities + allowableSoftware + laptopDepreciation + cameraDepreciation;
  }, [allowableRent, allowableUtilities, allowableSoftware, laptopDepreciation, cameraDepreciation]);

  // Section 44ADA automatic deemed expense deduction (50% of receipts)
  const presumptiveDeduction = grossTurnover * 0.5;

  const is44AdaBetter = presumptiveDeduction >= totalActualDeductions;
  const difference = Math.abs(presumptiveDeduction - totalActualDeductions);

  return (
    <div className="expense-tool-wrapper">
      {/* Gross Receipts Context */}
      <div className="expense-context-card">
        <div className="context-field">
          <label htmlFor="turnover-input" className="field-label">
            Your Estimated Annual Gross Receipts (INR)
          </label>
          <div className="money-input">
            <span className="currency-symbol">₹</span>
            <input
              id="turnover-input"
              type="number"
              step="50000"
              min="0"
              value={grossTurnover}
              onChange={(e) => setGrossTurnover(Math.max(0, Number(e.target.value) || 0))}
            />
          </div>
          <span className="field-hint">
            Under Section 44ADA, you are granted a flat <strong>{formatINR(presumptiveDeduction)}</strong> (50%)
            expense deduction without maintaining receipts.
          </span>
        </div>
      </div>

      <div className="expense-grid">
        {/* Left Column: Input Categories */}
        <div className="expense-inputs-col">
          {/* Category 1: Home Office Rent */}
          <div className="expense-cat-card">
            <div className="cat-header">
              <Receipt size={18} />
              <h4>1. Home Office Rent Apportionment</h4>
            </div>
            <div className="cat-inputs-row">
              <div className="field-block-half">
                <label className="field-sublabel">Total Annual Home Rent (₹)</label>
                <input
                  type="number"
                  step="10000"
                  className="form-input"
                  value={annualRent}
                  onChange={(e) => setAnnualRent(Math.max(0, Number(e.target.value) || 0))}
                />
              </div>
              <div className="field-block-half">
                <label className="field-sublabel">Dedicated Workspace Area (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="form-input"
                  value={dedicatedAreaPercent}
                  onChange={(e) => setDedicatedAreaPercent(Math.min(100, Math.max(0, Number(e.target.value) || 0)))}
                />
              </div>
            </div>
            <div className="allowable-preview">
              <span>Allowable Rent Deduction (Sec 37):</span>
              <strong>{formatINR(allowableRent)}</strong>
            </div>
          </div>

          {/* Category 2: Broadband & Electricity */}
          <div className="expense-cat-card">
            <div className="cat-header">
              <Percent size={18} />
              <h4>2. Internet, Power &amp; Utilities</h4>
            </div>
            <div className="cat-inputs-row">
              <div className="field-block-half">
                <label className="field-sublabel">Annual Bills Total (₹)</label>
                <input
                  type="number"
                  step="5000"
                  className="form-input"
                  value={annualUtilities}
                  onChange={(e) => setAnnualUtilities(Math.max(0, Number(e.target.value) || 0))}
                />
              </div>
              <div className="field-block-half">
                <label className="field-sublabel">Business Use Allocation (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="form-input"
                  value={utilityBusinessPercent}
                  onChange={(e) => setUtilityBusinessPercent(Math.min(100, Math.max(0, Number(e.target.value) || 0)))}
                />
              </div>
            </div>
            <div className="allowable-preview">
              <span>Allowable Utility Deduction:</span>
              <strong>{formatINR(allowableUtilities)}</strong>
            </div>
          </div>

          {/* Category 3: Software & Cloud */}
          <div className="expense-cat-card">
            <div className="cat-header">
              <Sparkles size={18} />
              <h4>3. Software Subscriptions &amp; Cloud (100% Deductible)</h4>
            </div>
            <div className="cat-inputs-row">
              <div className="field-block-full">
                <label className="field-sublabel">Annual Subscriptions (Adobe, Figma, AI, GitHub, Hosting)</label>
                <input
                  type="number"
                  step="5000"
                  className="form-input"
                  value={softwareSaaS}
                  onChange={(e) => setSoftwareSaaS(Math.max(0, Number(e.target.value) || 0))}
                />
              </div>
            </div>
            <div className="allowable-preview">
              <span>Allowable Software Write-off:</span>
              <strong>{formatINR(allowableSoftware)}</strong>
            </div>
          </div>

          {/* Category 4: Capital Assets (Depreciation) */}
          <div className="expense-cat-card">
            <div className="cat-header">
              <Laptop size={18} />
              <h4>4. Hardware Depreciation (Section 32 WDV)</h4>
            </div>
            <div className="cat-inputs-row">
              <div className="field-block-half">
                <label className="field-sublabel">Computer / Laptop Cost (40% WDV)</label>
                <input
                  type="number"
                  step="10000"
                  className="form-input"
                  value={laptopCost}
                  onChange={(e) => setLaptopCost(Math.max(0, Number(e.target.value) || 0))}
                />
                <label className="checkbox-sublabel">
                  <input
                    type="checkbox"
                    checked={laptopHalfYear}
                    onChange={(e) => setLaptopHalfYear(e.target.checked)}
                  />
                  <span>Purchased on or after Oct 4 (50% half-year depreciation)</span>
                </label>
              </div>

              <div className="field-block-half">
                <label className="field-sublabel">Camera / Audio Gear Cost (15% WDV)</label>
                <input
                  type="number"
                  step="10000"
                  className="form-input"
                  value={cameraCost}
                  onChange={(e) => setCameraCost(Math.max(0, Number(e.target.value) || 0))}
                />
                <label className="checkbox-sublabel">
                  <input
                    type="checkbox"
                    checked={cameraHalfYear}
                    onChange={(e) => setCameraHalfYear(e.target.checked)}
                  />
                  <span>Purchased on or after Oct 4</span>
                </label>
              </div>
            </div>
            <div className="allowable-preview">
              <span>Year 1 Allowable Depreciation:</span>
              <strong>{formatINR(laptopDepreciation + cameraDepreciation)}</strong>
            </div>
          </div>
        </div>

        {/* Right Column: Comparative Verdict */}
        <div className="expense-verdict-col">
          <div className="verdict-sticky-card">
            <span className="verdict-kicker">COMPARATIVE ANALYSIS</span>
            <h3>Section 44ADA vs. Itemized Deductions</h3>

            <div className="comparison-tally-list">
              <div className="tally-row">
                <span>Calculated Itemized Expenses</span>
                <strong>{formatINR(totalActualDeductions)}</strong>
              </div>

              <div className="tally-row">
                <span>Section 44ADA 50% Presumptive Relief</span>
                <strong className="presumptive-highlight">{formatINR(presumptiveDeduction)}</strong>
              </div>
            </div>

            <div className={`verdict-callout ${is44AdaBetter ? 'verdict-ada' : 'verdict-actual'}`}>
              <div className="verdict-badge">
                {is44AdaBetter ? 'SECTION 44ADA IS SUPERIOR' : 'ITEMIZED EXPENSES ARE HIGHER'}
              </div>
              <p>
                {is44AdaBetter ? (
                  <>
                    Section 44ADA gives you an additional <strong>{formatINR(difference)}</strong> in
                    tax-deductible profit reduction without needing to preserve invoices, maintain double-entry
                    books under Section 44AA, or undergo a CA audit under Section 44AB.
                  </>
                ) : (
                  <>
                    Your verified business expenses exceed 50% of your gross turnover by{' '}
                    <strong>{formatINR(difference)}</strong>. Filing regular P&amp;L (ITR-3) could result in lower
                    net taxable income, but will legally mandate audited books.
                  </>
                )}
              </p>
            </div>

            <div className="verdict-links">
              <Link href="/guides/home-office-expenses" className="doc-link">
                Read Expense Apportionment Guide <ArrowUpRight size={14} />
              </Link>
              <Link href="/tools/freelancer-tax-estimator" className="doc-link">
                Launch Tax Estimator <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
