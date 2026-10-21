export interface ArticleSource {
  title: string;
  url: string;
  publisher: string;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Article {
  slug: string;
  category: "Income Tax" | "GST & Invoicing" | "USD & Remittances" | "Expenses & Deductions" | "Legal & Compliance";
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  reviewer: string;
  quickAnswer: string;
  whoItAppliesTo: string;
  statutoryLimits?: string;
  sections: ArticleSection[];
  commonTraps: string[];
  primarySources: ArticleSource[];
  faqs: ArticleFAQ[];
}

export const articles: Article[] = [
  {
    slug: "renew-gst-lut-online",
    category: "GST & Invoicing",
    title: "How to Renew GST LUT (Form RFD-11) Online for Financial Year 2025-26",
    description: "A complete step-by-step guide to filing and renewing your Letter of Undertaking online so you can export freelance services with zero IGST.",
    date: "2026-10-18",
    readTime: "8 min read",
    author: "CreatorTax Editorial Team",
    reviewer: "Verified against CGST Rules & GST Portal circulars",
    quickAnswer: "Eligible registered service exporters can furnish a Letter of Undertaking (LUT) in Form GST RFD-11 on the GST portal before April 1st of every financial year. This allows you to supply zero-rated export of services without paying integrated GST (IGST) upfront.",
    whoItAppliesTo: "Indian freelancers, software engineers, consultants, video editors, and agencies with active GST registration who invoice foreign clients in convertible foreign exchange.",
    statutoryLimits: "Valid for one complete financial year (April 1 to March 31). Requires dual witnesses and no prior prosecution for tax evasion exceeding ₹2.5 Crore under CGST Act Section 132.",
    sections: [
      {
        heading: "What is a GST LUT and Why Do You Need It?",
        paragraphs: [
          "Under Section 16 of the Integrated Goods and Services Tax (IGST) Act, 2017, the export of services is categorized as a 'Zero-Rated Supply'. This means the government does not seek to tax exports consumed overseas.",
          "However, to export services without paying 18% IGST upfront from your pocket and subsequently waiting months for a tax refund, GST law requires you to furnish a Letter of Undertaking (LUT) in Form GST RFD-11.",
          "Once filed, the LUT covers all zero-rated cross-border invoices issued during that financial year, allowing you to quote 'Export of services without payment of integrated tax under LUT' directly on your commercial invoices."
        ]
      },
      {
        heading: "Prerequisites Before Filing Form RFD-11",
        paragraphs: [
          "Before logging into the GST portal, prepare the required details to ensure a seamless 5-minute submission without session timeouts:",
          "Unlike physical declarations of the past, no physical submission to your jurisdictional range office is required. The entire process is 100% digital."
        ],
        bullets: [
          "Active GSTIN credentials with access to the registered email and mobile number for OTP/DSC verification.",
          "Details of two witnesses: Full names, residential addresses, and occupations. They can be colleagues, family members, or business partners.",
          "Confirmation that you have not been prosecuted for any offence under the CGST Act involving tax evasion exceeding ₹250 Lakhs.",
          "Previous year's LUT reference number (ARN) for archival continuity."
        ]
      },
      {
        heading: "Step-by-Step Portal Navigation",
        paragraphs: [
          "Follow this exact route on the official GST portal (gst.gov.in):",
          "1. Log in with your Username and Password.",
          "2. Navigate to: Services → User Services → Furnish Letter of Undertaking (LUT).",
          "3. Select the Financial Year for which the LUT is being applied from the dropdown (e.g., 2025-2026).",
          "4. Check the three statutory declaration checkboxes regarding export conditions under Rule 96A.",
          "5. Enter the names, occupations, and complete residential addresses of your two witnesses.",
          "6. Select the authorized signatory, specify the place of filing, and sign with Electronic Verification Code (EVC OTP) or Digital Signature Certificate (DSC)."
        ]
      },
      {
        heading: "Key Statutory Invoicing Requirements After Filing",
        paragraphs: [
          "Filing the LUT is only half the compliance. Every export invoice issued to overseas clients must strictly satisfy Rule 46 of the CGST Rules:",
          "Ensure your invoice contains the mandatory LUT declaration text: 'Supply Meant for Export Under Letter of Undertaking Without Payment of Integrated Tax'."
        ],
        bullets: [
          "Include your GSTIN, Legal Name, and registered business address.",
          "Client Name, overseas address, and destination country.",
          "Invoice date, unique sequential invoice number, and currency of invoice (USD, EUR, GBP, etc.).",
          "The exact LUT Application Reference Number (ARN) and date of generation.",
          "State clearly that payment will be received in convertible foreign exchange within the permissible RBI timeline (normally 9 months)."
        ]
      }
    ],
    commonTraps: [
      "Filing the LUT after raising export invoices. Invoices raised before LUT approval may theoretically be subjected to 18% IGST liability with interest.",
      "Receiving payments in Indian Rupees from a domestic third-party aggregator instead of foreign inward remittance in convertible foreign exchange.",
      "Forgetting to report the export turnover in Table 6A of monthly/quarterly GSTR-1 and Table 3.1(b) of GSTR-3B."
    ],
    primarySources: [
      {
        title: "CBIC Circular No. 8/8/2017-GST — Clarification on LUT and Bond",
        url: "https://www.cbic.gov.in",
        publisher: "Central Board of Indirect Taxes and Customs (CBIC)"
      },
      {
        title: "Rule 96A of Central Goods and Services Tax Rules, 2017",
        url: "https://gstcouncil.gov.in",
        publisher: "GST Council Secretariat"
      }
    ],
    faqs: [
      {
        question: "When is the deadline to renew the GST LUT?",
        answer: "The LUT must be filed on or before March 31st for the upcoming financial year starting April 1st. However, if missed, you should file it immediately before raising your first export invoice of the year."
      },
      {
        question: "Do I need to visit the local GST office to submit a physical copy of the LUT?",
        answer: "No. Since 2018, the online ARN generated on gst.gov.in upon EVC/DSC verification serves as the complete legal proof. No physical visit or jurisdictional officer sign-off is needed."
      },
      {
        question: "Can I file an LUT if my turnover is below ₹20 Lakhs?",
        answer: "If you have opted for voluntary GST registration or are registered for cross-border export of services, you can and should file an LUT to ensure your invoices remain zero-rated."
      }
    ]
  },
  {
    slug: "section-44ada-presumptive-tax-guide",
    category: "Income Tax",
    title: "Section 44ADA Presumptive Taxation: The Complete Guide for Indian Creators & Freelancers",
    description: "Understand the ₹75 Lakh digital limit, 50% profit assumption, specified profession eligibility, and how to save lakhs legally under Section 44ADA.",
    date: "2026-10-18",
    readTime: "11 min read",
    author: "CreatorTax Editorial Team",
    reviewer: "Verified against Section 44ADA, Section 44AA & Finance Act amendments",
    quickAnswer: "Section 44ADA allows eligible Indian professionals with gross annual receipts up to ₹75 Lakhs (provided cash receipts <= 5%) to declare 50% of their gross turnover as taxable profit, freeing them from maintaining burdensome accounting books and statutory tax audits under Section 44AB.",
    whoItAppliesTo: "Resident individual freelancers, software developers, technical consultants, UI/UX designers, film artists, and video editors rendering professional services.",
    statutoryLimits: "Turnover ceiling of ₹75 Lakhs (if cash <= 5%) or ₹50 Lakhs (if cash > 5%). Minimum 50% profit declaration required; higher profit can be declared voluntarily.",
    sections: [
      {
        heading: "What is Section 44ADA?",
        paragraphs: [
          "Introduced by the Finance Act 2016 to simplify taxation for small professionals, Section 44ADA provides a 'presumptive taxation scheme'. Instead of recording every coffee, software subscription, or stationery bill and having an auditor certify your books, the Income Tax Department presumes that 50% of your gross professional revenue represents your business expenses.",
          "The remaining 50% is treated as your 'Profits and Gains from Business or Profession' (PGBP) and taxed according to your chosen tax regime slab rates.",
          "Crucially, under Section 44ADA, you are legally exempt from maintaining formal books of account prescribed under Section 44AA and exempt from mandatory tax audit under Section 44AB."
        ]
      },
      {
        heading: "The ₹75 Lakh Enhanced Ceiling (Finance Act 2023 Update)",
        paragraphs: [
          "Historically, Section 44ADA was capped at ₹50 Lakhs in gross annual receipts. To accelerate digital payments, the Finance Act amended sub-section (1B):",
          "If your aggregate receipts in physical cash during the financial year do not exceed 5% of your total turnover, your eligible ceiling jumps by 50% to ₹75,00,000.",
          "Because international freelancers and remote tech workers almost universally receive compensation via NEFT, RTGS, Wire Transfers, Wise, or PayPal, virtually all digital creators qualify for the higher ₹75 Lakh threshold."
        ]
      },
      {
        heading: "Are You Legally an 'Eligible Specified Profession'?",
        paragraphs: [
          "One of the most dangerous traps in Indian creator taxation is assuming any internet worker can opt for 44ADA. Section 44ADA(1) applies strictly to professions mentioned in Section 44AA(1) and official CBDT notifications:",
          "1. Information Technology / Software Engineering (Notification No. SO 890(E)).",
          "2. Technical Consultancy and Engineering.",
          "3. Film Artists, Video Editors, Animators, Screenplay Writers (Notification No. SO 18(E)).",
          "4. Legal, Accountancy, Architectural, and Interior Decoration.",
          "What about YouTubers, Instagram Influencers, and Affiliate Marketers? If your primary revenue is brand sponsorship, ads, or merchandise rather than technical consultancy or artistic production, tax authorities may consider Section 44AD (presumptive scheme for general businesses at 6% digital / 8% cash turnover) or regular bookkeeping more appropriate. Always consult a CA to document your service classification."
        ]
      },
      {
        heading: "Advance Tax Single Installment Advantage",
        paragraphs: [
          "Regular individual taxpayers and businesses must deposit advance tax in four quarterly installments: 15% by June 15, 45% by Sept 15, 75% by Dec 15, and 100% by March 15. Missing these dates triggers mandatory interest penalties under Sections 234C and 234B.",
          "Under Section 211(1)(b), taxpayers opting for presumptive taxation under Section 44ADA enjoy an extraordinary statutory privilege: you only need to pay 100% of your advance tax in a single installment on or before March 15th.",
          "This gives freelancers immense cash-flow flexibility throughout the year without paying a single rupee in 234C penal interest."
        ]
      }
    ],
    commonTraps: [
      "Claiming separate deductions for laptop purchase, rent, or internet after opting for 44ADA. The 50% deemed profit already absorbs all business expenses under Section 30 to 38.",
      "Declaring profit below 50% without getting accounts audited under Section 44AB.",
      "Failing to deposit advance tax on or before March 15th, triggering 1% per month interest under Section 234B."
    ],
    primarySources: [
      {
        title: "Section 44ADA of the Income Tax Act, 1961",
        url: "https://incometaxindia.gov.in",
        publisher: "Income Tax Department of India"
      },
      {
        title: "Section 44AA — Maintenance of Accounts by Certain Persons Carrying on Profession or Business",
        url: "https://incometaxindia.gov.in",
        publisher: "Income Tax Department of India"
      }
    ],
    faqs: [
      {
        question: "Can I declare more than 50% profit under Section 44ADA?",
        answer: "Yes. 50% is the statutory minimum presumptive profit floor. If your actual net profit is 70% and you wish to declare 70% to maintain higher white income for visa or mortgage approvals, you are entirely free to do so."
      },
      {
        question: "Which ITR form should I file for Section 44ADA?",
        answer: "Eligible professionals opting for Section 44ADA file Form ITR-4 (Sugam). If your turnover exceeds ₹75 Lakhs or you choose to declare less than 50% profit, you must file ITR-3 with full audited financial statements."
      },
      {
        question: "Can a freelance video editor or content writer use Section 44ADA?",
        answer: "Video editors and animators are explicitly notified as film artists under CBDT Notification No. 18/2001. Technical content writers and developers qualify under technical consultancy or IT services."
      }
    ]
  },
  {
    slug: "paypal-wise-stripe-firc-guide",
    category: "USD & Remittances",
    title: "International Remittances for Indian Freelancers: PayPal, Wise, Stripe & e-FIRA/FIRC Guide",
    description: "How to reconcile foreign client payments, obtain valid Foreign Inward Remittance Certificates, verify RBI purpose codes, and prove zero-rated GST export compliance.",
    date: "2026-10-17",
    readTime: "9 min read",
    author: "CreatorTax Editorial Team",
    reviewer: "Verified against RBI Master Directions on Export of Goods and Services",
    quickAnswer: "To treat foreign freelance income as zero-rated under GST and prove that foreign currency entered India legally under FEMA regulations, you must obtain an e-FIRA (Foreign Inward Remittance Advice) or NOC from your intermediary bank containing the correct RBI purpose code (e.g., P0802 for software or P1007 for advertising).",
    whoItAppliesTo: "Independent software contractors, graphic designers, writers, creators, and consultants receiving USD, EUR, GBP, or other foreign currencies through PayPal, Wise, Stripe, Payoneer, or direct wire transfers.",
    statutoryLimits: "RBI regulations require export proceeds to be realized and repatriated to India within 9 months from the date of invoice.",
    sections: [
      {
        heading: "Why a Payment Screenshot is Not Enough",
        paragraphs: [
          "Many freelancers assume an email notification from PayPal or a Wise dashboard PDF is sufficient proof of export. In the eyes of GST audit officers and the Enforcement Directorate (FEMA), an internal dashboard receipt is not a statutory banking instrument.",
          "To prove zero-rated supply under GST Section 2(6) of the IGST Act, the third condition states: 'The payment for such service has been received by the supplier of service in convertible foreign exchange or in Indian rupees wherever permitted by the RBI'.",
          "The authorized document proving this is a Foreign Inward Remittance Certificate (FIRC) or electronic Foreign Inward Remittance Advice (e-FIRA) issued by an Authorized Dealer Category-I (AD Cat-1) bank in India."
        ]
      },
      {
        heading: "How Different Payment Rails Handle Remittance Advice",
        paragraphs: [
          "Understanding how your money flows prevents severe reconciliation headaches at tax filing time:",
          "1. Direct Bank Wire (SWIFT / Wire Transfer): Your Indian bank (HDFC, ICICI, SBI, etc.) is the AD bank. You can request an e-FIRA directly from NetBanking or your branch manager.",
          "2. Wise (formerly TransferWise): Wise routes funds through partner Indian banks (e.g., Yes Bank or HDFC). Wise generates downloadable e-FIRAs directly in your dashboard within 2–3 business days of transfer completion.",
          "3. Stripe India: Stripe automatically partners with an AD-1 bank and emails monthly consolidated e-FIRAs for all export transactions.",
          "4. PayPal India: PayPal routes international funds through partner banks. You must download the monthly settlement report and request an FIRC/NOC letter from PayPal's partner bank for GST verification."
        ]
      },
      {
        heading: "RBI Purpose Codes: Getting the Classification Right",
        paragraphs: [
          "When foreign currency enters an Indian bank, RBI mandates attaching a Purpose Code describing why the funds arrived. Using the wrong purpose code (such as gift or donation instead of export of service) can jeopardize your zero-rated GST status.",
          "Common RBI purpose codes for independent creators and contractors include:"
        ],
        table: {
          headers: ["Purpose Code", "Description", "Eligible Professions"],
          rows: [
            ["P0802", "Software implementation & consulting", "Developers, engineers, DevOps, QA testers"],
            ["P0803", "Data processing & database services", "Data scientists, analysts, backend infra"],
            ["P1007", "Advertising, trade fair & market research", "Influencers, marketing consultants, ad creators"],
            ["P1006", "Public relations & other business services", "Copywriters, strategists, virtual assistants"],
            ["P0902", "Audio, visual & artistic production", "Video editors, animators, music producers"]
          ]
        }
      }
    ],
    commonTraps: [
      "Using personal PayPal accounts without automated daily withdrawal, leading to unverified currency conversions.",
      "Accepting payments in INR from domestic Indian payment gateways representing foreign clients, which invalidates the convertible foreign exchange condition.",
      "Failing to download monthly e-FIRAs and discovering two years later that the partner bank has purged older remittance records."
    ],
    primarySources: [
      {
        title: "RBI Master Direction — Export of Goods and Services (FED Master Direction No. 16/2015-16)",
        url: "https://www.rbi.org.in",
        publisher: "Reserve Bank of India"
      },
      {
        title: "Section 2(6) of Integrated Goods and Services Tax (IGST) Act, 2017",
        url: "https://gstcouncil.gov.in",
        publisher: "GST Council Secretariat"
      }
    ],
    faqs: [
      {
        question: "Can I receive foreign payments in my normal savings bank account?",
        answer: "Yes, RBI allows individuals and proprietorships to receive inward export remittances into savings accounts. However, if your turnover grows, opening an EEFC (Exchange Earned Foreign Currency) or Current Account with an AD-1 bank allows easier trade facilitation and e-FIRA generation."
      },
      {
        question: "Is there a fee for getting an e-FIRA?",
        answer: "Direct bank wire transfers from Indian banks often charge ₹100–₹500 + GST per FIRC request. Fintech platforms like Wise provide e-FIRAs free of charge directly within their platform for eligible export purpose codes."
      }
    ]
  },
  {
    slug: "claim-tds-refund-freelancers",
    category: "Income Tax",
    title: "How Indian Freelancers Can Reconcile 26AS/AIS and Claim a Full TDS Refund",
    description: "A practical guide to checking Form 26AS, resolving client TDS mismatches under Section 194J/194C, and claiming your excess tax refund during ITR filing.",
    date: "2026-10-17",
    readTime: "8 min read",
    author: "CreatorTax Editorial Team",
    reviewer: "Verified against Income Tax Return filing rules & AIS portal workflows",
    quickAnswer: "If domestic clients deducted 10% TDS under Section 194J or 2% under Section 194C, and your final tax liability under Section 44ADA or standard regime is lower than the tax deducted, you are legally entitled to a 100% refund of the excess TDS with interest under Section 244A by filing your ITR.",
    whoItAppliesTo: "All Indian freelancers, video editors, designers, and consultants who receive payments from domestic companies after TDS deductions.",
    statutoryLimits: "Refund claims must be filed before the statutory ITR deadline (typically July 31st for non-audit individuals). Interest of 0.5% per month is paid by the IT department on delayed refunds under Section 244A.",
    sections: [
      {
        heading: "Why Do Domestic Clients Deduct TDS?",
        paragraphs: [
          "Under Indian tax law, corporate clients and audited entities paying fees to freelancers for technical or professional services are mandated to deduct Tax Deducted at Source (TDS) before releasing payment:",
          "Section 194J: 10% TDS on professional fees, technical services, or royalty.",
          "Section 194C: 1% or 2% TDS on contract work or advertising production.",
          "Section 194S: 1% TDS on virtual digital assets / crypto compensation.",
          "This withheld money is deposited by your client directly with the government against your PAN card. It is not an expense—it is your advance tax credit."
        ]
      },
      {
        heading: "Reconciling Form 26AS, AIS and Your Bank Statements",
        paragraphs: [
          "Before you file your Income Tax Return, you must ensure that every single rupee of TDS deducted by clients actually appears in your government tax ledger:",
          "1. Form 26AS: The statutory tax credit statement showing TDS deposited by deductors with their TAN numbers.",
          "2. Annual Information Statement (AIS): Comprehensive financial reporting, including gross receipts reported by clients, GST turnover, high-value savings interest, and mutual fund trades.",
          "If a client deducted ₹30,000 TDS from your invoices but forgot to file their quarterly Form 24Q/26Q return, that ₹30,000 will NOT show in your 26AS. You cannot claim credit for unreflected TDS—you must contact the client's finance team to file or revise their TDS statement."
        ]
      },
      {
        heading: "The Refund Calculation: Step-by-Step Example",
        paragraphs: [
          "Let's see how a TDS refund works in practice with Section 44ADA under the New Tax Regime (AY 2025-26):",
          "• Gross receipts from domestic clients: ₹12,00,000.",
          "• Total 10% TDS deducted under Section 194J: ₹1,20,000.",
          "• Deemed presumptive profit under Section 44ADA (50%): ₹6,00,000.",
          "• New Tax Regime liability on ₹6,00,000: Base tax is ₹15,000, but Section 87A rebate covers 100% of tax because income is under ₹7,00,000. Final tax liability = ₹0.",
          "• Net tax outcome: Final tax (₹0) minus TDS credit (₹1,20,000) = ₹1,20,000 Full Refund Due directly to your pre-validated bank account!"
        ]
      }
    ],
    commonTraps: [
      "Filing the ITR with an unvalidated or unlinked bank account, causing refund processing failure.",
      "Claiming TDS credit without matching gross turnover in the ITR, leading to automated defective return notices under Section 139(9).",
      "Missing the July 31st deadline, which delays refund disbursement and forfeits interest accrual under Section 244A."
    ],
    primarySources: [
      {
        title: "TDS Provisions under Section 194J and 194C",
        url: "https://incometaxindia.gov.in",
        publisher: "Income Tax Department of India"
      },
      {
        title: "Section 244A — Interest on Refunds",
        url: "https://incometaxindia.gov.in",
        publisher: "Income Tax Department of India"
      }
    ],
    faqs: [
      {
        question: "How long does the Income Tax Department take to issue a TDS refund?",
        answer: "For e-verified returns with no discrepancies, Centralized Processing Center (CPC Bengaluru) typically processes refunds within 15 to 45 days after verification."
      },
      {
        question: "Can I apply for a Lower or Nil TDS deduction certificate?",
        answer: "Yes. Under Section 197, if you know your final tax liability will be nil or very low, you can submit Form 13 online on the TRACES portal to obtain a Lower TDS Certificate authorizing clients to deduct 0% or 1% TDS."
      }
    ]
  },
  {
    slug: "rent-electricity-business-expenses",
    category: "Expenses & Deductions",
    title: "Can Indian Freelancers Claim Rent, Laptops, Software & Electricity as Business Expenses?",
    description: "Understand the strict rules behind claiming home office rent, hardware depreciation, and SaaS subscriptions under regular ITR-3 versus Section 44ADA.",
    date: "2026-10-16",
    readTime: "8 min read",
    author: "CreatorTax Editorial Team",
    reviewer: "Verified against Section 30-38 of Income Tax Act",
    quickAnswer: "If you file ITR-3 under the regular business computation method, you can claim actual expenses wholly and exclusively incurred for your profession (including proportionate home office rent, electricity, depreciation on laptops, and software subscriptions). However, if you opt for Section 44ADA presumptive taxation, you cannot deduct any separate expenses—the 50% profit margin automatically absorbs all deductions.",
    whoItAppliesTo: "Independent creators, video production houses, developers, and consultants evaluating whether to claim actual expenses or opt for presumptive taxation.",
    statutoryLimits: "Expenses must be backed by GST invoices, digital bank payments (cash payments above ₹10,000 per day are disallowed under Section 40A(3)), and reasonable allocation formulas.",
    sections: [
      {
        heading: "The Golden Rule: Section 44ADA vs Regular ITR-3 Expenses",
        paragraphs: [
          "Before you start tracking every utility receipt, understand the foundational choice in Indian tax law:",
          "Route A — Section 44ADA (Presumptive): You assume a flat 50% expense deduction without maintaining bills or receipts. You cannot claim an extra rupee for rent, laptop, or software on top of this 50%.",
          "Route B — Regular Profit Computation (ITR-3): If your actual professional expenses exceed 50% of your revenue (e.g. you hire subcontractors, pay heavy studio rent, or bought expensive cinema gear), you can claim each actual expense. However, you must maintain complete accounts under Section 44AA and potentially undergo a tax audit under Section 44AB if profit is below 50%."
        ]
      },
      {
        heading: "Home Office Rent and Electricity: The Proportionate Rule",
        paragraphs: [
          "If you work from home and file under regular business computation, you can claim rent under Section 30 and electricity under Section 31, provided you use a defensible proportionate allocation:",
          "Example: You rent a 2-bedroom flat for ₹40,000/month (₹4,80,000/year). One bedroom is dedicated exclusively as your workspace/studio, accounting for 30% of the total carpet area.",
          "You can legitimately claim 30% of your rent (₹1,44,000) and 30% of your electricity bills as business expenses. You must maintain rent agreements, digital rent receipts, and landlord PAN details."
        ]
      },
      {
        heading: "Laptops, Cameras & Hardware: Depreciation vs Direct Expense",
        paragraphs: [
          "A common mistake among freelance creators is treating an expensive ₹2,00,000 MacBook or Sony camera as a single-year direct operational expense.",
          "Under Indian tax law, computers, laptops, and cameras are capital assets. You cannot expense the entire purchase price in Year 1. Instead, you claim depreciation under Section 32 at statutory rates (40% for computers/software, 15% for general plant and machinery) using the Written Down Value (WDV) method."
        ]
      }
    ],
    commonTraps: [
      "Paying cash exceeding ₹10,000 for any business expense, which leads to 100% disallowance under Section 40A(3).",
      "Claiming 100% of personal grocery, travel, or family restaurant bills as 'business meetings'.",
      "Double-dipping: Claiming 44ADA presumptive 50% and then attempting to deduct laptop depreciation separately."
    ],
    primarySources: [
      {
        title: "Section 37(1) — General Business Expenses Wholly and Exclusively for Profession",
        url: "https://incometaxindia.gov.in",
        publisher: "Income Tax Department of India"
      },
      {
        title: "Depreciation Rates under Income Tax Rules, 1962 (Rule 5)",
        url: "https://incometaxindia.gov.in",
        publisher: "Income Tax Department of India"
      }
    ],
    faqs: [
      {
        question: "Can I claim SaaS subscriptions like Adobe Creative Cloud, Figma, and OpenAI?",
        answer: "Yes, under regular profit computation (ITR-3), recurring software licenses used exclusively for client deliverables are 100% deductible revenue expenditures."
      },
      {
        question: "Do I need GST invoices to claim expenses?",
        answer: "For income tax deduction, an invoice with bank payment proof is sufficient. However, if you are GST-registered and wish to claim Input Tax Credit (ITC) to offset GST liability, a valid GST invoice with your GSTIN is mandatory."
      }
    ]
  },
  {
    slug: "freelancer-contract-tax-records",
    category: "Legal & Compliance",
    title: "Written Client Contracts & Invoicing Rules for Indian Freelancers",
    description: "Essential contract clauses, IP transfer protections, GST invoice requirements, and legal documentation that shield independent creators from disputes.",
    date: "2026-10-16",
    readTime: "7 min read",
    author: "CreatorTax Editorial Team",
    reviewer: "Verified against Indian Contract Act & CGST Invoicing Rules",
    quickAnswer: "A written master service agreement (MSA) or statement of work (SOW) protects your payment terms, limits revisions, assigns intellectual property only upon full receipt of payment, and provides legal evidence to support zero-rated GST export claims during tax scrutiny.",
    whoItAppliesTo: "All independent professionals dealing with domestic and international clients.",
    statutoryLimits: "Governed by the Indian Contract Act, 1872 and Information Technology Act, 2000 (validating digital signatures and email agreements).",
    sections: [
      {
        heading: "Why You Must Never Work on a Handshake or DM",
        paragraphs: [
          "Verbal agreements and casual WhatsApp chats are the number one cause of unpaid invoices, scope creep, and copyright theft for creative professionals.",
          "A formal contract does two critical things: First, it defines clear commercial boundaries between you and the client. Second, during tax scrutiny or banking audits, it provides incontrovertible proof that your international wire transfer was legitimate consideration for independent professional services."
        ]
      },
      {
        heading: "5 Non-Negotiable Contract Clauses Every Creator Needs",
        paragraphs: [
          "Ensure every contract or statement of work includes these five protective clauses:",
          "1. Scope of Work (SOW) & Revision Cap: Specify exact deliverables and state that revisions beyond 2 rounds incur additional hourly fees.",
          "2. Payment Milestones & Late Fee: Upfront deposit (30% to 50%), milestone checkpoints, and a 1.5% monthly late payment interest clause.",
          "3. Intellectual Property Transfer on Full Payment: IP rights pass to the client ONLY after 100% of the invoice balance has settled in your bank account.",
          "4. Cancellation & Kill Fee: If the client cancels the project mid-way, you retain the deposit and receive payment for all completed milestone hours.",
          "5. Governing Law and Dispute Jurisdiction: Specify arbitration in your city in India for domestic contracts, or a neutral jurisdiction for cross-border contracts."
        ]
      }
    ],
    commonTraps: [
      "Handing over raw project files, source code, or high-res assets before receiving final payment.",
      "Vague scope descriptions like 'manage social media' without specifying monthly post counts, response hours, or content formats.",
      "Omitting an explicit clause stating whether payment platform processing fees (e.g., Stripe/PayPal 4%) are absorbed by the client or freelancer."
    ],
    primarySources: [
      {
        title: "Indian Contract Act, 1872",
        url: "https://indiacode.nic.in",
        publisher: "Legislative Department, Ministry of Law and Justice"
      }
    ],
    faqs: [
      {
        question: "Are digital contracts signed via DocuSign or PandaDoc legally binding in India?",
        answer: "Yes. Under Section 10A of the Information Technology Act, 2000, electronic contracts formed through digital and electronic signatures are legally valid and enforceable in Indian courts."
      }
    ]
  },
  {
    slug: "advance-tax-deadlines-penalties",
    category: "Income Tax",
    title: "Advance Tax Deadlines & Section 234B/234C Penalties: Freelancer Compliance Guide",
    description: "Learn how to compute quarterly advance tax installments, avoid 1% monthly interest penalties, and leverage the March 15th single installment rule.",
    date: "2026-10-18",
    readTime: "9 min read",
    author: "CreatorTax Editorial Team",
    reviewer: "Verified against Section 208, 211, 234B & 234C of Income Tax Act",
    quickAnswer: "If your estimated net tax liability (after subtracting TDS) exceeds ₹10,000 for the financial year, you must pay advance tax. While regular businesses pay in 4 quarterly installments, professionals opting for Section 44ADA are legally permitted to pay 100% of their advance tax in a single payment on or before March 15th.",
    whoItAppliesTo: "All Indian freelancers, developers, creators, and professionals earning income without sufficient TDS withholding (especially USD/export earners).",
    statutoryLimits: "Applies when net tax payable exceeds ₹10,000. Interest under Section 234C (1% per month on shortfall) and Section 234B (1% per month on unpaid balance after March 31).",
    sections: [
      {
        heading: "What is Advance Tax and Who Must Pay It?",
        paragraphs: [
          "Under Section 208 of the Income Tax Act, tax is collected on a 'pay-as-you-earn' basis. If your total estimated income tax liability for the financial year (after subtracting all TDS credits) is ₹10,000 or more, you are legally obligated to pay advance tax during the year itself.",
          "For freelancers working with foreign clients under GST LUT, zero TDS is deducted overseas. That means your entire tax liability must be paid through advance tax. Waiting until ITR filing season in July will attract heavy interest penalties under Section 234B and 234C."
        ]
      },
      {
        heading: "Installment Schedules: 44ADA vs Regular Taxpayers",
        paragraphs: [
          "The schedule differs dramatically based on whether you opt for presumptive taxation under Section 44ADA or regular business computation:"
        ],
        table: {
          headers: ["Due Date", "Regular Taxpayer (ITR-3)", "Section 44ADA Presumptive (ITR-4)"],
          rows: [
            ["On or before June 15", "15% of total tax", "Exempt (0%)"],
            ["On or before Sept 15", "45% of total tax", "Exempt (0%)"],
            ["On or before Dec 15", "75% of total tax", "Exempt (0%)"],
            ["On or before March 15", "100% of total tax", "100% of total tax (Single Payment)"]
          ]
        }
      },
      {
        heading: "Understanding the Painful Interest Penalties: Section 234C and 234B",
        paragraphs: [
          "Failing to deposit advance tax on time triggers two separate punitive interest charges:",
          "1. Section 234C: 1% simple interest per month on the shortfall in each installment. (44ADA filers avoid this completely for the first three quarters!).",
          "2. Section 234B: If you fail to pay at least 90% of your assessed tax by March 31st, interest of 1% per month is charged on the unpaid amount from April 1st until the day you actually file and pay your return."
        ]
      }
    ],
    commonTraps: [
      "Assuming advance tax is only for salaried individuals with company deductions.",
      "Leaving advance tax payment until March 31st instead of March 15th, which triggers interest.",
      "Selecting the wrong tax challan on the e-filing portal (Use Challan ITNS 280, Minor Head 100 - Advance Tax)."
    ],
    primarySources: [
      {
        title: "Section 211 — Installments of Advance Tax and Due Dates",
        url: "https://incometaxindia.gov.in",
        publisher: "Income Tax Department of India"
      },
      {
        title: "Section 234B and 234C Interest Computation Provisions",
        url: "https://incometaxindia.gov.in",
        publisher: "Income Tax Department of India"
      }
    ],
    faqs: [
      {
        question: "How do I pay advance tax online?",
        answer: "Log into the official Income Tax portal (incometax.gov.in), go to e-Pay Tax, select Assessment Year 2025-26, choose 'Advance Tax (100)', enter the tax breakdown, and pay via NetBanking, UPI, or Debit Card."
      }
    ]
  },
  {
    slug: "new-vs-old-tax-regime-freelancers",
    category: "Income Tax",
    title: "New vs Old Tax Regime: Which Saves More Tax for Indian Freelancers in AY 2025-26?",
    description: "A data-backed comparison of Section 115BAC versus the Old Tax Regime for independent professionals, including the ₹7 Lakh rebate and Chapter VI-A deductions.",
    date: "2026-10-18",
    readTime: "10 min read",
    author: "CreatorTax Editorial Team",
    reviewer: "Verified against Finance Act 2024 slab modifications",
    quickAnswer: "For most freelancers with presumptive profit up to ₹7 Lakhs (gross turnover up to ₹14 Lakhs under 44ADA), the New Tax Regime is an unbeatable winner with ₹0 tax liability due to Section 87A rebate. For higher incomes, the New Regime generally beats the Old Regime unless you have over ₹3.5–₹4 Lakhs in eligible deductions (80C, 80D, home loan interest).",
    whoItAppliesTo: "All individual Indian freelancers, consultants, and creators choosing their tax regime for AY 2025-26.",
    statutoryLimits: "The New Regime is now the default regime under Section 115BAC. Individuals with professional income must file Form 10-IEA if they wish to opt for the Old Regime.",
    sections: [
      {
        heading: "The Great Tax Regime Divide: Key Differences",
        paragraphs: [
          "Starting from AY 2024-25, the New Tax Regime under Section 115BAC became the statutory default. Unless you actively opt out by submitting Form 10-IEA, your return is assessed under the New Regime.",
          "Here is the core trade-off for independent professionals:"
        ],
        table: {
          headers: ["Feature", "New Tax Regime (Sec 115BAC)", "Old Tax Regime"],
          rows: [
            ["Default Status", "Statutory Default", "Optional (requires Form 10-IEA)"],
            ["Zero Tax Threshold", "Up to ₹7,00,000 (Sec 87A rebate)", "Up to ₹5,00,000 (Sec 87A rebate)"],
            ["Slab Rates", "Concessional (5%, 10%, 15%, 20%, 30%)", "Steeper (5%, 20%, 30%)"],
            ["Chapter VI-A Deductions", "Disallowed (No 80C, 80D, 80E)", "Allowed (80C up to 1.5L, 80D, etc.)"],
            ["Switching Rules for Freelancers", "Can switch only ONCE in a lifetime for business income", "Locked in once opted"]
          ]
        }
      },
      {
        heading: "The Form 10-IEA Warning for Professionals",
        paragraphs: [
          "Unlike salaried employees who can freely flip between Old and New regimes each financial year, individuals with income from business or profession face strict statutory restrictions under Section 115BAC(6):",
          "If you opt out of the New Regime to claim Old Regime deductions, you must file Form 10-IEA on or before the due date of filing your ITR under Section 139(1).",
          "Furthermore, once you switch back to the New Regime in any future year, you are permanently barred from ever returning to the Old Regime as long as you carry on a business or profession!"
        ]
      }
    ],
    commonTraps: [
      "Assuming salaried standard deduction of ₹75,000 applies to freelance income. Standard deduction is exclusively for salary heads under Section 16(ia).",
      "Forgetting to file Form 10-IEA before July 31st, which automatically invalidates your Old Regime selection and disallows all Chapter VI-A deductions.",
      "Locking yourself into the Old Regime when New Regime slab savings exceed your available 80C/80D investments."
    ],
    primarySources: [
      {
        title: "Section 115BAC — Tax on Income of Individuals and HUF",
        url: "https://incometaxindia.gov.in",
        publisher: "Income Tax Department of India"
      }
    ],
    faqs: [
      {
        question: "Can I claim Section 80C (PPF, ELSS, Life Insurance) under the New Regime?",
        answer: "No. The New Tax Regime disallows virtually all Chapter VI-A deductions, including 80C (₹1.5 Lakhs) and 80D (health insurance). In exchange, it offers lower baseline tax slabs and a full rebate up to ₹7 Lakhs taxable income."
      }
    ]
  }
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
