import Layout from '@/components/Layout';

const boardMembers = [
  {
    name: 'Thomas Pohlan',
    role: '1. Vorsitzender',
  },
  {
    name: 'Sven Jähnig',
    role: '2. Vorsitzender',
  },
  {
    name: 'Peter Zaspel',
    role: 'Schatzmeister',
  },
  {
    name: 'Jens Barth',
    role: 'Schriftführer',
  },
];

export default function UeberUns() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="px-8 py-16 lg:py-24 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_02</p>
            <h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">
              Ein interdisziplinäres Netzwerk für technische Exzellenz.
            </h1>
          </div>

          <p className="text-lg lg:text-xl font-serif italic text-slate-700 max-w-3xl">
            Der Fachverband Bauwerksdiagnostik e.V. ist eine eingetragene Vereinigung von zertifizierten Sachverständigen, die sich der wissenschaftlichen Analyse und Bewertung von Gebäuden widmet. Gegründet auf Prinzipien der Unabhängigkeit und Objektivität.
          </p>
        </div>
      </section>

      {/* Board Members */}
      <section className="px-8 py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_BOARD_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Vorstand
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black p-px">
            {boardMembers.map((member, idx) => (
              <div key={idx} className="bg-white border-2 border-black p-8 space-y-2">
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-sans font-semibold uppercase tracking-wider text-primary">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Registration */}
      <section className="px-8 py-16 lg:py-24 bg-white border-y border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_LEGAL_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Vereinsregistrierung
            </h2>
          </div>

          <div className="border-2 border-black p-12 bg-white space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">
                Rechtsform
              </p>
              <p className="text-lg font-serif italic">
                Eingetragener Verein (e.V.)
              </p>
            </div>

            <div className="border-t border-black pt-6 space-y-2">
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">
                Registergericht
              </p>
              <p className="text-lg font-serif italic">
                Amtsgericht Dresden, VR 13937
              </p>
            </div>

            <div className="border-t border-black pt-6 space-y-2">
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">
                Adresse
              </p>
              <p className="text-lg font-serif italic">
                Werdauer Straße 1-3
                <br />
                01069 Dresden
                <br />
                Deutschland
              </p>
            </div>

            <div className="border-t border-black pt-6 space-y-2">
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">
                Kontakt
              </p>
              <p className="text-lg font-serif italic">
                Telefon: 0351 – 799926-60
                <br />
                Email: info@bauwerksdiagnostik.de
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TÜV Certification */}
      <section className="px-8 py-16 lg:py-24 bg-background border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_CERT_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              TÜV Süd Zertifizierung
            </h2>
          </div>

          <div className="border-2 border-black p-12 bg-white space-y-6">
            <p className="text-lg font-serif italic text-slate-700">
              Der Fachverband arbeitet eng mit TÜV Süd zusammen zur Zertifizierung und Schulung von Bauwerksdiagnostikern. Die Zertifizierung garantiert Fachkompetenz, Unabhängigkeit und Einhaltung nationaler und europäischer Standards.
            </p>

            <div className="border-t border-black pt-6">
              <p className="text-sm font-sans font-semibold uppercase tracking-wider text-slate-600 mb-4">
                Zertifizierungsprogramm
              </p>
              <ul className="space-y-3 text-sm font-serif italic text-slate-700">
                <li>• Sachverständiger für Bauphysik</li>
                <li>• Zertifizierter Schimmelpilzgutachter</li>
                <li>• Energieberater (KfW-Programm)</li>
                <li>• Spezialist für zerstörungsfreie Prüfung</li>
              </ul>
            </div>

            <div className="border-t border-black pt-6">
              <a
                href="https://www.tuv-sued.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white font-sans font-semibold uppercase tracking-wider border-2 border-black transition-colors hover:opacity-90"
              >
                Zu TÜV Süd
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
