import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Mission & Vision', href: '/', id: '01' },
  { label: 'Über Uns', href: '/ueber-uns', id: '02' },
  { label: 'Expertise', href: '/expertise', id: '03' },
  { label: 'Infos & Events', href: '/infos-events', id: '04' },
  { label: 'Experten Finden', href: '/bauwerksdiagnostiker-finden', id: '05' },
  { label: 'Mitgliedschaft', href: '/mitgliedschaft', id: '06' },
  { label: 'Kontakt', href: '/kontakt', id: '07' },
  { label: 'Dokumentation', href: '/docs', id: '08' },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('01');
  const { language, toggleLanguage } = useLanguage();

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
        className={`fixed left-0 top-0 h-screen w-[280px] bg-white flex flex-col z-40 transition-transform duration-300 lg:translate-x-0 overflow-y-auto ${
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
        {/* Logo Box */}
        <div className="mb-8">
          <a href="/" className="block">
            <div
              className="w-10 h-10 border border-black flex items-center justify-center mb-4 hover:bg-black hover:text-white transition-colors"
              style={{ borderRadius: 0 }}
            >
              <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '14px', fontWeight: 900, letterSpacing: '-0.025em' }}>
                FV<br />BWD
              </span>
            </div>
          </a>
        </div>

        {/* DOCUMENT_INDEX Label */}
        <div className="mb-10">
          <p style={{
            fontFamily: "'Public Sans', sans-serif",
            fontSize: '10px',
            fontWeight: 900,
            color: '#D1D5DB',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            margin: 0,
          }}>
            DOCUMENT_INDEX
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto mb-8">
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
                      (e.target as HTMLElement).style.color = '#000000';
                      (e.target as HTMLElement).style.borderLeftColor = 'rgba(0,0,0,0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeId !== item.id) {
                      (e.target as HTMLElement).style.color = '#94A3B8';
                      (e.target as HTMLElement).style.borderLeftColor = 'transparent';
                    }
                  }}
                >
                  <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: 'wider' }}>
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

        {/* Language Toggle */}
        <div style={{
          padding: '12px',
          border: '1px solid #000000',
          background: '#FDFDFD',
          marginBottom: '12px',
          marginTop: 'auto',
        }}>
          <button
            onClick={toggleLanguage}
            className="w-full flex items-center justify-between gap-2 hover:bg-black hover:text-white transition-colors p-2"
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

        {/* Status Widget */}
        <div style={{
          padding: '16px',
          border: '1px solid rgba(0,0,0,0.05)',
          background: '#FDFDFD',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: '8px',
              fontWeight: 700,
              color: '#94A3B8',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              LOAD_STATUS:
            </span>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#0F4C81',
              animation: 'pulse 2s infinite',
              display: 'inline-block',
            }} />
          </div>
          <div style={{
            fontFamily: "'Public Sans', sans-serif",
            fontSize: '9px',
            fontWeight: 900,
            color: '#0F4C81',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            PRETEXT_ENGINE_READY
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '8px',
            color: '#D1D5DB',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginTop: '8px',
          }}>
            REF: FV_BWD_2026.01
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
