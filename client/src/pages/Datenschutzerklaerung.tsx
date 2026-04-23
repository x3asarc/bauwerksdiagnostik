import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Datenschutzerklaerung() {
  const { language } = useLanguage();
  const page = language === 'de'
    ? {
        title: 'Datenschutzerklärung',
        sections: [
          ['1. Datenschutz auf einen Blick', 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln personenbezogene Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.'],
          ['2. Allgemeine Hinweise', 'Diese Datenschutzerklärung gilt für die Website des Fachverband Bauwerksdiagnostik e.V. und informiert über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten.'],
          ['3. Verantwortliche Stelle', 'Fachverband Bauwerksdiagnostik e.V.\nWerdauer Straße 1-3\n01069 Dresden\nDeutschland\n\nTelefon: 0351 - 799926-60\nE-Mail: info@bauwerksdiagnostik.de'],
          ['4. Erhebung und Verarbeitung personenbezogener Daten', 'Personenbezogene Daten werden nur erhoben, wenn Sie uns diese mitteilen, etwa über ein Kontaktformular oder bei der Anmeldung zu einem Newsletter.'],
          ['5. Kontaktformular', 'Wenn Sie uns über das Kontaktformular schreiben, speichern wir Ihre Angaben zur Bearbeitung der Anfrage und für mögliche Rückfragen.'],
          ['6. Ihre Rechte', 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch sowie Datenübertragbarkeit.'],
          ['7. Datensicherheit', 'Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Verlust, Zerstörung oder Veränderung zu schützen.'],
          ['8. Speicherdauer', 'Ihre Daten werden nur so lange gespeichert, wie dies für die jeweiligen Verarbeitungszwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.'],
          ['9. Kontakt zum Datenschutz', 'Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter info@bauwerksdiagnostik.de'],
        ],
        footer: 'Stand: April 2026',
      }
    : {
        title: 'Privacy Policy',
        sections: [
          ['1. Data protection at a glance', 'The operators of this website take the protection of your personal data very seriously. We treat personal data confidentially and in accordance with applicable data protection law.'],
          ['2. General information', 'This privacy policy applies to the website of Fachverband Bauwerksdiagnostik e.V. and explains the nature, scope, and purpose of personal data processing.'],
          ['3. Controller', 'Fachverband Bauwerksdiagnostik e.V.\nWerdauer Strasse 1-3\n01069 Dresden\nGermany\n\nPhone: 0351 - 799926-60\nEmail: info@bauwerksdiagnostik.de'],
          ['4. Collection and processing of personal data', 'Personal data is collected only when you provide it to us, for example through a contact form or newsletter registration.'],
          ['5. Contact form', 'If you send us a message through the contact form, we store the data you provide to process your request and possible follow-up questions.'],
          ['6. Your rights', 'You have the right to access, rectify, erase, restrict processing, object to processing, and receive your data in a portable format.'],
          ['7. Data security', 'We take appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, destruction, or alteration.'],
          ['8. Retention period', 'Your data is stored only as long as necessary for the relevant processing purposes or as required by statutory retention obligations.'],
          ['9. Privacy contact', 'For any privacy-related questions, please contact info@bauwerksdiagnostik.de'],
        ],
        footer: 'Last updated: April 2026',
      };

  return (
    <Layout>
      <section className="border-b border-black bg-white px-8 py-16 lg:py-24"><div className="mx-auto max-w-4xl space-y-8"><div className="space-y-4"><p className="section-label">LEGAL // PRIVACY</p><h1 style={{ fontFamily: "'Public Sans', sans-serif", fontSize: '84px', fontWeight: 700, lineHeight: '88px', letterSpacing: '-0.025em' }} className="leading-tight">{page.title}</h1></div></div></section>
      <section className="bg-background px-8 py-16 lg:py-24"><div className="mx-auto max-w-4xl space-y-8 text-sm">{page.sections.map(([title, body]) => <div key={title} className="space-y-4 border-t border-black pt-6 first:border-t-0 first:pt-0"><h2 className="text-2xl font-sans font-bold uppercase tracking-wider text-foreground">{title}</h2><p className="whitespace-pre-line text-slate-700">{body}</p></div>)}<div className="border-t border-black pt-6 text-xs text-slate-600">{page.footer}</div></div></section>
    </Layout>
  );
}
