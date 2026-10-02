import { BarChart3, Database, HeartPulse, LayoutDashboard, LineChart, MailCheck, Network, ScanSearch, UsersRound } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Collage as CollageData, Project } from "@/lib/portfolio-data";

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

const imageShadow = "rounded-lg shadow-[0_24px_60px_-12px_rgba(20,20,30,0.3),0_6px_18px_-6px_rgba(20,20,30,0.15)]";
const collageShadow = "rounded-md shadow-[0_14px_36px_-10px_rgba(20,20,30,0.32),0_3px_10px_-4px_rgba(20,20,30,0.15)]";

export function Collage({ collage }: { collage: CollageData }) {
  return (
    <div className="mx-auto w-full [container-type:inline-size]" style={{ maxWidth: `min(38rem, ${(collage.aspect * 36).toFixed(1)}rem)` }}>
      <div className="relative w-full" style={{ aspectRatio: collage.aspect }}>
        {collage.items.map((item, index) => {
          const box = { left: `${item.x}%`, top: `${item.y}%`, width: `${item.w}%`, height: `${item.h}%` };
          if ("text" in item) {
            return (
              <p key={index} className="absolute flex items-center justify-center text-center italic text-muted-foreground" style={{ ...box, fontSize: "2.4cqw" }}>
                {item.text}
              </p>
            );
          }
          const { l = 0, t = 0, r = 0, b = 0 } = item.crop ?? {};
          const visibleW = 1 - l - r;
          const visibleH = 1 - t - b;
          return (
            <div key={index} className={`absolute overflow-hidden bg-background ${collageShadow}`} style={box}>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="absolute max-w-none"
                style={{ width: `${100 / visibleW}%`, height: `${100 / visibleH}%`, left: `${(-l / visibleW) * 100}%`, top: `${(-t / visibleH) * 100}%` }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, index) => (index % 2 ? <strong key={index} className="font-semibold text-foreground">{part}</strong> : part))}
    </>
  );
}

function ProjectPanel({ project }: { project: Project }) {
  return (
    <div className="grid gap-12 border-t border-border py-12 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-16">
      <div className="grid content-center gap-10">
        {project.headline && (
          <div>
            <h4 className="text-[1.2rem] font-bold leading-snug text-foreground">{project.headline.title}</h4>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
              {project.headline.points.map((point) => (
                <li key={point}><Emphasis text={point} /></li>
              ))}
            </ul>
          </div>
        )}
        {project.star && (
          <div className="grid gap-11">
            {Object.entries(project.star).map(([label, text], index) => (
              <section key={label} className="grid grid-cols-[2.75rem_1fr] gap-5">
                <span className="flex size-11 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-base font-semibold capitalize text-foreground">{label}</h4>
                  <p className="mt-1 text-base leading-7 text-muted-foreground">{text}</p>
                </div>
              </section>
            ))}
          </div>
        )}
      </div>

      <div className="min-w-0">
        <h4 className="mb-5 text-center font-display text-2xl text-foreground sm:text-3xl">{project.imageTitle ?? project.title}</h4>
        {project.collage ? (
          <Collage collage={project.collage} />
        ) : (
          <img src={project.images?.[0]} alt={`${project.title} project visual`} className={`mx-auto h-auto max-h-[36rem] w-auto max-w-full ${imageShadow}`} />
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