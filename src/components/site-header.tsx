"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CTLogoFull } from "@/components/logo";

const NAV = [
  { href: "/guides", label: "All Guides" },
  { href: "/tools", label: "Tools & Templates" },
  { href: "/tools/44ada-calculator", label: "44ADA Calculator" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === "/tools") {
      return pathname === "/tools";
    }
    if (href === "/tools/44ada-calculator") {
      return pathname === "/tools/44ada-calculator";
    }
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        {/* Logo */}
        <Link href="/" aria-label="CreatorTax India home">
          <CTLogoFull />
        </Link>

        {/* Desktop nav */}
        <nav className="nav-links" aria-label="Main navigation">
          {NAV.map(({ href, label }) => {
            const active = isLinkActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={active ? "active" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link className="btn desktop-cta" href="/tools/44ada-calculator">
          Try Tax Calculator <ArrowUpRight size={15} />
        </Link>

        {/* Mobile hamburger */}
        <div className="mobile-nav">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 6,
              display: "grid",
              placeItems: "center",
              color: "var(--ink)"
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link className="btn" href="/tools/44ada-calculator">
            Calculator <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              overflow: "hidden",
              background: "rgba(246, 242, 233, 0.98)",
              borderTop: "1px solid var(--line)",
              boxShadow: "0 12px 32px rgba(18, 61, 52, 0.08)",
              backdropFilter: "blur(20px)"
            }}
          >
            <nav style={{ padding: "12px 16px 20px" }}>
              {NAV.map(({ href, label }) => {
                const active = isLinkActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "13px 16px",
                      fontSize: 14.5,
                      fontWeight: active ? 700 : 500,
                      color: active ? "var(--brand-primary)" : "var(--ink-2)",
                      background: active ? "var(--paper-deep)" : "transparent",
                      borderRadius: 8,
                      marginBottom: 4,
                      transition: "all 0.15s ease"
                    }}
                  >
                    <span>{label}</span>
                    {active && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--brand-primary)" }} />}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
