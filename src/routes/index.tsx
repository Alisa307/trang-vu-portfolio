import { createFileRoute } from "@tanstack/react-router";
import profileImageAsset from "@/assets/trang-vu-profile-bw.jpg";
import { ProjectShowcase } from "@/components/portfolio/project-showcase";
import { EducationList, ProfileShowcase } from "@/components/portfolio/education-research";
import { ContactBand, ReferenceList } from "@/components/portfolio/reference-contact";
import { contactItems, educationEntries, entrepreneurialProjects, linkedinRecommendationsUrl, references, researchProjects, workSections } from "@/lib/portfolio-data";

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

function Index() {
  return <main>
    <section id="about" className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-14 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-10 lg:py-20">
      <div className="overflow-hidden border border-border bg-background shadow-lg">
        <img src={profileImageAsset.url} alt="Trang Vu" width={768} height={768} className="aspect-[4/3] w-full object-cover object-top" />
      </div>
      <div>
        <p className="eyebrow">About</p>
        <h1 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">Hi, I’m Trang Vu!</h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-foreground sm:text-lg">
          <strong className="font-semibold">5+ years</strong> of experience in Portfolio Management and CRM Strategy for <strong className="font-semibold">Healthcare, Retail, E-commerce, and SaaS</strong> businesses in <strong className="font-semibold">Asia and Europe</strong>.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-foreground sm:text-lg">Thinking like <strong className="font-semibold">an entrepreneur</strong> and acting like <strong className="font-semibold">an owner</strong>, I turn <strong className="font-semibold">research, data, and AI</strong> into <strong className="font-semibold">commercial growth</strong> and <strong className="font-semibold">global scale</strong>.</p>
      </div>
    </section>

    <section id="work-projects" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 lg:px-10 lg:pb-10 lg:pt-20">
        <h2 className="font-display text-5xl leading-tight sm:text-7xl">Work Projects</h2>
      </div>
      {workSections.map((section, sectionIndex) => (
        <div key={section.id} className={sectionIndex % 2 ? "bg-background" : "bg-secondary"}>
          <div className="mx-auto max-w-[1440px] px-5 py-10 lg:px-10 lg:py-14">
            <div className="mb-4 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 sm:gap-7">
              <span className="text-xs font-semibold text-primary">0{sectionIndex + 1}</span>
              <h3 className="font-display text-4xl sm:text-6xl">{section.name}</h3>
              <div className="flex items-center gap-4">
                {section.logos.map((logo) => (
                  <img key={logo.alt} src={logo.src} alt={`${logo.alt} logo`} className="h-10 w-auto max-w-28 object-contain sm:h-12" />
                ))}
              </div>
            </div>
            <ProjectShowcase projects={section.projects} />
          </div>
        </div>
      ))}
    </section>

    <section id="education-research" className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 lg:px-10 lg:pb-10 lg:pt-20">
        <h2 className="font-display text-5xl leading-tight sm:text-7xl">Education & Research</h2>
      </div>
      <div className="mx-auto max-w-[1440px] px-5 pb-16 lg:px-10 lg:pb-24">
        <div className="mb-8 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 sm:gap-7">
          <span className="text-xs font-semibold text-primary">01</span>
          <h3 className="font-display text-4xl sm:text-6xl">Education</h3>
        </div>
        <EducationList entries={educationEntries} />
      </div>
      <div className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">
          <div className="mb-8 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 sm:gap-7">
            <span className="text-xs font-semibold text-primary">02</span>
            <h3 className="font-display text-4xl sm:text-6xl">Research Projects</h3>
          </div>
          <ProfileShowcase projects={researchProjects} idPrefix="research" />
        </div>
      </div>
    </section>

    <section id="entrepreneurial-projects" className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 lg:px-10 lg:pb-10 lg:pt-20">
        <h2 className="font-display text-5xl leading-tight sm:text-7xl">Entrepreneurial Projects</h2>
      </div>
      <div className="mx-auto max-w-[1440px] px-5 pb-16 lg:px-10 lg:pb-24">
        <ProfileShowcase projects={entrepreneurialProjects} idPrefix="entrepreneurial" />
      </div>
    </section>

    <section id="reference-contact" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 lg:px-10 lg:pb-10 lg:pt-20">
        <h2 className="font-display text-5xl leading-tight sm:text-7xl">Reference & Contact</h2>
      </div>
      <div className="mx-auto max-w-[1440px] px-5 pb-16 lg:px-10 lg:pb-24">
        <div className="mb-8 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-3 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-x-7">
          <span className="text-xs font-semibold text-primary">01</span>
          <h3 className="font-display text-4xl sm:text-6xl">References</h3>
          <a href={linkedinRecommendationsUrl} target="_blank" rel="noopener noreferrer" className="col-span-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground underline underline-offset-4 sm:col-span-1">
            View on LinkedIn ↗
          </a>
        </div>
        <ReferenceList references={references} />
      </div>
      <ContactBand items={contactItems} />
    </section>
  </main>;
}
