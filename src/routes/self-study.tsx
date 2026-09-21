import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/portfolio/page-intro";

export const Route = createFileRoute("/self-study")({ head: () => ({ meta: [
  { title: "Self-Study — Trang Vu" }, { name: "description", content: "Trang Vu's evolving self-study library across AI, product, data, and growth." },
  { property: "og:title", content: "Self-Study — Trang Vu" }, { property: "og:description", content: "An evolving learning library across AI, product, data, and growth." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: SelfStudy });

const topics=[['Artificial Intelligence','Responsible adoption, practical workflows, agents, and the changing shape of knowledge work.','12 notes'],['Product Systems','Discovery, prioritization, experimentation, and the operating rhythms behind strong products.','08 notes'],['Data Storytelling','Making analysis useful through framing, narrative, visualization, and decision design.','10 notes'],['Global Growth','Market entry, localization, cross-cultural behavior, and durable commercial systems.','07 notes']];
function SelfStudy(){return <main><PageIntro eyebrow="An evolving library" title="Self-Study">Topics I am actively studying, testing, and connecting to real-world work. Counts and notes are sample content for this first design.</PageIntro><section className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28"><div className="grid gap-px bg-border sm:grid-cols-2">{topics.map(([title,text,count],i)=><article key={title} className="min-h-72 bg-background p-8 sm:p-12"><div className="flex items-center justify-between"><span className="font-display text-3xl text-primary">0{i+1}</span><span className="eyebrow">{count}</span></div><h2 className="mt-16 font-display text-4xl">{title}</h2><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></section></main>}
