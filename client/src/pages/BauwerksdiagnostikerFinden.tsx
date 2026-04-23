import { useState } from 'react';
import Layout from '@/components/Layout';
import LeafletMap from '@/components/LeafletMap';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, List, Search } from 'lucide-react';

const members = [
  { id: 1, name: 'Dr. Thomas Pohlan', specializations: { de: ['Bauphysik', 'Energieberatung'], en: ['Building physics', 'Energy consulting'] }, city: 'Dresden', region: { de: 'Sachsen', en: 'Saxony' }, phone: '+49 351 123456', email: 'thomas@example.de' },
  { id: 2, name: 'Sven Jähnig', specializations: { de: ['Feuchtebelastung', 'Schimmeldiagnostik'], en: ['Moisture exposure', 'Mold diagnostics'] }, city: 'Leipzig', region: { de: 'Sachsen', en: 'Saxony' }, phone: '+49 341 654321', email: 'sven@example.de' },
  { id: 3, name: 'Peter Zaspel', specializations: { de: ['Strukturanalyse', 'ZfP'], en: ['Structural analysis', 'NDT'] }, city: 'Berlin', region: { de: 'Berlin', en: 'Berlin' }, phone: '+49 30 789012', email: 'peter@example.de' },
  { id: 4, name: 'Jens Barth', specializations: { de: ['Energiebedarf', 'Wärmeschutz'], en: ['Energy demand', 'Thermal protection'] }, city: 'München', region: { de: 'Bayern', en: 'Bavaria' }, phone: '+49 89 345678', email: 'jens@example.de' },
  { id: 5, name: 'Dr. Angela Schmidt', specializations: { de: ['Schimmelgutachten', 'Bauphysik'], en: ['Mold reports', 'Building physics'] }, city: 'Hamburg', region: { de: 'Hamburg', en: 'Hamburg' }, phone: '+49 40 901234', email: 'angela@example.de' },
  { id: 6, name: 'Michael Weber', specializations: { de: ['Wärmeschutz', 'Energieberatung'], en: ['Thermal protection', 'Energy consulting'] }, city: 'Köln', region: { de: 'Nordrhein-Westfalen', en: 'North Rhine-Westphalia' }, phone: '+49 221 567890', email: 'michael@example.de' },
  { id: 7, name: 'Dr. Katharina Bauer', specializations: { de: ['ZfP', 'Strukturanalyse'], en: ['NDT', 'Structural analysis'] }, city: 'Stuttgart', region: { de: 'Baden-Württemberg', en: 'Baden-Württemberg' }, phone: '+49 711 234567', email: 'katharina@example.de' },
];

const cityCoordinates: Record<string, [number, number]> = {
  Dresden: [51.0504, 13.7373],
  Leipzig: [51.3397, 12.3731],
  Berlin: [52.52, 13.405],
  München: [48.1351, 11.582],
  Hamburg: [53.5511, 9.9937],
  Köln: [50.9365, 6.9589],
  Stuttgart: [48.7758, 9.1829],
};

const copy = {
  de: {
    heroTitle: 'Bauwerksdiagnostiker finden',
    heroBody: 'Finden Sie einen zertifizierten Bauwerksdiagnostiker in Ihrer Nähe. Alle Mitglieder sind unabhängig zertifiziert und zur Einhaltung hoher fachlicher Standards verpflichtet.',
    search: 'Nach Name oder Stadt suchen...',
    list: 'Liste',
    map: 'Karte',
    found: 'Mitglieder gefunden',
    specialties: 'Spezialisierungen',
    location: 'Standort',
    none: 'Keine Mitglieder gefunden. Bitte versuchen Sie eine andere Suche.',
    geo: 'Geografische Übersicht',
    mapBody: 'Interaktive Karte mit Mitgliederpins',
    mapCount: 'Mitglieder in der Ansicht',
  },
  en: {
    heroTitle: 'Find a building diagnostician',
    heroBody: 'Find a certified building diagnostician near you. All members are independently certified and committed to high professional standards.',
    search: 'Search by name or city...',
    list: 'List',
    map: 'Map',
    found: 'members found',
    specialties: 'Specializations',
    location: 'Location',
    none: 'No members found. Please try a different search.',
    geo: 'Geographic overview',
    mapBody: 'Interactive map with member pins',
    mapCount: 'members in view',
  },
} as const;

