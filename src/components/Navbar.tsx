import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#warum-wir", label: "Warum wir" },
  { href: "#regionen", label: "Regionen" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background border-b border-border/70 shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl container-px flex h-18 md:h-20 items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src={logoImg}
            alt="Novaris Logo"
            width={426}
            height={387}
            className="w-10 h-10 md:w-11 md:h-11 object-contain drop-shadow-[0_4px_14px_rgba(18,58,120,0.18)]"
          />
          <span
            className={`font-display font-bold text-lg tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            Novaris Facility Management
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/78 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className={`hidden md:inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            Angebot anfordern
          </a>
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden grid place-items-center w-10 h-10 rounded-md border transition-colors ${
              scrolled
                ? "border-border bg-background text-foreground"
                : "border-white/35 bg-white/10 text-white"
            }`}
            aria-label="Menü"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-px py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
