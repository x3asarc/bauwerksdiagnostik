# Design System Structural Review
**Phase 2b: Design Systems Review**
**Project:** ICP Design Overhaul â€” "The Technical Dossier"
**Date:** 2026-04-02

---

## Executive Summary

**System Health:** FRAGMENTED BUT FUNCTIONAL
**Readiness for Redesign:** CONDITIONAL â€” requires structural refactoring before color palette swap
**Overall Score:** 5/10 (good foundation, significant gaps)

The design system has a strong **conceptual foundation** (scientific authority, technical heritage) and **good intent** in naming conventions, but suffers from **critical structural weaknesses**:

1. **Insufficient tokenization** â€” Most spacing, sizes, and shadows are hardcoded in components
2. **Incomplete CSS variable system** â€” No spacing scales, font-size scales, shadow system, or border-radius tokens
3. **Dark mode absent** â€” No prefers-color-scheme support despite being essential for 2026
4. **Mixed token patterns** â€” Some vars use `--` prefix (globals), others use CSS custom properties, Tailwind utilities, and inline colors
5. **Documentation drift** â€” DESIGN.md doesn't reflect actual component implementation reality
6. **Tailwind over tokens** â€” Heavy reliance on Tailwind arbitrary values (`[#F8FAFC]`, `shadow-[24px_24px_...]`) undermines centralized token system

---

## 1. CSS Variable System Analysis

### Current Variables (in `:root`)

```css
--background: #FDFDFD          /* Off-white paper background */
--foreground: #1A1A1A          /* Near-black primary text */
--primary: #F59E0B             /* Amber accent (safety/CTA) */
--secondary: #2F5AAE           /* Royal blue (secondary accent) */
--surface: #FFFFFF             /* Surface/card background */
--border: #000000              /* Hairline dividers */
--muted: #94A3B8               /* Slate gray (metadata labels) */

--font-serif: var(--font-serif)       /* EB Garamond (inherited from layout) */
--font-sans: var(--font-public-sans)  /* Public Sans */
--font-mono: var(--font-mono)         /* JetBrains Mono */
```

### Sufficiency Assessment: **INSUFFICIENT (3/10)**

**Gaps Identified:**

| Category | Current | Needed | Impact |
|----------|---------|--------|--------|
| **Color Tokens** | 7 colors | 15â€“20 (with semantic tokens) | Hardcoding colors scattered across components |
| **Spacing Scale** | None | 8â€“12 steps (4px, 8px, 16px, 24px, 32px, 48px, 64px...) | Inconsistent padding/margin across site |
| **Font Size Scale** | None | 6â€“8 steps (12px, 14px, 16px, 18px, 20px, 24px, 32px, 48px) | No clear typographic hierarchy |
| **Line Heights** | None | 3â€“4 scales (1.2, 1.5, 1.75, 2) | Inconsistent readability |
| **Letter Spacing** | None | 2â€“3 scales (normal, wide, extra-wide) | Limited semantic control |
| **Border Radius** | None | 3â€“4 steps (0, 4px, 8px, 16px) | All buttons use sharp corners (0px) |
| **Box Shadow** | None | 3â€“5 levels (subtle, small, medium, large) | Hardcoded shadow values in JSX |
| **Border Width** | Implied (0.5px, 1px, 2px) | Explicit scale | Widths scattered in CSS |
| **Opacity** | None | 2â€“3 levels (subtle, medium, strong) | Opacity hardcoded inline |
| **Z-Index** | None | Explicit scale | Conflicts evident (z-[9999], z-[1000]) |

**Naming Convention Clarity: GOOD**

The naming is intuitive (`--primary`, `--foreground`, `--surface`), following modern design token conventions. However:
- No semantic context for intent (e.g., no `--error`, `--success`, `--warning`)
- Color tokens are "global" only â€” no component-scoped variables
- No naming for "interactive" states (hover, focus, active)

### Dark Mode Support: **NONE (0/10)**

There is **zero dark mode support** in the current system. No `prefers-color-scheme` media queries, no dark-mode token variants, no documentation.

**Impact:** Without dark mode tokens, redesign will require either:
- Separate CSS file for dark mode (hard to maintain)
- CSS variables with `@media (prefers-color-scheme: dark)` (must add now)

