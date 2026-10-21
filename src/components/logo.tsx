import type { SVGProps } from "react";

/** Inline SVG logo — no external image fetch, perfect for nav/footer. */
export function CTLogo({ size = 34, ...props }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect width="40" height="40" rx="10" fill="#0F172A" />
      <text
        x="6"
        y="28"
        fontFamily="var(--font-sans, system-ui)"
        fontSize="21"
        fontWeight="800"
        fill="#FFFFFF"
      >
        C
      </text>
      <text
        x="21"
        y="28"
        fontFamily="var(--font-sans, system-ui)"
        fontSize="21"
        fontWeight="800"
        fill="#2563EB"
      >
        T
      </text>
    </svg>
  );
}

/** Full logo wordmark */
export function CTLogoFull({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? "#F8FAFC" : "#0F172A";
  const subColor = dark ? "#94A3B8" : "#64748B";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
      <CTLogo />
      <span>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: textColor,
            lineHeight: 1,
          }}
        >
          Creator<span style={{ color: "#2563EB" }}>Tax</span>{" "}
          <span style={{ fontWeight: 500 }}>India</span>
        </span>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontSize: 9,
            letterSpacing: "0.18em",
            color: subColor,
            textTransform: "uppercase",
            marginTop: 2,
            fontWeight: 600,
          }}
        >
          Tax · Finance · Freelance
        </span>
      </span>
    </span>
  );
}
