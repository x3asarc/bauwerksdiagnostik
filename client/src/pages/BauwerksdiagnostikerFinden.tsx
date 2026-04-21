import { useState } from 'react';
import Layout from '@/components/Layout';
import { MapPin, List, Search } from 'lucide-react';

const members = [
  {
    id: 1,
    name: 'Dr. Thomas Pohlan',
    specializations: ['Bauphysik', 'Energieberatung'],
    city: 'Dresden',
    region: 'Sachsen',
    phone: '+49 351 123456',
    email: 'thomas@example.de',
  },
  {
    id: 2,
    name: 'Sven Jähnig',
    specializations: ['Feuchtebelastung', 'Schimmeldiagnostik'],
    city: 'Leipzig',
    region: 'Sachsen',
    phone: '+49 341 654321',
    email: 'sven@example.de',
  },
  {
    id: 3,
    name: 'Peter Zaspel',
    specializations: ['Strukturanalyse', 'ZfP'],
    city: 'Berlin',
    region: 'Berlin',
    phone: '+49 30 789012',
    email: 'peter@example.de',
  },
  {
    id: 4,
    name: 'Jens Barth',
    specializations: ['Energiebedarf', 'Wärmeschutz'],
    city: 'München',
    region: 'Bayern',
    phone: '+49 89 345678',
    email: 'jens@example.de',
  },
  {
    id: 5,
    name: 'Dr. Angela Schmidt',
    specializations: ['Schimmelgutachten', 'Bauphysik'],
    city: 'Hamburg',
    region: 'Hamburg',
    phone: '+49 40 901234',
    email: 'angela@example.de',
  },
  {
    id: 6,
    name: 'Michael Weber',
    specializations: ['Wärmeschutz', 'Energieberatung'],
    city: 'Köln',
    region: 'Nordrhein-Westfalen',
    phone: '+49 221 567890',
    email: 'michael@example.de',
  },
  {
    id: 7,
    name: 'Dr. Katharina Bauer',
    specializations: ['ZfP', 'Strukturanalyse'],
    city: 'Stuttgart',
    region: 'Baden-Württemberg',
    phone: '+49 711 234567',
    email: 'katharina@example.de',
  },
];

export default function BauwerksdiagnostikerFinden() {
  const [view, setView] = useState<'map' | 'list'>('list');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="px-8 py-16 lg:py-24 bg-white border-b border-black">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_05</p>
            <h1 className="text-5xl lg:text-7xl font-serif font-normal leading-tight">
              Bauwerksdiagnostiker Finden
            </h1>
          </div>

          <p className="text-lg lg:text-xl font-serif italic text-slate-700 max-w-3xl">
            Finden Sie einen zertifizierten Bauwerksdiagnostiker in Ihrer Nähe. Alle Mitglieder sind unabhängig zertifiziert und verpflichtet, höchste Standards einzuhalten.
          </p>
        </div>
      </section>

      {/* Search & View Toggle */}
      <section className="px-8 py-8 bg-background border-b border-black">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-slate-600" />
            <input
              type="text"
              placeholder="Nach Name oder Stadt suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-black bg-white font-serif italic focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* View Toggle */}
          <div className="flex gap-4">
            <button
              onClick={() => setView('list')}
              className={`flex items-center gap-2 px-4 py-2 border-2 font-sans font-semibold uppercase tracking-wider transition-colors ${
                view === 'list'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-foreground border-black hover:bg-slate-50'
              }`}
            >
              <List size={18} />
              Liste
            </button>
            <button
              onClick={() => setView('map')}
              className={`flex items-center gap-2 px-4 py-2 border-2 font-sans font-semibold uppercase tracking-wider transition-colors ${
                view === 'map'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-foreground border-black hover:bg-slate-50'
              }`}
            >
              <MapPin size={18} />
              Karte
            </button>
          </div>
        </div>
      </section>

      {/* List View */}
      {view === 'list' && (
        <section className="px-8 py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-2">
              <p className="section-label">DOC: BWD_MEMBERS_v1</p>
              <h2 className="text-2xl font-sans font-bold uppercase tracking-wider">
                {filteredMembers.length} Mitglieder gefunden
              </h2>
            </div>

            {filteredMembers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black p-px">
                {filteredMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white border-2 border-black p-8 space-y-4"
                  >
                    <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">
                      {member.name}
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">
                          Spezialisierungen
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {member.specializations.map((spec, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-sans font-semibold uppercase tracking-wider px-3 py-1 border border-primary text-primary"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-black pt-3">
                        <p className="text-xs font-sans font-semibold uppercase tracking-wider text-slate-600">
                          Standort
                        </p>
                        <p className="text-sm font-serif italic text-foreground">
                          {member.city}, {member.region}
                        </p>
                      </div>

                      <div className="border-t border-black pt-3 space-y-2">
                        <a
                          href={`tel:${member.phone}`}
                          className="text-sm text-primary hover:underline font-sans"
                        >
                          {member.phone}
                        </a>
                        <br />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-sm text-primary hover:underline font-sans break-all"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border-2 border-black p-12 bg-slate-50 text-center">
                <p className="text-lg font-serif italic text-slate-700">
                  Keine Mitglieder gefunden. Bitte versuchen Sie eine andere Suche.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Map View */}
      {view === 'map' && (
        <section className="px-8 py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-2">
              <p className="section-label">DOC: BWD_MAP_v1</p>
              <h2 className="text-2xl font-sans font-bold uppercase tracking-wider">
                Geografische Übersicht
              </h2>
            </div>

            <div className="border-2 border-black bg-slate-200 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="w-12 h-12 text-slate-600 mx-auto" />
                <p className="text-lg font-serif italic text-slate-700">
                  Interaktive Karte mit Mitgliederpins
                </p>
                <p className="text-sm font-sans text-slate-600">
                  {filteredMembers.length} Mitglieder in der Ansicht
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="border border-black p-4 bg-white space-y-2"
                >
                  <p className="text-sm font-sans font-bold uppercase tracking-wider text-foreground">
                    {member.name}
                  </p>
                  <p className="text-xs font-serif italic text-slate-700">
                    {member.city}, {member.region}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