---

## 2. Color Token Organization

### Color Usage Audit

**Declared Tokens (in `:root`):**
- `#FDFDFD` (background)
- `#1A1A1A` (foreground)
- `#F59E0B` (primary/amber)
- `#2F5AAE` (secondary/blue)
- `#FFFFFF` (surface)
- `#000000` (border)
- `#94A3B8` (muted/slate)

**Hardcoded Colors in Components** (found via grep):
- `#F8FAFC` â€” light slate (used 7+ times) â€” **NOT tokenized**
- `rgba(0,0,0,0.03)` through `rgba(0,0,0,1)` â€” multiple opacity overlays â€” **NOT tokenized**
- `#E2E8F0` (grid dot color) â€” **NOT tokenized** (only in `.section-grid`)
- `text-slate-900`, `border-black/5`, `bg-white` â€” **Tailwind defaults** â€” inconsistent with token system
- `border-amber-500` â€” **Hardcoded in Tailwind** â€” should use `--primary` instead

### Distinct Colors in Use: **~12â€“15**

The palette is **intentionally minimal** (scientific/monochromatic), but ~5 colors are used without tokens:
- Slate-50 / #F8FAFC (light backgrounds, secondary surfaces)
- E2E8F0 (grid pattern)
- Various opacity variations (not scaled)

### Documentation: **POOR (2/10)**

**DESIGN.md states:**
- "Metadata": `#64748B` (Slate 500) â€” **NOT actually in globals.css** âŒ
- Palette is well-explained conceptually, but doesn't list all used colors or where to use them
- No guidance on when to use `--surface` vs `--background`
- No explanation of `--muted` (should be "label color" or "secondary text")

### Component Color Purpose: **UNCLEAR**

Without semantic tokens, new developers must infer meaning:
- Is `--secondary` for secondary buttons, secondary text, or secondary backgrounds? (Currently used for link color in definitions)
- When should I use `--surface` vs hardcoding `#FFFFFF`? (Inconsistently applied)
- What's the difference between `--muted` and Tailwind's `text-slate-700`?

**Recommendation:** Add semantic tokens:
```css
--color-text-primary: var(--foreground);
--color-text-secondary: var(--muted);
--color-text-interactive: var(--secondary);
--color-bg-primary: var(--background);
--color-bg-secondary: #F8FAFC;
--color-bg-surface: var(--surface);
--color-border-primary: var(--border);
--color-border-subtle: rgba(0, 0, 0, 0.05);
```

---

## 3. Typography System

### Font Variables (Inherited from `layout.tsx`)

```
--font-serif: EB Garamond        (weights: 400, 500, 600, 700, 800)
--font-sans: Public Sans          (weights: 400, 500, 600, 700, 800, 900)
--font-mono: JetBrains Mono       (default weight)
```

### Font Size Tokenization: **NONE (0/10)**

No font-size scale tokens exist. Sizes are hardcoded throughout:

| Element | Hardcoded | Tokenized |
|---------|-----------|-----------|
| `h1â€“h6` | No explicit size rule | No |
| `.mono-data` | `0.7rem` (11.2px) | âŒ |
| `.btn-dossier-primary` | `10px` | âŒ |
| Body text | Implied (Tailwind default 16px?) | âŒ |
| Labels | Various (12px, 10px, 0.875rem) | âŒ |

**Heading Hierarchy:** Defined in CSS but not tokenized:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-serif), serif;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--foreground);
}
/* No font-size rules â€” browser defaults apply */
```

**Impact:** No guaranteed heading scale. Developers use arbitrary `text-2xl`, `text-3xl`, or inline `font-size` values.

### Line Height: **SCATTERED (1/10)**

- `.mono-data`: Implied line-height (default)
- Buttons: `display: inline-flex` (no line-height needed)
- Headings: No line-height specified
- Body: No line-height specified (using browser default ~1.15)

**Problem:** No consistent line-height scale for readability. At 1.15x line-height, serif body text (EB Garamond) may be slightly cramped at small sizes.

### Letter Spacing: **PARTIALLY TOKENIZED (3/10)**

- Headings: `-0.01em` (tight)
- Buttons: `0.1em` (wide)
- `.mono-data`: `0.15em` (extra-wide)

These are hardcoded. Should be tokens: `--letter-spacing-tight`, `--letter-spacing-normal`, `--letter-spacing-wide`.

### Scale Consistency: **POOR (2/10)**

- No clear typographic scale (e.g., 1.2x, 1.5x, 2x progression)
- Heading sizes not explicitly set (browser defaults)
- Font weights vary without clear rules (500 for headings, 900 for buttons, 700 for labels)
- Mix of rem, em, px units in different places

**Recommendation:**

Create a font-size and line-height scale:

```css
/* Font sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 2rem;      /* 32px */

