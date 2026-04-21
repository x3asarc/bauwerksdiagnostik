import { useState } from 'react';
import Layout from '@/components/Layout';
import { Search, FileText } from 'lucide-react';
import { getAllDocPages } from '@/lib/docsData';
import { Link } from 'wouter';

export default function DocsHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const allDocs = getAllDocPages();

  const filteredDocs = allDocs.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="px-8 py-16 lg:py-24 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_08 // DOCUMENTATION</p>
            <h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">
              Fachverband Knowledge Base
            </h1>
          </div>

          <p className="text-lg lg:text-xl font-serif italic text-slate-700 max-w-3xl">
            Research, analysis, and technical documentation for building diagnostics professionals. Cross-referenced with wikilinks for seamless navigation.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-8 py-8 bg-background border-b border-black">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-slate-600" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-black bg-white font-serif italic focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Docs Grid */}
      <section className="px-8 py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_KNOWLEDGE_BASE_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Dokumentation ({filteredDocs.length})
            </h2>
          </div>

          {filteredDocs.length === 0 ? (
            <div className="border-2 border-black p-12 bg-slate-50 text-center">
              <p className="text-lg font-serif italic text-slate-700">
                Keine Dokumente gefunden. Versuchen Sie eine andere Suchanfrage.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-px bg-black p-px">
              {filteredDocs.map((doc, idx) => (
                <Link key={doc.id} href={`/docs/${doc.slug}`}>
                  <a className="block bg-white border-2 border-black p-8 space-y-4 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start gap-4">
                      <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-serif font-normal text-foreground mb-2">
                          {doc.title}
                        </h3>
                        <p className="text-sm font-mono text-slate-600 mb-3">
                          {doc.date && <span>{doc.date}</span>}
                          {doc.date && doc.scope && <span> • </span>}
                          {doc.scope && <span className="line-clamp-1">{doc.scope}</span>}
                        </p>
                        <p className="text-base font-serif italic text-slate-700 line-clamp-2">
                          {doc.excerpt}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="px-8 py-16 lg:py-24 bg-background border-t border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_WIKI_INFO_v1</p>
            <h2 className="text-3xl font-serif font-normal">
              Über diese Dokumentation
            </h2>
          </div>

          <div className="space-y-6 text-base font-serif italic text-slate-700">
            <p>
              Diese Knowledge Base enthält Forschung, Analysen und technische Dokumentation für Fachverband Bauwerksdiagnostik. Alle Dokumente sind mit Wikilinks vernetzt, die es Ihnen ermöglichen, verwandte Inhalte schnell zu finden.
            </p>

            <div className="border-l-4 border-primary pl-6 py-4 bg-white">
              <p className="font-sans font-bold uppercase tracking-wider text-primary mb-2">
                Wikilink-Format
              </p>
              <p className="font-mono text-sm text-slate-600">
                Verwenden Sie [[page-name]] oder [[page-name|Display Text]] um auf andere Dokumente zu verlinken.
              </p>
            </div>

            <p>
              Neue Dokumente werden regelmäßig hinzugefügt. Alle Inhalte folgen den Fachverband-Standards für Genauigkeit und Vollständigkeit.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
