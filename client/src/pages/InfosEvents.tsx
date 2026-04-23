import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const copy = {
  de: {
    heroTitle: 'Fachberichte, News und Branchenveranstaltungen.',
    heroBody: 'Aktuelle Informationen, Verbandsnews und Veranstaltungshinweise aus der Welt der Bauwerksdiagnostik.',
    featuredTitle: 'Aktuelle Meldung',
    archiveTitle: 'Archiv',
    submitTitle: 'Artikel oder Event einreichen',
    submitBody: 'Mitglieder können Fachbeiträge, Branchennews oder Veranstaltungshinweise einreichen. Kontaktieren Sie uns für die Abstimmung.',
    submitCta: 'Kontakt aufnehmen',
    readMore: 'Vollständiger Artikel →',
    noEntries: 'Keine Einträge für',
    articles: [
      { id: 1, year: 2023, title: 'Vorstandswahl 2023 - Mitgliederversammlung Oktober', date: '15. Oktober 2023', excerpt: 'Neuer Vorstand gewählt. Ergebnisse der Mitgliederversammlung.', slug: 'vorstandswahl-2023' },
      { id: 2, year: 2023, title: 'Neue Richtlinien für Schimmelpilzgutachten', date: '22. Juni 2023', excerpt: 'Aktualisierte Standards für Schimmeldiagnostik veröffentlicht.', slug: 'schimmelrichtlinien-2023' },
      { id: 3, year: 2022, title: 'Energieberatung und Förderung', date: '10. März 2022', excerpt: 'Überblick über aktuelle KfW-Förderprogramme.', slug: 'energieberatung-2022' },
    ],
  },
  en: {
    heroTitle: 'Technical reports, news, and industry events.',
    heroBody: 'Current information, association news, and event updates from the world of building diagnostics.',
    featuredTitle: 'Current Update',
    archiveTitle: 'Archive',
    submitTitle: 'Submit an article or event',
    submitBody: 'Members can submit technical articles, industry news, or event notices. Contact us to coordinate publication.',
    submitCta: 'Get in touch',
    readMore: 'Read full article →',
    noEntries: 'No entries for',
    articles: [
      { id: 1, year: 2023, title: 'Board election 2023 - October members assembly', date: 'October 15, 2023', excerpt: 'A new board was elected. Summary of the members assembly.', slug: 'vorstandswahl-2023' },
      { id: 2, year: 2023, title: 'Updated guidelines for mold assessment reports', date: 'June 22, 2023', excerpt: 'Revised standards for mold diagnostics have been published.', slug: 'schimmelrichtlinien-2023' },
      { id: 3, year: 2022, title: 'Energy consulting and funding', date: 'March 10, 2022', excerpt: 'Overview of current KfW funding programs.', slug: 'energieberatung-2022' },
    ],
  },
} as const;

const years = [2023, 2022, 2021, 2020];

export default function InfosEvents() {
  const { language } = useLanguage();
  const page = copy[language];
  const featured = page.articles[0];

  return (
    <Layout>
      <section className="border-b border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_04</p>
            <h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">{page.heroTitle}</h1>
          </div>
          <p className="max-w-3xl text-lg text-slate-700 lg:text-xl">{page.heroBody}</p>
        </div>
      </section>

      <section className="bg-background px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_FEATURED_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.featuredTitle}</h2>
          </div>
          <div className="space-y-6 border-2 border-black bg-white p-12">
            <div className="space-y-2">
              <p className="text-xs font-mono text-slate-600">{featured.date}</p>
              <h3 className="text-3xl font-serif font-normal">{featured.title}</h3>
            </div>
            <p className="text-lg text-slate-700">{featured.excerpt}</p>
            <div className="border-t border-black pt-6">
              <Link href={`/${featured.slug}`} className="inline-block text-sm font-sans font-semibold uppercase tracking-wider text-primary hover:underline">{page.readMore}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_ARCHIVE_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.archiveTitle}</h2>
          </div>
          <div className="space-y-8">
            {years.map((year) => {
              const yearArticles = page.articles.filter((article) => article.year === year);
              return (
                <div key={year} className="space-y-4">
                  <h3 className="border-b-2 border-black pb-3 text-2xl font-sans font-bold uppercase tracking-wider text-primary">{year}</h3>
                  {yearArticles.length > 0 ? (
                    <ul className="space-y-3">
                      {yearArticles.map((article) => (
                        <li key={article.id} className="border-l-2 border-primary pl-4">
                          <Link href={`/${article.slug}`} className="block group">
                            <p className="mb-1 text-xs font-mono text-slate-600">{article.date}</p>
                            <p className="text-base text-foreground transition-colors group-hover:text-primary">{article.title}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-slate-500">{page.noEntries} {year}.</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-black bg-background px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_SUBMIT_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.submitTitle}</h2>
          </div>
          <div className="space-y-6 border-2 border-black bg-white p-12">
            <p className="text-lg text-slate-700">{page.submitBody}</p>
            <div className="border-t border-black pt-6">
              <Link href="/kontakt" className="inline-block border-2 border-black bg-primary px-6 py-3 font-sans font-semibold uppercase tracking-wider text-white transition-colors hover:opacity-90">{page.submitCta}</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
