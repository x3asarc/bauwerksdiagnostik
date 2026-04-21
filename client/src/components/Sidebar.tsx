import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  code: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Mission & Vision', href: '/', code: 'SEC_01 // MISSION_VISION', id: '01' },
  { label: 'Über Uns', href: '/ueber-uns', code: 'SEC_02 // ASSOCIATION_PROFILE', id: '02' },
  { label: 'Expertise', href: '/expertise', code: 'SEC_03 // STANDARDS_MATRIX', id: '03' },
  { label: 'Infos & Events', href: '/infos-events', code: 'SEC_04 // INFORMATION_ARCHIVE', id: '04' },
  { label: 'Experten Finden', href: '/bauwerksdiagnostiker-finden', code: 'SEC_05 // EXPERT_REGISTRY', id: '05' },
  { label: 'Mitgliedschaft', href: '/mitgliedschaft', code: 'SEC_06 // MEMBERSHIP_REGISTRY', id: '06' },
  { label: 'Kontakt', href: '/kontakt', code: 'SEC_07 // CONTACT_TERMINAL', id: '07' },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('01');

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
        className={`fixed left-0 top-0 h-screen w-[280px] bg-white border-r border-black flex flex-col z-40 transition-transform duration-300 lg:translate-x-0 overflow-y-auto ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ borderRight: '0.5px solid #000000' }}
      >
        {/* Logo Box */}
        <div className="p-8 border-b border-black">
          <a href="/" className="block">
            <div
              className="w-10 h-10 border border-black flex items-center justify-center mb-4 hover:bg-black hover:text-white transition-colors"
            >
              <span className="text-sm font-black tracking-tighter" style={{ fontFamily: "'Public Sans', sans-serif", letterSpacing: '-0.025em' }}>
                FV<br />BWD
              </span>
            </div>
            <p className="text-xs font-bold text-slate-400 tracking-widest" style={{ fontFamily: "'Public Sans', sans-serif" }}>
              Master Dossier
            </p>
          </a>
        </div>

        {/* DOCUMENT_INDEX Label */}
        <div className="px-8 pt-8 pb-4">
          <p className="text-xs font-black text-slate-300 tracking-widest" style={{ fontFamily: "'Public Sans', sans-serif", letterSpacing: '0.4em' }}>
            DOCUMENT_INDEX
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-0">
          <ul className="space-y-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex gap-4 px-8 py-3 transition-all duration-300"
                  style={{
                    borderLeft: activeId === item.id ? '1px solid #000000' : '1px solid transparent',
                    color: activeId === item.id ? '#000000' : '#94A3B8',
                  }}
                  onClick={() => {
                    setActiveId(item.id);
                    setMobileOpen(false);
                  }}
                  onMouseEnter={() => {
                    if (activeId !== item.id) {
                      // Visual feedback on hover
                    }
                  }}
                >
                  <span className="text-xs font-bold" style={{ fontFamily: "'Public Sans', sans-serif", letterSpacing: 'wider' }}>
                    {item.id}
                  </span>
                  <span className="text-xs font-black tracking-tight" style={{ fontFamily: "'Public Sans', sans-serif", letterSpacing: '-0.025em' }}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Status Widget */}
        <div className="border-t border-black p-4 space-y-3" style={{ background: '#FDFDFD', border: '1px solid rgba(0,0,0,0.05)' }}>
          <p className="text-xs font-bold text-slate-400 tracking-widest" style={{ fontFamily: "'Public Sans', sans-serif", textTransform: 'uppercase' }}>
            LOAD_STATUS:
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
              style={{ background: '#0F4C81' }}
            />
            <span className="text-xs font-black text-primary tracking-tight" style={{ fontFamily: "'Public Sans', sans-serif", textTransform: 'uppercase' }}>
              READY
            </span>
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
