'use client';

import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Calculator as CalcIcon,
  CheckCircle2,
  HelpCircle,
  Info,
  Scale,
  Sparkles,
  TrendingDown,
} from 'lucide-react';
import Link from 'next/link';
import Reveal from './Reveal';

const formatINR = (val: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(val)));

export default function Calculator() {
  const [receipts, setReceipts] = useState<number>(2400000);
  const [calculationMode, setCalculationMode] = useState<'44ada' | 'custom'>('44ada');
  const [customExpenses, setCustomExpenses] = useState<number>(600000);
  const [tdsDeducted, setTdsDeducted] = useState<number>(180000);
  const [oldRegimeDeductions, setOldRegimeDeductions] = useState<number>(150000);
  const [regime, setRegime] = useState<'new' | 'old'>('new');

  // Quick Presets
  const presets = [
    { label: '₹12 Lakhs', val: 1200000 },
    { label: '₹24 Lakhs', val: 2400000 },
    { label: '₹36 Lakhs', val: 3600000 },
    { label: '₹50 Lakhs', val: 5000000 },
    { label: '₹75 Lakhs', val: 7500000 },
  ];

  // Presumptive or Net Profit
  const taxableProfit = useMemo(() => {
    if (calculationMode === '44ada') {
      return receipts * 0.5; // 50% statutory presumptive profit
    }
    return Math.max(0, receipts - customExpenses);
  }, [receipts, calculationMode, customExpenses]);

  // Tax computation under New Tax Regime (Section 115BAC - AY 2025-26 & AY 2026-27)
  const newRegimeTax = useMemo(() => {
    const income = taxableProfit;
    // Section 87A rebate: if income <= 7,00,000, tax is NIL
    if (income <= 700000) return 0;

    let tax = 0;
    if (income > 300000) tax += Math.min(income - 300000, 400000) * 0.05;
    if (income > 700000) tax += Math.min(income - 700000, 300000) * 0.10;
    if (income > 1000000) tax += Math.min(income - 1000000, 200000) * 0.15;
    if (income > 1200000) tax += Math.min(income - 1200000, 300000) * 0.20;
    if (income > 1500000) tax += (income - 1500000) * 0.30;

    // Surcharge if taxable profit > 50L
    let surcharge = 0;
    if (income > 5000000 && income <= 10000000) surcharge = tax * 0.10;
    else if (income > 10000000) surcharge = tax * 0.15;

    // 4% Health and Education Cess
    return Math.round((tax + surcharge) * 1.04);
  }, [taxableProfit]);

  // Tax computation under Old Tax Regime
  const oldRegimeTax = useMemo(() => {
    const netIncome = Math.max(0, taxableProfit - oldRegimeDeductions);
    // Section 87A rebate: if netIncome <= 5,00,000, tax is NIL
    if (netIncome <= 500000) return 0;

    let tax = 0;
    if (netIncome > 250000) tax += Math.min(netIncome - 250000, 250000) * 0.05;
    if (netIncome > 500000) tax += Math.min(netIncome - 500000, 500000) * 0.20;
    if (netIncome > 1000000) tax += (netIncome - 1000000) * 0.30;

    let surcharge = 0;
    if (netIncome > 5000000 && netIncome <= 10000000) surcharge = tax * 0.10;
    else if (netIncome > 10000000) surcharge = tax * 0.15;

    return Math.round((tax + surcharge) * 1.04);
  }, [taxableProfit, oldRegimeDeductions]);

  const selectedTax = regime === 'new' ? newRegimeTax : oldRegimeTax;
  const balance = selectedTax - tdsDeducted;
  const isRefund = balance < 0;
  const taxSavingsNewVsOld = oldRegimeTax - newRegimeTax;

  return (
    <section id="calculator" className="calculator-section" aria-label="Freelancer tax estimator">
      <div className="section-kicker">
        <span className="kicker-icon">
          <CalcIcon size={16} />
        </span>{' '}
        05 / THE FREELANCER&apos;S DESK · ESTIMATOR
      </div>

      <div className="calc-layout">
        {/* Left Column: Conceptual explanation and guidance */}
        <Reveal>
          <div className="calc-editorial-pane">
            <span className="eyebrow">A CLEARER STARTING ESTIMATE</span>
            <h2>
              Know your numbers.<br />
              <em>Keep your focus.</em>
            </h2>
            <p className="section-copy">
              Section 44ADA offers a 50% presumptive profit assumption for eligible specified
              professionals. This interactive estimator compares the New vs Old Tax Regime, applies
              statutory slab rules, and calculates whether you have tax payable or a potential TDS
              refund claim.
            </p>

            <div className="calc-features-list">
              <div className="calc-feat-item">
                <CheckCircle2 size={18} className="feat-icon" />
                <div>
                  <strong>Section 44ADA Presumptive Logic</strong>
                  <span>
                    Declare 50% of receipts as deemed profit; eliminate balance sheet audits.
                  </span>
                </div>
              </div>

              <div className="calc-feat-item">
                <Scale size={18} className="feat-icon" />
                <div>
                  <strong>New vs Old Regime Comparison</strong>
                  <span>
                    Computes tax across both frameworks with Section 87A rebate and 4% cess.
                  </span>
                </div>
              </div>

              <div className="calc-feat-item">
                <Sparkles size={18} className="feat-icon" />
                <div>
                  <strong>Net TDS Position</strong>
                  <span>
                    Matches client deductions against final tax to forecast your electronic refund.
                  </span>
                </div>
              </div>
            </div>

            <div className="calc-note">
              <Info size={18} />
              <div>
                <strong>Eligibility & Statutory Limits</strong>
                <p>
                  Section 44ADA is available to eligible specified professionals (technical
                  consultancy, interior design, legal, accountancy, engineering) with gross
                  receipts up to ₹75 Lakhs (provided cash receipts do not exceed 5%). Confirm
                  eligibility before adopting this assumption.
                </p>
              </div>
            </div>

            <div className="calc-links-row">
              <Link href="/guides/section-44ada-freelancers" className="text-link">
                Read Section 44ADA Guide <ArrowUpRight size={15} />
              </Link>
              <Link href="/guides/tds-refund" className="text-link">
                Read TDS Refund Guide <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Interactive Desk Card */}
        <Reveal delay={0.15}>
          <div className="calc-card">
            <div className="calc-card-top">
              <div className="calc-card-title">
                <span className="live-dot" />
                <span>INTERACTIVE FREELANCER DESK</span>
              </div>
              <span className="badge-ay">AY 2025-26 & 2026-27</span>
            </div>

            {/* Computation Mode Toggle */}
            <div className="mode-switch-group">
              <label className="mode-label">Computation Framework</label>
              <div className="mode-buttons">
                <button
                  type="button"
                  className={calculationMode === '44ada' ? 'active' : ''}
                  onClick={() => setCalculationMode('44ada')}
                >
                  Section 44ADA (50% Deemed Profit)
                </button>
                <button
                  type="button"
                  className={calculationMode === 'custom' ? 'active' : ''}
                  onClick={() => setCalculationMode('custom')}
                >
                  Actual Profit & Expenses
                </button>
              </div>
            </div>

            {/* Annual Gross Receipts */}
            <div className="field-block">
              <div className="field-header">
                <label htmlFor="receipts" className="field-label">
                  Annual Professional Gross Receipts (INR)
                </label>
                <span className="field-val-hint">{formatINR(receipts)}</span>
              </div>
              <div className="money-input">
                <span className="currency-symbol">₹</span>
                <input
                  id="receipts"
                  type="number"
                  min="0"
                  max="100000000"
                  step="50000"
                  value={receipts}
                  onChange={(e) => setReceipts(Math.max(0, Number(e.target.value) || 0))}
                />
              </div>

              {/* Presets */}
              <div className="presets-row">
                <span className="presets-hint">Quick Presets:</span>
                {presets.map((p) => (
                  <button
                    key={p.val}
                    type="button"
                    className={`preset-btn ${receipts === p.val ? 'active' : ''}`}
                    onClick={() => {
                      setReceipts(p.val);
                      setTdsDeducted(Math.round(p.val * 0.10));
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Expenses (if custom mode) */}
            {calculationMode === 'custom' && (
              <div className="field-block">
                <div className="field-header">
                  <label htmlFor="expenses" className="field-label">
                    Total Allowable Business Expenses (Rent, Software, Gear)
                  </label>
                  <span className="field-val-hint">{formatINR(customExpenses)}</span>
                </div>
                <div className="money-input">
                  <span className="currency-symbol">₹</span>
                  <input
                    id="expenses"
                    type="number"
                    min="0"
                    max={receipts}
                    step="25000"
                    value={customExpenses}
                    onChange={(e) => setCustomExpenses(Math.max(0, Number(e.target.value) || 0))}
                  />
                </div>
              </div>
            )}

            {/* TDS Already Deducted */}
            <div className="field-block">
              <div className="field-header">
                <label htmlFor="tds" className="field-label">
                  TDS Deducted by Clients (Form 26AS / AIS)
                </label>
                <span className="field-val-hint">{formatINR(tdsDeducted)}</span>
              </div>
              <div className="money-input">
                <span className="currency-symbol">₹</span>
                <input
                  id="tds"
                  type="number"
                  min="0"
                  max="50000000"
                  step="10000"
                  value={tdsDeducted}
                  onChange={(e) => setTdsDeducted(Math.max(0, Number(e.target.value) || 0))}
                />
              </div>
            </div>

            {/* Regime Switcher */}
            <div className="regime-selection-box">
              <div className="regime-header-row">
                <span className="regime-label">Select Tax Regime for Final Breakdown:</span>
                <div className="regime-switch">
                  <button
                    type="button"
                    className={regime === 'new' ? 'selected' : ''}
                    onClick={() => setRegime('new')}
                  >
                    New Regime (Default)
                  </button>
                  <button
                    type="button"
                    className={regime === 'old' ? 'selected' : ''}
                    onClick={() => setRegime('old')}
                  >
                    Old Regime
                  </button>
                </div>
              </div>

              {/* Deductions input if Old Regime */}
              {regime === 'old' && (
                <div className="old-deductions-row">
                  <label htmlFor="deductions">
                    Old Regime Chapter VI-A Deductions (80C, 80D, etc.):
                  </label>
                  <div className="money-input small-input">
                    <span>₹</span>
                    <input
                      id="deductions"
                      type="number"
                      min="0"
                      max="1000000"
                      value={oldRegimeDeductions}
                      onChange={(e) =>
                        setOldRegimeDeductions(Math.max(0, Number(e.target.value) || 0))
                      }
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Side-by-Side Quick Summary Bar */}
            <div className="regimes-comparison-bar">
              <div className={`regime-stat ${regime === 'new' ? 'highlight' : ''}`}>
                <span className="stat-label">NEW REGIME TAX</span>
                <strong>{formatINR(newRegimeTax)}</strong>
                <small>{taxableProfit <= 700000 ? 'Sec 87A Rebate (₹0 tax)' : 'Sec 115BAC Slabs'}</small>
              </div>

              <div className="regime-vs-divider">VS</div>

              <div className={`regime-stat ${regime === 'old' ? 'highlight' : ''}`}>
                <span className="stat-label">OLD REGIME TAX</span>
                <strong>{formatINR(oldRegimeTax)}</strong>
                <small>With {formatINR(oldRegimeDeductions)} deductions</small>
              </div>
            </div>

            {taxSavingsNewVsOld > 0 && (
              <div className="regime-saving-alert">
                <TrendingDown size={16} />
                <span>
                  The <strong>New Regime saves you {formatINR(taxSavingsNewVsOld)}</strong> compared to
                  the Old Regime on these figures.
                </span>
              </div>
            )}

            {/* Results Breakdown */}
            <div className="calc-results">
              <div className="calc-result-row">
                <span>
                  {calculationMode === '44ada'
                    ? 'Deemed Taxable Profit (50% under 44ADA)'
                    : 'Net Taxable Profit (Receipts – Expenses)'}
                </span>
                <strong>{formatINR(taxableProfit)}</strong>
              </div>

              <div className="calc-result-row">
                <span>Effective Base Tax + 4% Cess ({regime === 'new' ? 'New' : 'Old'} Regime)</span>
                <strong>{formatINR(selectedTax)}</strong>
              </div>

              <div className="calc-result-row">
                <span>Less: TDS Credits Paid (Form 26AS)</span>
                <strong className="tds-credit-val">- {formatINR(tdsDeducted)}</strong>
              </div>

              {/* Net Payable or Refund Callout */}
              <div className={`result-total ${isRefund ? 'total-refund' : 'total-payable'}`}>
                <div>
                  <span className="total-title">
                    {isRefund ? 'POTENTIAL TDS REFUND CLAIMABLE' : 'ESTIMATED BALANCE TAX PAYABLE'}
                  </span>
                  <small>
                    {isRefund
                      ? 'Pre-validate your bank on incometax.gov.in to receive your direct refund.'
                      : 'Pay on or before March 15th to avoid Section 234B/234C interest.'}
                  </small>
                </div>
                <strong className="total-amount">{formatINR(Math.abs(balance))}</strong>
              </div>
            </div>

            <div className="tiny-disclaimer-box">
              <HelpCircle size={14} />
              <p>
                <strong>Illustrative educational model only.</strong> Does not account for AMT,
                special rates, capital gains, Section 234 interest, or individual audit
                requirements. Review with a Chartered Accountant before filing your return.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
