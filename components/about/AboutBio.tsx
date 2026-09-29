import SectionLabel from "./SectionLabel";

export default function AboutBio() {
  return (
    <div className="max-w-2xl text-neutral-300 leading-relaxed space-y-5">
      <section>
        <SectionLabel>ABOUT ME</SectionLabel>
        <div className="space-y-5">
          <p>
            I&rsquo;m Dammy&mdash;a systems thinker disguised as a designer. I
            don&rsquo;t just design interfaces, I design leverage.
          </p>
          <p>
            My path into tech hasn&rsquo;t been linear. I didn&rsquo;t rewire
            gadgets at age seven or build my own OS from scratch. What I did
            do, however, was study literature. And if that tells you
            anything, it&rsquo;s that I&rsquo;ve spent years training my mind
            to hold tension, to understand nuance, and to sit with
            complexity. I also took my philosophy courses very seriously,
            especially the ones that introduced me to Marxist thought (if
            that&rsquo;s your cup of tea, I&rsquo;d love to grab a coffee and
            go there). All of that taught me how to think in systems long
            before I knew that&rsquo;s what I&rsquo;d spend my career doing.
          </p>
          <p>
            My journey into product design came from curiosity, not
            credentials, from caring deeply about how things work, why they
            fail, and what makes them meaningful. I didn&rsquo;t study tech.
            I grew into it. Consistently. Quietly. Passionately. I&rsquo;m
            part of a small, weirdly resilient outlier group, people who
            weren&rsquo;t &ldquo;supposed&rdquo; to be here, but showed up
            anyway and stayed long enough to lead.
          </p>
          <p>
            Now, I design at the intersection of strategy, brand, and
            product, blending logic with instinct, structure with soul. My
            marketing roots (I started in brand agencies) gave me a deep
            understanding of story and message. Layer that with my product
            and startup experience, and what you get is a designer
            who&rsquo;s just as interested in outcomes as in aesthetics.
          </p>
          <p>
            I&rsquo;m not a legalistic designer, I don&rsquo;t obsess over
            rules or pixels for their own sake. I care about effectiveness,
            systems that scale, and work that actually moves the needle. And
            one of my greatest strengths? I thrive in ambiguity. I don&rsquo;t
            need all the answers to start&mdash;I just need enough context to
            get curious and get moving.
          </p>
          <p>
            I&rsquo;m here to solve hard problems, build honest products, and
            design experiences that leave users feeling more capable, more in
            control, and more connected.
          </p>
        </div>
      </section>

      <section className="pt-6">
        <SectionLabel>🎉 SOME INTERESTING AND WORTHY-OF-NOTE THINGS ABOUT ME</SectionLabel>
        <div className="space-y-5">
          <p>
            I&rsquo;ve been fortunate to be part of some amazing communities
            like the Coho and On Deck design fellowships. I&rsquo;ve also
            been offered admission to top business schools like NYU Stern,
            SMU Cox, and RSM Erasmus.
          </p>
          <p>
            And honestly? I&rsquo;m still on that journey, figuring out where
            to go next, how to grow deeper, and how to build the kind of
            creative and strategic toolkit that helps me take on the future I
            want. <strong className="text-white">Design is a huge part of that vision.</strong>
          </p>
        </div>
      </section>

      <section id="building" className="pt-6">
        <SectionLabel>🛠 BUILDING -- PASSION</SectionLabel>
        <div className="space-y-5">
          <p>
            I love to build. Startups are my playground. I&rsquo;ve worked
            with teams at Solbase, Scrim, Krane, Startbutton, Sendchamp,
            Bumpa, Igho Maraki Studio, Keep Finance, and PressOne&mdash;and
            each one taught me something new about momentum, clarity, and how
            to get good work done fast.
          </p>
          <p>
            I enjoy being close to the chaos of early ideas, helping shape
            them into something real. That&rsquo;s where I feel most alive.
          </p>
        </div>
      </section>

      <section id= "music" className="pt-6">
        <SectionLabel>🎧 MUSIC AND DEMONSTRATIVE ARTS -- PASSION</SectionLabel>
        <div className="space-y-5">
          <p>
            There&rsquo;s a version of me, maybe in an alternate timeline,
            who&rsquo;s a superstar DJ, a footballer, or maybe the guy who
            owns the hottest underground club in the city.
          </p>
          <p>
            In this life, I&rsquo;m a designer. But music, dance, and soccer
            still run deep. Sometimes I take time off and live that version
            for a bit. It helps me stay inspired and connected to the energy
            I like to bring into my work.
          </p>
        </div>
      </section>

      <section className="pt-6">
        <SectionLabel>🤝 REACH OUT TO ME</SectionLabel>
        <p>
          I&rsquo;m not super active online, but I do hang out on Twitter and LinkedIn
          from time to time. That said, I value time offline just as much;
          breathing real air, touching grass, and remembering there&rsquo;s a
          world beyond the glow of my Figma files.
        </p>
      </section>

      <section className="pt-6 pb-16">
        <SectionLabel>✨ THANKS</SectionLabel>
        <p>
          Special thanks to Dia (my ChatGPT sidekick), Whisk, Midjourney, and
          all the other AI tools that help me stay fast, curious, and
          creative. Also big love to Paul&mdash;your feedback and trust
          always push me to do my best work.
        </p>
      </section>
    </div>
  );
}
