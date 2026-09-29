import { CaseStudy } from "./case-study-types";

export const startbutton: CaseStudy = {
  slug: "startbutton-bulk-payment",
  client: "STARTBUTTON AFRICA",
  year: "2022",
  title: "Enabling local businesses sell beyond boundaries",
  websiteUrl: undefined, 
  heroHeadline: "Empowering African Fintech with Wallet Infrastructure at scale.",
  context:
    "Startbutton is a leading comprehensive Merchant of Record (MoR) platform designed to bridge the gap between African businesses and global markets. By acting as a legal and financial intermediary, Startbutton allows merchants to sell in multiple African countries and beyond without the logistical burden of establishing a physical presence or navigating complex foreign regulatory landscapes.\n\nAs a compliance and merchant of record platform, Startbutton simplifies cross-border commerce by enabling seamless acceptance of local payments, facilitating accurate remittance of local taxes and ensuring adherence to all local regulations. The product suite gives merchants the tools needed to succeed in any country they go-live in.",
  contextImages:[{src: "/images/startbutton/startbutton1.png", aspect: "2/1", fit: "contain" }],
  problemHeading: "Bridging the Compliance and Currency Gap for African Global Trade",
  problemBody: [
    "Expanding a business across African borders is notoriously difficult. Merchants typically face four major hurdles: the legal requirement to establish a physical local entity, the complexity of navigating diverse tax (VAT/GST) and compliance regulations in each country, and the fragmented nature of African payment methods. These barriers often lead to high operational costs, lengthy setup times (often exceeding 6 months), and lost revenue from potential customers in neighboring markets and FX-currency fluctuations and management.",
  ],
 objectiveHeading: "One-platform to rule them all: Engineering a Unified Ecosystem for Cross-Border Merchant Operations",
 objectiveBody:[
  "The objective was to design a comprehensive Merchant of Record (MoR) platform that abstracts these complexities. The goal was to build a **\"Business-in-a-Box\"** solution where Startbutton acts as the legal reseller on behalf of merchants, allowing them to sell, collect payments, and manage finances in multiple African countries instantly without a physical presence whilst also complying with local legal regimes."
 ],
 objectiveImages:[{src: "/images/startbutton/startbutton2.png", aspect: "2/1", fit: "contain" }],
  role: [
    "Product Design",
    "UX Research",
    "UX Strategy",
    "Information Architecture",
    "Developer Management",
    "Interaction Design",
  ],
  roleBody: [
    "I led the entire initiative end-to-end. From framing the core functionality for the v.1 and defining the user flows, to designing the high-fidelity experience and guiding the implementation. My role also included managing the developer and ensuring the final product shipped with the intended UX integrity.",
  ],

  investigationHeading: "Investigation & Enquiry",
  investigationBody: [
    "To build a solution that truly solved merchant pain points, we conducted:",
    "- **Stakeholder Interviews:** Speaking with cross-border merchants to understand the specific regulatory \"walls\" they hit when expanding; also speaking with the founders to understand their vision for the product and current understanding of regulatory blockers they've identified.",
    "- **Competitive Analysis:** Reviewing global MoR players and competitors (like Paddle, Ebanx, Stripe etc) and identifying the unique \"Africa-first\" features needed, such as mobile money integration especially and stablecoin settlement capabilities in line with the current rate of cryptocurrency adoption for cross-border businesses.",
    "- **Workflow Mapping:** Identifying the manual steps currently involved in the product, such as transfers, tax filing and chargeback management, settlements etc, in order to automate them within the design, thereby delivering a seamless user experience for merchants and their end-customers.",
    "In this we discovered the following recurring pain points of merchants and their end-customers:",
  ],
  investigationImages:[{src: "/images/startbutton/startbutton3.png", aspect: "2/1", fit: "contain" }],
  userPersonasIntro:"We interviewed and synthesized insights around three typical user groups:",
  userPersonasImages:[{src: "/images/startbutton/startbutton4.png", aspect: "2/1", fit: "contain" }],
  designGoalsBody:[
    "The primary design goal was to develop a unified, high-trust digital interface that abstracts the inherent complexities of cross-border trade for African merchants. By prioritizing transparency and guided compliance, the platform was designed to transform intimidating legal and financial hurdles—such as local payment collections, taxes and its accompanying hurdles—into intuitive, step-by-step workflows. The focus was on creating a \"Business-in-a-Box\" experience where users can seamlessly pivot between multi-currency account management (USD, GBP, KSH), contesting fraudulent chargebacks, and generating professional invoices, effectively reducing the logistical barriers to entering global markets.",
  ],
  designLanguageBody:[
    "The design language adopted was one of simplicity with ample white space to reduce overall cognitive load on users. To this end, the primary mantra for the design language was Transparency, Trust and simplicity. As a platform that manages a deluge of financial data, it was imperative for the platform to be easy on the user’s cognitive capacity in order to reduce the time it takes to complete actions and find information as well as give users the necessary data about their money. We approached this in three ways:",
    "- **Trust and Professionalism:** Since the platform handles significant financial and legal data, I chose a clean, high-contrast interface.",
    "- **Information Architecture:** Given the high volume of data (income, expenses, registrations), I utilized a sidebar-driven navigation system to keep core tools like \"Accounts,\" \"Invoicing,\" and \"Bookkeeping\" always accessible.",
    " - **Progressive Disclosure:** To avoid overwhelming users during complex tasks like \"Company Incorporation,\" I designed multi-step flows that only ask for necessary information at each stage.",
   "This resulted in the following design choices:",
   "- **Typography:** Clean, legible. Prioritizes numbers and CTAs.", 
   "- **Visual Cues:** Familiar icons, clear color codes for statuses, tooltips.",
   "- **Aesthetics:** Clear, clean and breathable. Feels like a trusted financial tool for powerful business scalers.",
  ],
  solutionBody: [
    "The platform was built around four central pillars derived from the design requirements:",
  ],
 solutionImages:[ {columns: 1,
    images:[
     { src: "/images/startbutton/startbutton5.png", aspect: "2/1", fit: "cover" } ]
    },
   {
    heading: "USER FLOWS",
    columns: 2,
    images: [
    { src:"/images/startbutton/startbutton 6a.png", fit: "contain", aspect: "4/3" },
    { src:"/images/startbutton/startbutton 6b.png", fit: "contain", aspect: "4/3" },
    { src:"/images/startbutton/startbutton 6c.png", fit: "contain", aspect: "4/3" },
    ],
  },
  ],
 hifiDesignBody:["A snapshot of some of the clean solutions I designed"],
 hifiDesignImages:[
  { src: "/images/startbutton/startbutton7.png", fit: "contain", aspect: "2/1" },
  { src: "/images/startbutton/startbutton7a.png", fit: "contain", aspect: "2/1" },
  { src: "/images/startbutton/startbutton 8.png", fit: "contain", aspect: "2/1" },
  { src: "/images/startbutton/startbutton9.png", fit: "contain", aspect: "2/1" },
  { src: "/images/startbutton/startbutton10.png", fit: "contain", aspect: "2/1" },
  { src: "/images/startbutton/startbutton11a.png", fit: "contain", aspect: "2/1" },
 ],
  validationHeading: "Rapid expansion, onboarding and operations",
  validationBody: [
    "Since the launch of Startbutton's platform, the product has proven to be more than just useful, it's seamless, scalable, and genuinely changing how merchants within and outside Africa handle cross-border payments and expansion.",
  ],
  validationImages:[{ src: "/images/startbutton/startbutton12.png", fit: "contain", aspect: "2/1", natural:true }],
  resultStats: [],
  impactBullets: [
    "Lower CAC: Merchant referrals drive organic user acquisition thereby reducing costs.",
    "Product retention: Repeat usage signals high trust and business alignment of being the foremost MOR in Africa.",
    "New revenue channels: Future integrations with payment providers and new features (i.e. subscriptions, auto-debit etc).",
  ],
  reflectionHeading: "Looking Back, Building Forward",
  reflectionBody: [
    "This project highlighted the significance of designing for \"Regulatory Trust\" and “Local contexts.” In the fintech space, user confidence in the platform is just as crucial as the features offered. I learned to convert complex legal requirements across multiple jurisdictions, such as company incorporation, payments collection and checkout, into user-friendly UI elements that feel empowering instead of overwhelming.",
    "If I were to continue improving, I would concentrate on:",
    " 1. Developing more granular and comprehensive tax reporting tailored to specific regions and currencies; ",
    " 2. Improving localization strategies for merchants; ",
    " 3. Incorporating user feedback to refine the design process especially for end-customers; and ",
    "4. Staying updated on regulatory changes to ensure compliance and trust. ",
  ],
 conclusionBody: "Startbutton is a major step in breaking trade barriers in Africa. By integrating regulatory requirements into a user-friendly interface, we turned a lengthy bureaucratic process into a smooth digital experience. From sending funds, converting funds, invoicing, automated bookkeeping and USDT settlement solutions amongst others, every feature equips merchants to operate globally while remaining compliant locally. This project shows that user-centric design can connect fragmented markets, empowering African entrepreneurs to scale beyond borders.",
  team: [
    { name: "Damilola Olayiwola", role: "Lead Product Designer" },
    { name: "Yusuf Ajide", role: "Product Designer" },
    { name: "Kelvin Esekhile", role: "Frontend Developer" },
    { name: "Mallick Bolakale", role: "CEO" },
    { name: "Kelechi Oti", role: "CTO" },
  ],
};
