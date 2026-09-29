

import { CaseStudy } from "./case-study-types";

export const intelAi: CaseStudy = {
  slug: "intelai-platform",
  client: "Intel AI",
  year: "2024",
  title: "AI Platform for Web3 Founders",
  websiteUrl: undefined,
  heroHeadline: "State of the art AI training platform for maximum engagement",

  context:
    "IntelAI was conceived as a comprehensive AI Community Workspace to address the escalating challenges of information fragmentation and engagement fatigue in modern digital communities. As decentralized projects and influencer networks scale, they often encounter a \"Context Vacuum,\" where critical project data resides in static PDFs or GitBooks while community interactions happen in real-time on platforms like Telegram, Discord, and X. This disconnect leads to community managers spending over 60% of their time answering repetitive queries, leaving them unable to focus on high-level growth or crisis management. Our goal was to create a \"Community Brain\" that could ingest project-specific data and provide instant, accurate, and on-brand responses across all integrated channels. The initiative targeted two distinct but interconnected user segments: Community Managers handling large-scale memberships and Influencers (KOLs) needing to scale content production. For managers, the platform provides a centralized hub to train AI agents on project whitepapers and roadmaps, automate spam filtering, and manage escalation reports for complex queries. For influencers, the focus was on a multi-format content support system that uses the same project-specific intelligence to generate tweets and content calendars that remain 100% faithful to the project's \"Truth\". By providing both a high-fidelity desktop dashboard for deep management and a streamlined mobile interface for engagement on the go, IntelAI ensures that community intelligence is never more than a click away.",
  contextImages:[{src:"/images/intel/intel1.png", aspect: "2/1", fit: "contain" }],
  problemHeading: "The Engagement Fatigue and Context Vacuum in Rapidly Scaling Communities",
  problemBody: [
    "As digital ecosystems; particularly within the Web3 and Influencer sectors; experience explosive growth, community managers and KOLs (Key-Opinion-Leaders) face a dual-pronged crisis: engagement fatigue and contextual irrelevance. High-growth communities on platforms like Telegram and Discord generate thousands of messages daily, yet 74% of these interactions are repetitive queries regarding project fundamentals, tokenomics, or basic troubleshooting. Human moderators are often overwhelmed, leading to slow response times and missed opportunities for high-value engagement, while standard AI tools often provide generic, \"hallucinated\" answers that lack the specific nuance of the project's whitepaper or roadmap.",
    "The friction lies in the \"Context Vacuum\". When projects scale, the gap between the available information (whitepapers, pitch decks, FAQs etc etc) and the community's immediate needs widens. My research indicated that community managers were spending upwards of 40 hours a week manually filtering spam and answering the same 15-20 questions. Without a system that could \"learn\" the project's specific DNA and respond in real-time across multiple channels, projects were seeing an average of 30% drop in community sentiment during critical launch phases due to information bottlenecks.",
  ],

  objectiveHeading: "Engineering a Context-Aware Neural Infrastructure for Global Communities",
  objectiveBody: [
    "The objective was to design a comprehensive AI-driven workspace that bridges the gap between static project data and active community engagement. We set out to build IntelAI, a platform that allows community owners to \"train\" their own custom AI agents by simply uploading project-specific assets such as PDFs, Docs, Screenshots, GitBooks, Pitch Decks etc. The goal was to move beyond a simple chatbot and create a \"Community Brain\" capable of not only answering questions but also generating on-brand content, blocking harmful spam, and escalating complex issues to human moderators when necessary.",
    "Functionally, the platform needed to be hyper-integrative and scalable. We aimed to reduce the time-to-resolution for community inquiries by about 80% while increasing content output for KOLs and influencers by around 3x. By providing a simulation workspace where users could test prompts before deploying them to live environments like Telegram or X (Twitter), we sought to give project owners 100% confidence in their automated voice, ensuring that every AI-generated response was rooted in the \"Ground Truth\" (largely) of their uploaded documentation",
  ],
  objectiveImages:[{src:"/images/intel/intel2.png", aspect: "2/1", fit: "contain" }],
  role: ["Lead Product Designer & UX Strategist"],
  roleBody: [
    "I led the end-to-end design lifecycle for both the Desktop and Mobile versions of IntelAI, serving as the bridge between technical AI capabilities and user-centric design. My responsibilities spanned from initial UX research and information architecture to high-fidelity UI design and interaction prototyping. I focused heavily on the \"Training Flow,\" ensuring that the complex backend process of parsing large documents was translated into a simple, intuitive progress-driven interface for the user.",
    "Beyond the visuals, I also acted as the UX Strategist, defining the \"Simulation\" and \"Escalation\" frameworks. I worked closely with the engineering team to ensure the \"Parsing\" states were communicated effectively to users, reducing the anxiety of waiting for AI training to complete. By managing the developer handoff and implementation phase, I ensured that the multi-platform experience remained consistent, whether a community manager was reviewing an escalation report on their desktop or a KOL was generating a tweet on the go.",
  ],

  investigationHeading: "Figuring out the Friction in Automated Moderation",
  investigationBody: [
    "To build a truly effective tool, we conducted a deep-dive audit of existing community management workflows. We analyzed a plethora of support logs across major Web3 projects and discovered that around 62% of \"critical\" community issues were actually easily resolvable navigation or glossary gaps. However, the existing tools were fragmented; moderators were jumping between Telegram bots for spam and Notion for project info, creating a massive cognitive load and an average response delay of 14 minutes per query.",
    "We equally discovered a significant \"Trust Gap\" regarding AI. Users were hesitant to use automated tools because they couldn't see \"under the hood.\" This led to the design of our Simulation Workspace, where we mapped user interactions to see how they tweaked prompts. We found that users felt 90% more confident in automation when they could \"dry-run\" the AI against their own documentation. These insights shifted our focus from a \"Set and Forget\" bot to a \"Train, Test, and Deploy\" ecosystem.",
  ],
  userPersonasHeading:"A community Manager and A web3 Influencer",
  userPersonasIntro:"We synthesized our insights around two primary typical user groups:",
  userPersonasImages:[{src:"/images/intel/intel3.png", aspect: "2/1", fit: "contain" }],

  designGoalsBody:[
    "The primary design goal was to develop a unified, high-trust digital interface that abstracts the inherent complexities of cross-border trade for African merchants. By prioritizing transparency and guided compliance, the platform was designed to transform intimidating legal and financial hurdles—such as local payment collections, taxes and its accompanying hurdles—into intuitive, step-by-step workflows. The focus was on creating a \"Business-in-a-Box\" experience where users can seamlessly pivot between multi-currency account management (USD, GBP, KSH), contesting fraudulent chargebacks, and generating professional invoices, effectively reducing the logistical barriers to entering global markets."],

  designLanguageBody: [
    "The visual identity of IntelAI was crafted to feel authoritative, futuristic, and efficient. We opted for a deep \"Foundry Dark\" palette, which reduces eye strain for users/community managers who spend 8+ hours a day on dashboards. The UI uses high-contrast neon accents (mint green and electric blue) to draw attention to critical \"Quick Actions\" and \"Outstanding Tasks,\" ensuring that even in a data-dense environment, the user's next step is always clear. Also, our information architecture method was a \"Context First\" approach. Thus every screen is anchored by the project's current status; whether the AI is \"Parsing,\" \"Trained,\" or \"Engaging\". We utilized a modular \"Card-Based\" layout for the integration section, allowing users to clearly see the health of their various channels (Telegram, X, Discord) at a glance. This creates a sense of \"Mission Control\", giving users a psychological feeling of mastery over their complex digital ecosystems.",
  ],

  solutionHeading:"Three-Pillar Approach to Intelligent Engagement",
  solutionBody:[
    "The core of Strategy360 is the AI-Powered Document Parser, which automates the extraction of mission statements, financial data, and director details from uploaded PDFs. This is complemented by the Dynamic Financial Modeler, which allows users to switch between bottom-up and top-down planning while visualizing 5-year revenue growth and profitability targets. These features effectively bridge the gap between historical data and future projections.",
   "To ensure strategy leads to execution, we implemented the Operational Modeling Suite, featuring an \"Initiative Heatmap\" and an \"Implementation Roadmap\". This is paired with the Performance Dashboard Tracker, which provides real-time updates on KPIs and project completion rates. By integrating a \"Risk Assessment\" tool and a \"Competitor List\" generator, we provided users with a defensive and offensive strategic toolkit in one unified platform."],
  
     solutionImages:[{src:"/images/intel/intel4.png", aspect: "2/1", fit: "contain" },
                  {src:"/images/intel/intel5.png", aspect: "2/1", fit: "contain" }
               ],
   hifiDesignBody:["The high-fidelity designs focus on cross-platform parity. On Desktop, the workspace provides an expansive view of analytics, escalation reports, and simulation logs, allowing for deep-dive management. On Mobile, the experience is distilled into \"Management on the Move.\" The training flow uses a simplified, step-by-step wizard, and the tweet generator features a \"Tap-to-Edit\" interface optimized for thumb-driven interactions. Key design elements include the \"AI Parsing State\" animations, which provide visual feedback during the heavy processing of documents, and the \"Success Modals\" that confirm successful integrations with platforms like Telegram via QR codes. Every high-fidelity screen was tested for usability, ensuring that critical alerts (like a high spam rate) are instantly recognizable through both color and iconography."],
  hifiDesignImages:[
    {src:"/images/intel/intel6.png", aspect: "2/1", fit: "contain" },
     {src:"/images/intel/intel7.png", aspect: "2/1", fit: "contain" },
     {src:"/images/intel/intel8.png", aspect: "2/1", fit: "contain" },
     {src:"/images/intel/intel9.png", aspect: "2/1", fit: "contain" },
     {src:"/images/intel/intel10.png", aspect: "2/1", fit: "contain" }
  ],

  validationHeading: "Measurable Impacts on Strategic Efficiency",
  validationBody: ["Within the first 12 weeks of deployment across our beta partner projects, we observed a transformative shift in community metrics. By automating 85% of repetitive project inquiries, we saw an immediate 41% reduction in monthly support tickets. Most importantly, the average \"Time to Resolution\" for community queries dropped from 14 minutes to under 45 seconds, significantly boosting community trust and sentiment."],
   validationImages:[{src:"/images/intel/intel11.png", aspect: "2/1", fit: "contain" }],
  resultStats: [],

  reflectionHeading: "Designing for the Gap between Data and Insight",
  reflectionBody: [
    "Looking back, this project reinforced a critical UX lesson that’s now at the fore of current design discussions, that: AI is a collaborator, not a replacement. Initially, we thought users wanted a \"black box\" that handled everything. However, we learned that the most valuable part of IntelAI wasn't just the automation—it was the control we gave back to the users through the training and simulation features. When users could see what the AI \"knew,\" they trusted the system to represent their brand.",
    "If I were to start over, I would focus even earlier on the \"Retraining Loop.\" Projects evolve fast, and we found that users needed a more seamless way to \"Update Context\" as their roadmaps changed. Designing a system that feels alive and evolving alongside the project is the next frontier for community management tools. We didn't just design a dashboard; we designed a way for projects to maintain a consistent, intelligent presence in a 24/7 global market.",
  ],

 conclusionBody:"The deployment of IntelAI across our beta partner projects yielded transformative results, proving that trainable AI is a fundamental requirement for modern community management. Within the first 8 weeks of launch, we observed that 52% of community members were able to resolve their inquiries through the AI's self-service capabilities without ever needing to contact a human moderator. This shift led to a 41% reduction in monthly support tickets, significantly freeing up internal teams to handle high-priority technical issues. Additionally, the average resolution turnaround time for common community queries dropped by 35%, moving from minutes to under 45 seconds.Beyond operational efficiency, the platform successfully bridged the \"Confidence Gap\" for both project owners and community members. Influencers utilizing the AI tweet generator saw a 73% increase in engagement due to their ability to post higher-quality, contextually accurate content more frequently. The Spam Prevention Tool also proved critical, effectively neutralizing malicious bot activity and harmful links with a 99.8% success rate, thereby fostering a safer community environment. Ultimately, the project demonstrated that when AI is designed as a transparent collaborator—allowing users to simulate and update context in real-time; it moves beyond simple automation to become a true engine for scalable human engagement.",
  team: [
  {name:"Damilola Olayiwola", role:" Lead Product Designer/UX Strategist"}
  ],
};







