import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

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

        <div className="flex items-center justify-end gap-3 self-center">
          <a
            href="tel:+4917630725490"
            className={`hidden items-center gap-2 rounded-full border px-4 py-2 transition-colors md:flex ${
              scrolled
                ? "border-border bg-background text-foreground hover:bg-secondary"
                : "border-white/20 bg-white/10 text-white hover:bg-white/15"
            }`}
          >
            <span
              className={`grid h-8 w-8 place-items-center rounded-full ${
                scrolled ? "bg-primary text-primary-foreground" : "bg-white text-primary"
              }`}
            >
              <Phone className="h-4 w-4" strokeWidth={2.2} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[0.7rem] font-medium opacity-75">Jetzt anrufen</span>
              <span className="text-sm font-semibold">+49 176 30725490</span>
            </span>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className={`grid h-10 w-10 place-items-center rounded-md border transition-colors lg:hidden ${
              scrolled
                ? "border-border bg-background text-foreground"
                : "border-white/35 bg-white/10 text-white"
            }`}
            aria-label="Menü"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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

      <a
        href="https://wa.me/4917630725490"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className={`group fixed bottom-4 right-4 z-50 flex items-center gap-0 overflow-hidden rounded-full shadow-[0_16px_40px_-18px_rgba(18,58,120,0.22)] transition-all duration-200 hover:-translate-y-0.5 md:bottom-6 md:right-6 ${
          scrolled
            ? "bg-[#123A78] text-white hover:bg-[#0f3163]"
            : "border border-[#123A78]/18 bg-white text-[#123A78] hover:bg-slate-50"
        }`}
      >
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full md:h-12 md:w-12 ${
            scrolled ? "bg-[#123A78]" : "bg-white"
          }`}
        >
          <span
            className={`grid h-9 w-9 place-items-center rounded-full md:h-10 md:w-10 ${
              scrolled ? "bg-[#123A78] text-white" : "bg-white text-[#123A78]"
            }`}
          >
            <WhatsAppIcon />
          </span>
        </span>
        <span className="max-w-0 whitespace-nowrap pr-0 text-sm font-semibold transition-all duration-200 group-hover:max-w-40 group-hover:pr-5">
          WhatsApp
        </span>
      </a>
    </header>
  );
}
