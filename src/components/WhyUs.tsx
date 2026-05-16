import { ClipboardCheck, ShieldCheck, UserRoundCheck } from "lucide-react";
import whyImg from "@/assets/why-us3.png";

const reasons = [
  {
    icon: UserRoundCheck,
    title: "Persönlicher Ansprechpartner",
    desc: "Baset Behbudi ist Ihr direkter Ansprechpartner für Beratung und Angebot.",
  },
  {
    icon: ClipboardCheck,
    title: "Klare Abläufe",
    desc: "Professionelle Standards und nachvollziehbare Reinigungspläne.",
  },
  {
    icon: ShieldCheck,
    title: "Zuverlässige Ausführung",
    desc: "Pünktlich, sauber und professionell ausgeführt.",
  },
];

export function WhyUs() {
  return (
    <section id="warum-wir" className="bg-background py-20 md:py-32">
      <div className="mx-auto grid max-w-[92rem] gap-12 container-px lg:grid-cols-[1.28fr_0.82fr] lg:items-center xl:gap-18">
        <div data-reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)]">
            <img
              src={whyImg}
              alt="Professionelles Reinigungsteam von Novaris"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-[420px] w-full object-cover md:h-[600px] lg:h-[680px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(18,58,120,0.22)_100%)]" />
            <div className="absolute bottom-5 right-5 rounded-lg border border-border/80 bg-white/92 px-5 py-4 shadow-[0_18px_45px_-22px_rgba(18,58,120,0.45)] backdrop-blur-md md:bottom-7 md:right-7 md:px-6">
              <p className="font-display text-3xl font-bold leading-none text-foreground md:text-4xl">
                350+
              </p>
              <p className="mt-1 text-xs font-medium text-muted-foreground md:text-sm">
                Betreute Objekte
              </p>
            </div>
          </div>
        </div>

        <div data-reveal data-reveal-delay="1">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Warum Novaris
          </span>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Reinigung, die Qualität sichtbar macht.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Wir sorgen nicht nur für Sauberkeit, sondern für einen gepflegten, hochwertigen
            Eindruck. Genau das macht den Unterschied bei Kunden, Mitarbeitern, Bewohnern und
            Besuchern.
          </p>

          <div className="mt-10 space-y-5">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 border-t border-border pt-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                  <Icon className="h-5 w-5" strokeWidth={2.1} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
