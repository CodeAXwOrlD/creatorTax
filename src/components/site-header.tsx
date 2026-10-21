"use client";

import Link from "next/link";
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        {/* Logo */}
        <Link href="/" aria-label="CreatorTax India home">
          <CTLogoFull />
        </Link>

        {/* Desktop nav */}
        <nav className="nav-links" aria-label="Main navigation">
          {NAV.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link className="btn desktop-cta" href="/tools/44ada-calculator">
          Try 44ADA Calculator <ArrowUpRight size={15} />
        </Link>

        {/* Mobile hamburger */}
        <div className="mobile-nav">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: 6, display: "grid", placeItems: "center",
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
              background: "rgba(246,242,233,.97)",
              borderTop: "1px solid var(--line)",
              backdropFilter: "blur(20px)"
            }}
          >
            <nav style={{ padding: "12px 0 20px" }}>
              {NAV.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    padding: "13px 24px",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--ink)",
                    borderBottom: "1px solid var(--line-2)"
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
