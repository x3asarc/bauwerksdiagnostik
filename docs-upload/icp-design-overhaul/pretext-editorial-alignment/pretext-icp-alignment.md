# ICP-Pretext Alignment & Scoping Analysis

**Date:** 2026-04-03
**Status:** Phase 3f Research
**Focus:** Evaluate Pretext features against Bauwerksdiagnostiker values and scope Phase 4 implementation

---

## ICP Precision & Technical Values (Reminder)

**Core Profile:**
- Age: 45-60, highly technical, risk-averse
- Primary Role: Structural diagnosticians, safety certifiers, technical consultants
- Core Values: **Precision, scientific rigor, regulatory compliance, peer validation, clarity over flashiness**
- Decision Drivers: Technical accuracy, safety/liability management, professional credibility, efficiency gains
- Document Type: Dense technical specifications, regulatory references, certification checklists

**Visual Expectations:**
- Formal, authoritative, minimalist (low visual noise)
- High-contrast (WCAG AAA accessibility)
- Scientific aesthetic (LaTeX/technical paper style â€” serif body, monospace data, minimalism)
- No "flashy" animations or unnecessary transitions

---

## Feature Alignment Assessment

### **1. Text Balancing (Binary Search)**

**ICP Value:** â­â­â­â­â­ (5/5) â€” **CRITICAL**

**Why:** Bauwerksdiagnostiker read dense technical documents. Balanced hero/heading text reduces cognitive load and signals professional precision. Unbalanced text (e.g., orphaned words on new lines) signals sloppiness and erodes trust.

**Scientific Aesthetic Alignment:** â­â­â­â­â­ (5/5) â€” **PERFECT FIT**

Why: Mirrors LaTeX's default text justification and balancing algorithms. Enhances the technical paper aesthetic.

**Risk of Over-Engineering:** â­ (1/5) â€” **NONE**

Why: This is a foundational typographic practice, not a gimmick. All serious technical publications use balanced text.

**Current Status:** Partial (CSS-only via `white-space: pre-line` and manual `\n` breaks). Can be upgraded to full Pretext binary search for even better balance at responsive breakpoints.

**Recommendation:** âœ… **IN SCOPE â€” Pursue Immediately**

**Phase 3f Action:** Upgrade `PretextBalancedHeader` component to use full Pretext binary search API instead of CSS-only workaround.

---

### **2. Sane Accordions**

**ICP Value:** â­â­â­â­â­ (5/5) â€” **CRITICAL**

**Why:** Bauwerksdiagnostiker need to navigate complex regulations (ISO 21537, DIN standards, EPBD 2024, local compliance rules). Accordions are essential for information hierarchy. Smooth, jitter-free expansion signals polish and precision.

**Scientific Aesthetic Alignment:** â­â­â­â­â­ (5/5) â€” **PERFECT FIT**

Why: Matches technical documentation standards (e.g., PDF Table of Contents with expandable sections). No visual flair, pure functionality.

**Risk of Over-Engineering:** â­ (1/5) â€” **NONE**

Why: Accordions are a standard UI pattern. Pre-calculated heights eliminate the "janky" feeling of traditional max-height hacks.

**Current Status:** Active in `PretextAccordion.tsx`. Already deployed in production.

**Recommendation:** âœ… **IN SCOPE â€” Standardize & Expand**

**Phase 3f Action:**
1. Audit all collapsible sections on the site (standards, certifications, technical specs)
2. Ensure all use `PretextAccordion` component
3. Document accordion standards in Phase 4 design system specs

---

### **3. Shrink-Wrap Figures**

**ICP Value:** â­â­â­â­ (4/5) â€” **HIGH**

**Why:** Technical documents include inspection photos, building diagrams, structural drawings. Perfect caption sizing (no wasted space) signals attention to detail and precision. Maximizes available space for content.

**Scientific Aesthetic Alignment:** â­â­â­â­ (4/5) â€” **STRONG**

Why: Mimics professional technical publishing (e.g., engineering textbooks, peer-reviewed journals). Captions are typographically balanced.

**Risk of Over-Engineering:** â­â­ (2/5) â€” **MINIMAL**

Why: Only applies when captions exist. Not every figure needs shrink-wrap sizing. Easy to disable for simple images.

**Current Status:** Active in `PretextFigure.tsx`. Already deployed in production.

**Recommendation:** âœ… **IN SCOPE â€” Standardize & Expand**

**Phase 3f Action:**
1. Audit all figure/caption layouts on the site
2. Ensure all use `PretextFigure` component with shrink-wrap enabled
3. Test with real technical diagrams and inspection photos

---

### **4. Manual Line Rendering (Custom Per-Line Styling)**

**ICP Value:** â­â­ (2/5) â€” **OPTIONAL**

