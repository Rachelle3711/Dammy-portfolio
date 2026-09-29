
import { CaseStudy } from "./case-study-types";

export const anwrk: CaseStudy = {
  slug: "anwrk-brand-product",
  client: "Anwrk",
  year: "2024",
  title: "Branding, Mobile & Website Design",
  websiteUrl: undefined,
  heroHeadline: "Connecting skilled artisans with clients",


  context:
    "Anwrk was conceived as a digital intervention for the highly fragmented informal service sector in Nigeria. In markets where word-of-mouth is the only currency for hiring, both clients and artisans suffer from a lack of transparency and structure. Clients struggle to find reliable help, while skilled artisans lack the digital presence to reach a wider customer base beyond their immediate physical vicinity.The platform serves as a specialized marketplace connecting users with verified professionals across key verticals such as Electricity, Plumbing, Carpentry, AC Repair and many more. By providing a centralized space for discovery, communication, and secure payments, Anwrk aims to professionalize manual labor and provide a seamless maintenance experience for home and property owners",
  contextImages:[{src:"/images/anwrk/anwrk1.png", aspect: "2/1", fit: "contain" }],
  problemHeading: "Discovery Friction and the Trust Deficit",
  problemBody: [
    "The primary hurdle in the local artisan market is a profound \"confidence gap.\" Our research indicated that about majority (about 72%) of clients had experienced inconsistent pricing, while 54% cited safety concerns when inviting unverified workers into their homes. Without a central repository for reviews or credentials, discovery was a game of chance really, often resulting in sub-par work or financial disputes. For artisans, the problem was visibility and payment security. Many skilled craftsmen remained underemployed because they lacked the tools to showcase their portfolios or guarantee that they would be paid once a job was finished. This unorganized system leads to a 45% abandonment rate in the hiring process, as users were often too overwhelmed by the friction of finding a trustworthy professional.",
  ],

  objectiveHeading: "Designing for Accountability and Rapid Discovery",
  objectiveBody: [
    "The primary objective was to reduce the time-to-hire from several days to under five minutes by implementing a high-precision, location-based discovery engine. We aimed to build an ecosystem where every artisan is verified through a rigorous KYC process involving National Identity Numbers (NIN) and utility bill validation, ensuring 100% profile authenticity. Success was also defined by financial transparency. We set out to build a \"Price Lock\" escrow system that protects both parties; securing the client's funds and guaranteeing the artisan's payment upon project completion. The goal was to increase the average artisan’s monthly earnings by about 35% within the first six months by providing them with a verified digital storefront and a robust portfolio tool to showcase their expertise.",
  ],
  objectiveImages:[{src:"/images/anwrk/anwrk2.png", aspect: "2/1", fit: "contain" }],
  role: ["Lead Product Designer & UX Strategist"],
  roleBody: [
    "As the Lead Product Designer, I directed the end-to-end initiative, from ethnographic user research to the delivery of a high-fidelity design system. My responsibilities included defining the information architecture for two distinct user types, Clients and Artisans, ensuring that the transition between discovery and project management was frictionless for both.",
    "I also managed the implementation phase, working directly with developers to ensure the complex logic of the digital wallet and the tiered KYC verification flows were executed with UX integrity. My role was as much about strategy as it was about execution, as I had to balance technical constraints with the need for a highly accessible interface for users who may have limited experience with SaaS tools.",
  ],
  investigationHeading: "Belling the cat-friction in Manual Labor",
  investigationBody: [
    "We didn’t just analyze the hiring funnel; we decoded the emotional triggers behind the market's friction. By reviewing past support logs and conducting field interviews, we found that 62% of disputes were caused by vague verbal agreements that changed during the project. This insight led directly to the development of the \"Project Detail\" and \"Price Lock\" features to serve as a digital contract.",
   "I also studied global service platforms and local fintech apps to understand how users in emerging markets interact with security features. The investigation revealed that users preferred \"search-first\" interfaces that felt familiar, like Google for example. This led us to move away from complex directories in favor of a clean, intent-driven search experience that prioritized proximity/distance and reputation.",
  ],
  userPersonasHeading:"A Client and his Master Craftsman",
  userPersonasIntro:"We synthesized our insights around two primary typical user groups:",
  userPersonasImages:[{src:"/images/anwrk/anwrk3.png", aspect: "2/1", fit: "contain" }],
  designLanguageHeading:"Trust and Simplicity",
  designLanguageBody: [
    "The design language was rooted in Jakob’s Law—using familiar UI patterns to build immediate trust. We utilized a clean, high-contrast palette with clear status indicators to ensure that project states (e.g., \"In Progress,\" \"Completed\") were unmistakable at a glance. This was critical for maintaining transparency in an environment where financial transactions were also occurring between strangers.",
    "Further, we prioritized information density for the Artisan profiles, highlighting the artisan’s \"Projects Completed\" and \"Average Response Time\" to help clients make informed decisions quickly. For the Artisan's view, we designed an \"Insights\" dashboard that visualized growth in earnings and profile views, creating a gamified incentive for them to maintain high service standards.",
  ],
  solutionHeading:"A Living Support and Service Ecosystem",
  solutionBody:[
    "The core solution is the Integrated Chat & Hire Flow. This feature allows for real-time negotiation followed by a \"Price Lock\" mechanism that secures the agreed amount in the Anwrk wallet. This ensures that artisans are entitled to payment once the project is initiated and successfully completed, effectively acting as a sort of escrow service.",
     "To ensure quality, we also implemented a Tiered KYC Verification System. Artisans cannot receive high-value requests until they have verified their NIN and residential address via utility bills. This is paired with a Multimedia Portfolio Tool, where artisans can upload high-resolution images of their past projects, turning their profile into a professional resume that speaks for itself.",
  ],
 solutionImages:[{src:"/images/anwrk/anwrk4.png", aspect: "2/1", fit: "contain" },
                  {src:"/images/anwrk/anwrk5.png", aspect: "2/1", fit: "contain" },
                  {src:"/images/anwrk/anwrk6.png", aspect: "2/1", fit: "contain" }
  ],
   hifiDesignBody:["The final designs emphasize a \"Search-First\" landing page, allowing users to instantly find artisans within a 2km radius. We introduced category filters for Electricity, Plumbing, and more, with advanced sorting options for minimum ratings and verification status to give clients absolute control over who they hire. The project management screens were designed to be a \"single source of truth.\" Every project detail, from the 6-seater oak dining table description to the final NGN100,000 price, is documented and agreed upon before work begins. This design prevents \"scope creep\" and provides a clear path for either party to complete or cancel a project with documented feedback."],
  hifiDesignImages:[
    {src:"/images/anwrk/anwrk7.png", aspect: "2/1", fit: "contain" },
     {src:"/images/anwrk/anwrk8.png", aspect: "2/1", fit: "contain" },
     {src:"/images/anwrk/anwrk9.png", aspect: "2/1", fit: "contain" },
     {src:"/images/anwrk/anwrk10.png", aspect: "2/1", fit: "contain" },
     {src:"/images/anwrk/anwrk11.png", aspect: "2/1", fit: "contain" }
  ],

  validationHeading: "Tangible Gains in Efficiency and Trust",
  validationBody: ["Within the first 8 weeks of launch, Anwrk saw a 41% reduction in hiring friction, as users were able to find and book artisans significantly faster than through traditional methods. The \"Price Lock\" feature was a standout success, resulting in a 62% drop in payment-related disputes compared to our pilot benchmarks.",
     "Other key metrics included:"],
   validationImages:[{src:"/images/anwrk/anwrk12.png", aspect: "2/1", fit: "contain" }],
  resultStats: [],

  reflectionHeading: "Designing for Confidence, Not Just Functionality",
  reflectionBody: [
    "This project was an insightful reminder that as your user base expands to include those less familiar with software, your design must shift from \"features\" to \"confidence.\" We didn't just build a marketplace; we built a framework for trust. By organizing the platform around familiar search patterns and clear functional nodes, we made the experience feel intuitive rather than intimidating.",
     "I learned that in the artisan sector, execution is everything. Managing the implementation directly with developers allowed us to catch usability issues early, particularly in the document upload flow for KYC. This project proved that when you design for the person who wasn't \"born into software,\" you create a more accessible and valuable product for everyone.",
  ],
 conclusionBody:"I believe Anwrk has successfully bridged the gap between the informal workforce and the modern digital economy. By solving the dual problems of discovery and trust, we have created a platform where quality is rewarded and clients feel secure in their hiring decisions. As the platform scales, the core principles of transparency, verified identity, and secure payments will continue to define the Anwrk experience.",
  team: [
  {name:"Damilola Olayiwola", role:"Lead Product Designer/UX Strategist"},
  {name:"Stephanie Ukwade ", role:"Junior Product Designer"},
  {name:"Obinna Akpononu ", role:" Technical Lead"}
  ],
};







