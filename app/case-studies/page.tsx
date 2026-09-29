import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import CaseStudyTemplate from "@/components/case-study/CaseStudyTemplate";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) return notFound();
  return <CaseStudyTemplate cs={cs} />;
}

