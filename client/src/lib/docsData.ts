/**
 * Docs data registry built from the local docs-upload sources.
 */

import { extractWikilinks } from './wikilinks';

export interface DocPage {
  id: string;
  slug: string;
  title: string;
  category: 'research' | 'design';
  categoryLabel: string;
  topic: string;
  date?: string;
  scope?: string;
  excerpt: string;
  content: string;
  relatedDocs?: Array<{ slug: string; title: string }>;
}

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
  return markdownHeading || htmlTitle || slugToTitle(slug);
}

function extractDate(content: string): string | undefined {
  return (
    content.match(/\*\*Document Date:\*\*\s*(.+)$/m)?.[1]?.trim() ||
    content.match(/\*\*Date:\*\*\s*(.+)$/m)?.[1]?.trim() ||
    content.match(/^Date:\s*(.+)$/m)?.[1]?.trim()
  );
}

function extractExcerpt(relativePath: string, content: string): string {
  if (relativePath.endsWith('.html')) {
    return `Reference mockup imported from ${slugToTitle(
      relativePath.split('/').pop()?.replace(/\.html$/i, '') ?? 'html-doc',
    )}.`;
  }

  const plain = toPlainText(content);
  return plain.length > 180 ? `${plain.slice(0, 177).trimEnd()}...` : plain;
}

function normalizeContent(relativePath: string, content: string): string {
  if (relativePath.endsWith('.html')) {
    return `# ${extractTitle(relativePath, content)}\n\nOriginal mockup source imported for wiki reference.\n\n\`\`\`html\n${content.trim()}\n\`\`\``;
  }

  return content;
}

function getCategory(relativePath: string, slug: string): 'research' | 'design' {
  if (designSlugs.has(slug)) {
    return 'design';
  }

  const folderKey = getFolderKey(relativePath);
  if (designFolders.has(folderKey)) {
    return 'design';
  }

  return 'research';
}

function getCategoryLabel(category: 'research' | 'design'): string {
  return category === 'design' ? 'Design' : 'Forschung';
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
    const content = normalizeContent(relativePath, rawContent);

    return {
      id: slug,
      slug,
      title: extractTitle(relativePath, rawContent),
      category,
      categoryLabel: getCategoryLabel(category),
      topic: getTopic(relativePath, category),
      date: extractDate(rawContent),
      scope: scopeByFolder[getFolderKey(relativePath)] ?? scopeByFolder[''],
      excerpt: extractExcerpt(relativePath, rawContent),
      content,
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
      .filter((slug) => titleBySlug.has(slug) && slug !== doc.slug)
      .map((relatedSlug) => ({
        slug: relatedSlug,
        title: titleBySlug.get(relatedSlug) ?? slugToTitle(relatedSlug),
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
