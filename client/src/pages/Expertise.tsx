import { useState } from 'react';
import Layout from '@/components/Layout';
import { ChevronDown } from 'lucide-react';

const standards = [
  {
    id: 1,
    title: 'Bauphysik',
    code: 'DOC: BWD_STDS_v4.02',
    description: 'Thermische Isolierung, Feuchtemanagement und Energieleistung',
    standards: [
      'DIN 4108 – Wärmeschutz und Energieeinsparung im Hochbau',
      'EN ISO 9869 – Thermischer Widerstand und Wärmedurchgangskoeffizient',
      'EN 13187 – Thermische Leistung von Fenstern durch Thermografie',
      'DIN EN ISO 6946 – Bauteile – Wärmedurchlasswiderstand und Wärmedurchgangskoeffizient',
    ],
  },
  {
    id: 2,
    title: 'Messtechnik',
    code: 'DOC: BWD_STDS_v4.03',
    description: 'Instrumentelle Verfahren und Messmethoden',
    standards: [
      'ISO 9251 – Thermische Messungen in Gebäuden',
      'EN 13829 – Blower-Door-Test (Luftdichtheitsprüfung)',
      'DIN 68800 – Holzschutz – Anforderungen und Klassifizierung',
      'EN ISO 12571 – Bestimmung der Feuchtesorptionseigenschaften',
    ],
  },
  {
    id: 3,
    title: 'Gutachtenerstellung',
    code: 'DOC: BWD_STDS_v4.04',
    description: 'Berichtsstandards und rechtliche Anforderungen',
    standards: [
      'DIN EN ISO/IEC 17020 – Anforderungen an die Tätigkeit von Inspektionsstellen',
      'DIN EN ISO/IEC 17025 – Allgemeine Anforderungen an die Kompetenz von Prüf- und Kalibrierlaboratorien',
      'Sachverständigenordnung (SVO) – Anforderungen an Sachverständige',
      'HOAI – Honorarordnung für Architekten und Ingenieure',
    ],
  },
];

export default function Expertise() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="px-8 py-16 lg:py-24 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_03</p>
            <h1 className="text-5xl lg:text-7xl font-serif font-normal leading-tight">
              Definition technischer Standards & Zertifizierungen.
            </h1>
          </div>

          <p className="text-lg lg:text-xl font-serif italic text-slate-700 max-w-3xl">
            Der Fachverband orientiert sich an international anerkannten DIN-, EN- und ISO-Standards. Diese Normen sichern Qualität, Vergleichbarkeit und Rechtssicherheit.
          </p>
        </div>
      </section>

      {/* Standards Accordion */}
      <section className="px-8 py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_STANDARDS_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Normenkatalog
            </h2>
          </div>

          <div className="space-y-4">
            {standards.map((standard) => (
              <div
                key={standard.id}
                className="border-2 border-black bg-white overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(standard.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="text-left space-y-2">
                    <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">
                      {standard.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-600">
                      {standard.code}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                      expandedId === standard.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedId === standard.id && (
                  <div className="border-t-2 border-black px-8 py-6 bg-slate-50 space-y-4">
                    <p className="text-base font-serif italic text-slate-700">
                      {standard.description}
                    </p>

                    <div className="border-t border-black pt-4 space-y-3">
                      <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">
                        Anwendbare Normen
                      </p>
                      <ul className="space-y-2">
                        {standard.standards.map((norm, idx) => (
                          <li
                            key={idx}
                            className="text-sm font-serif italic text-slate-700 pl-4 border-l-2 border-primary"
                          >
                            {norm}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-black pt-4">
                      <a
                        href="#"
                        className="inline-block text-sm font-sans font-semibold uppercase tracking-wider text-primary hover:underline"
                      >
                        PDF herunterladen
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÜV Certification Promo */}
      <section className="px-8 py-16 lg:py-24 bg-white border-y border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_CERT_PROMO_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Zertifizierung zum Bauwerksdiagnostiker
            </h2>
          </div>

          <div className="border-2 border-black p-12 bg-white space-y-6">
            <p className="text-lg font-serif italic text-slate-700">
              Werden Sie zertifizierter Bauwerksdiagnostiker durch das TÜV Süd Schulungs- und Zertifizierungsprogramm. Die Zertifizierung bescheinigt Ihre Fachkompetenz in allen Bereichen der Bauwerksdiagnostik.
            </p>

            <div className="border-t border-black pt-6 space-y-3">
              <p className="text-sm font-sans font-semibold uppercase tracking-wider text-slate-600">
                Anforderungen
              </p>
              <ul className="space-y-2 text-sm font-serif italic text-slate-700">
                <li>• Abgeschlossenes Hochschulstudium (Bauingenieurwesen, Architektur, Physik o.ä.)</li>
                <li>• Mindestens 5 Jahre Berufserfahrung im Bauwesen</li>
                <li>• Erfolgreiche Teilnahme am TÜV Schulungsprogramm</li>
                <li>• Bestandene Zertifizierungsprüfung</li>
              </ul>
            </div>

            <div className="border-t border-black pt-6">
              <a
                href="https://www.tuv-sued.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white font-sans font-semibold uppercase tracking-wider border-2 border-black transition-colors hover:opacity-90"
              >
                Zu TÜV Schulungsprogramm
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
