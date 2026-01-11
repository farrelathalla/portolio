import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { ProjectsCarousel } from "@/components/sections/projects-carousel";
import { Research } from "@/components/sections/research";
import { ProjectList } from "@/components/sections/project-list";
import { APPS, OPEN_SOURCE, FUN_PROJECTS } from "@/data/content";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Hero />
        <Experience />
        <Research />
      </div>

      <div className="w-full mb-12">
        <ProjectsCarousel />
      </div>

      <div className="mx-auto max-w-4xl px-4 md:px-6 space-y-8 pb-32">
        <ProjectList title="APPS" items={APPS} />
        <ProjectList title="OPEN SOURCE" items={OPEN_SOURCE} />
        <ProjectList title="FUN PROJECTS" items={FUN_PROJECTS} />
      </div>
    </main>
  );
}
