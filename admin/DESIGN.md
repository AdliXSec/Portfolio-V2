---
name: Warm Minimalist Admin
colors:
  surface: '#fff8f5'
  surface-dim: '#e4d8d0'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fef1e9'
  surface-container: '#f8ece3'
  surface-container-high: '#f2e6de'
  surface-container-highest: '#ece0d8'
  on-surface: '#201b16'
  on-surface-variant: '#514538'
  inverse-surface: '#362f2a'
  inverse-on-surface: '#fbeee6'
  outline: '#837466'
  outline-variant: '#d6c3b3'
  surface-tint: '#865305'
  primary: '#865305'
  on-primary: '#ffffff'
  primary-container: '#c88a3e'
  on-primary-container: '#462800'
  inverse-primary: '#feb968'
  secondary: '#675d52'
  on-secondary: '#ffffff'
  secondary-container: '#ecddd0'
  on-secondary-container: '#6b6156'
  tertiary: '#904d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#e17d11'
  on-tertiary-container: '#4b2500'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffddba'
  primary-fixed-dim: '#feb968'
  on-primary-fixed: '#2b1700'
  on-primary-fixed-variant: '#673d00'
  secondary-fixed: '#efe0d3'
  secondary-fixed-dim: '#d2c4b7'
  on-secondary-fixed: '#221a12'
  on-secondary-fixed-variant: '#4f453c'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#fff8f5'
  on-background: '#201b16'
  surface-variant: '#ece0d8'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a warm, human-centric workspace for administrative dashboards, business operations, and content management. Built around the principles of warm minimalism, it replaces sterile cool grays and aggressive saturated highlights with a calm, tactile palette derived from unbleached linen, warm ivory, soft sand, and golden ochre.

The emotional goal is clarity, composure, and effortless utility. Users handling complex workflows should experience a tranquil, distraction-free environment that reduces fatigue over long sessions. Every interface element is deliberate and understated, favoring generous breathable margins, soft rounded edges, and high-legibility typographic hierarchies over visual gimmicks.

Key stylistic pillars:
- **Calm Warmth**: Soft cream, ivory, and sand canvas surfaces that feel organic and inviting.
- **Pure Functional Simplicity**: Unadorned structural containers, low-friction forms, and obvious affordances designed for operators and non-technical teams.
- **Refined Restraint**: Controlled color application where warm amber and ochre are reserved strictly for calls-to-action, active statuses, and meaningful highlights.

## Colors

The palette is rooted in low-strain warm neutrals paired with an earthy, radiant amber core. 

- **Canvas & Background Surfaces**:
  - Base viewport: `#FAF8F5` (Soft Warm Cream)
  - Sub-navigation, sidebars, and nested wells: `#F4EFEA` (Sand Tone)
  - Inactive containers and hover states: `#EFE8DF` (Muted Ivory)
- **Container & Card Surfaces**:
  - Primary cards and panels: `#FFFFFF` with secondary variants utilizing `#FDFCFA` (Warm White) to establish crisp yet gentle separation against the sand canvas.
- **Typography & Ink**:
  - Primary text: `#2B2520` (Dark Warm Slate-Espresso) providing 14:1+ contrast against light surfaces without the stark harshness of pure black.
  - Secondary & supporting text: `#5C5248` (Muted Warm Slate) for metadata, labels, and secondary context.
  - Tertiary / Placeholder text: `#8C8176` (Warm Muted Stone).
- **Accents & Interaction**:
  - Primary action: `#C88A3E` (Rich Warm Ochre) for key buttons, selection rings, and toggles.
  - Hover / Interactive highlight: `#B45309` (Deep Ochre Amber) for active states.
  - Subtle interactive tint: `#FBF3E8` for subtle pill backgrounds, active row fills, and chips.
- **Borders & Dividers**:
  - Structural hairline borders: `#E7DFD5` (Soft Warm Border).

## Typography

The design system uses **Plus Jakarta Sans** across all roles to achieve a clean, modern, and friendly administrative presence. Its open apertures and balanced proportions maintain supreme legibility across dense data tables, forms, and analytical summaries.

- **Display & Headlines**: Used sparingly for overview screens, major metrics, and section titles. Rendered in semi-bold (`600`) and bold (`700`) weights with tight line heights to maintain visual cohesion.
- **Body Styles**: Tuned for high comfort during extended reading. Regular (`400`) weight handles table rows, descriptions, and help strings with loose line-heights for visual ease.
- **Labels & UI Controls**: Set with medium (`500`) and semi-bold (`600`) weights to provide crisp hierarchy in form field headers, badge chips, and navigation links.

## Layout & Spacing

The dashboard employs a flexible 12-column layout structured within an open, breathing container model:

