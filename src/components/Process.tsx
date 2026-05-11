import { MessageCircle, FileText, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    n: "01",
    title: "Kontakt",
    desc: "Sie erreichen uns telefonisch, per E-Mail oder über das Formular. Wir hören zu.",
  },
  {
    icon: FileText,
    n: "02",
    title: "Individuelles Angebot",
    desc: "Vor-Ort-Termin oder digitales Aufmaß – Sie erhalten ein transparentes Festpreisangebot.",
  },
  {
    icon: Sparkles,
    n: "03",
    title: "Professionelle Ausführung",
    desc: "Unser geschultes Team übernimmt – pünktlich, zuverlässig und in geprüfter Qualität.",
  },
];

export function Process() {
  return (
    <section id="ablauf" className="py-28 md:py-40 bg-[var(--soft)]">
      <div className="mx-auto max-w-7xl container-px">
        <div data-reveal className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            Ablauf
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            In drei Schritten zur Sauberkeit.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          {steps.map(({ icon: Icon, n, title, desc }, i) => (
            <div
              key={n}
              data-reveal
              data-reveal-delay={i + 1}
              className="relative rounded-2xl bg-card border border-border p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
                  <Icon className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <span className="font-display text-4xl font-bold text-border">{n}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
