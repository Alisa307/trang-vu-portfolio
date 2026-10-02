import { Layers, Megaphone, House, Sigma, Sparkles, Stethoscope } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collage, Emphasis } from "@/components/portfolio/project-showcase";
import type { EducationEntry, ProfileProject } from "@/lib/portfolio-data";

const profileIcons = { insights: Sparkles, quant: Sigma, venture: Layers, ai: Stethoscope, home: House, community: Megaphone };
const imageShadow = "rounded-lg shadow-[0_24px_60px_-12px_rgba(20,20,30,0.3),0_6px_18px_-6px_rgba(20,20,30,0.15)]";

function ProfileMeta({ project }: { project: ProfileProject }) {
  return (
    <div>
      <h4 className="text-[1.2rem] font-bold leading-snug text-foreground">{project.role}</h4>
      <p className="mt-1 text-base text-foreground">{[project.org, project.location].filter(Boolean).join(", ")}</p>
      {project.note && <p className="mt-1 text-base italic text-muted-foreground">{project.note}</p>}
    </div>
  );
}

export function EducationList({ entries }: { entries: EducationEntry[] }) {
  return (
    <div className="border-t border-border">
      {entries.map((entry, index) => (
        <article key={entry.school} className="grid gap-8 border-b border-border py-10 md:grid-cols-[13rem_minmax(0,1fr)] md:items-center lg:grid-cols-[15rem_minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14">
          <div className="flex h-24 items-center">
            <img src={entry.logo} alt={`${entry.school} logo`} className="max-h-24 w-auto max-w-full object-contain object-left" />
          </div>
          <div>
            <p className="eyebrow"><span className="mr-4 text-primary">0{index + 1}</span>{entry.period}</p>
            <h4 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">{entry.school}</h4>
            <p className="mt-3 text-base font-bold text-foreground">{entry.degree}</p>
            <p className="mt-1 text-base text-muted-foreground">{entry.location} · <span className="italic">{entry.note}</span></p>
          </div>
          {entry.points.length > 0 && (
            <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground md:col-start-2 lg:col-start-auto">
              {entry.points.map((point) => (
                <li key={point}><Emphasis text={point} /></li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

export function ProfileShowcase({ projects, idPrefix }: { projects: ProfileProject[]; idPrefix: string }) {
  return (
    <Tabs defaultValue={`${idPrefix}-0`} className="w-full">
      <TabsList className="grid h-auto w-full grid-cols-1 gap-0 rounded-none border-b border-border bg-transparent p-0 text-foreground md:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = profileIcons[project.icon];
          return (
            <TabsTrigger
              key={project.tabTitle}
              value={`${idPrefix}-${index}`}
              className="group min-h-32 whitespace-normal rounded-none border-b-2 border-transparent px-4 py-6 text-center shadow-none data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none md:border-b-2"
            >
              <span className="flex flex-col items-center gap-4">
                <Icon aria-hidden="true" className="size-7 stroke-[1.4] text-muted-foreground transition-colors group-data-[state=active]:text-primary" />
                <span className="text-base font-semibold leading-6">{project.tabTitle}</span>
              </span>
            </TabsTrigger>
          );
        })}
      </TabsList>
      {projects.map((project, index) => (
        <TabsContent key={project.tabTitle} value={`${idPrefix}-${index}`} className="mt-0">
          <div className="grid gap-12 border-t border-border py-12 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-16">
            {project.steps ? (
              <>
                <div className="grid content-center gap-8">
                  <img src={project.logo} alt={`${project.org} logo`} className="h-12 w-auto max-w-full object-contain object-left" />
                  <ProfileMeta project={project} />
                  <div className="grid gap-11">
                    {project.steps.map((step, index) => (
                      <section key={step.label} className="grid grid-cols-[2.75rem_1fr] gap-5">
                        <span className="flex size-11 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">{index + 1}</span>
                        <div>
                          <h4 className="text-base font-semibold text-foreground">{step.label}</h4>
                          {step.text && <p className="mt-1 text-base leading-7 text-muted-foreground">{step.text}</p>}
                          {step.points && (
                            <ul className="mt-1 list-disc space-y-1 pl-5 text-base leading-7 text-muted-foreground">
                              {step.points.map((point) => <li key={point}>{point}</li>)}
                            </ul>
                          )}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
                <div className="min-w-0">
                  {project.imageTitle && <h4 className="mx-auto mb-5 max-w-[34rem] text-center font-display text-2xl text-foreground sm:text-3xl">{project.imageTitle}</h4>}
                  {project.collage && <Collage collage={project.collage} />}
                </div>
              </>
            ) : (
              <>
                <div className="grid content-center gap-6">
                  {project.logo && <img src={project.logo} alt={`${project.org} logo`} className="h-12 w-auto max-w-full object-contain object-left" />}
                  <ProfileMeta project={project} />
                  <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
                    {project.points?.map((point) => (
                      <li key={point}><Emphasis text={point} /></li>
                    ))}
                  </ul>
                </div>
                {(project.image || project.collage) && (
                  <div className="min-w-0">
                    {project.imageTitle && <h4 className="mx-auto mb-5 max-w-[34rem] text-center font-display text-2xl text-foreground sm:text-3xl">{project.imageTitle}</h4>}
                    {project.collage ? (
                      <Collage collage={project.collage} />
                    ) : (
                      <img src={project.image} alt={`${project.imageTitle ?? project.org} visual`} className={`mx-auto h-auto max-h-[36rem] w-auto max-w-full ${project.grayscale ? "grayscale" : ""} ${imageShadow}`} />
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
