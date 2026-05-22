import { Building2, MapPin } from "lucide-react";

const cities = ["Stuttgart", "Böblingen", "Sindelfingen", "Leonberg", "Umgebung"];

export function Locations() {
  return (
    <section id="regionen" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl container-px">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div data-reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Einsatzgebiete
            </span>
            <h2 className="mt-4 max-w-lg font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Regional für Stuttgart und Umgebung.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Novaris Glas & Gebäudereinigung ist für Unternehmen, Wohnanlagen und Privathaushalte
              in Stuttgart, Böblingen, Sindelfingen, Leonberg und Umgebung im Einsatz.
            </p>

            <div className="mt-7 flex items-start gap-4 rounded-lg border border-border bg-[var(--soft)] p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                <Building2 className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">Regional</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Stuttgart, Böblingen, Sindelfingen, Leonberg und Umgebung
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground"
                >
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  {city}
                </span>
              ))}
            </div>
          </div>

          <div
            data-reveal
            data-reveal-delay="1"
            className="overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-elegant)]"
          >
            <iframe
              title="Karte der Einsatzgebiete rund um Stuttgart"
              src="https://maps.google.com/maps?ll=48.745%2C9.075&z=10&t=m&output=embed"
              className="h-[360px] w-full border-0 md:h-[430px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
