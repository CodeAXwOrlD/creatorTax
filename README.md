# CreatorTax India 🇮🇳

**Practical, source-cited Indian tax, GST & finance guides for digital freelancers.**

> _Section 44ADA · GST LUT · TDS Refunds · International Remittances · Advance Tax — all updated for AY 2025-26_

---

## What Is This?

CreatorTax India is an open, free-to-use educational platform built specifically for India's independent digital workforce — software engineers, video editors, graphic designers, content creators, and technical consultants who earn professional fees and/or receive international remittances.

Unlike generic CA blogs or government portals, every guide here:
- **Cites primary sources** — Income Tax Act, GST circulars, RBI Master Directions
- **Speaks in plain English** — no dense legalese, no "consult your CA" deflections
- **Stays current** — updated every Union Budget and major Finance Act change
- **Respects privacy** — all calculators run entirely client-side (zero income data leaves your browser)

---

## Features

### 📚 Knowledge Library (8+ Guides)
| Guide | Topic |
|---|---|
| Section 44ADA Presumptive Tax | 50% profit assumption, ₹75L threshold, AY 25-26 slabs |
| GST LUT Online Renewal | Zero-rate exports without 18% IGST — step-by-step |
| PayPal / Wise / Stripe e-FIRA | Foreign remittance proof, purpose codes, BRC |
| TDS 194J & 194C Refunds | Reconcile 26AS/AIS, claim excess TDS via ITR |
| Advance Tax Deadlines | Single March 15 payment rule for 44ADA, 234B/234C interest |
| New vs Old Tax Regime | Interactive comparison with Section 87A rebate |
| Rent & Home Office Deductions | Old regime expense deductions for professionals |
| Income Tax Notice Replies | How to respond to 143(1) intimations |

### 🛠️ Interactive Tools
- **44ADA Calculator** — Compare New vs Old Regime, 87A rebate, effective rate, TDS offset
- **Tax Preview** — Real-time slider-based income estimator on the homepage

### 🎨 Design & UX
- **Plus Jakarta Sans + Lora** — premium typographic pairing via `next/font`
- **Motion (Framer Motion)** — scroll-reveal animations, page load transitions, mobile drawer
- **Scroll-aware navigation** — frosted glass nav that deepens on scroll
- **Fully responsive** — mobile-first, tested down to 320px
- **Reduced-motion safe** — respects `prefers-reduced-motion`
- **CSS-only FAQ accordion** — zero JS for `<details>` expand/collapse

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | Stable, RSC-first, excellent SEO via `generateMetadata` |
| Language | TypeScript 5.9 | Full type safety, including Zod-validated API routes |
| Styling | Vanilla CSS (globals.css) | Zero dependency, full control, tiny bundle |
| Fonts | `next/font/google` (Plus Jakarta Sans + Lora) | Build-time loading, self-hosted, zero FOUT |
| Animation | Motion (motion/react) | Lightweight, tree-shakeable, Framer Motion successor |
| Icons | Lucide React | Consistent, accessible SVG icon set |
| Forms | Zod validation + Server Actions | Type-safe, no library overhead |
| Email | Resend (via Server Action) | Clean API, excellent delivery rates |
| Database | Supabase (PostgreSQL) | Open source, Row Level Security built-in |
| Analytics | Privacy-first (no GA, no tracking) | Consistent with our privacy promise |

---

## Project Structure

```
src/
├── app/
│   ├── about/           # About + editorial standards
│   ├── api/             # Route handlers (contact form, etc.)
│   ├── contact/         # Contact page
│   ├── corrections/     # Error reporting page
│   ├── disclaimer/      # Financial disclaimer
│   ├── editorial-policy/
│   ├── guides/          # [slug] dynamic guide pages
│   ├── privacy/         # Privacy policy
│   ├── tools/           # 44ada-calculator, etc.
│   ├── globals.css      # Full design system (tokens, components, responsive)
│   ├── layout.tsx       # Root layout + font loading + JSON-LD schema
│   ├── page.tsx         # Landing page (hero, FAQs, testimonials, CTA)
│   ├── robots.ts        # Robots.txt generation
│   └── sitemap.ts       # Dynamic sitemap
├── components/
│   ├── logo.tsx         # CTLogo + CTLogoFull SVG components
│   ├── site-header.tsx  # Scroll-aware nav + mobile drawer
│   ├── site-footer.tsx  # Multi-column footer + social links
│   ├── reveal.tsx       # Motion scroll-reveal wrapper
│   ├── guide-card.tsx   # Article card component
│   ├── guides-directory.tsx # Searchable guides page
│   ├── calculator-client.tsx # 44ADA calculator (client component)
│   ├── tax-preview.tsx  # Homepage interactive preview
│   └── contact-form.tsx # Server Action contact form
└── lib/
    ├── articles.ts      # Guide metadata registry
    ├── tax.ts           # Section 44ADA calculation engine
    └── supabase/        # Server/client Supabase clients
```

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### 1. Clone & Install
```bash
git clone https://github.com/your-org/creatortax-india.git
cd creatortax-india
npm install
```

### 2. Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Supabase (for contact form persistence)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Resend (for email delivery)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=editorial@creatortax.in
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Available Scripts
| Command | Description |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run typecheck` | TypeScript check (no emit) |
| `npm run lint` | ESLint (flat config, Next.js rules) |
| `npm run test` | Vitest unit tests |
| `npm run test:watch` | Vitest in watch mode |

---

## Security & Privacy

- **No client-side tracking** — no Google Analytics, no Hotjar, no pixel
- **No income data stored** — calculators are 100% client-side
- **Content Security Policy** — configured in `next.config.ts`
- **Environment variable validation** — Zod schema at boot
- **Row-Level Security** — all Supabase tables protected by RLS policies
- **Secrets management** — all keys in `.env.local`, never committed (see `.gitignore`)

---

## Content & Editorial Standards

1. **Primary sources only** — every statutory claim cites the original Act/circular/notification
2. **Assessment year clearly labeled** — every guide shows which AY it covers
3. **Scope is explicit** — guides state what they don't cover (e.g., "not applicable to companies")
4. **Not individualized advice** — educational content only; a disclaimer appears on every guide
5. **Corrections policy** — factual errors can be reported via `/corrections` — reviewed within 48h

---

## Deployment

### Vercel (Recommended)
```bash
npx vercel --prod
```
Set environment variables in Vercel dashboard under **Settings → Environment Variables**.

### Hostinger / Node.js VPS
```bash
npm run build
npm run start
```
Use a process manager like PM2:
```bash
pm2 start npm --name creatortax -- start
pm2 save && pm2 startup
```

### Self-hosted with Nginx (reverse proxy to port 3000)
```nginx
server {
    listen 80;
    server_name creatortax.in www.creatortax.in;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Contributing

This project follows a strict editorial standard. If you'd like to contribute a guide:

1. Open an issue with your proposed topic
2. Include at least one primary source (Income Tax Act section, CBDT circular, or RBI notification)
3. Follow the existing guide format in `/src/lib/articles.ts` and `/src/app/guides/[slug]/`

---

## License

MIT © CreatorTax India. Educational content is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

---

> **Disclaimer**: CreatorTax India provides general educational information only. Nothing here constitutes individualized legal, accounting, or tax advice. Always verify statutory thresholds with the latest Finance Act and consult a qualified Chartered Accountant for your specific situation.
