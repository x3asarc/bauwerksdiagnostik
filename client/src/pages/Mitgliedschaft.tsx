import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const copy = {
  de: {
    heroTitle: 'Mitgliedschaft und Partnerschaften',
    heroBody: 'Treten Sie unserem Netzwerk zertifizierter Bauwerksdiagnostiker bei oder werden Sie strategischer Partner.',
    tiersTitle: 'Mitgliedschaftsmodelle',
    benefits: 'Rechte und Vorteile',
    join: 'Jetzt beitreten',
    applicationTitle: 'Aufnahmeverfahren',
    partnerTitle: 'Strategische Partner',
    documentsTitle: 'Dokumente',
    download: 'PDF herunterladen',
    tiers: [
      {
        name: 'Ordentliches Mitglied',
        description: 'Aktives Mitglied mit Stimmrecht',
        rights: ['Stimmrecht in der Mitgliederversammlung', 'Vollständiger Eintrag im Expertenregister', 'Zugang zu Fachressourcen und Standards', 'Teilnahme an Fachveranstaltungen', 'Mitgliedsausweis und Zertifikat'],
      },
      {
        name: 'Industriepartner',
        description: 'Strategischer Partner ohne Stimmrecht',
        rights: ['Co-Branding und Partnerlogo', 'Präsenz auf Partnerseite', 'Zugang zu relevanten Fachformaten', 'Teilnahme an Netzwerkveranstaltungen', 'Rabatte auf Schulungen und Zertifizierungen'],
      },
    ],
    steps: [
      ['Antrag stellen', 'Füllen Sie das Antragsformular aus und reichen Sie es ein.'],
      ['Unterlagen einreichen', 'Nachweise über Qualifikationen und Zertifizierungen sind erforderlich.'],
      ['Prüfung', 'Der Vorstand prüft Ihre Bewerbung sorgfältig.'],
      ['Aufnahme', 'Nach Freigabe erhalten Sie Mitgliedsausweis und Zertifikat.'],
    ],
    docs: [
      ['Antragsformular', 'Formular für die Mitgliedsantragstellung'],
      ['Satzung', 'Vereinssatzung und Geschäftsordnung'],
      ['Partnerschaftsvertrag', 'Mustervertrag für Industriepartner'],
    ],
  },
  en: {
    heroTitle: 'Membership and partnerships',
    heroBody: 'Join our network of certified building diagnosticians or become a strategic partner.',
    tiersTitle: 'Membership models',
    benefits: 'Rights and benefits',
    join: 'Join now',
    applicationTitle: 'Admission process',
    partnerTitle: 'Strategic partners',
    documentsTitle: 'Documents',
    download: 'Download PDF',
    tiers: [
      {
        name: 'Full Member',
        description: 'Active member with voting rights',
        rights: ['Voting rights at the members assembly', 'Full listing in the expert directory', 'Access to technical resources and standards', 'Participation in professional events', 'Member ID and certificate'],
      },
      {
        name: 'Industry Partner',
        description: 'Strategic partner without voting rights',
        rights: ['Co-branding and partner logo placement', 'Presence on the partner page', 'Access to relevant professional formats', 'Participation in network events', 'Discounts on training and certification'],
      },
    ],
    steps: [
      ['Submit application', 'Complete and submit the membership application form.'],
      ['Provide documents', 'Evidence of qualifications and certifications is required.'],
      ['Review', 'The board reviews your application carefully.'],
      ['Admission', 'After approval you receive your member ID and certificate.'],
    ],
    docs: [
      ['Application form', 'Form for membership application'],
      ['Association statutes', 'Association bylaws and governance rules'],
      ['Partnership agreement', 'Template agreement for industry partners'],
    ],
  },
} as const;

const partners = ['TUEV Rheinland', 'Fraunhofer IBP', 'Testo', 'Sto', 'Doerken', 'Remmers', 'Viessmann', 'Knauf'];

export default function Mitgliedschaft() {
  const { language } = useLanguage();
  const page = copy[language];

  return (
    <Layout>
      <section className="border-b border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_06</p>
            <h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">{page.heroTitle}</h1>
          </div>
          <p className="max-w-3xl text-lg text-slate-700 lg:text-xl">{page.heroBody}</p>
        </div>
      </section>

      <section className="bg-background px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_MEMBERSHIP_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.tiersTitle}</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {page.tiers.map((tier) => (
              <div key={tier.name} className="space-y-8 border-2 border-black bg-white p-12">
                <div className="space-y-2">
                  <h3 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground">{tier.name}</h3>
                  <p className="text-sm text-slate-700">{tier.description}</p>
                </div>
                <div className="space-y-4 border-t border-black pt-8">
                  <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">{page.benefits}</p>
                  <ul className="space-y-3">
                    {tier.rights.map((right) => (
                      <li key={right} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                        <span className="text-sm text-slate-700">{right}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-black pt-8">
                  <a href="#" className="inline-block border-2 border-black bg-primary px-6 py-3 font-sans font-semibold uppercase tracking-wider text-white transition-colors hover:opacity-90">{page.join}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_APPLICATION_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.applicationTitle}</h2>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:gap-0">
              {page.steps.map(([label], index) => (
                <div key={label} className="flex flex-1 items-center gap-4">
                  <div className="w-12 h-12 border-2 border-black bg-primary text-white flex items-center justify-center font-sans font-bold text-lg">{index + 1}</div>
                  <div className="flex-1"><p className="text-sm font-sans font-semibold uppercase tracking-wider text-foreground">{label}</p></div>
                  {index < page.steps.length - 1 && <div className="hidden h-px flex-1 bg-black md:block" />}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-px bg-black p-px md:grid-cols-2">
              {page.steps.map(([label, body], index) => (
                <div key={label} className="space-y-4 border-2 border-black bg-white p-8">
                  <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-primary">{index + 1}. {label}</h4>
                  <p className="text-sm text-slate-700">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black bg-background px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_PARTNERS_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.partnerTitle}</h2>
          </div>
          <div className="grid grid-cols-2 gap-px bg-black p-px md:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner} className="flex min-h-[150px] items-center justify-center border-2 border-black bg-white p-8">
                <p className="text-center text-xs font-sans font-semibold uppercase tracking-wider text-foreground">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_DOCS_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.documentsTitle}</h2>
          </div>
          <div className="space-y-4">
            {page.docs.map(([title, body]) => (
              <div key={title} className="space-y-4 border-2 border-black bg-white p-8">
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">{title}</h3>
                <p className="text-sm text-slate-700">{body}</p>
                <a href="#" className="inline-block text-sm font-sans font-semibold uppercase tracking-wider text-primary hover:underline">{page.download}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
