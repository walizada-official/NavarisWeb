import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum - Novaris Glas & Gebäudereinigung" },
      {
        name: "description",
        content: "Impressum und Anbieterkennzeichnung von Novaris Glas & Gebäudereinigung.",
      },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title="Impressum"
      intro="Anbieterkennzeichnung für die Website von Novaris Glas & Gebäudereinigung."
      sections={[
        {
          title: "Angaben gemäß",
          body: [
            "Novaris Glas & Gebäudereinigung",
            "Baset Behbudi",
            "Grabenstraße 5, 71272 Renningen",
            "Gebäudereinigung, Unterhaltsreinigung, Büroreinigung, Treppenhausreinigung, Glasreinigung, Grundreinigung sowie Garten- und Pflegeleistungen im Raum Stuttgart, Böblingen, Sindelfingen und Leonberg.",
          ],
        },
        {
          title: "Kontakt",
          body: ["Telefon: +49 176 30725490", "E-Mail: info@novaris-facility.de"],
        },
        {
          title: "Verantwortlich für den Inhalt",
          body: ["Baset Behbudi", "Grabenstraße 5, 71272 Renningen"],
        },
        {
          title: "Inhalte dieser Website",
          body: [
            "Diese Website stellt die Leistungen und Kontaktmöglichkeiten von Novaris Glas & Gebäudereinigung dar.",
            "Externe Links führen zu E-Mail, Telefon, WhatsApp und eingebetteten Kartendiensten. Für Inhalte externer Dienste sind die jeweiligen Anbieter verantwortlich.",
          ],
        },
      ]}
    />
  );
}
