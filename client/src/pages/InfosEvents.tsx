import { Link } from 'wouter';
import Layout from '@/components/Layout';

const articles = [
  {
    id: 1,
    year: 2023,
    title: 'Vorstandswahl 2023 – Mitgliederversammlung Oktober',
    date: '15. Oktober 2023',
    excerpt: 'Neuer Vorstand gewählt. Ergebnisse der Mitgliederversammlung.',
    slug: 'vorstandswahl-2023',
    featured: true,
  },
  {
    id: 2,
    year: 2023,
    title: 'Neue Richtlinien für Schimmelpilzgutachten',
    date: '22. Juni 2023',
    excerpt: 'Aktualisierte Standards für Schimmeldiagnostik veröffentlicht.',
    slug: 'schimmelrichtlinien-2023',
  },
  {
    id: 3,
    year: 2022,
    title: 'Energieberatung und Förderung',
    date: '10. März 2022',
    excerpt: 'Übersicht der aktuellen KfW-Förderprogramme.',
    slug: 'energieberatung-2022',
  },
];

const years = [2023, 2022, 2021, 2020];

export default function InfosEvents() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="px-8 py-16 lg:py-24 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_04</p>
            <h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">
              Fachberichte, News & Branchenveranstaltungen.
            </h1>
          </div>

          <p className="text-lg lg:text-xl font-serif italic text-slate-700 max-w-3xl">
            Aktuelle Informationen, Branchennews und Veranstaltungshinweise aus der Welt der Bauwerksdiagnostik.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-8 py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_FEATURED_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Aktuelle Meldung
            </h2>
          </div>

          <div className="border-2 border-black p-12 bg-white space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-mono text-slate-600">
                {articles[0].date}
              </p>
              <h3 className="text-3xl font-serif font-normal">
                {articles[0].title}
              </h3>
            </div>

            <p className="text-lg font-serif italic text-slate-700">
              {articles[0].excerpt}
            </p>

            <div className="border-t border-black pt-6">
              <Link href={`/${articles[0].slug}`}>
                <a className="inline-block text-sm font-sans font-semibold uppercase tracking-wider text-primary hover:underline">
                  Vollständiger Artikel →
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Archive by Year */}
      <section className="px-8 py-16 lg:py-24 bg-white border-y border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_ARCHIVE_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Archiv
            </h2>
          </div>

          <div className="space-y-8">
            {years.map((year) => {
              const yearArticles = articles.filter((a) => a.year === year);
              return (
                <div key={year} className="space-y-4">
                  <h3 className="text-2xl font-sans font-bold uppercase tracking-wider text-primary border-b-2 border-black pb-3">
                    {year}
                  </h3>

                  {yearArticles.length > 0 ? (
                    <ul className="space-y-3">
                      {yearArticles.map((article) => (
                        <li key={article.id} className="border-l-2 border-primary pl-4">
                          <Link href={`/${article.slug}`}>
                            <a className="block group">
                              <p className="text-xs font-mono text-slate-600 mb-1">
                                {article.date}
                              </p>
                              <p className="text-base font-serif italic text-foreground group-hover:text-primary transition-colors">
                                {article.title}
                              </p>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm font-serif italic text-slate-500">
                      Keine Einträge für {year}.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Submission Gateway */}
      <section className="px-8 py-16 lg:py-24 bg-background border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_SUBMIT_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Artikel oder Event einreichen
            </h2>
          </div>

          <div className="border-2 border-black p-12 bg-white space-y-6">
            <p className="text-lg font-serif italic text-slate-700">
              Mitglieder können Artikel, Branchennews oder Veranstaltungshinweise einreichen. Kontaktieren Sie uns für weitere Informationen.
            </p>

            <div className="border-t border-black pt-6">
              <Link href="/kontakt">
                <a className="inline-block px-6 py-3 bg-primary text-white font-sans font-semibold uppercase tracking-wider border-2 border-black transition-colors hover:opacity-90">
                  Kontakt aufnehmen
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
