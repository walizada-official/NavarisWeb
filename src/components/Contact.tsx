import { ArrowUpRight, Mail, Phone, UserRoundCheck } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" className="h-5 w-5">
      <path
        d="M20.5 11.9c0 4.7-3.9 8.5-8.6 8.5-1.4 0-2.8-.3-4-.9L3.5 21l1.6-4.2a8.6 8.6 0 1 1 15.4-4.9Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 8.7c.2-.4.4-.4.6-.4h.4c.1 0 .3 0 .5.4.2.4.7 1.6.7 1.7 0 .1 0 .3-.1.4l-.3.4-.3.3c-.1.1-.2.2-.1.4.1.2.5.8 1.1 1.3.7.6 1.3.8 1.5.9.2.1.4 0 .5-.1.1-.2.5-.8.7-1 .2-.2.4-.2.6-.1.2.1 1.4.7 1.6.8.2.1.4.2.4.3 0 .1 0 .6-.2 1.2-.2.6-1.2 1.1-1.6 1.2-.3.1-.8.2-1.3-.1-.3-.1-.7-.3-1.2-.5-2.3-1-3.9-3.5-4-3.6-.1-.1-1-1.3-1-2.5s.7-1.9.9-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

const contactMethods = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 176 30725490",
    href: "tel:+4917630725490",
    primary: true,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@novaris-ggr.de",
    href: "mailto:info@novaris-ggr.de",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Direkt schreiben",
    href: "https://wa.me/4917630725490",
  },
];

export function Contact() {
  return (
    <section id="kontakt" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl container-px">
        <div className="relative overflow-hidden rounded-lg bg-primary shadow-[var(--shadow-elegant)]">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(30,136,229,0.22))] lg:block" />
          <div className="relative grid gap-10 p-8 text-primary-foreground md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                Kontakt
              </span>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight md:text-5xl">
                Jetzt unverbindlich anfragen.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/78 md:text-lg">
                Rufen Sie an oder schreiben Sie uns. Wir beraten Sie persönlich und finden die
                passende Reinigungslösung.
              </p>
              <div className="mt-7 inline-flex items-center gap-3 rounded-md border border-white/18 bg-white/8 px-4 py-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white text-primary">
                  <UserRoundCheck className="h-5 w-5" strokeWidth={2.1} />
                </span>
                <span>
                  <span className="block text-xs text-primary-foreground/62">Ansprechpartner</span>
                  <span className="font-display text-lg font-semibold leading-tight">
                    Baset Behbudi
                  </span>
                </span>
              </div>
            </div>

            <div className="grid gap-3 self-center">
              {contactMethods.map(({ icon: Icon, label, value, href, primary }) => (
                <a
                  key={label}
                  href={href}
                  className={`group flex items-center justify-between rounded-md border p-4 transition-colors md:p-5 ${
                    primary
                      ? "border-white bg-white text-primary hover:bg-white/92"
                      : "border-white/18 bg-white/8 text-primary-foreground hover:bg-white/12"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-md ${
                        primary ? "bg-primary text-primary-foreground" : "bg-white text-primary"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span
                        className={`block text-xs ${primary ? "text-primary/65" : "text-white/62"}`}
                      >
                        {label}
                      </span>
                      <span className="font-semibold">{value}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
