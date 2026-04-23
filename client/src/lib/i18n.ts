/**
 * Internationalization (i18n) System
 * Supports German (de) and English (en)
 */

export type Language = 'de' | 'en';

export const translations = {
  de: {
    nav: {
      mission: 'Mission & Vision',
      about: 'Über Uns',
      expertise: 'Expertise',
      infosEvents: 'Infos & Events',
      expertsFinder: 'Experten Finden',
      membership: 'Mitgliedschaft',
      contact: 'Kontakt',
      docs: 'Dokumentation',
    },

    sidebar: {
      documentIndex: 'DOCUMENT_INDEX',
      language: 'Sprache',
      german: 'Deutsch',
      english: 'English',
      loadStatus: 'LOAD_STATUS:',
      ready: 'PRETEXT_ENGINE_READY',
    },

    docs: {
      title: 'Fachverband Wissensarchiv',
      subtitle:
        'Fachliche Dokumentation, Analysen und Designreferenzen für die Bauwerksdiagnostik. Über Wikilinks bleiben Recherche und Gestaltung systematisch miteinander verbunden.',
      searchResearch: 'Forschungsdokumente durchsuchen...',
      searchDesign: 'Designdokumente durchsuchen...',
      research: 'Forschung & Erkenntnisse',
      design: 'Design & System',
      documents: 'Dokumente',
      noResults: 'Keine Dokumente gefunden. Versuchen Sie eine andere Suchanfrage.',
      backToDocs: 'Zurück zur Dokumentation',
      relatedDocs: 'Verwandte Dokumentation',
      wikilinks: 'Wikilinks in diesem Dokument',
      wikilinksInfo: 'Dieses Dokument enthält',
      wikilinksRef: 'Wikilink-Referenz(en):',
      pending: 'Ausstehend',
      open: 'Öffnen',
      about: 'Über diese Dokumentation',
      aboutText:
        'Die obere Navigation trennt die Forschungs- und Strategiedokumente von den eigentlichen Design- und Systemreferenzen. So bleibt die Wissensbasis logisch sortiert, ohne die interne Verlinkung zu verlieren.',
      wikiLinkFormat: 'WIKILINK-FORMAT',
      wikiLinkFormatText:
        'Verwenden Sie zum Beispiel [[competitive-analysis]] oder [[independent-diagnostics-persona|Independent Diagnostics Persona]], um auf andere Dokumente zu verlinken.',
      topicsText:
        'Die Themenchips oberhalb der Suche zeigen die inhaltlichen Cluster des aktiven Bereichs. Damit lässt sich die Design-Wiki schnell vom Forschungsbestand abgrenzen.',
      researchHeading: 'Forschung & Erkenntnisse',
      designHeading: 'Design & System',
      notFound: 'Dokument nicht gefunden',
      notFoundBody: 'Das angeforderte Dokument existiert nicht.',
      area: 'Bereich',
      date: 'Datum',
      scope: 'Umfang',
      displayedAs: 'Angezeigt als',
      allTopics: 'Themen',
    },

    home: {
      missionVision: 'Die Bauwerksdiagnostik: Wissenschaftliche Analyse und Werterhaltung.',
      diagnosticMethods: 'Diagnostische Methoden',
      missionPillars: 'Säulen unserer Mission',
      marketStats: 'Marktstatistiken',
    },

    about: {
      title: 'Über Fachverband Bauwerksdiagnostik',
    },

    expertise: {
      title: 'Unsere Expertise',
      standards: 'Standards & Zertifizierungen',
    },

    membership: {
      title: 'Mitgliedschaft',
      tiers: 'Mitgliedschaftsstufen',
      apply: 'Jetzt beitreten',
    },

    contact: {
      title: 'Kontakt',
      form: 'Kontaktformular',
      send: 'Senden',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
    },

    footer: {
      downloads: 'DOWNLOADS',
      legal: 'LEGAL_RECORDS',
      impressum: 'IMPRESSUM',
      datenschutz: 'DATENSCHUTZ',
      archive: 'ARCHIVE',
    },

    common: {
      loading: 'Wird geladen...',
      error: 'Ein Fehler ist aufgetreten',
      notFound: 'Seite nicht gefunden',
      backHome: 'Zur Startseite',
    },
  },

  en: {
    nav: {
      mission: 'Mission & Vision',
      about: 'About Us',
      expertise: 'Expertise',
      infosEvents: 'Info & Events',
      expertsFinder: 'Find Experts',
      membership: 'Membership',
      contact: 'Contact',
      docs: 'Documentation',
    },

    sidebar: {
      documentIndex: 'DOCUMENT_INDEX',
      language: 'Language',
      german: 'German',
      english: 'English',
      loadStatus: 'LOAD_STATUS:',
      ready: 'PRETEXT_ENGINE_READY',
    },

    docs: {
      title: 'Fachverband Knowledge Archive',
      subtitle:
        'Professional documentation, analysis, and design references for building diagnostics. Wikilinks keep research and design systematically connected.',
      searchResearch: 'Search research documents...',
      searchDesign: 'Search design documents...',
      research: 'Research & Findings',
      design: 'Design & System',
      documents: 'documents',
      noResults: 'No documents found. Try a different search query.',
      backToDocs: 'Back to Documentation',
      relatedDocs: 'Related Documentation',
      wikilinks: 'Wikilinks in this Document',
      wikilinksInfo: 'This document contains',
      wikilinksRef: 'wikilink reference(s):',
      pending: 'Pending',
      open: 'Open',
      about: 'About this Documentation',
      aboutText:
        'The top navigation separates research and strategy material from the actual design and system references, keeping the knowledge base structured without breaking internal links.',
      wikiLinkFormat: 'WIKILINK FORMAT',
      wikiLinkFormatText:
        'Use, for example, [[competitive-analysis]] or [[independent-diagnostics-persona|Independent Diagnostics Persona]] to link to other documents.',
      topicsText:
        'The topic chips above the search field show the thematic clusters of the active section, making it easy to distinguish the design wiki from the research corpus.',
      researchHeading: 'Research & Findings',
      designHeading: 'Design & System',
      notFound: 'Document not found',
      notFoundBody: 'The requested document does not exist.',
      area: 'Area',
      date: 'Date',
      scope: 'Scope',
      displayedAs: 'Displayed as',
      allTopics: 'topics',
    },

    home: {
      missionVision: 'Building Diagnostics: Scientific Analysis and Value Preservation.',
      diagnosticMethods: 'Diagnostic Methods',
      missionPillars: 'Pillars of Our Mission',
      marketStats: 'Market Statistics',
    },

    about: {
      title: 'About Fachverband Bauwerksdiagnostik',
    },

    expertise: {
      title: 'Our Expertise',
      standards: 'Standards & Certifications',
    },

    membership: {
      title: 'Membership',
      tiers: 'Membership Tiers',
      apply: 'Join Now',
    },

    contact: {
      title: 'Contact',
      form: 'Contact Form',
      send: 'Send',
      name: 'Name',
      email: 'Email',
      message: 'Message',
    },

    footer: {
      downloads: 'DOWNLOADS',
      legal: 'LEGAL_RECORDS',
      impressum: 'IMPRINT',
      datenschutz: 'DATA PROTECTION',
      archive: 'ARCHIVE',
    },

    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      notFound: 'Page not found',
      backHome: 'Back to Home',
    },
  },
};

export function t(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}
