"use client";

import { useState } from "react";
import { Copy, Check, Mail, ShieldAlert } from "lucide-react";

interface CopyableDisputeTemplateProps {
  clientName?: string;
  freelancerName?: string;
  invoiceNo?: string;
  panNo?: string;
}

export function CopyableDisputeTemplate({
  clientName = "[Client Company / Accounts Team]",
  freelancerName = "[Your Full Name / Business Name]",
  invoiceNo = "[Invoice #XXXX]",
  panNo = "[Your PAN Number]",
}: CopyableDisputeTemplateProps) {
  const [copied, setCopied] = useState(false);

  const emailSubject = `Request for Correction: TDS Deduction under Section 194J on Invoice ${invoiceNo}`;

  const emailBody = `Dear Accounts & Finance Team at ${clientName},

I hope this email finds you well.

I am writing regarding the TDS deducted on Invoice ${invoiceNo} issued by ${freelancerName} (PAN: ${panNo}).

Upon reviewing Form 26AS, I noticed that TDS was deducted at 10% under Section 194J(1). As per Section 194J of the Income Tax Act, 1961, the 10% rate applies exclusively to specified professions (legal, medical, engineering, architectural, or accountancy) or technical services by audited entities.

For technical consulting, software development, and digital creative contracts, CBDT guidelines and Section 194J(1)(ba) clarify that fees for technical services (FTS) attract a reduced TDS rate of 2%. Furthermore, if categorized as a contractual service, Section 194C mandates 1% (for individuals) or 2% (for companies).

A 10% deduction creates an undue working capital lockup, as my tax liability is assessed under Section 44ADA at an effective rate below 3%.

Could you kindly:
1. Revise the TDS return (Form 26Q) for the relevant quarter to correct the deduction rate to 2% (or 1% under 194C); OR
2. Adjust the excess deducted TDS in the forthcoming invoice cycle.

I have attached the original service contract, invoice copy, and a copy of my PAN card for your reference.

Thank you for your prompt support.

Warm regards,
${freelancerName}
Professional Freelancer / Independent Consultant
Contact: [Your Mobile Number]
PAN: ${panNo}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`Subject: ${emailSubject}\n\n${emailBody}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="copyable-template-container" style={{
      margin: "24px 0",
      background: "#fffdf9",
      border: "1.5px solid var(--line)",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 4px 16px rgba(18, 61, 52, 0.05)"
    }}>
      {/* Template Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 18px",
        background: "var(--paper-deep)",
        borderBottom: "1px solid var(--line)",
        flexWrap: "wrap",
        gap: 10
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Mail size={16} color="var(--green)" />
          <strong style={{ fontSize: 13, color: "var(--ink)" }}>
            Section 194J 10% Deduction Dispute Email Template
          </strong>
        </div>

        <button
          onClick={handleCopy}
          type="button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 14px",
            borderRadius: 6,
            background: copied ? "#dcfce7" : "var(--green)",
            color: copied ? "#15803d" : "#fff",
            border: copied ? "1px solid #86efac" : "1px solid var(--green)",
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.18s ease"
          }}
        >
          {copied ? (
            <>
              <Check size={14} /> Copied to Clipboard
            </>
          ) : (
            <>
              <Copy size={14} /> Copy Dispute Template
            </>
          )}
        </button>
      </div>

      {/* Subject Line */}
      <div style={{
        padding: "10px 18px",
        background: "#faf7f0",
        borderBottom: "1px dashed var(--line)",
        fontSize: 12.5,
        color: "var(--ink-2)"
      }}>
        <strong>Subject: </strong>
        <span style={{ color: "var(--green)", fontFamily: "monospace" }}>{emailSubject}</span>
      </div>

      {/* Body Content */}
      <div style={{
        padding: "16px 18px",
        fontSize: 13,
        lineHeight: 1.7,
        color: "var(--ink-2)",
        whiteSpace: "pre-line",
        fontFamily: "var(--font-sans)",
        maxHeight: 320,
        overflowY: "auto",
        background: "#fff"
      }}>
        {emailBody}
      </div>

      {/* Advice Notice */}
      <div style={{
        padding: "10px 16px",
        background: "#fef9ec",
        borderTop: "1px solid #fde68a",
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 11.5,
        color: "#92400e"
      }}>
        <ShieldAlert size={14} color="#b45309" style={{ flexShrink: 0 }} />
        <span>
          Tip: Always send this within the same quarter so the client&apos;s finance team can adjust their Form 26Q quarterly filing before the TRACES deadline.
        </span>
      </div>
    </div>
  );
}
