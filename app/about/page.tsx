import AboutHero from "@/components/about/AboutHero";
import AboutBio from "@/components/about/AboutBio";
import CompanyMarquee from "@/components/about/CompanyMarquee";
import AboutSidebar from "@/components/about/AboutSidebar";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <ScrollReveal immediate>
        <AboutHero />
      </ScrollReveal>
      <div className="px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1fr_480px] gap-6">
        <ScrollReveal>
          <AboutBio />
        </ScrollReveal>
        <div className="space-y-20">
          <ScrollReveal delay={100}>
            <CompanyMarquee />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <AboutSidebar />
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
