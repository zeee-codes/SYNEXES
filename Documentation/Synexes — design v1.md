# Synexes — design.md v1.0

## Purpose & Audience

[design.md](http://design.md) is the **implementable specification** of the Synexes design system.

It is written for:

- Product designers (Figma library authors)
- Frontend and design engineers (Next.js, Tailwind, Framer Motion, Radix, shadcn/ui)
- AI coding agents generating or modifying UI
- External contractors

It defines every token, scale, and component contract. Ambiguity is a bug in this document. If a value is missing, the answer is: **add it here first, then build**.

[design.md](http://design.md) does not override `philosophy.md` or `brand.md`. Where they conflict, philosophy wins, then brand, then design.

---

## How to Use This Document

- **Designers:** every color, size, radius, or motion value in Figma must map to a token defined here.
- **Engineers:** every CSS value must reference a token via CSS variable or Tailwind class mapped to a token. No hardcoded values.
- **AI agents:** you may only use tokens, variants, and component APIs defined in this document. If a design requires a value that does not exist here, stop and request an addition to the token registry.

---

## Scope

### v1 (current)

- Web app only (Next.js).
- Light + dark theme.
- Core component set + Synexes-specific components.

### Non-goals for v1

- Native iOS/Android component specs (deferred to mobile phase).
- Density modes (Comfortable / Compact) — planned, not v1.
- RTL layout support — planned, not v1.
- Localization typography rules — planned, not v1.

---

# Foundations

## Color System

Colors live at three levels:

1. **Global (raw palette)** — hex values. Never used directly in components.
2. **Semantic (intent)** — e.g. `text.primary`, `surface.canvas`. Used by components.
3. **Component** — e.g. `button.primary.bg`. Used only when semantic tokens are insufficient.

### Global — Brand Green (matte, muted, dark)

| Token | Hex | Usage |
| --- | --- | --- |
| `green.50` | `#EEF6F1` | Tint backgrounds |
| `green.100` | `#D6E9DE` | Soft surfaces |
| `green.200` | `#AFD4BF` | Hover tints |
| `green.300` | `#82BA9C` | Illustrations |
| `green.400` | `#57A07C` | Secondary accents |
| `green.500` | `#3A7A5C` | **Primary brand green** |
| `green.600` | `#2E6249` | Pressed / focused brand |
| `green.700` | `#244D39` | Emphasis text on light |
| `green.800` | `#1B3A2C` | Dark-mode brand surfaces |
| `green.900` | `#12271E` | Deep contrast |

### Global — Neutral (slate/stone)

| Token | Hex |
| --- | --- |
| `neutral.0` | `#FFFFFF` |
| `neutral.50` | `#F7F7F6` |
| `neutral.100` | `#EEEEEC` |
| `neutral.200` | `#DDDDD9` |
| `neutral.300` | `#C4C4BF` |
| `neutral.400` | `#A0A099` |
| `neutral.500` | `#7A7A73` |
| `neutral.600` | `#565651` |
| `neutral.700` | `#3D3D39` |
| `neutral.800` | `#262623` |
| `neutral.900` | `#161614` |
| `neutral.1000` | `#0A0A09` |

### Global — AI Accent

Used **exclusively** for AI-generated content, suggestions, and reasoning surfaces.

| Token | Hex |
| --- | --- |
| `ai.50` | `#EEF0FB` |
| `ai.100` | `#DCE0F7` |
| `ai.300` | `#9AA4EA` |
| `ai.500` | `#6B72D8` |
| `ai.700` | `#3E45A6` |
| `ai.900` | `#1E2266` |

### Global — Intent

| Token | Hex |
| --- | --- |
| `success.500` | `#3A7A5C` (aligned with brand) |
| `warning.500` | `#C48A2C` |
| `danger.500` | `#B94A3E` |
| `info.500` | `#3A6BB0` |

Each intent has a `50 / 100 / 500 / 700 / 900` ramp mirroring the brand ramp structure.

### Semantic tokens — Light theme

| Token | Value |
| --- | --- |
| `surface.canvas` | `neutral.50` |
| `surface.primary` | `neutral.0` |
| `surface.secondary` | `neutral.100` |
| `surface.raised` | `neutral.0` |
| `surface.overlay` | `neutral.0` |
| `text.primary` | `neutral.900` |
| `text.secondary` | `neutral.600` |
| `text.tertiary` | `neutral.500` |
| `text.inverse` | `neutral.0` |
| `text.brand` | `green.700` |
| `text.ai` | `ai.700` |
| `border.subtle` | `neutral.200` |
| `border.default` | `neutral.300` |
| `border.strong` | `neutral.500` |
| `border.focus` | `green.500` |
| `intent.success` | `success.500` |
| `intent.warning` | `warning.500` |
| `intent.danger` | `danger.500` |
| `intent.info` | `info.500` |

### Semantic tokens — Dark theme

| Token | Value |
| --- | --- |
| `surface.canvas` | `neutral.1000` |
| `surface.primary` | `neutral.900` |
| `surface.secondary` | `neutral.800` |
| `surface.raised` | `neutral.800` |
| `surface.overlay` | `neutral.700` |
| `text.primary` | `neutral.50` |
| `text.secondary` | `neutral.300` |
| `text.tertiary` | `neutral.400` |
| `text.inverse` | `neutral.900` |
| `text.brand` | `green.300` |
| `border.subtle` | `neutral.800` |
| `border.default` | `neutral.700` |
| `border.strong` | `neutral.500` |
| `border.focus` | `green.400` |

**Dark mode elevation rule:** rely on **tonal lightening** of surfaces before shadows. Shadows in dark mode are softer and rarely exceed `elevation.2`.

### Contrast requirements

- Body text on surface: **≥ 4.5:1**
- Large text (≥ 20px bold or ≥ 24px regular): **≥ 3:1**
- UI components and focus indicators: **≥ 3:1**
- All token pairings above are verified to meet these thresholds.

---

## Typography

**Font family:** SF Pro

- Product UI: `SF Pro Text` (13–20px), `SF Pro Display` (≥ 24px)
- Fallback stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, system-ui, sans-serif`
- Monospace: `SF Mono, ui-monospace, Menlo, monospace`

**Numerals:** use **tabular numerals** by default for:

- All medical data (dosages, readings, dates, times)
- Tables and lists containing numeric values
- Timeline dates

Enable via `font-variant-numeric: tabular-nums;` on numeric containers or a `.tabular` utility class. Proportional numerals are only used in headings and body prose where numbers are incidental.

### Type scale

| Token | Size / Line-height | Weight | Tracking |
| --- | --- | --- | --- |
| `display.lg` | 48 / 56 | 600 | -0.02em |
| `display.md` | 40 / 48 | 600 | -0.02em |
| `display.sm` | 32 / 40 | 600 | -0.015em |
| `heading.lg` | 24 / 32 | 600 | -0.01em |
| `heading.md` | 20 / 28 | 600 | -0.005em |
| `heading.sm` | 18 / 26 | 600 | 0 |
| `body.lg` | 17 / 26 | 400 | 0 |
| `body.md` | 15 / 24 | 400 | 0 |
| `body.sm` | 13 / 20 | 400 | 0 |
| `caption` | 12 / 16 | 500 | 0.01em |
| `mono.md` | 14 / 20 | 400 | 0 |
- **Default body:** `body.md`.
- **Default product heading:** `heading.md`.

### Typography rules

- Never use font weights below 400 for body text.
- Never use font sizes below 12px in the product.
- Line length target: **60–75 characters** for prose.
- Truncation: single-line uses ellipsis; multi-line uses `-webkit-line-clamp`.
- Never use uppercase for body content. `text-transform: uppercase` is permitted only for `caption` labels.

---

## Spacing

Base unit: **4px**. Rhythm: **8px**. Every spacing value must be a multiple of 4.

| Token | px |
| --- | --- |
| `space.0` | 0 |
| `space.0.5` | 2 |
| `space.1` | 4 |
| `space.2` | 8 |
| `space.3` | 12 |
| `space.4` | 16 |
| `space.5` | 20 |
| `space.6` | 24 |
| `space.8` | 32 |
| `space.10` | 40 |
| `space.12` | 48 |
| `space.16` | 64 |
| `space.20` | 80 |
| `space.24` | 96 |
- `space.0.5` (2px) is permitted only for optical adjustments (e.g. inline icon nudges).
- Default component internal padding: `space.3` (12px) or `space.4` (16px).
- Default page gutter: `space.8` (32px) desktop, `space.4` (16px) mobile.

---

## Radius

**Default:** 10px (`radius.md`). Applied to buttons, inputs, cards, and most controls.

| Token | px | Usage |
| --- | --- | --- |
| `radius.sm` | 6 | Chips, checkboxes, small badges |
| `radius.md` | 10 | **Default** — buttons, inputs, cards |
| `radius.lg` | 14 | Large cards, sheets, panels |
| `radius.xl` | 20 | Modals, drawers |
| `radius.full` | 9999 | Avatars, pills, circular icon buttons |
- Never invent radii between tokens.
- Nested radii: inner radius = outer radius − inner padding (rounded to nearest token).

---

## Elevation & Shadows

Elevation is a **surface concept**, not decoration.

| Token | Light theme | Dark theme |
| --- | --- | --- |
| `elevation.0` | none | none |
| `elevation.1` | `0 1px 2px rgba(0,0,0,0.04), 0 1px 1px rgba(0,0,0,0.03)` | tonal + `0 1px 2px rgba(0,0,0,0.40)` |
| `elevation.2` | `0 2px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` | tonal + `0 2px 4px rgba(0,0,0,0.45)` |
| `elevation.3` | `0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)` | tonal + `0 4px 12px rgba(0,0,0,0.50)` |
| `elevation.4` | `0 12px 32px rgba(0,0,0,0.12)` | tonal + `0 12px 32px rgba(0,0,0,0.55)` |

**Usage:**

- `elevation.1`: cards resting on canvas.
- `elevation.2`: dropdowns, popovers.
- `elevation.3`: drawers, floating panels.
- `elevation.4`: modals, dialogs.

**Rules:**

- Shadows never communicate state. They only indicate elevation.
- Borders may accompany shadows in dark mode for surface separation.

---

## Borders

| Token | Value |
| --- | --- |
| `border.width.hairline` | 1px |
| `border.width.default` | 1px |
| `border.width.strong` | 2px |
| `border.style` | solid |

Border colors are semantic (see color tokens above).

---

# Motion Tokens

### Duration

| Token | ms |
| --- | --- |
| `duration.instant` | 80 |
| `duration.fast` | 150 |
| `duration.standard` | 320 |
| `duration.slow` | 480 |

### Easing

| Token | cubic-bezier |
| --- | --- |
| `ease.standard` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `ease.entrance` | `cubic-bezier(0, 0, 0.2, 1)` |
| `ease.exit` | `cubic-bezier(0.4, 0, 1, 1)` |
| `ease.buttery` | `cubic-bezier(0.32, 0.72, 0, 1)` |
| `ease.snappy` | `cubic-bezier(0.2, 0.9, 0.1, 1)` |

### Framer Motion spring presets

| Token | Config |
| --- | --- |
| `spring.gentle` | `{ type: "spring", stiffness: 170, damping: 26 }` |
| `spring.standard` | `{ type: "spring", stiffness: 260, damping: 28 }` |
| `spring.snappy` | `{ type: "spring", stiffness: 380, damping: 30 }` |

### Motion recipes

| Interaction | Duration | Easing |
| --- | --- | --- |
| Button press | 80ms | `ease.snappy` |
| Hover elevation | 150ms | `ease.standard` |
| Focus ring appear | 150ms | `ease.entrance` |
| Dropdown open | 180ms | `ease.entrance` |
| Modal open | 240ms | `ease.buttery` |
| Modal close | 180ms | `ease.exit` |
| Toast in | 240ms | `spring.gentle` |
| Success confirm | 200ms | `spring.snappy` |
| Skeleton pulse | 1200ms | `ease.standard`, infinite |
| Page transition | 320ms | `ease.buttery` |

### Reduced motion policy

When `prefers-reduced-motion: reduce`:

- Replace translate/scale with opacity fades of the same duration.
- Remove all springs (use `duration.fast` linear opacity).
- Keep focus and state feedback — never remove it entirely.
- Never disable loading skeletons; they remain (but do not pulse).

---

# Layout System

### Breakpoints

| Name | min width | Tailwind |
| --- | --- | --- |
| Mobile | 0 | (default) |
| Small Tablet | 640 | `sm` |
| Tablet | 768 | `md` |
| Laptop | 1024 | `lg` |
| Desktop | 1280 | `xl` |
| Large Desktop | 1536 | `2xl` |

### Grid

- **12 columns** on Laptop and above.
- **8 columns** on Tablet.
- **4 columns** on Mobile.
- Gutter: `space.6` (24px) desktop, `space.4` (16px) tablet, `space.3` (12px) mobile.
- Max content width: **1280px** for app pages, **1120px** for reading contexts.

### Page templates (v1)

1. **App Shell** — sidebar + content.
2. **Timeline View** — full-bleed chronological stream.
3. **Health Tree / Graph View** — full-canvas visualization.
4. **Detail View** — record or event detail with side panel.
5. **Settings** — two-column form layout.
6. **Shared Portal (external)** — minimal, branded, read-only view for doctors.

Each template will get a dedicated spec section in v1.1.

### Responsive rules (v1, web only)

- Sidebar collapses to icon rail below Laptop.
- Below Small Tablet, primary navigation moves to a bottom bar.
- Modals become full-screen sheets below Small Tablet.
- Tables switch to card lists below Tablet.

---

# Component System

## Global component contract

Every component must document:

1. **Purpose** — one sentence.
2. **Anatomy** — labeled parts / slots.
3. **Props API** — variants, sizes, states.
4. **States** — default, hover, focus, active, disabled, loading, error, success (where applicable).
5. **Tokens used** — explicit list.
6. **Motion** — which motion recipes apply.
7. **Accessibility** — role, keyboard, ARIA, screen reader behavior.
8. **Do / Don't** — at least three of each.
9. **Edge cases** — empty, long text, error, offline.

## Component API pattern

All React components follow:

```tsx
<Component
  variant="primary" | "secondary" | "ghost" | "danger"
  size="sm" | "md" | "lg"
  state="default" | "loading" | "disabled"
  {...ariaProps}
/>
```

- No boolean-per-variant props (`isPrimary`, `isDanger`) — use `variant`.
- Sizes are always `sm | md | lg` unless component semantics require otherwise.
- All interactive components accept standard HTML props and forward refs.

## Core inventory (v1 build order)

**Priority 1 (build first):**

1. Button, IconButton
2. TextField, Textarea, NumberField
3. Select, Combobox
4. Checkbox, Radio, Switch
5. Dialog / Modal, Drawer
6. Toast, Alert
7. Card, Panel
8. Tabs
9. Menu (dropdown), Popover, Tooltip
10. Skeleton
11. Badge, StatusBadge
12. Avatar
13. Divider

**Priority 2:**

- Table, DataTable, ListView
- Breadcrumbs, Pagination
- Command Palette
- Accordion
- Empty State, Error State
- Upload / File Attachment

**Priority 3 (Synexes-specific):**

- Medical Timeline
- Timeline Event, Timeline Group
- Health Record Card
- Medical Event Card
- Health Tree / Graph View
- Family Profile Switcher
- Share Link Dialog
- AI Insight Panel, AI Chat, AI Suggestion, AI Summary
- Provenance chip

## AI component conventions

Every AI-generated surface must include:

- **Source chip** — link to origin (uploaded file, doctor note, patient entry).
- **Confidence indicator** — high / medium / low. Never a raw percentage in patient view.
- **"AI generated" label** — visible, using `text.ai` and the AI accent.
- **Feedback affordance** — thumbs-up/down or "flag" for correctness.

---

# Accessibility (WCAG 2.2 AA)

### Baseline requirements

- All targets meet **4.5:1** text contrast, **3:1** UI contrast.
- Focus indicators: **2px** outline in `border.focus`, offset **2px**, never obscured (WCAG 2.4.11 / 2.4.12).
- Touch targets: minimum **44 × 44px**, preferred **48 × 48px**, with **8px** minimum spacing between adjacent targets.
- Keyboard: every interactive element reachable and operable via keyboard.
- Screen reader: every interactive element has accessible name, role, and state.
- Motion: `prefers-reduced-motion` respected per policy above.

### Component patterns (WAI-ARIA APG references)

- **Dialog:** `role="dialog"`, focus trap, `Esc` closes, focus returned to trigger.
- **Menu:** `role="menu"`, arrow-key navigation, `Esc` closes, first-letter jump.
- **Combobox:** WAI-ARIA 1.2 combobox pattern.
- **Tabs:** `role="tablist"`, arrow-key navigation, `Home`/`End` supported.
- **Toast:** `role="status"` (non-critical) or `role="alert"` (critical). Auto-dismiss disabled for critical.

### Forms

- Every field has a visible label.
- Errors are announced via `aria-live="polite"` and referenced by `aria-describedby`.
- Required fields indicated with both label and `aria-required`.
- Validation on blur for individual fields, on submit for the form.

### Content accessibility

- Headings follow logical order (no skipped levels).
- Link text is meaningful (`View report`, not `click here`).
- Medical abbreviations use `<abbr>` with full form on hover/focus.
- Numbers always include units (`120 mg`, not `120`).

### Testing

- Automated: `axe-core` in CI on every PR.
- Manual: keyboard-only pass, VoiceOver + NVDA pass, 400% zoom pass, Windows High Contrast pass.

---

# Engineering Integration

### Stack (v1)

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (mapped to tokens) + CSS variables for theme
- **Component base:** Radix Primitives + shadcn/ui, restyled to Synexes tokens
- **Motion:** Framer Motion
- **Icons:** Lucide (default), custom Synexes icons where needed
- **Forms:** React Hook Form + Zod
- **Testing:** Vitest + Playwright + axe-core

### Token pipeline

- Tokens authored in a single JSON source of truth: `/tokens/synexes.tokens.json`.
- Format: W3C Design Tokens Community Group format.
- Build: Style Dictionary generates
    - `tokens.css` (CSS custom properties, per theme)
    - `tokens.ts` (TypeScript exports)
    - `tailwind.tokens.ts` (Tailwind theme extension)
    - `tokens.figma.json` (Figma Variables import)
- CI validates JSON schema and contrast ratios.

### CSS variable convention

- All tokens exposed as CSS variables under `:root` and `[data-theme="dark"]`.
- Naming: `--sx-{category}-{purpose}-{scale}` e.g. `--sx-color-text-primary`, `--sx-space-4`.
- Tailwind classes reference variables through mapped utilities (`text-primary`, `bg-surface-primary`). Raw arbitrary values (`text-[color:#XYZ]`) are forbidden.

### Theming

- Theme switched via `data-theme="light" | "dark"` on `<html>`.
- Runtime switching is instant (no animation) to avoid accessibility issues.
- User preference stored per account. Defaults to system preference.

### Tailwind mapping

Tailwind's `theme.extend` is generated from tokens. Manual overrides are forbidden. If a value is needed, add it to `synexes.tokens.json` first.

### Lint & enforcement

- ESLint rule: no hex, hsl, or rgb literals in JSX/CSS (except in token files).
- Stylelint rule: no `!important`, no magic numbers, no hardcoded spacing.
- CI blocks PRs that introduce raw values.

---

# AI Agent Rules

AI coding agents generating Synexes UI must:

1. **Only use approved tokens** from the token registry.
2. **Only use approved components and variants** from the component inventory.
3. **Never invent** colors, sizes, radii, durations, or component APIs.
4. **Respect accessibility requirements** for every generated component.
5. **Propose additions** to `design.md` instead of silently adding one-off values.
6. **Cite the token** used for each visual property in comments or metadata when generating code.
7. **Fail loudly** if a required token or component does not exist — do not fall back to hardcoded values.

---

# Governance

### Versioning

[design.md](http://design.md) follows Semantic Versioning:

- **Major:** breaking visual, token, or interaction changes (renames, removals).
- **Minor:** additive tokens, components, or patterns.
- **Patch:** fixes that do not change the public API.

### Change process

1. RFC in `/design-system/rfcs/`.
2. Impact review across affected surfaces.
3. Token/component changes land behind a version bump.
4. Migration guide required for any Major change.
5. Deprecation window: **2 minor versions** before removal.
6. Decision Log entry on every merge.

### Component maturity

- **Alpha:** experimental, subject to change, opt-in only.
- **Beta:** usable in production, API may change.
- **Stable:** guaranteed API, follows versioning.
- **Deprecated:** replaced, removal date announced.

### Decision Log

Every change records:

- Date
- Decision
- Rationale
- Alternatives considered
- Impact
- Author
- Version

---

## What's Next (v1.1 targets)

1. Individual component specs (Priority 1) with full contracts.
2. Timeline system spec (grouping, density, provenance, editing).
3. Health Tree / Graph View spec.
4. AI pattern language (citations, confidence, feedback loops).
5. Density modes (Comfortable / Compact).
6. Mobile-first component adaptations ahead of the native app phase.