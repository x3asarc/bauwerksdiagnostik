import { Link } from 'wouter';
import Layout from '@/components/Layout';

export default function Vorstandswahl2023() {
  return (
    <Layout>
      <section className="px-8 py-16 lg:py-24 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="section-label">DOC: BWD_ARTICLE_2023_01</p>
            <h1 className="text-5xl lg:text-7xl font-serif font-normal leading-tight">
              Vorstandswahl 2023 – Mitgliederversammlung Oktober
            </h1>
          </div>

          <div className="flex items-center gap-4 text-sm font-mono text-slate-600">
            <span>15. Oktober 2023</span>
            <span>•</span>
            <span>Fachverband Bauwerksdiagnostik e.V.</span>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 lg:py-24 bg-background lg:ml-[280px]">
        <div className="max-w-4xl mx-auto space-y-8 text-base font-serif italic leading-relaxed">
          <p>
            Am 15. Oktober 2023 fand die Mitgliederversammlung des Fachverband Bauwerksdiagnostik e.V. in Dresden statt.
            Mehr als 60 Mitglieder waren anwesend und nahmen an der Wahl des neuen Vorstands teil.
          </p>

          <div className="border-l-4 border-primary pl-6 py-4 bg-slate-50">
            <p className="text-lg font-sans font-bold uppercase tracking-wider text-primary mb-2">
              Neuer Vorstand gewählt
            </p>
            <p>
              Mit großer Mehrheit wurden folgende Personen in den Vorstand gewählt:
            </p>
          </div>

          <div className="space-y-4">
            <div className="border-2 border-black p-8 bg-white space-y-2">
              <p className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">
                Thomas Pohlan
              </p>
              <p className="text-sm font-sans font-semibold uppercase tracking-wider text-primary">
                1. Vorsitzender
              </p>
              <p className="text-sm font-serif italic text-slate-700">
                Dr. Thomas Pohlan ist Sachverständiger für Bauphysik und Energieberatung mit über 20 Jahren Erfahrung.
              </p>
            </div>

            <div className="border-2 border-black p-8 bg-white space-y-2">
              <p className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">
                Sven Jähnig
              </p>
              <p className="text-sm font-sans font-semibold uppercase tracking-wider text-primary">
                2. Vorsitzender
              </p>
              <p className="text-sm font-serif italic text-slate-700">
                Sven Jähnig spezialisiert sich auf Feuchtebelastung und Schimmeldiagnostik. Er ist Gründungsmitglied des Verbandes.
              </p>
            </div>

            <div className="border-2 border-black p-8 bg-white space-y-2">
              <p className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">
                Peter Zaspel
              </p>
              <p className="text-sm font-sans font-semibold uppercase tracking-wider text-primary">
                Schatzmeister
              </p>
              <p className="text-sm font-serif italic text-slate-700">
                Peter Zaspel ist Experte für Strukturanalyse und zerstörungsfreie Prüfung.
              </p>
            </div>

            <div className="border-2 border-black p-8 bg-white space-y-2">
              <p className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">
                Jens Barth
              </p>
              <p className="text-sm font-sans font-semibold uppercase tracking-wider text-primary">
                Schriftführer
              </p>
              <p className="text-sm font-serif italic text-slate-700">
                Jens Barth ist Energieberater und Sachverständiger für Wärmeschutz.
              </p>
            </div>
          </div>

          <p>
            Der neue Vorstand wird sich in den kommenden zwei Jahren auf die Stärkung der Mitgliederbasis,
            die Entwicklung neuer Zertifizierungsprogramme und die internationale Zusammenarbeit konzentrieren.
          </p>

          <p>
            "Wir freuen uns auf die Zusammenarbeit mit unserem engagierten Mitgliedernetzwerk. Der Fachverband
            Bauwerksdiagnostik wird weiterhin die höchsten Standards in der Branche setzen," sagte Thomas Pohlan
            nach seiner Wahl.
          </p>

          <div className="border-t-2 border-black pt-8 space-y-4">
            <p className="text-sm font-sans font-semibold uppercase tracking-wider text-slate-600">
              Weitere Informationen
            </p>
            <Link href="/infos-events">
              <a className="inline-block text-sm font-sans font-semibold uppercase tracking-wider text-primary hover:underline">
                ← Zurück zum Archiv
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
