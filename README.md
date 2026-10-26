# CreatorTax India — Immersive Next.js Edition

An art-directed, long-form editorial publication and financial field guide engineered for India's independent creators, video editors, software engineers, and digital consultants.

---

## Technical Architecture

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript (Strict)
- **Styling:** Tailwind CSS v4 + Handcrafted CSS Design Tokens (`app/globals.css`)
- **Motion & Scrolling:**
  - GSAP 3 + ScrollTrigger for scroll-scrubbed reveals, typography masks, and pinned storytelling
  - Lenis for inertia smooth scrolling, tightly synchronized with the unified GSAP RAF ticker
- **3D Graphics:** Three.js for lightweight client-only WebGL form study with memory cleanup, resize handling, and reduced-motion fallback
- **Typography:** Playfair Display (Editorial Display Serif), DM Sans (Body Sans), and DM Mono (Data and Statutory Badges)
- **Icons:** Lucide React

---

## Local Development & Setup

### Prerequisites
- Node.js 20.9.0 or higher
- npm 10.0.0 or higher

### Installation
```bash
# Clone or navigate to the repository
cd CreatorTax_India_Starter_Codebase

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Linting & Type Checking
```bash
npm run lint
```

### Production Build & Static Export
```bash
npm run build
npm start
```

---

## Key Features & Page Structure

1. **Editorial Hero Section:**
   - Visual desk reference with subtle rotation, typography entrance masks, live status dot, and floating tactile stamp (`LESS GUESSWORK ↗`).
2. **Atmospheric Introduction & Story Chapters:**
   - Sculptural monochrome cloud transition (`/images/reference-clouds.png`).
   - Three wide image-led chapters: Sunbeams through canopy (`reference-sunrays.png`), golden water (`reference-golden-water.png`), and backlit flower (`reference-sunflower-light.png`).
3. **Pinned Horizontal Workflow Sequence (Earn → Invoice → Record → Reconcile):**
   - Driven by vertical scroll on desktop; responsive native card flow on mobile via `gsap.matchMedia()`.
4. **Chaotic Route vs. Systematic Workflow Matrix:**
   - Practical operational comparison of common freelancer pitfalls vs CreatorTax workflows.
5. **Knowledge Shelf (Field Guides):**
   - 6 in-depth, long-form guides covering GST LUT renewal, PayPal & Stripe FIRA/e-BRC, Section 44ADA presumptive slabs, TDS refund recovery, home office deductions, and creator contracts.
   - Live category filtering and CA review credentials.
6. **The Freelancer's Desk (Interactive Tax Estimator):**
   - Section 44ADA 50% deemed profit toggle vs itemized actual business expenses.
   - Dual-regime side-by-side calculation: New Tax Regime (Section 115BAC with Section 87A rebate) vs Old Tax Regime.
   - Instant TDS credit offset calculating net tax payable or direct NACH refund claim.
7. **Annual Compliance Calendar:**
   - 6 critical statutory milestones (Advance Tax quarters, ITR filing July 31, and LUT renewal March 31).
8. **Interactive 3D Study in Clarity:**
   - Lightweight Three.js Torus Knot responding subtly to cursor position, auto-paused when off-screen.
9. **Legal & Transparency Suite:**
   - Dedicated `/about`, `/contact`, `/privacy`, and `/disclaimer` pages adhering to the Digital Personal Data Protection Act (DPDPA 2023) and Google AdSense policies.

---

## Documentation & Assets

- `MASTER_PROMPT.md`: The complete master prompt governing the code and design architecture.
- `LAUNCH_CHECKLIST.md`: Launch audit covering SEO, accessibility, performance, and legal readiness.
- `public/images/`: Bundled local visual references and project imagery.

---

## Statutory Disclaimer

*CreatorTax India is an educational publication and is not a registered Chartered Accountancy firm, legal counsel, or financial advisor. All materials and tools are provided for informational and illustrative guidance under Indian law. Tax laws change regularly; always seek personal advice from a qualified Chartered Accountant before filing returns.*
