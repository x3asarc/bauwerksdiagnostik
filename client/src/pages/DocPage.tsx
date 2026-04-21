import { useRoute } from 'wouter';
import Layout from '@/components/Layout';
import { getDocPage, getAvailableDocSlugs } from '@/lib/docsData';
import { renderWikilinksInMarkdown, parseWikilinks } from '@/lib/wikilinks';
import { Link } from 'wouter';
import { ChevronLeft, AlertCircle, Link2 } from 'lucide-react';
import { Streamdown } from 'streamdown';

export default function DocPage() {
  const [match, params] = useRoute('/docs/:slug');
  
  // If not matched, try to extract slug from current path
  const pathSlug = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : null;
  const slug = params?.slug as string;
  const doc = slug ? getDocPage(slug) : null;
  const availableDocs = getAvailableDocSlugs();

  if (!match || !doc) {
    return (
      <Layout>
        <section className="px-8 py-24 bg-white border-b border-black">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <AlertCircle className="w-16 h-16 text-primary mx-auto" />
            <h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">
              Dokument nicht gefunden
            </h1>
            <p className="text-lg font-serif italic text-slate-700">
              Das angeforderte Dokument existiert nicht.
            </p>
            <Link href="/docs">
              <a className="inline-block px-8 py-3 bg-primary text-white font-sans font-semibold uppercase tracking-wider border-2 border-black transition-colors hover:opacity-90">
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
      {/* Header */}
      <section className="px-8 py-16 lg:py-24 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <Link href="/docs">
            <a className="inline-flex items-center gap-2 text-sm font-sans font-semibold uppercase tracking-wider text-primary hover:underline">
              <ChevronLeft size={16} />
              Zurück zur Dokumentation
            </a>
          </Link>

          <div className="space-y-4">
            <p className="section-label">DOC: {slug.toUpperCase().replace(/-/g, '_')}</p>
            <h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">
              {doc.title}
            </h1>
          </div>

          {(doc.date || doc.scope) && (
            <div className="flex flex-col gap-2 text-sm font-mono text-slate-600">
              {doc.date && <span>Datum: {doc.date}</span>}
              {doc.scope && <span>Umfang: {doc.scope}</span>}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="px-8 py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-sm max-w-none font-serif italic text-base leading-relaxed text-slate-800">
            <Streamdown>{processedContent}</Streamdown>
          </div>
        </div>
      </section>

      {/* Related Docs & Wikilinks */}
      {(doc.relatedDocs && doc.relatedDocs.length > 0) && (
        <section className="px-8 py-16 lg:py-24 bg-white border-t border-black">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-2">
              <p className="section-label">DOC: RELATED_REFERENCES_v1</p>
              <h2 className="text-3xl font-serif font-normal">
                Verwandte Dokumentation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black p-px">
              {doc.relatedDocs.map((relatedDoc) => (
                <Link key={relatedDoc.slug} href={`/docs/${relatedDoc.slug}`}>
                  <a className="block bg-background border-2 border-black p-6 space-y-3 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-2">
                      <Link2 size={16} className="text-primary flex-shrink-0" />
                      <h3 className="text-lg font-serif font-normal text-foreground">
                        {relatedDoc.title}
                      </h3>
                    </div>
                    <p className="text-sm font-mono text-slate-600">
                      {relatedDoc.slug}
                    </p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Wikilinks Info */}
      {wikilinks.length > 0 && (
        <section className="px-8 py-16 lg:py-24 bg-background border-t border-black">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-2">
              <p className="section-label">DOC: WIKILINKS_v1</p>
              <h2 className="text-3xl font-serif font-normal">
                Wikilinks in diesem Dokument
              </h2>
            </div>

            <div className="border-2 border-black p-8 bg-white space-y-4">
              <p className="text-sm font-mono text-slate-600 mb-6">
                Dieses Dokument enthält {wikilinks.length} Wikilink-Referenz(en):
              </p>

              <div className="space-y-3">
                {wikilinks.map((link, idx) => {
                  const exists = availableDocs.includes(link.linkText);
                  return (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200">
                      <div>
                        <p className="font-mono text-sm text-slate-600">
                          {link.original}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          Angezeigt als: <span className="font-serif italic">{link.displayText}</span>
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
