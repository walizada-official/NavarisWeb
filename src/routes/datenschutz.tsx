import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz - Novaris Facility Management" },
      {
        name: "description",
        content: "Datenschutzhinweise von Novaris Facility Management.",
      },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <LegalPage
      eyebrow="Datenschutz"
      title="Datenschutzerklärung"
      intro="Diese Hinweise beschreiben die Datenverarbeitung, die sich aus der aktuellen Website ergibt."
      sections={[
        {
          title: "Verantwortliche Stelle",
          body: [
            "Novaris Facility Management",
            "Baset Behbudi",
            "Grabenstraße 5 ",
            "71272 Renningen",
            "E-Mail: info@novaris-facility.de",
            "Telefon: +49 176 30725490",
          ],
        },
        {
          title: "Websitebesuch und Serverdaten",
          body: [
            "Beim Aufruf der Website können technisch notwendige Daten verarbeitet werden, zum Beispiel IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp, Betriebssystem und aufgerufene Seiten.",
            "Diese Daten sind erforderlich, um die Website auszuliefern, stabil zu betreiben und technische Fehler nachvollziehen zu können.",
          ],
        },
        {
          title: "Kontaktaufnahme",
          body: [
            "Die Website bietet Kontakt per Telefon, E-Mail und WhatsApp an. Wenn Sie diese Möglichkeiten nutzen, werden die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage verarbeitet.",
            "Die Website selbst enthält aktuell kein Kontaktformular und speichert darüber keine Formularangaben.",
          ],
        },
        {
          title: "Google Maps",
          body: [
            "Im Bereich Einsatzgebiete ist eine Google-Maps-Karte eingebettet. Beim Laden der Karte können Daten wie IP-Adresse, Browserinformationen und Nutzungsdaten an Google übertragen werden.",
            "Die Karte dient dazu, das Einsatzgebiet rund um Stuttgart, Böblingen, Sindelfingen und Leonberg sichtbar darzustellen.",
          ],
        },
        {
          title: "Google Fonts",
          body: [
            "Die Website lädt Schriftarten über Google Fonts. Dabei kann der Browser eine Verbindung zu Servern von Google herstellen.",
            "Die Schriftarten werden genutzt, damit die Website typografisch einheitlich und markengerecht dargestellt wird.",
          ],
        },
        {
          title: "WhatsApp",
          body: [
            "Die Website verlinkt auf WhatsApp. Wenn Sie den WhatsApp-Link öffnen, verlassen Sie diese Website und es gelten die Datenschutzbedingungen von WhatsApp beziehungsweise Meta.",
            "Über WhatsApp übermittelte Inhalte werden zur Bearbeitung Ihrer Anfrage genutzt.",
          ],
        },
        {
          title: "Cookies und Analyse",
          body: [
            "Im Projekt sind aktuell keine eigenen Analyse-Tools, Tracking-Pixel oder Newsletter-Anmeldungen erkennbar.",
            "Es ist außerdem kein Cookie-Banner und keine eigene Cookie-Verwaltung eingebaut. Externe Dienste können technisch notwendige Daten oder eigene Cookies verarbeiten, sobald sie geladen werden.",
          ],
        },
        {
          title: "Ihre Rechte",
          body: [
            "Sie haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.",
            "Zur Ausübung Ihrer Rechte können Sie uns über die oben genannten Kontaktdaten erreichen.",
          ],
        },
      ]}
    />
  );
}
