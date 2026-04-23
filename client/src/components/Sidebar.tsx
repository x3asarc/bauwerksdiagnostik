import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('01');
  const { language, toggleLanguage } = useLanguage();

  const navItems = [
    { label: t(language, 'nav.mission'), href: '/', id: '01' },
    { label: t(language, 'nav.about'), href: '/ueber-uns', id: '02' },
    { label: t(language, 'nav.expertise'), href: '/expertise', id: '03' },
    { label: t(language, 'nav.infosEvents'), href: '/infos-events', id: '04' },
    { label: t(language, 'nav.expertsFinder'), href: '/bauwerksdiagnostiker-finden', id: '05' },
    { label: t(language, 'nav.membership'), href: '/mitgliedschaft', id: '06' },
    { label: t(language, 'nav.contact'), href: '/kontakt', id: '07' },
    { label: t(language, 'nav.docs'), href: '/docs', id: '08' },
  ];

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-50 border border-black bg-white p-2 lg:hidden"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-[280px] flex-col overflow-y-auto bg-white transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          borderRight: '0.5px solid #000000',
          padding: '64px 32px',
          minWidth: '280px',
          position: 'sticky',
          top: 0,
        }}
      >
        <div className="mb-8">
          <a href="/" className="block">
            <div
              className="mb-4 flex h-10 w-10 items-center justify-center border border-black transition-colors hover:bg-black hover:text-white"
              style={{ borderRadius: 0 }}
            >
              <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '14px', fontWeight: 900, letterSpacing: '-0.025em' }}>
                FV
                <br />
                BWD
              </span>
            </div>
          </a>
        </div>

        <div className="mb-10">
          <p
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: '10px',
              fontWeight: 900,
              color: '#D1D5DB',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            {t(language, 'sidebar.documentIndex')}
          </p>
        </div>

        <nav className="mb-8 flex-1 overflow-y-auto">
          <ul className="space-y-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex gap-4 py-3 transition-all duration-300"
                  style={{
                    borderLeft: activeId === item.id ? '1px solid #000000' : '1px solid transparent',
                    color: activeId === item.id ? '#000000' : '#94A3B8',
                    marginLeft: '-32px',
                    paddingLeft: '32px',
                  }}
                  onClick={() => {
                    setActiveId(item.id);
                    setMobileOpen(false);
                  }}
                  onMouseEnter={(e) => {
                    if (activeId !== item.id) {
                      (e.currentTarget as HTMLElement).style.color = '#000000';
                      (e.currentTarget as HTMLElement).style.borderLeftColor = 'rgba(0,0,0,0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeId !== item.id) {
                      (e.currentTarget as HTMLElement).style.color = '#94A3B8';
                      (e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent';
                    }
                  }}
                >
                  <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em' }}>
                    {item.id}
                  </span>
                  <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '11px', fontWeight: 900, letterSpacing: '-0.025em' }}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          style={{
            padding: '12px',
            border: '1px solid #000000',
            background: '#FDFDFD',
            marginBottom: '12px',
            marginTop: 'auto',
          }}
        >
          <button
            onClick={toggleLanguage}
            className="flex w-full items-center justify-between gap-2 p-2 transition-colors hover:bg-black hover:text-white"
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: '10px',
              fontWeight: 900,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            <Globe size={14} />
            <span>{language === 'de' ? 'DE' : 'EN'}</span>
          </button>
        </div>

        <div
          style={{
            padding: '16px',
            border: '1px solid rgba(0,0,0,0.05)',
            background: '#FDFDFD',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: '8px',
                fontWeight: 700,
                color: '#94A3B8',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {t(language, 'sidebar.loadStatus')}
            </span>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#0F4C81',
                animation: 'pulse 2s infinite',
                display: 'inline-block',
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: '9px',
              fontWeight: 900,
              color: '#0F4C81',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {t(language, 'sidebar.ready')}
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '8px',
              color: '#D1D5DB',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginTop: '8px',
            }}
          >
            REF: FV_BWD_2026.01
          </div>
        </div>
      </aside>

      {mobileOpen && <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)} />}
    </>
  );
}
