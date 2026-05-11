import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[var(--soft)] border-t border-border">
      <div className="mx-auto max-w-7xl container-px py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2.5">
            <img
              src={logoImg}
              alt="Novaris Logo"
              width={426}
              height={387}
              className="w-10 h-10 object-contain"
            />
            <span className="font-display font-bold text-lg text-foreground">
              Novaris Facility Management
            </span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Premium Gebäudereinigung für Unternehmen, Wohnhäuser und Privathaushalte im Raum
            Stuttgart und Umgebung.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#leistungen" className="hover:text-foreground">
                Leistungen
              </a>
            </li>
            <li>
              <a href="#warum-wir" className="hover:text-foreground">
                Warum wir
              </a>
            </li>
            <li>
              <a href="#ablauf" className="hover:text-foreground">
                Ablauf
              </a>
            </li>
            <li>
              <a href="#regionen" className="hover:text-foreground">
                Regionen
              </a>
            </li>
            <li>
              <a href="#kontakt" className="hover:text-foreground">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground">Kontakt</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>+49 176 30725490</li>
            <li>info@novaris-facility.de</li>
            <li>
              Stuttgart · Böblingen
              <br />
              Sindelfingen · Leonberg und Umgebung
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl container-px py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Novaris Facility Management. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground">
              Impressum
            </a>
            <a href="#" className="hover:text-foreground">
              Datenschutz
            </a>
            <a href="#" className="hover:text-foreground">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
