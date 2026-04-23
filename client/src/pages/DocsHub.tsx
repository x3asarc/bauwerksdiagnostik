import { useMemo, useState } from 'react';
import Layout from '@/components/Layout';
import { Search, Beaker, Palette } from 'lucide-react';
import { getDocsByCategory, localizeDocPage } from '@/lib/docsData';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';
import { Link } from 'wouter';

type DocsTab = 'research' | 'design';

export default function DocsHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<DocsTab>('research');
  const { language } = useLanguage();
  const researchDocs = getDocsByCategory('research').map((doc) => localizeDocPage(doc, language));
  const designDocs = getDocsByCategory('design').map((doc) => localizeDocPage(doc, language));
  const activeDocs = activeTab === 'research' ? researchDocs : designDocs;

  const filteredDocs = useMemo(
    () =>
      activeDocs.filter(
        (doc) =>
          doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doc.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doc.topic.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [activeDocs, searchTerm],
  );

  const activeTopics = Array.from(new Set(activeDocs.map((doc) => doc.topic)));

  return (
    <Layout>
      <section className="border-b border-black bg-white px-4 py-12 sm:px-6 md:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_08 // DOCUMENTATION</p>
            <h1
              style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 700, letterSpacing: '-0.025em' }}
              className="text-4xl sm:text-5xl lg:text-7xl leading-tight lg:leading-[0.95]"
            >
              {t(language, 'docs.title')}
            </h1>
          </div>

          <p className="max-w-3xl text-base font-serif text-slate-700 sm:text-lg lg:text-xl">
            {t(language, 'docs.subtitle')}
          </p>

          <div className="space-y-4 border-t border-black pt-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setActiveTab('research')}
                className={`border-2 px-5 py-3 text-left transition-colors ${
                  activeTab === 'research'
                    ? 'border-black bg-primary text-white'
                    : 'border-black bg-white text-foreground hover:bg-slate-50'
                }`}
              >
                <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em]">
                  {t(language, 'docs.research')}
                </span>
                <span className="mt-1 block font-serif text-lg">
                  {researchDocs.length} {t(language, 'docs.documents')}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('design')}
                className={`border-2 px-5 py-3 text-left transition-colors ${
                  activeTab === 'design'
                    ? 'border-black bg-primary text-white'
                    : 'border-black bg-white text-foreground hover:bg-slate-50'
                }`}
              >
                <span className="block font-sans text-xs font-semibold uppercase tracking-[0.2em]">
                  {t(language, 'docs.design')}
                </span>
                <span className="mt-1 block font-serif text-lg">
                  {designDocs.length} {t(language, 'docs.documents')}
                </span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeTopics.map((topic) => (
                <span
                  key={topic}
                  className="border border-black bg-background px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-700"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black bg-background px-4 py-6 sm:px-6 md:px-8 md:py-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <Search className="absolute left-4 top-3 h-5 w-5 text-slate-600" />
            <input
              type="text"
              placeholder={activeTab === 'design' ? t(language, 'docs.searchDesign') : t(language, 'docs.searchResearch')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-2 border-black bg-white py-3 pl-12 pr-4 font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 md:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">
              {activeTab === 'design' ? 'DOC: BWD_DESIGN_WIKI_v1' : 'DOC: BWD_RESEARCH_WIKI_v1'}
            </p>
            <h2 className="text-3xl font-serif font-normal sm:text-4xl lg:text-5xl">
              {activeTab === 'design'
                ? `${t(language, 'docs.designHeading')} (${filteredDocs.length})`
                : `${t(language, 'docs.researchHeading')} (${filteredDocs.length})`}
            </h2>
          </div>

          {filteredDocs.length === 0 ? (
            <div className="border-2 border-black bg-slate-50 p-8 text-center sm:p-12">
              <p className="text-lg font-serif text-slate-700">{t(language, 'docs.noResults')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-px bg-black p-px">
              {filteredDocs.map((doc) => (
                <Link key={doc.id} href={`/docs/${doc.slug}`}>
                  <a className="block space-y-4 border-2 border-black bg-white p-5 transition-colors hover:bg-slate-50 sm:p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      {doc.category === 'research' ? (
                        <Beaker className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                      ) : (
                        <Palette className="mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                      )}

                      <div className="min-w-0 flex-1">
                        <h3 className="mb-2 break-words text-xl font-serif font-normal text-foreground sm:text-2xl">
                          {doc.title}
                        </h3>
                        <p className="mb-3 text-xs font-mono text-slate-600 sm:text-sm">
                          {doc.category === 'research' ? t(language, 'docs.research') : t(language, 'docs.design')}
                          {doc.topic && <span> • {doc.topic}</span>}
                          {doc.scope && <span> • {doc.scope}</span>}
                        </p>
                        <p className="line-clamp-3 text-base font-serif text-slate-700">{doc.excerpt}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-black bg-background px-4 py-12 sm:px-6 md:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_WIKI_INFO_v1</p>
            <h2 className="text-2xl font-serif font-normal sm:text-3xl">{t(language, 'docs.about')}</h2>
          </div>

          <div className="space-y-6 text-base font-serif text-slate-700">
            <p>{t(language, 'docs.aboutText')}</p>

            <div className="border-l-4 border-primary bg-white py-4 pl-4 sm:pl-6">
              <p className="mb-2 font-sans font-bold uppercase tracking-wider text-primary">
                {t(language, 'docs.wikiLinkFormat')}
              </p>
              <p className="break-words font-mono text-sm text-slate-600">{t(language, 'docs.wikiLinkFormatText')}</p>
            </div>

            <p>{t(language, 'docs.topicsText')}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