/* Line heights */
--leading-tight: 1.2;
--leading-normal: 1.5;
--leading-relaxed: 1.75;

/* Letter spacing */
--tracking-tight: -0.01em;
--tracking-normal: 0em;
--tracking-wide: 0.1em;
```

Define heading rules:

```css
h1 { font-size: var(--text-3xl); line-height: var(--leading-tight); }
h2 { font-size: var(--text-2xl); line-height: var(--leading-tight); }
h3 { font-size: var(--text-xl); line-height: var(--leading-normal); }
```

---

## 4. Component Patterns

### Button System: **GOOD FOUNDATION (7/10)**

**Existing Patterns:**

```css
.btn-dossier-primary
  - Background: var(--primary) âœ“
  - Color: #ffffff (hardcoded) âŒ
  - Font: Sans, 900 weight, 10px, 0.1em letter-spacing
  - Padding: 1rem 2rem
  - Border: 1px solid var(--border)
  - Hover: brightness(1.1) filter + translateY(-1px)

.btn-dossier-outline
  - Background: transparent
  - Color: var(--foreground)
  - Border: 2px solid var(--border)
  - Hover: background changes to var(--foreground), text to #ffffff
```

**Strengths:**
- Consistent naming convention (`.btn-dossier-*`)
- Both primary and outline variants
- Uses CSS variables for colors
- Hover states defined

**Gaps:**
- No disabled state
- No ghost/tertiary variant
- Button text color hardcoded (`#ffffff`) instead of tokenized
- No size variants (small, large)
- No icon spacing rules in CSS (gap is set inline with `gap: 0.75rem`)
- Padding not tokenized (should be `var(--spacing-*)`)

### Card/Surface System: **MINIMAL (2/10)**

**Existing Patterns:**

| Pattern | Implementation | Tokenized |
|---------|-----------------|-----------|
| `.section-grid` | radial-gradient with 24px spacing | âŒ (hardcoded) |
| `.border-right-dossier` | `0.5px solid var(--border)` | âœ“ (border uses var) |
| `.border-bottom-dossier` | `0.5px solid var(--border)` | âœ“ |
| Card/box | No class â€” built ad-hoc with inline styles | âŒ |
| Shadows | Hardcoded in inline styles (`shadow-[24px_24px_0px_rgba(0,0,0,0.03)]`) | âŒ |

**Example of scatter:**
```jsx
<div className="border-4 border-black p-12 bg-white
                shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]
                relative overflow-hidden group">
```

No reusable card class. Every card reinvents borders, shadows, and spacing.

### Spacing: **HIGHLY INCONSISTENT (1/10)**

No spacing scale tokens. Values observed:

| Value | Used in | Count |
|-------|---------|-------|
| `p-4` (1rem) | Sidebar sections | ~3 |
| `p-6` (1.5rem) | Various boxes | ~5 |
| `p-8` (2rem) | Card internals | ~7 |
| `p-10` (2.5rem) | Large cards | ~8 |
| `p-12` (3rem) | Hero sections | ~4 |
| `p-16` (4rem) | Large sections | ~2 |
| `py-16` (4rem top/bottom) | Sections | ~2 |
| `py-32` (8rem) | Large sections | ~1 |
| `gap-2` (0.5rem) | Small gaps | ~1 |
| `gap-3` (0.75rem) | Icon gaps | ~2 |
| `gap-8` (2rem) | Column gaps | ~3 |
| `mb-6` (1.5rem) | Margins | ~2 |
| `mb-16` (4rem) | Large margins | ~2 |
| `mb-24` (6rem) | Very large margins | ~2 |