- **Desktop (1024px and above)**: 12-column grid with `1.5rem` (`24px`) gutters and a minimum outer margin of `2rem` (`32px`). Sidebar navigation stays persistent at a fixed 260px width or collapses gracefully to an 80px icon tier. Main dashboard panels use generous inner padding (`space-lg` to `space-xl`) to prevent visual crowding.
- **Tablet (768px – 1023px)**: 8-column layout with `1rem` (`16px`) gutters. Sidebars fold into an accessible off-canvas drawer. Metric cards reflow into 2x2 grids.
- **Mobile (Below 768px)**: 4-column layout with `1rem` outer margins and `0.75rem` gutters. Multi-column forms collapse to single-column vertical stacks.

All interior component spacing follows the `0.25rem` (4px) base rhythm. Generous spacing around text and interactive elements ensures that non-technical users never feel overwhelmed by dense dashboard panels.

## Elevation & Depth

This system avoids dark or heavy drop shadows, instead using subtle tonal layers and faint, warm-tinted ambient glows:

- **Layer 0 (Canvas Base)**: The `#FAF8F5` surface rests at the bottom layer.
- **Layer 1 (Cards & Modules)**: Pure white (`#FFFFFF`) or `#FDFCFA` surfaces sitting directly atop the canvas, framed by a soft hairline border (`1px solid #E7DFD5`). A warm ambient drop shadow reinforces subtle physical separation: `0 1px 3px rgba(43, 37, 32, 0.04), 0 4px 12px rgba(43, 37, 32, 0.02)`.
- **Layer 2 (Floating Popovers, Menus & Dropdowns)**: Elevated panels receive a refined lift using `0 8px 24px rgba(43, 37, 32, 0.07), 0 2px 6px rgba(43, 37, 32, 0.03)` with the same hairline border `#E7DFD5`.
- **Layer 3 (Modals & Sheets)**: Highest elevation accompanied by a warm-tinted translucent backdrop: `rgba(43, 37, 32, 0.25)` overlaid with a subtle 2px blur.

## Shapes

The design system adopts a roundedness factor of `2` to balance contemporary SaaS efficiency with approachable softness:

- **Small Components (Buttons, Inputs, Badges)**: Feature standard corners (`0.5rem` / `8px`) that feel friendly and tactile under hand or cursor.
- **Cards & Data Panels**: Use `rounded-lg` (`1rem` / `16px`) to soften visual contours and delineate content blocks naturally.
- **Modal Dialogs & Large Drawers**: Employ `rounded-xl` (`1.5rem` / `24px`) to reinforce focus and containment.
- **Status Pills & Avatars**: Styled with full pill roundedness (`9999px`) to create clear geometric contrast against rectangular content blocks.

## Components

### Buttons
- **Primary**: Background `#C88A3E`, text `#FFFFFF`, font-weight `600`, radius `0.5rem`. Hover transitions to `#B45309`. Focus ring: `2px solid #C88A3E` with an offset of `2px`.
- **Secondary**: Surface `#FFFFFF`, border `1px solid #E7DFD5`, text `#2B2520`. Hover shifts background to `#F4EFEA`.
- **Ghost**: Transparent background, text `#5C5248`. Hover shifts background to `#F4EFEA` and text to `#2B2520`.

### Input Fields & Controls
- **Text Inputs**: Height of 40px (or 44px for touch). Background `#FFFFFF`, border `1px solid #E7DFD5`, radius `0.5rem`, text `#2B2520`, placeholder `#8C8176`. On focus: border shifts to `#C88A3E` with a subtle amber focus ring (`0 0 0 3px rgba(200, 138, 62, 0.15)`).
- **Checkboxes & Radios**: Size 18px. Unchecked uses `#FFFFFF` fill with `#E7DFD5` border. Checked uses `#C88A3E` fill with a white checkmark or center pip.

### Chips & Badges
- **Status Badges**: Pill-shaped (`rounded-full`), height 24px, inner padding `0.25rem 0.75rem`. Neutral badges use `#F4EFEA` fill with `#5C5248` text. Active/Amber badges use `#FBF3E8` fill with `#B45309` text.

### Cards & Panels
- Constructed with `#FFFFFF` background, `1px solid #E7DFD5` border, and `rounded-lg` (16px) corners. Header areas include clear titles with optional secondary action buttons, partitioned from the body by a soft divider line (`#E7DFD5`).

### Data Tables
- Header row uses `#F4EFEA` or clean `#FAF8F5` with `label-md` uppercase styling (`#5C5248`). Table cells maintain comfortable vertical padding (`14px` top/bottom). Subtle bottom borders (`1px solid #F4EFEA`) create clean division without visual clutter. Row hover state: `#FAF8F5`.