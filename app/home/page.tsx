import SplashCollage from "@/components/home/SplashCollage";
import IntroSection from "@/components/home/IntroSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main>
      <SplashCollage />
      <ScrollReveal>
      <IntroSection />
      </ScrollReveal>
    </main>
  );
}