**Pattern:** Mostly using Tailwind's default scale (4px increments), but values are scattered across components. No single source of truth.

**Impact on Redesign:** If primary color changes, components are easy to update. If spacing system changes, every component needs manual review.

---

## 5. Layout System

### Grid & Flex: **IMPLICIT (2/10)**

- No `.grid` or `.flex` class definitions in globals.css
- All layout is done with Tailwind utilities (`flex`, `grid`, `flex-col`, etc.)
- No custom grid columns defined

### Max-Width Constraints: **MINIMAL**

Only observed in layout structure:
- Sidebar: `w-[280px]` (fixed width)
- Main content: No explicit max-width (assumed to be viewport width minus sidebar)
- Sections: No max-width constraints (full-width)

**Recommendation:** Add explicit max-width tokens for content, narrow columns, wide layout:
```css
--max-w-narrow: 600px;    /* Single column */
--max-w-content: 900px;   /* Standard content */
--max-w-wide: 1200px;     /* Full layout with sidebar */
```

### Responsive Breakpoints: **IMPLICIT (1/10)**

No explicit breakpoint definitions. Tailwind's default breakpoints are used inline:
- `hidden md:block` (hide on mobile, show on tablet+)
- `flex flex-col md:flex-row` (stack on mobile, row on tablet+)

**Breakpoints implied (from Tailwind defaults):**
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

**Problem:** If breakpoints need adjustment (e.g., move `md` from 768px to 800px), no single place to change it. Each component must be manually reviewed.

### Mobile-First Approach: **YES (8/10)**

The layout uses mobile-first CSS (default styles are mobile, `md:` and `lg:` add desktop styles). This is correct.

However, observed component examples mix patterns:
- Some use `hidden md:block` (correct â€” hidden by default)
- Some use `flex md:flex-row` (correct â€” stacks by default)

---

## 6. Maintainability Assessment

### Can Someone New Add a Button Style? **DIFFICULT (3/10)**

**Current Process:**
1. Open `globals.css`
2. Add new class (e.g., `.btn-dossier-secondary`)
3. Copy `.btn-dossier-primary`, modify colors

**Problems:**
- No template or pattern to follow (button text color `#ffffff` is hardcoded)
- No spacing token to reference (padding: `1rem 2rem` is arbitrary)
- No way to check "what size should this button be?" (no size scale)
- Easy to create inconsistencies (new button might use `border: 1px` vs existing `border: 2px`)

### Can Someone Change the Primary Color Globally? **EASY (8/10)**

Change one variable:
```css
--primary: #F59E0B;  /* Change to new color */
```

All `.btn-dossier-primary` buttons update. âœ“

Caveats:
- Only affects CSS variables. Tailwind utilities like `bg-amber-500` won't update.
- Some inline colors (`#F8FAFC`, `bg-white`) won't change.
- Opacity variations (`rgba(0,0,0,0.03)`) won't change.

### Is the System Well-Documented? **POOR (2/10)**

**DESIGN.md provides:**
- Brand strategy and philosophy (excellent conceptual overview)
- Color palette and typography (good high-level explanation)
- Mechanical logic (Pretext integration â€” well explained)

**DESIGN.md lacks:**
- Component documentation (no "button states" section, no "card anatomy" section)
- Spacing scale guidance
- Font size scale guidance
- When to use which color token
- Responsive behavior rules
- Accessibility guidelines
- State definitions (focus, hover, active, disabled)

**globals.css has:**
- No comments explaining purpose of each variable
- No comments explaining component relationships
- No explanation of why border is `0.5px` vs `1px` vs `2px`

### Are There Duplicated Styles? **SEVERE (9/10 duplication)**

| Pattern | Duplicated | Example |
|---------|-----------|---------|
| Border styles | Yes | `border border-black` appears 20+ times |
| Shadows | Yes | `shadow-[12px_12px_0px_0px_rgba(0,0,0,0.03)]` appears 3+ times |
| Spacing patterns | Yes | `p-10 gap-8` is common but not named |
| Responsive layout | Yes | `flex flex-col md:flex-row gap-8` appears 5+ times |
| Card styling | Yes | `border border-black p-10 bg-white` appears 8+ times |
| Grid background | Yes | Could use `.section-grid` but not always applied |

