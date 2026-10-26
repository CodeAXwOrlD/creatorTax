'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Calculator,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [professionsOpen, setProfessionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setProfessionsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setProfessionsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Field Guides', href: '/learn' },
    { label: 'Tools Workbench', href: '/tools' },
  ];

  const professions = [
    { label: 'For Software Developers', href: '/for-developers' },
    { label: 'For Video Editors & Animators', href: '/for-video-editors' },
    { label: 'For Creators & Influencers', href: '/for-creators' },
    { label: 'For UI/UX Designers', href: '/for-designers' },
    { label: 'For General Freelancers', href: '/for-freelancers' },
  ];

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="CreatorTax India homepage">
        <span className="brand-mark">
          ct<span>.</span>
        </span>
        <div className="brand-text">
          <span className="brand-name">
            CreatorTax <i>India</i>
          </span>
          <span className="brand-tagline">FIELD GUIDE FOR INDEPENDENT WORK</span>
        </div>
      </Link>

      <nav
        id="main-nav"
        className={`nav-links ${open ? 'nav-open' : ''}`}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={pathname === '/' ? 'nav-active' : ''}
          onClick={() => setOpen(false)}
        >
          Home
        </Link>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname.startsWith(link.href) ? 'nav-active' : ''}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        {/* Professions Dropdown */}
        <div className="professions-dropdown-container">
          <button
            type="button"
            className="professions-trigger-btn"
            aria-expanded={professionsOpen}
            onClick={() => setProfessionsOpen(!professionsOpen)}
          >
            <span>By Profession</span>
            <ChevronDown size={14} className={professionsOpen ? 'rotate-180' : ''} />
          </button>

          {professionsOpen && (
            <div className="professions-dropdown-menu" role="menu">
              {professions.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className={`prof-menu-item ${pathname === p.href ? 'item-active' : ''}`}
                  role="menuitem"
                  onClick={() => {
                    setProfessionsOpen(false);
                    setOpen(false);
                  }}
                >
                  {p.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/editorial-policy"
          className={pathname === '/editorial-policy' ? 'nav-active' : ''}
          onClick={() => setOpen(false)}
        >
          Standards
        </Link>

        <Link
          href="/about"
          className={pathname === '/about' ? 'nav-active' : ''}
          onClick={() => setOpen(false)}
        >
          About
        </Link>

        <Link
          href="/contact"
          className={pathname === '/contact' ? 'nav-active' : ''}
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>

        <div className="nav-mobile-bottom">
          <Link
            className="nav-mobile-cta"
            href="/tools/freelancer-tax-estimator"
            onClick={() => setOpen(false)}
          >
            <span>Tax Estimator</span>
            <Calculator size={16} />
          </Link>
        </div>
      </nav>

      <div className="header-actions">
        <Link className="header-cta" href="/tools/freelancer-tax-estimator">
          <span>Tax Estimator</span>
          <ArrowUpRight size={14} />
        </Link>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
