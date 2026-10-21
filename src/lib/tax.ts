/**
 * CreatorTax India — Illustrative Tax Engine
 * 
 * Version: AY 2025-26 / FY 2024-25
 * 
 * IMPORTANT YMYL NOTICE:
 * This module provides educational arithmetic based on statutory Indian tax provisions
 * (Section 44ADA, Section 115BAC, and the Finance Act 2023/2024 updates).
 * It is illustrative and does not constitute formal tax computation, filing advice, or legal opinion.
 * Actual liability may vary based on surcharge, marginal relief, residential status, and other income heads.
 */

export type SpecifiedProfession =
  | "software_development_it"
  | "technical_consultancy"
  | "film_artist_video_editor"
  | "interior_decoration"
  | "engineering"
  | "legal_consulting"
  | "accountancy"
  | "content_creator_other";

export interface TaxCalculationInput {
  grossReceipts: number;
  tdsDeducted: number;
  cashReceiptsPercent?: number; // percentage of turnover received in cash
  profession?: SpecifiedProfession;
  chapter6ADeductions?: number; // e.g. 80C, 80D for Old Regime comparison
}

export interface TaxEstimateResult {
  grossReceipts: number;
  tdsDeducted: number;
  cashPercent: number;
  turnoverLimit: number; // ₹75 Lakhs if cash <= 5%, ₹50 Lakhs otherwise
  isTurnoverWithinLimit: boolean;
  presumptiveProfit: number; // 50% deemed taxable income
  
  // New Regime (Default under Sec 115BAC for AY 2025-26)
  newRegime: {
    taxableIncome: number;
    baseTax: number;
    rebate87A: number;
    taxAfterRebate: number;
    cess: number;
    totalTaxLiability: number;
    netBalancePayableOrRefund: number; // negative = refund due
  };

  // Old Regime (Optional comparison with deductions)
  oldRegime: {
    taxableIncome: number;
    claimedDeductions: number;
    baseTax: number;
    rebate87A: number;
    taxAfterRebate: number;
    cess: number;
    totalTaxLiability: number;
    netBalancePayableOrRefund: number; // negative = refund due
  };

  advanceTaxDueDate: string;
  recommendedRegime: "New Regime" | "Old Regime" | "Equal";
  estimatedTaxDifference: number;
}

/**
 * Format numeric value to Indian Rupee currency format (e.g. ₹12,00,000)
 */
export function formatINR(value: number): string {
  const rounded = Math.round(value);
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(rounded);
}

/**
 * Compute New Regime Tax for AY 2025-26 (Section 115BAC)
 * Slabs:
 * - Up to ₹3,00,000: Nil
 * - ₹3,00,001 - ₹7,00,000: 5%
 * - ₹7,00,001 - ₹10,00,000: 10%
 * - ₹10,00,001 - ₹12,00,000: 15%
 * - ₹12,00,001 - ₹15,00,000: 20%
 * - Above ₹15,00,000: 30%
 * Rebate under Section 87A: If total income <= ₹7,00,000, 100% tax rebate (NIL tax).
 * Cess: 4% Health & Education Cess.
 */
export function computeNewRegimeTax(taxableIncome: number): {
  baseTax: number;
  rebate87A: number;
  cess: number;
  totalTax: number;
} {
  const income = Math.max(0, taxableIncome);

  if (income <= 300000) {
    return { baseTax: 0, rebate87A: 0, cess: 0, totalTax: 0 };
  }

  let tax = 0;

  if (income > 1500000) {
    tax += (income - 1500000) * 0.30;
    tax += 300000 * 0.20; // 12L to 15L
    tax += 200000 * 0.15; // 10L to 12L
    tax += 300000 * 0.10; // 7L to 10L
    tax += 400000 * 0.05; // 3L to 7L
  } else if (income > 1200000) {
    tax += (income - 1200000) * 0.20;
    tax += 200000 * 0.15; // 10L to 12L
    tax += 300000 * 0.10; // 7L to 10L
    tax += 400000 * 0.05; // 3L to 7L
  } else if (income > 1000000) {
    tax += (income - 1000000) * 0.15;
    tax += 300000 * 0.10; // 7L to 10L
    tax += 400000 * 0.05; // 3L to 7L
  } else if (income > 700000) {
    tax += (income - 700000) * 0.10;
    tax += 400000 * 0.05; // 3L to 7L
  } else {
    // 300,001 to 700,000
    tax += (income - 300000) * 0.05;
  }

  // Section 87A rebate under New Regime applies if income <= 7,00,000
  let rebate = 0;
  if (income <= 700000) {
    rebate = tax;
  }

  const taxAfterRebate = Math.max(0, tax - rebate);
  const cess = Math.round(taxAfterRebate * 0.04);
  const totalTax = Math.round(taxAfterRebate + cess);

  return {
    baseTax: Math.round(tax),
    rebate87A: Math.round(rebate),
    cess,
    totalTax
  };
}

/**
 * Compute Old Regime Tax for AY 2025-26
 * Slabs:
 * - Up to ₹2,50,000: Nil
 * - ₹2,50,001 - ₹5,00,000: 5%
 * - ₹5,00,001 - ₹10,00,000: 20%
 * - Above ₹10,00,000: 30%
 * Rebate under Section 87A: If total income <= ₹5,00,000, rebate up to ₹12,500 (NIL tax).
 * Cess: 4% Health & Education Cess.
 */
