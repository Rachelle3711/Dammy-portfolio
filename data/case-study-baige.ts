import { CaseStudy } from "./case-study-types";


export const baigeWaas: CaseStudy = {
  slug: "baige-waas",
  client: "Baige Tech",
  year: "2023",
  title: "Wallet-as-a-Service Platform",
  websiteUrl: undefined,
  heroHeadline: "Empowering African Fintechs with Wallet Infrastructure at scale.",

  context:
    "Financial technology in Sub-Saharan Africa has revolutionized how economic value is managed. We've moved from simple P2P transfers to embedded finance and infrastructure-led growth. Nigeria has become a hub for payment innovation, building systems where none existed. By 2025, the focus shifted from \"banking the unbanked\" to \"empowering builders,\" emphasizing the need for robust B2B infrastructure. The fragmented payment landscape demands aggregation. Nigeria's Central Bank's push for cashless policies and FX liquidity issues require businesses to adopt multi-currency solutions, managing complex payouts and compliance efficiently. Baige emerged as a specialized Wallet as a Service (WaaS) platform designed to bridge the gap in digital financial infrastructure for businesses operating in Nigeria and beyond. The platform operates on a three-pronged architecture involving Admins (Baige), Merchants (Organizations), and End-customers (the final wallet owners). At its core, Baige allows businesses to collect payments in NGN and USD while providing the tools to create and manage multiple sub-wallets for their own customers via a robust API or a centralized dashboard. By offering a ==white-labeled infrastructure==, Baige enables merchants to scale without the heavy lifting of building a proprietary ledger system from scratch.",
  contextImages:[{src: "/images/Baige/baige1.png", aspect: "2/1", fit: "cover"}],
  problemHeading: "Bridging the Compliance and Currency Gap for African Global Trade",
  problemBody: [
    "Setting up walleting systems are hard, legally taxing and infrastructurally demanding. Many African merchants face significant hurdles when attempting to scale cross-border operations, particularly regarding multi-currency management (NGN/USD) and stringent KYC (Know Your Customer) compliance. Existing solutions often lack \"granular\" control over individual end-customer wallets, leading to:",
    "- **Operational Friction** — Merchants struggled to manage hundreds of sub-wallets, resulting in a significant increase in manual reconciliation errors.",
    "- **Compliance Bottlenecks** — Collecting, storing, and upgrading KYC documents of customers across multiple tiers was a fragmented process.",
    "- **Lack of Visibility** — There was no \"eagle-eye\" view for platform admins to monitor the health of transactions and API requests in real-time.",
  ],

  objectiveHeading: "Simplifying a Financial Infrastructure for Rapid Scaling",
  objectiveBody: [
    "The primary goal was to design a dual-sided ecosystem; A Merchant Dashboard and an Admin Panel that simplifies the complexities of wallet creation and transaction monitoring.",
    "The key objectives included:",
    "- **Scalability** — Enable merchants to create multiple wallets seamlessly via API or Dashboard.",
    "- **Control** — Provide granular management tools for wallets, including the ability to disable, deactivate, or view detailed inbound/outgoing transaction logs.",
    "- **Integration** — Facilitate ==one-click connections== to major payment gateways like Paystack, Flutterwave, and Stripe.",
  ],
   objectiveImages:[{src: "/images/Baige/baige2.png", aspect: "2/1", fit: "contain"}],
  role: [
    "Product Design",
    "UX Research",
    "UX Strategy",
    "Information Architecture",
    "Developer Management",
    "Interaction Design",
  ],
  roleBody: [
    "As the Lead Product Designer, I was responsible for the end-to-end user experience of the Baige platform across both the merchant-facing side and the admin-facing experiences. My work spanned:",
    "- **UX Research & Information Architecture** — Mapping out the complex relationships between Organizations and their End-customers.",
    "- **Interface Design** — Designing high-fidelity web and mobile-web interfaces for both the customer-facing and admin sides.",
    "- **Prototyping** — Developing interactive flows for wallet creation, KYC uploads, and API monitoring.",
    "- **Systems Design** — Establishing a design language that conveys the brand identity, trust, financial security, and data clarity.",
  ],

  investigationHeading: "Uncovering the Merchant's and Admin's needs",
  investigationBody: [
    "To understand the needs of our users, I conducted a deep dive into the API-first versus Dashboard-first preferences of modern fintechs, especially when it comes to wallet creation and management.",
    "- **Discovery** — I found that while developers value the API logs and webhook monitoring features, the operations teams of merchants require a visual, tabular way to manage transactions and other affairs.",
    "- **Data Analysis** — Analysis of historical transaction patterns revealed a need for a projection graph on the dashboard to show the comparative health of NGN vs. USD transactions.",
    "- **Technical Audit** — We identified that merchants needed a way to filter and export data (PDF/CSV) across all tables to satisfy internal/external auditing requirements; amongst others.",
    "We distilled these findings into the following hypotheticals:",
  ],
  investigationImages:[{src: "/images/Baige/baige3.png", aspect: "2/1", fit: "contain"}],

  userPersonasIntro: "We interviewed and synthesized insights around three typical user groups:",
  userPersonasImages: [{src: "/images/Baige/baige4.png", aspect: "2/1", fit: "contain"}],

  designGoalsBody: [
    "The primary design goal was to create a clarity-first, compliance-ready wallet infrastructure that could scale with both merchants and their end-customers. The experience needed to surface complex financial data in a way that felt intuitive, actionable, and trustworthy, while reducing operational friction for non-technical teams. Every design decision prioritized visibility, control, and auditability, ensuring users could manage multi-currency wallets, monitor transactions, and meet regulatory requirements confidently from a single platform.",
  ],

  designLanguageBody: [
    "The design language was built on the principles of **clarity, density, and modularity.** The design emphasizes a neutral, enterprise-grade visual language optimized for data density and long operational use. Clarity and consistency drive the experience, with color used for signaling critical states.",
    "- **Typography & Color** — Neutral palette; high-contrast accents for status indicators.",
    "- **Tables** — Paginated with filters and search for large datasets.",
    "- **Navigation** — 7 items for customers, 5 for admins; supports deep features like Teams & Permissions.",
    "- **Principles** — Clarity over aesthetics, consistency across roles, status-driven UI, progressive disclosure.",
    "- **Color Usage** — Wallet states, transaction outcomes, risk/failure points, and also brand identity.",
  ],

  solutionBody: [
    "We interviewed and synthesized insights around three typical user groups.",
  ],
  solutionImages:[ {columns: 1,
    images:[
     { src: "/images/Baige/baige5.png", aspect: "2/1", fit: "cover" } ]
    },

   {
    heading: "PLATFORM OVERVIEW",
    columns: 1,
    images: [
    { src:"/images/Baige/baige6.png", fit: "contain", aspect: "2/1" },
    ],
  },
 
  {
    heading: "MERCHANT DASHBOARD",
    columns: 2,
    images: [
    { src:"/images/Baige/baige7a.png", fit: "contain", aspect: "3/4" },
     { src:"/images/Baige/baige7b.png", fit: "contain", aspect: "3/4" },
    ],
  },

  {
    heading: "ADMIN DASHBOARD",
    columns: 2,
    images: [
    { src:"/images/Baige/baige8a.png", fit: "contain", aspect: "3/4" },
     { src:"/images/Baige/baige8b.png", fit: "contain", aspect: "3/4" },
    ],
  },
  ],
  hifiDesignBody:["The platform was designed primarily for Web, but I also developed a Mobile-Web version to ensure that merchants could monitor their dashboard and approve requests on the go."],
  hifiDesignImages:[
    {src: "/images/Baige/baige9.png", aspect: "2/1", fit: "contain"},
    {src: "/images/Baige/baige10.png", aspect: "2/1", fit: "contain"},
    {src: "/images/Baige/baige11.png", aspect: "2/1", fit: "contain"},
    {src: "/images/Baige/baige12.png", aspect: "2/1", fit: "contain"},
    {src: "/images/Baige/baige13.png", aspect: "2/1", fit: "contain"},
    {src: "/images/Baige/baige14.png", aspect: "2/1", fit: "contain"},
  ],
  validationHeading: "Its sticky and shareable",
  validationBody: [
    "Since integrating Split & Settle into Lendsqr's consumer app, the feature has proven to be more than just useful — it's sticky, shareable, and genuinely changing how Nigerians handle group money.",
  ],
  resultStats: [],

  reflectionHeading: "Looking Back, Building Forward",
  reflectionBody: [
    "Designing the Baige platform taught me that in Fintech B2B platforms, information density is a feature, not a bug, as long as it is properly organized. The project also taught myself and the team a few key lessons:",
    "- Fintech products succeed on **clarity**, not creativity",
    "- Admin tools deserve as much design attention as user apps",
    "- Tables, filters, and exports are powerful when designed well",
    "- Compliance isn't just a legal requirement; it's a core part of the user journey that needs to be as seamless as the payment itself",
    "**Future Thinking:** For future iterations, I would look into implementing automated \"Charge\" adjustments based on transaction volume to further empower the Admin side.",
  ],

  conclusionHeading: "In Conclusion",
  conclusionBody:
    "You can think of Baige as a digital bank-in-a-box. Just as a landlord provides an apartment building (the infrastructure) but allows each tenant to decorate and manage their own room (the wallets), Baige provides the secure structure for merchants to host and manage thousands of individual accounts for their own customers without having to build the building/infrastructure themselves.",

  team: [
    { name: "Damilola Olayiwola", role: "Lead Product Designer" },
    { name: "Yusuf Ajide", role: "Product Designer" },
    { name: "Olufunsho Osunaike", role: "CTO" },
    { name: "Babatunde Dire-Odunkale", role: "Product Manager" },
  ],
};