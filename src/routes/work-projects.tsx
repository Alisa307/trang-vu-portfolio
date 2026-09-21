import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/portfolio/page-intro";
import { ProjectCard } from "@/components/portfolio/project-card";
import { countryProjects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work-projects")({
  head: () => ({ meta: [
    { title: "Work Projects — Trang Vu" },
    { name: "description", content: "Selected product, CRM, data, AI, and sales operations projects across Germany, Thailand, and Vietnam." },
    { property: "og:title", content: "Work Projects — Trang Vu" },
    { property: "og:description", content: "Selected projects across Germany, Thailand, and Vietnam." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: WorkProjects,
});

function WorkProjects() {
  return <main>
    <PageIntro eyebrow="Selected work · 03 markets" title="Work Projects">
      A first look at how strategy becomes action across product, CRM, sales operations, data, and AI. All cases below are sample content for the design preview.
    </PageIntro>
    {Object.entries(countryProjects).map(([country, projects], countryIndex) => (
      <section key={country} className={countryIndex % 2 ? "bg-secondary" : "bg-background"}>
        <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
          <div className="mb-10 grid gap-3 border-b border-border pb-5 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-8">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">0{countryIndex + 1}</span>
            <h2 className="font-display text-5xl sm:text-6xl">{country}</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        </div>
      </section>
    ))}
  </main>;
}
