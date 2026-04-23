import type { Language } from './i18n';
import { extractWikilinks } from './wikilinks';

export interface DocPage {
  id: string;
  slug: string;
  title: string;
  category: 'research' | 'design';
  topic: string;
  date?: string;
  scope?: string;
  excerpt: string;
  content: string;
  relatedDocs?: Array<{ slug: string; title: string }>;
}

const germanDocReplacements: Array<[string, string]> = [
  ['Deep Customer Research & Buyer Profile', 'Vertiefte Kundenforschung und Käuferprofil'],
  ['Executive Summary', 'Zusammenfassung'],
  ['Overview', 'Überblick'],
  ['Purpose', 'Zweck'],
  ['Context', 'Kontext'],
  ['Status', 'Status'],
  ['Primary Research Complete', 'Primärforschung abgeschlossen'],
  ['Color Direction Concepts', 'Farbkonzepte'],
  ['Visual Palette Exploration', 'Visuelle Palettenanalyse'],
  ['Use Cases', 'Anwendungsfälle'],
  ['Accessibility Notes', 'Hinweise zur Barrierefreiheit'],
  ['Characteristics', 'Merkmale'],
  ['Philosophy', 'Leitidee'],
  ['Requirements', 'Anforderungen'],
  ['Primary Job Titles & Roles', 'Zentrale Berufsbezeichnungen und Rollen'],
  ['Experience Levels', 'Erfahrungsstufen'],
  ['Company Types', 'Unternehmensformen'],
  ['Where ICPs Work', 'Wo die ICPs arbeiten'],
  ['Core practitioners', 'Kernzielgruppe'],
  ['Supporting roles', 'Einflussnehmende Nebenrollen'],
  ['Entry-level', 'Einstiegsebene'],
  ['Mid-level', 'Mittelstufe'],
  ['Senior-level', 'Senior-Ebene'],
  ['Independent Consulting Firms', 'Unabhängige Beratungsbüros'],
  ['Medium Engineering Firms', 'Mittelgroße Ingenieurbüros'],
  ['Certification & Testing Bodies', 'Zertifizierungs- und Prüfstellen'],
  ['Large Construction/Real Estate Groups', 'Große Bau- und Immobiliengruppen'],
  ['Solo Practitioners', 'Einzelpraktiker'],
  ['Market Intelligence', 'Marktintelligenz'],
  ['Competitive Analysis', 'Wettbewerbsanalyse'],
  ['standards landscape', 'Normenlandschaft'],
  ['Design System', 'Designsystem'],
  ['design direction', 'Gestaltungsrichtung'],
  ['Design Direction', 'Gestaltungsrichtung'],
  ['Color Direction', 'Farbrichtung'],
  ['color direction', 'Farbrichtung'],
  ['Color Psychology', 'Farbpsychologie'],
  ['Trust and Competence', 'Vertrauen und Kompetenz'],
  ['Professional Trust', 'Professionelles Vertrauen'],
  ['Technical Authority', 'Technische Autorität'],
  ['Clinical Precision', 'Klinische Präzision'],
  ['Grounded Expertise', 'Geerdete Fachkompetenz'],
  ['Homepage Mockup', 'Homepage-Mockup'],
  ['Mockup Comparison Guide', 'Mockup-Vergleichsleitfaden'],
  ['Building Diagnostics', 'Bauwerksdiagnostik'],
  ['building diagnostics', 'Bauwerksdiagnostik'],
  ['Research', 'Forschung'],
  ['research', 'Forschung'],
  ['Findings', 'Erkenntnisse'],
  ['findings', 'Erkenntnisse'],
  ['Alignment', 'Abstimmung'],
  ['alignment', 'Abstimmung'],
  ['Summary', 'Zusammenfassung'],
  ['summary', 'Zusammenfassung'],
  ['Document Date', 'Dokumentdatum'],
  ['Project', 'Projekt'],
  ['Date', 'Datum'],
  ['Original mockup source imported for wiki reference.', 'Originale Mockup-Quelle zur Referenz in die Wiki importiert.'],
];

