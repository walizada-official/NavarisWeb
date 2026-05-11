import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden isolate bg-primary">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Novaris Reinigungsteam bei professioneller Gebäudereinigung"
          width={1536}
          height={1024}
          className="w-full h-full object-cover object-[58%_50%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,38,0.76)_0%,rgba(9,25,45,0.62)_42%,rgba(9,25,45,0.22)_72%,rgba(9,25,45,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,38,0.38)_0%,rgba(7,20,38,0.06)_44%,rgba(7,20,38,0.58)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl container-px pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-3xl">
          <h1
            data-reveal
            data-reveal-delay="1"
            className="is-visible font-display text-4xl md:text-6xl lg:text-6xl font-bold leading-[1.04] text-white max-w-4xl"
          >
            Saubere Räume. Starker Eindruck. Mehr Vertrauen.
          </h1>

          <p
            data-reveal
            data-reveal-delay="2"
            className="is-visible mt-9 max-w-xl text-lg md:text-xl leading-relaxed text-white/82"
          >
            Novaris Facility Management bietet hochwertige Reinigungslösungen für Unternehmen,
            Wohnanlagen und Privathaushalte in Stuttgart, Böblingen, Sindelfingen, Leonberg und
            Umgebung.
          </p>

          <div data-reveal data-reveal-delay="3" className="is-visible mt-12 flex flex-wrap gap-4">
            <a
              href="#leistungen"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-semibold text-primary shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)] transition-all hover:bg-white/92"
            >
              Leistungen ansehen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div
            data-reveal
            data-reveal-delay="4"
            className="is-visible mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/78"
          >
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              Pünktlich, sauber und professionell
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-white" />
              Für Gewerbe, Privat und Hausverwaltungen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
