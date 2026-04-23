import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Impressum() {
  const { language } = useLanguage();
  const page = language === 'de'
    ? {
        title: 'Impressum',
        legal: 'Angaben gemäß § 5 TMG',
        content: [
          ['Verantwortlich für den Inhalt', 'Fachverband Bauwerksdiagnostik e.V.\nWerdauer Straße 1-3\n01069 Dresden\nDeutschland'],
          ['Vorstand', '1. Vorsitzender: Thomas Pohlan\n2. Vorsitzender: Sven Jähnig\nSchatzmeister: Peter Zaspel\nSchriftführer: Jens Barth'],
          ['Vereinsregistrierung', 'Eingetragener Verein (e.V.)\nAmtsgericht Dresden\nVereinsregister: VR 13937'],
          ['Kontakt', 'Telefon: 0351 - 799926-60\nE-Mail: info@bauwerksdiagnostik.de'],
          ['Haftungsausschluss', 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.'],
          ['Haftung für Links', 'Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr.'],
          ['Urheberrecht', 'Die von den Seitenbetreibern erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung.'],
        ],
      }
    : {
        title: 'Legal Notice',
        legal: 'Information pursuant to Section 5 TMG',
        content: [
          ['Responsible for content', 'Fachverband Bauwerksdiagnostik e.V.\nWerdauer Strasse 1-3\n01069 Dresden\nGermany'],
          ['Board', 'Chairman: Thomas Pohlan\nDeputy Chairman: Sven Jähnig\nTreasurer: Peter Zaspel\nSecretary: Jens Barth'],
          ['Association registration', 'Registered association (e.V.)\nDresden District Court\nRegister number: VR 13937'],
          ['Contact', 'Phone: 0351 - 799926-60\nEmail: info@bauwerksdiagnostik.de'],
          ['Disclaimer', 'The contents of our pages were created with great care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.'],
          ['Liability for links', 'Our website contains links to external third-party websites whose contents are beyond our control. We therefore assume no liability for that external content.'],
          ['Copyright', 'The content and works created by the site operators are subject to German copyright law. Any use beyond the limits of copyright law requires prior written consent.'],
        ],
      };

  return (
    <Layout>
      <section className="border-b border-black bg-white px-8 py-16 lg:py-24"><div className="mx-auto max-w-4xl space-y-8"><div className="space-y-4"><p className="section-label">LEGAL // IMPRESSUM</p><h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">{page.title}</h1></div></div></section>
      <section className="bg-background px-8 py-16 lg:py-24"><div className="mx-auto max-w-4xl space-y-8 text-sm"><div className="space-y-4"><h2 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground">{page.legal}</h2><div className="space-y-6">{page.content.map(([title, body]) => <div key={title} className="space-y-2 border-t border-black pt-6 first:border-t-0 first:pt-0"><h3 className="text-lg font-sans font-bold uppercase tracking-wider text-primary">{title}</h3><p className="whitespace-pre-line text-slate-700">{body}</p></div>)}</div></div></div></section>
    </Layout>
  );
}
