import { CaseStudy, ImageBlock } from "./case-study-types";
import { getCaseStudy } from "./case-studies";


export type ProjectStatus = "live" | "wip" | "aur";
export type ProjectCategory = "Product Design" | "Brand Design" | "Strategy";

export type { ImageBlock}

export type Project = {
  slug: string;
  title: string;
  client: string;
  categories: ProjectCategory[];
  year: string;
  cover: string;
  size: "sm" | "md" | "lg";
  status: ProjectStatus;
  summary: string;
  role?: string;
  tools?: string[];
  images: string[];
  sections?: ProjectSection[];
  metaLine?: string;
  tagline?: string;
};

export type ProjectSection = {
  id: string;
  label: string;
  heading?: string;
  body: string | string[];
  images?: ImageBlock[];
  subsections?: {
    heading: string;
    body: string| string[];
    images?: ImageBlock[],
  }[];
  team?:{ name: string; role: string }[];
};



function caseStudyToSections(cs: CaseStudy): ProjectSection[] {
  const sections: ProjectSection[] = [
    { id: "context", label: "Context & Background", body: cs.context, images: cs.contextImages },
    { id: "problem", label: "Problem", heading: cs.problemHeading, body: cs.problemBody, images: cs.problemImages },
  ];

  if (cs.objectiveBody) {
    sections.push({
      id: "objective",
      label: "Objective",
      heading: cs.objectiveHeading,
      body: cs.objectiveBody,
      images: cs.objectiveImages,
    });
  }

  sections.push(
    { id: "role", label: "Role", heading: cs.role.join("  |  "), body: cs.roleBody },
    {
      id: "investigation",
      label: "Investigation & Enquiry",
      heading: cs.investigationHeading,
      body: cs.investigationBody,
      images: cs.investigationImages,
    },
  );

  if (cs.userPersonas || cs.userPersonasImages) {
    sections.push({
      id: "personas",
      label: "User Personas",
      body: [
        ...(cs.userPersonasIntro ? [cs.userPersonasIntro] : []),
        ...(cs.userPersonas?.map((p) => `${p.name} — ${p.description}`) ?? []),
      ],
      images: cs.userPersonasImages,
    });
  }

  if (cs.designLanguageBody) {
    sections.push({
      id: "design-language",
      label: "Design Language & Rationale",
      body: [
         ...(cs.designLanguageBody ?? []),
        ...(cs.designGoalsBody ? ["##Design Goals##", ...cs.designGoalsBody] : []),
       
      ],
    });
  }

  sections.push({
    id: "solution",
    label: "Solution - Key Features",
    body: cs.solutionBody ?? [],
    images: cs.solutionImages,
    subsections: cs.solutionSubsections,
  });

  if (cs.hifiDesignBody) {
    sections.push({
      id: "hifi",
      label: "Hi-Fi Designs",
      body: cs.hifiDesignBody,
      images: cs.hifiDesignImages,
    });
  }

  sections.push({
    id: "validation",
    label: "Validation & Results",
    heading: cs.validationHeading,
    body: [
      ...cs.validationBody,
      ...cs.resultStats.map((s) => `${s.value} — ${s.label}`),
      ...(cs.impactBullets ?? []),
      ...(cs.systemBullets ?? []),
      ...(cs.strategicWins
        ? [`##${cs.strategicWinsHeading ?? "Strategic Wins"}##`, ...cs.strategicWins.map((w) => `**${w.label}:** ${w.body}`)]
        : []),
    ],
    images: cs.validationImages,
  });

  sections.push({
    id: "reflection",
    label: "Reflections / Learnings",
    heading: cs.reflectionHeading,
    body: [
      ...cs.reflectionBody,
      ...(cs.conclusionBody ? [`##${cs.conclusionHeading ?? "In Conclusion"}##`, cs.conclusionBody] : []),
    ],
  });

  sections.push({ id: "team", label: "Team Members", body: [], team: cs.team });

  return sections;
}


