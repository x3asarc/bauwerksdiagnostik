import { useState } from 'react';
import Layout from '@/components/Layout';
import { Search, FileText, Beaker, Palette } from 'lucide-react';
import { getAllDocPages, getDocsByCategory } from '@/lib/docsData';
import { Link } from 'wouter';

export default function DocsHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'research' | 'design'>('all');
  
  const allDocs = getAllDocPages();
  const researchDocs = getDocsByCategory('research');
  const designDocs = getDocsByCategory('design');

  const displayDocs = activeTab === 'research' ? researchDocs : activeTab === 'design' ? designDocs : allDocs;

  const filteredDocs = displayDocs.filter(
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

      {/* Tabs Section */}
      <section className="px-8 py-6 bg-white border-b border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-px bg-black p-px">
            {[
              { id: 'all', label: 'Alle Dokumente', icon: FileText, count: allDocs.length },
              { id: 'research', label: 'Forschung & Erkenntnisse', icon: Beaker, count: researchDocs.length },
              { id: 'design', label: 'Design & System', icon: Palette, count: designDocs.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 px-4 py-3 font-sans font-semibold uppercase tracking-wider text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'bg-background text-foreground hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <tab.icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                  <span className="text-xs opacity-75">({tab.count})</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Docs Grid */}
      <section className="px-8 py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_KNOWLEDGE_BASE_v2</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              {activeTab === 'research' && 'Forschung & Erkenntnisse'}
              {activeTab === 'design' && 'Design & Systeme'}
              {activeTab === 'all' && 'Dokumentation'}
              {' '}({filteredDocs.length})
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
                      {doc.category === 'research' ? (
                        <Beaker className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      ) : (
                        <Palette className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      )}
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
                      <div className="flex-shrink-0">
                        <span className={`text-xs font-sans font-semibold uppercase tracking-wider px-3 py-1 border border-black ${
                          doc.category === 'research' 
                            ? 'bg-blue-50 text-primary' 
                            : 'bg-green-50 text-secondary'
                        }`}>
                          {doc.category === 'research' ? 'Forschung' : 'Design'}
                        </span>
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
            <p className="section-label">DOC: BWD_WIKI_INFO_v2</p>
            <h2 className="text-3xl font-serif font-normal">
              Dokumentation organisiert
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black p-px">
            <div className="bg-white border-2 border-black p-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Beaker className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-serif font-normal">Forschung & Erkenntnisse</h3>
              </div>
              <p className="font-serif italic text-slate-700 text-sm">
                Wettbewerbsanalyse, Marktforschung, ICP-Persona, Marktintelligenz und Branchenstandardlandschaft. Diese Dokumente bilden die Grundlage für alle Designentscheidungen.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-serif font-normal">Design & Systeme</h3>
              </div>
              <p className="font-serif italic text-slate-700 text-sm">
                Designsystempläne, Farbrichtungen, visuelle Benchmarks, Barrierefreiheitsberichte und ästhetische Strategien. Alle visuellen und interaktiven Richtlinien für die Fachverband-Plattform.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-primary pl-6 py-4 bg-white">
            <p className="font-sans font-bold uppercase tracking-wider text-primary mb-2">
              Wikilink-Format
            </p>
            <p className="font-mono text-sm text-slate-600">
              Verwenden Sie [[page-name]] oder [[page-name|Display Text]] um auf andere Dokumente zu verlinken.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
