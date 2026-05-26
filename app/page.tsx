import { Nav } from "@/components/layout/Nav";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { GlassCard, SectionHeader } from "@/components/ui";

interface PlaceholderProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}

function Placeholder({
  id,
  index,
  eyebrow,
  title,
  description,
}: PlaceholderProps) {
  return (
    <section id={id} className="container-mc scroll-mt-20 py-24 sm:py-32">
      <SectionHeader
        index={index}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <GlassCard className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
          building this section next
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute-soft">
          coming soon
        </span>
      </GlassCard>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Placeholder
          id="projects"
          index="02"
          eyebrow="Projects"
          title="Projects"
          description="Selected work across software, ML, and aerospace experiments. Each has its own writeup."
        />
        <Placeholder
          id="logbook"
          index="03"
          eyebrow="Logbook"
          title="Logbook"
          description="An archive of older technical work, reports, and notes. Dated, so it reads as a running journal."
        />
        <Skills />
        <Placeholder
          id="contact"
          index="05"
          eyebrow="Contact"
          title="Get in touch"
          description="The best ways to reach me."
        />
      </main>
    </>
  );
}
