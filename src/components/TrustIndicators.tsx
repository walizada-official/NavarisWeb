import { ClipboardCheck, Home, ShieldCheck, User } from "lucide-react";

const items = [
  {
    icon: ClipboardCheck,
    title: "Individuelle Reinigungskonzepte",
    desc: "Wir erstellen einen Reinigungsplan, der exakt auf Ihre Anforderungen und Ihr Objekt abgestimmt ist.",
  },
  {
    icon: Home,
    title: "Hygienische & gepflegte Räume",
    desc: "Saubere Arbeits- und Wohnbereiche sorgen für Wohlbefinden, Sicherheit und einen professionellen Eindruck.",
  },
  {
    icon: User,
    title: "Persönlicher Ansprechpartner",
    desc: "Sie haben einen festen Kontakt für Absprachen, Änderungen und kurzfristige Anliegen.",
  },
  {
    icon: ShieldCheck,
    title: "Kontrollierte Qualität",
    desc: "Wir prüfen regelmäßig unsere Arbeit, damit Sauberkeit dauerhaft auf höchstem Niveau bleibt.",
  },
];

export function TrustIndicators() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl container-px">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div data-reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Gebäudereinigung
            </span>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
                Zuverlässige Reinigung mit festen Qualitätsstandards.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Wir reinigen Büros, Wohnanlagen, Treppenhäuser und Glasflächen zuverlässig, hygienisch und individuell abgestimmt auf Ihr Objekt.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                data-reveal
                data-reveal-delay={(i % 2) + 1}
                className="border-l-2 border-accent/35 bg-[var(--soft)] px-6 py-6"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-md bg-background text-primary">
                    <Icon className="h-5 w-5" strokeWidth={2.1} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
