# MASTER PROMPT — CreatorTax India / Immersive Editorial Website

> **Role & Persona:**
> Act as a principal frontend engineer, award-winning editorial web designer, interaction designer, and creative technologist. You have deep expertise in typography, modern animation systems (GSAP, Lenis, Three.js), accessible web applications, and Indian tax compliance. Continue and elevate the existing CreatorTax India codebase. Do not replace it with a generic AI SaaS template or simplify it into a short landing page.

---

## 1. Executive Vision & Core Philosophy

**CreatorTax India** is an authoritative, art-directed digital publication and financial field guide designed specifically for India's independent creative and tech class — freelancers, full-stack engineers, video editors, 3D artists, UI/UX designers, and independent consultants.

- **Tone & Mood:** Warm editorial aesthetic, contemporary independent magazine, cultural financial journal, and practical operational manual.
- **Color Palette:**
  - Ivory / Paper background (`#F6F5F0`, `#F2F1EA`, `#EEEDE6`)
  - Deep Forest & Ink Green (`#203E35`, `#315C4E`)
  - Misty Sage & Mint accents (`#DCE7D9`, `#E2E8DD`)
  - Restrained Amber & Sunlight gold (`#D9A85B`, `#B8863B`)
  - Rich Dark Ink for text (`#182522`, `#2D4039`)
- **Typography:**
  - Serif Display: *Playfair Display* (Editorial character, oversized titles, poetic emphasis)
  - Clean Sans: *DM Sans* (Readable body typography, crisp line heights)
  - Monospace: *DM Mono* (Data points, statutory citations, micro-badges, and numerical metrics)

---

## 2. Visual Reference System: Lighting & Organic Atmosphere

The project is guided by four distinct visual references provided by the author:
1. **High, Sculptural Monochrome Clouds (`/images/reference-clouds.png`):** Used in the atmospheric transition to introduce calm and cognitive breathing room.
2. **Sunlight Glittering Gold Across Water (`/images/reference-golden-water.png`):** Illuminating the foreign remittances and cross-border currency chapter.
3. **A Delicate Flower in Warm Late-Afternoon Backlight (`/images/reference-sunflower-light.png`):** Illustrating systematic operational habits and compounding peace of mind.
4. **Sun Rays Filtering Through Forest Foliage (`/images/reference-sunrays.png`):** Symbolizing clarity piercing through dense tax regulations.
5. **Warm Working Desk (`/images/sunlit-workspace.png`):** Grounding the hero in the tactile reality of modern creative work.

*Rule:* Treat photography as an organic visual language — diffuse light, warm highlights, natural contrast, and atmospheric depth. Never use imagery as generic repetitive wallpaper.

---

## 3. Technology Stack & Architecture Constraints

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript (Strict mode enabled).
- **Styling:** Tailwind CSS v4 with custom CSS custom properties and handcrafted editorial styling in `app/globals.css`.
- **Motion & Scrolling:**
  - **GSAP 3 + ScrollTrigger:** Pinned sections, scrubbed image reveals, text clipping, and responsive horizontal panels.
  - **Lenis:** Smooth inertia scrolling. **Critical:** Synchronize Lenis with GSAP's ticker (`gsap.ticker.add((time) => lenis.raf(time * 1000))` and `lenis.on('scroll', ScrollTrigger.update)`). Use a single unified RAF clock only; do not spawn concurrent loops.
- **3D Graphics:** Three.js for client-only, lightweight sculptural accents.
  - Cap device pixel ratio at `1.5`.
  - Disconnect listeners and dispose geometries, materials, and WebGL renderers on unmount.
  - Pause RAF animation via `IntersectionObserver` when scrolled off-screen.
  - Provide a graceful static fallback when `prefers-reduced-motion` is active or WebGL is unsupported.
- **Icons & Images:** Lucide React and Next/Image with responsive `sizes` attributes and WebP/PNG formats.

---

## 4. Homepage Storyline & Section Architecture

The homepage is deliberately long-form, deep, and narrative-driven. Do not compress it:

