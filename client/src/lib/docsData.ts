/**
 * Docs Data Structure
 * Builds the wiki index from the imported ICP overhaul source files.
 */

import { extractWikilinks } from './wikilinks';

export interface DocPage {
  id: string;
  slug: string;
  title: string;
  date?: string;
  scope?: string;
  excerpt: string;
  content: string;
  relatedDocs?: Array<{ slug: string; title: string }>;
}

const rawDocs = import.meta.glob('../../../docs-upload/icp-design-overhaul/**/*.{md,txt,html}', {
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
  '': 'ICP design overhaul synthesis and planning',
  'building-diagnostics-market-research': 'ICP market research and target practitioner framing',
  'practitioner-experience-audit': 'Trust, benchmark, and experience audit for the practitioner audience',
  'pretext-editorial-alignment': 'Editorial alignment and knowledge-system fit for the future wiki',
  'visual-system-directions': 'Visual direction, accessibility, and color system exploration',
  'visual-system-directions/homepage-direction-mockups': 'Homepage mockup references for the wiki visual language',
  'design-system-specifications': 'Design system specifications',
  'rollout-documentation': 'Rollout documentation',
};

const sortWeightByFolder: Record<string, number> = {
  '': 0,
  'building-diagnostics-market-research': 1,
  'practitioner-experience-audit': 2,
  'visual-system-directions': 3,
  'visual-system-directions/homepage-direction-mockups': 4,
  'pretext-editorial-alignment': 5,
  'design-system-specifications': 6,
  'rollout-documentation': 7,
};

function slugToTitle(slug: string): string {
  return titleOverrides[slug] ?? slug.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

function getRelativeDocPath(path: string): string {
  return path.split('docs-upload/icp-design-overhaul/')[1]?.replace(/\\/g, '/') ?? path.replace(/\\/g, '/');
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

type DocSeed = Omit<DocPage, 'relatedDocs'>;

const docSeeds: DocSeed[] = Object.entries(rawDocs)
  .map(([path, rawContent]) => {
    const relativePath = getRelativeDocPath(path);
    const slug = relativePath.split('/').pop()?.replace(/\.(md|txt|html)$/i, '') ?? relativePath;
    const scope = scopeByFolder[getFolderKey(relativePath)] ?? scopeByFolder[''];
    const content = normalizeContent(relativePath, rawContent);

    return {
      id: slug,
      slug,
      title: extractTitle(relativePath, rawContent),
      date: extractDate(rawContent),
      scope,
      excerpt: extractExcerpt(relativePath, rawContent),
      content,
    };
  })
  .sort((a, b) => {
    const aPath = Object.keys(rawDocs).find((path) => path.includes(`${a.slug}.`)) ?? a.slug;
    const bPath = Object.keys(rawDocs).find((path) => path.includes(`${b.slug}.`)) ?? b.slug;
    const aFolder = getFolderKey(getRelativeDocPath(aPath));
    const bFolder = getFolderKey(getRelativeDocPath(bPath));
    const weightDiff = (sortWeightByFolder[aFolder] ?? 99) - (sortWeightByFolder[bFolder] ?? 99);
    return weightDiff !== 0 ? weightDiff : a.title.localeCompare(b.title);
  });

const titleBySlug = new Map(docSeeds.map((doc) => [doc.slug, doc.title]));

export const docsPages: Record<string, DocPage> = Object.fromEntries(
  docSeeds.map((doc) => {
    const relatedDocs = Array.from(new Set(extractWikilinks(doc.content)))
      .filter((slug) => titleBySlug.has(slug) && slug !== doc.slug)
      .map((slug) => ({
        slug,
        title: titleBySlug.get(slug) ?? slugToTitle(slug),
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

/**
 * Get all available doc slugs
 */
export function getAvailableDocSlugs(): string[] {
  return Object.keys(docsPages);
}

/**
 * Get a doc page by slug
 */
export function getDocPage(slug: string): DocPage | null {
  return docsPages[slug] || null;
}

/**
 * Get all doc pages
 */
export function getAllDocPages(): DocPage[] {
  return Object.values(docsPages);
}
