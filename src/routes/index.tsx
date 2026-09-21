import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import profileAsset from "@/assets/trang-vu-profile.jpg.asset.json";
import strategyImage from "@/assets/project-strategy.jpg";
import dataImage from "@/assets/project-data.jpg";
import growthImage from "@/assets/project-growth.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Trang Vu — Product, Growth, Data & AI" },
    { name: "description", content: "Trang Vu helps companies grow sustainably and scale globally by turning Data and AI into decisions that stick." },
    { property: "og:title", content: "Trang Vu — Product, Growth, Data & AI" },
    { property: "og:description", content: "Turning Data and AI into decisions that stick." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const areas = [
  { n: "01", title: "About", to: "/about" as const, text: "My story, experience, and approach to sustainable growth." },
  { n: "02", title: "Work Projects", to: "/work-projects" as const, text: "Selected work across Germany, Thailand, and Vietnam." },
  { n: "03", title: "Education & Research", to: "/education-research" as const, text: "The formal foundations and questions behind my work." },
  { n: "04", title: "Personal Projects", to: "/personal-projects" as const, text: "Independent experiments, writing, and ideas in progress." },
  { n: "05", title: "Self-Study", to: "/self-study" as const, text: "An evolving library across AI, product, data, and growth." },
];

function Index() {
  return <main>
    <section className="mx-auto grid min-h-[calc(100vh-76px)] max-w-[1440px] grid-rows-[1fr_auto] px-5 lg:px-10">
      <div className="grid items-center gap-10 py-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20 lg:py-16">
        <div className="relative z-10">
          <p className="eyebrow">Product · CRM · Sales Operations · Data & AI</p>
          <h1 className="mt-7 max-w-5xl font-display text-6xl leading-[0.94] sm:text-8xl lg:text-[7.4rem]">
            Turning insight into <em className="font-normal text-primary">decisions</em> that stick.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">6+ years helping companies grow sustainably and scale globally across Asia and Europe.</p>
          <div className="mt-10 flex flex-wrap gap-5">
            <Link to="/work-projects" className="inline-flex items-center gap-3 bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90">View selected work <ArrowUpRight className="size-4" /></Link>
            <Link to="/about" className="inline-flex items-center gap-3 border-b border-foreground px-1 py-3 text-xs font-semibold uppercase tracking-[0.14em]">Meet Trang</Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md bg-secondary p-4 pb-0 sm:p-8 sm:pb-0 lg:max-w-none">
          <span className="absolute -left-5 top-10 hidden font-display text-8xl text-primary/20 lg:block">TV</span>
          <img src={profileAsset.url} alt="Trang Vu" width={777} height={839} className="relative aspect-[4/5] w-full object-cover object-top" />
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-border py-5">
        <p className="eyebrow">Explore the portfolio</p><ArrowDown className="size-4 text-primary" aria-hidden="true" />
      </div>
    </section>

    <section className="bg-secondary">
      <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div><p className="eyebrow">Selected work</p><h2 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">Across markets,<br/><em className="font-normal text-primary">built to last.</em></h2></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[strategyImage,dataImage,growthImage].map((image,i)=><img key={image} src={image} alt="" width={1536} height={1024} loading="lazy" className={`${i===1?'sm:mt-12':''} aspect-[3/4] w-full object-cover`}/>) }
          </div>
        </div>
        <div className="mt-16 flex justify-end"><Link to="/work-projects" className="inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.14em]">Germany · Thailand · Vietnam <ArrowUpRight className="size-4" /></Link></div>
      </div>
    </section>

    <section className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
      <p className="eyebrow">The portfolio · 05 parts</p>
      <div className="mt-10 border-t border-border">{areas.map((area)=><Link key={area.n} to={area.to} className="group grid gap-4 border-b border-border py-8 transition-colors hover:bg-secondary sm:grid-cols-[0.2fr_0.8fr_1fr_auto] sm:items-center sm:px-4"><span className="font-display text-2xl text-primary">{area.n}</span><h3 className="font-display text-3xl sm:text-4xl">{area.title}</h3><p className="max-w-md text-sm leading-6 text-muted-foreground">{area.text}</p><ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>)}</div>
    </section>
  </main>;
}