1. **Editorial Hero:** Sunlit workspace photo, masked staggered typography, live status dot, tactile circular stamp (`LESS GUESSWORK ↗`), and quick anchors.
2. **Moving Topic Ribbon (Marquee):** Smooth ticker displaying foundational themes.
3. **Atmospheric Introduction:** Cloud-wash backdrop with oversized typography introducing the self-made economy.
4. **Three Image-Led Story Chapters:**
   - *Chapter 01: The Independent Economy* (Sunbeams through canopy, 50% presumptive relief)
   - *Chapter 02: Money Crosses Borders* (Golden water, zero-rated export with LUT)
   - *Chapter 03: Small Details, Big Relief* (Flower in warm backlight, clarity over shortcuts)
5. **Pinned Horizontal Workflow Track:**
   - 4-step sequence: *Earn* (Contract & 50% deposit) → *Invoice* (Form GST RFD-11 LUT) → *Record* (FIRA & RBI Purpose Codes) → *Reconcile* (26AS matching & NACH refund).
   - Driven by vertical scroll on desktop; gracefully converted to a native card flow on mobile via `gsap.matchMedia()`.
6. **Comparison Matrix (Chaotic Route vs. Systematic Workflow):** Direct side-by-side comparison illustrating why structured systems prevent 18% IGST traps, lost FIRCs, and March tax panic.
7. **Knowledge Shelf (Field Guides Grid):** Interactive filter tabs (*All, GST, Forex, Income Tax, Expenses, Contracts*), cards with reading times, category tags, and CA verification badges.
8. **Compliance Calendar:** 6 annual milestones (Advance Tax quarters, ITR deadline July 31, and LUT renewal March 31) with penalty alerts.
9. **The Freelancer's Desk (Tax Estimator):**
   - Section 44ADA (50% presumptive profit) vs. Itemized Actual Expenses.
   - Dual-Regime Comparison: New Tax Regime (Section 115BAC with Section 87A ₹7 Lakhs rebate) vs. Old Tax Regime (with 80C/80D).
   - TDS deduction offset and net refund/payable calculation.
   - Clear educational disclaimers.
10. **About & Editorial Manifesto:** Transparent E-E-A-T credentials, Chartered Accountant review board, and statutory citations.
11. **FAQ Section:** 8 comprehensive accordion questions with rich schema and keyboard accessibility.
12. **Three.js Study in Clarity:** Ambient 3D torus knot reacting subtly to mouse position with warm amber lighting.
13. **Comprehensive Footer:** Full field guide directory, legal links, official portal references (CBDT, GST, TRACES, RBI), and copyright.

---

## 5. Editorial Content & Google AdSense Standards

To qualify for Google AdSense and rank organically, content must never be "thin" or generic. Every field guide in `lib/articles.ts` must maintain:
- **Author & Reviewer Byline:** Explicit credentials (e.g., Senior Tax Editor + Fellow Chartered Accountant reviewer).
- **Statutory Legal Basis:** Explicit citation of Indian statutes (e.g., IGST Act Sec 16(3), CGST Rule 96A, Income Tax Act Sec 44ADA, Sec 194J, FEMA Current Account Rules).
- **Structured Learning:** Executive summary with key takeaways, data comparison tables, step-by-step procedures, custom callouts (`statute`, `warning`, `tip`, `formula`), and in-article FAQs.
- **Table of Contents (TOC):** Sticky navigation permitting quick jumps between technical sections.
- **Dedicated Legal Pages:** Fully written About, Contact, Privacy Policy (DPDPA 2023 & Google cookie disclosures), and Statutory Disclaimer pages.

---

## 6. Accessibility, Mobile & Performance Directives

- **Mobile Responsiveness:** Flawless rendering from 360px smartphones (iPhone SE) to 4K ultrawide monitors. No horizontal overflow or scroll traps.
- **Touch Safety:** Disable GSAP pinning on touch devices or screens `<900px` using `gsap.matchMedia()`.
- **Keyboard Access:** Mobile menu closes on `Escape` key; focus states remain visible; interactive elements use semantic HTML buttons and anchors.
- **Reduced Motion:** Honor `@media (prefers-reduced-motion: reduce)` in CSS and JavaScript contexts by disabling smooth scrolling, scrub transforms, and looping 3D animations.
- **Structured Data:** Injected JSON-LD schemas for `WebSite`, `TechArticle`, `BreadcrumbList`, and `FAQPage`.

---

## 7. Operational Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run ESLint validation
npm run lint

# Production build and static page generation
npm run build
```
