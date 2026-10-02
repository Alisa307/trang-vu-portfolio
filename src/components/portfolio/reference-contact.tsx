import { Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import { linkedinRecommendationsUrl, type ContactItem, type Reference } from "@/lib/portfolio-data";

const contactIcons = { linkedin: Linkedin, email: Mail, phone: PhoneCall, location: MapPin };

export function ReferenceList({ references }: { references: Reference[] }) {
  return (
    <div className="border-t border-border">
      {references.map((reference) => (
        <article key={reference.name} className="grid gap-8 border-b border-border py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
          <div className="flex items-start gap-4">
            <img src={reference.avatar} alt={reference.name} className="size-14 shrink-0 rounded-full" />
            <div>
              <a href={linkedinRecommendationsUrl} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-foreground hover:underline">
                {reference.name}
              </a>
              <p className="mt-1 text-sm leading-6 text-foreground">{reference.title}</p>
              <p className="mt-1 text-sm italic leading-6 text-muted-foreground">{reference.context}</p>
            </div>
          </div>
          <div className="space-y-4 text-base leading-7 text-muted-foreground">
            {reference.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ContactBand({ items }: { items: ContactItem[] }) {
  return (
    <div>
      <div className="bg-foreground text-background">
        <div className="mx-auto max-w-[1440px] px-5 py-12 text-center lg:px-10 lg:py-16">
          <h3 className="font-display text-4xl sm:text-6xl">Get in Touch</h3>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">
        <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = contactIcons[item.icon];
            return (
              <li key={item.label} className="flex flex-col items-center gap-6 text-center">
                <Icon aria-hidden="true" className="size-16 stroke-[1.3] text-foreground" />
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`text-lg font-semibold ${item.icon === "linkedin" ? "text-primary underline underline-offset-4" : "text-foreground hover:underline"}`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <p className="text-lg font-semibold text-foreground">{item.label}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
