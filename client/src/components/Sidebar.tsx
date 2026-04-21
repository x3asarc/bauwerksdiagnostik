import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  code: string;
}

const navItems: NavItem[] = [
  { label: 'Mission & Vision', href: '/', code: 'SEC_01 // MISSION_VISION' },
  { label: 'Über Uns', href: '/ueber-uns', code: 'SEC_02' },
  { label: 'Expertise', href: '/expertise', code: 'SEC_03' },
  { label: 'Infos & Events', href: '/infos-events', code: 'SEC_04' },
  { label: 'Experten Finden', href: '/bauwerksdiagnostiker-finden', code: 'SEC_05' },
  { label: 'Mitgliedschaft', href: '/mitgliedschaft', code: 'SEC_06' },
  { label: 'Kontakt', href: '/kontakt', code: 'SEC_07' },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 border border-black bg-white"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[280px] bg-white border-r border-black flex flex-col z-40 transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo/Header */}
        <div className="p-8 border-b border-black">
          <Link href="/">
            <a className="block">
              <h1 className="text-sm font-sans font-bold uppercase tracking-wider text-primary">
                Fachverband
              </h1>
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600 mt-1">
                Bauwerksdiagnostik e.V.
              </p>
            </a>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-8 px-6">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <a
                    className="block group"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="text-sm font-sans font-semibold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                    <span className="text-xs font-mono text-slate-500 mt-1 block">
                      {item.code}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Block */}
        <div className="border-t border-black p-6 space-y-4">
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">
              Kontakt
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">
                Telefon
              </p>
              <a
                href="tel:+493517999260"
                className="text-foreground hover:text-primary transition-colors"
              >
                0351 – 799926-60
              </a>
            </div>
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">
                Email
              </p>
              <a
                href="mailto:info@bauwerksdiagnostik.de"
                className="text-foreground hover:text-primary transition-colors break-all"
              >
                info@bauwerksdiagnostik.de
              </a>
            </div>
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">
                Adresse
              </p>
              <p className="text-sm text-foreground">
                Werdauer Str. 1-3
                <br />
                01069 Dresden
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
