import { describe, expect, it } from 'vitest';

import { getAvailableDocSlugs, getDocPage } from './docsData';

const expectedIcpOverhaulSlugs = [
  'building-diagnostics-design-system-plan',
  'design-direction-completion-summary',
  'building-diagnostics-competitive-analysis',
  'building-diagnostics-standards-landscape',
  'dach-building-diagnostics-market-intelligence',
  'independent-diagnostics-persona',
  'trusted-technical-brand-voice',
  'building-diagnostics-visual-benchmark',
  'practitioner-site-experience-audit',
  'trusted-association-design-systems-review',
  'expert-alignment-deep-dive',
  'pretext-alignment-summary',
  'pretext-capability-review',
  'pretext-icp-alignment',
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
];

describe('docsData ICP overhaul import', () => {
  it('exposes the full ICP overhaul documentation set', () => {
    const slugs = getAvailableDocSlugs();

    expect(slugs).toHaveLength(expectedIcpOverhaulSlugs.length);
    expect(slugs).toEqual(expect.arrayContaining(expectedIcpOverhaulSlugs));
  });

  it('returns populated pages for the imported ICP overhaul docs', () => {
    const personaDoc = getDocPage('independent-diagnostics-persona');
    const mockupDoc = getDocPage('technical-authority-homepage-mockup');

    expect(personaDoc).not.toBeNull();
    expect(personaDoc?.title).toContain('Persona');
    expect(personaDoc?.content.length).toBeGreaterThan(1000);

    expect(mockupDoc).not.toBeNull();
    expect(mockupDoc?.content).toContain('<!DOCTYPE html>');
  });
});
