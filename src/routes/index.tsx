import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustIndicators } from "@/components/TrustIndicators";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Locations } from "@/components/Locations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novaris Glas & Gebäudereinigung - Premium Gebäudereinigung Stuttgart" },
      {
        name: "description",
        content:
          "Novaris Glas & Gebäudereinigung - Premium Gebäudereinigung für Gewerbe und Privat in Stuttgart, Böblingen, Sindelfingen, Leonberg und Umgebung.",
      },
      {
        property: "og:title",
        content: "Novaris Glas & Gebäudereinigung - Premium Gebäudereinigung",
      },
      {
        property: "og:description",
        content:
          "Hochwertige Reinigungslösungen für Unternehmen, Wohnanlagen und Privathaushalte im Raum Stuttgart.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <Services />
        <WhyUs />
        <Process />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
