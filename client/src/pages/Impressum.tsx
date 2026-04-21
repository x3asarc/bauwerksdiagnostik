import Layout from '@/components/Layout';

export default function Impressum() {
  return (
    <Layout>
      <section className="px-8 py-16 lg:py-24 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="section-label">LEGAL // IMPRESSUM</p>
            <h1 className="text-5xl lg:text-7xl font-serif font-normal leading-tight">
              Impressum
            </h1>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 lg:py-24 bg-background lg:ml-[280px]">
        <div className="max-w-4xl mx-auto space-y-8 text-sm font-serif italic">
          <div className="space-y-4">
            <h2 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground">
              Angaben gemäß § 5 TMG
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-primary mb-2">
                  Verantwortlich für den Inhalt
                </h3>
                <p>
                  Fachverband Bauwerksdiagnostik e.V.
                  <br />
                  Werdauer Straße 1-3
                  <br />
                  01069 Dresden
                  <br />
                  Deutschland
                </p>
              </div>

              <div>
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-primary mb-2">
                  Vorstand
                </h3>
                <p>
                  1. Vorsitzender: Thomas Pohlan
                  <br />
                  2. Vorsitzender: Sven Jähnig
                  <br />
                  Schatzmeister: Peter Zaspel
                  <br />
                  Schriftführer: Jens Barth
                </p>
              </div>

              <div>
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-primary mb-2">
                  Vereinsregistrierung
                </h3>
                <p>
                  Eingetragener Verein (e.V.)
                  <br />
                  Amtsgericht Dresden
                  <br />
                  Vereinsregister: VR 13937
                </p>
              </div>

              <div>
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-primary mb-2">
                  Kontakt
                </h3>
                <p>
                  Telefon: 0351 – 799926-60
                  <br />
                  Email: info@bauwerksdiagnostik.de
                </p>
              </div>

              <div className="border-t border-black pt-6">
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-primary mb-2">
                  Haftungsausschluss
                </h3>
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                  Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 des TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>
              </div>

              <div className="border-t border-black pt-6">
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-primary mb-2">
                  Haftung für Links
                </h3>
                <p>
                  Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                  Seiten verantwortlich.
                </p>
              </div>

              <div className="border-t border-black pt-6">
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-primary mb-2">
                  Urheberrecht
                </h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
                  des Autors oder Schöpfers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
