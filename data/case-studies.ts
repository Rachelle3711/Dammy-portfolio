import { CaseStudy } from "./case-study-types";
import { renmoney } from "./case-study-renmoney";
import { pressone } from "./case-study-pressone";
import { lendsqr } from "./case-study-lendsqr";
import { intelAi } from "./case-study-intel";
import { strategy } from "./case-study-strategy";
import { startbutton } from "./case-study-startbutton";
import { baigeWaas } from "./case-study-baige";
import { anwrk } from "./case-study-anwrk";

export const caseStudies: CaseStudy[] = [renmoney, pressone, lendsqr, intelAi, strategy, startbutton, baigeWaas, anwrk];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
