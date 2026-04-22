export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '4px solid #000000',
        marginTop: '160px',
        paddingTop: '40px',
      }}
      className="px-4 pb-16 sm:px-6 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left: Title */}
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#0F4C81',
              marginBottom: '8px',
            }}>
              FV_BWD_OFFICIAL
            </p>
            <p style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: '9px',
              fontWeight: 700,
              color: '#94A3B8',
              letterSpacing: 'wider',
              textTransform: 'uppercase',
            }}>
              Fachverband Bauwerksdiagnostik e.V.
            </p>
          </div>

          {/* Center: Downloads */}
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '8px',
              color: '#94A3B8',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '16px',
            }}>
              DOWNLOADS
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
                  className="hover:underline transition-colors"
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
                  className="hover:underline transition-colors"
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
                  className="hover:underline transition-colors"
                >
                  ZERTIFIKAT (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Legal */}
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '8px',
              color: '#94A3B8',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: '16px',
            }}>
              LEGAL_RECORDS
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
                  className="hover:underline transition-colors"
                >
                  IMPRESSUM
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
                  className="hover:underline transition-colors"
                >
                  DATENSCHUTZ
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
                  className="hover:underline transition-colors"
                >
                  ARCHIVE
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Registration info */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p style={{
            fontFamily: "'Public Sans', sans-serif",
            fontSize: '9px',
            color: '#94A3B8',
          }}>
            Amtsgericht Dresden • VR 13937 • Werdauer Straße 1-3 • 01069 Dresden
          </p>
        </div>
      </div>
    </footer>
  );
}
