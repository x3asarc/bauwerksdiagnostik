import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const board = {
  de: [
    ['Thomas Pohlan', '1. Vorsitzender', 'Dr. Thomas Pohlan ist Sachverständiger für Bauphysik und Energieberatung mit über 20 Jahren Erfahrung.'],
    ['Sven Jähnig', '2. Vorsitzender', 'Sven Jähnig spezialisiert sich auf Feuchtebelastung und Schimmeldiagnostik. Er ist Gründungsmitglied des Verbandes.'],
    ['Peter Zaspel', 'Schatzmeister', 'Peter Zaspel ist Experte für Strukturanalyse und zerstörungsfreie Prüfung.'],
    ['Jens Barth', 'Schriftführer', 'Jens Barth ist Energieberater und Sachverständiger für Wärmeschutz.'],
  ],
  en: [
    ['Thomas Pohlan', 'Chairman', 'Dr. Thomas Pohlan is an expert in building physics and energy consulting with more than 20 years of experience.'],
    ['Sven Jähnig', 'Deputy Chairman', 'Sven Jähnig specializes in moisture exposure and mold diagnostics. He is a founding member of the association.'],
    ['Peter Zaspel', 'Treasurer', 'Peter Zaspel is an expert in structural analysis and non-destructive testing.'],
    ['Jens Barth', 'Secretary', 'Jens Barth is an energy consultant and expert in thermal protection.'],
  ],
} as const;

export default function Vorstandswahl2023() {
  const { language } = useLanguage();
  const page = language === 'de'
    ? {
        title: 'Vorstandswahl 2023 - Mitgliederversammlung Oktober',
        date: '15. Oktober 2023',
        intro: 'Am 15. Oktober 2023 fand die Mitgliederversammlung des Fachverband Bauwerksdiagnostik e.V. in Dresden statt. Mehr als 60 Mitglieder nahmen an der Wahl des neuen Vorstands teil.',
        quoteTitle: 'Neuer Vorstand gewählt',
        quoteBody: 'Mit großer Mehrheit wurden folgende Personen in den Vorstand gewählt:',
        closing: 'Der neue Vorstand wird sich in den kommenden zwei Jahren auf die Stärkung der Mitgliederbasis, neue Zertifizierungsprogramme und die internationale Zusammenarbeit konzentrieren.',
        quote: '"Wir freuen uns auf die Zusammenarbeit mit unserem engagierten Mitgliedernetzwerk. Der Fachverband Bauwerksdiagnostik wird weiterhin höchste Standards in der Branche setzen."',
        more: 'Weitere Informationen',
        back: '← Zurück zum Archiv',
      }
    : {
        title: 'Board election 2023 - October members assembly',
        date: 'October 15, 2023',
        intro: 'On October 15, 2023, the members assembly of Fachverband Bauwerksdiagnostik e.V. took place in Dresden. More than 60 members participated in the election of the new board.',
        quoteTitle: 'New board elected',
        quoteBody: 'The following people were elected to the board by a strong majority:',
        closing: 'Over the next two years, the new board will focus on strengthening the member base, building new certification programs, and expanding international collaboration.',
        quote: '"We look forward to working with our committed member network. Fachverband Bauwerksdiagnostik will continue to set the highest standards in the sector."',
        more: 'Further information',
        back: '← Back to archive',
      };

  return (
    <Layout>
      <section className="border-b border-black bg-white px-8 py-16 lg:py-24"><div className="mx-auto max-w-4xl space-y-8"><div className="space-y-4"><p className="section-label">DOC: BWD_ARTICLE_2023_01</p><h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">{page.title}</h1></div><div className="flex items-center gap-4 text-sm font-mono text-slate-600"><span>{page.date}</span><span>•</span><span>Fachverband Bauwerksdiagnostik e.V.</span></div></div></section>
      <section className="bg-background px-8 py-16 lg:py-24"><div className="mx-auto max-w-4xl space-y-8 text-base leading-relaxed"><p>{page.intro}</p><div className="border-l-4 border-primary bg-slate-50 py-4 pl-6"><p className="mb-2 text-lg font-sans font-bold uppercase tracking-wider text-primary">{page.quoteTitle}</p><p>{page.quoteBody}</p></div><div className="space-y-4">{board[language].map(([name, role, body]) => <div key={name} className="space-y-2 border-2 border-black bg-white p-8"><p className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">{name}</p><p className="text-sm font-sans font-semibold uppercase tracking-wider text-primary">{role}</p><p className="text-sm text-slate-700">{body}</p></div>)}</div><p>{page.closing}</p><p>{page.quote}</p><div className="space-y-4 border-t-2 border-black pt-8"><p className="text-sm font-sans font-semibold uppercase tracking-wider text-slate-600">{page.more}</p><Link href="/infos-events" className="inline-block text-sm font-sans font-semibold uppercase tracking-wider text-primary hover:underline">{page.back}</Link></div></div></section>
    </Layout>
  );
}
