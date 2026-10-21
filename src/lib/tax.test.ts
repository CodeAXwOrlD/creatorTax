import { describe, expect, it } from "vitest";
import {
  getIllustrative44ADA,
  calculateSection44ADA,
  computeNewRegimeTax,
  computeOldRegimeTax,
  formatINR
} from "./tax";

describe("Section 44ADA & Tax Engine Tests (AY 2025-26)", () => {
  it("calculates 50% of gross receipts as illustrative presumptive profit", () => {
    const result = calculateSection44ADA({ grossReceipts: 1200000, tdsDeducted: 60000 });
    expect(result.presumptiveProfit).toBe(600000);
    expect(result.grossReceipts).toBe(1200000);
    expect(result.tdsDeducted).toBe(60000);
  });

  it("handles negative inputs safely by clamping to zero", () => {
    const result = calculateSection44ADA({ grossReceipts: -50000, tdsDeducted: -5000 });
    expect(result.grossReceipts).toBe(0);
    expect(result.tdsDeducted).toBe(0);
    expect(result.presumptiveProfit).toBe(0);
  });

  it("enforces ₹75 Lakh limit when cash receipts <= 5%, and ₹50 Lakh limit when cash > 5%", () => {
    // 100% digital receipts
    const digitalResult = calculateSection44ADA({
      grossReceipts: 6000000,
      tdsDeducted: 0,
      cashReceiptsPercent: 2
    });
    expect(digitalResult.turnoverLimit).toBe(7500000);
    expect(digitalResult.isTurnoverWithinLimit).toBe(true);

    // Cash receipts > 5%
    const cashResult = calculateSection44ADA({
      grossReceipts: 6000000,
      tdsDeducted: 0,
      cashReceiptsPercent: 10
    });
    expect(cashResult.turnoverLimit).toBe(5000000);
    expect(cashResult.isTurnoverWithinLimit).toBe(false);
  });

  it("applies Section 87A rebate under New Regime when income <= ₹7,00,000", () => {
    // Presumptive profit of ₹6,00,000 (from ₹12,00,000 gross) -> tax is zero due to 87A rebate
    const tax = computeNewRegimeTax(600000);
    expect(tax.baseTax).toBe(15000); // (6L - 3L) * 5% = 15,000
    expect(tax.rebate87A).toBe(15000);
    expect(tax.totalTax).toBe(0);
  });

  it("calculates New Regime tax correctly above ₹7,00,000", () => {
    // Income ₹10,00,000:
    // 3L - 7L (4L @ 5%) = 20,000
    // 7L - 10L (3L @ 10%) = 30,000
    // Total base = 50,000. 87A rebate = 0. Cess (4%) = 2,000. Total = 52,000.
    const tax = computeNewRegimeTax(1000000);
    expect(tax.baseTax).toBe(50000);
    expect(tax.rebate87A).toBe(0);
    expect(tax.cess).toBe(2000);
    expect(tax.totalTax).toBe(52000);
  });

  it("calculates Old Regime tax correctly with 87A rebate and slabs", () => {
    // Income ₹4,50,000 -> under Old Regime <= 5L, rebate applies -> tax is 0
    const taxRebate = computeOldRegimeTax(450000);
    expect(taxRebate.totalTax).toBe(0);

    // Income ₹8,00,000 -> 2.5L-5L (2.5L @ 5% = 12500) + 5L-8L (3L @ 20% = 60000) = 72500 + 4% cess = 75400
    const taxHigher = computeOldRegimeTax(800000);
    expect(taxHigher.baseTax).toBe(72500);
    expect(taxHigher.totalTax).toBe(75400);
  });

  it("correctly computes TDS refund when TDS exceeds total tax liability", () => {
    // Gross ₹12L -> presumptive profit ₹6L -> tax = 0. TDS = ₹60,000.
    // Net refund due should be ₹60,000 (netBalance = -60000)
    const result = calculateSection44ADA({ grossReceipts: 1200000, tdsDeducted: 60000 });
    expect(result.newRegime.totalTaxLiability).toBe(0);
    expect(result.newRegime.netBalancePayableOrRefund).toBe(-60000);
  });

  it("formats currency in Indian number grouping correctly", () => {
    expect(formatINR(1200000)).toContain("12,00,000");
  });

  it("maintains backwards compatibility with legacy getIllustrative44ADA helper", () => {
    const legacy = getIllustrative44ADA({ grossReceipts: 1000000, tds: 25000 });
    expect(legacy.presumptiveProfit).toBe(500000);
    expect(legacy.grossReceipts).toBe(1000000);
    expect(legacy.tds).toBe(25000);
  });
});
