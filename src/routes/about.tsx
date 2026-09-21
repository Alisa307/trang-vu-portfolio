import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import profileAsset from "@/assets/trang-vu-profile.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Trang Vu" }, { name: "description", content: "Meet Trang Vu, a product, CRM, and sales operations professional working across Asia and Europe." },
    { property: "og:title", content: "About — Trang Vu" }, { property: "og:description", content: "Product, CRM, and sales operations experience across Asia and Europe." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: About,
});

function About() {
  return <main>
    <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20 lg:px-10 lg:py-24">
      <div className="relative bg-secondary p-5 pb-0 sm:p-10 sm:pb-0">
        <img src={profileAsset.url} alt="Trang Vu" width={777} height={839} className="mx-auto aspect-[4/5] w-full max-w-lg object-cover object-top" />
        <span className="absolute -bottom-6 right-0 bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground">Asia ↔ Europe</span>
      </div>
      <div>
        <p className="eyebrow">About me</p>
        <h1 className="mt-6 font-display text-6xl leading-none sm:text-8xl">Hi, I’m <em className="font-normal text-primary">Trang Vu!</em></h1>
        <p className="mt-9 max-w-2xl text-lg leading-8 text-muted-foreground">6+ years of experience across Product Management, CRM Strategy, and Sales Operations in Asia and Europe for companies in Finance, Healthcare, Retail, E-commerce & SaaS.</p>
        <p className="mt-6 max-w-2xl text-2xl leading-9 text-foreground">I help companies grow sustainably and scale globally by turning Data & AI into decisions that stick.</p>
        <Link to="/work-projects" className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.14em]">Explore my work <ArrowUpRight className="size-4" /></Link>
      </div>
    </section>
    <section className="bg-secondary"><div className="mx-auto grid max-w-[1440px] gap-px bg-border lg:grid-cols-3">
      {[['01','Product','From ambiguous customer needs to focused roadmaps and measurable outcomes.'],['02','Growth','From market signals to repeatable systems for sustainable, global scale.'],['03','Data & AI','From complex information to decisions teams understand and use.']].map(([n,t,d]) => <div key={n} className="bg-secondary p-8 sm:p-12"><p className="eyebrow text-primary">{n}</p><h2 className="mt-5 font-display text-4xl">{t}</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">{d}</p></div>)}
    </div></section>
  </main>;
}
