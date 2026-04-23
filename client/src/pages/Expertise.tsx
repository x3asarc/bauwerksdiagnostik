import { useState } from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const copy = {
  de: {
    heroTitle: 'Definition technischer Standards und Zertifizierungen.',
    heroBody:
      'Der Fachverband orientiert sich an anerkannten DIN-, EN- und ISO-Standards. Diese Normen sichern Qualität, Vergleichbarkeit und rechtliche Belastbarkeit in der Bauwerksdiagnostik.',
    catalogTitle: 'Normenkatalog',
    standardsLabel: 'Anwendbare Normen',
    download: 'PDF herunterladen',
    promoTitle: 'Zertifizierung zum Bauwerksdiagnostiker',
    promoBody:
      'Werden Sie zertifizierter Bauwerksdiagnostiker im Schulungs- und Zertifizierungsprogramm von TÜV Süd. Die Zertifizierung bestätigt Fachkompetenz in den relevanten Teilbereichen der Bauwerksdiagnostik.',
    requirements: 'Anforderungen',
    requirementsList: [
      'Abgeschlossenes Hochschulstudium oder gleichwertige technische Qualifikation',
      'Mindestens fünf Jahre Berufserfahrung im Bauwesen oder der Bestandsanalyse',
      'Erfolgreiche Teilnahme am TÜV-Schulungsprogramm',
      'Bestandene Zertifizierungsprüfung',
    ],
    cta: 'Zum TÜV Schulungsprogramm',
    standards: [
      {
        id: 1,
        title: 'Bauphysik',
        code: 'DOC: BWD_STDS_v4.02',
        description: 'Thermische Isolierung, Feuchtemanagement und energetische Leistung',
        items: [
          'DIN 4108 - Wärmeschutz und Energieeinsparung im Hochbau',
          'EN ISO 9869 - Thermischer Widerstand und Wärmedurchgangskoeffizient',
          'EN 13187 - Thermische Leistung von Gebäuden durch Thermografie',
          'DIN EN ISO 6946 - Bauteile - Wärmedurchlasswiderstand und Wärmedurchgangskoeffizient',
        ],
      },
      {
        id: 2,
        title: 'Messtechnik',
        code: 'DOC: BWD_STDS_v4.03',
        description: 'Instrumentelle Verfahren und Messmethoden',
        items: [
          'ISO 9251 - Thermische Messungen in Gebäuden',
          'EN 13829 - Blower-Door-Test zur Luftdichtheitsprüfung',
          'DIN 68800 - Holzschutz - Anforderungen und Klassifizierung',
          'EN ISO 12571 - Bestimmung der Feuchtesorptionseigenschaften',
        ],
      },
      {
        id: 3,
        title: 'Gutachtenerstellung',
        code: 'DOC: BWD_STDS_v4.04',
        description: 'Berichtsstandards und rechtliche Anforderungen',
        items: [
          'DIN EN ISO/IEC 17020 - Anforderungen an Inspektionsstellen',
          'DIN EN ISO/IEC 17025 - Kompetenzanforderungen an Prüf- und Kalibrierlaboratorien',
          'Sachverständigenordnung (SVO) - Anforderungen an Sachverständige',
          'HOAI - Honorarordnung für Architekten und Ingenieure',
        ],
      },
    ],
  },
  en: {
    heroTitle: 'Defining technical standards and certifications.',
    heroBody:
      'The association aligns with recognized DIN, EN, and ISO standards. These frameworks ensure quality, comparability, and legal defensibility in building diagnostics.',
    catalogTitle: 'Standards Catalog',
    standardsLabel: 'Applicable Standards',
    download: 'Download PDF',
    promoTitle: 'Certification as a building diagnostician',
    promoBody:
      'Become a certified building diagnostician through the TUEV Sued training and certification program. The qualification confirms subject-matter competence across the core areas of building diagnostics.',
    requirements: 'Requirements',
    requirementsList: [
      'Completed university degree or equivalent technical qualification',
      'At least five years of professional experience in construction or condition analysis',
      'Successful completion of the TUEV training program',
      'Passed certification exam',
    ],
    cta: 'Go to TUEV training program',
    standards: [
      {
        id: 1,
        title: 'Building Physics',
        code: 'DOC: BWD_STDS_v4.02',
        description: 'Thermal insulation, moisture management, and energy performance',
        items: [
          'DIN 4108 - Thermal protection and energy savings in buildings',
          'EN ISO 9869 - Thermal resistance and heat transfer coefficient',
          'EN 13187 - Thermal performance of buildings by thermography',
          'DIN EN ISO 6946 - Building components - Thermal resistance and heat transfer coefficient',
        ],
      },
      {
        id: 2,
        title: 'Measurement Technology',
        code: 'DOC: BWD_STDS_v4.03',
        description: 'Instrument-based procedures and field measurement methods',
        items: [
          'ISO 9251 - Thermal measurements in buildings',
          'EN 13829 - Blower door test for airtightness',
          'DIN 68800 - Wood protection - Requirements and classification',
          'EN ISO 12571 - Determination of moisture sorption properties',
        ],
      },
      {
        id: 3,
        title: 'Expert Reporting',
        code: 'DOC: BWD_STDS_v4.04',
        description: 'Reporting standards and legal requirements',
        items: [
          'DIN EN ISO/IEC 17020 - Requirements for inspection bodies',
          'DIN EN ISO/IEC 17025 - Competence requirements for testing and calibration laboratories',
          'Expert ordinance (SVO) - Requirements for court-recognized experts',
          'HOAI - Fee structure for architects and engineers',
        ],
      },
    ],
  },
} as const;

