export type SectionImage = {
  src: string;
  fit?: "cover" | "contain";
  position?: string;
  aspect?: string;
  zoom?: number;
  width?:string;
  heading?: string;
  natural?: boolean;
};
export type ImageRow ={
  columns: number;
  images: (string | SectionImage)[];
  heading?: string;
};

export type ImageBlock = string | SectionImage| ImageRow;

export type SolutionSubsection = {
  heading: string;
  body: string | string[];
  images?: ImageBlock[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  year: string;
  title: string;
  websiteUrl?: string;
  heroHeadline: string;

  context: string;
  contextImages?:  ImageBlock[];

  problemHeading: string;
  problemBody: string[];
  problemImages?: ImageBlock[];
  funnelSteps?: { label: string; value: number }[];

  objectiveHeading?: string;
  objectiveBody?: string[];
  objectiveImages?:  ImageBlock[];

  role: string[];
  roleBody: string[];
  roleImages?: ImageBlock[];

  investigationHeading: string;
  investigationBody: string[];
  investigationImages?: ImageBlock[];
  insightCards?: { title: string; body: string }[];
  solutionSubsections?: SolutionSubsection[];

  userPersonasIntro?: string;
  userPersonas?: { name: string; description: string; image?: string }[];
  userPersonasImages?: ImageBlock[];

  designGoalsBody?: string[];
  designLanguageBody?: string[];
  designLanguageImages?: string[];

  solutionBody?: string[];
  solutionImages?:  ImageBlock[];
  solutionStats?: { value: string; label: string }[];

  hifiDesignHeading?: string;
  hifiDesignBody?: string[];
  hifiDesignImages?: ImageBlock[];

  validationHeading: string;
  validationBody: string[];
  validationImages?: ImageBlock[];
  resultStats: { value: string; label: string }[];
  impactBullets?: string[];
  systemBullets?: string[];

  strategicWinsHeading?: string;
  strategicWins?: { label: string; body: string }[];

  reflectionHeading: string;
  reflectionBody: string[];

  conclusionHeading?: string;
  conclusionBody?: string;

  userPersonasHeading?: string;
  designLanguageHeading?: string;
  solutionHeading?: string;
  

  team: { name: string; role: string }[];
};