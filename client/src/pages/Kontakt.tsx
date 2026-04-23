import { useState } from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const copy = {
  de: {
    heroTitle: 'Zentrale Anlaufstelle für Experten und Fachthemen.',
    heroBody: 'Kontaktieren Sie uns zu Mitgliedschaft, Zertifizierung, Standards oder anderen Anliegen rund um den Verband.',
    infoTitle: 'Kontaktinformationen',
    phone: 'Telefon',
    email: 'E-Mail',
    address: 'Adresse',
    formTitle: 'Anfrage senden',
    labels: { name: 'Name', email: 'E-Mail', subject: 'Betreff', message: 'Nachricht' },
    subjectPlaceholder: '-- Wählen Sie ein Thema --',
    subjects: [
      ['membership', 'Mitgliedschaft'],
      ['certification', 'Zertifizierung'],
      ['standards', 'Standards und Normen'],
      ['partnership', 'Partnerschaft'],
      ['other', 'Sonstiges'],
    ],
    privacy: 'Ich akzeptiere die Datenschutzerklärung und stimme der Verarbeitung meiner Daten zu.',
    submit: 'Anfrage senden',
    success: '✓ Anfrage erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.',
    portalTitle: 'Mitgliederportal',
    portalBody: 'Mitglieder können sich im Portal anmelden, um auf exklusive Ressourcen, Dokumente und Netzwerktools zuzugreifen.',
    portalCta: 'Zum Mitgliederportal',
  },
  en: {
    heroTitle: 'Central contact point for experts and technical topics.',
    heroBody: 'Contact us about membership, certification, standards, or any other association-related topic.',
    infoTitle: 'Contact Information',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    formTitle: 'Send Inquiry',
    labels: { name: 'Name', email: 'Email', subject: 'Subject', message: 'Message' },
    subjectPlaceholder: '-- Select a topic --',
    subjects: [
      ['membership', 'Membership'],
      ['certification', 'Certification'],
      ['standards', 'Standards and regulations'],
      ['partnership', 'Partnership'],
      ['other', 'Other'],
    ],
    privacy: 'I accept the privacy policy and agree to the processing of my data.',
    submit: 'Send inquiry',
    success: '✓ Inquiry sent successfully. We will get back to you shortly.',
    portalTitle: 'Member Portal',
    portalBody: 'Members can sign in to access exclusive resources, documents, and network tools.',
    portalCta: 'Go to member portal',
  },
} as const;

export default function Kontakt() {
  const { language } = useLanguage();
  const page = copy[language];
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', privacy: false });
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="border-b border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <p className="section-label">SEC_07</p>
            <h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">{page.heroTitle}</h1>
          </div>
          <p className="max-w-3xl text-lg text-slate-700 lg:text-xl">{page.heroBody}</p>
        </div>
      </section>

      <section className="bg-background px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_CONTACT_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.infoTitle}</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-4 border-2 border-black bg-white p-12">
              <div className="flex items-center gap-3"><Phone className="h-6 w-6 text-primary" /><h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">{page.phone}</h3></div>
              <a href="tel:+493517999260" className="text-2xl text-primary hover:underline">0351 - 799926-60</a>
            </div>
            <div className="space-y-4 border-2 border-black bg-white p-12">
              <div className="flex items-center gap-3"><Mail className="h-6 w-6 text-primary" /><h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">{page.email}</h3></div>
              <a href="mailto:info@bauwerksdiagnostik.de" className="break-all text-lg text-primary hover:underline">info@bauwerksdiagnostik.de</a>
            </div>
            <div className="space-y-4 border-2 border-black bg-white p-12">
              <div className="flex items-center gap-3"><MapPin className="h-6 w-6 text-primary" /><h3 className="text-lg font-sans font-bold uppercase tracking-wider text-foreground">{page.address}</h3></div>
              <div className="text-lg text-foreground">Werdauer Straße 1-3<br />01069 Dresden<br />Germany</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black bg-white px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_FORM_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.formTitle}</h2>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (formData.privacy) {
                setSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '', privacy: false });
                setTimeout(() => setSubmitted(false), 3000);
              }
            }}
            className="space-y-6"
          >
            {(['name', 'email'] as const).map((field) => (
              <div key={field} className="space-y-2">
                <label className="section-label">{page.labels[field]}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={(event) => setFormData((prev) => ({ ...prev, [field]: event.target.value }))}
                  required
                  className="w-full border-2 border-black bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            ))}
            <div className="space-y-2">
              <label className="section-label">{page.labels.subject}</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={(event) => setFormData((prev) => ({ ...prev, subject: event.target.value }))}
                required
                className="w-full border-2 border-black bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">{page.subjectPlaceholder}</option>
                {page.subjects.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="section-label">{page.labels.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                required
                rows={6}
                className="w-full resize-none border-2 border-black bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" checked={formData.privacy} onChange={(event) => setFormData((prev) => ({ ...prev, privacy: event.target.checked }))} required className="mt-1 h-5 w-5 cursor-pointer border-2 border-black bg-white" />
              <label className="cursor-pointer text-sm text-slate-700">{page.privacy}</label>
            </div>
            <div className="pt-4">
              <button type="submit" className="border-2 border-black bg-primary px-8 py-3 font-sans font-semibold uppercase tracking-wider text-white transition-colors hover:opacity-90">{page.submit}</button>
            </div>
            {submitted && <div className="border-2 border-secondary bg-green-50 p-4"><p className="text-sm font-sans font-semibold uppercase tracking-wider text-secondary">{page.success}</p></div>}
          </form>
        </div>
      </section>

      <section className="border-b border-black bg-background px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="section-label">DOC: BWD_PORTAL_v1</p>
            <h2 className="text-4xl font-serif font-normal lg:text-5xl">{page.portalTitle}</h2>
          </div>
          <div className="space-y-6 border-2 border-black bg-white p-12">
            <p className="text-lg text-slate-700">{page.portalBody}</p>
            <div className="border-t border-black pt-6">
              <a href="#" className="inline-block border-2 border-black bg-primary px-6 py-3 font-sans font-semibold uppercase tracking-wider text-white transition-colors hover:opacity-90">{page.portalCta}</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
