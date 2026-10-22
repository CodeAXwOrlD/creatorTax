import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creatortax.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CreatorTax India — Tax, GST & Finance Clarity for Freelancers",
    template: "%s | CreatorTax India"
  },
  description:
    "Practical Indian income tax, Section 44ADA, GST LUT renewal, international remittances (Wise, PayPal), and expense guides for freelancers, video editors, and digital creators.",
  applicationName: "CreatorTax India",
  authors: [{ name: "CreatorTax India Editorial Team", url: siteUrl }],
  creator: "CreatorTax India",
  publisher: "CreatorTax India",
  keywords: [
    "Section 44ADA calculator",
    "freelancer tax India",
    "GST LUT online renewal",
    "PayPal FIRC India",
    "Wise e-FIRA",
    "TDS refund freelancers 194J",
    "presumptive taxation 75 lakh",
    "advance tax freelancers"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "CreatorTax India",
    title: "CreatorTax India — Tax, GST & Finance Clarity for Freelancers",
    description:
      "Practical Indian tax, GST, and international payment guides built for India's independent workforce."
  },
  twitter: {
    card: "summary_large_image",
    title: "CreatorTax India — Tax Clarity for Freelancers",
    description:
      "Practical Indian tax, GST, and international remittance guides for creators and independent professionals."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F6F1E8"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://creatortax.in";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CreatorTax India",
    url: site,
    logo: `${site}/icon.svg`,
    description:
      "Financial education and practical tax guides for India's independent workforce.",
    sameAs: []
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CreatorTax India",
    url: site,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site}/guides?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en-IN" className={`${jakarta.variable} ${lora.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c")
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema).replace(/</g, "\\u003c")
          }}
        />
        <div className="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
