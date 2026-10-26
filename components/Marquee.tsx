export default function Marquee() {
  const topics = [
    'SECTION 44ADA PRESUMPTIVE RELIEF (50% PROFIT)',
    'ZERO-RATED GST EXPORTS WITH RFD-11 LUT',
    'CROSS-BORDER FIRA & RBI PURPOSE CODES',
    'DOMESTIC TDS REFUND RECONCILIATION',
    'DUAL-REGIME COMPARISON (AY 2025-26 & AY 2026-27)',
    'BULLETPROOF SOW CLIENT CONTRACTS',
  ];

  return (
    <div className="marquee" aria-label="Statutory tax topics covered by CreatorTax India">
      <div className="marquee-track">
        {[0, 1].map((n) => (
          <div className="marquee-set" key={n} aria-hidden={n === 1}>
            {topics.map((t) => (
              <span key={t}>
                {t}
                <b aria-hidden="true">✳</b>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
