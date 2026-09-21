import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:py-28 lg:px-10">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] text-foreground sm:text-7xl lg:text-8xl">{title}</h1>
        <div className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{children}</div>
      </div>
    </section>
  );
}
