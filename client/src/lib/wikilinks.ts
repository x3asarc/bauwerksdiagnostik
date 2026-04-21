/**
 * Wikilink Parser Utility
 * Converts [[link-text|Display Text]] or [[link-text]] to internal navigation links
 */

export interface WikilinkMatch {
  original: string;
  linkText: string;
  displayText: string;
}

/**
 * Parse wikilinks from text
 * Supports: [[page-name]] or [[page-name|Display Text]]
 */
export function parseWikilinks(text: string): WikilinkMatch[] {
  const wikiLinkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  const matches: WikilinkMatch[] = [];
  let match;

  while ((match = wikiLinkRegex.exec(text)) !== null) {
    const linkText = match[1].trim();
    const displayText = match[2]?.trim() || linkText;
    
    matches.push({
      original: match[0],
      linkText: linkText.toLowerCase().replace(/\s+/g, '-'),
      displayText,
    });
  }

  return matches;
}

/**
 * Convert markdown text with wikilinks to HTML
 * Returns JSX-compatible format with wikilink placeholders
 */
export function renderWikilinksInMarkdown(markdown: string): string {
  const wikiLinkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  
  return markdown.replace(wikiLinkRegex, (match, linkText, displayText) => {
    const slug = linkText.trim().toLowerCase().replace(/\s+/g, '-');
    const text = (displayText || linkText).trim();
    return `[${text}](/docs/${slug})`;
  });
}

/**
 * Extract all wikilink references from markdown
 */
export function extractWikilinks(markdown: string): string[] {
  const matches = parseWikilinks(markdown);
  return matches.map(m => m.linkText);
}

/**
 * Check if a doc slug exists in the docs collection
 */
export function isValidWikilink(slug: string, availableDocs: string[]): boolean {
  return availableDocs.includes(slug);
}
