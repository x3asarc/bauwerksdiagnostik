import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const board = [
  { name: 'Thomas Pohlan', role: { de: '1. Vorsitzender', en: 'Chairman' } },
  { name: 'Sven Jähnig', role: { de: '2. Vorsitzender', en: 'Deputy Chairman' } },
  { name: 'Peter Zaspel', role: { de: 'Schatzmeister', en: 'Treasurer' } },
  { name: 'Jens Barth', role: { de: 'Schriftführer', en: 'Secretary' } },
];

const copy = {
  de: {
    heroTitle: 'Ein interdisziplinäres Netzwerk für technische Exzellenz.',
    heroBody:
      'Der Fachverband Bauwerksdiagnostik e.V. ist eine eingetragene Vereinigung zertifizierter Sachverständiger. Der Verband bündelt Expertise aus Bauphysik, Schadensanalyse, Energieberatung und Bestandsdiagnostik auf Basis von Unabhängigkeit und Objektivität.',
    boardTitle: 'Vorstand',
    registrationTitle: 'Vereinsregistrierung',
    legalForm: 'Rechtsform',
    legalFormValue: 'Eingetragener Verein (e.V.)',
    court: 'Registergericht',
    courtValue: 'Amtsgericht Dresden, VR 13937',
    address: 'Adresse',
    addressValue: ['Werdauer Straße 1-3', '01069 Dresden', 'Deutschland'],
    contact: 'Kontakt',
    contactValue: ['Telefon: 0351 - 799926-60', 'E-Mail: info@bauwerksdiagnostik.de'],
    certificationTitle: 'TÜV Süd Zertifizierung',
    certificationBody:
      'Der Fachverband arbeitet eng mit TÜV Süd bei Schulung und Zertifizierung von Bauwerksdiagnostikern zusammen. Die Zertifizierung steht für Fachkompetenz, Unabhängigkeit und die Einhaltung nationaler wie europäischer Standards.',
    program: 'Zertifizierungsprogramm',
    programItems: [
      'Sachverständiger für Bauphysik',
      'Zertifizierter Schimmelpilzgutachter',
      'Energieberater im KfW-Umfeld',
      'Spezialist für zerstörungsfreie Prüfung',
    ],
    certificationCta: 'Zu TÜV Süd',
  },
  en: {
    heroTitle: 'An interdisciplinary network for technical excellence.',
    heroBody:
      'Fachverband Bauwerksdiagnostik e.V. is a registered association of certified experts focused on scientific building analysis. The association brings together building physics, damage analysis, energy consulting, and existing-building diagnostics under principles of independence and objectivity.',
    boardTitle: 'Board',
    registrationTitle: 'Association Registration',
    legalForm: 'Legal form',
    legalFormValue: 'Registered association (e.V.)',
    court: 'Register court',
    courtValue: 'Dresden District Court, VR 13937',
    address: 'Address',
    addressValue: ['Werdauer Strasse 1-3', '01069 Dresden', 'Germany'],
    contact: 'Contact',
    contactValue: ['Phone: 0351 - 799926-60', 'Email: info@bauwerksdiagnostik.de'],
    certificationTitle: 'TUEV Sued Certification',
    certificationBody:
      'The association works closely with TUEV Sued on training and certification for building diagnosticians. The certification signals subject-matter competence, independence, and compliance with national and European standards.',
    program: 'Certification Program',
    programItems: [
      'Expert in building physics',
      'Certified mold assessment specialist',
      'Energy consultant for KfW programs',
      'Specialist in non-destructive testing',
    ],
    certificationCta: 'Visit TUEV Sued',
  },
} as const;

export default function UeberUns() {
  const { language } = useLanguage();
  const page = copy[language];

  return (
    <Layout>
      <section className="border-b border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_02</p>
            <h1
              style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }}
              className="leading-tight"
            >
              {page.heroTitle}
            </h1>
          </div>

          <p className="max-w-3xl text-lg text-slate-700 lg:text-xl">{page.heroBody}</p>
        </div>
      </section>

      <section className="bg-background px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_BOARD_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.boardTitle}</h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-black p-px md:grid-cols-2">
            {board.map((member) => (
              <div key={member.name} className="space-y-2 border-2 border-black bg-white p-8">
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">{member.name}</h3>
                <p className="text-sm font-sans font-semibold uppercase tracking-wider text-primary">{member.role[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_LEGAL_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.registrationTitle}</h2>
          </div>

          <div className="space-y-6 border-2 border-black bg-white p-12">
            <div className="space-y-2">
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">{page.legalForm}</p>
              <p className="text-lg">{page.legalFormValue}</p>
            </div>
            <div className="space-y-2 border-t border-black pt-6">
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">{page.court}</p>
              <p className="text-lg">{page.courtValue}</p>
            </div>
            <div className="space-y-2 border-t border-black pt-6">
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">{page.address}</p>
              <p className="text-lg">
                {page.addressValue.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <div className="space-y-2 border-t border-black pt-6">
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">{page.contact}</p>
              <p className="text-lg">
                {page.contactValue.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black bg-background px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_CERT_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.certificationTitle}</h2>
          </div>

          <div className="space-y-6 border-2 border-black bg-white p-12">
            <p className="text-lg text-slate-700">{page.certificationBody}</p>
            <div className="border-t border-black pt-6">
              <p className="mb-4 text-sm font-sans font-semibold uppercase tracking-wider text-slate-600">{page.program}</p>
              <ul className="space-y-3 text-sm text-slate-700">
                {page.programItems.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="border-t border-black pt-6">
              <a
                href="https://www.tuv-sued.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-black bg-primary px-6 py-3 font-sans font-semibold uppercase tracking-wider text-white transition-colors hover:opacity-90"
              >
                {page.certificationCta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
