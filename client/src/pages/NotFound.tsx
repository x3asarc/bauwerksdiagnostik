import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { language } = useLanguage();
  const page =
    language === 'de'
      ? {
          title: 'Seite nicht gefunden',
          body: 'Die angeforderte Seite existiert nicht oder wurde verschoben.',
          cta: 'Zur Startseite',
        }
      : {
          title: 'Page not found',
          body: 'The requested page does not exist or has moved.',
          cta: 'Back to homepage',
        };

  return (
    <Layout>
      <section className="border-b border-black bg-white px-8 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div className="space-y-4">
            <p className="text-8xl font-mono font-bold text-primary">404</p>
            <h1
              style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }}
              className="leading-tight"
            >
              {page.title}
            </h1>
          </div>

          <p className="mx-auto max-w-2xl text-lg text-slate-700 lg:text-xl">{page.body}</p>

          <div className="pt-8">
            <Link href="/" className="inline-block border-2 border-black bg-primary px-8 py-3 font-sans font-semibold uppercase tracking-wider text-white transition-colors hover:opacity-90">
              {page.cta}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
