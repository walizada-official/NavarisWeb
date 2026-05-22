import type { SVGProps } from "react";

import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import logoImg from "@/assets/logo.png";

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 2c.4 2.3 1.7 3.7 4 3.9v2.5c-1.5.1-2.9-.4-4-1.2v6.4c0 3.1-2.5 5.6-5.6 5.6S5.4 16.7 5.4 13.6C5.4 10.5 7.9 8 11 8c.3 0 .7 0 1 .1v2.7c-.3-.1-.6-.2-1-.2-1.6 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3V2h2.6Z" />
    </svg>
  );
}

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 176 30725490",
    href: "tel:+4917630725490",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@novaris-facility.de",
    href: "mailto:info@novaris-facility.de",
  },
  {
    icon: MapPin,
    label: "Region",
    value: "Stuttgart - Böblingen - Sindelfingen - Leonberg",
    href: "/#regionen",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/novaris.reinigung/",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--soft)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <a href="/" className="flex items-center gap-2.5">
            <img
              src={logoImg}
              alt="Novaris Logo"
              width={426}
              height={387}
              className="h-24 w-78 object-contain"
            />
            {/* <span className="font-display text-lg font-bold leading-tight text-foreground">
              Novaris Glas & Gebäudereinigung
            </span> */}
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Premium Gebäudereinigung für Unternehmen, Wohnanlagen und Privathaushalte in Stuttgart,
            Böblingen, Sindelfingen, Leonberg und Umgebung.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="/#leistungen" className="hover:text-foreground">
                Leistungen
              </a>
            </li>
            <li>
              <a href="/#warum-wir" className="hover:text-foreground">
                Warum wir
              </a>
            </li>
            <li>
              <a href="/#ablauf" className="hover:text-foreground">
                Ablauf
              </a>
            </li>
            <li>
              <a href="/#regionen" className="hover:text-foreground">
                Regionen
              </a>
            </li>
            <li>
              <a href="/#kontakt" className="hover:text-foreground">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground">Kontakt</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-start gap-3.5 transition-colors hover:text-foreground"
                >
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border/70 bg-white text-primary shadow-[0_6px_16px_-8px_rgba(18,58,120,0.28)]">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  <span className="leading-relaxed text-[0.97rem]">{value}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground leading-none">
              Folge uns
            </p>
            <div className="mt-2.5 flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-8 w-8 place-items-center rounded-full border border-border/70 bg-white text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} Novaris Glas & Gebäudereinigung. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <a href="/impressum" className="hover:text-foreground">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-foreground">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
