import { ClipboardCheck, ShieldCheck, UserRoundCheck } from "lucide-react";
import whyImg from "@/assets/why-us3.png";

const reasons = [
  {
    icon: UserRoundCheck,
    title: "Persönlicher Ansprechpartner",
    desc: "Direkte Kommunikation ohne Umwege.",
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
    <section id="warum-wir" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 container-px lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div data-reveal>
          <div className="overflow-hidden rounded-lg">
            <img
              src={whyImg}
              alt="Professionelles Reinigungsteam von Novaris"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-[360px] w-full object-cover md:h-[520px]"
            />
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