**Consolidation Opportunity:** Extract reusable classes:
```css
.card-dossier {
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 2.5rem;
}

.card-dossier.shadow-sm {
  box-shadow: 12px 12px 0px rgba(0, 0, 0, 0.03);
}

.card-dossier.shadow-md {
  box-shadow: 16px 16px 0px rgba(0, 0, 0, 0.1);
}

.card-dossier.shadow-lg {
  box-shadow: 24px 24px 0px rgba(0, 0, 0, 0.15);
}
```

---

## 7. DESIGN.md Documentation Quality

### Explains System Purpose? **YES (8/10)**

"Scientific Authority" philosophy is clearly articulated. The design mimics a "peer-reviewed journal" aesthetic. Philosophy is strong and intentional.

### Explains Philosophy? **YES (8/10)**

Brand strategy, typography choices, and mechanical logic are all well explained. However, no mention of constraints (e.g., "why only 7 colors?") or evolution path.

### Are All Components Documented? **NO (1/10)**

| Component | Documented | Details |
|-----------|----------|---------|
| Buttons | Briefly | "Sharp corners, heavy borders (2px), sans-serif labels in caps" â€” but `.btn-dossier-primary` is 1px, not 2px âŒ |
| Cards | Briefly | "Minimalist 'Figure' style with caption numbering" â€” no implementation details |
| Navigation | Briefly | "Minimal top-bar" â€” no specs |
| Accordions | Yes | Mentions Pretext library |
| Figures | Yes | Mentions Pretext shrink-wrap |
| Grid pattern | No | Not mentioned |
| Borders (hairline) | No | Not mentioned |
| Monospace labels | No | `.mono-data` not documented |

### Is It Up-to-Date with CSS? **PARTIALLY (4/10)**

**Inaccuracies:**

| DESIGN.md says | globals.css has | Status |
|---|---|---|
| Border: 2px | 1px (primary), 2px (outline) | Partial mismatch |
| Metadata: #64748B (Slate 500) | Actually uses #94A3B8 (--muted) | Wrong hex value |
| No dark mode | No dark mode | Accurate âœ“ |
| Serif + sans + mono | EB Garamond, Public Sans, JetBrains Mono | Accurate âœ“ |

### Could It Be Clearer? **YES (5/10)**

**Missing sections:**
- Token usage guide ("When to use --primary vs --secondary?")
- State documentation (hover, focus, active, disabled)
- Spacing grid visualization (show the 8px scale)
- Responsive behavior rules ("How should cards stack on mobile?")
- Accessibility notes (color contrast, focus states, keyboard navigation)
- Component anatomy (show button parts: label, icon, border, padding)
- Visual examples (screenshots of actual components)
- Maintenance guide (how to update a color, how to add a new component)

---

## 8. Gaps & Opportunities

### Missing Tokens

| Category | Current | Needed | Priority |
|----------|---------|--------|----------|
| **Spacing** | None | 8â€“12 steps | CRITICAL |
| **Font Size** | None | 6â€“8 steps | CRITICAL |
| **Line Height** | None | 3â€“4 scales | HIGH |
| **Letter Spacing** | Hardcoded (3 values) | Tokenize 2â€“3 scales | HIGH |
| **Border Radius** | None (all 0px) | 3â€“4 steps | MEDIUM |
| **Box Shadow** | Hardcoded (8 variations) | 4â€“5 levels | HIGH |
| **Border Width** | Implied (0.5px, 1px, 2px) | Explicit scale | MEDIUM |
| **Opacity** | Hardcoded inline | 3â€“4 levels | MEDIUM |
| **Z-Index** | Scattered (9999, 1000) | Explicit scale | MEDIUM |
| **Transition/Duration** | Hardcoded (0.2s, 0.3s) | 2â€“3 scales | LOW |
| **Semantic Colors** | None | 6â€“10 semantic tokens | HIGH |

### Missing Component Documentation