export function computeOldRegimeTax(taxableIncome: number): {
  baseTax: number;
  rebate87A: number;
  cess: number;
  totalTax: number;
} {
  const income = Math.max(0, taxableIncome);

  if (income <= 250000) {
    return { baseTax: 0, rebate87A: 0, cess: 0, totalTax: 0 };
  }

  let tax = 0;

  if (income > 1000000) {
    tax += (income - 1000000) * 0.30;
    tax += 500000 * 0.20; // 5L to 10L
    tax += 250000 * 0.05; // 2.5L to 5L
  } else if (income > 500000) {
    tax += (income - 500000) * 0.20;
    tax += 250000 * 0.05; // 2.5L to 5L
  } else {
    tax += (income - 250000) * 0.05;
  }

  // Section 87A rebate under Old Regime applies if income <= 5,00,000
  let rebate = 0;
  if (income <= 500000) {
    rebate = Math.min(tax, 12500);
  }

  const taxAfterRebate = Math.max(0, tax - rebate);
  const cess = Math.round(taxAfterRebate * 0.04);
  const totalTax = Math.round(taxAfterRebate + cess);

  return {
    baseTax: Math.round(tax),
    rebate87A: Math.round(rebate),
    cess,
    totalTax
  };
}

/**
 * Main 44ADA Illustrative Calculation & Comparison Engine
 */
export function calculateSection44ADA(input: TaxCalculationInput): TaxEstimateResult {
  const gross = Math.max(0, Number.isFinite(input.grossReceipts) ? input.grossReceipts : 0);
  const tds = Math.max(0, Number.isFinite(input.tdsDeducted) ? input.tdsDeducted : 0);
  const cashPercent = Math.min(100, Math.max(0, input.cashReceiptsPercent ?? 0));
  const deductions = Math.max(0, input.chapter6ADeductions ?? 0);

  // Section 44ADA(1B): Turnover limit is ₹75L if cash receipts <= 5%, otherwise ₹50L
  const turnoverLimit = cashPercent <= 5 ? 7500000 : 5000000;
  const isTurnoverWithinLimit = gross <= turnoverLimit;

  // Presumptive profit: Deemed 50% under Section 44ADA
  const presumptiveProfit = Math.round(gross * 0.5);

  // 1. New Regime Calculation (Presumptive profit is total income; Chapter VI-A deductions like 80C not allowed)
  const newRegimeTax = computeNewRegimeTax(presumptiveProfit);
  const newRegimeNet = newRegimeTax.totalTax - tds;

  // 2. Old Regime Calculation (Deductions e.g. 80C up to ₹1.5L allowed from presumptive profit)
  const oldRegimeTaxableIncome = Math.max(0, presumptiveProfit - deductions);
  const oldRegimeTax = computeOldRegimeTax(oldRegimeTaxableIncome);
  const oldRegimeNet = oldRegimeTax.totalTax - tds;

  // Recommendation
  let recommendedRegime: "New Regime" | "Old Regime" | "Equal" = "Equal";
  const diff = Math.abs(newRegimeTax.totalTax - oldRegimeTax.totalTax);
  if (newRegimeTax.totalTax < oldRegimeTax.totalTax) {
    recommendedRegime = "New Regime";
  } else if (oldRegimeTax.totalTax < newRegimeTax.totalTax) {
    recommendedRegime = "Old Regime";
  }

  return {
    grossReceipts: gross,
    tdsDeducted: tds,
    cashPercent,
    turnoverLimit,
    isTurnoverWithinLimit,
    presumptiveProfit,
    newRegime: {
      taxableIncome: presumptiveProfit,
      baseTax: newRegimeTax.baseTax,
      rebate87A: newRegimeTax.rebate87A,
      taxAfterRebate: newRegimeTax.baseTax - newRegimeTax.rebate87A,
      cess: newRegimeTax.cess,
      totalTaxLiability: newRegimeTax.totalTax,
      netBalancePayableOrRefund: newRegimeNet
    },
    oldRegime: {
      taxableIncome: oldRegimeTaxableIncome,
      claimedDeductions: deductions,
      baseTax: oldRegimeTax.baseTax,
      rebate87A: oldRegimeTax.rebate87A,
      taxAfterRebate: oldRegimeTax.baseTax - oldRegimeTax.rebate87A,
      cess: oldRegimeTax.cess,
      totalTaxLiability: oldRegimeTax.totalTax,
      netBalancePayableOrRefund: oldRegimeNet
    },
    advanceTaxDueDate: "15th March of the ongoing Financial Year (100% single installment)",
    recommendedRegime,
    estimatedTaxDifference: diff
  };
}

/**
 * Backward-compatible helper for legacy imports
 */
export function getIllustrative44ADA(input: { grossReceipts: number; tds: number }) {
  const result = calculateSection44ADA({
    grossReceipts: input.grossReceipts,
    tdsDeducted: input.tds
  });
  return {
    grossReceipts: result.grossReceipts,
    tds: result.tdsDeducted,
    presumptiveProfit: result.presumptiveProfit,
    illustrativeBalanceBeforeFinalTaxCalculation: result.newRegime.totalTaxLiability - result.tdsDeducted
  };
}
