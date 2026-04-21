/**
 * Docs Data Structure
 * Contains all documentation content with wikilink support
 */

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

export const docsPages: Record<string, DocPage> = {
  'competitive-analysis': {
    id: 'competitive-analysis',
    slug: 'competitive-analysis',
    title: 'Competitive Analysis',
    date: 'April 2, 2026',
    scope: 'Direct and indirect competitors in German/EU building diagnostics, professional associations, certification bodies, and engineering services',
    excerpt: 'Building diagnostics market landscape analysis covering 20+ direct competitors and 10+ indirect competitors in the German/EU market.',
    content: `# Fachverband Bauwerksdiagnostik - Competitive Analysis

## Phase 1c Research: Building Diagnostics Market Landscape

**Date:** April 2, 2026
**Scope:** Direct and indirect competitors in German/EU building diagnostics, professional associations, certification bodies, and engineering services
**Geographic Focus:** Germany and EU markets
**Related Research:** [[market-intelligence|Market Intelligence]], [[icp-persona|ICP Persona]], [[industry-standards|Industry Standards]]

---

## Executive Summary

The building diagnostics and professional services landscape in Germany/EU is dominated by:

1. **Direct Competitors:** 20+ organizations offering building diagnostics, surveying, expert services, and NDT (Non-Destructive Testing)
2. **Indirect Competitors:** 10+ major certification bodies, standards organizations, and engineering associations
3. **Market Positioning:** High-competition space with clear specialization opportunities
4. **Visual Language:** Dominated by blue color (80%+), sans-serif typography, minimalist grid-based layouts
5. **Trust Strategy:** Multi-layered: certifications, member counts, longevity, government backing, formal credentials, transparency

### Key Finding

**The market has few organizations specifically focused solely on "building diagnostics" as a distinct discipline.** Most competitors have broader scope (general surveying, NDT across industries, all construction experts). This represents an **opportunity for Fachverband to differentiate through specialized positioning in building diagnostics.**

---

## Part 1: Direct Competitors - Building Diagnostics & Expert Services

### Tier 1: International/Pan-European Organizations

#### **WTA International**
- **Full Name:** Wissenschaftlich-Technische Arbeitsgemeinschaft für Bauwerkserhaltung und Denkmalpflege (International Association for Science and Technology of Building Maintenance and Monuments Preservation)
- **Website:** https://www.wta-international.org/en/
- **Positioning:** "Competence all over Europe" - Leading European authority on restoration and building maintenance
- **Key Services:**
  - Technical guidelines for building maintenance
  - Research surveys and technical commissions
  - Professional conferences (WTA-Days)
  - Specialized focus: **Monument preservation and historical buildings**
- **Membership:** European network across Germany, Netherlands, Flanders, Switzerland, Czechia
- **Key Differentiator:** Strong research orientation, focus on historical/restoration aspects
- **Visual Language:** Professional institutional design, moderate blue usage

#### **RILEM (International)**
- **Full Name:** International Union of Laboratories and Experts in Construction Materials, Systems and Structures
- **Website:** https://www.rilem.net/
- **Positioning:** Leader in sustainable construction and technical innovation
- **Key Services:**
  - Technical committees for materials/structures research
  - Educational resources (MOOCs, Summer Schools)
  - International conference hosting
- **Membership:** 3,660 individual members, 124 corporate members
- **Key Differentiator:** Strong academic/research focus, sustainability leadership
- **Target:** Researchers, academics, engineers, corporations

#### **RICS (Royal Institution of Chartered Surveyors)**
- **Website:** https://www.rics.org/
- **Positioning:** "World's leading professional body for qualifications and standards in land, property, infrastructure and construction"
- **Scope:** Global, with presence in Germany and across Europe
- **Key Services:**
  - Professional standards and qualifications
  - Find a surveyor directory
  - Dispute resolution services
  - Sector-specific standards (Red Book, Black Book)
- **Membership:** 40,000+ surveying firms globally
- **Key Differentiator:** Global reach and recognition, royal charter, consumer-facing approach
- **Target:** Surveying professionals, consumers, property investors

### Tier 2: German National Associations - Building Experts & Surveyors

#### **BVS (Bundesverband öffentlich bestellter und vereidigter sowie qualifizierter Sachverständiger)**
- **English:** Federal Association of Publicly Appointed and Sworn Experts
- **Website:** https://www.bvs-ev.de/
- **Positioning:** "Mit Verstand zur Sache" (Getting to the point with expertise) - Largest expert association in Germany
- **Membership:** ~3,000 experts across 250+ subject areas
- **Key Services:**
  - Expert finder database
  - Professional seminars and networking
  - Member app (BVS App)
  - Multi-sector coverage
- **Key Differentiator:** Broadest scope (covers all expert categories), publicly appointed experts focus, largest member base
- **Scope:** Covers experts across real estate, technical equipment, building, and more

#### **BBauSV (Bundesverband Deutscher Bausachverständiger)**
- **English:** Federal Association of German Building Experts
- **Website:** https://bbausv.de/
- **Positioning:** Emphasis on high qualifications and continuing education
- **Key Services:**
  - Expert directory (via Bundesliste e.V.)
  - Educational conferences (Tegernseer Baufachtage)
  - Professional magazine "Der Bausachverständige"
  - Association seal (Verbandssiegel) for qualification standards
- **Membership Value:** Right to use "Verbandssachverständige BBauSV" title
- **Key Differentiator:** Strong continuing education focus, European representation (AEEBC member)
- **Target:** Building experts, architects, engineers

---

## Part 2: Indirect Competitors - Certification Bodies & Standards Organizations

### Tier 1: Major Certification & Testing Organizations

#### **TÜV SÜD**
- **Website:** https://www.tuvsud.com/
- **Positioning:** "Add value. Inspire trust. Together we engineer the future. - Construct safe, smart and sustainable buildings"
- **Established:** 1866
- **Key Services:**
  - Testing, inspection, certification across building lifecycle
  - ASME Certification & Inspections
  - Insurance asset valuation
  - Fire protection code compliance
  - BIM training
  - Infrared thermographic surveys
- **Color Palette:** Blue + yellow accents (high-visibility) + white
- **Typography:** Modern sans-serif, clean and technical
- **Trust Signals:** 150+ years heritage, global presence, comprehensive lifecycle services
- **Messaging:** Safety, sustainability, innovation-focused. Technical tone emphasizing risk minimization

---

## Key Insights for Fachverband Positioning

1. **Market Gap:** No organization exclusively focuses on "building diagnostics" as a distinct discipline
2. **Differentiation Opportunity:** Specialized positioning in building diagnostics vs. broader surveying/NDT
3. **Trust Signals:** Certification, member transparency, standards compliance, longevity
4. **Visual Language:** Opportunity to stand out from blue-dominated market with distinct design
5. **Member Value:** Expert registry, continuing education, professional standards, community

---

*This document is part of Phase 1c research. Related docs: [[market-intelligence|Market Intelligence]], [[icp-persona|ICP Persona]], [[industry-standards|Industry Standards]]*`,
    relatedDocs: [
      { slug: 'market-intelligence', title: 'Market Intelligence' },
      { slug: 'icp-persona', title: 'ICP Persona' },
      { slug: 'industry-standards', title: 'Industry Standards' },
    ],
  },
};

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
