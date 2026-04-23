import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer
      style={{
        borderTop: '4px solid #000000',
        marginTop: '160px',
        paddingTop: '40px',
      }}
      className="px-4 pb-16 sm:px-6 md:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#0F4C81',
                marginBottom: '8px',
              }}
            >
              FV_BWD_OFFICIAL
            </p>
            <p
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: '9px',
                fontWeight: 700,
                color: '#94A3B8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Fachverband Bauwerksdiagnostik e.V.
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '8px',
                color: '#94A3B8',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              {t(language, 'footer.downloads')}
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: '10px',
                    fontWeight: 900,
                  }}
                  className="transition-colors hover:underline"
                >
                  SATZUNG (PDF)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: '10px',
                    fontWeight: 900,
                  }}
                  className="transition-colors hover:underline"
                >
                  STANDARDS (PDF)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: '10px',
                    fontWeight: 900,
                  }}
                  className="transition-colors hover:underline"
                >
                  ZERTIFIKAT (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '8px',
                color: '#94A3B8',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: '16px',
              }}
            >
              {t(language, 'footer.legal')}
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/impressum"
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: '10px',
                    fontWeight: 900,
                  }}
                  className="transition-colors hover:underline"
                >
                  {t(language, 'footer.impressum')}
                </a>
              </li>
              <li>
                <a
                  href="/datenschutzerklaerung"
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: '10px',
                    fontWeight: 900,
                  }}
                  className="transition-colors hover:underline"
                >
                  {t(language, 'footer.datenschutz')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: '10px',
                    fontWeight: 900,
                  }}
                  className="transition-colors hover:underline"
                >
                  {t(language, 'footer.archive')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <p
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: '9px',
              color: '#94A3B8',
            }}
          >
            Amtsgericht Dresden • VR 13937 • Werdauer Straße 1-3 • 01069 Dresden
          </p>
        </div>
      </div>
    </footer>
  );
}
