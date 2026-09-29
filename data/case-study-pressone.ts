
import { CaseStudy } from "./case-study-types";

export const pressone: CaseStudy = {
  slug: "pressone-community-platform",
  client: "PRESSONE AFRICA",
  year: "2025",
  title: "Community Platform",
  websiteUrl: undefined, // confirm real URL
  heroHeadline: "Smarter & Scalable Business Calls",

  context:
    "PressOne Africa is one of the few platforms pioneering voice-tech and business phone systems for SMEs across Nigeria. As adoption scaled, one thing became clear, support requests were piling up, and most of them weren't even technical. I was brought in under a contractual agreement to figure this out, and design something that could solve the root issue. What we needed wasn't just a help center, it was a full community and documentation platform. A space where users could find answers quickly, help themselves, or just ask real questions when they were stuck. My job? Make it intuitive, make it structured, and make it feel familiar.",
  contextImages:[{src: "/images/pressone/Press1.png", aspect: "2/1", fit: "cover"}],
  problemHeading: "It Wasn't Confusion. It Was a Confidence Gap.",
  problemBody: [
    "As the platform grew, so did the diversity of users we were onboarding. Our earlier clients were mostly teams already familiar with business phone systems; sales orgs, multi-line operators, companies with internal tech support. But with expansion came a new wave of users: business owners and team members with little to no experience using SaaS tools.",
    "They weren't struggling with bugs, they just didn't know where to begin. What did \"assigning a number\" mean? What was \"call routing\"? What button did what? These weren't complex technical issues, they were glossary gaps, onboarding frictions, and confidence blockers.",
    "Without a central place to search, explore, or get quick help, users had no choice but to raise tickets. Support volume went up. Resolution times slowed down. And most of the effort went toward answering questions that could've been addressed with the right self-service system. We needed something simple, structured, and familiar, a platform that could meet users where they were and grow with them.",
  ],
  problemImages:[{src: "/images/pressone/Press2.png", aspect: "2/1", fit: "cover"}],
 objectiveHeading: "Rethinking Shared Payments for the Nigerian Social Economy",
 objectiveBody: [
  "In Nigeria, money rarely moves alone—it moves in groups. From shared rent and bulk groceries to Friday suya nights and surprise birthday hangouts, social payments are deeply woven into everyday life. But splitting expenses still feels clunky, awkward, and built for a reality that isn&rsquo;t ours. This project, built into Lendsqr&rsquo;s consumer app, reimagines the group payment experience with cultural context, trust, and fluidity at its core."
 ],
  role: [
    "Product Design",
    "UX Research",
    "UX Strategy",
    "Information Architecture",
    "Developer Management",
    "Interaction Design",
  ],
  roleBody: [
    "I led the entire initiative end-to-end. From framing the core problem and defining the user flows, to designing the high-fidelity experience and guiding the implementation. My role also included managing the developer and ensuring the final product shipped with the intended UX integrity.",
  ],

  investigationHeading:
    "We didn't just analyze the funnel, we decoded the full story behind the friction",
  investigationBody: [
    "Using our platform tracking tools Metabase and our support bucket on MakePlane, I reviewed past support logs, sat in on internal triage conversations, and mapped the common questions we were getting week over week.",
    "62% of tickets weren't tied to errors or bugs, they were basic how-to's, navigational misunderstandings, and feature explanations. The kind of questions that come from a user trying to do something simple but getting lost in the interface or language.",
    "::image::",
    "I also studied help platforms from Google and OpenPhone to see how they guided users without making them feel lost or unqualified.",
    "::image::",
    "I handed off a full system of hi-fi mockups, component documentation, and worked directly with the developer through implementation, reviewing builds, catching usability issues early, and preserving the UX quality from design to delivery. The platform launched as planned, and in the weeks that followed, we began to see strong early indicators of success.",
  ],
  investigationImages:[{src: "/images/pressone/Press3.png", aspect: "2/1", fit: "contain", natural: true},
    {src: "/images/pressone/Press4.png", aspect: "2/1", fit: "contain", natural:true }
  ],
  solutionBody: [
    "My goal was to make this platform feel instantly familiar, almost invisible in its design, so users could focus entirely on their issue, not on how to use the help platform.",
    "I intentionally designed for recognition over consumption. The app had a lot of visual cues to make it feel familiar, like other fintech tools, but leans more social and approachable. I also applied visual anchoring principles: reducing screen clutter, offering only 1-2 main CTAs per screen, and using color hierarchy to guide user action. Typography: clean, bold, legible, prioritizing numbers and CTAs. Visual cues: familiar icons, Nigerian-style emojis, color codes for paid/pending. Aesthetics: clear and confident, feeling like a trusted financial tool with a social twist.",
  ],
  solutionImages:[{src: "/images/pressone/Press5.png", aspect: "2/1", fit: "contain", natural:true},
    {src: "/images/pressone/Press6.png", aspect: "2/1", fit: "contain", natural: true}
  ],
  solutionSubsections: [
    {
      heading: "🔍A Search-First Landing Page",
      body:[ "Inspired by Google and Bing, I designed the homepage to function like a search engine. This created immediate familiarity and trust, reducing friction and encouraging users to type in their issues naturally. This draws from the Jakob&rsquo;s Law of UX: users prefer interfaces that feel familiar to ones that are “new but better.",
    ],
    images:[{src: "/images/pressone/Press7.png", aspect: "2/1", fit: "contain"}]},

    {
      heading: "🧠Smart Content Categorization",
      body: ["I reorganized all content by product features and functions, giving users a mental map of the product as they browsed. Whether you were troubleshooting voicemail, team management, or call analytics, you could instantly navigate to the right domain.",
      ],
    images:[{src: "/images/pressone/Press8a.png", aspect: "2/1", fit: "contain"},
      {src: "/images/pressone/Press8b.png", aspect: "2/1", fit: "contain"}
    ]},

    {
      heading: "🧩Accessibility Nodes within Articles",
      body: ["Each article wasn&rsquo;t just a blob of text. I introduced segment-based “nodes” inside every guide — allowing users to jump straight to the part that mattered to them. This made long-form content feel digestible, and it gave returning users an easy way to skip to what they needed.",
      ],
    images:[{src: "/images/pressone/Press9.png", aspect: "2/1", fit: "contain"}]},

    {
      heading: "🎥Multi-Format Content Support",
      body: ["Since we had a range of resources, from videos and audio snippets to screenshots and written guides — I created a categorized results experience inspired by Google&rsquos filter tabs (All, Videos, Articles, etc.). This way, users could choose the type of guidance that worked best for them.",
      ],
      images:[{src: "/images/pressone/Press10.png", aspect: "2/1", fit: "contain"}]
    },

    {
      heading: "🤝Community Forum Integration",
      body: ["On the other side of the platform, I integrated a community discussion space — where users could post questions, respond to each other, and raise issues the documentation hadn&rsquot yet covered. This turned the platform into a living, breathing support ecosystem.",
      ],
     
    },
  ],

  validationHeading: "Support Load Down. User Confidence Up.",
  validationBody: [
    "While full long-term data is still being collected, here's what we observed within the first 8 weeks of launch: the support team was freed up to handle only high-priority and technical issues.",
    "::image::",
    "Beyond the numbers, internal feedback was overwhelmingly positive. The support team now points users to clean, structured answers, and first-time users report feeling more confident navigating the product on their own.",
  ],
  validationImages: [{src: "/images/pressone/Press11.png", aspect: "2/1", fit: "contain", natural:true},
    {src: "/images/pressone/Press12.png", aspect: "2/1", fit: "contain"}],

  resultStats: [],
  reflectionHeading: "We Didn't Just Design a Platform — We Designed Confidence",
  reflectionBody: [
    "This project was a reminder that your users change, and your experience has to change with them. The product was solid. But as we started onboarding users with less exposure to SaaS tools, it became clear they needed more than features, they needed language, structure, and a space to grow their confidence.",
    "Designing a search-first interface rooted in patterns people already understood wasn't just UX flair, it was about building trust. Organizing content by product functions helped people make sense of the system. Adding segmented articles, accessible media formats, and community threads made the platform feel like a guide, not just a wiki.",
    "And above all, this wasn't just about design thinking. It was about execution. I managed implementation, worked directly with the developer, and made sure we shipped something that reflected both the product and the people using it.",
    "We helped reduce support volume, yes, but more importantly, we made the experience feel less intimidating for people who weren't born into software. That's what I'm most proud of.",
  ],
  team: [
    { name: "Damilola Olayiwola", role: "Lead Product Designer" },
    { name: "Zainab", role: "Web Developer" },
    { name: "Folashade", role: "Head of Customer Experience" },
    { name: "Saviour", role: "Product Designer" },
    { name: "Utomobong", role: "Product Manager" },
    { name: "Mayowa", role: "CEO" },
  ],
};
