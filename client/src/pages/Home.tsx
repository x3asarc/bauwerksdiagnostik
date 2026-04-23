import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Droplets, Wind, Layers, Scan, Leaf } from 'lucide-react';

const methodIcons = [Wind, Droplets, Leaf, Zap, Layers, Scan];

const copy = {
  de: {
    heroLabel: 'SEC_01 // MISSION_VISION',
    heroTitle: 'Bauwerksdiagnostik: Wissenschaftliche Analyse und nachhaltige Werterhaltung.',
    heroBody:
      'Unabhängige und gewerkeübergreifende Begutachtung von Wärmeschutz, Energiebedarf, Feuchtebelastung und Schimmelschäden. Der Fachverband Bauwerksdiagnostik e.V. vernetzt zertifizierte Sachverständige für technische Exzellenz, Objektivität und belastbare Entscheidungsgrundlagen.',
    registerCta: 'Expertenregister',
    membershipCta: 'Mitgliedschaft beantragen',
    methodsLabel: 'DOC: BWD_METHODS_v1',
    methodsTitle: 'Sechs Kernmethoden der Bauwerksdiagnostik',
    methods: [
      ['Wärmeschutz', 'Thermische Analyse von Hülle, Wärmebrücken und Dämmqualität'],
      ['Feuchtebelastung', 'Messung, Bewertung und Ursachensuche bei Feuchteschäden'],
      ['Schimmeldiagnostik', 'Mikrobiologische Bewertung und Sanierungsgrundlagen'],
      ['Energiebedarf', 'Energetische Leistung, Verbrauchsmuster und Modernisierungspotenziale'],
      ['Strukturanalyse', 'Bewertung von Tragwerk, Rissen und Bauteilzuständen'],
      ['Zerstörungsfreie Prüfung', 'Nicht-invasive Messtechnik für sichere Bestandsanalyse'],
    ],
    missionLabel: 'DOC: BWD_MISSION_v2',
    missionTitle: 'Drei Säulen unserer Mission',
    mission: [
      ['Gesundheit schützen', 'Sichere und gesunde Gebäudeumgebungen durch nachvollziehbare Diagnostik.'],
      ['Sicherheit gewährleisten', 'Strukturelle Integrität und verlässliche Bewertungen für Eigentümer, Gerichte und Bestandshalter.'],
      ['Nachhaltigkeit fördern', 'Ressourceneffiziente Modernisierung und langfristige Werterhaltung im Gebäudebestand.'],
    ],
    marketLabel: 'DOC: BWD_MARKET_v1',
    marketTitle: 'Marktpotenzial und Nachfrage',
    stats: [
      [
        '14,8 Mrd. EUR',
        'Geschätztes Marktvolumen Bauwerksdiagnostik',
        'Prognostiziertes Marktvolumen für Diagnostik- und Inspektionsdienstleistungen in Deutschland bis 2030.',
      ],
      [
        '35 Mio.',
        'EU-Gebäude zur Sanierung bis 2050',
        'Europäische Gebäude, die energetisch modernisiert werden müssen. Jedes Projekt benötigt belastbare Diagnostik.',
      ],
    ],
    marketSubLabel: 'Deutscher Sanierungsmarkt',
    marketSource: 'Quelle: Bundesverband Energieberatung',
    marketLines: ['2025: EUR 240,7 Milliarden', '2030: EUR 295,5 Milliarden'],
  },
  en: {
    heroLabel: 'SEC_01 // MISSION_VISION',
    heroTitle: 'Building diagnostics: scientific analysis and long-term asset preservation.',
    heroBody:
      'Independent, cross-discipline assessment of thermal performance, energy demand, moisture exposure, and mold damage. Fachverband Bauwerksdiagnostik e.V. connects certified experts around technical rigor, objectivity, and defensible findings.',
    registerCta: 'Expert Directory',
    membershipCta: 'Apply For Membership',
    methodsLabel: 'DOC: BWD_METHODS_v1',
    methodsTitle: 'Six core methods in building diagnostics',
    methods: [
      ['Thermal Protection', 'Thermal analysis of envelope performance, bridges, and insulation quality'],
      ['Moisture Exposure', 'Measurement, evaluation, and root-cause analysis of moisture damage'],
      ['Mold Diagnostics', 'Microbiological assessment and remediation guidance'],
      ['Energy Demand', 'Energy performance, consumption patterns, and retrofit potential'],
      ['Structural Analysis', 'Assessment of structure, cracking, and component condition'],
      ['Non-Destructive Testing', 'Non-invasive measurement methods for safe condition analysis'],
    ],
    missionLabel: 'DOC: BWD_MISSION_v2',
    missionTitle: 'Three pillars of our mission',
    mission: [
      ['Protect health', 'Safer, healthier buildings through verifiable diagnostics.'],
      ['Ensure safety', 'Structural integrity and dependable assessments for owners, courts, and portfolio holders.'],
      ['Advance sustainability', 'Resource-efficient modernization and long-term value preservation across the building stock.'],
    ],
    marketLabel: 'DOC: BWD_MARKET_v1',
    marketTitle: 'Market potential and demand',
    stats: [
      [
        'EUR 14.8B',
        'Estimated building diagnostics market volume',
        'Projected market volume for diagnostics and inspection services in Germany by 2030.',
      ],
      [
        '35M',
        'EU buildings to retrofit by 2050',
        'European buildings that must be upgraded for energy performance. Every program depends on credible diagnostics.',
      ],
    ],
    marketSubLabel: 'German retrofit market',
    marketSource: 'Source: German Federal Association of Energy Consultants',
    marketLines: ['2025: EUR 240.7 billion', '2030: EUR 295.5 billion'],
  },
} as const;

