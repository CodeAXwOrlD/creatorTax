"use client";

import React from "react";

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Authentic Global Brand SVGs (Simple Icons & Official Vector Specifications)
// ─────────────────────────────────────────────────────────────────────────────

export function UpworkLogo({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Upwork"
    >
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  );
}

export function StripeLogo({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Stripe"
    >
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
    </svg>
  );
}

export function WiseLogo({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Wise"
    >
      <path d="M6.488 7.469 0 15.05h11.585l1.301-3.576H7.922l3.033-3.507.01-.092L8.993 4.48h8.873l-6.878 18.925h4.706L24 .595H2.543l3.945 6.874Z" />
    </svg>
  );
}

export function PayPalLogo({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PayPal"
    >
      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05 1.002l-1.12 7.004zm14.146-14.42c-.024-.162-.055-.32-.094-.475C20.354 2.87 17.514 2 13.458 2H5.998a.998.998 0 0 0-.986.842L2.006 20.25a.333.333 0 0 0 .328.385h4.606l1.12-7.004c.148-1.12 1.026-1.95 2.153-1.95h2.19c3.902 0 6.942-1.579 7.828-6.147.027-.135.05-.265.07-.393.25-1.597-.008-2.69-.878-3.473z" />
    </svg>
  );
}

export function DeelLogo({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 94 32"
      width={size * 2.2}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Deel"
    >
      <path d="M16.48 0C7.38 0 0 7.35 0 16s7.38 16 16.48 16c4.63 0 8.84-1.85 11.89-4.86l-4.73-4.73c-1.92 1.83-4.52 2.97-7.16 2.97-5.83 0-10.56-4.7-10.56-10.5s4.73-10.5 10.56-10.5c2.64 0 5.24 1.14 7.16 2.97l4.73-4.73C25.32 1.85 21.11 0 16.48 0zm43.83 3.33h-6.2v25.34h6.2V3.33zm21.36 0h-6.2v10.15H54.02V3.33h-6.2v25.34h6.2V18.66h21.45v10.01h6.2V3.33zm-49.88 0h-6.2v25.34h6.2V3.33z" />
    </svg>
  );
}

export function ToptalLogo({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Toptal"
    >
      <path d="M20.227 10.038L10.188 0l-2.04 2.04 3.773 3.769-8.155 8.153L13.807 24l2.039-2.039-3.772-3.771 8.16-8.152h-.007zM8.301 14.269l6.066-6.063 1.223 1.223-6.064 6.113-1.223-1.26-.002-.013z" />
    </svg>
  );
}

export function FigmaLogo({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Figma"
    >
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zM4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4zm0-8c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4zm8 0c0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4h-4V0zm0 8h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V8z" />
    </svg>
  );
}

export function YouTubeLogo({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="YouTube"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function BankWireLogo({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Bank Wire"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l18 0" />
      <path d="M3 10l18 0" />
      <path d="M5 6l7 -3l7 3" />
      <path d="M4 10l0 11" />
      <path d="M20 10l0 11" />
      <path d="M8 14l0 3" />
      <path d="M12 14l0 3" />
      <path d="M16 14l0 3" />
    </svg>
  );
}

export function SubstackLogo({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Substack"
    >
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Authentic Statutory Document & System SVG Icons (Official Tabler Outline)
// ─────────────────────────────────────────────────────────────────────────────

/** Official Tax Certificate (Form RFD-11 LUT) */
export function GstCertificateIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
      <path d="M3 14a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
    </svg>
  );
}

/** Official Foreign Remittance / SWIFT Wire Certificate (e-FIRA / P0802) */
export function SwiftRemittanceIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 12v-1a8 8 0 1 1 16 0v1" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 16l0 -7" />
      <path d="M9 12l3 -3l3 3" />
    </svg>
  );
}

/** Income Tax Deduction Slip / Form 26AS / AIS TRACES */
export function TaxReceiptSlipIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 14l6 -6" />
      <circle cx="9.5" cy="8.5" r=".75" fill="currentColor" />
      <circle cx="14.5" cy="13.5" r=".75" fill="currentColor" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
    </svg>
  );
}

/** Authentic March 15 Advance Tax Deadline Calendar (No AI sparkles!) */
export function AdvanceTaxCalendarIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M16 3l0 4" />
      <path d="M8 3l0 4" />
      <path d="M4 11l16 0" />
      <path d="M8 15h2v2H8z" fill="currentColor" />
    </svg>
  );
}

/** Chartered Accountant Regulatory Shield */
export function StatutoryShieldIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
      <path d="M9 12l2 2l4 -4" />
    </svg>
  );
}

/** 44ADA Calculator Icon */
export function FinancialCalcIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M8 7h8v2H8z" fill="currentColor" opacity="0.3" />
      <path d="M8 14l0 .01" />
      <path d="M12 14l0 .01" />
      <path d="M16 14l0 .01" />
      <path d="M8 17l0 .01" />
      <path d="M12 17l0 .01" />
      <path d="M16 17l0 .01" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Discipline Category Tab Icons
// ─────────────────────────────────────────────────────────────────────────────

export function TerminalDevIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 9l3 3l-3 3" />
      <path d="M13 15l3 0" />
      <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    </svg>
  );
}

export function FilmVideoIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M8 4l0 16" />
      <path d="M16 4l0 16" />
      <path d="M4 8l4 0" />
      <path d="M4 16l4 0" />
      <path d="M4 12l16 0" />
      <path d="M16 8l4 0" />
      <path d="M16 16l4 0" />
    </svg>
  );
}

export function VectorDesignIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 3m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
      <path d="M15 3m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
      <path d="M9 6h6" />
      <path d="M6 9v6" />
      <path d="M18 9v6" />
      <path d="M6 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  );
}

export function BroadcastMediaIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18.364 19.364a9 9 0 1 0 -12.728 0" />
      <path d="M15.536 16.536a5 5 0 1 0 -7.072 0" />
      <path d="M12 13m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  );
}

export function SecurityServerIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
      <path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
      <path d="M7 8l0 .01" />
      <path d="M7 16l0 .01" />
      <path d="M11 8h6" />
      <path d="M11 16h6" />
    </svg>
  );
}

/** Render a platform chip with its official brand logo */
export function PlatformBadge({ name }: { name: string }) {
  const normalized = name.toLowerCase();

  const getLogo = () => {
    if (normalized.includes("upwork")) return <UpworkLogo size={13} />;
    if (normalized.includes("stripe")) return <StripeLogo size={13} />;
    if (normalized.includes("wise")) return <WiseLogo size={13} />;
    if (normalized.includes("paypal")) return <PayPalLogo size={13} />;
    if (normalized.includes("deel")) return <DeelLogo size={11} />;
    if (normalized.includes("toptal")) return <ToptalLogo size={13} />;
    if (normalized.includes("figma")) return <FigmaLogo size={12} />;
    if (normalized.includes("youtube")) return <YouTubeLogo size={13} />;
    if (normalized.includes("substack")) return <SubstackLogo size={12} />;
    return <BankWireLogo size={13} />;
  };

  return (
    <span className="platform-tag authentic-brand-badge">
      <span className="platform-logo-svg">{getLogo()}</span>
      <span className="platform-name">{name}</span>
    </span>
  );
}
