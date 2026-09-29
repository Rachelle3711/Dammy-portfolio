import PlaygroundGrid from "@/components/playground/PlaygroundGrid";
import ScrollReveal from "@/components/ScrollReveal";

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-black">
      <ScrollReveal immediate>
      <PlaygroundGrid />
      </ScrollReveal>
    </main>
  );
}