export default function BauwerksdiagnostikerFinden() {
  const { language } = useLanguage();
  const page = copy[language];
  const [view, setView] = useState<'map' | 'list'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredMembers = members.filter((member) => [member.name, member.city, member.region[language]].join(' ').toLowerCase().includes(searchTerm.toLowerCase()));
  const mapMarkers = filteredMembers.map((member) => ({
    id: member.id,
    lat: cityCoordinates[member.city]?.[0] || 51.1657,
    lng: cityCoordinates[member.city]?.[1] || 10.4515,
    name: member.name,
    city: member.city,
    specialization: member.specializations[language].join(', '),
    phone: member.phone,
  }));

  return (
    <Layout>
      <section className="border-b border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_05</p>
            <h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">{page.heroTitle}</h1>
          </div>
          <p className="max-w-3xl text-lg text-slate-700 lg:text-xl">{page.heroBody}</p>
        </div>
      </section>

      <section className="border-b border-black bg-background px-8 py-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-3 h-5 w-5 text-slate-600" />
            <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder={page.search} className="w-full border-2 border-black bg-white py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="flex gap-4">
            {(['list', 'map'] as const).map((mode) => (
              <button key={mode} onClick={() => setView(mode)} className={`flex items-center gap-2 border-2 px-4 py-2 font-sans font-semibold uppercase tracking-wider transition-colors ${view === mode ? 'border-primary bg-primary text-white' : 'border-black bg-white text-foreground hover:bg-slate-50'}`}>
                {mode === 'list' ? <List size={18} /> : <MapPin size={18} />}
                {mode === 'list' ? page.list : page.map}
              </button>
            ))}
          </div>
        </div>
      </section>

      {view === 'map' && <section className="bg-background px-8 py-16 lg:py-24"><div className="mx-auto max-w-6xl"><LeafletMap markers={mapMarkers} /></div></section>}

      {view === 'list' && (
        <section className="bg-white px-8 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="space-y-2">
              <p className="section-label">DOC: BWD_MEMBERS_v1</p>
              <h2 className="text-2xl font-sans font-bold uppercase tracking-wider">{filteredMembers.length} {page.found}</h2>
            </div>
            {filteredMembers.length > 0 ? (
              <div className="grid grid-cols-1 gap-px bg-black p-px md:grid-cols-2">
                {filteredMembers.map((member) => (
                  <div key={member.id} className="space-y-4 border-2 border-black bg-white p-8">
                    <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">{member.name}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">{page.specialties}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {member.specializations[language].map((spec) => <span key={spec} className="border border-primary px-3 py-1 text-xs font-sans font-semibold uppercase tracking-wider text-primary">{spec}</span>)}
                        </div>
                      </div>
                      <div className="border-t border-black pt-3">
                        <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">{page.location}</p>
                        <p className="text-sm text-foreground">{member.city}, {member.region[language]}</p>
                      </div>
                      <div className="space-y-2 border-t border-black pt-3">
                        <a href={`tel:${member.phone}`} className="text-sm font-sans text-primary hover:underline">{member.phone}</a>
                        <br />
                        <a href={`mailto:${member.email}`} className="break-all text-sm font-sans text-primary hover:underline">{member.email}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border-2 border-black bg-slate-50 p-12 text-center"><p className="text-lg text-slate-700">{page.none}</p></div>
            )}
          </div>
        </section>
      )}

      {view === 'map' && (
        <section className="bg-white px-8 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="space-y-2">
              <p className="section-label">DOC: BWD_MAP_v1</p>
              <h2 className="text-2xl font-sans font-bold uppercase tracking-wider">{page.geo}</h2>
            </div>
            <div className="flex h-96 items-center justify-center border-2 border-black bg-slate-200">
              <div className="space-y-4 text-center">
                <MapPin className="mx-auto h-12 w-12 text-slate-600" />
                <p className="text-lg text-slate-700">{page.mapBody}</p>
                <p className="text-sm font-sans text-slate-600">{filteredMembers.length} {page.mapCount}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredMembers.map((member) => (
                <div key={member.id} className="space-y-2 border border-black bg-white p-4">
                  <p className="text-sm font-sans font-bold uppercase tracking-wider text-foreground">{member.name}</p>
                  <p className="text-xs text-slate-700">{member.city}, {member.region[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
