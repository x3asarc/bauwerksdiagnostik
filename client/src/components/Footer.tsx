export default function Footer() {
  return (
    <footer
      className="mt-40 pt-10 px-8 lg:px-16 pb-16 lg:ml-[280px]"
      style={{ borderTop: '4px solid #000000' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left: Title */}
          <div>
            <p className="mono-data text-xs mb-2" style={{ color: '#0F4C81' }}>
              FV_BWD_OFFICIAL
            </p>
            <p className="text-xs font-bold text-slate-400 tracking-widest" style={{ fontFamily: "'Public Sans', sans-serif", textTransform: 'uppercase' }}>
              Fachverband Bauwerksdiagnostik e.V.
            </p>
          </div>

          {/* Center: Downloads */}
          <div>
            <p className="mono-data text-xs mb-4" style={{ color: '#94A3B8' }}>
              DOWNLOADS
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-xs font-black hover:underline transition-colors"
                  style={{ fontFamily: "'Public Sans', sans-serif" }}
                >
                  SATZUNG (PDF)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs font-black hover:underline transition-colors"
                  style={{ fontFamily: "'Public Sans', sans-serif" }}
                >
                  STANDARDS (PDF)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs font-black hover:underline transition-colors"
                  style={{ fontFamily: "'Public Sans', sans-serif" }}
                >
                  ZERTIFIKAT (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Legal */}
          <div>
            <p className="mono-data text-xs mb-4" style={{ color: '#94A3B8' }}>
              LEGAL_RECORDS
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/impressum"
                  className="text-xs font-black hover:underline transition-colors"
                  style={{ fontFamily: "'Public Sans', sans-serif" }}
                >
                  IMPRESSUM
                </a>
              </li>
              <li>
                <a
                  href="/datenschutzerklaerung"
                  className="text-xs font-black hover:underline transition-colors"
                  style={{ fontFamily: "'Public Sans', sans-serif" }}
                >
                  DATENSCHUTZ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs font-black hover:underline transition-colors"
                  style={{ fontFamily: "'Public Sans', sans-serif" }}
                >
                  ARCHIVE
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Registration info */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-xs text-slate-500" style={{ fontFamily: "'Public Sans', sans-serif" }}>
            Amtsgericht Dresden • VR 13937 • Werdauer Straße 1-3 • 01069 Dresden
          </p>
        </div>
      </div>
    </footer>
  );
}
