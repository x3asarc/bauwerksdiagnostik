import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black mt-16 lg:ml-[280px]">
      <div className="max-w-4xl mx-auto px-8 py-12 space-y-8">
        {/* Download Links */}
        <div>
          <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600 mb-4">
            Dokumente
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="text-primary hover:underline font-sans"
              >
                Bauphysik Standards (PDF)
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-primary hover:underline font-sans"
              >
                Messtechnik Standards (PDF)
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-primary hover:underline font-sans"
              >
                Gutachtenerstellung (PDF)
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="border-t border-black pt-8">
          <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600 mb-4">
            Rechtliches
          </h3>
          <ul className="flex flex-wrap gap-6 text-sm">
            <li>
              <Link href="/impressum">
                <a className="text-primary hover:underline font-sans">
                  Impressum
                </a>
              </Link>
            </li>
            <li>
              <Link href="/datenschutzerklaerung">
                <a className="text-primary hover:underline font-sans">
                  Datenschutzerklärung
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Registration Details */}
        <div className="border-t border-black pt-8 text-sm">
          <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600 mb-2">
            Vereinsregistrierung
          </p>
          <p className="text-foreground">
            Eingetragener Verein (e.V.)
            <br />
            Amtsgericht Dresden, VR 13937
            <br />
            Werdauer Straße 1-3, 01069 Dresden
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-black pt-8 text-xs text-slate-600 font-sans">
          <p>© 2026 Fachverband Bauwerksdiagnostik e.V. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
