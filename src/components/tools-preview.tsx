import Link from "next/link";
import { ArrowUpRight, Calculator, FileCheck, Mail, ShieldAlert, FileText } from "lucide-react";

const TOOLS_ITEMS = [
  {
    title: "Section 44ADA Tax Calculator",
    category: "Interactive Tool",
    desc: "Calculate 50% presumptive profit, compare New vs Old tax regime, check the ₹75 Lakh digital receipts ceiling, and estimate your TDS refund.",
    href: "/tools/44ada-calculator",
    badge: "AY 2025–26",
    icon: Calculator,
    action: "Launch Calculator"
  },
  {
    title: "Section 194J 10% TDS Dispute Letter",
    category: "Copyable Template",
    desc: "A formal statutory template to email clients who erroneously deduct 10% TDS instead of 2% under Section 194J(1)(ba), locking your working capital.",
    href: "/tools#tds-dispute",
    badge: "Most Used",
    icon: Mail,
    action: "View & Copy Letter"
  },
  {
    title: "Rule 46 Export LUT Invoice Blueprint",
    category: "Statutory Checklist",
    desc: "The exact statutory header declaration and SAC codes required on foreign client invoices to legally supply zero-rated services without 18% IGST.",
    href: "/tools#gst-lut-invoice",
    badge: "CGST Rule 46",
    icon: FileText,
    action: "View Invoicing Blueprint"
  },
  {
    title: "Bank e-FIRA & FIRC Request Email",
    category: "Banking Template",
    desc: "Pre-formatted email to request inward remittance advice certificates with correct RBI purpose codes (P0802/P0902) from ICICI, HDFC, Wise, or PayPal.",
    href: "/tools#firc-request",
    badge: "FEMA & GST",
    icon: FileCheck,
    action: "View Email Template"
  },
  {
    title: "Freelancer Contract & IP Clause",
    category: "Legal Framework",
    desc: "Essential protective clause ensuring intellectual property rights transfer to the client strictly upon 100% receipt of invoice payment.",
    href: "/tools#contract-clauses",
    badge: "Indian Contract Act",
    icon: ShieldAlert,
    action: "View Contract Clause"
  }
];

export function ToolsPreview() {
  return (
    <div className="tools-preview-grid">
      {TOOLS_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="tools-preview-card">
            <div className="tools-preview-card-header">
              <div className="tools-preview-icon-wrap">
                <Icon size={18} />
              </div>
              <span className="tools-preview-badge">{item.badge}</span>
            </div>

            <span className="tools-preview-category">{item.category}</span>
            <h3 className="serif tools-preview-title">{item.title}</h3>
            <p className="tools-preview-desc">{item.desc}</p>

            <div className="tools-preview-card-footer">
              <Link href={item.href} className="tools-preview-link">
                {item.action} <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
