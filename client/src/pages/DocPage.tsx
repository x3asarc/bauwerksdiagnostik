import { useRoute, Link } from 'wouter';
import Layout from '@/components/Layout';
import { getDocPage, getAvailableDocSlugs } from '@/lib/docsData';
import { renderWikilinksInMarkdown, parseWikilinks } from '@/lib/wikilinks';
import { ChevronLeft, AlertCircle, Link2 } from 'lucide-react';
import { Streamdown } from 'streamdown';

export default function DocPage() {
  const [match, params] = useRoute('/docs/:slug');

  const slug = params?.slug as string;
  const doc = slug ? getDocPage(slug) : null;
  const availableDocs = getAvailableDocSlugs();

  if (!match || !doc) {
    return (
      <Layout>
        <section className="border-b border-black bg-white px-4 py-16 text-center sm:px-6 md:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-8">
            <AlertCircle className="mx-auto h-16 w-16 text-primary" />
            <h1
              style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700, letterSpacing: '-0.025em' }}
              className="text-4xl sm:text-5xl lg:text-7xl leading-tight lg:leading-[0.95]"
            >
              Dokument nicht gefunden
            </h1>
            <p className="text-base font-serif text-slate-700 sm:text-lg">
              Das angeforderte Dokument existiert nicht.
            </p>
            <Link href="/docs">
              <a className="inline-block border-2 border-black bg-primary px-6 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:opacity-90 sm:px-8">
                Zur Dokumentation
              </a>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const wikilinks = parseWikilinks(doc.content);
  const processedContent = renderWikilinksInMarkdown(doc.content);

  return (
    <Layout>
      <section className="border-b border-black bg-white px-4 py-12 sm:px-6 md:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
          <Link href="/docs">
            <a className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-primary hover:underline sm:text-sm">
              <ChevronLeft size={16} />
              Zurück zur Dokumentation
            </a>
          </Link>

          <div className="space-y-4">
            <p className="section-label break-all">DOC: {slug.toUpperCase().replace(/-/g, '_')}</p>
            <h1
              style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700, letterSpacing: '-0.025em' }}
              className="text-4xl sm:text-5xl lg:text-7xl leading-tight lg:leading-[0.95]"
            >
              {doc.title}
            </h1>
          </div>

          <div className="flex flex-col gap-2 text-xs font-mono text-slate-600 sm:text-sm">
            <span>
              Bereich: {doc.categoryLabel}
              {doc.topic ? ` • ${doc.topic}` : ''}
            </span>
            {doc.date && <span>Datum: {doc.date}</span>}
            {doc.scope && <span className="break-words">Umfang: {doc.scope}</span>}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-12 sm:px-6 md:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="overflow-x-auto">
            <div className="docs-body prose prose-sm max-w-none min-w-0 break-words">
              <Streamdown>{processedContent}</Streamdown>
            </div>
          </div>
        </div>
      </section>

      {doc.relatedDocs && doc.relatedDocs.length > 0 && (
        <section className="border-t border-black bg-white px-4 py-12 sm:px-6 md:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2">
              <p className="section-label">DOC: RELATED_REFERENCES_v1</p>
              <h2 className="text-2xl font-serif font-normal sm:text-3xl">Verwandte Dokumentation</h2>
            </div>

            <div className="grid grid-cols-1 gap-px bg-black p-px md:grid-cols-2">
              {doc.relatedDocs.map((relatedDoc) => (
                <Link key={relatedDoc.slug} href={`/docs/${relatedDoc.slug}`}>
                  <a className="block space-y-3 border-2 border-black bg-background p-5 transition-colors hover:bg-slate-50 sm:p-6">
                    <div className="flex items-center gap-2">
                      <Link2 size={16} className="flex-shrink-0 text-primary" />
                      <h3 className="break-words text-lg font-serif font-normal text-foreground">
                        {relatedDoc.title}
                      </h3>
                    </div>
                    <p className="break-all text-sm font-mono text-slate-600">{relatedDoc.slug}</p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {wikilinks.length > 0 && (
        <section className="border-t border-black bg-background px-4 py-12 sm:px-6 md:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2">
              <p className="section-label">DOC: WIKILINKS_v1</p>
              <h2 className="text-2xl font-serif font-normal sm:text-3xl">Wikilinks in diesem Dokument</h2>
            </div>

            <div className="space-y-4 border-2 border-black bg-white p-5 sm:p-8">
              <p className="mb-6 text-xs font-mono text-slate-600 sm:text-sm">
                Dieses Dokument enthält {wikilinks.length} Wikilink-Referenz(en):
              </p>

              <div className="space-y-3">
                {wikilinks.map((link, idx) => {
                  const exists = availableDocs.includes(link.linkText);
                  return (
                    <div
                      key={idx}
                      className="flex flex-col gap-3 border border-slate-200 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="min-w-0">
                        <p className="break-all font-mono text-sm text-slate-600">{link.original}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          Angezeigt als: <span className="font-serif">{link.displayText}</span>
                        </p>
                      </div>
                      {exists ? (
                        <Link href={`/docs/${link.linkText}`}>
                          <a className="text-xs font-sans font-semibold uppercase tracking-wider text-primary hover:underline">
                            Öffnen
                          </a>
                        </Link>
                      ) : (
                        <span className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-400">
                          Ausstehend
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