| Component | Status | Gap |
|-----------|--------|-----|
| `.btn-dossier-primary` | Exists | No secondary, tertiary, disabled states documented |
| `.btn-dossier-outline` | Exists | No ghost variant, no size variants |
| Card | Ad-hoc | No reusable class, no shadow variants, no states |
| Navigation | Ad-hoc | No documented structure |
| Form inputs | Missing | No input styles in globals.css |
| Modals/Overlays | Missing | No modal component documented |
| Tables | Missing | No table styling documented |
| List styles | Missing | No list styling documented |

### Missing Accessibility Guidelines

**Not documented:**
- Minimum color contrast (WCAG AA/AAA)
- Focus state styling (no `:focus-visible` rules in globals.css)
- Keyboard navigation patterns
- ARIA usage for components
- Touch target sizing (buttons should be 44px+ on mobile)
- Screen reader considerations (hidden labels, semantic HTML)

### Missing Responsive Behavior Rules

**Not documented:**
- At what viewport should cards stack vs. side-by-side?
- How do buttons behave on mobile (full-width vs. auto)?
- What is the mobile sidebar/menu pattern?
- How do tables/grids reflow on small screens?
- Typography scaling on mobile (smaller sizes?)

---

## 9. Refactoring Needs (Before Color Redesign)

### Critical (Must Fix Before Phase 3)

1. **Extract Spacing Scale**
   - Define `--spacing-4`, `--spacing-8`, `--spacing-16`, etc.
   - Audit all hardcoded padding/margin values
   - Replace with token references
   - Update all component JSX

2. **Extract Font Size Scale**
   - Define `--text-xs`, `--text-sm`, `--text-base`, `--text-lg`, `--text-xl`, `--text-2xl`, `--text-3xl`
   - Define heading sizes in CSS (not relying on browser defaults)
   - Remove hardcoded font-size values from components
   - Add line-height and letter-spacing tokens

3. **Tokenize Color Hardcodes**
   - Move `#F8FAFC` to `--color-bg-secondary`
   - Move `rgba(0,0,0,0.03)` to `--opacity-subtle`
   - Move `#E2E8F0` to `--color-grid`
   - Audit all components for inline hex colors
   - Replace Tailwind color utilities with token references where applicable

4. **Shadow System**
   - Define 4â€“5 shadow levels: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
   - Remove hardcoded `shadow-[24px_24px_...]` from JSX
   - Create shadow utility classes

5. **Dark Mode Foundation**
   - Add `@media (prefers-color-scheme: dark)` rule to `:root`
   - Define dark mode variants for all color tokens
   - Test all components in dark mode

### High Priority (Should Fix Before Phase 3)

6. **Border Radius Scale**
   - Define `--radius-0`, `--radius-sm`, `--radius-md`, `--radius-lg`
   - Currently all components use `border-radius: 0` (sharp corners) â€” is this intentional?
   - Document when to use which radius

7. **Component Classes**
   - Extract `.card-dossier`, `.card-dossier-shadow-sm`, `.card-dossier-shadow-md`
   - Extract `.section-full`, `.section-grid` variants
   - Create size variants for buttons (`.btn-dossier-primary.size-sm`, etc.)

8. **Documentation Update**
   - Update DESIGN.md with all token values
   - Add component anatomy diagrams
   - Add accessibility section
   - Add maintenance guide

### Nice to Have (Can Wait for Phase 3+)

9. **Animation/Transition Scale**
   - Tokenize `0.2s`, `0.3s` durations
   - Define easing curves (`ease-in`, `ease-out`, `ease-in-out`)

10. **Utility Generation**
    - Consider generating Tailwind config from CSS variables
    - Reduces manual JSX updates

---

## 10. Readiness for Phase 3 & 4

### Is the System Ready for Color Palette Swap? **NO (2/10)**

**Blocking Issues:**

1. **Not all colors are tokenized**
   - `#F8FAFC` (light bg) not a token
   - `#E2E8F0` (grid) not a token
   - Opacity variations not tokenized
   - âœ— Swap will miss ~20% of color usages

2. **Tailwind utilities undermine token system**
   - Components use `bg-white`, `text-slate-900`, `border-black/5`
   - These won't update when primary color changes
   - âœ— Inconsistent color after swap

3. **Dark mode absent**
   - Swap assumes light mode only
   - No dark mode tokens to update
   - âœ— Dark mode will require additional work after swap

