import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import profileImage from "@/assets/trang-vu-profile-bw.jpg";
import dataImage from "@/assets/project-data.jpg";
import growthImage from "@/assets/project-growth.jpg";
import { ProjectCard } from "@/components/portfolio/project-card";
import { countryProjects } from "@/lib/portfolio-data";

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

const educationItems = [
  ["2019 — 2021", "Graduate Study", "Business, innovation & international growth", "Add your university, degree, thesis, and academic highlights here."],
  ["2014 — 2018", "Undergraduate Study", "Commerce, markets & management", "Add your university, major, exchange experience, and key distinctions here."],
  ["Research focus", "Applied Research", "AI adoption & decision systems", "A home for papers, conference work, methods, and questions you continue to explore."],
];

const personalProjects = [
  { n: "01", title: "Decision Notes", tag: "Writing · Data", text: "A practical collection of frameworks for making clearer decisions with imperfect information.", image: dataImage },
  { n: "02", title: "Global Growth Atlas", tag: "Research · Markets", text: "A visual exploration of how products adapt as they move across cultures and markets.", image: growthImage },
];

const topics = [
  ["Artificial Intelligence", "Responsible adoption, practical workflows, agents, and the changing shape of knowledge work.", "12 notes"],
  ["Product Systems", "Discovery, prioritization, experimentation, and the operating rhythms behind strong products.", "08 notes"],
  ["Data Storytelling", "Making analysis useful through framing, narrative, visualization, and decision design.", "10 notes"],
  ["Global Growth", "Market entry, localization, cross-cultural behavior, and durable commercial systems.", "07 notes"],
];

const countryFlags: Record<string, string> = { Germany: "🇩🇪", Thailand: "🇹🇭", Vietnam: "🇻🇳" };

function Index() {
  return <main>
    <section id="about" className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-14 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-10 lg:py-20">
      <div className="overflow-hidden border border-border bg-background shadow-lg">
        <img src={profileImage} alt="Trang Vu" width={768} height={768} className="aspect-[4/3] w-full object-cover object-top grayscale" />
      </div>
      <div>
        <p className="eyebrow">About</p>
        <h1 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">Hi, I’m Trang Vu!</h1>
        <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          <strong className="font-semibold text-foreground">6+ years</strong> of experience across Product Management, CRM Strategy, and Sales Operations in <strong className="font-semibold text-foreground">Asia and Europe</strong> for companies in Finance, Healthcare, Retail, E-commerce &amp; SaaS.
        </p>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-foreground sm:text-2xl">I help companies grow sustainably and scale globally by turning <strong>Data &amp; AI</strong> into decisions that stick.</p>
      </div>
    </section>

    <section id="work-projects" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">Selected work · 03 markets</p>
          <h2 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">Work Projects</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">Strategy translated into action across product, CRM, sales operations, data, and AI.</p>
        </div>
      </div>
      {Object.entries(countryProjects).map(([country, projects], countryIndex) => (
        <div key={country} className={countryIndex % 2 ? "bg-background" : "bg-secondary"}>
          <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-24">
            <div className="mb-10 grid gap-3 border-b border-border pb-5 sm:grid-cols-[auto_1fr] sm:items-end sm:gap-8">
              <span className="text-xs font-semibold text-primary">0{countryIndex + 1}</span>
              <h3 className="font-display text-5xl sm:text-6xl">{country} <span aria-hidden="true" className="text-4xl">{countryFlags[country]}</span></h3>
            </div>
            <div className="grid gap-10 md:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
          </div>
        </div>
      ))}
    </section>

    <section id="education-research" className="border-t border-border bg-background">
      <SectionHeading eyebrow="Foundations & inquiry" title="Education & Research">The formal learning and research questions behind my work.</SectionHeading>
      <div className="mx-auto max-w-[1440px] px-5 pb-20 lg:px-10 lg:pb-28"><div className="border-t border-border">{educationItems.map(([date,type,title,text],i)=><article key={title} className="grid gap-5 border-b border-border py-9 md:grid-cols-[0.6fr_0.8fr_1.4fr]"><div><span className="mr-5 text-primary">0{i+1}</span><span className="eyebrow">{date}</span></div><p className="font-display text-3xl">{type}</p><div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{text}</p></div></article>)}</div></div>
    </section>

    <section id="personal-projects" className="border-t border-border bg-secondary">
      <SectionHeading eyebrow="Ideas beyond the brief" title="Personal Projects">Independent experiments that make room for curiosity, practical learning, and new ways of thinking.</SectionHeading>
      <div className="mx-auto max-w-[1440px] px-5 pb-20 lg:px-10 lg:pb-28"><div className="grid gap-14 md:grid-cols-2">{personalProjects.map((project,i)=><article key={project.title} className={i===1?"md:mt-24":""}><img src={project.image} alt="" width={1536} height={1024} loading="lazy" className="aspect-[5/4] w-full object-cover"/><div className="grid grid-cols-[auto_1fr] gap-5 border-b border-border py-6"><span className="font-display text-3xl text-primary">{project.n}</span><div><p className="eyebrow">{project.tag}</p><h3 className="mt-2 font-display text-4xl">{project.title}</h3><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">{project.text}</p><p className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">Concept preview <ArrowUpRight className="size-4"/></p></div></div></article>)}</div></div>
    </section>

    <section id="self-study" className="border-t border-border bg-background">
      <SectionHeading eyebrow="An evolving library" title="Self-Study">Topics I am actively studying, testing, and connecting to real-world work.</SectionHeading>
      <div className="mx-auto max-w-[1440px] px-5 pb-20 lg:px-10 lg:pb-28"><div className="grid gap-px bg-border sm:grid-cols-2">{topics.map(([title,text,count],i)=><article key={title} className="min-h-72 bg-background p-8 sm:p-12"><div className="flex items-center justify-between"><span className="font-display text-3xl text-primary">0{i+1}</span><span className="eyebrow">{count}</span></div><h3 className="mt-16 font-display text-4xl">{title}</h3><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div>
    </section>
  </main>;
}

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children: string }) {
  return <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-24"><p className="eyebrow">{eyebrow}</p><h2 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">{title}</h2><p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{children}</p></div>;
}