import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type Project = {
  title: string;
  discipline: string;
  summary: string;
  image: string;
  star: { situation: string; task: string; action: string; results: string };
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group min-w-0">
      <div className="overflow-hidden bg-muted">
        <img src={project.image} alt="" loading="lazy" width={1536} height={1024} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
      </div>
      <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-b border-border py-5">
        <span className="font-display text-2xl text-primary">0{index + 1}</span>
        <div className="min-w-0">
          <p className="eyebrow">{project.discipline}</p>
          <h3 className="mt-2 font-display text-3xl leading-tight">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.summary}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="mt-4 h-auto p-0 text-xs uppercase tracking-[0.14em] text-foreground no-underline">
                See more <ArrowUpRight aria-hidden="true" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto border-border p-0 sm:rounded-none">
              <DialogHeader className="border-b border-border bg-secondary p-7 pr-14 text-left sm:p-10 sm:pr-16">
                <p className="eyebrow">Sample case study · {project.discipline}</p>
                <DialogTitle className="mt-3 font-display text-4xl font-normal leading-tight sm:text-5xl">{project.title}</DialogTitle>
                <DialogDescription className="mt-3 max-w-xl leading-6">Preview content to demonstrate the final case-study format.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-px bg-border sm:grid-cols-2">
                {Object.entries(project.star).map(([key, value], i) => (
                  <section key={key} className="bg-background p-7 sm:p-9">
                    <p className="eyebrow"><span className="mr-3 text-primary">0{i + 1}</span>{key}</p>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{value}</p>
                  </section>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </article>
  );
}