**Why:** Bauwerksdiagnostiker don't typically need per-line styling. Their content is dense technical text, not artistic layouts. Could be useful for:
- Certification badge highlighting (e.g., "ISO 21537 Certified")
- Regulatory requirement emphasis (e.g., colored lines for critical safety notes)
- But these use cases are marginal.

**Scientific Aesthetic Alignment:** â­â­â­ (3/5) â€” **QUESTIONABLE**

Why: Manual line rendering could enhance readability, but also risks introducing visual complexity that conflicts with the minimalist aesthetic.

**Risk of Over-Engineering:** â­â­â­â­ (4/5) â€” **HIGH**

Why: Requires custom rendering code. Adds JavaScript complexity. Benefit is unclear for this ICP.

**Recommendation:** âŒ **OUT OF SCOPE â€” Skip for Now**

**Rationale:** The ICP doesn't require per-line styling. If future use cases emerge (e.g., highlighting critical regulations), revisit in Phase 5+.

---

### **5. Iterator Layout & Justification (Knuth-Plass)**

**ICP Value:** â­â­â­ (3/5) â€” **MAYBE**

**Why:** Professional typography relies on optimal justification algorithms. Could enhance readability of long-form technical documents (e.g., detailed diagnostic reports). But most Bauwerksdiagnostiker are comfortable with left-aligned body text.

**Scientific Aesthetic Alignment:** â­â­â­â­ (4/5) â€” **GOOD**

Why: Justified text is standard in academic and technical publishing (e.g., peer-reviewed journals, ISO specifications).

**Risk of Over-Engineering:** â­â­â­ (3/5) â€” **MODERATE**

Why: Justification algorithm is complex. Benefit is subtle (improved visual balance in body text). Could wait for Phase 5+.

**Recommendation:** â³ **MAYBE SCOPE â€” Defer to Phase 5**

**Rationale:** Current PretextParagraph component handles basic body text well. Justification enhancement can be a "nice-to-have" if user feedback requests tighter typography.

---

## Prioritized Scope Decision

### **Tier 1: IN SCOPE â€” Pursue in Phase 4**
1. **Text Balancing (Binary Search)** â€” Upgrade PretextBalancedHeader to full API
2. **Sane Accordions** â€” Standardize across all collapsible sections
3. **Shrink-Wrap Figures** â€” Standardize across all figure/caption layouts

### **Tier 2: MAYBE SCOPE â€” Reconsider in Phase 5**
1. **Iterator Layout & Justification** â€” Only if body text feedback indicates need
2. **Manual Line Rendering** â€” Only if certification/status highlighting use case emerges

### **Tier 3: OUT OF SCOPE â€” Skip**
1. *(None identified at this time)*

---

## Implementation Sketches

### **Feature 1: Enhanced Text Balancing (Hero Section)**

**Where:** Homepage hero (`src/app/page.tsx`, line 39)

**Current State:**
```typescript
<PretextBalancedHeader
  text={"Die Bauwerksdiagnostik:\nWissenschaftliche Analyse\nund Werterhaltung."}
  // Uses CSS white-space: pre-line, manual \n breaks
/>
```

**Enhanced State (Phase 4):**
```typescript
import { prepareWithSegments, layout } from '@chenglou/pretext';

<PretextBalancedHeader
  text="Die Bauwerksdiagnostik: Wissenschaftliche Analyse und Werterhaltung."
  font="700 84px 'Public Sans'"
  usePretextBalancing={true} // Enable full binary search
  targetWidth={900} // Responsive breakpoint
/>
// Component internally calls prepareWithSegments() and layout()
// Automatically finds optimal 2-3 line breaks
```

**What Changes:**
- Remove manual `\n` characters
- Component handles binary search balancing internally
- Respects responsive width constraints at tablet/mobile breakpoints

**What Stays the Same:**
- Serif typography (EB Garamond)
- 84px font size, 700 weight
- Left-aligned layout
- High-contrast (near-black on off-white)
- Minimalist aesthetic

**Visual Outcome:**
- Perfectly balanced 2-3 lines at all screen sizes
- No mid-word breaks
- Responsive adjustment as viewport narrows

---

### **Feature 2: Standardized Sane Accordions (Standards Section)**

**Where:** Any collapsible section (e.g., regulatory standards, certification checklist)

**Current State:**
```typescript
<PretextAccordion title="ISO 21537 Certification Requirements">
  <ul>
    <li>Requirement 1...</li>
    <li>Requirement 2...</li>
    {/* More items */}
  </ul>
</PretextAccordion>
```

**Enhanced State (Phase 4):**
```typescript
<PretextAccordion
  title="ISO 21537 Certification Requirements"
  heightPreCalculated={true} // Enable pre-calc heights
  smoothness="precise" // Zero jitter on expansion
>
  <ul>
    <li>Requirement 1...</li>
    <li>Requirement 2...</li>
  </ul>
</PretextAccordion>
```

