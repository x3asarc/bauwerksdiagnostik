/**
 * Internationalization (i18n) System
 * Supports German (de) and English (en)
 */

export type Language = 'de' | 'en';

export const translations = {
  de: {
    // Navigation
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

    // Sidebar
    sidebar: {
      documentIndex: 'DOCUMENT_INDEX',
      language: 'Sprache',
      german: 'Deutsch',
      english: 'English',
    },

    // Docs
    docs: {
      title: 'Fachverband Knowledge Base',
      subtitle: 'Forschung, Analysen und technische Dokumentation für Bauwerksdiagnostik-Fachleute. Querverweise mit Wikilinks für nahtlose Navigation.',
      search: 'Dokumentation durchsuchen...',
      allDocs: 'Alle Dokumente',
      research: 'Forschung & Erkenntnisse',
      design: 'Design & System',
      noResults: 'Keine Dokumente gefunden. Versuchen Sie eine andere Suchanfrage.',
      backToDocs: 'Zurück zur Dokumentation',
      relatedDocs: 'Verwandte Dokumentation',
      wikilinks: 'Wikilinks in diesem Dokument',
      wikilinksInfo: 'Dieses Dokument enthält',
      wikilinksRef: 'Wikilink-Referenz(en):',
      pending: 'Ausstehend',
      open: 'Öffnen',
      about: 'Über diese Dokumentation',
      aboutText: 'Diese Knowledge Base enthält Forschung, Analysen und technische Dokumentation für Fachverband Bauwerksdiagnostik. Alle Dokumente sind mit Wikilinks vernetzt.',
      wikiLinkFormat: 'WIKILINK-FORMAT',
      wikiLinkFormatText: 'Verwenden Sie [[page-name]] oder [[page-name|Display Text]] um auf andere Dokumente zu verlinken.',
      researchDesc: 'Wettbewerbsanalyse, Marktforschung, ICP-Persona, Marktintelligenz und Branchenstandardlandschaft. Diese Dokumente bilden die Grundlage für alle Designentscheidungen.',
      designDesc: 'Designsystempläne, Farbrichtungen, visuelle Benchmarks, Barrierefreiheitsberichte und ästhetische Strategien. Alle visuellen und interaktiven Richtlinien für die Fachverband-Plattform.',
    },

    // Home
    home: {
      missionVision: 'Die Bauwerksdiagnostik: Wissenschaftliche Analyse und Werterhaltung.',
      diagnosticMethods: 'Diagnostische Methoden',
      missionPillars: 'Säulen unserer Mission',
      marketStats: 'Marktstatistiken',
    },

    // About
    about: {
      title: 'Über Fachverband Bauwerksdiagnostik',
    },

    // Expertise
    expertise: {
      title: 'Unsere Expertise',
      standards: 'Standards & Zertifizierungen',
    },

    // Membership
    membership: {
      title: 'Mitgliedschaft',
      tiers: 'Mitgliedschaftsstufen',
      apply: 'Jetzt beitreten',
    },

    // Contact
    contact: {
      title: 'Kontakt',
      form: 'Kontaktformular',
      send: 'Senden',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
    },

    // Footer
    footer: {
      downloads: 'DOWNLOADS',
      legal: 'LEGAL_RECORDS',
      impressum: 'IMPRESSUM',
      datenschutz: 'DATENSCHUTZ',
      archive: 'ARCHIVE',
    },

    // Common
    common: {
      loading: 'Wird geladen...',
      error: 'Ein Fehler ist aufgetreten',
      notFound: 'Seite nicht gefunden',
      backHome: 'Zur Startseite',
    },
  },

  en: {
    // Navigation
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

    // Sidebar
    sidebar: {
      documentIndex: 'DOCUMENT_INDEX',
      language: 'Language',
      german: 'Deutsch',
      english: 'English',
    },

    // Docs
    docs: {
      title: 'Fachverband Knowledge Base',
      subtitle: 'Research, analysis, and technical documentation for building diagnostics professionals. Cross-referenced with wikilinks for seamless navigation.',
      search: 'Search documentation...',
      allDocs: 'All Documents',
      research: 'Research & Findings',
      design: 'Design & System',
      noResults: 'No documents found. Try a different search query.',
      backToDocs: 'Back to Documentation',
      relatedDocs: 'Related Documentation',
      wikilinks: 'Wikilinks in this Document',
      wikilinksInfo: 'This document contains',
      wikilinksRef: 'wikilink reference(s):',
      pending: 'Pending',
      open: 'Open',
      about: 'About this Documentation',
      aboutText: 'This Knowledge Base contains research, analysis, and technical documentation for Fachverband Bauwerksdiagnostik. All documents are interconnected with wikilinks.',
      wikiLinkFormat: 'WIKILINK FORMAT',
      wikiLinkFormatText: 'Use [[page-name]] or [[page-name|Display Text]] to link to other documents.',
      researchDesc: 'Competitive analysis, market research, ICP persona, market intelligence, and industry standards landscape. These documents form the foundation for all design decisions.',
      designDesc: 'Design system plans, color directions, visual benchmarks, accessibility reports, and aesthetic strategies. All visual and interactive guidelines for the Fachverband platform.',
    },

    // Home
    home: {
      missionVision: 'Building Diagnostics: Scientific Analysis and Value Preservation.',
      diagnosticMethods: 'Diagnostic Methods',
      missionPillars: 'Pillars of Our Mission',
      marketStats: 'Market Statistics',
    },

    // About
    about: {
      title: 'About Fachverband Bauwerksdiagnostik',
    },

    // Expertise
    expertise: {
      title: 'Our Expertise',
      standards: 'Standards & Certifications',
    },

    // Membership
    membership: {
      title: 'Membership',
      tiers: 'Membership Tiers',
      apply: 'Join Now',
    },

    // Contact
    contact: {
      title: 'Contact',
      form: 'Contact Form',
      send: 'Send',
      name: 'Name',
      email: 'Email',
      message: 'Message',
    },

    // Footer
    footer: {
      downloads: 'DOWNLOADS',
      legal: 'LEGAL_RECORDS',
      impressum: 'IMPRESSUM',
      datenschutz: 'DATA PROTECTION',
      archive: 'ARCHIVE',
    },

    // Common
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
