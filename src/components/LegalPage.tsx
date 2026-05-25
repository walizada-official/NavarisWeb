import { ArrowLeft, Mail, Phone } from "lucide-react";

import { Footer } from "@/components/Footer";
import logoImg from "@/assets/logo.png";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between container-px">
          <a href="/" className="flex items-center gap-2.5">
            <img src={logoImg} alt="Novaris Logo" width={426} height={387} className="h-10 w-10" />
            <span className="font-display text-lg font-bold leading-tight text-foreground">
              Novaris Glas & Gebäudereinigung
            </span>
          </a>
          <a
            href="/"
            className="hidden items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:inline-flex"
          >
            <ArrowLeft className="h-4 w-4" />
            Zur Startseite
          </a>
        </div>
      </header>

      <main>
        <section className="bg-[var(--soft)] py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 container-px lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
                {title}
              </h1>
            </div>
            <div className="max-w-2xl">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 container-px lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <h2 className="font-display text-xl font-bold text-foreground">Kontakt</h2>
                <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <a
                    href="mailto:info@novaris-ggr.de"
                    className="flex items-center gap-3 transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                      info@novaris-ggr.de
                  </a>
                  <a
                    href="tel:+4917630725490"
                    className="flex items-center gap-3 transition-colors hover:text-foreground"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    +49 176 30725490
                  </a>
                </div>
              </div>
            </aside>

            <div className="space-y-5">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-lg border border-border bg-card p-6 md:p-8"
                >
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