export default function Expertise() {
  const { language } = useLanguage();
  const page = copy[language];
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <Layout>
      <section className="border-b border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_03</p>
            <h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">
              {page.heroTitle}
            </h1>
          </div>
          <p className="max-w-3xl text-lg text-slate-700 lg:text-xl">{page.heroBody}</p>
        </div>
      </section>

      <section className="bg-background px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_STANDARDS_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.catalogTitle}</h2>
          </div>

          <div className="space-y-4">
            {page.standards.map((standard) => (
              <div key={standard.id} className="overflow-hidden border-2 border-black bg-white">
                <button onClick={() => setExpandedId(expandedId === standard.id ? null : standard.id)} className="flex w-full items-center justify-between px-8 py-6 transition-colors hover:bg-slate-50">
                  <div className="space-y-2 text-left">
                    <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">{standard.title}</h3>
                    <p className="text-xs font-mono text-slate-600">{standard.code}</p>
                  </div>
                  <ChevronDown className={`h-6 w-6 flex-shrink-0 text-primary transition-transform ${expandedId === standard.id ? 'rotate-180' : ''}`} />
                </button>
                {expandedId === standard.id && (
                  <div className="space-y-4 border-t-2 border-black bg-slate-50 px-8 py-6">
                    <p className="text-base text-slate-700">{standard.description}</p>
                    <div className="space-y-3 border-t border-black pt-4">
                      <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">{page.standardsLabel}</p>
                      <ul className="space-y-2">
                        {standard.items.map((item) => (
                          <li key={item} className="border-l-2 border-primary pl-4 text-sm text-slate-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-black pt-4">
                      <a href="#" className="inline-block text-sm font-sans font-semibold uppercase tracking-wider text-primary hover:underline">
                        {page.download}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_CERT_PROMO_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.promoTitle}</h2>
          </div>

          <div className="space-y-6 border-2 border-black bg-white p-12">
            <p className="text-lg text-slate-700">{page.promoBody}</p>
            <div className="space-y-3 border-t border-black pt-6">
              <p className="text-sm font-sans font-semibold uppercase tracking-wider text-slate-600">{page.requirements}</p>
              <ul className="space-y-2 text-sm text-slate-700">
                {page.requirementsList.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="border-t border-black pt-6">
              <a href="https://www.tuv-sued.de" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-black bg-primary px-6 py-3 font-sans font-semibold uppercase tracking-wider text-white transition-colors hover:opacity-90">
                {page.cta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
