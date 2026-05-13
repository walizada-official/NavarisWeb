import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { X, Menu, ArrowRight, CheckCircle2, ShieldCheck, ClipboardCheck, KeyRound, UserRoundCheck, Check, ArrowUpRight, MessageCircle, FileText, Sparkles, Building2, MapPin, Phone, Mail } from "lucide-react";
const logoImg = "/assets/logo-BV3sXLL4.png";
const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#warum-wir", label: "Warum wir" },
  { href: "#regionen", label: "Regionen" },
  { href: "#kontakt", label: "Kontakt" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background border-b border-border/70 shadow-[var(--shadow-soft)]" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl container-px flex h-18 md:h-20 items-center justify-between py-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-2.5 group", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: logoImg,
                alt: "Novaris Logo",
                width: 426,
                height: 387,
                className: "w-10 h-10 md:w-11 md:h-11 object-contain drop-shadow-[0_4px_14px_rgba(18,58,120,0.18)]"
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `font-display font-bold text-lg tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-white"}`,
                children: "Novaris Facility Management"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-9", children: links.map((l) => /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: `text-sm font-medium transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/78 hover:text-white"}`,
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#kontakt",
                className: `hidden md:inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${scrolled ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"}`,
                children: "Angebot anfordern"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setOpen(!open),
                className: `lg:hidden grid place-items-center w-10 h-10 rounded-md border transition-colors ${scrolled ? "border-border bg-background text-foreground" : "border-white/35 bg-white/10 text-white"}`,
                "aria-label": "Menü",
                children: open ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "lg:hidden border-t border-border bg-background/95 backdrop-blur-xl", children: /* @__PURE__ */ jsx("div", { className: "container-px py-4 flex flex-col gap-1", children: links.map((l) => /* @__PURE__ */ jsx(
          "a",
          {
            href: l.href,
            onClick: () => setOpen(false),
            className: "px-3 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-secondary",
            children: l.label
          },
          l.href
        )) }) })
      ]
    }
  );
}
const heroImg = "/assets/hero-BB2Iw4gO.png";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center overflow-hidden isolate bg-primary", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: heroImg,
          alt: "Novaris Reinigungsteam bei professioneller Gebäudereinigung",
          width: 1536,
          height: 1024,
          className: "w-full h-full object-cover object-[58%_50%]"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,38,0.76)_0%,rgba(9,25,45,0.62)_42%,rgba(9,25,45,0.22)_72%,rgba(9,25,45,0.42)_100%)]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.38)_0%,rgba(7,20,38,0.06)_44%,rgba(7,20,38,0.58)_100%)]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto w-full max-w-7xl container-px pt-32 pb-20 md:pt-44 md:pb-28", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx(
        "h1",
        {
          "data-reveal": true,
          "data-reveal-delay": "1",
          className: "is-visible font-display text-4xl md:text-6xl lg:text-6xl font-bold leading-[1.04] text-white max-w-4xl",
          children: "Saubere Räume. Starker Eindruck. Mehr Vertrauen."
        }
      ),
      /* @__PURE__ */ jsx(
        "p",
        {
          "data-reveal": true,
          "data-reveal-delay": "2",
          className: "is-visible mt-9 max-w-xl text-lg md:text-xl leading-relaxed text-white/82",
          children: "Novaris Facility Management bietet hochwertige Reinigungslösungen für Unternehmen, Wohnanlagen und Privathaushalte in Stuttgart, Böblingen, Sindelfingen, Leonberg und Umgebung."
        }
      ),
      /* @__PURE__ */ jsx("div", { "data-reveal": true, "data-reveal-delay": "3", className: "is-visible mt-12 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#leistungen",
          className: "group inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-semibold text-primary shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)] transition-all hover:bg-white/92",
          children: [
            "Leistungen ansehen",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          "data-reveal": true,
          "data-reveal-delay": "4",
          className: "is-visible mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/78",
          children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-white" }),
              "Pünktlich, sauber und professionell"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-white" }),
              "Für Gewerbe, Privat und Hausverwaltungen"
            ] })
          ]
        }
      )
    ] }) })
  ] });
}
const items = [
  {
    icon: ClipboardCheck,
    title: "Objektbezogener Reinigungsplan",
    desc: "Wir stimmen Reinigungsrhythmus, Zeiten und Leistungen exakt auf Ihr Objekt ab."
  },
  {
    icon: KeyRound,
    title: "Saubere Arbeits- und Wohnbereiche",
    desc: "Böden, Oberflächen, Sanitärbereiche und Gemeinschaftsflächen bleiben gepflegt und hygienisch."
  },
  {
    icon: UserRoundCheck,
    title: "Direkter Ansprechpartner",
    desc: "Sie haben einen festen Kontakt für Absprachen, Änderungen und kurzfristige Reinigungsanfragen."
  },
  {
    icon: ShieldCheck,
    title: "Zuverlässige Qualitätskontrolle",
    desc: "Wir prüfen die Ausführung regelmäßig, damit Sauberkeit dauerhaft sichtbar bleibt."
  }
];
function TrustIndicators() {
  return /* @__PURE__ */ jsx("section", { className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl container-px", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start", children: [
    /* @__PURE__ */ jsxs("div", { "data-reveal": true, children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-accent", children: "Gebäudereinigung" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-5 max-w-xl font-display text-3xl font-bold leading-tight text-foreground md:text-5xl", children: "Sauberkeit, auf die sich Ihr Objekt verlassen kann." }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg", children: "Novaris reinigt Büros, Wohnanlagen, Treppenhäuser, Glasflächen und private Räume nach klaren Standards. Das Ergebnis sind gepflegte Flächen, hygienische Bereiche und ein professioneller erster Eindruck." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: items.map(({ icon: Icon, title, desc }, i) => /* @__PURE__ */ jsx(
      "div",
      {
        "data-reveal": true,
        "data-reveal-delay": i % 2 + 1,
        className: "border-l-2 border-accent/35 bg-[var(--soft)] px-6 py-6",
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-md bg-background text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5", strokeWidth: 2.1 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-base font-semibold text-foreground", children: title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: desc })
          ] })
        ] })
      },
      title
    )) })
  ] }) }) });
}
const maintenance = "/assets/service-maintenance-bUJWjwXN.jpg";
const office = "/assets/service-office-Bk7rxVOS.jpg";
const stairs = "/assets/service-stairs-CfJK_nSl.jpg";
const windowImg = "/assets/service-window-G4XukTGh.jpg";
const deepImg = "/assets/service-deep-jEEeq-tz.jpg";
const garden = "/assets/service-garden-CnHozDKD.jpg";
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
      "Professionelle Standards"
    ]
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
      "Planbare Ausführung"
    ]
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
      "Hausverwaltungen"
    ]
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
      "Für Gewerbe und Privat"
    ]
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
      "Effiziente Ausführung"
    ]
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
      "Bezugsfertige Übergabe"
    ]
  }
];
function Services() {
  return /* @__PURE__ */ jsxs("section", { id: "leistungen", className: "relative bg-[var(--soft)] overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl container-px pt-20 md:pt-28 pb-12 md:pb-16 text-center", children: /* @__PURE__ */ jsxs("div", { "data-reveal": true, children: [
      /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full border border-border bg-background/80 px-4 py-1 text-xs font-semibold tracking-[0.2em] uppercase text-accent shadow-[var(--shadow-soft)]", children: "Leistungen" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-5 font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.02]", children: [
        "Unsere ",
        /* @__PURE__ */ jsx("span", { className: "text-accent", children: "Leistungen im Überblick" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto mt-8 h-[2px] w-20 bg-accent/80" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "space-y-24 md:space-y-36 pb-28 md:pb-40", children: services.map((s, i) => /* @__PURE__ */ jsx(ServiceBlock, { ...s, index: i }, s.title)) })
  ] });
}
function ServiceBlock({
  img,
  eyebrow,
  title,
  desc,
  bullets,
  index
}) {
  const reverse = index % 2 === 1;
  return /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl container-px", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: `grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`,
      children: [
        /* @__PURE__ */ jsxs("div", { "data-reveal": true, className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl shadow-2xl group", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: img,
                alt: title,
                loading: index === 0 ? "eager" : "lazy",
                className: "w-full h-[420px] md:h-[560px] lg:h-[640px] object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent pointer-events-none" })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `hidden lg:block absolute font-display font-bold text-primary/10 leading-none select-none text-[12rem] xl:text-[15rem] -z-0 ${reverse ? "-right-6 -bottom-10" : "-left-6 -bottom-10"}`,
              children: String(index + 1).padStart(2, "0")
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { "data-reveal": true, "data-reveal-delay": "120", className: "relative", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold tracking-[0.2em] uppercase text-accent", children: eyebrow }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground", children: title }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 h-[2px] w-16 bg-accent" }),
          /* @__PURE__ */ jsx("p", { className: "mt-8 text-base md:text-lg text-muted-foreground leading-relaxed", children: desc }),
          /* @__PURE__ */ jsx("ul", { className: "mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-4", children: bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-foreground/90", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent", children: /* @__PURE__ */ jsx(Check, { className: "w-3 h-3" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-sm md:text-base", children: b })
          ] }, b)) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#kontakt",
              className: "group mt-12 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-7 py-3.5 hover:bg-accent transition-colors",
              children: [
                "Angebot anfragen",
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
              ]
            }
          )
        ] })
      ]
    }
  ) });
}
const whyImg = "/assets/why-us3-BJE8lCuX.png";
const reasons = [
  {
    icon: UserRoundCheck,
    title: "Persönlicher Ansprechpartner",
    desc: "Direkte Kommunikation ohne Umwege."
  },
  {
    icon: ClipboardCheck,
    title: "Klare Abläufe",
    desc: "Professionelle Standards und nachvollziehbare Reinigungspläne."
  },
  {
    icon: ShieldCheck,
    title: "Zuverlässige Ausführung",
    desc: "Pünktlich, sauber und professionell ausgeführt."
  }
];
function WhyUs() {
  return /* @__PURE__ */ jsx("section", { id: "warum-wir", className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 container-px lg:grid-cols-[0.95fr_1.05fr] lg:items-center", children: [
    /* @__PURE__ */ jsx("div", { "data-reveal": true, children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: whyImg,
        alt: "Professionelles Reinigungsteam von Novaris",
        loading: "lazy",
        width: 1280,
        height: 1280,
        className: "h-[360px] w-full object-cover md:h-[520px]"
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { "data-reveal": true, "data-reveal-delay": "1", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-accent", children: "Warum Novaris" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-foreground md:text-5xl", children: "Reinigung, die Qualität sichtbar macht." }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg", children: "Wir sorgen nicht nur für Sauberkeit, sondern für einen gepflegten, hochwertigen Eindruck. Genau das macht den Unterschied bei Kunden, Mitarbeitern, Bewohnern und Besuchern." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-5", children: reasons.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 border-t border-border pt-5", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-md bg-secondary text-primary", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5", strokeWidth: 2.1 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold text-foreground", children: title }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground md:text-base", children: desc })
        ] })
      ] }, title)) })
    ] })
  ] }) });
}
const steps = [
  {
    icon: MessageCircle,
    n: "01",
    title: "Kontakt",
    desc: "Sie erreichen uns telefonisch, per E-Mail oder über das Formular. Wir hören zu."
  },
  {
    icon: FileText,
    n: "02",
    title: "Individuelles Angebot",
    desc: "Vor-Ort-Termin oder digitales Aufmaß – Sie erhalten ein transparentes Festpreisangebot."
  },
  {
    icon: Sparkles,
    n: "03",
    title: "Professionelle Ausführung",
    desc: "Unser geschultes Team übernimmt – pünktlich, zuverlässig und in geprüfter Qualität."
  }
];
function Process() {
  return /* @__PURE__ */ jsx("section", { id: "ablauf", className: "py-28 md:py-40 bg-[var(--soft)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl container-px", children: [
    /* @__PURE__ */ jsxs("div", { "data-reveal": true, className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold tracking-[0.2em] uppercase text-accent", children: "Ablauf" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground", children: "In drei Schritten zur Sauberkeit." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 grid md:grid-cols-3 gap-6 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border to-transparent" }),
      steps.map(({ icon: Icon, n, title, desc }, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          "data-reveal": true,
          "data-reveal-delay": i + 1,
          className: "relative rounded-2xl bg-card border border-border p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("div", { className: "grid place-items-center w-14 h-14 rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6", strokeWidth: 2.2 }) }),
              /* @__PURE__ */ jsx("span", { className: "font-display text-4xl font-bold text-border", children: n })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-xl font-semibold text-foreground", children: title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground leading-relaxed", children: desc })
          ]
        },
        n
      ))
    ] })
  ] }) });
}
const cities = ["Stuttgart", "Böblingen", "Sindelfingen", "Leonberg", "Umgebung"];
function Locations() {
  return /* @__PURE__ */ jsx("section", { id: "regionen", className: "bg-background py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl container-px", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { "data-reveal": true, children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-accent", children: "Einsatzgebiete" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-lg font-display text-3xl font-bold leading-tight text-foreground md:text-5xl", children: "Regional für Stuttgart und Umgebung." }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-md text-base leading-relaxed text-muted-foreground", children: "Novaris Facility Management ist für Unternehmen, Wohnanlagen und Privathaushalte in Stuttgart, Böblingen, Sindelfingen, Leonberg und Umgebung im Einsatz." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-7 flex items-start gap-4 rounded-lg border border-border bg-[var(--soft)] p-5", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-3xl font-bold text-foreground", children: "Regional" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Stuttgart, Böblingen, Sindelfingen, Leonberg und Umgebung" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: cities.map((city) => /* @__PURE__ */ jsxs(
        "span",
        {
          className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground",
          children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-accent" }),
            city
          ]
        },
        city
      )) })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        "data-reveal": true,
        "data-reveal-delay": "1",
        className: "overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-elegant)]",
        children: /* @__PURE__ */ jsx(
          "iframe",
          {
            title: "Karte der Einsatzgebiete rund um Stuttgart",
            src: "https://www.openstreetmap.org/export/embed.html?bbox=8.78%2C48.60%2C9.36%2C48.92&layer=mapnik&marker=48.7758%2C9.1829",
            className: "h-[360px] w-full border-0 md:h-[430px]",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
          }
        )
      }
    )
  ] }) }) });
}
const contactMethods = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 176 30725490",
    href: "tel:+4917630725490",
    primary: true
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@novaris-facility.de",
    href: "mailto:info@novaris-facility.de"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Direkt schreiben",
    href: "https://wa.me/4917630725490"
  }
];
function Contact() {
  return /* @__PURE__ */ jsx("section", { id: "kontakt", className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl container-px", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-lg bg-primary shadow-[var(--shadow-elegant)]", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(30,136,229,0.22))] lg:block" }),
    /* @__PURE__ */ jsxs("div", { className: "relative grid gap-10 p-8 text-primary-foreground md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-14", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70", children: "Kontakt" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 max-w-xl font-display text-3xl font-bold leading-tight md:text-5xl", children: "Jetzt unverbindlich anfragen." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/78 md:text-lg", children: "Rufen Sie an oder schreiben Sie uns. Wir beraten Sie persönlich und finden die passende Reinigungslösung." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-3 self-center", children: contactMethods.map(({ icon: Icon, label, value, href, primary }) => /* @__PURE__ */ jsxs(
        "a",
        {
          href,
          className: `group flex items-center justify-between rounded-md border p-4 transition-colors md:p-5 ${primary ? "border-white bg-white text-primary hover:bg-white/92" : "border-white/18 bg-white/8 text-primary-foreground hover:bg-white/12"}`,
          children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `grid h-11 w-11 place-items-center rounded-md ${primary ? "bg-primary text-primary-foreground" : "bg-white text-primary"}`,
                  children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
                }
              ),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `block text-xs ${primary ? "text-primary/65" : "text-white/62"}`,
                    children: label
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: value })
              ] })
            ] }),
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
          ]
        },
        label
      )) })
    ] })
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-[var(--soft)] border-t border-border", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl container-px py-16 grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: logoImg,
              alt: "Novaris Logo",
              width: 426,
              height: 387,
              className: "w-10 h-10 object-contain"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "font-display font-bold text-lg text-foreground", children: "Novaris Facility Management" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed", children: "Premium Gebäudereinigung für Unternehmen, Wohnhäuser und Privathaushalte im Raum Stuttgart und Umgebung." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-foreground", children: "Navigation" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#leistungen", className: "hover:text-foreground", children: "Leistungen" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#warum-wir", className: "hover:text-foreground", children: "Warum wir" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#ablauf", className: "hover:text-foreground", children: "Ablauf" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#regionen", className: "hover:text-foreground", children: "Regionen" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#kontakt", className: "hover:text-foreground", children: "Kontakt" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-foreground", children: "Kontakt" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: "+49 176 30725490" }),
          /* @__PURE__ */ jsx("li", { children: "info@novaris-facility.de" }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Stuttgart · Böblingen",
            /* @__PURE__ */ jsx("br", {}),
            "Sindelfingen · Leonberg und Umgebung"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl container-px py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Novaris Facility Management. Alle Rechte vorbehalten."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Impressum" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "Datenschutz" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground", children: "AGB" })
      ] })
    ] }) })
  ] });
}
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function Index() {
  useReveal();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(TrustIndicators, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(WhyUs, {}),
      /* @__PURE__ */ jsx(Process, {}),
      /* @__PURE__ */ jsx(Locations, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
