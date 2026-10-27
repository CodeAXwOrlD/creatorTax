'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Calculator,
  ChevronDown,
  Code,
  Compass,
  Film,
  Layers,
  Scale,
  ShieldCheck,
  UserCheck,
  Video,
  X,
} from 'lucide-react';

export default function Header() {
  const [navState, setNavState] = useState<'hero' | 'capsule' | 'hidden'>('hero');
  const [panelOpen, setPanelOpen] = useState(false);
  const [professionsOpen, setProfessionsOpen] = useState(false);
  const pathname = usePathname();

  // Scroll tracking refs for hysteresis & jitter prevention
  const lastScrollY = useRef(0);
  const accumulatedDelta = useRef(0);
  const scrollDirection = useRef<'up' | 'down'>('up');
  const navWrapperRef = useRef<HTMLDivElement>(null);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPanelOpen(false);
        setProfessionsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  // Lock background scroll when expanded directory menu is open
  useEffect(() => {
    if (panelOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if ((window as any).__lenis) {
        (window as any).__lenis.stop();
      }
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if ((window as any).__lenis) {
        (window as any).__lenis.start();
      }
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if ((window as any).__lenis) {
        (window as any).__lenis.start();
      }
    };
  }, [panelOpen]);

  // Close menus on route change and recalculate scroll state
  useEffect(() => {
    setPanelOpen(false);
    setProfessionsOpen(false);
    if (typeof window !== 'undefined') {
      if (window.scrollY <= 80) {
        setNavState('hero');
      } else {
        setNavState('capsule');
      }
    }
  }, [pathname]);

  // Intelligent scroll listener with hysteresis
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // Reset accumulated delta if direction reverses
      if (
        (delta > 0 && accumulatedDelta.current < 0) ||
        (delta < 0 && accumulatedDelta.current > 0)
      ) {
        accumulatedDelta.current = 0;
      }
      accumulatedDelta.current += delta;

      // Hysteresis threshold: 14px scroll delta required to switch direction
      if (Math.abs(accumulatedDelta.current) > 14) {
        scrollDirection.current = accumulatedDelta.current > 0 ? 'down' : 'up';
        accumulatedDelta.current = 0;
      }

      lastScrollY.current = currentY;

      // State determination:
      // State A: Hero / Top of page (within first 80px)
      if (currentY <= 80) {
        setNavState('hero');
      }
      // State D: Compact / Auto-hide on deep scroll-down (past 420px) while panel is closed
      else if (scrollDirection.current === 'down' && currentY > 420 && !panelOpen) {
        setNavState('hidden');
      }
      // State C: Floating Capsule (scrolling up or between 80px and 420px)
      else {
        setNavState('capsule');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial invocation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [panelOpen]);

  // IntersectionObserver to observe .hero on homepage
  useEffect(() => {
    const heroEl = document.querySelector('.hero');
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && window.scrollY <= 120) {
          setNavState('hero');
        }
      },
      { threshold: [0, 0.2, 0.5, 1.0] }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [pathname]);

  const navLinks = [
    { label: 'Field Guides', href: '/learn' },
    { label: 'Tools Workbench', href: '/tools' },
  ];

  const professions = [
    { label: 'Software Developers & SaaS', desc: 'SaaS retainers, Section 44ADA & zero-rated LUT exports', href: '/for-developers', icon: Code, badge: 'Sec 44ADA' },
    { label: 'Video Editors & Animators', desc: 'Hardware depreciation, multi-revision contracts & GST', href: '/for-video-editors', icon: Film, badge: '40% WDV' },
    { label: 'Creators & Influencers', desc: 'Sponsorship TDS under 194R, barter deals & brand SOWs', href: '/for-creators', icon: Video, badge: 'Sec 194R' },
    { label: 'UI/UX & Product Designers', desc: 'Remote overseas clients, design tool write-offs & FIRA', href: '/for-designers', icon: Layers, badge: 'Figma & IP' },
    { label: 'General Freelancers', desc: 'Presumptive taxation, advance tax & bank reconciliation', href: '/for-freelancers', icon: Briefcase, badge: 'Roadmap' },
  ];

  const allGuides = [
    { title: 'All Field Guides (Knowledge Shelf)', desc: 'Browse the complete 8-part statutory curriculum', href: '/learn' },
    { title: 'GST LUT Renewal Guide (Rule 96A)', desc: 'Zero-rated cross-border exports without 18% IGST', href: '/guides/gst-lut-renewal' },
    { title: 'PayPal & Stripe FIRA Protocol', desc: 'Inward remittance certificates & RBI purpose codes', href: '/guides/paypal-firc' },
    { title: 'Section 44ADA Presumptive Slabs', desc: '50% deemed profit relief for eligible disciplines', href: '/guides/section-44ada-freelancers' },
    { title: 'TDS Refund Recovery (Form 26AS)', desc: 'Recover excess 194J/194C withholding with interest', href: '/guides/tds-refund' },
    { title: 'Home Office & Hardware Deductions', desc: 'Section 37(1) apportionment for dual-use tech & rent', href: '/guides/home-office-expenses' },
    { title: 'Creator Contracts & SOW Terms', desc: 'Deposit clauses, copyright transfer & kill fees', href: '/guides/creator-contract' },
    { title: 'ITR-3 vs ITR-4 Decision Roadmap', desc: 'Foreign asset disclosures, audit limits & trading turnover', href: '/guides/itr-filing-creators' },
  ];

  const allTools = [
    { title: 'Tools Workbench (Overview)', desc: 'Client-side tax calculators & compliance checklists', href: '/tools' },
    { title: 'Freelancer Tax & Regime Estimator', desc: 'Compare New (115BAC) vs Old regime & 44ADA savings', href: '/tools/freelancer-tax-estimator' },
    { title: 'GST LUT Checklist & Generator', desc: 'Pre-flight checks for annual Form GST RFD-11 renewal', href: '/tools/gst-lut-checklist' },
    { title: 'Dual-Use Expense Allocator', desc: 'Calculate auditable professional shares of gear & wifi', href: '/tools/expense-planner' },
    { title: 'TDS Reconciliation Planner', desc: 'Cross-match Form 26AS credits before filing your ITR', href: '/tools/tds-refund-checklist' },
  ];

  const governanceLinks = [
    { title: 'Editorial & Sourcing Standards', desc: 'Primary CBDT/CBIC statutory citation principles', href: '/editorial-policy' },
    { title: 'About Us & Mission Manifesto', desc: 'Our educational purpose for Indian independent craft', href: '/about' },
    { title: 'Contact Editorial Desk', desc: 'Statutory queries, suggestions, and corrections', href: '/contact' },
    { title: 'Privacy Policy (DPDPA 2023)', desc: '100% client-side privacy. Zero financial telemetry', href: '/privacy' },
    { title: 'Statutory Legal & Tax Disclaimer', desc: 'Educational resource terms; not chartered accountancy advice', href: '/disclaimer' },
  ];

  return (
    <div className="nav-wrapper-outer" ref={navWrapperRef}>
      {/* Scroll-Transforming Header (States A, B, C, D) */}
      <header
        className={`scroll-nav-bar nav-state-${navState}`}
        role="banner"
        aria-label="CreatorTax site header"
      >
        {/* Brand Identity */}
        <Link href="/" className="nav-brand" aria-label="CreatorTax India homepage">
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

        {/* State A: Full Desktop Navigation Links */}
        <nav className="hero-nav-links" aria-label="Primary navigation">
          <Link href="/" className={pathname === '/' ? 'nav-active' : ''}>
            Home
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname.startsWith(link.href) ? 'nav-active' : ''}
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
                <div className="professions-menu-header">
                  <span>DISCIPLINE PLAYBOOKS</span>
                </div>
                <div className="professions-menu-list">
                  {professions.map((p) => {
                    const Icon = p.icon;
                    return (
                      <Link
                        key={p.href}
                        href={p.href}
                        className={`prof-menu-item ${pathname === p.href ? 'item-active' : ''}`}
                        role="menuitem"
                        onClick={() => setProfessionsOpen(false)}
                      >
                        <div className="prof-item-icon-box">
                          <Icon size={16} />
                        </div>
                        <div className="prof-item-content">
                          <div className="prof-item-title-row">
                            <strong className="prof-item-title">{p.label}</strong>
                            <span className="prof-item-badge">{p.badge}</span>
                          </div>
                          <span className="prof-item-desc">{p.desc}</span>
                        </div>
                        <ArrowUpRight size={13} className="prof-item-arrow" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/editorial-policy"
            className={pathname === '/editorial-policy' ? 'nav-active' : ''}
          >
            Standards
          </Link>

          <Link href="/about" className={pathname === '/about' ? 'nav-active' : ''}>
            About
          </Link>

          <Link href="/contact" className={pathname === '/contact' ? 'nav-active' : ''}>
            Contact
          </Link>
        </nav>

        {/* State C: Compact Capsule Quick Links (Desktop) */}
        <div className="capsule-nav-links" aria-label="Capsule quick navigation">
          <Link
            href="/learn"
            className={`capsule-link ${pathname.startsWith('/learn') || pathname.startsWith('/guides') ? 'capsule-active' : ''}`}
          >
            Guides
          </Link>
          <Link
            href="/tools"
            className={`capsule-link ${pathname.startsWith('/tools') ? 'capsule-active' : ''}`}
          >
            Tools
          </Link>
          <button
            type="button"
            className="capsule-link capsule-prof-btn"
            onClick={() => setPanelOpen(true)}
            aria-label="Open profession playbooks"
          >
            <span>Professions</span>
            <ChevronDown size={12} />
          </button>
        </div>

        {/* Actions Group (CTA + Menu Button) */}
        <div className="nav-actions-group">
          <Link
            className="nav-cta-btn"
            href="/tools/freelancer-tax-estimator"
            aria-label="Launch Freelancer Tax Estimator"
          >
            <span>Tax Estimator</span>
            <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            className={`nav-menu-btn ${panelOpen ? 'btn-active' : ''}`}
            aria-label={panelOpen ? 'Close navigation directory' : 'Open navigation directory'}
            aria-expanded={panelOpen}
            aria-controls="floating-directory-menu"
            onClick={() => setPanelOpen(!panelOpen)}
          >
            <span className="menu-btn-label">Menu</span>
            {panelOpen ? <X size={17} /> : <Compass size={17} />}
          </button>
        </div>
      </header>

      {/* State E: Expanded Floating Directory Modal Panel */}
      {panelOpen && (
        <div
          className="floating-menu-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPanelOpen(false);
          }}
          onWheel={(e) => e.stopPropagation()}
          role="presentation"
        >
          <div
            id="floating-directory-menu"
            className="floating-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="CreatorTax India Directory Menu"
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="menu-panel-header">
              <div className="panel-header-title-block">
                <span className="panel-kicker">CREATORTAX INDIA · COMPREHENSIVE DIRECTORY</span>
                <h2>Explore field guides, calculators &amp; playbooks</h2>
              </div>
              <button
                type="button"
                className="panel-close-btn"
                aria-label="Close directory menu"
                onClick={() => setPanelOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* 4-Column Directory Grid */}
            <div className="menu-panel-grid">
              {/* Col 1: Field Guides */}
              <div className="menu-panel-col">
                <h3>
                  <BookOpen size={15} /> Field Guides
                </h3>
                <div className="panel-links-list">
                  {allGuides.map((g) => (
                    <Link
                      key={g.href}
                      href={g.href}
                      className={`panel-link-item ${pathname === g.href ? 'item-active' : ''}`}
                      onClick={() => setPanelOpen(false)}
                    >
                      <span className="panel-link-title">{g.title}</span>
                      <span className="panel-link-desc">{g.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 2: Interactive Tools */}
              <div className="menu-panel-col">
                <h3>
                  <Calculator size={15} /> Interactive Tools
                </h3>
                <div className="panel-links-list">
                  {allTools.map((t) => (
                    <Link
                      key={t.href}
                      href={t.href}
                      className={`panel-link-item ${pathname === t.href ? 'item-active' : ''}`}
                      onClick={() => setPanelOpen(false)}
                    >
                      <div className="panel-link-header-row">
                        <span className="panel-link-title">{t.title}</span>
                        <span className="panel-link-badge">Client-Side</span>
                      </div>
                      <span className="panel-link-desc">{t.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 3: By Profession Playbooks */}
              <div className="menu-panel-col">
                <h3>
                  <UserCheck size={15} /> By Profession
                </h3>
                <div className="panel-links-list">
                  {professions.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className={`panel-link-item ${pathname === p.href ? 'item-active' : ''}`}
                      onClick={() => setPanelOpen(false)}
                    >
                      <span className="panel-link-title">{p.label}</span>
                      <span className="panel-link-desc">{p.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 4: Governance & Legal */}
              <div className="menu-panel-col">
                <h3>
                  <Scale size={15} /> Standards &amp; Policy
                </h3>
                <div className="panel-links-list">
                  {governanceLinks.map((gov) => (
                    <Link
                      key={gov.href}
                      href={gov.href}
                      className={`panel-link-item ${pathname === gov.href ? 'item-active' : ''}`}
                      onClick={() => setPanelOpen(false)}
                    >
                      <span className="panel-link-title">{gov.title}</span>
                      <span className="panel-link-desc">{gov.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Banner */}
            <div className="menu-panel-footer">
              <div className="panel-footer-note">
                <ShieldCheck size={22} />
                <div>
                  <strong>Assessment Year 2025-26 &amp; 2026-27 Compliant</strong>
                  <span>Interactive calculations run client-side. Your financial figures never leave your device.</span>
                </div>
              </div>
              <Link
                href="/tools/freelancer-tax-estimator"
                className="button button-dark panel-footer-cta"
                onClick={() => setPanelOpen(false)}
              >
                <span>Launch Tax Estimator</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
