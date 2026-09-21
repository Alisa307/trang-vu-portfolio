import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/portfolio/page-intro";
import dataImage from "@/assets/project-data.jpg";
import growthImage from "@/assets/project-growth.jpg";

export const Route = createFileRoute("/personal-projects")({ head: () => ({ meta: [
  { title: "Personal Projects — Trang Vu" }, { name: "description", content: "Independent experiments and ideas by Trang Vu." },
  { property: "og:title", content: "Personal Projects — Trang Vu" }, { property: "og:description", content: "Independent experiments and ideas by Trang Vu." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: PersonalProjects });

function PersonalProjects() { const projects=[{n:'01',title:'Decision Notes',tag:'Writing · Data',text:'A practical collection of frameworks for making clearer decisions with imperfect information.',image:dataImage},{n:'02',title:'Global Growth Atlas',tag:'Research · Markets',text:'A visual exploration of how products adapt as they move across cultures and markets.',image:growthImage}]; return <main><PageIntro eyebrow="Ideas beyond the brief" title="Personal Projects">Independent experiments that make room for curiosity, practical learning, and new ways of thinking.</PageIntro><section className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28"><div className="grid gap-14 md:grid-cols-2">{projects.map((p,i)=><article key={p.title} className={i===1?'md:mt-28':''}><img src={p.image} alt="" width={1536} height={1024} loading="lazy" className="aspect-[5/4] w-full object-cover"/><div className="grid grid-cols-[auto_1fr] gap-5 border-b border-border py-6"><span className="font-display text-3xl text-primary">{p.n}</span><div><p className="eyebrow">{p.tag}</p><h2 className="mt-2 font-display text-4xl">{p.title}</h2><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">{p.text}</p><p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">Concept preview <ArrowUpRight className="size-4"/></p></div></div></article>)}</div></section></main> }