const rawDocs = import.meta.glob('../../../docs-upload/**/*.{md,txt,html}', {
  eager: true,
  import: 'default',
  query: '?raw',
}) as Record<string, string>;

const titleOverrides: Record<string, string> = {
  'building-diagnostics-design-system-plan': 'Building Diagnostics Design System Plan',
  'design-direction-completion-summary': 'Design Direction Completion Summary',
  'building-diagnostics-competitive-analysis': 'Building Diagnostics Competitive Analysis',
  'building-diagnostics-standards-landscape': 'Building Diagnostics Standards Landscape',
  'dach-building-diagnostics-market-intelligence': 'DACH Building Diagnostics Market Intelligence',
  'independent-diagnostics-persona': 'Independent Diagnostics Persona',
  'trusted-technical-brand-voice': 'Trusted Technical Brand Voice',
  'building-diagnostics-visual-benchmark': 'Building Diagnostics Visual Benchmark',
  'practitioner-site-experience-audit': 'Practitioner Site Experience Audit',
  'trusted-association-design-systems-review': 'Trusted Association Design Systems Review',
  'expert-alignment-deep-dive': 'Expert Alignment Deep Dive',
  'pretext-alignment-summary': 'Pretext Alignment Summary',
  'pretext-capability-review': 'Pretext Capability Review',
  'pretext-icp-alignment': 'Pretext ICP Alignment',
  'accessibility-compliance-report': 'Accessibility Compliance Report',
  'building-diagnostics-color-directions': 'Building Diagnostics Color Directions',
  'color-direction-summary': 'Color Direction Summary',
  'dach-diagnostics-palette-concepts': 'DACH Diagnostics Palette Concepts',
  'direction-selection-status': 'Direction Selection Status',
  'professional-trust-aesthetic-strategy': 'Professional Trust Aesthetic Strategy',
  'trust-and-competence-color-psychology': 'Trust and Competence Color Psychology',
  'clinical-precision-homepage-mockup': 'Clinical Precision Homepage Mockup',
  'grounded-expertise-homepage-mockup': 'Grounded Expertise Homepage Mockup',
  'mockup-comparison-guide': 'Mockup Comparison Guide',
  'technical-authority-homepage-mockup': 'Technical Authority Homepage Mockup',
};

const scopeByFolder: Record<string, string> = {
  '': 'Allgemeine Referenzdokumentation für die Fachverbands-Wiki',
  'icp-design-overhaul': 'Übergreifende ICP- und Wiki-Planung',
  'icp-design-overhaul/building-diagnostics-market-research': 'ICP-Marktforschung und Zielgruppenschärfung',
  'icp-design-overhaul/practitioner-experience-audit': 'Audit von Vertrauen, Benchmarks und Nutzererwartungen',
  'icp-design-overhaul/pretext-editorial-alignment': 'Inhaltliche und redaktionelle Ausrichtung des Wissenssystems',
  'icp-design-overhaul/visual-system-directions': 'Visuelle Richtungen, Farbstrategien und Zugänglichkeit',
  'icp-design-overhaul/visual-system-directions/homepage-direction-mockups': 'Mockups und Richtungsentwürfe für das Frontend',
  'icp-design-overhaul/design-system-specifications': 'Designsystem-Spezifikationen',
  'icp-design-overhaul/rollout-documentation': 'Rollout- und Implementierungsdokumentation',
};

const designFolders = new Set([
  'icp-design-overhaul/visual-system-directions',
  'icp-design-overhaul/visual-system-directions/homepage-direction-mockups',
  'icp-design-overhaul/design-system-specifications',
  'icp-design-overhaul/rollout-documentation',
]);

const designSlugs = new Set([
  'building-diagnostics-design-system-plan',
  'design-direction-completion-summary',
  'building-diagnostics-visual-benchmark',
  'practitioner-site-experience-audit',
  'trusted-association-design-systems-review',
  'accessibility-compliance-report',
  'building-diagnostics-color-directions',
  'color-direction-summary',
  'dach-diagnostics-palette-concepts',
  'direction-selection-status',
  'professional-trust-aesthetic-strategy',
  'trust-and-competence-color-psychology',
  'clinical-precision-homepage-mockup',
  'grounded-expertise-homepage-mockup',
  'mockup-comparison-guide',
  'technical-authority-homepage-mockup',
]);

