import Layout from '@/components/Layout';

export default function Datenschutzerklaerung() {
  return (
    <Layout>
      <section className="px-8 py-16 lg:py-24 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="section-label">LEGAL // DATENSCHUTZ</p>
            <h1 className="text-5xl lg:text-7xl font-serif font-normal leading-tight">
              Datenschutzerklärung
            </h1>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 lg:py-24 bg-background lg:ml-[280px]">
        <div className="max-w-4xl mx-auto space-y-8 text-sm font-serif italic">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
                sowie dieser Datenschutzerklärung.
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <h2 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground mb-4">
                2. Allgemeine Hinweise
              </h2>
              <p>
                Die nachfolgende Datenschutzerklärung gilt für die Website des Fachverband Bauwerksdiagnostik e.V.
                Sie informiert Sie über die Art, den Umfang und den Zweck der Erhebung, Verarbeitung und Nutzung
                personenbezogener Daten durch den Websitebetreiber.
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <h2 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground mb-4">
                3. Verantwortliche Stelle
              </h2>
              <p className="mb-3">
                Verantwortliche Stelle für die Datenverarbeitung ist:
              </p>
              <p>
                Fachverband Bauwerksdiagnostik e.V.
                <br />
                Werdauer Straße 1-3
                <br />
                01069 Dresden
                <br />
                Deutschland
                <br />
                <br />
                Telefon: 0351 – 799926-60
                <br />
                Email: info@bauwerksdiagnostik.de
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <h2 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground mb-4">
                4. Erhebung und Verarbeitung personenbezogener Daten
              </h2>
              <p className="mb-3">
                Personenbezogene Daten werden von uns nur dann erhoben und verarbeitet, wenn Sie diese uns
                mitteilen, z.B. durch das Ausfüllen eines Kontaktformulars oder bei der Anmeldung zu einem
                Newsletter.
              </p>
              <p>
                Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder
                zur Erfüllung eines Vertrages (Art. 6 Abs. 1 lit. b DSGVO).
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <h2 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground mb-4">
                5. Kontaktformular
              </h2>
              <p className="mb-3">
                Wenn Sie uns über das Kontaktformular eine Nachricht zukommen lassen, werden Ihre Angaben
                aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p>
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <h2 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground mb-4">
                6. Ihre Rechte
              </h2>
              <p className="mb-3">
                Sie haben das Recht:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>• Berichtigung unrichtiger Daten zu verlangen</li>
                <li>• Löschung Ihrer Daten zu verlangen</li>
                <li>• Einschränkung der Verarbeitung zu verlangen</li>
                <li>• Der Verarbeitung zu widersprechen</li>
                <li>• Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten</li>
              </ul>
            </div>

            <div className="border-t border-black pt-6">
              <h2 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground mb-4">
                7. Datensicherheit
              </h2>
              <p>
                Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre personenbezogenen
                Daten vor unbefugtem Zugriff, Verlust, Zerstörung oder Veränderung zu schützen. Diese Website
                nutzt SSL- oder TLS-Verschlüsselung.
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <h2 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground mb-4">
                8. Speicherdauer
              </h2>
              <p>
                Ihre Daten werden so lange gespeichert, wie dies für die Erfüllung der Verarbeitungszwecke
                erforderlich ist. Darüber hinaus werden Ihre Daten gelöscht, sofern keine gesetzlichen
                Aufbewahrungspflichten bestehen.
              </p>
            </div>

            <div className="border-t border-black pt-6">
              <h2 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground mb-4">
                9. Kontakt zum Datenschutzbeauftragten
              </h2>
              <p>
                Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter info@bauwerksdiagnostik.de
              </p>
            </div>

            <div className="border-t border-black pt-6 text-xs">
              <p>
                Stand: April 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