**What Changes:**
- Ensure all accordions use Pretext component
- Heights are pre-calculated (no max-height hacks)
- Smooth jitter-free expansion/collapse

**What Stays the Same:**
- Typography (Public Sans labels, serif body text)
- High-contrast borders and dividers
- Minimalist styling (no color gradients, shadows)

**Visual Outcome:**
- Smooth accordion behavior
- No layout shift during expand/collapse
- Professional, polished interaction

---

### **Feature 3: Shrink-Wrapped Figure Captions (Technical Diagrams)**

**Where:** Any image with caption (inspection photos, structural drawings, certification diagrams)

**Current State:**
```typescript
<figure>
  <img src="inspection.jpg" alt="Facade inspection" />
  <figcaption>Fig. 1.2: South-facing facade inspection, 2026-03-15</figcaption>
</figure>
```

**Enhanced State (Phase 4):**
```typescript
<PretextFigure
  src="inspection.jpg"
  alt="Facade inspection"
  caption="Fig. 1.2: South-facing facade inspection, 2026-03-15"
  shrinkWrap={true} // Enable optimal caption width
  minWidth={200} // Don't shrink below readable width
/>
```

**What Changes:**
- Figure caption width is automatically optimized
- Captions don't waste space (no orphaned words or huge margins)
- Binary search finds perfect width maintaining line breaks

**What Stays the Same:**
- Image size and aspect ratio
- Typography (monospace figure numbers, serif caption text)
- High-contrast captions
- Minimalist layout (no decorative frames)

**Visual Outcome:**
- Perfectly sized captions
- Professional technical document appearance
- Improved readability of technical details

---

## Risk Assessment

### **Color Transition Risk (Phase 3 â†’ Phase 4):**
- âœ… **Minimal Risk** â€” Pretext features are typography-focused, not color-dependent
- Color palette changes (Direction B) are orthogonal to Pretext integration
- No conflicts between new colors and text balancing/accordion/figure features

### **Responsive Design Risk:**
- âœ… **Managed** â€” Pretext's binary search adapts to container width
- Test on mobile, tablet, desktop breakpoints during Phase 4

### **Browser Compatibility Risk:**
- âœ… **None** â€” All Pretext features tested on Chrome, Firefox, Safari

### **Performance Risk:**
- âœ… **None** â€” Pretext is highly optimized (<1ms layout times)
- No noticeable impact on page load or interaction speed

---

## Phase 4 Action Items (Derived from This Analysis)

1. **Task 1:** Upgrade `PretextBalancedHeader` to full binary search API
   - Remove manual `\n` breaks
   - Enable responsive balancing at all breakpoints
   - Test on desktop, tablet, mobile

2. **Task 2:** Audit and standardize all Sane Accordion usage
   - Identify all collapsible sections on site
   - Ensure each uses `PretextAccordion` component
   - Document accordion best practices in design system

3. **Task 3:** Audit and standardize all Shrink-Wrap Figure usage
   - Identify all figure/caption layouts on site
   - Ensure each uses `PretextFigure` component
   - Test with real technical diagrams

4. **Task 4:** Document Pretext standards in updated DESIGN.md
   - Pretext component library standards
   - Best practices for text, accordions, figures
   - Performance guidelines

---

## Recommendation for Phase 4

**Tier 1 (Pursue First):** Text Balancing + Sane Accordions + Shrink-Wrap Figures
- **Why:** All three are production-ready, directly serve ICP needs, enhance scientific aesthetic
- **Effort:** Medium (mostly configuration and standardization)
- **ROI:** High (visible improvements in professional polish and readability)

**Tier 2 (Defer):** Iterator Layout & Justification
- **Why:** Nice-to-have, no immediate ICP demand
- **Best Time:** Phase 5, if user feedback requests advanced typography

**Tier 3 (Skip):** Manual Line Rendering
- **Why:** Conflicts with minimalist aesthetic, unclear ICP value
- **Revisit:** Only if certification highlight use case emerges

**Overall:** Pretext integration is **strategically important** for the design system. The library is already battle-tested in this codebase. Phase 4 should prioritize standardizing and enhancing the three Tier 1 features.

## Related Notes
[[pretext-capability-review]], [[pretext-alignment-summary]], [[expert-alignment-deep-dive]], [[independent-diagnostics-persona]], [[building-diagnostics-competitive-analysis]], [[building-diagnostics-standards-landscape]], [[dach-building-diagnostics-market-intelligence]], [[trusted-technical-brand-voice]], [[building-diagnostics-visual-benchmark]], [[practitioner-site-experience-audit]], [[trusted-association-design-systems-review]], [[building-diagnostics-color-directions]], [[professional-trust-aesthetic-strategy]], [[building-diagnostics-design-system-plan]]


