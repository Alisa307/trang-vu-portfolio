const links = [
  { href: "#about", label: "About" },
  { href: "#work-projects", label: "Work Projects" },
  { href: "#education-research", label: "Education & Research" },
  { href: "#personal-projects", label: "Personal Projects" },
  { href: "#self-study", label: "Self-Study" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 py-5 lg:px-10">
        <a href="#about" className="min-w-0 font-display text-2xl text-foreground" aria-label="Trang Vu home">
          Trang Vu<span className="text-primary">.</span>
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none border-b border-foreground pb-1 text-xs font-semibold uppercase tracking-[0.15em]">Menu</summary>
          <nav className="absolute right-0 top-8 flex w-64 flex-col border border-border bg-background p-5 shadow-xl" aria-label="Mobile navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="border-b border-border py-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-10">
        <div>
          <p className="font-display text-3xl">Trang Vu.</p>
          <p className="mt-2 text-sm text-muted-foreground">Data · AI · Product · Growth</p>
        </div>
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Portfolio preview · 2026</p>
      </div>
    </footer>
  );
}
