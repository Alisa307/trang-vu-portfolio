import { BarChart3, Database, HeartPulse, LayoutDashboard, LineChart, MailCheck, Network, ScanSearch, UsersRound } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Project } from "@/lib/portfolio-data";

const icons = {
  health: HeartPulse,
  dashboard: LayoutDashboard,
  matrix: BarChart3,
  model: Network,
  customer: UsersRound,
  automation: MailCheck,
  value: ScanSearch,
  market: LineChart,
  sales: Database,
};

function ProjectPanel({ project }: { project: Project }) {
  return (
    <div className="grid gap-10 border-t border-border py-10 lg:grid-cols-[minmax(17rem,0.8fr)_minmax(0,1.5fr)] lg:gap-16 lg:py-14">
      <div className="grid content-start gap-7">
        {Object.entries(project.star).map(([label, text], index) => (
          <section key={label} className="grid grid-cols-[2.5rem_1fr] gap-4">
            <span className="flex size-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
              {index + 1}
            </span>
            <div>
              <h4 className="text-sm font-semibold capitalize text-foreground">{label}</h4>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="min-w-0 self-center">
        {project.images.length > 1 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {project.images.map((image, index) => (
              <div key={image} className="overflow-hidden bg-muted">
                <img src={image} alt={`${project.title} dashboard view ${index + 1}`} className="aspect-[16/10] h-full w-full object-cover object-top" />
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden bg-muted">
            <img src={project.images[0]} alt={`${project.title} project visual`} className="aspect-[7/5] w-full object-contain" />
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  return (
    <Tabs defaultValue="project-0" className="w-full">
      <TabsList className="grid h-auto w-full grid-cols-1 gap-0 rounded-none border-b border-border bg-transparent p-0 text-foreground md:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = icons[project.icon];
          return (
            <TabsTrigger
              key={project.title}
              value={`project-${index}`}
              className="group min-h-32 whitespace-normal rounded-none border-b-2 border-transparent px-4 py-6 text-center shadow-none data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none md:border-b-2"
            >
              <span className="flex flex-col items-center gap-4">
                <Icon aria-hidden="true" className="size-7 stroke-[1.4] text-muted-foreground transition-colors group-data-[state=active]:text-primary" />
                <span className="text-base font-semibold leading-6">{project.title}</span>
              </span>
            </TabsTrigger>
          );
        })}
      </TabsList>
      {projects.map((project, index) => (
        <TabsContent key={project.title} value={`project-${index}`} className="mt-0">
          <ProjectPanel project={project} />
        </TabsContent>
      ))}
    </Tabs>
  );
}