4. **Spacing/Shadow not tokenized**
   - Shadow changes can't be applied globally
   - Shadow system is mixed into color redesign
   - âœ— If redesign includes shadow changes, every component breaks

### What Needs to Be in Place Before Implementation

**Phase 2 (Audit) Must Deliver:**
- âœ“ This review (identifies gaps)
- (Next: Detailed token inventory)
- (Next: Spacing/shadow documentation)
- (Next: Dark mode design decisions)

**Phase 3 (Direction) Must Deliver:**
- New color palette with dark mode variants
- Updated spacing scale (if changing)
- Updated shadow system (if changing)
- Font size scale decisions
- Documentation of all tokens

**Phase 4 (Specs) Must Deliver:**
- Refactored globals.css with all tokens
- Updated DESIGN.md
- Component implementation guide
- Migration checklist

**Phase 5 (Documentation) Must Deliver:**
- Final token documentation
- Component anatomy diagrams
- Usage examples for each token
- Accessibility guidelines

### Breaking Changes to Expect

**If refactoring spacing:**
- All component padding/margin must be audited
- Layout will shift if spacing scale changes
- Responsive behavior might need adjustment

**If refactoring fonts:**
- Heading sizes will change
- Readability metrics will shift
- Some content might reflow

**If refactoring colors:**
- Accessibility contrast might change (WCAG compliance check needed)
- Color psychology changes (is new amber still "urgent"?)

**If adding dark mode:**
- All components need dark mode testing
- Images/SVGs might need inversion adjustments
- Animation behavior might differ in dark mode

---

## Summary Recommendations

### Immediate Actions (Do Now)

1. **Inventory all hardcoded values:**
   - All colors not in CSS variables
   - All spacing values not tokenized
   - All shadow values
   - All font sizes

2. **Create token definitions:**
   - Spacing scale (8px increments: 4, 8, 16, 24, 32, 48, 64, 80px)
   - Font sizes (1.2x scale: 12, 14, 16, 18, 20, 24, 32, 48px)
   - Line heights (1.2, 1.5, 1.75, 2.0)
   - Shadow levels (4 levels: subtle, small, medium, large)
   - Opacity levels (0.05, 0.1, 0.15, 0.2, 0.3, 0.5)
   - Border radius (0, 4, 8, 16px)
   - Z-index layers (0, 10, 100, 1000, 9999)

3. **Dark mode decision:**
   - Decide: Light-only, dark-only, or both?
   - If both, design dark palette now
   - Document contrast ratios

### Before Phase 3

1. Refactor globals.css to include all tokens
2. Audit components and replace hardcoded values
3. Create `.card-dossier`, `.card-dossier-shadow-*` classes
4. Update button variants with all states
5. Update DESIGN.md with token reference
6. Add accessibility guidelines section

### Before Phase 4

1. Finalize new color palette (if changing)
2. Finalize spacing/font scales (if changing)
3. Create component migration guide
4. Prepare CSS diff for review
5. Plan component refactoring sprint

---

## Conclusion

The current design system has **solid conceptual foundations** (scientific authority, consistent naming, good component patterns for buttons) but **insufficient structural depth** (missing token scales, incomplete CSS variables, heavy reliance on hardcoded values).

The system can support a **color palette swap** with minimal changes, but **any other redesign** (spacing, typography, shadows) will require significant component refactoring due to scattered hardcoded values.

**Verdict:** Refactor the token system first (Phase 2 follow-up), then proceed with color palette redesign. Without refactoring, the new design will be difficult to maintain and scale.

**Confidence Level:** HIGH â€” analysis based on complete CSS audit and component sampling.

## Related Notes
[[independent-diagnostics-persona]], [[building-diagnostics-competitive-analysis]], [[building-diagnostics-standards-landscape]], [[dach-building-diagnostics-market-intelligence]], [[trusted-technical-brand-voice]], [[building-diagnostics-visual-benchmark]], [[practitioner-site-experience-audit]], [[building-diagnostics-color-directions]], [[professional-trust-aesthetic-strategy]], [[building-diagnostics-design-system-plan]], [[design-direction-completion-summary]]