const encodingRepairs: Array<[string, string]> = [
  ['â€“', '–'],
  ['â€”', '—'],
  ['â€¢', '•'],
  ['â†’', '→'],
  ['â†', '←'],
  ['âœ“', '✓'],
  ['Ã¤', 'ä'],
  ['Ã¶', 'ö'],
  ['Ã¼', 'ü'],
  ['Ã„', 'Ä'],
  ['Ã–', 'Ö'],
  ['Ãœ', 'Ü'],
  ['ÃŸ', 'ß'],
  ['TÃœV', 'TÜV'],
  ['SÃœD', 'SÜD'],
  ['T�V', 'TÜV'],
  ['S�D', 'SÜD'],
  ['f�r', 'für'],
  ['fÃ¼r', 'für'],
  ['gr��', 'größ'],
  ['grÃ¶ÃŸ', 'größ'],
  ['Pr�f', 'Prüf'],
  ['PrÃ¼f', 'Prüf'],
  ['Th�ringen', 'Thüringen'],
  ['ThÃ¼ringen', 'Thüringen'],
  ['ThÃ¼r', 'Thür'],
  ['K�ln', 'Köln'],
  ['M�nchen', 'München'],
  ['Baden-W�rttemberg', 'Baden-Württemberg'],
  ['Ãœber', 'Über'],
  ['Ã¼ber', 'über'],
  ['�ber', 'Über'],
  ['Ã–ff', 'Öff'],
  ['�ff', 'Öff'],
  ['Sch�den', 'Schäden'],
  ['Schimmelsch�den', 'Schimmelschäden'],
  ['N�he', 'Nähe'],
  ['Ã¤ng', 'äng'],
  ['Ã¼r', 'ür'],
  ['Ã¼s', 'üs'],
  ['Ã¼n', 'ün'],
  ['Ã¤r', 'är'],
  ['Ã¤u', 'äu'],
  ['Ã¶s', 'ös'],
  ['Ã¶r', 'ör'],
  ['Ãœbergreifende', 'Übergreifende'],
];

function repairMojibake(value: string): string {
  if (!value) {
    return value;
  }

  let repaired = value;
  for (const [from, to] of encodingRepairs) {
    repaired = repaired.replaceAll(from, to);
  }
  return repaired;
}

function translateDocText(value: string, language: Language): string {
  if (language !== 'de' || !value) {
    return value;
  }

  return germanDocReplacements.reduce((result, [from, to]) => result.replaceAll(from, to), value);
}

