import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/portfolio/page-intro";

export const Route = createFileRoute("/education-research")({ head: () => ({ meta: [
  { title: "Education & Research — Trang Vu" }, { name: "description", content: "A preview of Trang Vu's education, research interests, and learning journey." },
  { property: "og:title", content: "Education & Research — Trang Vu" }, { property: "og:description", content: "Education, research interests, and learning journey." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: Education });

const items = [
  ["2019 — 2021", "Graduate Study", "Business, innovation & international growth", "Add your university, degree, thesis, and academic highlights here."],
  ["2014 — 2018", "Undergraduate Study", "Commerce, markets & management", "Add your university, major, exchange experience, and key distinctions here."],
  ["Research focus", "Applied Research", "AI adoption & decision systems", "A home for papers, conference work, methods, and questions you continue to explore."],
];
function Education() { return <main><PageIntro eyebrow="Foundations & inquiry" title="Education & Research">The formal learning and research questions behind my work. The entries below are sample placeholders ready for your real details.</PageIntro><section className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28"><div className="border-t border-border">{items.map(([date,type,title,text],i)=><article key={title} className="grid gap-5 border-b border-border py-9 md:grid-cols-[0.6fr_0.8fr_1.4fr]"><div><span className="mr-5 text-primary">0{i+1}</span><span className="eyebrow">{date}</span></div><p className="font-display text-3xl">{type}</p><div><h2 className="text-lg font-semibold">{title}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{text}</p></div></article>)}</div></section></main> }
