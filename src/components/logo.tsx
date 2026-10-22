import type { SVGProps } from "react";

/**
 * CreatorTax India Brand Emblem
 * Features:
 * - Muted Copper Sunrise Arc & Radiant Rays (#B87552)
 * - Warm Ivory Tax Document Sheet with Statutory Code Lines
 * - Upward Financial Trajectory Arrow (#24364B)
 * - Botanical Prosperity Leaves (#24364B & #9AA7B4)
 */
export function CTLogo({
  size = 38,
  dark = false,
  ...props
}: { size?: number; dark?: boolean } & SVGProps<SVGSVGElement>) {
  const primaryColor = dark ? "#FFFFFF" : "#24364B";
  const leafColor = dark ? "#9AA7B4" : "#24364B";
  const sheetFill = dark ? "#182432" : "#FFFDF9";
  const sheetStroke = dark ? "#CFD7DE" : "#24364B";
  const arrowColor = dark ? "#FFFFFF" : "#24364B";
  const copperColor = "#B87552";
  const mistColor = "#9AA7B4";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
      {...props}
    >
      {/* Muted Copper Sunrise Rays (#B87552) */}
      <g stroke={copperColor} strokeWidth="2.2" strokeLinecap="round">
        <line x1="8" y1="15" x2="5" y2="13" />
        <line x1="11" y1="10" x2="9" y2="7" />
        <line x1="16" y1="7" x2="15" y2="3.5" />
        <line x1="22" y1="6" x2="23" y2="2.5" />
        <line x1="28" y1="7.5" x2="30" y2="4" />
        <line x1="33" y1="11" x2="36" y2="8" />
      </g>

      {/* Muted Copper Sunrise Arc (#B87552) */}
      <path
        d="M 8 22 A 13.5 13.5 0 0 1 31.5 12"
        fill="none"
        stroke={copperColor}
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Document Sheet */}
      <path
        d="M 16 13 C 16 11.5 17 10.5 18.5 10.5 L 29.5 10.5 C 31 10.5 32 11.5 32 13 L 32 31.5 C 32 34.5 30 37 27 37.5 L 18.5 37.5 C 16.5 36.5 16 34.5 16 32 Z"
        fill={sheetFill}
        stroke={sheetStroke}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Horizontal Document Lines */}
      <g stroke={primaryColor} strokeWidth="1.6" strokeLinecap="round">
        <line x1="19.5" y1="15.5" x2="28" y2="15.5" />
        <line x1="19.5" y1="19.5" x2="28" y2="19.5" />
        <line x1="19.5" y1="23.5" x2="26" y2="23.5" />
        <line x1="19.5" y1="27.5" x2="24" y2="27.5" />
      </g>

      {/* Upward Growth Arrow */}
      <path
        d="M 19 37.5 C 24 37.5 31.5 34.5 33.5 22.5 L 34 19"
        fill="none"
        stroke={arrowColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <polygon points="34,14 38,21 30.5,21" fill={arrowColor} />

      {/* Botanical Leaves at Base */}
      <path
        d="M 10 36 C 7 30 10 24 15 23 C 15 28 14 34 10 36 Z"
        fill={leafColor}
      />
      <path
        d="M 11 34 C 12.5 30 13.5 27 14.5 25"
        stroke={mistColor}
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 13 38 C 11 35 12 30 17 29 C 17 33 16 37 13 38 Z"
        fill={leafColor}
      />
    </svg>
  );
}

/**
 * Full Brand Wordmark with Emblem, Typography & Statutory Tagline
 */
export function CTLogoFull({ dark = false }: { dark?: boolean }) {
  const brandTitleColor = dark ? "#FFFFFF" : "#24364B";
  const sublineColor = dark ? "#9AA7B4" : "#687180";

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <CTLogo size={38} dark={dark} />
      <span>
        <span
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 5,
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif, 'Newsreader', Georgia, serif)",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: brandTitleColor,
            }}
          >
            CreatorTax
          </span>
          <span
            style={{
              fontFamily: "var(--font-serif, 'Newsreader', Georgia, serif)",
              fontSize: 22,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              color: brandTitleColor,
            }}
          >
            India
          </span>
        </span>

        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginTop: 4,
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans, system-ui)",
              fontSize: 8.5,
              letterSpacing: "0.14em",
              color: sublineColor,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Tax · Finance · Freelance Life
          </span>
        </span>
      </span>
    </span>
  );
}
