import { Link } from 'wouter';
import Layout from '@/components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <section className="px-8 py-24 lg:py-32 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-4">
            <p className="text-8xl font-mono font-bold text-primary">404</p>
            <h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">
              Seite nicht gefunden
            </h1>
          </div>

          <p className="text-lg lg:text-xl font-serif italic text-slate-700 max-w-2xl mx-auto">
            Die angeforderte Seite existiert nicht oder wurde verschoben.
          </p>

          <div className="pt-8">
            <Link href="/">
              <a className="inline-block px-8 py-3 bg-primary text-white font-sans font-semibold uppercase tracking-wider border-2 border-black transition-colors hover:opacity-90">
                Zur Startseite
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