export const projects: Project[] = [
  // ---------- PRODUCT DESIGN ----------
  {
    slug: "renmoney-loan-optimization",
    title: "Loan Flow Optimization",
    client: "Renmoney MFB",
    categories: ["Product Design"],
    year: "2024",
    cover:"/images/renmoney/renmoney1.png",
    size: "lg",
    status: "live",
    summary: "Onboarding and loan flow redesign for Renmoney's lending product.",
    images: ["/images/renmoney/renmoney1.png",],
  },
  {
    slug: "pressone-community-platform",
    title: "Community Platform",
    client: "PressOne Africa",
    categories: ["Product Design"],
    year: "2024",
    cover:  "/images/pressone/Press1.png",
    size: "md",
    status: "live",
    summary: "Community platform design for PressOne Africa.",
    images: [ "/images/pressone/Press1.png"],
  },
  {
    slug: "lendsqr-cash-split",
    title: "Cash Split Feature",
    client: "LendSqr",
    categories: ["Product Design"],
    year: "2025",
    cover: "/images/lendsqr/Lsqr 1.png",
    size: "sm",
    status: "live",
    summary: "Design exploration for LendSqr's cash split feature.",
    images: ["/images/lendsqr/Lsqr 1.png"],
    
  },
  {
    slug: "anwrk-brand-product",
    title: "Branding, Mobile & Website Design",
    client: "Anwrk",
    categories: ["Product Design", "Brand Design"],
    year: "2024",
    cover: "/images/anwrk/anwrk1.png",
    size: "lg",
    status: "live",
    summary: "Full branding, mobile app, and website design for Anwrk.",
    images: ["/images/anwrk/anwrk1.png"],
    
  },
  {
    slug: "intelai-platform",
    title: "AI Platform for Web3 Founders",
    client: "Intel AI",
    categories: ["Product Design"],
    year: "2024",
    cover: "/images/intel/intel1.png",
    size: "md",
    status: "wip",
    summary: "AI training flow for a platform built for Web3 founders.",
    images: ["/images/intel/intel1.png"],
   
  },
  {
    slug: "baige-waas",
    title: "Wallet-as-a-Service Platform",
    client: "Baige Tech",
    categories: ["Product Design"],
    year: "2023",
    cover: "/images/Baige/baige1.png",
    size: "md",
    status: "live",
    summary: "Wallet-as-a-service platform design for Baige Tech.",
    images: ["/images/Baige/baige1.png"],
   
  },
  {
    slug: "strategy-360-simulation",
    title: "Business Strategy Simulation",
    client: "Strategy 360",
    categories: ["Product Design", "Strategy"],
    year: "2024",
    cover: "/images/strategy/strategy1.png",
    size: "sm",
    status: "wip",
    summary: "AI platform concept for Web3 founders, with a business strategy simulation component.",
    images: ["/images/strategy/strategy1.png"],
   
  },
  {
    slug: "startbutton-bulk-payment",
    title: "Bulk Payment Disbursal",
    client: "Startbutton Africa",
    categories: ["Product Design"],
    year: "2024",
    cover: "/images/startbutton/startbutton1.png",
    size: "sm",
    status: "wip",
    summary: "Bulk payment disbursal flow for Startbutton Africa.",
    images: ["/images/startbutton/startbutton1.png"],
  },
  {
    slug: "pressone-call-flow",
    title: "Set Up Call Flow",
    client: "PressOne Africa",
    categories: ["Product Design"],
    year: "2024",
    cover: "https://picsum.photos/id/1084/1200/900",
    size: "sm",
    status: "wip",
    summary: "Call setup flow design for PressOne Africa.",
    images: ["https://picsum.photos/id/1084/1600/1000"],
  },
  {
    slug: "pressone-payment-exit-flows",
    title: "Payment and Exit Intent Flows",
    client: "PressOne Africa",
    categories: ["Product Design"],
    year: "2024",
    cover: "https://picsum.photos/id/109/1200/900",
    size: "sm",
    status: "wip",
    summary: "Payment and exit intent flow design for PressOne Africa.",
    images: ["https://picsum.photos/id/109/1600/1000"],
  },

  // ---------- BRAND DESIGN ----------
  {
    slug: "owmg-season-8-brand",
    title: "Brand Identity Design",
    client: "0WMG Season 8",
    categories: ["Brand Design"],
    year: "2024",
    cover: "https://picsum.photos/id/110/1200/900",
    size: "md",
    status: "live",
    summary: "Brand identity design for 0WMG Season 8.",
    images: ["https://picsum.photos/id/110/1600/1000"],
  
  },
  {
    slug: "davu-ai-brand",
    title: "Brand Identity Design",
    client: "Davu AI",
    categories: ["Brand Design"],
    year: "2024",
    cover: "https://picsum.photos/id/111/1200/900",
    size: "md",
    status: "live",
    summary: "Brand identity design for Davu AI.",
    images: ["https://picsum.photos/id/111/1600/1000"],
    
  },
  {
    slug: "davu-ai-social",
    title: "Social Media Branding",
    client: "Davu AI",
    categories: ["Brand Design"],
    year: "2025",
    cover: "https://picsum.photos/id/112/1200/900",
    size: "sm",
    status: "wip",
    summary: "Social media branding for Davu AI.",
    images: ["https://picsum.photos/id/112/1600/1000"],
  },
  {
    slug: "anwrk-brand-identity",
    title: "Brand Identity Design",
    client: "Anwrk",
    categories: ["Brand Design"],
    year: "2025",
    cover: "https://picsum.photos/id/113/1200/900",
    size: "md",
    status: "live",
    summary: "Brand identity design for Anwrk.",
    images: ["https://picsum.photos/id/113/1600/1000"],
  },
  {
    slug: "techcircle-rebrand",
    title: "Full Rebrand Pitch",
    client: "Techcircle",
    categories: ["Brand Design"],
    year: "2024",
    cover: "https://picsum.photos/id/114/1200/900",
    size: "lg",
    status: "live",
    summary: "Full rebrand pitch for Techcircle.",
    images: ["https://picsum.photos/id/114/1600/1000"],
    
  },
  {
    slug: "made-by-dammy-logo-folio",
    title: "Logo Folio",
    client: "Made by Dammy",
    categories: ["Brand Design"],
    year: "2025",
    cover: "https://picsum.photos/id/115/1200/900",
    size: "sm",
    status: "wip",
    summary: "Personal logo folio collection.",
    images: ["https://picsum.photos/id/115/1600/1000"],
  },
  {
    slug: "owmg-season-7-event",
    title: "Event Brand Identity",
    client: "0WMG Season 7",
    categories: ["Brand Design"],
    year: "2024",
    cover: "https://picsum.photos/id/116/1200/900",
    size: "sm",
    status: "wip",
    summary: "Event brand identity for 0WMG Season 7.",
    images: ["https://picsum.photos/id/116/1600/1000"],
  },
  {
    slug: "igho-maraki-branding",
    title: "Igho Maraki Branding",
    client: "Igho Maraki",
    categories: ["Brand Design"],
    year: "2024",
    cover: "https://picsum.photos/id/117/1200/900",
    size: "sm",
    status: "wip",
    summary: "Branding for Igho Maraki.",
    images: ["https://picsum.photos/id/117/1600/1000"],
  },
  {
    slug: "owmg-season-6-concept",
    title: "Concept Document",
    client: "0WMG Season 6",
    categories: ["Brand Design"],
    year: "2024",
    cover: "https://picsum.photos/id/118/1200/900",
    size: "sm",
    status: "wip",
    summary: "Concept document for 0WMG Season 6.",
    images: ["https://picsum.photos/id/118/1600/1000"],
  },
  {
    slug: "pressone-email-templates",
    title: "Email Template Designs",
    client: "PressOne Africa",
    categories: ["Brand Design"],
    year: "2024",
    cover: "https://picsum.photos/id/119/1200/900",
    size: "sm",
    status: "wip",
    summary: "Email template designs for PressOne Africa.",
    images: ["https://picsum.photos/id/119/1600/1000"],
  },

  // ---------- STRATEGY (mostly AUR — access upon request) ----------
  {
    slug: "renmoney-design-vision-strategy",
    title: "Design Vision Strategy",
    client: "Renmoney MFB",
    categories: ["Strategy"],
    year: "2024",
    cover: "https://picsum.photos/id/120/1200/900",
    size: "sm",
    status: "wip",
    summary: "Design vision strategy for Renmoney MFB.",
    images: ["https://picsum.photos/id/120/1600/1000"],
  },
  {
    slug: "interswitch-gtm-data-strategy",
    title: "GTM Data Strategy",
    client: "Interswitch Group Limited",
    categories: ["Strategy"],
    year: "2025",
    cover: "https://picsum.photos/id/121/1200/900",
    size: "sm",
    status: "aur",
    summary: "Go-to-market data strategy for Interswitch Group Limited.",
    images: ["https://picsum.photos/id/121/1600/1000"],
  },
  {
    slug: "doshpal-product-strategy",
    title: "Product Strategy",
    client: "Doshpal Finance",
    categories: ["Strategy"],
    year: "2025",
    cover: "https://picsum.photos/id/122/1200/900",
    size: "sm",
    status: "aur",
    summary: "Product strategy for Doshpal Finance.",
    images: ["https://picsum.photos/id/122/1600/1000"],
  },
  {
    slug: "renmoney-product-strategy",
    title: "Product Strategy",
    client: "Renmoney MFB",
    categories: ["Strategy"],
    year: "2024",
    cover: "https://picsum.photos/id/123/1200/900",
    size: "sm",
    status: "aur",
    summary: "Product strategy for Renmoney MFB.",
    images: ["https://picsum.photos/id/123/1600/1000"],
  },
  {
    slug: "renmoney-user-persona",
    title: "Product User Persona",
    client: "Renmoney MFB",
    categories: ["Strategy"],
    year: "2024",
    cover: "https://picsum.photos/id/124/1200/900",
    size: "sm",
    status: "aur",
    summary: "Product user persona research for Renmoney MFB.",
    images: ["https://picsum.photos/id/124/1600/1000"],
  },


  {
    slug: "renmoney-product-revamp-2",
    title: "Product Revamp 2.0",
    client: "Renmoney MFB",
    categories: ["Product Design"],
    year: "2024",
    cover: "https://picsum.photos/id/125/1200/900",
    size: "md",
    status: "wip",
    summary: "Product revamp for Renmoney MFB, version 2.0.",
    images: ["https://picsum.photos/id/125/1600/1000"],
  },
  {
    slug: "renmoney-website-design-2",
    title: "2.0 Website Design",
    client: "Renmoney MFB",
    categories: ["Product Design"],
    year: "2024",
    cover: "https://picsum.photos/id/126/1200/900",
    size: "sm",
    status: "wip",
    summary: "Website design refresh for Renmoney MFB, version 2.0.",
    images: ["https://picsum.photos/id/126/1600/1000"],
  },
  {
    slug: "davu-ai-website-design",
    title: "Website Design",
    client: "Davu AI",
    categories: ["Product Design"],
    year: "2024",
    cover: "https://picsum.photos/id/127/1200/900",
    size: "sm",
    status: "wip",
    summary: "Website design for Davu AI.",
    images: ["https://picsum.photos/id/127/1600/1000"],
  },
  {
    slug: "omwg-season-4-event-brand",
    title: "Event Brand Identity",
    client: "OMWG Season 4",
    categories: ["Brand Design"],
    year: "2019",
    cover: "https://picsum.photos/id/128/1200/900",
    size: "sm",
    status: "wip",
    summary: "Event brand identity for OMWG Season 4.",
    images: ["https://picsum.photos/id/128/1600/1000"],
  },
  {
    slug: "omwg-season-5-event-brand",
    title: "Event Brand Identity",
    client: "OMWG Season 5",
    categories: ["Brand Design"],
    year: "2020",
    cover: "https://picsum.photos/id/129/1200/900",
    size: "sm",
    status: "wip",
    summary: "Event brand identity for OMWG Season 5.",
    images: ["https://picsum.photos/id/129/1600/1000"],
  },
  {
    slug: "lets-chipin",
    title: "Potlucking for Friends",
    client: "Let's Chipin",
    categories: ["Product Design"],
    year: "2024",
    cover: "https://picsum.photos/id/130/1200/900",
    size: "md",
    status: "wip",
    summary: "Product design for Let's Chipin, a potlucking app for friends.",
    images: ["https://picsum.photos/id/130/1600/1000"],
  },

    {
    slug: "anwrk-mobile-website-v2",
    title: "Mobile & Website Design",
    client: "Anwrk",
    categories: ["Product Design"],
    year: "2024",
    cover: "https://picsum.photos/id/131/1200/900",
    size: "sm",
    status: "wip",
    summary: "Mobile and website design for Anwrk.",
    images: ["https://picsum.photos/id/131/1600/1000"],
  },
  {
    slug: "strategy-360-smart-business",
    title: "AI for Smart Business Strategy",
    client: "Strategy 360",
    categories: ["Strategy"],
    year: "2023",
    cover: "https://picsum.photos/id/132/1200/900",
    size: "sm",
    status: "wip",
    summary: "AI-driven smart business strategy for Strategy 360.",
    images: ["https://picsum.photos/id/132/1600/1000"],
  },
]

projects.forEach((p) => {
  const cs = getCaseStudy(p.slug);
  if (cs) {
    p.sections = caseStudyToSections(cs);
    p.metaLine = `${cs.client} — ${cs.year}`;
    p.tagline = cs.heroHeadline;
  }
});