export default function Home() {
  const { language } = useLanguage();
  const page = copy[language];

  return (
    <Layout>
      <section className="border-b border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <p className="section-label">{page.heroLabel}</p>
            <h1
              style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }}
              className="leading-tight"
            >
              {page.heroTitle}
            </h1>
          </div>

          <p className="max-w-3xl text-lg text-slate-700 lg:text-xl">{page.heroBody}</p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <a href="/bauwerksdiagnostiker-finden" className="btn-primary text-center">
              {page.registerCta}
            </a>
            <a href="/mitgliedschaft" className="btn-outline text-center">
              {page.membershipCta}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">{page.methodsLabel}</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.methodsTitle}</h2>
          </div>

          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {page.methods.map(([label, description], index) => {
              const Icon = methodIcons[index];
              return (
                <div key={label} className="space-y-4" style={{ padding: '24px' }}>
                  <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                  <h3 className="text-sm font-sans font-bold uppercase tracking-wider text-foreground">{label}</h3>
                  <p className="text-sm text-slate-700">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-2">
            <p className="section-label">{page.missionLabel}</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.missionTitle}</h2>
          </div>

          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {page.mission.map(([title, description]) => (
              <div key={title} className="space-y-4" style={{ padding: '24px' }}>
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-primary">{title}</h3>
                <p className="text-base leading-relaxed text-slate-700">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black bg-background px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-2">
            <p className="section-label">{page.marketLabel}</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.marketTitle}</h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {page.stats.map(([value, label, description], index) => (
              <div key={index} className="space-y-4 border-2 border-black bg-white p-12">
                <p className={`font-mono text-5xl font-bold ${index === 0 ? 'text-primary' : 'text-secondary'}`}>{value}</p>
                <p className="text-sm font-sans font-semibold uppercase tracking-wider text-slate-600">{label}</p>
                <p className="text-sm text-slate-700">{description}</p>
              </div>
            ))}
          </div>

          <div className="border-2 border-black bg-white p-8">
            <p className="mb-3 text-sm font-sans font-semibold uppercase tracking-wider text-slate-600">{page.marketSubLabel}</p>
            <div className="space-y-2 text-sm text-slate-700">
              {page.marketLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="mt-3 text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">{page.marketSource}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
