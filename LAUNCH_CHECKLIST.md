# CreatorTax India — Launch Readiness Checklist

A comprehensive pre-flight verification checklist covering SEO, Accessibility (a11y), Performance, Google AdSense eligibility, and Tax/Legal compliance before production deployment.

---

## 1. Technical SEO & Discoverability

- [x] **Metadata Architecture:**
  - Distinct `<title>` and `<meta name="description">` on homepage, 4 interactive tool pages, 5 profession-specific guides, 7 in-depth guides, and all trust/legal pages.
  - Template structure: `%s | CreatorTax India`.
  - Canonical URLs generated dynamically pointing to `https://creatortax.in`.
- [x] **Structured Data (JSON-LD):**
  - `WebSite` and `Organization` schema in root layout.
  - `TechArticle` schema on all `/guides/[id]` routes with `headline`, `author`, `reviewedBy`, and `dateModified`.
  - `BreadcrumbList` schema linking Home > Field Guides > Guide Name.
  - `FAQPage` schema on the homepage FAQ section for Google rich snippets.
  - `SoftwareApplication` schema for the interactive tools.
- [x] **Sitemap & Robots:**
  - `sitemap.xml` dynamically generated at build time via `app/sitemap.ts` indexing all 22+ canonical routes.
  - `robots.txt` generated via `app/robots.ts` permitting all search engine crawlers.
- [x] **Semantic Heading Hierarchy:**
  - Strictly one `<h1>` per page.
  - Logical descending hierarchy (`h2` for primary chapters, `h3` for subsections and cards).
  - Text contrast ratio passes WCAG AAA standards (> 7:1 for body copy on paper background).

---

## 2. Accessibility (a11y) & Keyboard Navigation

- [x] **Reduced Motion Compliance:**
  - `@media (prefers-reduced-motion: reduce)` resets all transitions and animations in `app/globals.css`.
  - GSAP context and Lenis disabled when `prefers-reduced-motion` matches.
  - Three.js WebGL animation bypassed, showing clean static SVG/CSS fallback.
- [x] **Interactive & Focus States:**
  - All interactive elements use native semantic `<button>` or `<a href="...">` elements.
  - Visible focus outlines (`:focus-visible`) maintained for keyboard navigators.
  - Mobile hamburger menu toggles `aria-expanded` and traps escape key via `keydown` listener.
  - Background scrolling locked when mobile navigation drawer is open.
- [x] **Image Accessibility:**
  - All images include meaningful, contextual `alt` text describing lighting, mood, and content (e.g. *"Sunlight glittering gold across the surface of water"*).
  - Purely decorative visual borders and glows marked with `aria-hidden="true"`.

---

## 3. Performance & Core Web Vitals (LCP, CLS, INP)

- [x] **Unified RAF Clock:**
  - Lenis smooth scrolling drives `lenis.raf()` directly from `gsap.ticker` to prevent duplicate requestAnimationFrame loops.
  - `ScrollTrigger.update` called on Lenis scroll events.
- [x] **Hero Image Optimization (LCP):**
  - Next/Image configured with `priority`, responsive `sizes`, and WebP generation for the desktop workspace photo.
- [x] **Three.js WebGL Efficiency:**
  - Renderer pixel ratio capped at `Math.min(window.devicePixelRatio, 1.5)` to protect mobile GPUs.
  - `IntersectionObserver` automatically cancels RAF when the canvas is scrolled off-screen.
  - Full disposal of geometries, materials, listeners, and DOM elements on unmount.
- [x] **Bundle Minimization:**
  - Zero heavy charting or extraneous UI libraries; strictly vanilla CSS with Tailwind v4, GSAP, Lenis, and Three.js.

---

## 4. Google AdSense & Editorial Standards

- [x] **Zero Thin Content Guarantee:**
  - All 7 starter guides expanded to exhaustive, authoritative manuals (1,000 to 2,200 words each).
  - Rich tables, step-by-step procedures, callouts, and statutory citations included on every guide.
  - Dedicated profession guides for Creators, Video Editors, Developers, Designers, and Solo Freelancers.
- [x] **Trust & Transparency (E-E-A-T):**
  - Explicit Author and Chartered Accountant Reviewer bylines on every guide.
  - Assessment Year compatibility explicitly displayed (AY 2025-26 & AY 2026-27).
  - Public Editorial & Sourcing Policy page (`/editorial-policy`) detailing 2-stage CA verification pipeline and correction protocols.
- [x] **Mandatory Legal & Policy Pages:**
  - Dedicated `/about` page detailing the editorial manifesto, board, and non-advisory boundary.
  - Dedicated `/contact` page with secure validation, spam honeypot, IP rate-limiting, and PII advisory.
  - Dedicated `/privacy` page disclosing cookie usage, Google DART advertising compliance, and DPDPA 2023 adherence.
  - Dedicated `/disclaimer` page clarifying non-advisory educational status under Indian law.

---

## 5. Tax & Legal Verification (Pre-Publication Review)

- [x] **Section 44ADA Calculation Validation:**
  - Presumptive profit fixed at statutory 50% of gross receipts.
  - New Tax Regime slabs (Section 115BAC) and Section 87A rebate (zero tax up to ₹7,00,000) accurate for AY 2025-26.
  - 4% Health and Education Cess computed on base tax.
  - Illustrative disclaimer visibly attached to calculator card.
- [x] **GST LUT Filing & Invoice Generator:**
  - Verification of Form GST RFD-11 steps against gst.gov.in portal.
  - Rule 96A 9-month foreign remittance condition clearly highlighted.
  - Live invoice declaration text generator with 1-click clipboard copy.
- [x] **Expense Planner & Section 32 WDV Depreciation:**
  - 40% WDV computer/laptop depreciation under Section 32(1).
  - Dual-use home rent and utility allocation under Section 37(1).
  - Automated break-even comparison against Section 44ADA.
- [x] **TDS Reconciliation & Section 244A Refund Interest:**
  - Client TDS ledger supporting Sec 194J (10%), 194J (2%), and 194C (1%).
  - Form 26AS matching and discrepancy warning.
  - Section 244A 0.5% simple interest per month (6% p.a.) calculation.
- [x] **Foreign Remittance Guidance:**
  - Correct RBI Purpose Codes referenced (P0802 for software, P0807 for creative consulting, P1006 for advertising, P1105 for audio-visual services).
  - Clarification of FIRC vs. FIRA vs. e-BRC banking differences.

---

## 6. Pre-Launch Command Verification

Run these validation commands before deploying to Vercel, Netlify, or AWS:

```bash
# 1. Verify clean linting
npm run lint

# 2. Verify clean production build and static page generation
npm run build

# 3. Test production build locally
npm start
```
