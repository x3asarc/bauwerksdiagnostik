import Layout from '@/components/Layout';
import { Check } from 'lucide-react';

const membershipTiers = [
  {
    id: 1,
    name: 'Ordentliches Mitglied',
    description: 'Aktives Mitglied mit Stimmrecht',
    rights: [
      'Stimmrecht in der Mitgliederversammlung',
      'Vollständiger Eintrag im Experten-Register',
      'Zugang zu Fachressourcen und Standards',
      'Teilnahme an Fachveranstaltungen',
      'Mitgliedsausweis und Zertifikat',
    ],
  },
  {
    id: 2,
    name: 'Industriepartner',
    description: 'Strategischer Partner ohne Stimmrecht',
    rights: [
      'Co-Branding und Partnerlogo',
      'Präsenz auf Partnerseite',
      'Zugang zu Mitgliederdatenbank',
      'Teilnahme an Netzwerkveranstaltungen',
      'Rabatte auf Schulungen und Zertifizierungen',
    ],
  },
];

const applicationSteps = [
  { step: 1, label: 'Antrag stellen' },
  { step: 2, label: 'Unterlagen einreichen' },
  { step: 3, label: 'Prüfung' },
  { step: 4, label: 'Aufnahme' },
];

const partners = [
  { name: 'TÜV Rheinland', logo: '🏢' },
  { name: 'Fraunhofer IBP', logo: '🏢' },
  { name: 'Testo', logo: '🏢' },
  { name: 'Sto', logo: '🏢' },
  { name: 'Dörken', logo: '🏢' },
  { name: 'Remmers', logo: '🏢' },
  { name: 'Viessmann', logo: '🏢' },
  { name: 'Knauf', logo: '🏢' },
];

export default function Mitgliedschaft() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="px-8 py-16 lg:py-24 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_06</p>
            <h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">
              Mitgliedschaft & Partnerschaften
            </h1>
          </div>

          <p className="text-lg lg:text-xl font-serif italic text-slate-700 max-w-3xl">
            Treten Sie unserem Netzwerk von zertifizierten Bauwerksdiagnostikern bei oder werden Sie strategischer Partner.
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="px-8 py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_MEMBERSHIP_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Mitgliedschaftsmodelle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {membershipTiers.map((tier) => (
              <div
                key={tier.id}
                className="border-2 border-black p-12 bg-white space-y-8"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground">
                    {tier.name}
                  </h3>
                  <p className="text-sm font-serif italic text-slate-700">
                    {tier.description}
                  </p>
                </div>

                <div className="border-t border-black pt-8 space-y-4">
                  <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">
                    Rechte & Vorteile
                  </p>
                  <ul className="space-y-3">
                    {tier.rights.map((right, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-serif italic text-slate-700">
                          {right}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-black pt-8">
                  <a
                    href="#"
                    className="inline-block px-6 py-3 bg-primary text-white font-sans font-semibold uppercase tracking-wider border-2 border-black transition-colors hover:opacity-90"
                  >
                    Jetzt beitreten
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="px-8 py-16 lg:py-24 bg-white border-y border-black">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_APPLICATION_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Aufnahmeverfahren
            </h2>
          </div>

          <div className="space-y-8">
            {/* Stepper */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-0">
              {applicationSteps.map((item, idx) => (
                <div key={item.step} className="flex-1 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-black bg-primary text-white flex items-center justify-center font-sans font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-sans font-semibold uppercase tracking-wider text-foreground">
                      {item.label}
                    </p>
                  </div>
                  {idx < applicationSteps.length - 1 && (
                    <div className="hidden md:block flex-1 h-px bg-black" />
                  )}
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black p-px">
              <div className="bg-white border-2 border-black p-8 space-y-4">
                <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-primary">
                  Schritt 1: Antrag stellen
                </h4>
                <p className="text-sm font-serif italic text-slate-700">
                  Füllen Sie das Antragsformular aus und reichen Sie es ein.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-8 space-y-4">
                <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-primary">
                  Schritt 2: Unterlagen einreichen
                </h4>
                <p className="text-sm font-serif italic text-slate-700">
                  Nachweise von Qualifikationen und Zertifizierungen erforderlich.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-8 space-y-4">
                <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-primary">
                  Schritt 3: Prüfung
                </h4>
                <p className="text-sm font-serif italic text-slate-700">
                  Der Vorstand prüft Ihre Bewerbung sorgfältig.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-8 space-y-4">
                <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-primary">
                  Schritt 4: Aufnahme
                </h4>
                <p className="text-sm font-serif italic text-slate-700">
                  Nach Genehmigung erhalten Sie Mitgliedsausweis und Zertifikat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="px-8 py-16 lg:py-24 bg-background border-b border-black">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_PARTNERS_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Strategische Partner
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black p-px">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-black p-8 flex items-center justify-center min-h-[150px]"
              >
                <div className="text-center space-y-2">
                  <div className="text-4xl">{partner.logo}</div>
                  <p className="text-xs font-sans font-semibold uppercase tracking-wider text-foreground">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="px-8 py-16 lg:py-24 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_DOCS_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Dokumente
            </h2>
          </div>

          <div className="space-y-4">
            <div className="border-2 border-black p-8 bg-white space-y-4">
              <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">
                Antragsformular
              </h3>
              <p className="text-sm font-serif italic text-slate-700">
                Formular für die Mitgliedsantrag
              </p>
              <a
                href="#"
                className="inline-block text-sm font-sans font-semibold uppercase tracking-wider text-primary hover:underline"
              >
                PDF herunterladen
              </a>
            </div>

            <div className="border-2 border-black p-8 bg-white space-y-4">
              <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">
                Satzung
              </h3>
              <p className="text-sm font-serif italic text-slate-700">
                Vereinssatzung und Geschäftsordnung
              </p>
              <a
                href="#"
                className="inline-block text-sm font-sans font-semibold uppercase tracking-wider text-primary hover:underline"
              >
                PDF herunterladen
              </a>
            </div>

            <div className="border-2 border-black p-8 bg-white space-y-4">
              <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">
                Partnerschaftsvertrag
              </h3>
              <p className="text-sm font-serif italic text-slate-700">
                Mustervertrag für Industriepartner
              </p>
              <a
                href="#"
                className="inline-block text-sm font-sans font-semibold uppercase tracking-wider text-primary hover:underline"
              >
                PDF herunterladen
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