function slugToTitle(slug: string): string {
  return titleOverrides[slug] ?? slug.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

function humanizeSegment(value: string): string {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function getRelativeDocPath(path: string): string {
  return path.split('docs-upload/')[1]?.replace(/\\/g, '/') ?? path.replace(/\\/g, '/');
}

function getFolderKey(relativePath: string): string {
  const parts = relativePath.split('/');
  return parts.length > 1 ? parts.slice(0, -1).join('/') : '';
}

function toPlainText(content: string): string {
  return content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/[#>*_`-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractTitle(relativePath: string, content: string): string {
  const slug = relativePath.split('/').pop()?.replace(/\.(md|txt|html)$/i, '') ?? relativePath;
  const markdownHeading = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const htmlTitle = content.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
  return repairMojibake(markdownHeading || htmlTitle || slugToTitle(slug));
}

function extractDate(content: string): string | undefined {
  const rawDate =
    content.match(/\*\*Document Date:\*\*\s*(.+)$/m)?.[1]?.trim() ||
    content.match(/\*\*Date:\*\*\s*(.+)$/m)?.[1]?.trim() ||
    content.match(/^Date:\s*(.+)$/m)?.[1]?.trim();

  return rawDate ? repairMojibake(rawDate) : undefined;
}

function extractExcerpt(relativePath: string, content: string): string {
  if (relativePath.endsWith('.html')) {
    return `Reference mockup imported from ${slugToTitle(
      relativePath.split('/').pop()?.replace(/\.html$/i, '') ?? 'html-doc',
    )}.`;
  }

  const plain = repairMojibake(toPlainText(content));
  return plain.length > 180 ? `${plain.slice(0, 177).trimEnd()}...` : plain;
}

function normalizeContent(relativePath: string, content: string): string {
  if (relativePath.endsWith('.html')) {
    return `# ${extractTitle(relativePath, content)}\n\nOriginal mockup source imported for wiki reference.\n\n\`\`\`html\n${repairMojibake(content.trim())}\n\`\`\``;
  }

  return repairMojibake(content);
}

function getCategory(relativePath: string, slug: string): 'research' | 'design' {
  if (designSlugs.has(slug)) {
    return 'design';
  }

  if (designFolders.has(getFolderKey(relativePath))) {
    return 'design';
  }

  return 'research';
}

function getTopic(relativePath: string, category: 'research' | 'design'): string {
  const folderKey = getFolderKey(relativePath);

  if (!folderKey) {
    return category === 'design' ? 'Designsystem' : 'Allgemeine Dokumentation';
  }

  return humanizeSegment(folderKey.split('/').at(-1) ?? folderKey);
}

type DocSeed = Omit<DocPage, 'relatedDocs'>;

const docSeeds: DocSeed[] = Object.entries(rawDocs)
  .map(([path, rawContent]) => {
    const relativePath = getRelativeDocPath(path);
    const slug = relativePath.split('/').pop()?.replace(/\.(md|txt|html)$/i, '') ?? relativePath;
    const category = getCategory(relativePath, slug);
    const normalizedRawContent = repairMojibake(rawContent);

    return {
      id: slug,
      slug,
      title: extractTitle(relativePath, normalizedRawContent),
      category,
      topic: repairMojibake(getTopic(relativePath, category)),
      date: extractDate(normalizedRawContent),
      scope: repairMojibake(scopeByFolder[getFolderKey(relativePath)] ?? scopeByFolder['']),
      excerpt: extractExcerpt(relativePath, normalizedRawContent),
      content: normalizeContent(relativePath, normalizedRawContent),
    };
  })
  .sort((a, b) => {
    const categoryWeight = a.category.localeCompare(b.category);
    if (categoryWeight !== 0) {
      return categoryWeight;
    }

    const topicWeight = a.topic.localeCompare(b.topic);
    if (topicWeight !== 0) {
      return topicWeight;
    }

    return a.title.localeCompare(b.title);
  });

const titleBySlug = new Map(docSeeds.map((doc) => [doc.slug, doc.title]));

export const docsPages: Record<string, DocPage> = Object.fromEntries(
  docSeeds.map((doc) => {
    const relatedDocs = Array.from(new Set(extractWikilinks(doc.content)))
      .filter((linkedSlug) => titleBySlug.has(linkedSlug) && linkedSlug !== doc.slug)
      .map((linkedSlug) => ({
        slug: linkedSlug,
        title: titleBySlug.get(linkedSlug) ?? slugToTitle(linkedSlug),
      }));

    return [
      doc.slug,
      {
        ...doc,
        relatedDocs,
      },
    ];
  }),
);

export function getAvailableDocSlugs(): string[] {
  return Object.keys(docsPages);
}

export function getDocsByCategory(category: 'research' | 'design'): DocPage[] {
  return Object.values(docsPages).filter((doc) => doc.category === category);
}

export function getDocPage(slug: string): DocPage | null {
  return docsPages[slug] || null;
}

export function getAllDocPages(): DocPage[] {
  return Object.values(docsPages);
}

export function localizeDocPage(doc: DocPage, language: Language): DocPage {
  if (language === 'en') {
    return doc;
  }

  return {
    ...doc,
    title: translateDocText(doc.title, language),
    topic: translateDocText(doc.topic, language),
    date: doc.date ? translateDocText(doc.date, language) : doc.date,
    scope: doc.scope ? translateDocText(doc.scope, language) : doc.scope,
    excerpt: translateDocText(doc.excerpt, language),
    content: translateDocText(doc.content, language),
    relatedDocs: doc.relatedDocs?.map((item) => ({ ...item, title: translateDocText(item.title, language) })),
  };
}
