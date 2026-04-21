import { useState } from 'react';
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.privacy) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', privacy: false });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="px-8 py-16 lg:py-24 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_07</p>
            <h1 className="text-5xl lg:text-7xl font-serif font-normal leading-tight">
              Zentrale Anlaufstelle für Experten & Fachthemen.
            </h1>
          </div>

          <p className="text-lg lg:text-xl font-serif italic text-slate-700 max-w-3xl">
            Kontaktieren Sie uns für Fragen zu Mitgliedschaft, Zertifizierung, Standards oder anderen Anliegen.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-8 py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_CONTACT_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Kontaktinformationen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="border-2 border-black p-12 bg-white space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">
                  Telefon
                </h3>
              </div>
              <a
                href="tel:+493517999260"
                className="text-2xl font-serif italic text-primary hover:underline"
              >
                0351 – 799926-60
              </a>
            </div>

            {/* Email */}
            <div className="border-2 border-black p-12 bg-white space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">
                  Email
                </h3>
              </div>
              <a
                href="mailto:info@bauwerksdiagnostik.de"
                className="text-lg font-serif italic text-primary hover:underline break-all"
              >
                info@bauwerksdiagnostik.de
              </a>
            </div>

            {/* Address */}
            <div className="border-2 border-black p-12 bg-white space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">
                  Adresse
                </h3>
              </div>
              <div className="text-lg font-serif italic text-foreground">
                Werdauer Straße 1-3
                <br />
                01069 Dresden
                <br />
                Deutschland
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-8 py-16 lg:py-24 bg-white border-y border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_FORM_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Anfrage senden
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="section-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-black bg-white font-serif italic focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="section-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-black bg-white font-serif italic focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="section-label">
                Betreff
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-black bg-white font-serif italic focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">-- Wählen Sie ein Thema --</option>
                <option value="membership">Mitgliedschaft</option>
                <option value="certification">Zertifizierung</option>
                <option value="standards">Standards & Normen</option>
                <option value="partnership">Partnerschaft</option>
                <option value="other">Sonstiges</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="section-label">
                Nachricht
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-black bg-white font-serif italic focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="privacy"
                id="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                required
                className="w-5 h-5 border-2 border-black bg-white cursor-pointer mt-1"
              />
              <label htmlFor="privacy" className="text-sm font-serif italic text-slate-700 cursor-pointer">
                Ich akzeptiere die Datenschutzerklärung und stimme der Verarbeitung meiner Daten zu.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white font-sans font-semibold uppercase tracking-wider border-2 border-black transition-colors hover:opacity-90"
              >
                Anfrage senden
              </button>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="border-2 border-secondary bg-green-50 p-4">
                <p className="text-sm font-sans font-semibold uppercase tracking-wider text-secondary">
                  ✓ Anfrage erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Member Portal */}
      <section className="px-8 py-16 lg:py-24 bg-background border-b border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_PORTAL_v1</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-normal">
              Mitgliederportal
            </h2>
          </div>

          <div className="border-2 border-black p-12 bg-white space-y-6">
            <p className="text-lg font-serif italic text-slate-700">
              Mitglieder können sich im Mitgliederportal anmelden, um auf exklusive Ressourcen, Dokumente und Netzwerktools zuzugreifen.
            </p>

            <div className="border-t border-black pt-6">
              <a
                href="#"
                className="inline-block px-6 py-3 bg-primary text-white font-sans font-semibold uppercase tracking-wider border-2 border-black transition-colors hover:opacity-90"
              >
                Zum Mitgliederportal
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
