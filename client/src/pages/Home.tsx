
import Layout from '@/components/Layout';
import { Zap, Droplets, Wind, Layers, Scan, Leaf } from 'lucide-react';

const diagnosticMethods = [
  {
    id: 1,
    label: 'Wärmeschutz',
    description: 'Thermische Isolationsanalyse',
    icon: Wind,
  },
  {
    id: 2,
    label: 'Feuchtebelastung',
    description: 'Feuchte- und Schimmeldiagnostik',
    icon: Droplets,
  },
  {
    id: 3,
    label: 'Schimmeldiagnostik',
    description: 'Mikrobiologische Bewertung',
    icon: Leaf,
  },
  {
    id: 4,
    label: 'Energiebedarf',
    description: 'Energieleistungsanalyse',
    icon: Zap,
  },
  {
    id: 5,
    label: 'Strukturanalyse',
    description: 'Tragwerksuntersuchung',
    icon: Layers,
  },
  {
    id: 6,
    label: 'Zerstörungsfreie Prüfung',
    description: 'Nicht-invasive Messtechnik',
    icon: Scan,
  },
];

const missionPillars = [
  {
    title: 'Gesundheit schützen',
    description: 'Sichere und gesunde Gebäudeumgebungen durch wissenschaftliche Diagnostik.',
  },
  {
    title: 'Sicherheit gewährleisten',
    description: 'Strukturelle Integrität und Sicherheit durch unabhängige Bewertung.',
  },
  {
    title: 'Nachhaltigkeit fördern',
    description: 'Ressourceneffiziente Gebäudemodernisierung und Langzeitwerterhaltung.',
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="px-8 py-16 lg:py-24 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_01 // MISSION_VISION</p>
            <h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">
              Die Bauwerksdiagnostik: Wissenschaftliche Analyse und Werterhaltung.
            </h1>
          </div>

          <p className="text-lg lg:text-xl font-serif italic text-slate-700 max-w-3xl">
            Unabhängige und gewerksübergreifende Begutachtung von Wärmeschutz, Energiebedarf, Feuchtebelastung und Schimmelschäden. Der Fachverband Bauwerksdiagnostik e.V. vereint zertifizierte Sachverständige für technische Exzellenz und Objektivität.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/bauwerksdiagnostiker-finden" className="btn-primary text-center">
              EXPERTEN REGISTER
            </a>
            <a href="/mitgliedschaft" className="btn-outline text-center">
              MITGLIEDSCHAFT BEANTRAGEN
            </a>
          </div>
        </div>
      </section>

      {/* Diagnostic Methods Grid */}
      <section className="px-8 py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_METHODS_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Sechs Kernmethoden der Bauwerksdiagnostik
            </h2>
          </div>

          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {diagnosticMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.id}
                  className="space-y-4" style={{ padding: '24px' }}
                >
                  <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  <h3 className="text-sm font-sans font-bold uppercase tracking-wider text-foreground">
                    {method.label}
                  </h3>
                  <p className="text-sm font-serif italic text-slate-700">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="px-8 py-16 lg:py-24 bg-white border-y border-black">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_MISSION_v2</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Drei Säulen unserer Mission
            </h2>
          </div>

          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {missionPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="space-y-4" style={{ padding: '24px' }}
              >
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-primary">
                  {pillar.title}
                </h3>
                <p className="text-base font-serif italic text-slate-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="px-8 py-16 lg:py-24 bg-background border-b border-black">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_MARKET_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Marktpotenzial & Nachfrage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-2 border-black p-12 bg-white space-y-4">
              <p className="font-mono text-5xl font-bold text-primary">14,8 Mrd. €</p>
              <p className="text-sm font-sans font-semibold uppercase tracking-wider text-slate-600">
                Geschätztes Marktvolumen Bauwerksdiagnostik
              </p>
              <p className="text-sm font-serif italic text-slate-700">
                Prognostiziertes Marktvolumen für Diagnostik- und Inspektionsdienstleistungen in Deutschland bis 2030.
              </p>
            </div>

            <div className="border-2 border-black p-12 bg-white space-y-4">
              <p className="font-mono text-5xl font-bold text-secondary">35 Mio.</p>
              <p className="text-sm font-sans font-semibold uppercase tracking-wider text-slate-600">
                EU-Gebäude zur Sanierung bis 2050
              </p>
              <p className="text-sm font-serif italic text-slate-700">
                Europäische Gebäude, die bis 2050 energetisch modernisiert werden müssen. Jedes erfordert Diagnostik.
              </p>
            </div>
          </div>

          <div className="border-2 border-black p-8 bg-white">
            <p className="text-sm font-sans font-semibold uppercase tracking-wider text-slate-600 mb-3">
              Deutscher Sanierungsmarkt
            </p>
            <div className="space-y-2 text-sm font-serif italic text-slate-700">
              <p>2025: €240,7 Milliarden</p>
              <p>2030: €295,5 Milliarden</p>
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600 mt-3">
                Quelle: Bundesverband Energieberatung
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
