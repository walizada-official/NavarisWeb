import { ArrowUpRight, Check } from "lucide-react";
import maintenance from "@/assets/service-maintenance.jpg";
import office from "@/assets/service-office.jpg";
import stairs from "@/assets/service-stairs.jpg";
import windowImg from "@/assets/service-window.jpg";
import deepImg from "@/assets/service-deep.jpg";
import garden from "@/assets/service-garden.jpg";

const services = [
  {
    img: maintenance,
    eyebrow: "01 — Unterhaltsreinigung",
    title: "Unterhaltsreinigung",
    desc: "Regelmäßige Reinigung Ihrer Räume nach individuellem Plan für dauerhaft gepflegte und repräsentative Objekte.",
    bullets: [
      "Für Gewerbe und Privat",
      "Individuelle Reinigungspläne",
      "Dauerhaft gepflegte Räume",
      "Professionelle Standards",
    ],
  },
  {
    img: office,
    eyebrow: "02 — Büroreinigung",
    title: "Büroreinigung",
    desc: "Saubere Arbeitsplätze und gepflegte Büroflächen für Produktivität, Hygiene und einen starken Eindruck.",
    bullets: [
      "Für Büro- und Verwaltungsflächen",
      "Arbeitsplätze und Böden",
      "Hygienische Sanitärbereiche",
      "Planbare Ausführung",
    ],
  },
  {
    img: stairs,
    eyebrow: "03 — Treppenhausreinigung",
    title: "Treppenhausreinigung",
    desc: "Saubere Eingangsbereiche und Gemeinschaftsflächen für Wohnhäuser, Mehrfamilienhäuser und Hausverwaltungen.",
    bullets: [
      "Eingangsbereiche und Flure",
      "Gemeinschaftsflächen",
      "Mehrfamilienhäuser",
      "Hausverwaltungen",
    ],
  },
  {
    img: windowImg,
    eyebrow: "04 — Fensterreinigung",
    title: "Fensterreinigung",
    desc: "Streifenfreie Fenster und Glasflächen für mehr Licht, klare Sicht und ein hochwertiges Gesamtbild.",
    bullets: [
      "Fenster innen und außen",
      "Glasflächen und Glastüren",
      "Klare Sicht",
      "Für Gewerbe und Privat",
    ],
  },
  {
    img: deepImg,
    eyebrow: "05 — Grundreinigung",
    title: "Grundreinigung",
    desc: "Tiefenreinigung für hartnäckige Verschmutzungen und stark beanspruchte Flächen - gründlich und effizient.",
    bullets: [
      "Hartnäckige Verschmutzungen",
      "Stark beanspruchte Flächen",
      "Gründliche Tiefenreinigung",
      "Effiziente Ausführung",
    ],
  },
  {
    img: garden,
    eyebrow: "06 — Bauendreinigung",
    title: "Bauendreinigung",
    desc: "Professionelle Endreinigung nach Bau- oder Renovierungsarbeiten - sauber, termingerecht und bezugsfertig.",
    bullets: [
      "Nach Neubau und Umbau",
      "Nach Renovierungsarbeiten",
      "Termingerechte Reinigung",
      "Bezugsfertige Übergabe",
    ],
  },
];

export function Services() {
  return (
    <section id="leistungen" className="relative bg-[var(--soft)] overflow-hidden">
      {/* Intro */}
      <div className="mx-auto max-w-7xl container-px pt-20 md:pt-28 pb-12 md:pb-16 text-center">
        <div data-reveal>
          <span className="inline-flex items-center rounded-full border border-border bg-background/80 px-4 py-1 text-xs font-semibold tracking-[0.2em] uppercase text-accent shadow-[var(--shadow-soft)]">
            Leistungen
          </span>
          <h2 className="mt-5 font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.02]">
            Unsere <span className="text-accent">Leistungen im Überblick</span>
          </h2>
          {/* <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
            Wir bieten maßgeschneiderte Lösungen für alle Bereiche des Facility Managements.
          </p>  */}
          <div className="mx-auto mt-8 h-[2px] w-20 bg-accent/80" />
        </div>
      </div>

      {/* Alternating split-layout blocks */}
      <div className="space-y-24 md:space-y-36 pb-28 md:pb-40">
        {services.map((s, i) => (
          <ServiceBlock key={s.title} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}

function ServiceBlock({
  img,
  eyebrow,
  title,
  desc,
  bullets,
  index,
}: {
  img: string;
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  index: number;
}) {
  const reverse = index % 2 === 1;
  return (
    <div className="mx-auto max-w-7xl container-px">
      <div
        className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <div data-reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            <img
              src={img}
              alt={title}
              loading={index === 0 ? "eager" : "lazy"}
              className="w-full h-[420px] md:h-[560px] lg:h-[640px] object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent pointer-events-none" />
          </div>
          {/* Floating numeral */}
          <div
            className={`hidden lg:block absolute font-display font-bold text-primary/10 leading-none select-none text-[12rem] xl:text-[15rem] -z-0 ${
              reverse ? "-right-6 -bottom-10" : "-left-6 -bottom-10"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Text */}
        <div data-reveal data-reveal-delay="120" className="relative">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            {eyebrow}
          </span>
          <h3 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
          <div className="mt-6 h-[2px] w-16 bg-accent" />
          <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">{desc}</p>
          <ul className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-foreground/90">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="w-3 h-3" />
                </span>
                <span className="text-sm md:text-base">{b}</span>
              </li>
            ))}
          </ul>
          <a
            href="#kontakt"
            className="group mt-12 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-7 py-3.5 hover:bg-accent transition-colors"
          >
            Angebot anfragen
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
